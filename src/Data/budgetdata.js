/**
 * budgetData.js
 * Reference cost data for all study destinations.
 * Used by the AI prompt builder and by local pre-calculations.
 */

/* ─── Currency helpers ─── */
export const CURRENCY = {
  India:       { code: "INR", symbol: "₹",   toINR: 1 },
  USA:         { code: "USD", symbol: "$",   toINR: 83 },
  UK:          { code: "GBP", symbol: "£",   toINR: 106 },
  Canada:      { code: "CAD", symbol: "C$",  toINR: 61 },
  Australia:   { code: "AUD", symbol: "A$",  toINR: 54 },
  Germany:     { code: "EUR", symbol: "€",   toINR: 90 },
  Ireland:     { code: "EUR", symbol: "€",   toINR: 90 },
  NewZealand:  { code: "NZD", symbol: "NZ$", toINR: 51 },
  Dubai:       { code: "AED", symbol: "AED", toINR: 22.6 },
};

/* ─── Destination data ─── */
export const DESTINATIONS = {
  India: {
    flag: "🇮🇳",
    label: "India (Domestic)",
    description: "Study at top Indian institutions — affordable and competitive.",
    studyLevels: ["UG", "PG", "Diploma"],
    costs: {
      UG: {
        tuitionMin: 50000,   tuitionMax: 800000,   // INR/year
        livingMin:  84000,   livingMax:  240000,
        foodMin:    36000,   foodMax:    84000,
        transportMin: 12000, transportMax: 36000,
        booksMin:   5000,    booksMax:    20000,
        miscMin:    12000,   miscMax:     48000,
      },
      PG: {
        tuitionMin: 60000,   tuitionMax: 1500000,
        livingMin:  96000,   livingMax:  300000,
        foodMin:    36000,   foodMax:    84000,
        transportMin: 12000, transportMax: 36000,
        booksMin:   5000,    booksMax:    20000,
        miscMin:    12000,   miscMax:     48000,
      },
    },
    scholarships: ["PM Scholarship", "State Merit Scholarships", "AICTE Pragati", "Institution-specific merit awards"],
    visaRequired: false,
    workPermit: "Campus jobs available in some institutions",
    notes: "Highly variable by institution type (government vs private) and city (metro vs tier-2).",
  },

  USA: {
    flag: "🇺🇸",
    label: "United States",
    description: "World-class universities with strong research and industry links.",
    studyLevels: ["UG", "PG"],
    costs: {
      UG: {
        tuitionMin: 15000,  tuitionMax: 55000,   // USD/year
        livingMin:  8000,   livingMax:  18000,
        foodMin:    3000,   foodMax:    6000,
        transportMin: 1200, transportMax: 3600,
        booksMin:   800,    booksMax:   1500,
        healthMin:  1500,   healthMax:  3000,
        miscMin:    1000,   miscMax:    3000,
      },
      PG: {
        tuitionMin: 18000,  tuitionMax: 60000,
        livingMin:  9000,   livingMax:  20000,
        foodMin:    3000,   foodMax:    6000,
        transportMin: 1200, transportMax: 3600,
        booksMin:   500,    booksMax:   1200,
        healthMin:  1500,   healthMax:  3000,
        miscMin:    1000,   miscMax:    3000,
      },
    },
    scholarships: ["Fulbright", "University merit awards", "TA/RA positions (PG)", "STEM OPT extension fellowships"],
    visaRequired: true,
    visaType: "F-1 Student Visa",
    visaCost: 185,
    workPermit: "20 hrs/week on-campus; OPT 12–36 months post-graduation",
    notes: "Community colleges offer affordable 2-year pathways. Public vs private tuition varies greatly.",
  },

  UK: {
    flag: "🇬🇧",
    label: "United Kingdom",
    description: "Shorter degree durations (3 years UG / 1 year PG) reduce total cost.",
    studyLevels: ["UG", "PG"],
    costs: {
      UG: {
        tuitionMin: 11000,  tuitionMax: 38000,   // GBP/year
        livingMin:  8000,   livingMax:  15000,
        foodMin:    2400,   foodMax:    5000,
        transportMin: 600,  transportMax: 1800,
        booksMin:   400,    booksMax:   800,
        healthMin:  470,    healthMax:  470,    // IHS fixed fee
        miscMin:    800,    miscMax:    2000,
      },
      PG: {
        tuitionMin: 12000,  tuitionMax: 38000,
        livingMin:  9000,   livingMax:  16000,
        foodMin:    2400,   foodMax:    5000,
        transportMin: 600,  transportMax: 1800,
        booksMin:   400,    booksMax:   800,
        healthMin:  470,    healthMax:  470,
        miscMin:    800,    miscMax:    2000,
      },
    },
    scholarships: ["Chevening", "Commonwealth", "GREAT Scholarships", "University Excellence Awards"],
    visaRequired: true,
    visaType: "UK Student Visa (Tier 4)",
    visaCost: 363,
    workPermit: "20 hrs/week during term; full-time during holidays; 2-year Graduate Route visa",
    notes: "Healthcare Surcharge (IHS) added annually. London costs significantly higher than other cities.",
  },

  Canada: {
    flag: "🇨🇦",
    label: "Canada",
    description: "Strong PR pathways post-study. Bilingual and multicultural.",
    studyLevels: ["UG", "PG", "Diploma"],
    costs: {
      UG: {
        tuitionMin: 18000,  tuitionMax: 40000,   // CAD/year
        livingMin:  10000,  livingMax:  20000,
        foodMin:    3600,   foodMax:    7200,
        transportMin: 1200, transportMax: 2400,
        booksMin:   500,    booksMax:   1200,
        healthMin:  600,    healthMax:  900,
        miscMin:    1000,   miscMax:    3000,
      },
      PG: {
        tuitionMin: 15000,  tuitionMax: 35000,
        livingMin:  10000,  livingMax:  20000,
        foodMin:    3600,   foodMax:    7200,
        transportMin: 1200, transportMax: 2400,
        booksMin:   500,    booksMax:   1000,
        healthMin:  600,    healthMax:  900,
        miscMin:    1000,   miscMax:    3000,
      },
    },
    scholarships: ["Vanier CGS", "Ontario Graduate Scholarship", "University entrance awards", "PGWP-linked bursaries"],
    visaRequired: true,
    visaType: "Canadian Study Permit",
    visaCost: 150,
    workPermit: "20 hrs/week off-campus; PGWP up to 3 years post-graduation",
    notes: "Proof of funds (CAD 10,000+ beyond first year) required for Study Permit.",
  },

  Australia: {
    flag: "🇦🇺",
    label: "Australia",
    description: "High quality of life. Strong healthcare and engineering sectors.",
    studyLevels: ["UG", "PG", "Diploma"],
    costs: {
      UG: {
        tuitionMin: 20000,  tuitionMax: 48000,   // AUD/year
        livingMin:  14000,  livingMax:  24000,
        foodMin:    4800,   foodMax:    8400,
        transportMin: 1200, transportMax: 3000,
        booksMin:   500,    booksMax:   1200,
        healthMin:  530,    healthMax:  530,    // OSHC ~fixed
        miscMin:    1200,   miscMax:    3600,
      },
      PG: {
        tuitionMin: 22000,  tuitionMax: 50000,
        livingMin:  14000,  livingMax:  25000,
        foodMin:    4800,   foodMax:    8400,
        transportMin: 1200, transportMax: 3000,
        booksMin:   400,    booksMax:   1000,
        healthMin:  530,    healthMax:  530,
        miscMin:    1200,   miscMax:    3600,
      },
    },
    scholarships: ["Australia Awards", "Destination Australia", "University Vice-Chancellor awards", "Research Training Program"],
    visaRequired: true,
    visaType: "Student Visa (Subclass 500)",
    visaCost: 650,
    workPermit: "48 hrs/fortnight during term; unlimited during breaks; 485 Graduate Visa 2–4 years",
    notes: "OSHC (Overseas Student Health Cover) mandatory. Living costs in Sydney/Melbourne are highest.",
  },

  Germany: {
    flag: "🇩🇪",
    label: "Germany",
    description: "Mostly tuition-free at public universities. Strong in engineering and sciences.",
    studyLevels: ["UG", "PG", "PhD"],
    costs: {
      UG: {
        tuitionMin: 0,      tuitionMax: 3000,    // EUR/year (semester fees)
        livingMin:  7200,   livingMax:  12000,
        foodMin:    2400,   foodMax:    4800,
        transportMin: 0,    transportMax: 600,   // often included in semester fee
        booksMin:   300,    booksMax:   800,
        healthMin:  1100,   healthMax:  1200,
        miscMin:    600,    miscMax:    1800,
        blockedAccountMin: 11208, blockedAccountMax: 11208,
      },
      PG: {
        tuitionMin: 0,      tuitionMax: 3000,
        livingMin:  7200,   livingMax:  13000,
        foodMin:    2400,   foodMax:    4800,
        transportMin: 0,    transportMax: 600,
        booksMin:   300,    booksMax:   800,
        healthMin:  1100,   healthMax:  1200,
        miscMin:    600,    miscMax:    1800,
        blockedAccountMin: 11208, blockedAccountMax: 11208,
      },
    },
    scholarships: ["DAAD (very competitive)", "Deutschlandstipendium", "Heinrich Böll Foundation", "Konrad-Adenauer-Stiftung"],
    visaRequired: true,
    visaType: "German Student Visa",
    visaCost: 75,
    workPermit: "120 full days or 240 half days per year",
    notes: "APS Certificate (₹18,000 + processing time) mandatory for Indian students. Blocked account of €11,208 required.",
  },

  Ireland: {
    flag: "🇮🇪",
    label: "Ireland",
    description: "English-speaking EU hub. Strong tech, pharma, and finance sectors.",
    studyLevels: ["UG", "PG"],
    costs: {
      UG: {
        tuitionMin: 9000,   tuitionMax: 25000,   // EUR/year
        livingMin:  7200,   livingMax:  14400,
        foodMin:    2400,   foodMax:    4800,
        transportMin: 600,  transportMax: 1800,
        booksMin:   300,    booksMax:   700,
        healthMin:  500,    healthMax:  700,
        miscMin:    600,    miscMax:    1800,
      },
      PG: {
        tuitionMin: 9000,   tuitionMax: 25000,
        livingMin:  8400,   livingMax:  15600,
        foodMin:    2400,   foodMax:    4800,
        transportMin: 600,  transportMax: 1800,
        booksMin:   300,    booksMax:   700,
        healthMin:  500,    healthMax:  700,
        miscMin:    600,    miscMax:    1800,
      },
    },
    scholarships: ["Government of Ireland IFI", "University entrance scholarships", "HEA grants"],
    visaRequired: true,
    visaType: "Irish Study Visa",
    visaCost: 60,
    workPermit: "20 hrs/week term-time; 40 hrs/week holidays; 2-year stay-back (Third Level Graduate Programme)",
    notes: "Dublin living costs are high. Consider universities in Cork, Galway, or Limerick for lower costs.",
  },

  NewZealand: {
    flag: "🇳🇿",
    label: "New Zealand",
    description: "Safe, scenic, and welcoming. Strong in agriculture, IT, and healthcare.",
    studyLevels: ["UG", "PG", "Diploma"],
    costs: {
      UG: {
        tuitionMin: 22000,  tuitionMax: 35000,   // NZD/year
        livingMin:  12000,  livingMax:  20000,
        foodMin:    4200,   foodMax:    7200,
        transportMin: 600,  transportMax: 1800,
        booksMin:   400,    booksMax:   1000,
        healthMin:  350,    healthMax:  700,
        miscMin:    1000,   miscMax:    2400,
      },
      PG: {
        tuitionMin: 22000,  tuitionMax: 38000,
        livingMin:  12000,  livingMax:  20000,
        foodMin:    4200,   foodMax:    7200,
        transportMin: 600,  transportMax: 1800,
        booksMin:   400,    booksMax:   1000,
        healthMin:  350,    healthMax:  700,
        miscMin:    1000,   miscMax:    2400,
      },
    },
    scholarships: ["NZ Excellence Awards", "University merit scholarships", "Aga Khan Foundation"],
    visaRequired: true,
    visaType: "Student Visa",
    visaCost: 330,
    workPermit: "20 hrs/week during term; full-time during scheduled breaks; 3-year open work visa post-graduation",
    notes: "Proof of NZD 15,000/year for living costs required for visa application.",
  },
};

