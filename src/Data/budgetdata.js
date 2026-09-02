// src/Data/budgetdata.js
/**
 * budgetData.js
 * Reference cost data for all study destinations.
 * Used by the AI prompt builder and by local pre-calculations.
 *
 * Destination list is now generated from countryDetails.js instead of
 * being hardcoded here — so adding/removing a country on the Country
 * Details page automatically updates the Budget Planner too.
 */

// ⚠️ Adjust this path to wherever countryDetails.js actually lives
// (watch the Data/data casing mismatch mentioned above).
import countryDetails from "../Data/countrydetails";

/* ─────────────────────────────────────────────────────────────
   Countries excluded from the Budget Planner (per the note at the
   top of countryDetails.js — these have little/no real int'l
   student population and no meaningful cost data to estimate from).
   Remove an id from this list if you want it to appear as a
   destination option again.
───────────────────────────────────────────────────────────── */
const NICHE_IDS = ["andorra", "liechtenstein", "monaco", "sanmarino", "vaticancity"];

/* ─────────────────────────────────────────────────────────────
   Currency per country. Anything not listed here defaults to EUR.
   `toINR` values are approximate conversion rates — refine as needed.
───────────────────────────────────────────────────────────── */
const EUR_TO_INR = 90;

const CURRENCY_OVERRIDES = {
  unitedkingdom:        { code: "GBP", symbol: "£",    toINR: 106 },
  switzerland:          { code: "CHF", symbol: "CHF",  toINR: 95 },
  sweden:               { code: "SEK", symbol: "kr",   toINR: 7.8 },
  norway:               { code: "NOK", symbol: "kr",   toINR: 7.9 },
  denmark:              { code: "DKK", symbol: "kr",   toINR: 12.1 },
  iceland:              { code: "ISK", symbol: "kr",   toINR: 0.6 },
  russia:               { code: "RUB", symbol: "₽",    toINR: 0.9 },
  turkey:               { code: "TRY", symbol: "₺",    toINR: 2.4 },
  ukraine:              { code: "UAH", symbol: "₴",    toINR: 2.0 },
  belarus:              { code: "BYN", symbol: "Br",   toINR: 25.5 },
  armenia:              { code: "AMD", symbol: "֏",    toINR: 0.21 },
  azerbaijan:           { code: "AZN", symbol: "₼",    toINR: 48.8 },
  georgia:              { code: "GEL", symbol: "₾",    toINR: 30.5 },
  moldova:              { code: "MDL", symbol: "L",    toINR: 4.6 },
  albania:              { code: "ALL", symbol: "L",    toINR: 0.87 },
  bosniaandherzegovina: { code: "BAM", symbol: "KM",   toINR: 46 },
  northmacedonia:       { code: "MKD", symbol: "ден",  toINR: 1.46 },
  serbia:               { code: "RSD", symbol: "дин.", toINR: 0.77 },
  czechia:              { code: "CZK", symbol: "Kč",   toINR: 3.6 },
  hungary:              { code: "HUF", symbol: "Ft",   toINR: 0.23 },
  poland:               { code: "PLN", symbol: "zł",   toINR: 21 },
  romania:              { code: "RON", symbol: "lei",  toINR: 18 },
  bulgaria:             { code: "BGN", symbol: "лв",   toINR: 46 },
};

function currencyFor(id) {
  return CURRENCY_OVERRIDES[id] || { code: "EUR", symbol: "€", toINR: EUR_TO_INR };
}

/* ─────────────────────────────────────────────────────────────
   Parse the illustrative INR-Lakh strings countryDetails.js already
   stores (e.g. "₹4–14L /yr", "₹12–24L") into a numeric INR range.
   These are placeholder figures per that file's own header comment —
   swap in real sourced numbers whenever you have them, this parser
   will keep working either way.
───────────────────────────────────────────────────────────── */
function parseLakhRange(str) {
  if (!str) return null;
  const m = String(str).match(/₹\s*([\d.]+)\s*[–-]\s*([\d.]+)\s*L/i);
  if (!m) return null;
  return { min: parseFloat(m[1]) * 100000, max: parseFloat(m[2]) * 100000 };
}

/* ─────────────────────────────────────────────────────────────
   Build a full cost object (tuition/living/food/transport/books/misc)
   for a country, using its existing quickStats.avgTuition (per-year
   tuition) and avgCost (rough total incl. living) as the source
   numbers, converted into local currency.
───────────────────────────────────────────────────────────── */
function buildCosts(country) {
  const cur = currencyFor(country.id);

  const tuitionINR = parseLakhRange(country.quickStats?.avgTuition) || { min: 400000, max: 1400000 };
  const totalINR   = parseLakhRange(country.avgCost) || { min: 1200000, max: 2400000 };

  // Living costs ≈ total - tuition, floored so it's never absurdly small
  const livingMinINR = Math.max(totalINR.min - tuitionINR.min, tuitionINR.min * 0.5);
  const livingMaxINR = Math.max(totalINR.max - tuitionINR.max, tuitionINR.max * 0.5);

  const toLocal = (inr) => Math.round(inr / cur.toINR);

  const tuitionMin = toLocal(tuitionINR.min);
  const tuitionMax = toLocal(tuitionINR.max);

  // Split "living" into accommodation / food / transport / books / misc
  // using rough proportions (55/22/9/5/9)
  const ug = {
    tuitionMin,
    tuitionMax,
    livingMin:    toLocal(livingMinINR * 0.55),
    livingMax:    toLocal(livingMaxINR * 0.55),
    foodMin:      toLocal(livingMinINR * 0.22),
    foodMax:      toLocal(livingMaxINR * 0.22),
    transportMin: toLocal(livingMinINR * 0.09),
    transportMax: toLocal(livingMaxINR * 0.09),
    booksMin:     toLocal(livingMinINR * 0.05),
    booksMax:     toLocal(livingMaxINR * 0.05),
    miscMin:      toLocal(livingMinINR * 0.09),
    miscMax:      toLocal(livingMaxINR * 0.09),
  };

  // PG tends to run slightly higher on tuition, living stays similar
  const pg = {
    ...ug,
    tuitionMin: Math.round(tuitionMin * 1.05),
    tuitionMax: Math.round(tuitionMax * 1.1),
  };

  return { UG: ug, PG: pg };
}

