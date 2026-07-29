import { useState, Fragment } from "react";
import { Sparkles, ArrowRight, AlertCircle } from "lucide-react";
import { QUIZ_QUESTIONS } from "../../data/quizQuestions";

/* ─── Chip ─── */
function Chip({ emoji, label, selected, onClick }) {
  return (
    <button
      type="button"
      className={`qq-chip${selected ? " qq-chip--selected" : ""}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      {emoji && <span className="qq-chip-emoji">{emoji}</span>}
      {label}
    </button>
  );
}

/* ─── Step rail ─── */
function StepRail({ current, total }) {
  return (
    <div className="qq-rail">
      {Array.from({ length: total }).map((_, i) => (
        <Fragment key={i}>
          <div
            className={`qq-rail-node${i === current ? " qq-rail-node--active" : ""}${
              i < current ? " qq-rail-node--done" : ""
            }`}
          >
            {i + 1}
          </div>
          {i < total - 1 && (
            <span className={`qq-rail-line${i < current ? " qq-rail-line--done" : ""}`} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

/* ─── Main quiz ─── */
export default function QuizQuestions({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");

  const question = QUIZ_QUESTIONS[step];
  const isLast = step === QUIZ_QUESTIONS.length - 1;
  const selectedValue = answers[question.id];

  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    setError("");
  };

  const handleNext = () => {
    if (!selectedValue) {
      setError("Please pick an option to continue.");
      return;
    }
    setError("");
    if (isLast) {
      onComplete(answers);
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setError("");
    setStep((s) => s - 1);
  };

  return (
    <section id="quiz-questions" className="qq-section">
      <div className="qq-bloom qq-bloom--a" />
      <div className="qq-bloom qq-bloom--b" />

      <div className="qq-wrap">
        {/* Section header */}
        <div className="qq-header">
          <span className="qq-eyebrow">
            <Sparkles size={14} />
            Quick Personality Check
          </span>
          <h2 className="qq-title">
            Just Go With <span className="qq-grad-word">Your Gut</span>
          </h2>
          <p className="qq-subtitle">One question at a time — no overthinking needed.</p>
        </div>

        {/* Card */}
        <div className="qq-card">
          {/* Progress */}
          <div className="qq-progress">
            <StepRail current={step} total={QUIZ_QUESTIONS.length} />
            <span className="qq-progress-count">
              {step + 1} / {QUIZ_QUESTIONS.length}
            </span>
          </div>

          {/* Question step */}
          <div className="qq-step" key={question.id}>
            <div className="qq-step-head">
              <div className="qq-step-icon">
                <Sparkles size={18} />
              </div>
              <span className="qq-tag">Required</span>
            </div>

            <h3 className="qq-question">{question.question}</h3>
            <p className="qq-hint">{question.subtitle}</p>

            <div className="qq-chips">
              {question.options.map((opt) => (
                <Chip
                  key={opt.value}
                  emoji={opt.emoji}
                  label={opt.label}
                  selected={selectedValue === opt.value}
                  onClick={() => handleSelect(opt.value)}
                />
              ))}
            </div>

            {error && (
              <div className="qq-error">
                <AlertCircle size={15} />
                {error}
              </div>
            )}

            <div className="qq-nav">
              {step > 0 && (
                <button type="button" className="qq-btn-back" onClick={handleBack}>
                  ← Back
                </button>
              )}
              <button type="button" className="qq-btn-next" onClick={handleNext}>
                {isLast ? (
                  <>
                    <Sparkles size={17} />
                    See My Results
                    <ArrowRight size={17} />
                  </>
                ) : (
                  "Continue →"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .qq-section {
          position: relative;
          overflow: hidden;
          font-family: var(--font-main);
          background: var(--bg-section);
          padding: 88px 24px;
        }

        .qq-bloom {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
        }

        .qq-bloom--a {
          top: -110px;
          left: -90px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, color-mix(in srgb, var(--accent-blue) 22%, transparent) 0%, transparent 70%);
        }

        .qq-bloom--b {
          bottom: -130px;
          right: -110px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, color-mix(in srgb, var(--accent-pink) 18%, transparent) 0%, transparent 70%);
        }

        .qq-wrap { position: relative; z-index: 1; max-width: 780px; margin: 0 auto; }

        /* Header */
        .qq-header { text-align: center; margin-bottom: 48px; }

        .qq-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 100px;
          padding: 7px 18px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .qq-title {
          font-size: clamp(24px, 4vw, 38px);
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.2;
          margin: 0 0 12px;
        }

        .qq-grad-word {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .qq-subtitle {
          font-size: 15px;
          color: var(--text-medium);
          max-width: 480px;
          margin: 0 auto;
        }

        /* Card */
        .qq-card {
          position: relative;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: clamp(28px, 5vw, 52px);
          box-shadow:
            var(--shadow-lg),
            0 30px 80px color-mix(in srgb, var(--primary) 10%, transparent);
          overflow: hidden;
        }

        .qq-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: var(--gradient-primary);
        }

        /* Progress rail */
        .qq-progress { margin-bottom: 36px; }

        .qq-rail {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }

        .qq-rail-node {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--text-light);
          font-size: 13px;
          font-weight: 700;
          transition: var(--transition);
        }

        .qq-rail-node--done,
        .qq-rail-node--active {
          background: var(--gradient-primary);
          border-color: transparent;
          color: var(--white);
        }

        .qq-rail-node--active {
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary) 18%, transparent);
        }

        .qq-rail-line {
          flex: 1;
          height: 2px;
          margin: 0 4px;
          background: var(--border);
          transition: var(--transition);
        }

        .qq-rail-line--done { background: var(--gradient-primary); }

        .qq-progress-count {
          display: block;
          text-align: right;
          font-size: 12px;
          color: var(--text-light);
          font-weight: 600;
        }

        /* Step */
        .qq-step { animation: qqFadeIn 0.4s ease both; }

        .qq-step-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .qq-step-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: var(--radius-md);
          background: var(--gradient-primary);
          color: var(--white);
          box-shadow: 0 6px 16px color-mix(in srgb, var(--primary) 30%, transparent);
        }

        .qq-tag {
          display: inline-block;
          border-radius: var(--radius-sm);
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--secondary-light);
          color: var(--secondary);
        }

        .qq-question {
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.3;
          margin: 0 0 8px;
        }

        .qq-hint {
          font-size: 13px;
          color: var(--text-light);
          margin: 0 0 28px;
        }

        /* Chips */
        .qq-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }

        .qq-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--text-medium);
          font-size: 13px;
          font-weight: 500;
          font-family: var(--font-main);
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
        }

        .qq-chip-emoji { font-size: 16px; line-height: 1; }

        .qq-chip:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-light);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .qq-chip--selected {
          border: 1.5px solid transparent;
          background: var(--gradient-primary);
          color: var(--white);
          font-weight: 600;
          box-shadow: var(--shadow-md);
        }

        .qq-chip--selected:hover {
          background: var(--gradient-primary);
          color: var(--white);
          transform: none;
        }

        /* Error */
        .qq-error {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--danger);
          font-size: 13px;
          margin-bottom: 16px;
        }

        /* Nav buttons */
        .qq-nav { display: flex; gap: 12px; margin-top: 4px; }

        .qq-btn-back {
          padding: 13px 24px;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--text-medium);
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-main);
          cursor: pointer;
          transition: var(--transition);
        }

        .qq-btn-back:hover { border-color: var(--primary); color: var(--primary); }

        .qq-btn-next {
          flex: 1;
          padding: 13px 24px;
          border-radius: var(--radius-md);
          border: none;
          background: var(--gradient-secondary);
          color: var(--white);
          font-size: 15px;
          font-weight: 700;
          font-family: var(--font-main);
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .qq-btn-next:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }

        @keyframes qqFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .qq-step { animation: none; }
          .qq-chip:hover, .qq-btn-next:hover { transform: none; }
        }

        /* Tablet */
        @media (max-width: 768px) {
          .qq-section { padding: 72px 20px; }
          .qq-card { padding: clamp(24px, 5vw, 36px); }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .qq-section { padding: 56px 16px; }
          .qq-header { margin-bottom: 32px; }
          .qq-eyebrow { font-size: 11px; padding: 6px 14px; }
          .qq-card { border-radius: var(--radius-lg); padding: 22px 18px; }
          .qq-rail-node { width: 26px; height: 26px; font-size: 11px; }
          .qq-rail-line { margin: 0 2px; }
          .qq-progress { margin-bottom: 24px; }
          .qq-step-icon { width: 34px; height: 34px; }
          .qq-hint { margin-bottom: 20px; }
          .qq-chips { gap: 8px; margin-bottom: 20px; }
          .qq-chip { padding: 9px 16px; font-size: 12.5px; width: 100%; }
          .qq-nav { flex-direction: column-reverse; }
          .qq-btn-back, .qq-btn-next { width: 100%; justify-content: center; }
        }

        @media (max-width: 380px) {
          .qq-chip-emoji { font-size: 14px; }
          .qq-question { line-height: 1.35; }
        }
      `}</style>
    </section>
  );
}