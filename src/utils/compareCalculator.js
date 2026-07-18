/**
 * compareCalculator.js
 * Prompt builder + helper utilities for the College Comparison tool.
 */
import { COLLEGE_TYPES, COMPARISON_PARAMS, COLLEGES } from "../Data/collegesData";

/* ─── Format a single college for the AI prompt ─── */
function formatCollegeForPrompt(college) {
  return `${college.name} (${college.flag} ${college.country} — ${college.city}):
  Type: ${college.type} | Established: ${college.establishedYear}
  Courses: ${college.courses.join(", ")}
  Total Program Fees: ₹${college.avgFeesINR.toLocaleString()} (₹${college.avgFeesPerYearINR.toLocaleString()}/yr)
  Ranking: NIRF #${college.ranking.nirf || "N/A"}, QS World #${college.ranking.qsWorld || "N/A"}
  Acceptance Rate: ${college.acceptanceRate}
  Student:Faculty Ratio: ${college.studentFacultyRatio}
  Placement Rate: ${college.placementRate}
  Avg Package: ₹${college.avgPackageLPA} LPA | Highest: ₹${college.highestPackageLPA} LPA
  Entrance Exam: ${college.entranceExam}
  Scholarships: ${college.scholarship}
  Campus: ${college.campusSize}, Hostel: ${college.hostelAvailable ? "Available" : "Not available"}`;
}

/* ─── Find colleges by name (fuzzy match against seed data) ─── */
export function findCollegeByName(name) {
  const lower = name.toLowerCase().trim();
  return COLLEGES.find(
    (c) => c.name.toLowerCase().includes(lower) || lower.includes(c.name.toLowerCase())
  );
}

/* ─── Get colleges for autocomplete suggestions ─── */
export function searchColleges(query) {
  if (!query || query.length < 2) return [];
  const lower = query.toLowerCase();
  return COLLEGES.filter(
    (c) =>
      c.name.toLowerCase().includes(lower) ||
      c.country.toLowerCase().includes(lower) ||
      c.city.toLowerCase().includes(lower)
  ).slice(0, 6);
}

/* ─── Filter colleges by country/field (used for "suggest colleges" mode) ─── */
export function filterColleges({ countries = [], fields = [] }) {
  return COLLEGES.filter((c) => {
    const countryMatch = countries.length === 0 || countries.includes(c.country);
    const fieldMatch = fields.length === 0 || c.courses.some((course) => fields.includes(course));
    return countryMatch && fieldMatch;
  });
}

