/**
 * eligibilityCalculator.js
 * Pre-validation helpers + AI prompt builder for the Eligibility Checker.
 * These run BEFORE the AI call to catch obvious mismatches early.
 */

import { DOMESTIC_RULES, VERDICT_TIERS, getAbroadRequirements } from "../Data/eligibilityrules";
import countryDetails from "../Data/countrydetails";

/* ─── Quick local pre-check (catches hard blocks before API call) ─── */
export function quickPreCheck(formData) {
  const { type, stream, percentage, courseCategory } = formData;
  const errors = [];
  const warnings = [];

  const pct = parseFloat(percentage);
  if (isNaN(pct) || pct < 0 || pct > 100) {
    errors.push("Please enter a valid percentage between 0 and 100.");
  }

  if (type === "domestic" && courseCategory) {
    const rule = DOMESTIC_RULES[courseCategory];
    if (rule) {
      if (rule.stream.length > 0 && !rule.stream.includes(stream) && !rule.stream.includes("Any")) {
        errors.push(`${rule.label} requires ${rule.stream.join(" or ")} stream. You selected ${stream}.`);
      }
      if (pct < rule.minPercentage) {
        warnings.push(`Minimum ${rule.minPercentage}% required for ${rule.label}. You entered ${pct}%.`);
      }
    }
  }

  return { errors, warnings, passed: errors.length === 0 };
}

/* ─── Build compact domestic rules string for AI prompt ─── */
function formatDomesticRules() {
  return Object.entries(DOMESTIC_RULES)
    .map(([key, r]) =>
      `${r.label}:
  - Stream: ${r.stream.join(" or ")}
  - Min %: ${r.minPercentage}%
  - Entrance: ${r.entranceExams.join(", ")}
  - Subjects: ${r.subjects.join(", ")}
  - Note: ${r.notes}`
    )
    .join("\n\n");
}

/* ─── Build abroad rules string for AI prompt ─── */
function formatAbroadRules(destinationId, studyLevel) {
  const country = countryDetails[destinationId];
  if (!country) return "No rules found for this destination.";

  const req = getAbroadRequirements(country, studyLevel);

  return `${country.name} (${country.flag}):
  - Min Percentage: ${req.minPercentage}%
  - English Tests: ${req.englishTests.join(", ")}
  - Aptitude Tests: ${req.aptitudeTests.join(", ")}
  - Extras Required: ${req.extras.join(", ")}
  - Avg Tuition: ${country.quickStats.avgTuition}
  - Intakes: ${country.quickStats.popularIntake}
  - Duration: ${country.duration}
  - Note: ${country.description}`;
}

/* ─── Master AI prompt builder ─── */
export function buildEligibilityPrompt(formData) {
  const {
    type, // "domestic" | "abroad"
    // Domestic fields
    stream, percentage, courseCategory, hasEntrance, entranceScore, extraInfo,
    // Abroad fields
    destination, studyLevel, gapYear, englishScore, englishTest,
    aptitudeScore, aptitudeTest, backlog, workExperience,
  } = formData;

  const isDomestic = type === "domestic";
  const abroadCountry = countryDetails[destination];

  const studentProfile = isDomestic
    ? `STUDENT PROFILE (India / Domestic):
- Academic Stream: ${stream}
- Class 12 Percentage: ${percentage}%
- Target Course Category: ${DOMESTIC_RULES[courseCategory]?.label || courseCategory}
- Has given entrance exam: ${hasEntrance}
- Entrance score/rank: ${entranceScore || "Not given yet"}
- Extra context: ${extraInfo || "None"}`
    : `STUDENT PROFILE (Study Abroad):
- Study Level: ${studyLevel}
- Stream / Background: ${stream}
- Academic Percentage / CGPA: ${percentage}
- Destination Country: ${abroadCountry?.name || destination}
- English Proficiency Test: ${englishTest || "Not yet taken"} — Score: ${englishScore || "N/A"}
- Aptitude Test: ${aptitudeTest || "Not yet taken"} — Score: ${aptitudeScore || "N/A"}
- Gap Year(s): ${gapYear || "None"}
- Active Backlogs: ${backlog || "None"}
- Work Experience: ${workExperience || "None"}
- Extra context: ${extraInfo || "None"}`;

  const rules = isDomestic
    ? `DOMESTIC ELIGIBILITY RULES:\n${formatDomesticRules()}`
    : `ABROAD ELIGIBILITY RULES FOR ${abroadCountry?.name?.toUpperCase() || destination}:\n${formatAbroadRules(destination, studyLevel)}`;

  return `You are a senior Indian education counsellor with 15 years of experience assessing student eligibility for Indian and international universities.

${studentProfile}

${rules}

TASK:
Evaluate this student's eligibility and return a precise, personalised assessment. For each criterion, check whether the student meets it, conditionally meets it, or fails it. Be specific — mention the student's actual scores, gaps, and what they need to do.

Return ONLY valid raw JSON (no markdown, no code fences, no preamble):
{
  "verdict": "ELIGIBLE" | "CONDITIONAL" | "INELIGIBLE",
  "overallScore": <integer 0–100 representing overall eligibility strength>,
  "summary": "<2-3 sentence personalised overall assessment mentioning their actual stats>",
  "primaryCategory": "<strongest matching category or destination>",
  "criteria": [
    {
      "label": "<criterion name, e.g. Stream Requirement, Minimum Percentage, NEET Score>",
      "status": "MET" | "PARTIAL" | "NOT_MET" | "NOT_REQUIRED",
      "studentValue": "<what the student has>",
      "requiredValue": "<what is needed>",
      "note": "<1 sentence specific actionable comment>"
    }
  ],
  "strengths": ["<specific strength tied to their profile>", ...],
  "gaps": ["<specific gap with what they need to close it>", ...],
  "nextSteps": [
    {
      "step": "<short action title>",
      "detail": "<1-2 sentence actionable detail>"
    }
  ],
  "alternativePaths": [
    {
      "name": "<alternative course or destination>",
      "reason": "<why this suits them as an alternative>"
    }
  ]
}`;
}

