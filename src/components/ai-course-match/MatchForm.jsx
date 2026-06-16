import { useState } from "react";
import { Sparkles, ArrowRight, AlertCircle } from "lucide-react";

/* ─── Data ─── */
const FORM_STEPS = [
  {
    id: "stream",
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
];

/* ─── Chip component ─── */
function Chip({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "100px",
        border: selected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
        background: selected ? "var(--primary)" : "#fff",
        color: selected ? "#fff" : "var(--text-medium)",
        fontSize: "13px",
        fontWeight: selected ? 600 : 500,
        fontFamily: "var(--font-main)",
        cursor: "pointer",
        transition: "var(--transition)",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = "var(--primary)";
          e.currentTarget.style.color = "var(--primary)";
          e.currentTarget.style.background = "var(--primary-light)";
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.color = "var(--text-medium)";
          e.currentTarget.style.background = "#fff";
        }
      }}
    >
      {label}
    </button>
  );
}

/* ─── Step indicator ─── */
function StepDots({ total, current }) {
  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === current ? "24px" : "8px",
            height: "8px",
            borderRadius: "100px",
            background: i <= current ? "var(--primary)" : "var(--border)",
            transition: "var(--transition)",
          }}
        />
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
  const isLast = step === FORM_STEPS.length - 1;
  const isExtraStep = step === FORM_STEPS.length; // textarea step

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
      interestArea: "",
      extra,
    });
  };

  return (
    <section
      id="course-match-form"
      style={{
        fontFamily: "var(--font-main)",
        background: "var(--bg-light)",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "var(--primary-light)",
              color: "var(--primary)",
              borderRadius: "100px",
              padding: "7px 18px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            <Sparkles size={14} />
            Step-by-Step Profile Builder
          </span>
          <h2
            style={{
              fontSize: "clamp(24px,4vw,38px)",
              fontWeight: 800,
              color: "var(--text-dark)",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            Tell Us Who You Are
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-medium)", maxWidth: "480px", margin: "0 auto" }}>
            One question at a time. No dropdowns, no guessing — just clear choices.
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: "#fff",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(28px,5vw,52px)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          {/* Progress bar */}
          <div style={{ marginBottom: "36px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <StepDots total={FORM_STEPS.length + 1} current={step} />
              <span style={{ fontSize: "12px", color: "var(--text-light)", fontWeight: 600 }}>
                {Math.min(step + 1, FORM_STEPS.length + 1)} / {FORM_STEPS.length + 1}
              </span>
            </div>
            <div
              style={{
                height: "4px",
                borderRadius: "100px",
                background: "var(--bg-light)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: "100px",
                  background: "var(--gradient-primary)",
                  width: `${((step) / (FORM_STEPS.length)) * 100}%`,
                  transition: "width 0.5s ease",
                }}
              />
            </div>
          </div>

          {/* Question steps */}
          {!isExtraStep && (
            <div>
              <div style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                    borderRadius: "var(--radius-sm)",
                    padding: "4px 12px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  {current.required ? "Required" : "Optional — helps accuracy"}
                </div>
                <h3
                  style={{
                    fontSize: "clamp(18px,3vw,24px)",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {current.question}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--text-light)" }}>{current.hint}</p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--danger)",
                    fontSize: "13px",
                    marginBottom: "16px",
                  }}
                >
                  <AlertCircle size={15} />
                  {error}
                </div>
              )}

              <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    style={{
                      padding: "13px 24px",
                      borderRadius: "var(--radius-md)",
                      border: "1.5px solid var(--border)",
                      background: "#fff",
                      color: "var(--text-medium)",
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: "var(--font-main)",
                      cursor: "pointer",
                      transition: "var(--transition)",
                    }}
                  >
                    ← Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={isLast ? () => { if (!current.required || selections[current.id]) { setStep(s=>s+1); setError(""); } else setError("Please pick an option to continue."); } : handleNext}
                  style={{
                    flex: 1,
                    padding: "13px 24px",
                    borderRadius: "var(--radius-md)",
                    border: "none",
                    background: "var(--gradient-secondary)",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "var(--font-main)",
                    cursor: "pointer",
                    transition: "var(--transition)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {isLast ? "One more thing →" : "Continue →"}
                </button>
              </div>
            </div>
          )}

          {/* Extra info + submit step */}
          {isExtraStep && (
            <div>
              <div style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                    borderRadius: "var(--radius-sm)",
                    padding: "4px 12px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Optional — but powerful
                </div>
                <h3
                  style={{
                    fontSize: "clamp(18px,3vw,24px)",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                    marginBottom: "8px",
                  }}
                >
                  Anything else the AI should know?
                </h3>
                <p style={{ fontSize: "13px", color: "var(--text-light)" }}>
                  Add your marks, a specific interest, future country preference, or anything unique about you.
                </p>
              </div>

              <textarea
                value={extra}
                onChange={(e) => setExtra(e.target.value)}
                placeholder="e.g. I scored 92% in Biology, I want to work in oncology, I'm open to Tamil Nadu or Kerala colleges…"
                style={{
                  width: "100%",
                  minHeight: "110px",
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "14px 16px",
                  fontSize: "14px",
                  fontFamily: "var(--font-main)",
                  color: "var(--text-dark)",
                  outline: "none",
                  resize: "vertical",
                  marginBottom: "24px",
                  transition: "var(--transition)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />

              {/* Profile summary */}
              <div
                style={{
                  background: "var(--bg-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "16px 20px",
                  marginBottom: "24px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--text-light)", width: "100%", marginBottom: "4px", fontWeight: 600 }}>
                  Your profile summary:
                </span>
                {Object.entries(selections).map(([k, v]) => (
                  <span
                    key={k}
                    style={{
                      background: "var(--primary-light)",
                      color: "var(--primary)",
                      borderRadius: "100px",
                      padding: "4px 12px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  type="button"
                  onClick={handleBack}
                  style={{
                    padding: "13px 24px",
                    borderRadius: "var(--radius-md)",
                    border: "1.5px solid var(--border)",
                    background: "#fff",
                    color: "var(--text-medium)",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "var(--font-main)",
                    cursor: "pointer",
                  }}
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  style={{
                    flex: 1,
                    padding: "15px 24px",
                    borderRadius: "var(--radius-md)",
                    border: "none",
                    background: "var(--gradient-primary)",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "var(--font-main)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: "0 8px 24px rgba(49,185,120,0.25)",
                    transition: "var(--transition)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Sparkles size={17} />
                  Analyse My Profile with AI
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}