import { useState, useRef } from "react";

import CompareHero    from "../components/compare-colleges/CompareHero";
import CompareForm    from "../components/compare-colleges/CompareForm";
import CompareResult  from "../components/compare-colleges/CompareResult";
import CompareLoading from "../components/compare-colleges/CompareLoading";
import CompareCTA     from "../components/compare-colleges/CompareCTA";

/* ─── Page ─── */
export default function CompareColleges() {
  const [result, setResult]       = useState(null);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const [hasResult, setHasResult] = useState(false);

  const resultRef = useRef(null);

  const handleSubmit =  (formData) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setHasResult(false);
   try {
  const data = {
    summary:
      "Based on your preferences, these colleges are the best options for comparison.",

    recommendedCollege: formData.collegeNames?.[0] || "IIT Madras",

    recommendationReason:
      "Strong academics, placements, and overall student outcomes.",

    colleges: [
      {
        name: formData.collegeNames?.[0] || "IIT Madras",
        country: "India",
        flag: "🇮🇳",
        city: "Chennai",
        overallScore: 95,
        placementRate: "95%",
        avgPackageLPA: 20,
        highestPackageLPA: 80,
        acceptanceRate: "Low",
        facultyRatio: "10:1",
        scholarships: "Merit Scholarships",
        campusLife: "Excellent campus experience",
        pros: [
          "Top ranking",
          "Strong placements",
          "Excellent faculty",
        ],
        cons: [
          "Highly competitive admission",
        ],
        bestFor: "Engineering students",
      },

      {
        name: formData.collegeNames?.[1] || "NIT Trichy",
        country: "India",
        flag: "🇮🇳",
        city: "Trichy",
        overallScore: 88,
        placementRate: "90%",
        avgPackageLPA: 14,
        highestPackageLPA: 50,
        acceptanceRate: "Moderate",
        facultyRatio: "12:1",
        scholarships: "Government Scholarships",
        campusLife: "Good student culture",
        pros: [
          "Affordable fees",
          "Good placements",
          "Strong alumni network",
        ],
        cons: [
          "Fewer international opportunities",
        ],
        bestFor: "Value-focused students",
      },
    ],

    parameterWinners: [
      {
        parameter: "Placements",
        winner: formData.collegeNames?.[0] || "IIT Madras",
        reason: "Higher average packages",
      },
      {
        parameter: "Affordability",
        winner: formData.collegeNames?.[1] || "NIT Trichy",
        reason: "Lower tuition fees",
      },
    ],

    verdict:
      "If your priority is placements and reputation, choose IIT Madras. If budget and value are more important, NIT Trichy is a strong alternative.",
  };

  setResult(data);
  setHasResult(true);
}
     catch (err) {
      console.error("Compare AI error:", err);
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
      <CompareHero />

      {!hasResult && !loading && !error && (
        <CompareForm onSubmit={handleSubmit} />
      )}

      {loading && <CompareLoading />}

      <div ref={resultRef}>
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

        {!loading && hasResult && (
          <CompareResult result={result} onReset={handleReset} />
        )}
      </div>

      <CompareCTA />
    </>
  );
}