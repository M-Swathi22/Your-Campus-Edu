import { useState } from "react";
import { Sparkles, ArrowRight, AlertCircle, ArrowLeft } from "lucide-react";
import { destinations } from "../../Data/countrydetails";

const DESTINATION_OPTIONS = destinations.map((c) => ({
  label: `${c.flag} ${c.name}`,
  value: c.id,
}));

const STEPS = [
  {
    id: "destination",
    question: "Which country do you want to study in?",
    hint: "We'll check eligibility requirements specific to that country.",
    required: true,
    type: "chip",
    options: DESTINATION_OPTIONS,
  },
  {
    id: "studyLevel",
    question: "What level are you applying for?",
    hint: "UG = Bachelor's degree; PG = Master's / PhD.",
    required: true,
    type: "chip",
    options: [
      { label: "Undergraduate (Bachelor's)", value: "UG" },
      { label: "Postgraduate (Master's)", value: "PG" },
      { label: "PhD / Research", value: "PhD" },
      { label: "Diploma / Foundation", value: "Diploma" },
    ],
  },
  {
    id: "stream",
    question: "What is your academic background?",
    hint: "Your current / completed stream of study.",
    required: true,
    type: "chip",
    options: [
      { label: "Science — Biology", value: "Science (Biology)" },
      { label: "Science — Maths / Engineering", value: "Science (Maths)" },
      { label: "Commerce / Business", value: "Commerce" },
      { label: "Arts & Humanities", value: "Arts & Humanities" },
      { label: "Computer Science / IT", value: "Computer Science" },
      { label: "Other", value: "Other" },
    ],
  },
  {
    id: "percentage",
    question: "What is your academic percentage or CGPA?",
    hint: "Class 12 % for UG; Bachelor's % or CGPA for PG.",
    required: true,
    type: "number",
    placeholder: "e.g. 82 or 7.5",
  },
  {
    id: "englishTest",
    question: "Have you taken an English proficiency test?",
    hint: "IELTS, TOEFL, PTE, or Duolingo — required by most universities.",
    required: true,
    type: "chip",
    options: [
      { label: "IELTS", value: "IELTS" },
      { label: "TOEFL", value: "TOEFL" },
      { label: "PTE Academic", value: "PTE" },
      { label: "Duolingo English Test", value: "Duolingo" },
      { label: "Not yet taken", value: "Not taken" },
    ],
  },
  {
    id: "aptitudeTest",
    question: "Have you taken any aptitude test?",
    hint: "GRE for most PG programs; GMAT for MBA; SAT/ACT for UG in USA.",
    required: false,
    type: "chip",
    options: [
      { label: "GRE", value: "GRE" },
      { label: "GMAT", value: "GMAT" },
      { label: "SAT", value: "SAT" },
      { label: "ACT", value: "ACT" },
      { label: "Not Required / Not Taken", value: "Not taken" },
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
        <div key={i} style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "100px", background: i <= current ? "var(--extra-indigo)" : "var(--border)", transition: "var(--transition)" }} />
      ))}
    </div>
  );
}

