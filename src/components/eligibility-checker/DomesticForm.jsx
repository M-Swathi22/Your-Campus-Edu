import { useState } from "react";
import { Sparkles, ArrowRight, AlertCircle, ArrowLeft } from "lucide-react";
import { DOMESTIC_RULES } from "../../data/eligibilityRules";
import EligibilityProgressBar from "./EligibilityProgressBar";

const STEPS = [
  {
    id: "stream",
    question: "What is your Class 12 stream?",
    hint: "This determines which courses you can apply to.",
    required: true,
    type: "chip",
    options: [
      { label: "Science — Biology (PCB)", value: "Science (Biology)" },
      { label: "Science — Maths (PCM)", value: "Science (Maths)" },
      { label: "Commerce", value: "Commerce" },
      { label: "Arts & Humanities", value: "Arts & Humanities" },
      { label: "Diploma / ITI", value: "Diploma / ITI" },
      { label: "Other", value: "Other" },
    ],
  },
  {
    id: "percentage",
    question: "What is your Class 12 percentage?",
    hint: "Enter your overall aggregate percentage (e.g. 78.4).",
    required: true,
    type: "number",
    placeholder: "e.g. 78.5",
  },
  {
    id: "courseCategory",
    question: "Which course category are you targeting?",
    hint: "Pick the field you want to study.",
    required: true,
    type: "chip",
    options: Object.entries(DOMESTIC_RULES).map(([key, r]) => ({
      label: r.label.split("(")[0].trim(),
      value: key,
    })),
  },
  {
    id: "hasEntrance",
    question: "Have you appeared for any entrance exam?",
    hint: "e.g. NEET, JEE, CLAT, CAT, CUET",
    required: true,
    type: "chip",
    options: [
      { label: "Yes, I have given an entrance exam", value: "Yes" },
      { label: "No, not yet", value: "No" },
      { label: "Currently preparing", value: "Preparing" },
    ],
  },
];

function Chip({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`elig-dom__chip ${selected ? "is-selected" : ""}`}
    >
      {label}
    </button>
  );
}