/* ─── Course types with typical duration ─── */
export const COURSE_TYPES = [
  { label: "MBBS / Medical", value: "MBBS", duration: 5.5, field: "Medical" },
  { label: "B.Tech / Engineering", value: "BTech", duration: 4, field: "Engineering" },
  { label: "MBA", value: "MBA", duration: 2, field: "Management" },
  { label: "B.Sc Nursing", value: "BSc Nursing", duration: 4, field: "Healthcare" },
  { label: "BBA / BCA / B.Com", value: "BBA", duration: 3, field: "Business" },
  { label: "B.Sc (Science)", value: "BSc", duration: 3, field: "Science" },
  { label: "LLB / Law", value: "LLB", duration: 3, field: "Law" },
  { label: "M.Tech / MS", value: "MTech", duration: 2, field: "Engineering" },
  { label: "M.Sc", value: "MSc", duration: 2, field: "Science" },
  { label: "MCA", value: "MCA", duration: 2, field: "Technology" },
  { label: "PhD / Research", value: "PhD", duration: 4, field: "Research" },
  { label: "Diploma / Certificate", value: "Diploma", duration: 1, field: "Vocational" },
];

/* ─── Loan / financing options per destination ─── */
export const LOAN_OPTIONS = {
  India:      { maxLoan: 1500000,  interestRate: "8.5–10.5%", moratorium: "Course + 6 months", providers: ["SBI Scholar Loan", "Canara Bank Vidya", "Avanse", "Credila"] },
  USA:        { maxLoan: 7500000,  interestRate: "9.5–13%",   moratorium: "Course + 12 months", providers: ["HDFC Credila", "Avanse", "Auxilo", "MPOWER (USD)"] },
  UK:         { maxLoan: 6000000,  interestRate: "9.5–12%",   moratorium: "Course + 12 months", providers: ["SBI Global Ed-Vantage", "HDFC Credila", "Avanse"] },
  Canada:     { maxLoan: 6000000,  interestRate: "9–12%",     moratorium: "Course + 6 months",  providers: ["SBI Global Ed-Vantage", "Avanse", "Auxilo", "ICICI Bank"] },
  Australia:  { maxLoan: 6500000,  interestRate: "9–12.5%",   moratorium: "Course + 6 months",  providers: ["SBI Global Ed-Vantage", "HDFC Credila", "Axis Bank"] },
  Germany:    { maxLoan: 3000000,  interestRate: "8.5–11%",   moratorium: "Course + 12 months", providers: ["SBI Scholar Loan", "Canara Bank", "HDFC Credila"] },
  Ireland:    { maxLoan: 4000000,  interestRate: "9–12%",     moratorium: "Course + 6 months",  providers: ["SBI Global Ed-Vantage", "Avanse", "Auxilo"] },
  NewZealand: { maxLoan: 4000000,  interestRate: "9–12%",     moratorium: "Course + 6 months",  providers: ["SBI Global Ed-Vantage", "HDFC Credila", "Avanse"] },
};

/* ─── Budget fitness tiers ─── */
export const BUDGET_TIERS = {
  COMFORTABLE: { key: "COMFORTABLE", label: "Comfortable Fit",    color: "var(--accent-green)", bg: "rgba(49,185,120,0.08)",  border: "rgba(49,185,120,0.25)" },
  STRETCHED:   { key: "STRETCHED",   label: "Budget is Stretched", color: "var(--warning)",      bg: "rgba(248,148,31,0.08)", border: "rgba(248,148,31,0.25)" },
  SHORT:       { key: "SHORT",       label: "Budget is Short",     color: "var(--danger)",       bg: "rgba(255,0,3,0.06)",    border: "rgba(255,0,3,0.2)"    },
};