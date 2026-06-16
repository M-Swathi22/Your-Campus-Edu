import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

const STEPS = [
  "Reading your academic stream and background…",
  "Mapping career goal to course families…",
  "Cross-referencing subject strengths…",
  "Evaluating work style compatibility…",
  "Scoring 100+ courses on 12 parameters…",
  "Generating personalised match report…",
];

export default function MatchLoading() {
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompleted((prev) => [...prev, active]);
      setActive((prev) => {
        if (prev >= STEPS.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 620);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        fontFamily: "var(--font-main)",
        padding: "80px 24px",
        background: "var(--bg-light)",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Brain icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "var(--gradient-secondary)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
            animation: "brainBeat 1.6s ease-in-out infinite",
          }}
        >
          <Brain size={38} color="#fff" />
        </div>

        <h3
          style={{
            fontSize: "26px",
            fontWeight: 800,
            color: "var(--text-dark)",
            marginBottom: "8px",
          }}
        >
          AI is analysing your profile
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-light)",
            marginBottom: "40px",
          }}
        >
          Matching across 100+ courses in 9 categories — takes about 10 seconds
        </p>

        {/* Progress steps */}
        <div
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "24px 28px",
            textAlign: "left",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          {STEPS.map((step, i) => {
            const done = completed.includes(i);
            const isActive = active === i && !done;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 0",
                  borderBottom: i < STEPS.length - 1 ? "1px solid var(--border)" : "none",
                  opacity: done || isActive ? 1 : 0.35,
                  transition: "opacity 0.4s ease",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: done
                      ? "var(--accent-green)"
                      : isActive
                      ? "var(--primary)"
                      : "var(--border)",
                    transition: "background 0.3s ease",
                  }}
                >
                  {done ? (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : isActive ? (
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#fff",
                        animation: "dotPulse 0.8s ease-in-out infinite alternate",
                      }}
                    />
                  ) : (
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--text-light)" }} />
                  )}
                </div>

                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: isActive ? 600 : 500,
                    color: done
                      ? "var(--accent-green)"
                      : isActive
                      ? "var(--primary)"
                      : "var(--text-light)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes brainBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes dotPulse {
          from { opacity: 0.5; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}