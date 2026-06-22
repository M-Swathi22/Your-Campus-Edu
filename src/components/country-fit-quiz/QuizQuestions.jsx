import { useState } from "react";
import { Sparkles, ArrowLeft } from "lucide-react";
import { QUIZ_QUESTIONS } from "../../data/quizQuestions";
import QuizProgressBar from "./QuizProgressBar";

/* ─── Option card ─── */
function OptionCard({ option, selected, onClick, index }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "18px 20px",
        borderRadius: "var(--radius-md)",
        border: selected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
        background: selected ? "var(--primary-light)" : "#fff",
        cursor: "pointer",
        transition: "var(--transition)",
        textAlign: "left",
        fontFamily: "var(--font-main)",
        opacity: 0,
        animation: `optionFadeIn 0.4s ease ${index * 80}ms forwards`,
      }}
      onMouseEnter={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = "var(--primary)";
          e.currentTarget.style.background = "var(--primary-light)";
          e.currentTarget.style.transform = "translateX(4px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.background = "#fff";
        }
        e.currentTarget.style.transform = "none";
      }}
    >
      <span style={{ fontSize: "26px", flexShrink: 0, lineHeight: 1 }}>{option.emoji}</span>
      <span style={{ fontSize: "15px", fontWeight: selected ? 700 : 500, color: selected ? "var(--primary)" : "var(--text-dark)", flex: 1, lineHeight: 1.4 }}>
        {option.label}
      </span>
      <div style={{ width: "22px", height: "22px", borderRadius: "50%", border: selected ? "none" : "2px solid var(--border)", background: selected ? "var(--primary)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {selected && (
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </button>
  );
}

export default function QuizQuestions({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState("forward");

  const question = QUIZ_QUESTIONS[step];
  const isLast = step === QUIZ_QUESTIONS.length - 1;
  const selectedValue = answers[question.id];

  const handleSelect = (value) => {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    // Auto-advance after a short delay for satisfying UX
    setTimeout(() => {
      if (isLast) {
        onComplete(newAnswers);
      } else {
        setDirection("forward");
        setStep((s) => s + 1);
      }
    }, 350);
  };

  const handleBack = () => {
    if (step > 0) {
      setDirection("back");
      setStep((s) => s - 1);
    }
  };

  return (
    <section id="quiz-questions" style={{ fontFamily: "var(--font-main)", background: "var(--bg-light)", padding: "80px 24px" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "7px 18px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
            <Sparkles size={14} /> Quick Personality Check
          </span>
          <h2 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.2 }}>
            Just Go With Your Gut
          </h2>
        </div>

        {/* Quiz card */}
        <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "clamp(28px,5vw,44px)", boxShadow: "var(--shadow-md)" }}>

          <QuizProgressBar current={step} total={QUIZ_QUESTIONS.length} />

          {/* Question */}
          <div key={question.id} style={{ animation: `${direction === "forward" ? "slideInRight" : "slideInLeft"} 0.35s ease` }}>
            <div style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "clamp(18px,3vw,22px)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "8px", lineHeight: 1.35 }}>
                {question.question}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--text-light)" }}>{question.subtitle}</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              {question.options.map((opt, i) => (
                <OptionCard key={opt.value} option={opt} selected={selectedValue === opt.value} onClick={() => handleSelect(opt.value)} index={i} />
              ))}
            </div>

            {/* Back button only */}
            {step > 0 && (
              <button type="button" onClick={handleBack}
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "none", border: "none", color: "var(--text-light)", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-main)", padding: 0 }}>
                <ArrowLeft size={14} /> Previous question
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes optionFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-16px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </section>
  );
}