/* ─────────────────────────────────────────────────────────────
   India stays a hand-authored, special-cased entry — it's the
   domestic/origin option, not one of the study-abroad countries
   in countryDetails.js, and its real cost data was already accurate.
───────────────────────────────────────────────────────────── */
const INDIA_DOMESTIC = {
  flag: "🇮🇳",
  label: "India (Domestic)",
  description: "Study at top Indian institutions — affordable and competitive.",
  studyLevels: ["UG", "PG", "Diploma"],
  costs: {
    UG: {
      tuitionMin: 50000,   tuitionMax: 800000,
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
};

/* ─────────────────────────────────────────────────────────────
   Generate the rest of DESTINATIONS from countryDetails.js
───────────────────────────────────────────────────────────── */
const generatedDestinations = Object.values(countryDetails)
  .filter((c) => !NICHE_IDS.includes(c.id))
  .reduce((acc, c) => {
    acc[c.id] = {
      flag: c.flag,
      label: c.name,
      description: c.description,
      studyLevels: ["UG", "PG", "Diploma"],
      costs: buildCosts(c),
      scholarships: [
        `${c.name} Government / University Scholarships`,
        "Erasmus+ (EU-wide mobility grants)",
        "Institution merit awards",
      ],
      visaRequired: true,
      visaType: `${c.name} National / Schengen Student Visa`,
      visaCost: 80, // placeholder — refine per country when you have real fee data
      workPermit: "Typically 20 hrs/week during term — confirm local rules",
      notes: c.tagline,
      geoId: c.id, // links back to /study-destination/:id on the Country Details page
    };
    return acc;
  }, {});

export const DESTINATIONS = {
  India: INDIA_DOMESTIC,
  ...generatedDestinations,
};

/* ─── Currency map, keyed to match DESTINATIONS exactly ─── */
export const CURRENCY = Object.keys(DESTINATIONS).reduce((acc, key) => {
  acc[key] = key === "India" ? { code: "INR", symbol: "₹", toINR: 1 } : currencyFor(key);
  return acc;
}, {});

/* ─── Loan / financing options per destination ─── */
const LOAN_OVERRIDES = {
  germany:       { maxLoan: 3000000, interestRate: "8.5–11%", moratorium: "Course + 12 months", providers: ["SBI Scholar Loan", "Canara Bank", "HDFC Credila"] },
  ireland:       { maxLoan: 4000000, interestRate: "9–12%",   moratorium: "Course + 6 months",  providers: ["SBI Global Ed-Vantage", "Avanse", "Auxilo"] },
  unitedkingdom: { maxLoan: 6000000, interestRate: "9.5–12%", moratorium: "Course + 12 months", providers: ["SBI Global Ed-Vantage", "HDFC Credila", "Avanse"] },
};

const DEFAULT_LOAN = {
  maxLoan: 4000000,
  interestRate: "9–12%",
  moratorium: "Course + 6 months",
  providers: ["SBI Global Ed-Vantage", "HDFC Credila", "Avanse", "Auxilo"],
};

export const LOAN_OPTIONS = Object.keys(DESTINATIONS).reduce((acc, key) => {
  acc[key] = key === "India"
    ? { maxLoan: 1500000, interestRate: "8.5–10.5%", moratorium: "Course + 6 months", providers: ["SBI Scholar Loan", "Canara Bank Vidya", "Avanse", "Credila"] }
    : (LOAN_OVERRIDES[key] || DEFAULT_LOAN);
  return acc;
}, {});

/* ─── Course types with typical duration (unchanged) ─── */
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

/* ─── Budget fitness tiers (unchanged) ─── */
export const BUDGET_TIERS = {
  COMFORTABLE: { key: "COMFORTABLE", label: "Comfortable Fit",     color: "var(--accent-green)", bg: "rgba(49,185,120,0.08)",  border: "rgba(49,185,120,0.25)" },
  STRETCHED:   { key: "STRETCHED",   label: "Budget is Stretched", color: "var(--warning)",       bg: "rgba(248,148,31,0.08)", border: "rgba(248,148,31,0.25)" },
  SHORT:       { key: "SHORT",       label: "Budget is Short",     color: "var(--danger)",        bg: "rgba(255,0,3,0.06)",    border: "rgba(255,0,3,0.2)"    },
};