/**
 * eligibilityRules.js
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
}
};

/* ─── ABROAD Destinations ─── */
export const ABROAD_RULES = {
  USA: {
    label: "United States",
    flag: "🇺🇸",
    ugRequirements: {
      minPercentage: 75,
      englishTests: ["TOEFL (80+)", "IELTS (6.5+)", "Duolingo (105+)"],
      aptitudeTests: ["SAT (1100+)", "ACT (22+)"],
      extras: ["Essays / Personal Statement", "Letters of Recommendation", "Extracurriculars"],
    },
    pgRequirements: {
      minPercentage: 60,
      englishTests: ["TOEFL (90+)", "IELTS (7.0+)"],
      aptitudeTests: ["GRE (300+)", "GMAT (600+) for MBA"],
      extras: ["SOP", "LORs", "Resume / CV"],
    },
    avgTuition: "$25,000 – $55,000 / year",
    intakes: ["Fall (Sep)", "Spring (Jan)"],
    visaType: "F-1 Student Visa",
    notes: "Most selective universities use holistic admissions — grades alone aren't enough.",
  },
  UK: {
    label: "United Kingdom",
    flag: "🇬🇧",
    ugRequirements: {
      minPercentage: 70,
      englishTests: ["IELTS (6.0–6.5+)", "TOEFL (80+)"],
      aptitudeTests: ["None typically", "UCAT / BMAT for Medicine"],
      extras: ["UCAS Personal Statement", "Reference Letter"],
    },
    pgRequirements: {
      minPercentage: 55,
      englishTests: ["IELTS (6.5–7.0+)", "TOEFL (88+)"],
      aptitudeTests: ["GMAT (600+) for MBA"],
      extras: ["SOP", "Academic References"],
    },
    avgTuition: "£12,000 – £38,000 / year",
    intakes: ["September", "January (limited)"],
    visaType: "UK Student Visa (Tier 4)",
    notes: "3-year UG degrees. Russell Group unis are highly competitive.",
  },
  Canada: {
    label: "Canada",
    flag: "🇨🇦",
    ugRequirements: {
      minPercentage: 70,
      englishTests: ["IELTS (6.0+)", "TOEFL (80+)", "Duolingo (110+)"],
      aptitudeTests: ["None typically"],
      extras: ["Statement of Purpose", "Transcripts"],
    },
    pgRequirements: {
      minPercentage: 60,
      englishTests: ["IELTS (6.5+)", "TOEFL (90+)"],
      aptitudeTests: ["GRE / GMAT (program-dependent)"],
      extras: ["SOP", "LORs", "Research Proposal (for research programs)"],
    },
    avgTuition: "CAD 20,000 – 40,000 / year",
    intakes: ["September", "January", "May (some programs)"],
    visaType: "Canadian Study Permit",
    notes: "Post-graduation work permit (PGWP) up to 3 years. Strong PR pathway.",
  },
  Australia: {
    label: "Australia",
    flag: "🇦🇺",
    ugRequirements: {
      minPercentage: 65,
      englishTests: ["IELTS (6.0+)", "TOEFL (79+)", "PTE (58+)"],
      aptitudeTests: ["UMAT for Medicine / Dentistry"],
      extras: ["SOP", "Transcripts"],
    },
    pgRequirements: {
      minPercentage: 55,
      englishTests: ["IELTS (6.5+)", "TOEFL (84+)", "PTE (64+)"],
      aptitudeTests: ["GMAT for MBA (some unis)"],
      extras: ["SOP", "References"],
    },
    avgTuition: "AUD 22,000 – 45,000 / year",
    intakes: ["February", "July"],
    visaType: "Student Visa (Subclass 500)",
    notes: "485 Graduate visa allows 2–4 years post-study work rights.",
  },
  Germany: {
    label: "Germany",
    flag: "🇩🇪",
    ugRequirements: {
      minPercentage: 60,
      englishTests: ["IELTS (6.0+) or German B2/C1 for German-taught courses"],
      aptitudeTests: ["None typically", "TestAS recommended"],
      extras: ["APS Certificate (for Indian students)", "Blocked Account (€11,208)"],
    },
    pgRequirements: {
      minPercentage: 55,
      englishTests: ["IELTS (6.5+) or German B2+"],
      aptitudeTests: ["GRE optional"],
      extras: ["APS Certificate", "Blocked Account", "SOP"],
    },
    avgTuition: "€0 – €3,000 / year (most public unis free)",
    intakes: ["Winter (Oct)", "Summer (Apr)"],
    visaType: "German Student Visa",
    notes: "APS certificate is mandatory for Indian students. Mostly free public universities.",
  },
  Ireland: {
    label: "Ireland",
    flag: "🇮🇪",
    ugRequirements: {
      minPercentage: 65,
      englishTests: ["IELTS (6.0+)", "TOEFL (80+)"],
      aptitudeTests: ["None typically"],
      extras: ["SOP", "Transcripts"],
    },
    pgRequirements: {
      minPercentage: 55,
      englishTests: ["IELTS (6.5+)", "TOEFL (88+)"],
      aptitudeTests: ["GMAT for MBA"],
      extras: ["SOP", "LORs"],
    },
    avgTuition: "€10,000 – €25,000 / year",
    intakes: ["September", "January (limited)"],
    visaType: "Irish Study Visa",
    notes: "2-year stay-back option post-graduation. Tech hub for EU access.",
  },
  NewZealand: {
    label: "New Zealand",
    flag: "🇳🇿",
    ugRequirements: {
      minPercentage: 60,
      englishTests: ["IELTS (6.0+)", "TOEFL (80+)", "PTE (50+)"],
      aptitudeTests: ["None typically"],
      extras: ["SOP", "Transcripts"],
    },
    pgRequirements: {
      minPercentage: 55,
      englishTests: ["IELTS (6.5+)", "TOEFL (90+)"],
      aptitudeTests: ["GMAT optional"],
      extras: ["SOP", "References"],
    },
    avgTuition: "NZD 22,000 – 35,000 / year",
    intakes: ["February", "July"],
    visaType: "Student Visa",
    notes: "3-year open work visa post-graduation for most degrees.",
  },
};

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