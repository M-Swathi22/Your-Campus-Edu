import { useState } from "react";
import { Sparkles, ArrowRight, AlertCircle, ArrowLeft } from "lucide-react";
import { DOMESTIC_RULES } from "../../data/eligibilityRules";

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
    suffix: "%",
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
      style={{
        padding: "10px 18px",
        borderRadius: "100px",
        border: selected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
        background: selected ? "var(--primary)" : "#fff",
        color: selected ? "#fff" : "var(--text-medium)",
        fontSize: "13px",
        fontWeight: selected ? 600 : 500,
        fontFamily: "var(--font-main)",
        cursor: "pointer",
        transition: "var(--transition)",
      }}
      onMouseEnter={(e) => { if (!selected) { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.background = "var(--primary-light)"; } }}
      onMouseLeave={(e) => { if (!selected) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-medium)"; e.currentTarget.style.background = "#fff"; } }}
    >
      {label}
    </button>
  );
}

function StepDots({ total, current }) {
  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "100px", background: i <= current ? "var(--primary)" : "var(--border)", transition: "var(--transition)" }} />
      ))}
    </div>
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

  const totalSteps = STEPS.length + 1;

  return (
    <div style={{ marginTop: "32px" }}>
      {/* Back to type selector */}
      <button
        type="button"
        onClick={onBack}
        style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "none", border: "none", color: "var(--text-light)", fontSize: "13px", fontWeight: 600, cursor: "pointer", marginBottom: "20px", fontFamily: "var(--font-main)", padding: 0 }}
      >
        <ArrowLeft size={14} /> Change study type
      </button>

      <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "clamp(28px,5vw,52px)", boxShadow: "var(--shadow-md)" }}>

        {/* Progress */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <StepDots total={totalSteps} current={step} />
            <span style={{ fontSize: "12px", color: "var(--text-light)", fontWeight: 600 }}>{Math.min(step + 1, totalSteps)} / {totalSteps}</span>
          </div>
          <div style={{ height: "4px", borderRadius: "100px", background: "var(--bg-light)", overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: "100px", background: "var(--gradient-primary)", width: `${(step / (totalSteps - 1)) * 100}%`, transition: "width 0.5s ease" }} />
          </div>
          <div style={{ marginTop: "8px", fontSize: "11px", color: "var(--text-light)", fontWeight: 600 }}>India / Domestic Eligibility</div>
        </div>

        {/* Question steps */}
        {!isExtraStep && (
          <div>
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "inline-block", background: "var(--primary-light)", color: "var(--primary)", borderRadius: "var(--radius-sm)", padding: "4px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                {current.required ? "Required" : "Optional"}
              </div>
              <h3 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px", lineHeight: 1.3 }}>{current.question}</h3>
              <p style={{ fontSize: "13px", color: "var(--text-light)" }}>{current.hint}</p>
            </div>

            {current.type === "chip" && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
                {current.options.map((opt) => (
                  <Chip key={opt.value} label={opt.label} selected={values[current.id] === opt.value} onClick={() => handleChip(opt.value)} />
                ))}
              </div>
            )}

            {current.type === "number" && (
              <div style={{ marginBottom: "28px" }}>
                <div style={{ position: "relative", maxWidth: "200px" }}>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={values[current.id] || ""}
                    onChange={(e) => handleNumber(e.target.value)}
                    placeholder={current.placeholder}
                    style={{ width: "100%", height: "54px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0 48px 0 16px", fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                  <span style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "16px", fontWeight: 700, color: "var(--primary)" }}>%</span>
                </div>
              </div>
            )}

            {/* Show entrance score input if hasEntrance = Yes */}
            {current.id === "hasEntrance" && values.hasEntrance === "Yes" && (
              <div style={{ marginBottom: "24px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "8px" }}>Enter your exam name & score / rank:</label>
                <input
                  type="text"
                  value={entranceScore}
                  onChange={(e) => setEntranceScore(e.target.value)}
                  placeholder="e.g. NEET 2024 — 620/720 or JEE Main — 85 percentile"
                  style={{ width: "100%", height: "48px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0 16px", fontSize: "14px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
            )}

            {error && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--danger)", fontSize: "13px", marginBottom: "16px" }}>
                <AlertCircle size={15} />{error}
              </div>
            )}

            <div style={{ display: "flex", gap: "12px" }}>
              {step > 0 && (
                <button type="button" onClick={() => { setError(""); setStep((s) => s - 1); }} style={{ padding: "13px 24px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border)", background: "#fff", color: "var(--text-medium)", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-main)", cursor: "pointer" }}>
                  ← Back
                </button>
              )}
              <button type="button" onClick={isLast ? () => { if (!values[current.id]) { setError("Please make a selection."); return; } setError(""); setStep((s) => s + 1); } : handleNext}
                style={{ flex: 1, padding: "13px 24px", borderRadius: "var(--radius-md)", border: "none", background: "var(--gradient-secondary)", color: "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                {isLast ? "One more thing →" : "Continue →"}
              </button>
            </div>
          </div>
        )}

        {/* Final / Extra step */}
        {isExtraStep && (
          <div>
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "inline-block", background: "var(--primary-light)", color: "var(--primary)", borderRadius: "var(--radius-sm)", padding: "4px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Optional — helps accuracy</div>
              <h3 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>Anything else the AI should know?</h3>
              <p style={{ fontSize: "13px", color: "var(--text-light)" }}>Previous results, target college, state of residence, or special category (SC/ST/OBC/EWS).</p>
            </div>

            <textarea
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
              placeholder="e.g. I belong to OBC category, I'm targeting Tamil Nadu colleges, I appeared for NEET twice…"
              style={{ width: "100%", minHeight: "100px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "14px 16px", fontSize: "14px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", resize: "vertical", marginBottom: "20px", transition: "var(--transition)" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />

            {/* Profile summary chips */}
            <div style={{ background: "var(--bg-light)", borderRadius: "var(--radius-md)", padding: "14px 18px", marginBottom: "24px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "12px", color: "var(--text-light)", width: "100%", marginBottom: "4px", fontWeight: 600 }}>Your profile summary:</span>
              {Object.entries(values).map(([k, v]) => (
                <span key={k} style={{ background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "4px 12px", fontSize: "12px", fontWeight: 600 }}>{v}{k === "percentage" ? "%" : ""}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button type="button" onClick={() => setStep((s) => s - 1)} style={{ padding: "13px 24px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border)", background: "#fff", color: "var(--text-medium)", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-main)", cursor: "pointer" }}>
                ← Back
              </button>
              <button type="button" onClick={handleFinalSubmit}
                style={{ flex: 1, padding: "15px 24px", borderRadius: "var(--radius-md)", border: "none", background: "var(--gradient-primary)", color: "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxShadow: "0 8px 24px rgba(49,185,120,0.25)" }}>
                <Sparkles size={17} />
                Check My Eligibility
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}