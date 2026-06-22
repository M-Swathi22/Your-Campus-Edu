import { Check } from "lucide-react";

/**
 * EligibilityProgressBar
 * Signature "verdict ladder" — a horizontal spine of numbered rungs that
 * fills as the user advances. Completed rungs resolve into a check mark,
 * the active rung pulses, echoing the checklist→green-verdict language
 * established in EligibilityHero.
 *
 * accent: "domestic" -> --primary / --accent-green family
 *         "abroad"   -> --extra-indigo / --accent-blue family
 */
export default function EligibilityProgressBar({ total, current, accent = "domestic", label }) {
  const pct = total > 1 ? (current / (total - 1)) * 100 : 0;

  return (
    <div className={`elig-progress elig-progress--${accent}`}>
      <div className="elig-progress__top">
        <span className="elig-progress__label">{label}</span>
        <span className="elig-progress__count">
          <strong>{String(Math.min(current + 1, total)).padStart(2, "0")}</strong>
          <span className="elig-progress__count-divider">/</span>
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className="elig-progress__spine">
        <div className="elig-progress__spine-track" />
        <div className="elig-progress__spine-fill" style={{ width: `${pct}%` }} />
        <div className="elig-progress__rungs">
          {Array.from({ length: total }).map((_, i) => {
            const state = i < current ? "done" : i === current ? "active" : "pending";
            return (
              <div key={i} className={`elig-progress__rung elig-progress__rung--${state}`}>
                <span className="elig-progress__rung-dot">
                  {state === "done" ? <Check size={11} strokeWidth={3} /> : i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .elig-progress {
          font-family: var(--font-main);
          --elig-accent: var(--primary);
          --elig-accent-soft: var(--primary-light);
          --elig-accent-2: var(--accent-green);
        }
        .elig-progress--abroad {
          --elig-accent: var(--extra-indigo);
          --elig-accent-soft: rgba(88, 102, 235, 0.1);
          --elig-accent-2: var(--accent-blue);
        }

        .elig-progress__top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .elig-progress__label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-light);
        }
        .elig-progress__count {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-light);
          letter-spacing: 0.02em;
          font-variant-numeric: tabular-nums;
        }
        .elig-progress__count strong {
          color: var(--elig-accent);
          font-weight: 800;
          font-size: 13px;
        }
        .elig-progress__count-divider {
          margin: 0 2px;
          opacity: 0.5;
        }

        .elig-progress__spine {
          position: relative;
          height: 26px;
        }
        .elig-progress__spine-track {
          position: absolute;
          top: 50%;
          left: 13px;
          right: 13px;
          height: 3px;
          transform: translateY(-50%);
          background: var(--border);
          border-radius: 100px;
        }
        .elig-progress__spine-fill {
          position: absolute;
          top: 50%;
          left: 13px;
          height: 3px;
          transform: translateY(-50%);
          background: linear-gradient(90deg, var(--elig-accent-2), var(--elig-accent));
          border-radius: 100px;
          transition: width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
          max-width: calc(100% - 26px);
        }
        .elig-progress__rungs {
          position: relative;
          display: flex;
          justify-content: space-between;
          height: 100%;
        }
        .elig-progress__rung-dot {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 700;
          background: var(--bg-main);
          border: 2px solid var(--border);
          color: var(--text-light);
          transition: var(--transition);
        }
        .elig-progress__rung--done .elig-progress__rung-dot {
          background: var(--elig-accent);
          border-color: var(--elig-accent);
          color: var(--text-white);
        }
        .elig-progress__rung--active .elig-progress__rung-dot {
          border-color: var(--elig-accent);
          color: var(--elig-accent);
          box-shadow: 0 0 0 4px var(--elig-accent-soft);
          animation: elig-pulse 1.8s ease-in-out infinite;
        }
        @keyframes elig-pulse {
          0%, 100% { box-shadow: 0 0 0 4px var(--elig-accent-soft); }
          50% { box-shadow: 0 0 0 7px transparent; }
        }

        @media (max-width: 480px) {
          .elig-progress__rung-dot { width: 21px; height: 21px; font-size: 9px; }
          .elig-progress__spine-track, .elig-progress__spine-fill { left: 10.5px; }
        }
      `}</style>
    </div>
  );
}