import { useEffect, useRef } from "react";
import { ArrowRight, Brain, Shield, Zap, Compass, MapPin } from "lucide-react";

// Same hero image + wash treatment as AI Course Match — keep this in sync across all hero sections
import heroBg from "../../assets/images/countryfit_quiz.png";

const TRUST_PILLS = [
  { icon: Brain, text: "Powered by Claude AI", color: "var(--accent-blue)" },
  { icon: Shield, text: "Based on you, not trends", color: "var(--accent-green)" },
  { icon: Zap, text: "2 minutes, no signup", color: "var(--accent-pink)" },
];

const STATS = [
  { value: "10", label: "Quick Questions" },
  { value: "2 min", label: "To Complete" },
  { value: "AI", label: "Fit Score" },
];

const TOP_MATCH = { code: "🇨🇦", name: "Canada — your best overall fit", pct: 91 };

const RING_RADIUS = 30;
const RING_CIRC = 2 * Math.PI * RING_RADIUS;

export default function QuizHero() {
  const ringRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (ringRef.current) {
        const offset = RING_CIRC - (TOP_MATCH.pct / 100) * RING_CIRC;
        ringRef.current.style.strokeDashoffset = offset;
      }
    }, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="quiz-hero">
      <div className="quiz-hero__media">
        <div className="quiz-hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="quiz-hero__wash" />
        <div className="quiz-hero__spot" />
      </div>

      <div className="quiz-hero__inner">
        <div className="quiz-hero__eyebrow">
          <span className="pulse-dot" />
          <Compass size={14} className="quiz-hero__eyebrow-icon" />
          Education Fit Quiz
        </div>

        <h1 className="quiz-hero__headline">
          Which country
          <br />
          <span className="grad-word">actually fits you?</span>
        </h1>

        <p className="quiz-hero__sub">
          Skip the generic "Top 10 countries" lists. Answer 10 quick questions
          about your personality, priorities and lifestyle — and let AI match
          you to the destination that genuinely fits who you are.
        </p>

        <div className="quiz-hero__cta-row">
          <a href="#quiz-questions" className="cta-primary">
            <span>Take the Quiz</span>
            <ArrowRight size={17} className="cta-primary__arrow" />
          </a>
          <a href="/compare-colleges" className="cta-secondary">
            <span>Compare Colleges Instead</span>
          </a>
        </div>

        <div className="quiz-hero__pills">
          {TRUST_PILLS.map(({ icon: Icon, text, color }) => (
            <div className="pill" key={text}>
              <Icon size={13} style={{ color }} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Signature: unified frosted console — top country match ring + live stats */}
        <div className="quiz-console">
          <div className="quiz-console__match">
            <div className="quiz-console__ring-wrap">
              <svg className="quiz-console__ring" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r={RING_RADIUS} fill="none" stroke="var(--bg-light)" strokeWidth="6" />
                <circle
                  ref={ringRef}
                  cx="36" cy="36" r={RING_RADIUS}
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRC}
                  strokeDashoffset={RING_CIRC}
                  transform="rotate(-90 36 36)"
                  className="quiz-console__ring-fill"
                />
              </svg>
              <span className="quiz-console__pct">{TOP_MATCH.pct}%</span>
            </div>

            <div className="quiz-console__text">
              <span className="quiz-console__label">
                <MapPin size={11} />
                Top Country Match
              </span>
              <span className="quiz-console__name">
                <span className="quiz-console__code">{TOP_MATCH.code}</span>
                {TOP_MATCH.name}
              </span>
            </div>
          </div>

          <div className="quiz-console__stats">
            {STATS.map(({ value, label }) => (
              <div className="quiz-console__stat" key={label}>
                <div className="quiz-console__value">{value}</div>
                <div className="quiz-console__statlabel">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .quiz-hero {
          position: relative;
          font-family: var(--font-main);
          color: var(--text-dark);
          padding: 110px 24px 96px;
          overflow: visible;
          background: var(--bg-section);
          isolation: isolate;
        }

        .quiz-hero__media {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 0 0 var(--radius-xl) var(--radius-xl);
        }

        .quiz-hero__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(6%) brightness(0.98);
          transform: scale(1.02);
        }

        /* Stronger, layered wash: radial focus behind the text column so it
           stays legible regardless of what's busy in the photo underneath */
        .quiz-hero__wash {
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
        .quiz-hero__spot {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 88% 6%,
            color-mix(in srgb, var(--extra-indigo) 18%, transparent) 0%,
            transparent 45%
          );
        }

        .quiz-hero__inner {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .quiz-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: color-mix(in srgb, var(--white) 88%, transparent);
          border: 1px solid color-mix(in srgb, var(--extra-indigo) 20%, var(--border));
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
          animation: quizFadeUp 0.7s ease both;
        }

        .quiz-hero__eyebrow-icon { color: var(--extra-indigo); }

        .quiz-hero__headline {
          font-size: clamp(34px, 4.8vw, 56px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.01em;
          color: var(--primary-dark);
          margin-bottom: 20px;
          text-shadow: 0 2px 24px color-mix(in srgb, var(--white) 70%, transparent);
          animation: quizFadeUp 0.7s ease 0.05s both;
        }

        .grad-word {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .quiz-hero__sub {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-dark);
          max-width: 520px;
          margin: 0 auto 32px;
          animation: quizFadeUp 0.7s ease 0.1s both;
        }

        .quiz-hero__cta-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          animation: quizFadeUp 0.7s ease 0.15s both;
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
          border: 1px solid color-mix(in srgb, var(--extra-indigo) 16%, var(--border));
          color: var(--primary-dark);
          backdrop-filter: blur(8px);
        }

        .cta-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
        }

        .quiz-hero__pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 44px;
          animation: quizFadeUp 0.7s ease 0.2s both;
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
          animation: quizPulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes quizPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

        /* ===== Signature: unified frosted console — same footprint as AI Course Match ===== */

        .quiz-console {
          position: relative;
          width: 100%;
          max-width: 640px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: 20px;
          background: color-mix(in srgb, var(--white) 94%, transparent);
          border: 1px solid color-mix(in srgb, var(--white) 96%, transparent);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: var(--radius-xl);
          box-shadow:
            0 20px 60px color-mix(in srgb, var(--primary-dark) 18%, transparent),
            0 8px 24px color-mix(in srgb, var(--primary-dark) 8%, transparent);
          padding: 26px 28px;
          animation: quizFadeUp 0.7s ease 0.3s both;
        }

        .quiz-console::before {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 3px;
          border-radius: 0 0 4px 4px;
          background: var(--gradient-primary);
        }

        /* flex-shrink:0 removed + max-width added so this block can no longer push the
           stats column past the card edge; min-width:0 lets it shrink before that point */
        .quiz-console__match {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 0 1 auto;
          min-width: 0;
          max-width: 250px;
          padding-right: 20px;
          border-right: 1px solid var(--border);
          box-sizing: border-box;
        }

        .quiz-console__ring-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
        }

        .quiz-console__ring { width: 100%; height: 100%; }

        .quiz-console__ring-fill {
          transition: stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1);
        }

        .quiz-console__pct {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          color: var(--primary-dark);
        }

        .quiz-console__text {
          display: flex;
          flex-direction: column;
          gap: 5px;
          text-align: left;
          min-width: 0;
        }

        .quiz-console__label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent-green);
          white-space: nowrap;
        }

        .quiz-console__name {
          font-size: 12px;
          color: var(--text-medium);
          line-height: 1.4;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .quiz-console__code {
          display: inline-block;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.03em;
          color: var(--primary);
          background: var(--primary-light);
          border-radius: var(--radius-sm);
          padding: 2px 7px;
          margin-right: 7px;
          line-height: 1;
          white-space: nowrap;
        }

        /* min-width:0 is the actual fix — without it a flex item will never shrink
           below its content's natural width, and long words spill past the card edge */
        .quiz-console__stats {
          display: flex;
          flex: 1 1 0%;
          min-width: 0;
        }

        .quiz-console__stat {
          flex: 1 1 0%;
          min-width: 0;
          text-align: center;
          padding: 0 6px;
          box-sizing: border-box;
        }

        .quiz-console__stat:not(:first-child) {
          border-left: 1px solid var(--border);
        }

        .quiz-console__value {
          font-size: 22px;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }

        /* word-break + overflow-wrap is the safety net: even a single long word will
           wrap inside its own column instead of overflowing it */
        .quiz-console__statlabel {
          font-size: 10.5px;
          font-weight: 500;
          color: var(--text-light);
          margin-top: 3px;
          line-height: 1.3;
          overflow-wrap: break-word;
          word-break: break-word;
          hyphens: auto;
        }

        @keyframes quizFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .quiz-hero { padding: 84px 18px 70px; }

          .quiz-console {
            flex-direction: column;
            gap: 20px;
            padding: 24px 22px;
          }

          .quiz-console__match {
            width: 100%;
            max-width: none;
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding-right: 0;
            padding-bottom: 18px;
            justify-content: center;
          }

          .quiz-console__stats { width: 100%; }

          .cta-primary, .cta-secondary { justify-content: center; width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .quiz-hero__eyebrow, .quiz-hero__headline, .quiz-hero__sub,
          .quiz-hero__cta-row, .quiz-hero__pills, .quiz-console {
            animation: none; opacity: 1; transform: none;
          }
          .pulse-dot { animation: none; }
          .cta-primary:hover, .cta-secondary:hover { transform: none; }
          .quiz-console__ring-fill { transition: none; }
        }
      `}</style>
    </section>
  );
}