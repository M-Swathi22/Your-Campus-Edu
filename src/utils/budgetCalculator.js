/**
 * budgetCalculator.js
 * Prompt builder, local pre-calculators, and formatting helpers.
 */

import { DESTINATIONS, CURRENCY, LOAN_OPTIONS, COURSE_TYPES } from "../data/budgetData";

/* ─── Format currency ─── */
export function formatCurrency(amount, destKey = "India") {
  const cur = CURRENCY[destKey] || CURRENCY.India;
  return `${cur.symbol}${Number(amount).toLocaleString("en-IN")}`;
}

/* ─── Convert to INR ─── */
export function toINR(amount, destKey) {
  const rate = CURRENCY[destKey]?.toINR || 1;
  return Math.round(amount * rate);
}

/* ─── Get course duration ─── */
export function getCourseDuration(courseType) {
  const match = COURSE_TYPES.find((c) => c.value === courseType);
  return match?.duration || 3;
}

/* ─── Local quick estimate (used for pre-check / hero preview) ─── */
export function quickEstimate(destination, studyLevel, courseType) {
  const dest = DESTINATIONS[destination];
  if (!dest) return null;
  const costs = dest.costs[studyLevel] || dest.costs.UG;
  const duration = getCourseDuration(courseType);
  const cur = CURRENCY[destination] || CURRENCY.India;

  const tuitionMid   = (costs.tuitionMin + costs.tuitionMax) / 2;
  const livingMid    = (costs.livingMin + costs.livingMax) / 2;
  const foodMid      = (costs.foodMin + costs.foodMax) / 2;
  const transportMid = ((costs.transportMin || 0) + (costs.transportMax || 0)) / 2;
  const miscMid      = ((costs.miscMin || 0) + (costs.miscMax || 0)) / 2;
  const yearlyTotal  = tuitionMid + livingMid + foodMid + transportMid + miscMid;

  return {
    perYear:    Math.round(yearlyTotal),
    total:      Math.round(yearlyTotal * duration),
    currency:   cur.symbol,
    perYearINR: toINR(yearlyTotal, destination),
    totalINR:   toINR(yearlyTotal * duration, destination),
    duration,
  };
}

/* ─── Budget fitness check ─── */
export function checkBudgetFit(annualBudgetINR, destination, studyLevel) {
  const dest = DESTINATIONS[destination];
  if (!dest) return "SHORT";
  const costs = dest.costs[studyLevel] || dest.costs.UG;
  const minTotal = toINR(
    costs.tuitionMin + costs.livingMin + (costs.foodMin || 0),
    destination
  );
  const midTotal = toINR(
    (costs.tuitionMin + costs.tuitionMax) / 2 +
    (costs.livingMin + costs.livingMax) / 2 +
    ((costs.foodMin + costs.foodMax) || 0) / 2,
    destination
  );
  if (annualBudgetINR >= midTotal) return "COMFORTABLE";
  if (annualBudgetINR >= minTotal) return "STRETCHED";
  return "SHORT";
}

/* ─── Compact destination data for prompt ─── */
function formatDestForPrompt(key) {
  const d = DESTINATIONS[key];
  if (!d) return "";
  const ug = d.costs.UG || {};
  const pg = d.costs.PG || {};
  const cur = CURRENCY[key];
  return `${d.label} (${d.flag}):
  UG Tuition: ${cur.symbol}${ug.tuitionMin?.toLocaleString()}–${cur.symbol}${ug.tuitionMax?.toLocaleString()}/yr
  PG Tuition: ${cur.symbol}${pg.tuitionMin?.toLocaleString()}–${cur.symbol}${pg.tuitionMax?.toLocaleString()}/yr
  Living: ${cur.symbol}${ug.livingMin?.toLocaleString()}–${cur.symbol}${ug.livingMax?.toLocaleString()}/yr
  Visa: ${d.visaType || "Not required"} (${cur.symbol}${d.visaCost || 0})
  Work rights: ${d.workPermit}
  Scholarships: ${d.scholarships?.join(", ")}
  Note: ${d.notes}`;
}

/* ─── Loan data for prompt ─── */
function formatLoanData(destinations) {
  return destinations
    .map((dest) => {
      const l = LOAN_OPTIONS[dest];
      if (!l) return "";
      return `${dest}: Max ₹${(l.maxLoan / 100000).toFixed(0)} Lakh | Rate ${l.interestRate} | Moratorium: ${l.moratorium} | Lenders: ${l.providers.join(", ")}`;
    })
    .join("\n");
}

