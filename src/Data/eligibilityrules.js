/**
 * eligibilityrules.js
 * Source of truth for all eligibility criteria used in the AI prompt
 * and for any local pre-validation before the AI call.
 */

/* ─── DOMESTIC (India) ─── */
export const DOMESTIC_RULES = {
  Medical: {
    label: "Medical (MBBS / BDS / BAMS / BHMS / BVSc / BNYS / BSMS / BUMS)",
    stream: ["Science (Biology)"],
    minPercentage: 50,
    entranceExams: ["NEET-UG"],
    subjects: ["Physics", "Chemistry", "Biology"],
    ageMin: 17,
    notes: "NEET-UG is mandatory. 50% aggregate in PCB for General; 40% for SC/ST/OBC.",
  },
  Nursing: {
    label: "Nursing (B.Sc Nursing / GNM)",
    stream: ["Science (Biology)"],
    minPercentage: 45,
    entranceExams: ["State Nursing Entrance / Merit-based"],
    subjects: ["Physics", "Chemistry", "Biology"],
    ageMin: 17,
    notes: "Most colleges require PCB with at least 45%. GNM accepts Biology students.",
  },
  Paramedical: {
    label: "Paramedical / Allied Health Science",
    stream: ["Science (Biology)", "Science (Maths)"],
    minPercentage: 45,
    entranceExams: ["AIAPGET", "State-level entrance / Merit-based"],
    subjects: ["Physics", "Chemistry", "Biology"],
    ageMin: 17,
    notes: "Specific courses like Cardiac Technology may require PCB. Optometry accepts PCM.",
  },
  Pharmacy: {
    label: "Pharmacy (B.Pharm / D.Pharm / Pharm.D)",
    stream: ["Science (Biology)", "Science (Maths)"],
    minPercentage: 45,
    entranceExams: ["GPAT (for M.Pharm)", "State-level / NIPER JEE"],
    subjects: ["Physics", "Chemistry", "Biology / Maths"],
    ageMin: 17,
    notes: "D.Pharm accepts PCB or PCM. GPAT required for PG pharmacy.",
  },
  Engineering: {
    label: "Engineering (B.E. / B.Tech)",
    stream: ["Science (Maths)"],
    minPercentage: 45,
    entranceExams: ["JEE Main", "JEE Advanced", "State CETs (TNEA, MHT-CET, KEAM…)"],
    subjects: ["Physics", "Chemistry", "Mathematics"],
    ageMin: 17,
    notes: "PCM mandatory. JEE Main for NITs; JEE Advanced for IITs. State CETs for state colleges.",
  },
  Law: {
    label: "Law (BA LLB / BBA LLB / B.Com LLB / LLB)",
    stream: ["Science (Biology)", "Science (Maths)", "Commerce", "Arts & Humanities"],
    minPercentage: 45,
    entranceExams: ["CLAT", "AILET", "LSAT India", "State Law Entrance"],
    subjects: ["Any stream"],
    ageMin: 17,
    notes: "Integrated 5-year: Class 12 any stream. Standalone LLB: Graduation required.",
  },
  Management: {
    label: "Management (BBA / MBA)",
    stream: ["Science (Biology)", "Science (Maths)", "Commerce", "Arts & Humanities"],
    minPercentage: 50,
    entranceExams: ["CAT / MAT / XAT (MBA)", "IPMAT (IIM BBA)", "SET / DU JAT"],
    subjects: ["Any stream"],
    ageMin: 17,
    notes: "BBA: Any stream with 50%. MBA: Graduation + CAT/MAT score.",
  },
  ArtsScience: {
    label: "Arts & Science (B.Sc / BCA / BBA / B.Com)",
    stream: ["Science (Biology)", "Science (Maths)", "Commerce", "Arts & Humanities"],
    minPercentage: 40,
    entranceExams: ["Mostly merit-based", "CUET for central universities"],
    subjects: ["Relevant to chosen course"],
    ageMin: 17,
    notes: "CUET score required for DU, BHU, JNU and other central universities.",
  },
  ComputerScience: {
    label: "Computer Science / IT",
    stream: ["Science (Maths)", "Computer Science"],
    minPercentage: 45,
    entranceExams: ["JEE Main", "CUET", "State Counselling"],
    subjects: ["Mathematics"],
  },
};

