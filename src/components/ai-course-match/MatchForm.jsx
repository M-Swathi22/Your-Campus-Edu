import { useState, Fragment } from "react";
import {
  Sparkles,
  ArrowRight,
  AlertCircle,
  GraduationCap,
  Briefcase,
  BookOpen,
  Layers,   
  Wallet,
  MapPin,
} from "lucide-react";

/* ─── Data ─── */
const FORM_STEPS = [
  {
    id: "stream",
    icon: GraduationCap,
    question: "What is your current academic stream?",
    hint: "This shapes which course families are relevant to you.",
    required: true,
    options: [
      { label: "Science — Biology", value: "Science (Biology)" },
      { label: "Science — Maths", value: "Science (Maths)" },
      { label: "Commerce", value: "Commerce" },
      { label: "Arts & Humanities", value: "Arts & Humanities" },
      { label: "Diploma / ITI", value: "Diploma / ITI" },
      { label: "Other / Not Sure", value: "Other" },
    ],
  },
  {
    id: "careerGoal",
    icon: Briefcase,
    question: "What career are you aiming for?",
    hint: "Choose the closest one — you can refine later.",
    required: true,
    options: [
      { label: "Doctor / Medical Professional", value: "Doctor / Medical professional" },
      { label: "Engineer / Software Developer", value: "Engineer / Software developer" },
      { label: "Business Owner / MBA", value: "Business owner / Entrepreneur" },
      { label: "Lawyer / Legal Professional", value: "Lawyer / Legal professional" },
      { label: "Researcher / Scientist", value: "Researcher / Scientist" },
      { label: "Healthcare Support Role", value: "Healthcare support role" },
      { label: "Not Decided Yet", value: "Not decided yet" },
    ],
  },
  {
    id: "subject",
    icon: BookOpen,
    question: "Which subjects genuinely excite you?",
    hint: "Pick the one you would study even if it wasn't exam-relevant.",
    required: true,
    options: [
      { label: "Biology & Life Sciences", value: "Biology & Life Sciences" },
      { label: "Mathematics & Statistics", value: "Mathematics & Statistics" },
      { label: "Physics", value: "Physics" },
      { label: "Chemistry", value: "Chemistry" },
      { label: "Computer Science & Coding", value: "Computer Science & Coding" },
      { label: "Economics & Finance", value: "Economics & Finance" },
      { label: "History & Humanities", value: "History & Humanities" },
      { label: "Creative Arts & Design", value: "Creative Arts & Design" },
    ],
  },
  {
    id: "workStyle",
    icon: Layers,
    question: "How do you prefer to work?",
    hint: "This tells us whether lab-based, desk-based, or people-facing roles suit you.",
    required: false,
    options: [
      { label: "Hands-on — Labs & Fieldwork", value: "Hands-on / Lab & fieldwork" },
      { label: "Analytical — Problem Solving", value: "Problem-solving & analytical thinking" },
      { label: "People-Facing — Communication", value: "People & communication focused" },
      { label: "Creative — Design & Build", value: "Creative & design-oriented" },
      { label: "Research — Deep Study", value: "Research & deep reading" },
      { label: "Business — Strategy & Growth", value: "Business & strategy" },
    ],
  },
  {
    id: "budget",
    icon: Wallet,
    question: "What's your annual budget for fees?",
    hint: "This helps us filter out colleges that are realistically within reach.",
    required: true,
    options: [
      { label: "Under ₹2L / year", value: "Under ₹2L per year" },
      { label: "₹2L – ₹5L / year", value: "₹2L–5L per year" },
      { label: "₹5L – ₹10L / year", value: "₹5L–10L per year" },
      { label: "₹10L+ / year", value: "₹10L+ per year" },
      { label: "I need scholarships / aid", value: "Needs scholarship or financial aid" },
      { label: "Not Sure Yet", value: "Not sure yet" },
    ],
  },
  {
    id: "destination",
    icon: MapPin,
    question: "Where would you like to study?",
    hint: "Pick a region to start — you can always widen the search later.",
    required: false,
    options: [
      { label: "Tamil Nadu", value: "Tamil Nadu" },
      { label: "Kerala", value: "Kerala" },
      { label: "Karnataka", value: "Karnataka" },
      { label: "Anywhere in India", value: "Anywhere in India" },
      { label: "Open to Studying Abroad", value: "Open to studying abroad" },
      { label: "Not Sure Yet", value: "Not sure yet" },
    ],
  },
];

const STEP_ICONS = [...FORM_STEPS.map((s) => s.icon), Sparkles];

