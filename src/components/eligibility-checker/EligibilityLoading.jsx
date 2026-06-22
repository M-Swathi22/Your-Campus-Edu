import { useEffect, useRef, useState } from "react";
import { Sparkles, CheckCircle2, Loader2 } from "lucide-react";

/**
 * EligibilityLoading
 * Signature "verdict console" — replays the applicant's own answers as a
 * checklist that ticks green one by one while a scan-line sweeps down,
 * then resolves into a verdict pulse. Reuses the checklist + green-verdict
 * language from EligibilityHero so the whole funnel reads as one system.
 *
 * props:
 *  - items: [{ label, value }]   the answers to replay
 *  - accent: "domestic" | "abroad"
 *  - onComplete: () => void      fires once the sequence finishes
 *  - duration: total ms (optional, default scales with item count)
 */
export default function EligibilityLoading({ items = [], accent = "domestic", onComplete, duration }) {
  const [checked, setChecked] = useState(0);
  const [phase, setPhase] = useState("scanning"); // scanning -> verdict
  const firedRef = useRef(false);

  const stepTime = duration ? duration / Math.max(items.length, 1) : 480;

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;

    let i = 0;
    const tick = () => {
      i += 1;
      setChecked(i);
      if (i < items.length) {
        setTimeout(tick, stepTime);
      } else {
        setTimeout(() => setPhase("verdict"), 400);
        setTimeout(() => onComplete && onComplete(), 1500 + stepTime * 0.3);
      }
    };
    const start = setTimeout(tick, stepTime);
    return () => clearTimeout(start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`elig-load elig-load--${accent}`}>
      <div className="elig-load__ambient elig-load__ambient--a" />
      <div className="elig-load__ambient elig-load__ambient--b" />

      <div className="elig-load__card">
        <div className="elig-load__head">
          <span className="elig-load__badge">
            {phase === "scanning" ? <Loader2 size={13} className="elig-load__spin" /> : <Sparkles size={13} />}
            {phase === "scanning" ? "Analyzing your profile" : "Verdict ready"}
          </span>
          <h3 className="elig-load__title">
            {phase === "scanning" ? "Reading your answers…" : "Eligibility calculated"}
          </h3>
        </div>

        <div className="elig-load__list">
          {items.map((item, i) => {
            const isDone = i < checked;
            const isCurrent = i === checked && phase === "scanning";
            return (
              <div
                key={i}
                className={`elig-load__row ${isDone ? "is-done" : ""} ${isCurrent ? "is-current" : ""}`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span className="elig-load__row-icon">
                  {isDone ? <CheckCircle2 size={16} /> : <span className="elig-load__row-dot" />}
                </span>
                <span className="elig-load__row-label">{item.label}</span>
                <span className="elig-load__row-value">{item.value}</span>
              </div>
            );
          })}
        </div>

        <div className="elig-load__scan-track">
          <div className={`elig-load__scan-fill ${phase === "verdict" ? "is-full" : ""}`} />
        </div>
      </div>

      <style>{`
        .elig-load {
          position: relative;
          font-family: var(--font-main);
          --elig-accent: var(--primary);
          --elig-accent-soft: var(--primary-light);
          --elig-accent-2: var(--accent-green);
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          overflow: hidden;
        }
        .elig-load--abroad {
          --elig-accent: var(--extra-indigo);
          --elig-accent-soft: rgba(88, 102, 235, 0.1);
          --elig-accent-2: var(--accent-blue);
        }

        .elig-load__ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          opacity: 0.5;
        }
        .elig-load__ambient--a {
          width: 280px; height: 280px;
          background: var(--elig-accent-soft);
          top: -80px; left: -60px;
        }
        .elig-load__ambient--b {
          width: 220px; height: 220px;
          background: color-mix(in srgb, var(--elig-accent-2) 18%, transparent);
          bottom: -60px; right: -40px;
        }

        .elig-load__card {
          position: relative;
          width: 100%;
          max-width: 440px;
          background: var(--bg-main);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: clamp(24px, 5vw, 36px);
          box-shadow: var(--shadow-lg);
        }

        .elig-load__head { margin-bottom: 22px; }
        .elig-load__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--elig-accent-soft);
          color: var(--elig-accent);
          border-radius: 100px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .elig-load__spin { animation: elig-spin 1s linear infinite; }
        @keyframes elig-spin { to { transform: rotate(360deg); } }

        .elig-load__title {
          font-size: clamp(18px, 3vw, 21px);
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -0.01em;
        }

        .elig-load__list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 20px;
          max-height: 260px;
          overflow-y: auto;
        }
        .elig-load__row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-section);
          opacity: 0.5;
          transform: translateX(-4px);
          transition: var(--transition);
        }
        .elig-load__row.is-current {
          opacity: 1;
          transform: translateX(0);
          background: var(--elig-accent-soft);
        }
        .elig-load__row.is-done {
          opacity: 1;
          transform: translateX(0);
        }
        .elig-load__row-icon {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-green);
        }
        .elig-load__row-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-light);
        }
        .elig-load__row-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-light);
          flex-shrink: 0;
        }
        .elig-load__row-value {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-dark);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-left: auto;
        }

        .elig-load__scan-track {
          height: 4px;
          border-radius: 100px;
          background: var(--border);
          overflow: hidden;
        }
        .elig-load__scan-fill {
          height: 100%;
          width: 30%;
          border-radius: 100px;
          background: linear-gradient(90deg, var(--elig-accent-2), var(--elig-accent));
          animation: elig-scan 1.1s ease-in-out infinite;
        }
        .elig-load__scan-fill.is-full {
          width: 100%;
          animation: none;
          transition: width 0.5s ease;
        }
        @keyframes elig-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(330%); }
        }

        @media (max-width: 480px) {
          .elig-load__row-label { display: none; }
        }
      `}</style>
    </div>
  );
}