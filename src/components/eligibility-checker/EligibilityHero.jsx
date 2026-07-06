import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight, ScanLine, ShieldCheck, Clock3, CheckCircle2 } from "lucide-react";

// Swap this for your actual background image (a bright, airy campus / student photo reads best here)
import heroBg from "../../assets/images/eligibility.png";

const TRUST_PILLS = [
  { icon: ScanLine, text: "Checked against live cutoffs", color: "var(--accent-blue)" },
  { icon: ShieldCheck, text: "Verified eligibility logic", color: "var(--accent-green)" },
  { icon: Clock3, text: "Verdict in 10 seconds", color: "var(--accent-pink)" },
];

const STATS = [
  { value: "50+", label: "Course Categories" },
  { value: "7+", label: "Study Destinations" },
  { value: "92%", label: "Match Accuracy" },
];

const SCAN_FIELDS = ["Stream", "Marks", "Entrance Exam", "English Score"];

export default function EligibilityHero() {
  const [scanIndex, setScanIndex] = useState(-1);
  const [verdictIn, setVerdictIn] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const timers = [];
    SCAN_FIELDS.forEach((_, i) => {
      timers.push(setTimeout(() => setScanIndex(i), 600 + i * 420));
    });
    timers.push(
      setTimeout(() => setVerdictIn(true), 600 + SCAN_FIELDS.length * 420 + 350)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="elig-hero">
      <div className="elig-hero__media">
        <div className="elig-hero__bg" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="elig-hero__wash" />
      </div>

      <div className="elig-hero__inner">
        <div className="elig-hero__eyebrow">
          <span className="pulse-dot" />
          <ScanLine size={14} className="elig-hero__eyebrow-icon" />
          AI Eligibility Checker
        </div>

        <h1 className="elig-hero__headline">
          Know your eligibility
          <br />
          <span className="grad-word">before you apply.</span>
        </h1>

        <p className="elig-hero__sub">
          Check eligibility for Indian colleges or international universities
          in seconds. Our AI evaluates your stream, marks, entrance scores
          and more — then issues a clear, personalised verdict.
        </p>

        <div className="elig-hero__cta-row">
          <a href="#eligibility-form" className="cta-primary">
            <span>Check My Eligibility</span>
            <ArrowRight size={17} className="cta-primary__arrow" />
          </a>
          <a href="/courses" className="cta-secondary">
            <span>Browse Courses</span>
          </a>
        </div>

        <div className="elig-hero__pills">
          {TRUST_PILLS.map(({ icon: Icon, text, color }) => (
            <div className="pill" key={text}>
              <Icon size={13} style={{ color }} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Signature: unified frosted console — scan checklist resolving into a verdict strip */}
        <div className="elig-console">
          <div className="elig-console__scan">
            {SCAN_FIELDS.map((label, i) => {
              const active = i <= scanIndex;
              return (
                <div className={`elig-console__field ${active ? "is-active" : ""}`} key={label}>
                  <span className="elig-console__field-icon">
                    {active && <CheckCircle2 size={12} strokeWidth={2.5} />}
                  </span>
                  <span className="elig-console__field-label">{label}</span>
                </div>
              );
            })}
          </div>

          <div className={`elig-console__verdict ${verdictIn ? "is-in" : ""}`}>
            <span className="elig-console__verdict-result">
              {verdictIn ? "Eligible" : "Scanning your profile…"}
            </span>
            <span className="elig-console__verdict-match">
              {verdictIn ? "92% match · MBBS" : ""}
            </span>
          </div>

          <div className="elig-console__stats">
            {STATS.map(({ value, label }) => (
              <div className="elig-console__stat" key={label}>
                <div className="elig-console__value">{value}</div>
                <div className="elig-console__statlabel">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .elig-hero {
          position: relative;
          font-family: var(--font-main);
          color: var(--text-dark);
          padding: 110px 24px 96px;
          overflow: visible;
          background: var(--bg-section);
          isolation: isolate;
        }

        .elig-hero__media {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 0 0 var(--radius-xl) var(--radius-xl);
        }

        .elig-hero__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(4%) brightness(1.02);
          transform: scale(1.02);
        }

        .elig-hero__wash {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              135deg,
              color-mix(in srgb, var(--primary-light) 68%, transparent) 0%,
              color-mix(in srgb, var(--bg-section) 58%, transparent) 50%,
              color-mix(in srgb, var(--white) 48%, transparent) 100%
            ),
            radial-gradient(circle at 88% 8%, color-mix(in srgb, var(--accent-green) 14%, transparent) 0%, transparent 50%);
        }

        .elig-hero__inner {
          position: relative;
          z-index: 2;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .elig-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: color-mix(in srgb, var(--white) 62%, transparent);
          border: 1px solid var(--border);
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
          animation: eligFadeUp 0.7s ease both;
        }

        .elig-hero__eyebrow-icon { color: var(--accent-green); }

        .elig-hero__headline {
          font-size: clamp(34px, 4.8vw, 56px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.01em;
          color: var(--primary-dark);
          margin-bottom: 20px;
          animation: eligFadeUp 0.7s ease 0.05s both;
        }

        .grad-word {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .elig-hero__sub {
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-medium);
          max-width: 520px;
          margin: 0 auto 32px;
          animation: eligFadeUp 0.7s ease 0.1s both;
        }

        .elig-hero__cta-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          animation: eligFadeUp 0.7s ease 0.15s both;
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
          background: color-mix(in srgb, var(--white) 70%, transparent);
          border: 1px solid var(--border);
          color: var(--primary-dark);
          backdrop-filter: blur(8px);
        }

        .cta-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
        }

        .elig-hero__pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 44px;
          animation: eligFadeUp 0.7s ease 0.2s both;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: color-mix(in srgb, var(--white) 55%, transparent);
          border: 1px solid var(--border);
          backdrop-filter: blur(6px);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-medium);
        }

        .pill svg { flex-shrink: 0; }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-green);
          animation: eligPulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes eligPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

        /* ===== Signature: unified frosted console — scan checklist + verdict strip ===== */

        .elig-console {
          width: 100%;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          background: color-mix(in srgb, var(--white) 82%, transparent);
          border: 1px solid color-mix(in srgb, var(--white) 90%, transparent);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: var(--radius-xl);
          box-shadow:
            0 20px 60px color-mix(in srgb, var(--primary-dark) 18%, transparent),
            0 8px 24px color-mix(in srgb, var(--primary-dark) 8%, transparent);
          padding: 26px 32px;
          animation: eligFadeUp 0.7s ease 0.3s both;
        }

        .elig-console__scan {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }

        .elig-console__field {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: color-mix(in srgb, var(--white) 50%, transparent);
          transition: all 0.45s cubic-bezier(.4,0,.2,1);
        }

        .elig-console__field.is-active {
          border-color: color-mix(in srgb, var(--accent-green) 45%, transparent);
          background: color-mix(in srgb, var(--accent-green) 10%, transparent);
        }

        .elig-console__field-icon {
          width: 14px;
          height: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-green);
          flex-shrink: 0;
        }

        .elig-console__field-label {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-light);
          transition: color 0.4s ease;
        }

        .elig-console__field.is-active .elig-console__field-label {
          color: var(--primary-dark);
        }

        .elig-console__verdict {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 10px;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }

        .elig-console__verdict-result {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: var(--text-light);
          transition: color 0.5s ease;
        }

        .elig-console__verdict.is-in .elig-console__verdict-result {
          color: var(--accent-green);
        }

        .elig-console__verdict-match {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--primary);
          opacity: 0;
          transform: translateY(3px);
          transition: all 0.5s cubic-bezier(.4,0,.2,1);
        }

        .elig-console__verdict.is-in .elig-console__verdict-match {
          opacity: 1;
          transform: translateY(0);
        }

        .elig-console__stats {
          display: flex;
        }

        .elig-console__stat {
          flex: 1;
          text-align: center;
          padding: 0 10px;
        }

        .elig-console__stat:not(:first-child) {
          border-left: 1px solid var(--border);
        }

        .elig-console__value {
          font-size: 22px;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .elig-console__statlabel {
          font-size: 11px;
          font-weight: 500;
          color: var(--text-light);
          margin-top: 3px;
        }

        @keyframes eligFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .elig-hero { padding: 84px 18px 70px; }

          .elig-console {
            padding: 22px 18px;
          }

          .elig-console__scan {
            gap: 8px;
          }

          .elig-console__field {
            padding: 6px 11px;
          }

          .elig-console__field-label {
            font-size: 11.5px;
          }

          .cta-primary, .cta-secondary { justify-content: center; width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .elig-hero__eyebrow, .elig-hero__headline, .elig-hero__sub,
          .elig-hero__cta-row, .elig-hero__pills, .elig-console {
            animation: none; opacity: 1; transform: none;
          }
          .pulse-dot { animation: none; }
          .cta-primary:hover, .cta-secondary:hover { transform: none; }
          .elig-console__field, .elig-console__verdict-result, .elig-console__verdict-match {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}