/* ─── Master AI prompt builder ─── */
export function buildBudgetPrompt(formData) {
  const {
    destination,
    studyLevel,
    courseType,
    annualBudget,
    budgetCurrency,
    familyIncome,
    loanWillingness,
    scholarshipInterest,
    workPartTime,
    savingsForStudy,
    priorities,
    extraInfo,
  } = formData;

  const isMultiDest = Array.isArray(destination) ? destination : [destination];
  const destData = isMultiDest.map(formatDestForPrompt).join("\n\n");
  const loanData = formatLoanData(isMultiDest);

  // Convert budget to INR for comparison
  const budgetINR = budgetCurrency === "INR"
    ? parseFloat(annualBudget)
    : toINR(parseFloat(annualBudget), destination[0] || "India");

  return `You are a senior Indian overseas education financial counsellor with 15 years of experience helping families plan study-abroad budgets.

STUDENT / FAMILY FINANCIAL PROFILE:
- Study Destination(s): ${isMultiDest.join(", ")}
- Study Level: ${studyLevel}
- Course / Field: ${courseType}
- Annual Budget Available: ${budgetCurrency} ${Number(annualBudget).toLocaleString()} (≈ ₹${budgetINR.toLocaleString()} INR)
- Family Annual Income: ${familyIncome || "Not provided"}
- Savings earmarked for study: ${savingsForStudy || "Not specified"}
- Open to education loan: ${loanWillingness}
- Scholarship interest: ${scholarshipInterest}
- Will work part-time abroad: ${workPartTime}
- Budget priorities: ${priorities?.join(", ") || "Not specified"}
- Extra context: ${extraInfo || "None"}

DESTINATION COST DATA:
${destData}

EDUCATION LOAN OPTIONS (India-based lenders):
${loanData}

TASK:
Provide a comprehensive, personalised budget analysis. Be specific — use actual numbers from the cost data. Calculate realistic totals. Identify gaps and funding strategies.

Return ONLY valid raw JSON (no markdown, no code fences):
{
  "budgetFit": "COMFORTABLE" | "STRETCHED" | "SHORT",
  "overallScore": <integer 0–100 representing how well the budget fits>,
  "summary": "<3-sentence personalised summary with actual figures>",
  "totalCostEstimate": {
    "perYear": <number in destination currency>,
    "perYearINR": <number in INR>,
    "totalDuration": <number — course duration in years>,
    "grandTotal": <number in destination currency>,
    "grandTotalINR": <number in INR>,
    "currency": "<currency symbol>",
    "currencyCode": "<ISO code>"
  },
  "costBreakdown": [
    { "category": "Tuition", "minAmount": <number>, "maxAmount": <number>, "typicalAmount": <number>, "currency": "<symbol>", "note": "<1 sentence>" },
    { "category": "Accommodation & Living", "minAmount": <number>, "maxAmount": <number>, "typicalAmount": <number>, "currency": "<symbol>", "note": "<1 sentence>" },
    { "category": "Food & Groceries", "minAmount": <number>, "maxAmount": <number>, "typicalAmount": <number>, "currency": "<symbol>", "note": "<1 sentence>" },
    { "category": "Transport", "minAmount": <number>, "maxAmount": <number>, "typicalAmount": <number>, "currency": "<symbol>", "note": "<1 sentence>" },
    { "category": "Books & Supplies", "minAmount": <number>, "maxAmount": <number>, "typicalAmount": <number>, "currency": "<symbol>", "note": "<1 sentence>" },
    { "category": "Health Insurance", "minAmount": <number>, "maxAmount": <number>, "typicalAmount": <number>, "currency": "<symbol>", "note": "<1 sentence>" },
    { "category": "Visa & Travel", "minAmount": <number>, "maxAmount": <number>, "typicalAmount": <number>, "currency": "<symbol>", "note": "<1 sentence>" },
    { "category": "Miscellaneous", "minAmount": <number>, "maxAmount": <number>, "typicalAmount": <number>, "currency": "<symbol>", "note": "<1 sentence>" }
  ],
  "fundingPlan": {
    "budgetCovered": <number 0–100 — % of typical cost covered by stated budget>,
    "gap": <number in INR — shortfall if any, else 0>,
    "recommendedLoan": <number in INR — suggested loan amount>,
    "loanEMIEstimate": "<estimated monthly EMI post-study in INR>",
    "lenders": ["<lender 1>", "<lender 2>"],
    "scholarshipPotential": "<1-2 sentences on realistic scholarship chances>",
    "partTimeEarnings": "<estimated monthly part-time earnings in destination currency if workPartTime is Yes>"
  },
  "destinationComparison": [
    {
      "destination": "<destination name>",
      "flag": "<emoji>",
      "totalCostINR": <number — grand total in INR>,
      "budgetFit": "COMFORTABLE" | "STRETCHED" | "SHORT",
      "pros": ["<pro 1>", "<pro 2>"],
      "cons": ["<con 1>"],
      "verdict": "<1-sentence personalised verdict for this student>"
    }
  ],
  "savingTips": [
    { "tip": "<short title>", "detail": "<1-2 sentence actionable tip>", "potentialSaving": "<estimated saving in dest currency/year>" }
  ],
  "nextSteps": [
    { "step": "<action title>", "detail": "<1-2 sentence detail>" }
  ]
}`;
}