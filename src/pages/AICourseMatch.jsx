import { useState, useRef } from "react";

import MatchHero from "../components/ai-course-match/MatchHero";
import MatchForm from "../components/ai-course-match/MatchForm";
import MatchResult from "../components/ai-course-match/MatchResult";
import MatchLoading from "../components/ai-course-match/MatchLoading";
import MatchCTA from "../components/ai-course-match/MatchCTA";

import { rankAllCategories } from "../utils/matchEngine";


/* ─── Page ─── */
export default function AICourseMatch() {
  const [results, setResults] = useState([]);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasResults, setHasResults] = useState(false);

  const resultRef = useRef(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    setResults([]);
    setAnalysis(null);
    setHasResults(false);

    try {
      const data = rankAllCategories(formData);

      setAnalysis({
        category: data.primary_category,
        confidence: Math.min(99, Math.max(70, data.confidence ?? 87)),
        summary: data.summary,
      });
      setResults(data.recommendations || []);
      setHasResults(true);
    } catch (err) {
      console.error("AI match error:", err);
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
    setResults([]);
    setAnalysis(null);
    setHasResults(false);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <MatchHero />

      {!hasResults && !loading && !error && (
        <MatchForm onSubmit={handleSubmit} />
      )}

      {loading && <MatchLoading />}

      <div ref={resultRef}>
        {error && !loading && (
          <section
            style={{
              fontFamily: "var(--font-main)",
              padding: "64px 24px",
              background: "var(--bg-light)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                maxWidth: "500px",
                margin: "0 auto",
                background: "#fff",
                border: "1px solid #ffc8c8",
                borderRadius: "var(--radius-lg)",
                padding: "36px 40px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#fff1f1",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>
                Something went wrong
              </h3>
              <p style={{ color: "var(--text-medium)", fontSize: "14px", marginBottom: "24px", lineHeight: 1.6 }}>
                {error}
              </p>
              <button
                onClick={handleReset}
                style={{
                  padding: "12px 28px",
                  borderRadius: "var(--radius-md)",
                  border: "none",
                  background: "var(--gradient-secondary)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "var(--font-main)",
                  cursor: "pointer",
                }}
              >
                Try Again
              </button>
            </div>
          </section>
        )}

        {!loading && hasResults && (
          <MatchResult
            results={results}
            analysis={analysis}
            onReset={handleReset}
          />
        )}
      </div>

      <MatchCTA />
    </>
  );
}