/* ─── ABROAD eligibility tiers ───
   Country lists, flags, tuition, intakes, and visa data all live in
   countryDetails.js — that file is the single source of truth for
   *which* countries are shown. This file only owns the academic
   eligibility thresholds, grouped into the same four tiers already
   implied by each country's description/tagline in countryDetails.js:
   Established / No-tuition / Budget / Niche. Matching is done by
   scanning that description text, so adding or editing a country in
   countryDetails.js automatically slots it into the right tier here —
   no need to keep two country lists in sync by hand.
*/
export const ABROAD_TIERS = {
  ESTABLISHED: {
    key: "ESTABLISHED",
    match: "well-established higher-education system",
    ugRequirements: {
      minPercentage: 70,
      englishTests: ["IELTS (6.0–6.5+)", "TOEFL (80+)"],
      aptitudeTests: ["None typically", "Programme-specific entrance test for Medicine/Law"],
      extras: ["Statement of Purpose", "Reference Letter", "Transcripts"],
    },
    pgRequirements: {
      minPercentage: 55,
      englishTests: ["IELTS (6.5–7.0+)", "TOEFL (88+)"],
      aptitudeTests: ["GMAT (600+) for MBA"],
      extras: ["SOP", "Academic References", "Resume / CV"],
    },
  },
  NO_TUITION: {
    key: "NO_TUITION",
    match: "little to no tuition",
    ugRequirements: {
      minPercentage: 60,
      englishTests: ["IELTS (6.0+)", "Local-language B2/C1 for local-taught courses"],
      aptitudeTests: ["None typically"],
      extras: ["Proof of Funds / Blocked Account", "Country-specific recognition certificate (e.g. APS for Germany)"],
    },
    pgRequirements: {
      minPercentage: 55,
      englishTests: ["IELTS (6.5+)", "Local-language B2+"],
      aptitudeTests: ["GRE optional"],
      extras: ["Proof of Funds / Blocked Account", "SOP"],
    },
  },
  BUDGET: {
    key: "BUDGET",
    match: "cost-effective entry point",
    ugRequirements: {
      minPercentage: 55,
      englishTests: ["IELTS (6.0+)", "TOEFL (70+)"],
      aptitudeTests: ["None typically"],
      extras: ["SOP", "Transcripts"],
    },
    pgRequirements: {
      minPercentage: 50,
      englishTests: ["IELTS (6.0–6.5+)", "TOEFL (75+)"],
      aptitudeTests: ["None typically"],
      extras: ["SOP", "LORs"],
    },
  },
  NICHE: {
    key: "NICHE",
    match: "very small higher-education market",
    ugRequirements: {
      minPercentage: 50,
      englishTests: ["IELTS (6.0+) — programme dependent"],
      aptitudeTests: ["Contact advisor — limited programmes"],
      extras: ["Contact advisor for current requirements"],
    },
    pgRequirements: {
      minPercentage: 50,
      englishTests: ["IELTS (6.0+) — programme dependent"],
      aptitudeTests: ["Contact advisor — limited programmes"],
      extras: ["Contact advisor for current requirements"],
    },
  },
};

/* Detects which tier a country belongs to, using its description
   in countryDetails.js. Defaults to BUDGET (the most common tier)
   if nothing matches. */
export function getAbroadTier(country) {
  if (!country) return ABROAD_TIERS.BUDGET;
  const desc = (country.description || "").toLowerCase();
  const tier = Object.values(ABROAD_TIERS).find((t) => desc.includes(t.match));
  return tier || ABROAD_TIERS.BUDGET;
}

/* Returns the UG or PG requirement band for a given country object
   (as found in countryDetails.js) and study level. */
export function getAbroadRequirements(country, studyLevel) {
  const tier = getAbroadTier(country);
  return studyLevel === "PG" || studyLevel === "PhD" ? tier.pgRequirements : tier.ugRequirements;
}

/* ─── Course-specific eligibility quick map (used in AI prompt) ─── */
export const COURSE_ELIGIBILITY_MAP = [
  { course: "MBBS", stream: "Science (Biology)", minPct: 50, exam: "NEET-UG", country: "India" },
  { course: "BDS", stream: "Science (Biology)", minPct: 50, exam: "NEET-UG", country: "India" },
  { course: "B.Tech / BE", stream: "Science (Maths)", minPct: 45, exam: "JEE Main / State CET", country: "India" },
  { course: "LLB (5-yr)", stream: "Any", minPct: 45, exam: "CLAT / AILET", country: "India" },
  { course: "MBA", stream: "Graduation", minPct: 50, exam: "CAT / MAT / XAT", country: "India" },
  { course: "B.Sc Nursing", stream: "Science (Biology)", minPct: 45, exam: "State Entrance / Merit", country: "India" },
  { course: "B.Pharm", stream: "Science (Biology/Maths)", minPct: 45, exam: "State Pharmacy CET", country: "India" },
  { course: "BBA", stream: "Any", minPct: 50, exam: "IPMAT / DU JAT / SET", country: "India" },
  { course: "B.Sc (Allied Health)", stream: "Science (Biology)", minPct: 45, exam: "Merit-based", country: "India" },
];

/* ─── Verdict tiers ─── */
export const VERDICT_TIERS = {
  ELIGIBLE: {
    key: "ELIGIBLE",
    label: "Fully Eligible",
    color: "var(--accent-green)",
    bg: "rgba(49,185,120,0.08)",
    border: "rgba(49,185,120,0.25)",
    icon: "✓",
  },
  CONDITIONAL: {
    key: "CONDITIONAL",
    label: "Conditionally Eligible",
    color: "var(--warning)",
    bg: "rgba(248,148,31,0.08)",
    border: "rgba(248,148,31,0.25)",
    icon: "⚡",
  },
  INELIGIBLE: {
    key: "INELIGIBLE",
    label: "Currently Ineligible",
    color: "var(--danger)",
    bg: "rgba(255,0,3,0.06)",
    border: "rgba(255,0,3,0.2)",
    icon: "✕",
  },
};