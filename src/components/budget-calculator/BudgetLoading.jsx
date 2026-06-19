import { useEffect, useState } from "react";
import { Brain, Calculator, ArrowRight } from "lucide-react";

const LOADING_STEPS = [
  "Reading your destination and course profile…",
  "Fetching real tuition and living cost data…",
  "Calculating multi-year total cost estimate…",
  "Evaluating loan and scholarship options…",
  "Comparing all selected destinations…",
  "Building your personalised financial plan…",
];

export function BudgetLoading() {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((prev) => [...prev, active]);
      setActive((prev) => {
        if (prev >= LOADING_STEPS.length - 1) { clearInterval(interval); return prev; }
        return prev + 1;
      });
    }, 620);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ fontFamily: "var(--font-main)", padding: "80px 24px", background: "var(--bg-light)" }}>
      <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--gradient-secondary)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "28px", animation: "budgetBrainBeat 1.6s ease-in-out infinite" }}>
          <Calculator size={38} color="#fff" />
        </div>
        <h3 style={{ fontSize: "26px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "8px" }}>AI is building your budget plan</h3>
        <p style={{ fontSize: "14px", color: "var(--text-light)", marginBottom: "40px" }}>Crunching real cost data across all your chosen destinations — takes about 15 seconds</p>

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
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff", animation: "budgetDotPulse 0.8s ease-in-out infinite alternate" }} />
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
        @keyframes budgetBrainBeat { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        @keyframes budgetDotPulse { from{opacity:.5;transform:scale(.8)} to{opacity:1;transform:scale(1)} }
      `}</style>
    </section>
  );
}

export function EmptyState({ onReset }) {
  return (
    <section style={{ fontFamily: "var(--font-main)", padding: "80px 24px", background: "#fff", textAlign: "center" }}>
      <div style={{ maxWidth: "460px", margin: "0 auto" }}>
        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "var(--bg-light)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
          <Calculator size={32} color="var(--text-light)" />
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "10px" }}>No budget plan yet</h3>
        <p style={{ fontSize: "14px", color: "var(--text-medium)", marginBottom: "28px", lineHeight: 1.6 }}>
          Fill in the form above and our AI will generate a complete financial breakdown for your chosen destination and course.
        </p>
        <button onClick={onReset}
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", borderRadius: "var(--radius-md)", border: "none", background: "var(--gradient-secondary)", color: "#fff", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer" }}>
          Start the Calculator
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}