/* ─── Chip ─── */
function Chip({ label, selected, onClick }) {
  return (
    <button
      type="button"
      className={`mf-chip${selected ? " mf-chip--selected" : ""}`}
      onClick={onClick}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
}

/* ─── Step rail ─── */
function StepRail({ current }) {
  return (
    <div className="mf-rail">
      {STEP_ICONS.map((Icon, i) => (
        <Fragment key={i}>
          <div
            className={`mf-rail-node${i === current ? " mf-rail-node--active" : ""}${
              i < current ? " mf-rail-node--done" : ""
            }`}
          >
            <Icon size={14} />
          </div>
          {i < STEP_ICONS.length - 1 && (
            <span className={`mf-rail-line${i < current ? " mf-rail-line--done" : ""}`} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

/* ─── Main form ─── */
export default function MatchForm({ onSubmit }) {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [extra, setExtra] = useState("");
  const [error, setError] = useState("");

  const current = FORM_STEPS[step];
  const isExtraStep = step === FORM_STEPS.length;
  const isLast = step === FORM_STEPS.length - 1;
  const StepIcon = current?.icon;

  const handleSelect = (val) => {
    setSelections((prev) => ({ ...prev, [current.id]: val }));
    setError("");
  };

  const handleNext = () => {
    if (current.required && !selections[current.id]) {
      setError("Please pick an option to continue.");
      return;
    }
    setError("");
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setError("");
    setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    onSubmit({
      stream: selections.stream,
      careerGoal: selections.careerGoal,
      favoriteSubject: selections.subject,
      workStyle: selections.workStyle || "",
      budget: selections.budget || "",
      destination: selections.destination || "",
      extra,
    });
  };

  return (
    <section id="course-match-form" className="mf-section">
      <div className="mf-bloom mf-bloom--a" />
      <div className="mf-bloom mf-bloom--b" />

      <div className="mf-wrap">
        {/* Section header */}
        <div className="mf-header">
          <span className="mf-eyebrow">
            <Sparkles size={14} />
            Step-by-Step Profile Builder
          </span>
          <h2 className="mf-title">
            Tell Us <span className="mf-grad-word">Who You Are</span>
          </h2>
          <p className="mf-subtitle">
            One question at a time. No dropdowns, no guessing — just clear choices.
          </p>
        </div>

        {/* Card */}
        <div className="mf-card">
          {/* Progress */}
          <div className="mf-progress">
            <StepRail current={step} />
            <span className="mf-progress-count">
              {Math.min(step + 1, FORM_STEPS.length + 1)} / {FORM_STEPS.length + 1}
            </span>
          </div>

          {/* Question steps */}
          {!isExtraStep && (
            <div className="mf-step" key={step}>
              <div className="mf-step-head">
                <div className="mf-step-icon">{StepIcon && <StepIcon size={18} />}</div>
                <span className={`mf-tag${current.required ? " mf-tag--required" : " mf-tag--optional"}`}>
                  {current.required ? "Required" : "Optional — helps accuracy"}
                </span>
              </div>

              <h3 className="mf-question">{current.question}</h3>
              <p className="mf-hint">{current.hint}</p>

              <div className="mf-chips">
                {current.options.map((opt) => (
                  <Chip
                    key={opt.value}
                    label={opt.label}
                    selected={selections[current.id] === opt.value}
                    onClick={() => handleSelect(opt.value)}
                  />
                ))}
              </div>

              {error && (
                <div className="mf-error">
                  <AlertCircle size={15} />
                  {error}
                </div>
              )}

              <div className="mf-nav">
                {step > 0 && (
                  <button type="button" className="mf-btn-back" onClick={handleBack}>
                    ← Back
                  </button>
                )}
                <button type="button" className="mf-btn-next" onClick={handleNext}>
                  {isLast ? "One more thing →" : "Continue →"}
                </button>
              </div>
            </div>
          )}

          {/* Extra info + submit step */}
          {isExtraStep && (
            <div className="mf-step" key="extra">
              <div className="mf-step-head">
                <div className="mf-step-icon">
                  <Sparkles size={18} />
                </div>
                <span className="mf-tag mf-tag--optional">Optional — but powerful</span>
              </div>

              <h3 className="mf-question">Anything else the AI should know?</h3>
              <p className="mf-hint">
                Add your marks, a specific interest, future country preference, or anything unique about you.
              </p>

              <textarea
                className="mf-textarea"
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
                placeholder="e.g. I scored 92% in Biology, I want to work in oncology, I'm open to Tamil Nadu or Kerala colleges…"
              />

              {/* Profile summary */}
              <div className="mf-summary">
                <span className="mf-summary-label">Your profile summary:</span>
                {FORM_STEPS.filter((s) => selections[s.id]).map((s) => (
                  <span className="mf-summary-chip" key={s.id}>
                    <s.icon size={11} />
                    {selections[s.id]}
                  </span>
                ))}
              </div>

              <div className="mf-nav">
                <button type="button" className="mf-btn-back" onClick={handleBack}>
                  ← Back
                </button>
                <button type="button" className="mf-btn-submit" onClick={handleSubmit}>
                  <Sparkles size={17} />
                  Analyse My Profile with AI
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .mf-section {
          position: relative;
          overflow: hidden;
          font-family: var(--font-main);
          background: var(--bg-section);
          padding: 88px 24px;
        }

        .mf-bloom {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
        }

        .mf-bloom--a {
          top: -110px;
          left: -90px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, color-mix(in srgb, var(--accent-blue) 22%, transparent) 0%, transparent 70%);
        }

        .mf-bloom--b {
          bottom: -130px;
          right: -110px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, color-mix(in srgb, var(--accent-pink) 18%, transparent) 0%, transparent 70%);
        }

        .mf-wrap { position: relative; z-index: 1; max-width: 780px; margin: 0 auto; }

        /* Header */
        .mf-header { text-align: center; margin-bottom: 48px; }

        .mf-eyebrow {
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

        .mf-title {
          font-size: clamp(24px, 4vw, 38px);
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.2;
          margin: 0 0 12px;
        }

        .mf-grad-word {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mf-subtitle {
          font-size: 15px;
          color: var(--text-medium);
          max-width: 480px;
          margin: 0 auto;
        }

        /* Card */
        .mf-card {
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

        .mf-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: var(--gradient-primary);
        }

        /* Progress rail */
        .mf-progress { margin-bottom: 36px; }

        .mf-rail {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }

        .mf-rail-node {
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
          transition: var(--transition);
        }

        .mf-rail-node--done,
        .mf-rail-node--active {
          background: var(--gradient-primary);
          border-color: transparent;
          color: var(--white);
        }

        .mf-rail-node--active {
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary) 18%, transparent);
        }

        .mf-rail-line {
          flex: 1;
          height: 2px;
          margin: 0 4px;
          background: var(--border);
          transition: var(--transition);
        }

        .mf-rail-line--done { background: var(--gradient-primary); }

        .mf-progress-count {
          display: block;
          text-align: right;
          font-size: 12px;
          color: var(--text-light);
          font-weight: 600;
        }

        /* Step */
        .mf-step { animation: mfFadeIn 0.4s ease both; }

        .mf-step-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .mf-step-icon {
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

        .mf-tag {
          display: inline-block;
          border-radius: var(--radius-sm);
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .mf-tag--required { background: var(--secondary-light); color: var(--secondary); }
        .mf-tag--optional { background: var(--bg-light); color: var(--text-light); }

        .mf-question {
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.3;
          margin: 0 0 8px;
        }

        .mf-hint {
          font-size: 13px;
          color: var(--text-light);
          margin: 0 0 28px;
        }

        /* Chips */
        .mf-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }

        .mf-chip {
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

        .mf-chip:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-light);
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }

        .mf-chip--selected {
          border: 1.5px solid transparent;
          background: var(--gradient-primary);
          color: var(--white);
          font-weight: 600;
          box-shadow: var(--shadow-md);
        }

        .mf-chip--selected:hover {
          background: var(--gradient-primary);
          color: var(--white);
          transform: none;
        }

        /* Error */
        .mf-error {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--danger);
          font-size: 13px;
          margin-bottom: 16px;
        }

        /* Nav buttons */
        .mf-nav { display: flex; gap: 12px; margin-top: 4px; }

        .mf-btn-back {
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

        .mf-btn-back:hover { border-color: var(--primary); color: var(--primary); }

        .mf-btn-next {
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

        .mf-btn-next:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }

        .mf-btn-submit {
          flex: 1;
          padding: 15px 24px;
          border-radius: var(--radius-md);
          border: none;
          background: var(--gradient-primary);
          color: var(--white);
          font-size: 15px;
          font-weight: 700;
          font-family: var(--font-main);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 24px color-mix(in srgb, var(--accent-green) 25%, transparent);
          transition: var(--transition);
        }

        .mf-btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px color-mix(in srgb, var(--accent-green) 32%, transparent);
        }

        /* Textarea */
        .mf-textarea {
          width: 100%;
          min-height: 110px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          font-size: 14px;
          font-family: var(--font-main);
          color: var(--text-dark);
          outline: none;
          resize: vertical;
          margin-bottom: 24px;
          transition: var(--transition);
        }

        .mf-textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary) 12%, transparent);
        }

        /* Summary */
        .mf-summary {
          background: var(--bg-light);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .mf-summary-label {
          font-size: 12px;
          color: var(--text-light);
          width: 100%;
          margin-bottom: 4px;
          font-weight: 600;
        }

        .mf-summary-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
        }

        @keyframes mfFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .mf-step { animation: none; }
          .mf-chip:hover, .mf-btn-next:hover, .mf-btn-submit:hover { transform: none; }
        }

        @media (max-width: 560px) {
          .mf-section { padding: 64px 18px; }
          .mf-rail-node { width: 26px; height: 26px; }
          .mf-rail-line { margin: 0 2px; }
          .mf-nav { flex-direction: column-reverse; }
          .mf-btn-back, .mf-btn-next, .mf-btn-submit { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}