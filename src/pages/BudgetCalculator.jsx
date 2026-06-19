import { useState, useRef } from "react";
import {
  quickEstimate,
  checkBudgetFit,
} from "../utils/budgetCalculator";

import BudgetHero    from "../components/budget-calculator/BudgetHero";
import BudgetForm    from "../components/budget-calculator/BudgetForm";
import BudgetResult  from "../components/budget-calculator/BudgetResult";
import BudgetCTA     from "../components/budget-calculator/BudgetCTA";
import { BudgetLoading, EmptyState } from "../components/budget-calculator/BudgetLoading";

/* ─── Page ─── */
export default function BudgetCalculator() {
  const [result, setResult]       = useState(null);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const [hasResult, setHasResult] = useState(false);

  const resultRef = useRef(null);

  const handleSubmit = (formData) => {
    // Basic validation
    if (!formData.destination?.length) {
      setError("Please select at least one destination.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setHasResult(false);

    try {
      const estimate = quickEstimate(
  formData.destination[0],
  formData.studyLevel,
  formData.courseType
);

const fit = checkBudgetFit(
  Number(formData.annualBudget),
  formData.destination[0],
  formData.studyLevel
);

const data = {
  budgetFit: fit,

  overallScore:
    fit === "COMFORTABLE"
      ? 90
      : fit === "STRETCHED"
      ? 70
      : 45,

  summary: `Estimated study cost for ${formData.destination[0]} is approximately ₹${estimate.totalINR.toLocaleString()}.`,

  totalCostEstimate: {
    perYearINR: estimate.perYearINR,
    grandTotalINR: estimate.totalINR,
    totalDuration: estimate.duration,
  },

  fundingPlan: {
    budgetCovered:
      fit === "COMFORTABLE"
        ? 100
        : fit === "STRETCHED"
        ? 75
        : 40,

    gap:
      fit === "SHORT"
        ? estimate.totalINR - Number(formData.annualBudget)
        : 0,

    recommendedLoan:
      fit === "SHORT"
        ? estimate.totalINR - Number(formData.annualBudget)
        : 0,

    loanEMIEstimate:
      fit === "SHORT"
        ? "₹12,000 / month"
        : "Not Required",

    lenders: [
      "SBI Education Loan",
      "HDFC Credila"
    ],

    scholarshipPotential:
      "Apply for merit scholarships and university grants.",

    partTimeEarnings:
      "₹30,000 - ₹60,000/month"
  },

  costBreakdown: [
    {
      category: "Tuition",
      typicalAmount: Math.round(estimate.totalINR * 0.6)
    },
    {
      category: "Accommodation",
      typicalAmount: Math.round(estimate.totalINR * 0.2)
    },
    {
      category: "Food",
      typicalAmount: Math.round(estimate.totalINR * 0.1)
    },
    {
      category: "Transport",
      typicalAmount: Math.round(estimate.totalINR * 0.05)
    },
    {
      category: "Miscellaneous",
      typicalAmount: Math.round(estimate.totalINR * 0.05)
    }
  ],

  destinationComparison: [
    {
      destination: formData.destination[0],
      flag: "🌍",
      totalCostINR: estimate.totalINR,
      budgetFit: fit,
      pros: [
        "Good education quality",
        "Strong career opportunities"
      ],
      cons: [
        "Living costs can be high"
      ],
      verdict: "Suitable based on your current budget."
    }
  ],

  savingTips: [
    {
      tip: "Apply Early",
      detail: "Early applications often receive scholarships."
    },
    {
      tip: "Shared Accommodation",
      detail: "Sharing accommodation can reduce living costs."
    }
  ],

  nextSteps: [
    {
      step: "Research Universities",
      detail: "Create a shortlist of universities."
    },
    {
      step: "Check Scholarships",
      detail: "Apply for available scholarships."
    }
  ]
};

setResult(data);
setHasResult(true);
    } catch (err) {
      console.error("Budget AI error:", err);
      setError(
        err.message?.includes("JSON")
          ? "AI returned an unexpected format. Please try again."
          : err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const handleReset = () => {
    setResult(null);
    setHasResult(false);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <BudgetHero />

      {!hasResult && !loading && !error && (
        <BudgetForm onSubmit={handleSubmit} />
      )}

      {loading && <BudgetLoading />}

      <div ref={resultRef}>
        {/* Error state */}
        {error && !loading && (
          <section style={{ fontFamily: "var(--font-main)", padding: "64px 24px", background: "var(--bg-light)", textAlign: "center" }}>
            <div style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", border: "1px solid #ffc8c8", borderRadius: "var(--radius-lg)", padding: "36px 40px", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#fff1f1", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>Something went wrong</h3>
              <p style={{ color: "var(--text-medium)", fontSize: "14px", marginBottom: "24px", lineHeight: 1.6 }}>{error}</p>
              <button onClick={handleReset}
                style={{ padding: "12px 28px", borderRadius: "var(--radius-md)", border: "none", background: "var(--gradient-secondary)", color: "#fff", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer" }}>
                Try Again
              </button>
            </div>
          </section>
        )}

        {/* Results */}
        {!loading && hasResult && (
          <BudgetResult result={result} onReset={handleReset} />
        )}
      </div>

      <BudgetCTA />
    </>
  );
}