import { useEffect, useRef, useState } from "react";
import { ArrowRight, Wallet, Shield, Zap, IndianRupee, PiggyBank } from "lucide-react";

// Same hero image + wash treatment as AI Course Match — keep this in sync across all hero sections
import heroBg from "../../assets/images/budget_calculator.jpeg";

const TRUST_PILLS = [
  { icon: Wallet, text: "Real cost data, not guesses", color: "var(--accent-blue)" },
  { icon: Shield, text: "Scholarships & loans included", color: "var(--accent-green)" },
  { icon: Zap, text: "Full plan in 15 seconds", color: "var(--accent-pink)" },
];

const STATS = [
  { value: "8+", label: "Destinations" },
  { value: "AI", label: "Smart Planning" },
];

const LEDGER_ITEMS = [
  { label: "Tuition (B.Tech, Canada)", amount: "C$ 28,000" },
  { label: "Living & Food", amount: "C$ 14,000" },
  { label: "Scholarships (est.)", amount: "−C$ 6,000" },
  { label: "Part-time earnings", amount: "−C$ 9,600" },
];

const TOTAL_ESTIMATE = { amount: "C$ 1,46,000", inr: "≈ ₹89 Lakh" };

export default function BudgetHero() {
  const [lineIndex, setLineIndex] = useState(-1);
  const [totalIn, setTotalIn] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const timers = [];
    LEDGER_ITEMS.forEach((_, i) => {
      timers.push(setTimeout(() => setLineIndex(i), 600 + i * 380));
    });
    timers.push(
      setTimeout(() => setTotalIn(true), 600 + LEDGER_ITEMS.length * 380 + 350)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="budget-hero">
      <div className="budget-hero__media">
        <div className="budget-hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="budget-hero__wash" />
        <div className="budget-hero__spot" />
      </div>

      <div className="budget-hero__inner">
        <div className="budget-hero__eyebrow">
          <span className="pulse-dot" />
          <IndianRupee size={14} className="budget-hero__eyebrow-icon" />
          AI Budget Calculator
        </div>

        <h1 className="budget-hero__headline">
          Know the real cost of
          <br />
          <span className="grad-word">your study abroad dream.</span>
        </h1>

        <p className="budget-hero__sub">
          Enter your destination, course, and budget. Our AI builds a complete
          financial plan — tuition, living costs, loan options, scholarships,
          and part-time earnings — all in one place.
        </p>

        <div className="budget-hero__cta-row">
          <a href="#budget-form" className="cta-primary">
            <span>Calculate My Budget</span>
            <ArrowRight size={17} className="cta-primary__arrow" />
          </a>
          <a href="/eligibility-checker" className="cta-secondary">
            <span>Check Eligibility First</span>
          </a>
        </div>

        <div className="budget-hero__pills">
          {TRUST_PILLS.map(({ icon: Icon, text, color }) => (
            <div className="pill" key={text}>
              <Icon size={13} style={{ color }} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Signature: unified frosted console — live ledger resolving into a total */}
        <div className="budget-console">
          <div className="budget-console__ledger">
            {LEDGER_ITEMS.map((item, i) => {
              const active = i <= lineIndex;
              const isCredit = item.amount.startsWith("−");
              return (
                <div className={`budget-console__line ${active ? "is-active" : ""}`} key={item.label}>
                  <span className="budget-console__line-label">{item.label}</span>
                  <span className={`budget-console__line-amount ${isCredit ? "is-credit" : ""}`}>
                    {active ? item.amount : "—"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Bottom row: total block (left, bordered) + stats — mirrors AI Course Match's ring + stats layout */}
          <div className="budget-console__bottom">
            <div className="budget-console__total">
              <div className="budget-console__total-icon">
                <PiggyBank size={20} />
              </div>
              <div className="budget-console__total-text">
                <span className="budget-console__total-label">Total Est. (4 yr)</span>
                <span className={`budget-console__total-value ${totalIn ? "is-in" : ""}`}>
                  {totalIn ? TOTAL_ESTIMATE.amount : "Calculating…"}
                </span>
                <span className={`budget-console__total-sub ${totalIn ? "is-in" : ""}`}>
                  {totalIn ? TOTAL_ESTIMATE.inr : ""}
                </span>
              </div>
            </div>

            <div className="budget-console__stats">
              {STATS.map(({ value, label }) => (
                <div className="budget-console__stat" key={label}>
                  <div className="budget-console__value">{value}</div>
                  <div className="budget-console__statlabel">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .budget-hero {
          position: relative;
          font-family: var(--font-main);
          color: var(--text-dark);
          padding: 110px 24px 96px;
          overflow: visible;
          background: var(--bg-section);
          isolation: isolate;
        }

        .budget-hero__media {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 0 0 var(--radius-xl) var(--radius-xl);
        }

        .budget-hero__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(6%) brightness(0.98);
          transform: scale(1.02);
        }

        /* Stronger, layered wash: radial focus behind the text column so it
           stays legible regardless of what's busy in the photo underneath */
        .budget-hero__wash {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 900px 560px at 50% 40%,
              color-mix(in srgb, var(--white) 88%, transparent) 0%,
              color-mix(in srgb, var(--white) 72%, transparent) 38%,
              color-mix(in srgb, var(--bg-section) 55%, transparent) 62%,
              color-mix(in srgb, var(--bg-section) 30%, transparent) 100%
            ),
            linear-gradient(180deg,
              color-mix(in srgb, var(--bg-section) 35%, transparent) 0%,
              transparent 22%,
              transparent 70%,
              color-mix(in srgb, var(--bg-section) 45%, transparent) 100%
            );
        }

        /* Subtle color accent kept separate so the wash itself stays neutral */
        .budget-hero__spot {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 88% 6%,
            color-mix(in srgb, var(--accent-green) 18%, transparent) 0%,
            transparent 45%
          );
        }

        .budget-hero__inner {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .budget-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: color-mix(in srgb, var(--white) 88%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent-green) 20%, var(--border));
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 100px;
          padding: 8px 18px;
          margin-bottom: 26px;
          color: var(--primary-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: var(--shadow-sm);
          animation: budgetFadeUp 0.7s ease both;
        }

        .budget-hero__eyebrow-icon { color: var(--accent-green); }

        .budget-hero__headline {
          font-size: clamp(34px, 4.8vw, 56px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.01em;
          color: var(--primary-dark);
          margin-bottom: 20px;
          text-shadow: 0 2px 24px color-mix(in srgb, var(--white) 70%, transparent);
          animation: budgetFadeUp 0.7s ease 0.05s both;
        }

        .grad-word {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .budget-hero__sub {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-dark);
          max-width: 520px;
          margin: 0 auto 32px;
          animation: budgetFadeUp 0.7s ease 0.1s both;
        }

        .budget-hero__cta-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          animation: budgetFadeUp 0.7s ease 0.15s both;
        }

        .cta-primary, .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.92rem;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: var(--transition);
        }

        .cta-primary {
          background: var(--primary-dark);
          color: var(--white);
          box-shadow: var(--shadow-md);
        }

        .cta-primary:hover {
          background: var(--primary);
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }

        .cta-primary__arrow { transition: transform 0.25s ease; }
        .cta-primary:hover .cta-primary__arrow { transform: translateX(3px); }

        .cta-secondary {
          background: color-mix(in srgb, var(--white) 88%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent-green) 16%, var(--border));
          color: var(--primary-dark);
          backdrop-filter: blur(8px);
        }

        .cta-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
        }

        .budget-hero__pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 44px;
          animation: budgetFadeUp 0.7s ease 0.2s both;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: color-mix(in srgb, var(--white) 78%, transparent);
          border: 1px solid var(--border);
          backdrop-filter: blur(6px);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-dark);
          box-shadow: var(--shadow-sm);
        }

        .pill svg { flex-shrink: 0; }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-green);
          animation: budgetPulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes budgetPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

        /* ===== Signature: unified frosted console — live ledger + total ===== */
        /* Same footprint as the AI Course Match console: max-width 640px, 26px/32px padding, 18px blur */

        .budget-console {
          position: relative;
          width: 100%;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          background: color-mix(in srgb, var(--white) 94%, transparent);
          border: 1px solid color-mix(in srgb, var(--white) 96%, transparent);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: var(--radius-xl);
          box-shadow:
            0 20px 60px color-mix(in srgb, var(--primary-dark) 18%, transparent),
            0 8px 24px color-mix(in srgb, var(--primary-dark) 8%, transparent);
          padding: 26px 32px;
          animation: budgetFadeUp 0.7s ease 0.3s both;
        }

        .budget-console::before {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 3px;
          border-radius: 0 0 4px 4px;
          background: var(--gradient-primary);
        }

        .budget-console__ledger {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }

        .budget-console__line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          background: transparent;
          transition: all 0.4s cubic-bezier(.4,0,.2,1);
        }

        .budget-console__line.is-active {
          background: color-mix(in srgb, var(--accent-green) 8%, transparent);
        }

        .budget-console__line-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-light);
          transition: color 0.4s ease;
          text-align: left;
        }

        .budget-console__line.is-active .budget-console__line-label {
          color: var(--text-dark);
        }

        .budget-console__line-amount {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-light);
          transition: color 0.4s ease;
          white-space: nowrap;
        }

        .budget-console__line.is-active .budget-console__line-amount {
          color: var(--primary-dark);
        }

        .budget-console__line.is-active .budget-console__line-amount.is-credit {
          color: var(--accent-green);
        }

        /* Bottom row: total block (left, bordered) + stats row — mirrors AI Course Match's match-console pattern */

        .budget-console__bottom {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .budget-console__total {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
          padding-right: 26px;
          border-right: 1px solid var(--border);
        }

        .budget-console__total-icon {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-light);
          color: var(--primary);
        }

        .budget-console__total-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
          text-align: left;
        }

        .budget-console__total-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent-green);
        }

        .budget-console__total-value {
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: var(--text-light);
          transition: color 0.5s ease;
        }

        .budget-console__total-value.is-in {
          color: var(--primary-dark);
        }

        .budget-console__total-sub {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-medium);
          opacity: 0;
          transform: translateY(3px);
          transition: all 0.5s cubic-bezier(.4,0,.2,1);
        }

        .budget-console__total-sub.is-in {
          opacity: 1;
          transform: translateY(0);
        }

        .budget-console__stats {
          display: flex;
          flex: 1;
        }

        .budget-console__stat {
          flex: 1;
          text-align: center;
          padding: 0 10px;
        }

        .budget-console__stat:not(:first-child) {
          border-left: 1px solid var(--border);
        }

        .budget-console__value {
          font-size: 22px;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .budget-console__statlabel {
          font-size: 11px;
          font-weight: 500;
          color: var(--text-light);
          margin-top: 3px;
        }

        @keyframes budgetFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .budget-hero { padding: 84px 18px 70px; }

          .budget-console { padding: 24px 22px; }

          .budget-console__line-label,
          .budget-console__line-amount { font-size: 12px; }

          .budget-console__bottom {
            flex-direction: column;
            gap: 20px;
          }

          .budget-console__total {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding-right: 0;
            padding-bottom: 18px;
            justify-content: center;
          }

          .budget-console__stats { width: 100%; }

          .cta-primary, .cta-secondary { justify-content: center; width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .budget-hero__eyebrow, .budget-hero__headline, .budget-hero__sub,
          .budget-hero__cta-row, .budget-hero__pills, .budget-console {
            animation: none; opacity: 1; transform: none;
          }
          .pulse-dot { animation: none; }
          .cta-primary:hover, .cta-secondary:hover { transform: none; }
          .budget-console__line, .budget-console__total-value, .budget-console__total-sub {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}