export default function AbroadForm({ onSubmit, onBack }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({});
  const [error, setError] = useState("");
  const [scores, setScores] = useState({ english: "", aptitude: "" });
  const [extras, setExtras] = useState({ gapYear: "", backlog: "", workExp: "", extra: "" });

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const isExtraStep = step === STEPS.length;
  const totalSteps = STEPS.length + 1;

  const handleChip = (val) => { setValues((p) => ({ ...p, [current.id]: val })); setError(""); };

  const handleNext = () => {
    if (current.required && !values[current.id]) { setError("Please make a selection to continue."); return; }
    if (current.type === "number") {
      const n = parseFloat(values[current.id]);
      if (isNaN(n) || n < 0 || n > 100) { setError("Enter a valid percentage/CGPA."); return; }
    }
    setError(""); setStep((s) => s + 1);
  };

  const handleFinalSubmit = () => {
    onSubmit({
      ...values,
      englishScore: scores.english,
      aptitudeScore: scores.aptitude,
      gapYear: extras.gapYear,
      backlog: extras.backlog,
      workExperience: extras.workExp,
      extraInfo: extras.extra,
    });
  };

  return (
    <div style={{ marginTop: "32px" }}>
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
            <div style={{ height: "100%", borderRadius: "100px", background: "linear-gradient(90deg, var(--extra-indigo), var(--primary))", width: `${(step / (totalSteps - 1)) * 100}%`, transition: "width 0.5s ease" }} />
          </div>
          <div style={{ marginTop: "8px", fontSize: "11px", color: "var(--text-light)", fontWeight: 600 }}>Study Abroad / International</div>
        </div>

        {/* Question steps */}
        {!isExtraStep && (
          <div>
            <div style={{ marginBottom: "28px" }}>
              <div style={{ display: "inline-block", background: "rgba(88,102,235,0.08)", color: "var(--extra-indigo)", borderRadius: "var(--radius-sm)", padding: "4px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                {current.required ? "Required" : "Optional — helps accuracy"}
              </div>
              <h3 style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px", lineHeight: 1.3 }}>{current.question}</h3>
              <p style={{ fontSize: "13px", color: "var(--text-light)" }}>{current.hint}</p>
            </div>

            {current.type === "chip" && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
                {current.options.map((opt) => (
                  <Chip key={opt.value} label={opt.label} selected={values[current.id] === opt.value} onClick={() => handleChip(opt.value)} />
                ))}
              </div>
            )}

            {current.type === "number" && (
              <div style={{ marginBottom: "24px" }}>
                <div style={{ position: "relative", maxWidth: "200px" }}>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={values[current.id] || ""}
                    onChange={(e) => setValues((p) => ({ ...p, [current.id]: e.target.value }))}
                    placeholder={current.placeholder}
                    style={{ width: "100%", height: "54px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0 48px 0 16px", fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--extra-indigo)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                  <span style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", fontWeight: 700, color: "var(--extra-indigo)" }}>%</span>
                </div>
              </div>
            )}

            {/* Score input for english test */}
            {current.id === "englishTest" && values.englishTest && values.englishTest !== "Not taken" && (
              <div style={{ marginBottom: "20px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "8px" }}>Your {values.englishTest} score:</label>
                <input
                  type="text"
                  value={scores.english}
                  onChange={(e) => setScores((p) => ({ ...p, english: e.target.value }))}
                  placeholder={values.englishTest === "IELTS" ? "e.g. 6.5" : values.englishTest === "TOEFL" ? "e.g. 95" : "Enter your score"}
                  style={{ width: "200px", height: "46px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0 14px", fontSize: "15px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--extra-indigo)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
            )}

            {/* Score input for aptitude test */}
            {current.id === "aptitudeTest" && values.aptitudeTest && values.aptitudeTest !== "Not taken" && (
              <div style={{ marginBottom: "20px" }}>
                <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "8px" }}>Your {values.aptitudeTest} score:</label>
                <input
                  type="text"
                  value={scores.aptitude}
                  onChange={(e) => setScores((p) => ({ ...p, aptitude: e.target.value }))}
                  placeholder={values.aptitudeTest === "GRE" ? "e.g. 310" : values.aptitudeTest === "GMAT" ? "e.g. 650" : "Enter your score"}
                  style={{ width: "200px", height: "46px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0 14px", fontSize: "15px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--extra-indigo)")}
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
              <button
                type="button"
                onClick={isLast ? () => { if (current.required && !values[current.id]) { setError("Please make a selection."); return; } setError(""); setStep((s) => s + 1); } : handleNext}
                style={{ flex: 1, padding: "13px 24px", borderRadius: "var(--radius-md)", border: "none", background: "linear-gradient(135deg, var(--extra-indigo) 0%, var(--primary-dark) 100%)", color: "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                {isLast ? "One more thing →" : "Continue →"}
              </button>
            </div>
          </div>
        )}

        {/* Final / Extra step */}
        {isExtraStep && (
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "inline-block", background: "rgba(88,102,235,0.08)", color: "var(--extra-indigo)", borderRadius: "var(--radius-sm)", padding: "4px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Optional — helps accuracy</div>
              <h3 style={{ fontSize: "clamp(18px,3vw,22px)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>A few more details</h3>
              <p style={{ fontSize: "13px", color: "var(--text-light)" }}>These help the AI give a more accurate eligibility verdict.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
              {[
                { label: "Gap year(s)", key: "gapYear", placeholder: "e.g. 1 year" },
                { label: "Active backlogs", key: "backlog", placeholder: "e.g. None / 2 backlogs" },
                { label: "Work experience", key: "workExp", placeholder: "e.g. 2 years in IT" },
              ].map(({ label, key, placeholder }) => (
                <div key={key}>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "6px" }}>{label}</label>
                  <input
                    type="text"
                    value={extras[key]}
                    onChange={(e) => setExtras((p) => ({ ...p, [key]: e.target.value }))}
                    placeholder={placeholder}
                    style={{ width: "100%", height: "44px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "0 12px", fontSize: "13px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--extra-indigo)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              ))}
            </div>

            <textarea
              value={extras.extra}
              onChange={(e) => setExtras((p) => ({ ...p, extra: e.target.value }))}
              placeholder="Anything else — target universities, budget, preferred intake, scholarship needs…"
              style={{ width: "100%", minHeight: "90px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "12px 16px", fontSize: "14px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", resize: "vertical", marginBottom: "20px", transition: "var(--transition)" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--extra-indigo)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />

            {/* Profile summary */}
            <div style={{ background: "var(--bg-light)", borderRadius: "var(--radius-md)", padding: "14px 18px", marginBottom: "24px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "12px", color: "var(--text-light)", width: "100%", marginBottom: "4px", fontWeight: 600 }}>Your profile:</span>
              {Object.entries(values).map(([k, v]) => (
                <span key={k} style={{ background: "rgba(88,102,235,0.1)", color: "var(--extra-indigo)", borderRadius: "100px", padding: "4px 12px", fontSize: "12px", fontWeight: 600 }}>{v}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button type="button" onClick={() => setStep((s) => s - 1)} style={{ padding: "13px 24px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border)", background: "#fff", color: "var(--text-medium)", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-main)", cursor: "pointer" }}>
                ← Back
              </button>
              <button type="button" onClick={handleFinalSubmit}
                style={{ flex: 1, padding: "15px 24px", borderRadius: "var(--radius-md)", border: "none", background: "linear-gradient(90deg, var(--extra-indigo) 0%, var(--primary) 100%)", color: "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxShadow: "0 8px 24px rgba(88,102,235,0.25)" }}>
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