/* ─── Verdict tier helper ─── */
export function getVerdictTier(verdictKey) {
  return VERDICT_TIERS[verdictKey] || VERDICT_TIERS.CONDITIONAL;
}

/* ─── Local (non-AI) eligibility calculation ─── */
export function calculateEligibility(formData) {
  return formData.type === "abroad"
    ? calculateAbroadEligibility(formData)
    : calculateDomesticEligibility(formData);
}

function calculateDomesticEligibility(formData) {
  const { stream, percentage, courseCategory } = formData;

  const rule = DOMESTIC_RULES[courseCategory];

  if (!rule) {
    return {
      verdict: "CONDITIONAL",
      overallScore: 60,
      summary: "No matching rule found.",
      primaryCategory: "General",
      criteria: [],
      strengths: [],
      gaps: [],
      nextSteps: [],
      alternativePaths: [],
    };
  }

  const pct = Number(percentage);

  let score = 50;

  if (rule.stream.includes("Any") || rule.stream.includes(stream)) {
    score += 25;
  }

  if (pct >= rule.minPercentage) {
    score += 25;
  }

  let verdict = "INELIGIBLE";

  if (score >= 90) {
    verdict = "ELIGIBLE";
  } else if (score >= 70) {
    verdict = "CONDITIONAL";
  }

  return {
    verdict,
    overallScore: score,
    summary: `Based on your ${stream} background and ${pct}% marks, you are ${verdict.toLowerCase()} for ${rule.label}.`,
    primaryCategory: rule.label,

    criteria: [
      {
        label: "Academic Stream",
        status: "MET",
        studentValue: stream,
        requiredValue: rule.stream.join(", "),
        note: "Stream requirement checked.",
      },
      {
        label: "Percentage",
        status: pct >= rule.minPercentage ? "MET" : "NOT_MET",
        studentValue: `${pct}%`,
        requiredValue: `${rule.minPercentage}%`,
        note: "Percentage requirement checked.",
      },
    ],

    strengths: ["Profile matches basic requirements"],

    gaps: pct < rule.minPercentage ? [`Need minimum ${rule.minPercentage}%`] : [],

    nextSteps: [
      {
        step: "Apply",
        detail: "Check college-specific admission requirements.",
      },
    ],

    alternativePaths: [],
  };
}

function calculateAbroadEligibility(formData) {
  const { destination, studyLevel, percentage, englishTest, aptitudeTest } = formData;
  const country = countryDetails[destination];

  if (!country) {
    return {
      verdict: "CONDITIONAL",
      overallScore: 60,
      summary: "No matching rule found for this destination.",
      primaryCategory: "General",
      criteria: [],
      strengths: [],
      gaps: [],
      nextSteps: [],
      alternativePaths: [],
    };
  }

  const req = getAbroadRequirements(country, studyLevel);
  const pct = Number(percentage);
  const hasEnglish = englishTest && englishTest !== "Not taken";
  const hasAptitude = aptitudeTest && aptitudeTest !== "Not taken";

  let score = 40;
  if (pct >= req.minPercentage) score += 30;
  if (hasEnglish) score += 20;
  if (hasAptitude) score += 10;

  let verdict = "INELIGIBLE";
  if (score >= 85) verdict = "ELIGIBLE";
  else if (score >= 60) verdict = "CONDITIONAL";

  const gaps = [];
  if (pct < req.minPercentage) {
    gaps.push(`Need a minimum of ${req.minPercentage}% for most ${country.name} programmes at this level.`);
  }
  if (!hasEnglish) {
    gaps.push(`An English proficiency test (${req.englishTests[0]}) is expected for ${country.name}.`);
  }

  return {
    verdict,
    overallScore: score,
    summary: `Based on your ${pct}% and ${englishTest || "no"} English test score, you are ${verdict.toLowerCase()} for ${country.name}.`,
    primaryCategory: `${country.flag} ${country.name}`,

    criteria: [
      {
        label: "Minimum Percentage",
        status: pct >= req.minPercentage ? "MET" : "NOT_MET",
        studentValue: `${pct}%`,
        requiredValue: `${req.minPercentage}%`,
        note: `Typical entry threshold for ${country.name} at ${studyLevel} level.`,
      },
      {
        label: "English Proficiency",
        status: hasEnglish ? "MET" : "NOT_MET",
        studentValue: englishTest || "Not taken",
        requiredValue: req.englishTests[0],
        note: "Most universities require a recognised English test score.",
      },
      {
        label: "Aptitude Test",
        status: hasAptitude ? "MET" : "NOT_REQUIRED",
        studentValue: aptitudeTest || "Not taken",
        requiredValue: req.aptitudeTests[0],
        note: "Only required for specific programmes (e.g. MBA, Medicine).",
      },
    ],

    strengths: pct >= req.minPercentage ? [`Meets the minimum academic percentage for ${country.name}`] : [],

    gaps,

    nextSteps: [
      {
        step: "Shortlist universities",
        detail: `Compare ${country.name} universities within your budget (avg. ${country.quickStats.avgTuition}).`,
      },
      {
        step: "Plan your intake",
        detail: `Popular intakes for ${country.name} are ${country.quickStats.popularIntake}.`,
      },
    ],

    alternativePaths: [],
  };
}