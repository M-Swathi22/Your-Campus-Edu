import { useState, useRef } from "react";
import {
  quickPreCheck,
  calculateEligibility,
} from "../utils/eligibilityCalculator";
import EligibilityHero from "../components/eligibility-checker/EligibilityHero";
import EligibilityForm from "../components/eligibility-checker/EligibilityForm";
import EligibilityResult from "../components/eligibility-checker/EligibilityResult";
import EligibilityCTA from "../components/eligibility-checker/EligibilityCTA";

/* ─── Animated loading ─── */
import { useEffect } from "react";
import { Brain } from "lucide-react";

const LOADING_STEPS = [
  "Reading your academic profile…",
  "Checking stream and percentage criteria…",
  "Evaluating entrance exam requirements…",
  "Analysing language and aptitude scores…",
  "Cross-referencing eligibility rules…",
  "Generating your personalised verdict…",
];

function EligibilityLoading() {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((prev) => [...prev, active]);
      setActive((prev) => {
        if (prev >= LOADING_STEPS.length - 1) { clearInterval(interval); return prev; }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ fontFamily: "var(--font-main)", padding: "80px 24px", background: "var(--bg-light)" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--gradient-secondary)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "28px", animation: "eligBrainBeat 1.6s ease-in-out infinite" }}>
          <Brain size={38} color="#fff" />
        </div>
        <h3 style={{ fontSize: "26px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "8px" }}>AI is checking your eligibility</h3>
        <p style={{ fontSize: "14px", color: "var(--text-light)", marginBottom: "40px" }}>Evaluating your profile against eligibility rules — takes about 10 seconds</p>

        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px 28px", textAlign: "left", boxShadow: "var(--shadow-sm)" }}>
          {LOADING_STEPS.map((step, i) => {
            const done = completed.includes(i);
            const isActive = active === i && !done;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderBottom: i < LOADING_STEPS.length - 1 ? "1px solid var(--border)" : "none", opacity: done || isActive ? 1 : 0.3, transition: "opacity 0.4s ease" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: done ? "var(--accent-green)" : isActive ? "var(--primary)" : "var(--border)", transition: "background 0.3s ease" }}>
                  {done ? (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  ) : isActive ? (
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff", animation: "eligDotPulse 0.8s ease-in-out infinite alternate" }} />
                  ) : (
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text-light)" }} />
                  )}
                </div>
                <span style={{ fontSize: "13px", fontWeight: isActive ? 600 : 500, color: done ? "var(--accent-green)" : isActive ? "var(--primary)" : "var(--text-light)", transition: "color 0.3s ease" }}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes eligBrainBeat { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        @keyframes eligDotPulse { from{opacity:.5;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </section>
  );
}


/* ─── Page ─── */
export default function EligibilityChecker() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasResult, setHasResult] = useState(false);
  const [formType, setFormType] = useState("domestic");

  const resultRef = useRef(null);

  const handleSubmit = async (formData) => {
    // Quick local pre-check
    const preCheck = quickPreCheck(formData);
    if (!preCheck.passed) {
      setError(preCheck.errors.join(" ")); 
      return;
    }

    setFormType(formData.type);
    setLoading(true);
    setError(null);
    setResult(null);
    setHasResult(false);
    try {
  const data = calculateEligibility(formData);

  setResult(data);
  setHasResult(true);
}
    catch (err) {
      console.error("Eligibility AI error:", err);
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
      <EligibilityHero />

      {!hasResult && !loading && !error && (
        <EligibilityForm onSubmit={handleSubmit} />
      )}

      {loading && <EligibilityLoading />}

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
              <button onClick={handleReset} style={{ padding: "12px 28px", borderRadius: "var(--radius-md)", border: "none", background: "var(--gradient-secondary)", color: "#fff", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer" }}>
                Try Again
              </button>
            </div>
          </section>
        )}

        {!loading && hasResult && (
          <EligibilityResult result={result} formType={formType} onReset={handleReset} />
        )}
      </div>

      <EligibilityCTA />
    </>
  );
}