/* ─── Master AI prompt builder ─── */
export function buildComparePrompt(formData) {
  const { mode, collegeNames, countries, fields, priorities, studentProfile, extraInfo } = formData;

  // Try to find matching seed data for named colleges
  const knownColleges = (collegeNames || [])
    .map((name) => findCollegeByName(name))
    .filter(Boolean);

  const knownDataBlock = knownColleges.length > 0
    ? `KNOWN DATA FOR SOME COLLEGES (use this as ground truth, supplement with your own knowledge for others):\n${knownColleges.map(formatCollegeForPrompt).join("\n\n")}`
    : "No exact matches found in our database — use your own knowledge to provide accurate, realistic data for these institutions.";

  const paramsList = COMPARISON_PARAMS.map((p) => `- ${p.label}`).join("\n");

  if (mode === "specific") {
    return `You are a senior international education counsellor with deep knowledge of global universities, rankings, fees, and placement outcomes.

TASK: Compare these specific colleges/universities requested by the student:
${(collegeNames || []).join(" vs ")}

${knownDataBlock}

STUDENT CONTEXT:
- Field of interest: ${studentProfile?.field || "Not specified"}
- Study level: ${studentProfile?.level || "Not specified"}
- Budget sensitivity: ${studentProfile?.budgetSensitivity || "Not specified"}
- Priorities (in order): ${priorities?.join(", ") || "Not specified"}
- Extra context: ${extraInfo || "None"}

COMPARISON PARAMETERS TO EVALUATE:
${paramsList}

Provide accurate, realistic, and well-researched data for EACH college on EVERY parameter. Use real-world rankings, fee ranges, and placement data to the best of your knowledge. Be honest about trade-offs — don't make every college sound equally good.

Return ONLY valid raw JSON (no markdown, no code fences):
{
  "summary": "<3-sentence overall comparison summary, mentioning the key trade-off between the colleges>",
  "recommendedCollege": "<name of the single best-fit college for this student's stated priorities>",
  "recommendationReason": "<2-sentence reason tied to their specific priorities>",
  "colleges": [
    {
      "name": "<college name>",
      "country": "<country>",
      "flag": "<emoji>",
      "city": "<city>",
      "overallScore": <integer 0-100, this college's fit score for THIS student>,
      "ranking": { "label": "<e.g. QS World #21 / NIRF #3>", "value": <number for sorting> },
      "fees": { "totalINR": <number>, "perYearINR": <number>, "label": "<formatted string e.g. ₹85L total>" },
      "placementRate": "<percentage or descriptive>",
      "avgPackageLPA": <number>,
      "highestPackageLPA": <number>,
      "acceptanceRate": "<percentage or descriptive>",
      "facultyRatio": "<e.g. 8:1>",
      "scholarships": "<short description>",
      "campusLife": "<1 sentence>",
      "pros": ["<pro 1>", "<pro 2>", "<pro 3>"],
      "cons": ["<con 1>", "<con 2>"],
      "bestFor": "<1 short phrase — what kind of student this suits best>"
    }
  ],
  "parameterWinners": [
    { "parameter": "<parameter name from the list above>", "winner": "<college name>", "reason": "<short reason>" }
  ],
  "verdict": "<3-4 sentence final personalised verdict for this specific student, referencing their priorities>"
}`;
  }

  // mode === "suggest" — student doesn't know which colleges, wants AI to suggest + compare
  return `You are a senior international education counsellor with deep knowledge of global universities.

TASK: The student doesn't have specific colleges in mind. Based on their profile, suggest and compare the TOP 4 best-fit colleges/universities.

STUDENT PROFILE:
- Field of interest: ${studentProfile?.field || "Not specified"}
- Study level: ${studentProfile?.level || "Not specified"}
- Preferred countries: ${countries?.join(", ") || "Open to any"}
- Budget sensitivity: ${studentProfile?.budgetSensitivity || "Not specified"}
- Priorities (in order): ${priorities?.join(", ") || "Not specified"}
- Extra context: ${extraInfo || "None"}

REFERENCE DATABASE (use as inspiration, also draw on your own broader knowledge):
${COLLEGES.filter((c) => fields?.length ? c.courses.some(course => fields.includes(course)) : true)
  .filter((c) => countries?.length ? countries.includes(c.country) : true)
  .map(formatCollegeForPrompt)
  .join("\n\n") || "No close matches in reference database — use general knowledge."}

COMPARISON PARAMETERS TO EVALUATE:
${paramsList}

Select the 4 best-fit real, well-known colleges/universities matching this student's field, country preference, and priorities. Provide accurate, realistic data.

Return ONLY valid raw JSON (no markdown, no code fences) in the EXACT same format as below:
{
  "summary": "<3-sentence summary of why these 4 colleges were chosen for this student>",
  "recommendedCollege": "<name of the single best-fit college>",
  "recommendationReason": "<2-sentence reason tied to their specific priorities>",
  "colleges": [
    {
      "name": "<college name>",
      "country": "<country>",
      "flag": "<emoji>",
      "city": "<city>",
      "overallScore": <integer 0-100>,
      "ranking": { "label": "<e.g. QS World #21>", "value": <number> },
      "fees": { "totalINR": <number>, "perYearINR": <number>, "label": "<formatted string>" },
      "placementRate": "<percentage>",
      "avgPackageLPA": <number>,
      "highestPackageLPA": <number>,
      "acceptanceRate": "<percentage>",
      "facultyRatio": "<e.g. 8:1>",
      "scholarships": "<short description>",
      "campusLife": "<1 sentence>",
      "pros": ["<pro 1>", "<pro 2>", "<pro 3>"],
      "cons": ["<con 1>", "<con 2>"],
      "bestFor": "<short phrase>"
    }
  ],
  "parameterWinners": [
    { "parameter": "<parameter name>", "winner": "<college name>", "reason": "<short reason>" }
  ],
  "verdict": "<3-4 sentence final personalised verdict>"
}`;
}