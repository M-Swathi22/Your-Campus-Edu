import { useState } from "react";
import { Sparkles, ArrowRight, AlertCircle } from "lucide-react";
import { DESTINATIONS, COURSE_TYPES } from "../../Data/budgetdata";

/* ─── Chip ─── */
function Chip({ label, selected, onClick, wide }) {
  return (
    <button type="button" onClick={onClick}
      style={{ padding: wide ? "10px 22px" : "9px 16px", borderRadius: "100px", border: selected ? "2px solid var(--primary)" : "1.5px solid var(--border)", background: selected ? "var(--primary)" : "#fff", color: selected ? "#fff" : "var(--text-medium)", fontSize: "13px", fontWeight: selected ? 600 : 500, fontFamily: "var(--font-main)", cursor: "pointer", transition: "var(--transition)", whiteSpace: "nowrap" }}
      onMouseEnter={(e) => { if (!selected) { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.background = "var(--primary-light)"; } }}
      onMouseLeave={(e) => { if (!selected) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-medium)"; e.currentTarget.style.background = "#fff"; } }}>
      {label}
    </button>
  );
}

/* ─── Multi-select chip ─── */
function MultiChip({ label, selected, onClick }) {
  return (
    <button type="button" onClick={onClick}
      style={{ padding: "9px 16px", borderRadius: "100px", border: selected ? "2px solid var(--primary)" : "1.5px solid var(--border)", background: selected ? "var(--primary-light)" : "#fff", color: selected ? "var(--primary)" : "var(--text-medium)", fontSize: "13px", fontWeight: selected ? 700 : 500, fontFamily: "var(--font-main)", cursor: "pointer", transition: "var(--transition)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; }}
      onMouseLeave={(e) => { if (!selected) e.currentTarget.style.borderColor = "var(--border)"; }}>
      {selected ? "✓ " : ""}{label}
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

const DESTINATION_OPTIONS = Object.entries(DESTINATIONS).map(([key, d]) => ({
  label: `${d.flag} ${d.label.split("(")[0].trim()}`,
  value: key,
}));

const PRIORITY_OPTIONS = [
  "Low tuition cost", "Part-time work opportunity", "Scholarship availability",
  "PR / immigration pathway", "Course quality", "Safety & lifestyle", "Language (English)",
];

const STEPS = [
  {
    id: "destination",
    question: "Where do you want to study?",
    hint: "You can compare multiple destinations — pick all that interest you.",
    required: true,
    type: "multiChip",
    options: DESTINATION_OPTIONS,
  },
  {
    id: "studyLevel",
    question: "What level are you planning to study?",
    hint: "This determines the typical tuition and duration.",
    required: true,
    type: "chip",
    options: [
      { label: "Undergraduate (Bachelor's)", value: "UG" },
      { label: "Postgraduate (Master's)", value: "PG" },
      { label: "PhD / Research", value: "PhD" },
      { label: "Diploma / Certificate", value: "Diploma" },
    ],
  },
  {
    id: "courseType",
    question: "What course or field are you targeting?",
    hint: "Pick the closest match — this affects duration and typical fees.",
    required: true,
    type: "chip",
    options: COURSE_TYPES.map((c) => ({ label: c.label, value: c.value })),
  },
  {
    id: "annualBudget",
    question: "What is your annual budget for studies?",
    hint: "Include all expenses — tuition + living. Enter 0 if you're unsure.",
    required: true,
    type: "budget",
  },
  {
    id: "loanWillingness",
    question: "Are you open to taking an education loan?",
    hint: "Indian banks offer up to ₹75 Lakh for international studies.",
    required: true,
    type: "chip",
    options: [
      { label: "Yes — open to a loan", value: "Yes" },
      { label: "Partially — small top-up only", value: "Partial" },
      { label: "No — self-funded only", value: "No" },
    ],
  },
  {
    id: "scholarshipInterest",
    question: "Are you interested in scholarships?",
    hint: "AI will identify realistic options based on your profile.",
    required: true,
    type: "chip",
    options: [
      { label: "Yes — actively looking", value: "Yes" },
      { label: "Yes — but unsure where to start", value: "Unsure" },
      { label: "Not a priority", value: "No" },
    ],
  },
  {
    id: "workPartTime",
    question: "Will you work part-time while studying?",
    hint: "Most countries allow 20 hrs/week. This can offset 10–25% of costs.",
    required: true,
    type: "chip",
    options: [
      { label: "Yes — definitely plan to", value: "Yes" },
      { label: "Maybe — if allowed", value: "Maybe" },
      { label: "No — full focus on studies", value: "No" },
    ],
  },
  {
    id: "priorities",
    question: "What matters most to you? (Pick all that apply)",
    hint: "AI uses this to tailor savings tips and recommendations.",
    required: false,
    type: "multiChip",
    options: PRIORITY_OPTIONS.map((p) => ({ label: p, value: p })),
  },
];

export default function BudgetForm({ onSubmit }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ destination: [], priorities: [] });
  const [error, setError] = useState("");
  const [budgetCurrency, setBudgetCurrency] = useState("INR");
  const [familyIncome, setFamilyIncome] = useState("");
  const [savingsForStudy, setSavingsForStudy] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const isExtraStep = step === STEPS.length;
  const totalSteps = STEPS.length + 1;

  const handleChip = (val) => { setValues((p) => ({ ...p, [current.id]: val })); setError(""); };

  const handleMultiChip = (val) => {
    setValues((p) => {
      const arr = p[current.id] || [];
      return { ...p, [current.id]: arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val] };
    });
    setError("");
  };

  const handleNext = () => {
    const val = values[current.id];
    if (current.required) {
      if (current.type === "multiChip" && (!val || val.length === 0)) { setError("Please select at least one option."); return; }
      if (current.type !== "multiChip" && !val) { setError("Please make a selection to continue."); return; }
      if (current.type === "budget" && !values.annualBudget) { setError("Please enter your annual budget."); return; }
    }
    setError(""); setStep((s) => s + 1);
  };

  const handleBack = () => { setError(""); setStep((s) => s - 1); };

  const handleSubmit = () => {
    onSubmit({
      destination: values.destination,
      studyLevel: values.studyLevel,
      courseType: values.courseType,
      annualBudget: values.annualBudget || "0",
      budgetCurrency,
      familyIncome,
      savingsForStudy,
      loanWillingness: values.loanWillingness,
      scholarshipInterest: values.scholarshipInterest,
      workPartTime: values.workPartTime,
      priorities: values.priorities || [],
      extraInfo,
    });
  };

  const actionBtn = (
    <button type="button"
      onClick={isLast ? () => { if (current.required && (!values[current.id] || values[current.id].length === 0)) { setError("Please make a selection."); return; } setError(""); setStep((s) => s + 1); } : handleNext}
      style={{ flex: 1, padding: "13px 24px", borderRadius: "var(--radius-md)", border: "none", background: "var(--gradient-secondary)", color: "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "var(--transition)" }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
      {isLast ? "Almost done →" : "Continue →"}
    </button>
  );

  return (
    <section id="budget-form" style={{ fontFamily: "var(--font-main)", background: "var(--bg-light)", padding: "80px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "7px 18px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
            <Sparkles size={14} /> Budget Planner
          </span>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.2, marginBottom: "12px" }}>Build Your Study Budget</h2>
          <p style={{ fontSize: "15px", color: "var(--text-medium)", maxWidth: "460px", margin: "0 auto" }}>Answer step by step — the AI needs your details to build an accurate financial plan.</p>
        </div>

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
          </div>

          {/* Question steps */}
          {!isExtraStep && (
            <div>
              <div style={{ marginBottom: "28px" }}>
                <div style={{ display: "inline-block", background: "var(--primary-light)", color: "var(--primary)", borderRadius: "var(--radius-sm)", padding: "4px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
                  {current.required ? "Required" : "Optional — helps accuracy"}
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

              {current.type === "multiChip" && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
                  {current.options.map((opt) => (
                    <MultiChip key={opt.value} label={opt.label} selected={(values[current.id] || []).includes(opt.value)} onClick={() => handleMultiChip(opt.value)} />
                  ))}
                </div>
              )}

              {current.type === "budget" && (
                <div style={{ marginBottom: "28px" }}>
                  {/* Currency toggle */}
                  <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
                    {["INR", "USD", "GBP", "CAD", "AUD", "EUR"].map((c) => (
                      <button key={c} type="button" onClick={() => setBudgetCurrency(c)}
                        style={{ padding: "6px 14px", borderRadius: "100px", border: budgetCurrency === c ? "2px solid var(--primary)" : "1.5px solid var(--border)", background: budgetCurrency === c ? "var(--primary)" : "#fff", color: budgetCurrency === c ? "#fff" : "var(--text-medium)", fontSize: "12px", fontWeight: 600, fontFamily: "var(--font-main)", cursor: "pointer" }}>
                        {c}
                      </button>
                    ))}
                  </div>
                  <div style={{ position: "relative", maxWidth: "260px" }}>
                    <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", fontSize: "15px", fontWeight: 700, color: "var(--primary)" }}>
                      {budgetCurrency === "INR" ? "₹" : budgetCurrency === "USD" ? "$" : budgetCurrency === "GBP" ? "£" : budgetCurrency === "CAD" ? "C$" : budgetCurrency === "AUD" ? "A$" : "€"}
                    </span>
                    <input
                      type="number"
                      value={values.annualBudget || ""}
                      onChange={(e) => { setValues((p) => ({ ...p, annualBudget: e.target.value })); setError(""); }}
                      placeholder="0"
                      style={{ width: "100%", height: "54px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0 16px 0 40px", fontSize: "20px", fontWeight: 700, fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--text-light)", marginTop: "8px" }}>Per year. Enter 0 if you're unsure — AI will still estimate and show the gap.</p>
                </div>
              )}

              {error && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--danger)", fontSize: "13px", marginBottom: "16px" }}>
                  <AlertCircle size={15} />{error}
                </div>
              )}

              <div style={{ display: "flex", gap: "12px" }}>
                {step > 0 && (
                  <button type="button" onClick={handleBack} style={{ padding: "13px 24px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border)", background: "#fff", color: "var(--text-medium)", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-main)", cursor: "pointer" }}>
                    ← Back
                  </button>
                )}
                {actionBtn}
              </div>
            </div>
          )}

          {/* Final extra step */}
          {isExtraStep && (
            <div>
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "inline-block", background: "var(--primary-light)", color: "var(--primary)", borderRadius: "var(--radius-sm)", padding: "4px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>Optional — improves accuracy</div>
                <h3 style={{ fontSize: "clamp(18px,3vw,22px)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>A few more financial details</h3>
                <p style={{ fontSize: "13px", color: "var(--text-light)" }}>Help the AI fine-tune your loan, scholarship, and savings recommendations.</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="extra-grid">
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "6px" }}>Family annual income (INR)</label>
                  <input type="text" value={familyIncome} onChange={(e) => setFamilyIncome(e.target.value)} placeholder="e.g. ₹8,00,000"
                    style={{ width: "100%", height: "44px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "0 12px", fontSize: "13px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "6px" }}>Savings earmarked for studies</label>
                  <input type="text" value={savingsForStudy} onChange={(e) => setSavingsForStudy(e.target.value)} placeholder="e.g. ₹5 Lakh"
                    style={{ width: "100%", height: "44px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "0 12px", fontSize: "13px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                </div>
              </div>

              <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)}
                placeholder="Anything else — e.g. I have a sibling abroad, I prefer shared accommodation, I'm targeting a scholarship for STEM…"
                style={{ width: "100%", minHeight: "90px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "12px 16px", fontSize: "14px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", resize: "vertical", marginBottom: "20px", transition: "var(--transition)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />

              {/* Profile summary */}
              <div style={{ background: "var(--bg-light)", borderRadius: "var(--radius-md)", padding: "14px 18px", marginBottom: "24px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ fontSize: "12px", color: "var(--text-light)", width: "100%", marginBottom: "4px", fontWeight: 600 }}>Your plan summary:</span>
                {(values.destination || []).map((d) => <span key={d} style={{ background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "4px 12px", fontSize: "12px", fontWeight: 600 }}>{d}</span>)}
                {values.studyLevel && <span style={{ background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "4px 12px", fontSize: "12px", fontWeight: 600 }}>{values.studyLevel}</span>}
                {values.courseType && <span style={{ background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "4px 12px", fontSize: "12px", fontWeight: 600 }}>{values.courseType}</span>}
                {values.annualBudget && <span style={{ background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "4px 12px", fontSize: "12px", fontWeight: 600 }}>{budgetCurrency} {Number(values.annualBudget).toLocaleString()} / yr</span>}
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button type="button" onClick={handleBack} style={{ padding: "13px 24px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border)", background: "#fff", color: "var(--text-medium)", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-main)", cursor: "pointer" }}>
                  ← Back
                </button>
                <button type="button" onClick={handleSubmit}
                  style={{ flex: 1, padding: "15px 24px", borderRadius: "var(--radius-md)", border: "none", background: "var(--gradient-primary)", color: "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxShadow: "0 8px 24px rgba(49,185,120,0.25)", transition: "var(--transition)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  <Sparkles size={17} /> Calculate My Budget <ArrowRight size={17} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`@media(max-width:600px){ .extra-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}