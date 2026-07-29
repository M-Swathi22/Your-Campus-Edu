import { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Brain, Shield, Zap, Target } from "lucide-react";

// Swap this for your actual background image (a bright, airy campus / student photo reads best here)
import heroBg from "../../assets/images/ai-coursematch.png";

const TRUST_PILLS = [
  { icon: Brain, text: "Powered by Claude AI", color: "var(--accent-blue)" },
  { icon: Shield, text: "Personalised, not filtered", color: "var(--accent-green)" },
  { icon: Zap, text: "Results in 10 seconds", color: "var(--accent-pink)" },
];

const STATS = [
  { value: "100+", label: "Courses Mapped" },
  { value: "9", label: "Career Domains" },
  { value: "AI", label: "Real-Time Match" },
];

const TOP_MATCH = { code: "MBBS", name: "Bachelor of Medicine & Surgery", pct: 97 };

const RING_RADIUS = 30;
const RING_CIRC = 2 * Math.PI * RING_RADIUS;

export default function MatchHero() {
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
    <section className="match-hero">
      <div className="match-hero__media">
        <div className="match-hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="match-hero__wash" />
        <div className="match-hero__spot" />
      </div>

      <div className="match-hero__inner">
        <div className="match-hero__eyebrow">
          <span className="pulse-dot" />
          <Sparkles size={14} className="match-hero__eyebrow-icon" />
          AI Course Match Engine
        </div>

        <h1 className="match-hero__headline">
          Discover the course
          <br />
          <span className="grad-word">built for you</span> — not everyone.
        </h1>

        <p className="match-hero__sub">
          Answer a few quick questions about your goals, budget and dream destination.
          Our AI checks your profile against 100+ courses across 9 career domains and
          shows exactly where you fit — and why.
        </p>

        <div className="match-hero__cta-row">
          <a href="#course-match-form" className="cta-primary">
            <span>Start My AI Match</span>
            <ArrowRight size={17} className="cta-primary__arrow" />
          </a>
          <a href="/courses" className="cta-secondary">
            <span>Browse All Courses</span>
          </a>
        </div>

        <div className="match-hero__pills">
          {TRUST_PILLS.map(({ icon: Icon, text, color }) => (
            <div className="pill" key={text}>
              <Icon size={13} style={{ color }} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Signature: one unified frosted console — match ring + live stats */}
        <div className="match-console">
          <div className="match-console__match">
            <div className="match-console__ring-wrap">
              <svg className="match-console__ring" viewBox="0 0 72 72">
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
                  className="match-console__ring-fill"
                />
              </svg>
              <span className="match-console__pct">{TOP_MATCH.pct}%</span>
            </div>

            <div className="match-console__text">
              <span className="match-console__label">
                <Target size={11} />
                Top AI Match
              </span>
              <span className="match-console__name">
                <span className="match-console__code">{TOP_MATCH.code}</span>
                {TOP_MATCH.name}
              </span>
            </div>
          </div>

          <div className="match-console__stats">
            {STATS.map(({ value, label }) => (
              <div className="match-console__stat" key={label}>
                <div className="match-console__value">{value}</div>
                <div className="match-console__statlabel">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .match-hero {
          position: relative;
          font-family: var(--font-main);
          color: var(--text-dark);
          padding: 110px 24px 96px;
          overflow: visible;
          background: var(--bg-section);
          isolation: isolate;
        }

        .match-hero__media {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 0 0 var(--radius-xl) var(--radius-xl);
        }

        .match-hero__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(6%) brightness(0.98);
          transform: scale(1.02);
        }

        /* Stronger, layered wash: darkens/lightens progressively toward the
           text column regardless of what's busy in the photo underneath */
        .match-hero__wash {
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

        /* Subtle top-right color accent so the wash doesn't read as flat white */
        .match-hero__spot {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 88% 6%,
            color-mix(in srgb, var(--accent-blue) 18%, transparent) 0%,
            transparent 45%
          );
        }

        .match-hero__inner {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .match-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: color-mix(in srgb, var(--white) 88%, transparent);
          border: 1px solid color-mix(in srgb, var(--primary) 18%, var(--border));
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
          animation: heroFadeUp 0.7s ease both;
        }

        .match-hero__eyebrow-icon { color: var(--secondary); }

        .match-hero__headline {
          font-size: clamp(34px, 4.8vw, 56px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.01em;
          color: var(--primary-dark);
          margin-bottom: 20px;
          text-shadow: 0 2px 24px color-mix(in srgb, var(--white) 70%, transparent);
          animation: heroFadeUp 0.7s ease 0.05s both;
        }

        .grad-word {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .match-hero__sub {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-dark);
          max-width: 520px;
          margin: 0 auto 32px;
          animation: heroFadeUp 0.7s ease 0.1s both;
        }

        .match-hero__cta-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          animation: heroFadeUp 0.7s ease 0.15s both;
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
          border: 1px solid color-mix(in srgb, var(--primary) 16%, var(--border));
          color: var(--primary-dark);
          backdrop-filter: blur(8px);
        }

        .cta-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
        }

        .match-hero__pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 44px;
          animation: heroFadeUp 0.7s ease 0.2s both;
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
          animation: matchPulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes matchPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

        /* ===== Signature: unified frosted console ===== */

        .match-console {
          position: relative;
          width: 100%;
          max-width: 640px;
          display: flex;
          align-items: center;
          gap: 28px;
          background: color-mix(in srgb, var(--white) 94%, transparent);
          border: 1px solid color-mix(in srgb, var(--white) 96%, transparent);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: var(--radius-xl);
          box-shadow:
            0 20px 60px color-mix(in srgb, var(--primary-dark) 18%, transparent),
            0 8px 24px color-mix(in srgb, var(--primary-dark) 8%, transparent);
          padding: 26px 32px;
          animation: heroFadeUp 0.7s ease 0.3s both;
        }

        .match-console::before {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 3px;
          border-radius: 0 0 4px 4px;
          background: var(--gradient-primary);
        }

        .match-console__match {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
          padding-right: 26px;
          border-right: 1px solid var(--border);
        }

        .match-console__ring-wrap {
          position: relative;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
        }

        .match-console__ring { width: 100%; height: 100%; }

        .match-console__ring-fill {
          transition: stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1);
        }

        .match-console__pct {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          color: var(--primary-dark);
        }

        .match-console__text {
          display: flex;
          flex-direction: column;
          gap: 5px;
          text-align: left;
        }

        .match-console__label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent-green);
        }

        .match-console__name {
          font-size: 12px;
          color: var(--text-medium);
          line-height: 1.4;
        }

        .match-console__code {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.03em;
          color: var(--primary);
          background: var(--primary-light);
          border-radius: var(--radius-sm);
          padding: 2px 7px;
          margin-right: 7px;
        }

        .match-console__stats {
          display: flex;
          flex: 1;
        }

        .match-console__stat {
          flex: 1;
          text-align: center;
          padding: 0 10px;
        }

        .match-console__stat:not(:first-child) {
          border-left: 1px solid var(--border);
        }

        .match-console__value {
          font-size: 22px;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .match-console__statlabel {
          font-size: 11px;
          font-weight: 500;
          color: var(--text-light);
          margin-top: 3px;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .match-hero { padding: 84px 18px 70px; }

          .match-console {
            flex-direction: column;
            gap: 20px;
            padding: 24px 22px;
          }

          .match-console__match {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid var(--border);
            padding-right: 0;
            padding-bottom: 18px;
            justify-content: center;
          }

          .match-console__stats { width: 100%; }

          .cta-primary, .cta-secondary { justify-content: center; width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .match-hero__eyebrow, .match-hero__headline, .match-hero__sub,
          .match-hero__cta-row, .match-hero__pills, .match-console {
            animation: none; opacity: 1; transform: none;
          }
          .pulse-dot { animation: none; }
          .cta-primary:hover, .cta-secondary:hover { transform: none; }
          .match-console__ring-fill { transition: none; }
        }
      `}</style>
    </section>
  );
}