export default function DomesticForm({ onSubmit, onBack }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const [extra, setExtra] = useState("");
  const [entranceScore, setEntranceScore] = useState("");

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const isExtraStep = step === STEPS.length;
  const totalSteps = STEPS.length + 1;

  const handleChip = (val) => { setValues((p) => ({ ...p, [current.id]: val })); setError(""); };
  const handleNumber = (val) => { setValues((p) => ({ ...p, [current.id]: val })); setError(""); };

  const handleNext = () => {
    if (current.required && !values[current.id]) { setError("Please make a selection to continue."); return; }
    if (current.type === "number") {
      const n = parseFloat(values[current.id]);
      if (isNaN(n) || n < 0 || n > 100) { setError("Enter a valid percentage between 0 and 100."); return; }
    }
    setError(""); setStep((s) => s + 1);
  };

  const handleFinalSubmit = () => {
    onSubmit({ ...values, entranceScore, extraInfo: extra });
  };

  return (
    <div className="elig-dom">
      <button type="button" onClick={onBack} className="elig-dom__back">
        <ArrowLeft size={14} /> Change study type
      </button>

      <div className="elig-dom__card">
        <div className="elig-dom__progress">
          <EligibilityProgressBar
            total={totalSteps}
            current={step}
            accent="domestic"
            label="India / Domestic Eligibility"
          />
        </div>

        {!isExtraStep && (
          <div>
            <div className="elig-dom__qhead">
              <span className="elig-dom__reqtag">
                {current.required ? "Required" : "Optional"}
              </span>
              <h3 className="elig-dom__question">{current.question}</h3>
              <p className="elig-dom__hint">{current.hint}</p>
            </div>

            {current.type === "chip" && (
              <div className="elig-dom__chips">
                {current.options.map((opt) => (
                  <Chip key={opt.value} label={opt.label} selected={values[current.id] === opt.value} onClick={() => handleChip(opt.value)} />
                ))}
              </div>
            )}

            {current.type === "number" && (
              <div className="elig-dom__numwrap">
                <div className="elig-dom__numfield">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={values[current.id] || ""}
                    onChange={(e) => handleNumber(e.target.value)}
                    placeholder={current.placeholder}
                    className="elig-dom__numinput"
                  />
                  <span className="elig-dom__numsuffix">%</span>
                </div>
              </div>
            )}

            {current.id === "hasEntrance" && values.hasEntrance === "Yes" && (
              <div className="elig-dom__extrafield">
                <label className="elig-dom__label">Enter your exam name & score / rank:</label>
                <input
                  type="text"
                  value={entranceScore}
                  onChange={(e) => setEntranceScore(e.target.value)}
                  placeholder="e.g. NEET 2024 — 620/720 or JEE Main — 85 percentile"
                  className="elig-dom__textinput"
                />
              </div>
            )}

            {error && (
              <div className="elig-dom__error">
                <AlertCircle size={15} />{error}
              </div>
            )}

            <div className="elig-dom__actions">
              {step > 0 && (
                <button type="button" onClick={() => { setError(""); setStep((s) => s - 1); }} className="elig-dom__btn-secondary">
                  ← Back
                </button>
              )}
              <button
                type="button"
                onClick={isLast ? () => { if (!values[current.id]) { setError("Please make a selection."); return; } setError(""); setStep((s) => s + 1); } : handleNext}
                className="elig-dom__btn-primary"
              >
                {isLast ? "One more thing →" : "Continue →"}
              </button>
            </div>
          </div>
        )}

        {isExtraStep && (
          <div>
            <div className="elig-dom__qhead">
              <span className="elig-dom__reqtag">Optional — helps accuracy</span>
              <h3 className="elig-dom__question">Anything else the AI should know?</h3>
              <p className="elig-dom__hint">Previous results, target college, state of residence, or special category (SC/ST/OBC/EWS).</p>
            </div>

            <textarea
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
              placeholder="e.g. I belong to OBC category, I'm targeting Tamil Nadu colleges, I appeared for NEET twice…"
              className="elig-dom__textarea"
            />

            <div className="elig-dom__summary">
              <span className="elig-dom__summary-label">Your profile summary:</span>
              {Object.entries(values).map(([k, v]) => (
                <span key={k} className="elig-dom__summary-chip">{v}{k === "percentage" ? "%" : ""}</span>
              ))}
            </div>

            <div className="elig-dom__actions">
              <button type="button" onClick={() => setStep((s) => s - 1)} className="elig-dom__btn-secondary">
                ← Back
              </button>
              <button type="button" onClick={handleFinalSubmit} className="elig-dom__btn-submit">
                <Sparkles size={17} />
                Check My Eligibility
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .elig-dom {
          margin-top: 32px;
          font-family: var(--font-main);
        }

        .elig-dom__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          color: var(--text-light);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 20px;
          font-family: var(--font-main);
          padding: 0;
          transition: var(--transition);
        }
        .elig-dom__back:hover { color: var(--primary); }

        .elig-dom__card {
          position: relative;
          background: var(--bg-main);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: clamp(28px, 5vw, 52px);
          box-shadow: var(--shadow-lg);
        }

        .elig-dom__progress {
          margin-bottom: 36px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--border);
        }

        .elig-dom__qhead { margin-bottom: 28px; }
        .elig-dom__reqtag {
          display: inline-block;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: var(--radius-sm);
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .elig-dom__question {
          font-size: clamp(19px, 3vw, 25px);
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -0.01em;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .elig-dom__hint {
          font-size: 13px;
          color: var(--text-light);
          line-height: 1.5;
        }

        .elig-dom__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }
        .elig-dom__chip {
          padding: 11px 19px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--bg-main);
          color: var(--text-medium);
          font-size: 13px;
          font-weight: 500;
          font-family: var(--font-main);
          cursor: pointer;
          transition: var(--transition);
        }
        .elig-dom__chip:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-light);
        }
        .elig-dom__chip.is-selected {
          border: 2px solid var(--primary);
          background: var(--primary);
          color: var(--text-white);
          font-weight: 600;
          box-shadow: 0 6px 16px color-mix(in srgb, var(--primary) 28%, transparent);
        }

        .elig-dom__numwrap { margin-bottom: 28px; }
        .elig-dom__numfield {
          position: relative;
          max-width: 200px;
        }
        .elig-dom__numinput {
          width: 100%;
          height: 54px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 0 48px 0 16px;
          font-size: 20px;
          font-weight: 700;
          font-family: var(--font-main);
          color: var(--text-dark);
          outline: none;
          transition: var(--transition);
        }
        .elig-dom__numinput:focus { border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-light); }
        .elig-dom__numsuffix {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 16px;
          font-weight: 700;
          color: var(--primary);
        }

        .elig-dom__extrafield { margin-bottom: 24px; }
        .elig-dom__label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-medium);
          display: block;
          margin-bottom: 8px;
        }
        .elig-dom__textinput {
          width: 100%;
          height: 48px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 0 16px;
          font-size: 14px;
          font-family: var(--font-main);
          color: var(--text-dark);
          outline: none;
          transition: var(--transition);
        }
        .elig-dom__textinput:focus { border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-light); }

        .elig-dom__textarea {
          width: 100%;
          min-height: 100px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          font-size: 14px;
          font-family: var(--font-main);
          color: var(--text-dark);
          outline: none;
          resize: vertical;
          margin-bottom: 20px;
          transition: var(--transition);
        }
        .elig-dom__textarea:focus { border-color: var(--primary); box-shadow: 0 0 0 4px var(--primary-light); }

        .elig-dom__error {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--danger);
          font-size: 13px;
          margin-bottom: 16px;
        }

        .elig-dom__summary {
          background: var(--bg-section);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .elig-dom__summary-label {
          font-size: 12px;
          color: var(--text-light);
          width: 100%;
          margin-bottom: 4px;
          font-weight: 600;
        }
        .elig-dom__summary-chip {
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 100px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .elig-dom__actions { display: flex; gap: 12px; }
        .elig-dom__btn-secondary {
          padding: 13px 24px;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--border);
          background: var(--bg-main);
          color: var(--text-medium);
          font-size: 14px;
          font-weight: 600;
          font-family: var(--font-main);
          cursor: pointer;
          transition: var(--transition);
        }
        .elig-dom__btn-secondary:hover { border-color: var(--text-light); }

        .elig-dom__btn-primary {
          flex: 1;
          padding: 13px 24px;
          border-radius: var(--radius-md);
          border: none;
          background: var(--gradient-secondary);
          color: var(--text-white);
          font-size: 15px;
          font-weight: 700;
          font-family: var(--font-main);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: var(--transition);
        }
        .elig-dom__btn-primary:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }

        .elig-dom__btn-submit {
          flex: 1;
          padding: 15px 24px;
          border-radius: var(--radius-md);
          border: none;
          background: var(--gradient-primary);
          color: var(--text-white);
          font-size: 15px;
          font-weight: 700;
          font-family: var(--font-main);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 24px color-mix(in srgb, var(--accent-green) 30%, transparent);
          transition: var(--transition);
        }
        .elig-dom__btn-submit:hover { transform: translateY(-1px); box-shadow: 0 12px 28px color-mix(in srgb, var(--accent-green) 38%, transparent); }
      `}</style>
    </div>
  );
}