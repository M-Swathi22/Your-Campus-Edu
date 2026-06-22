import { useState, useRef } from "react";
import { QUIZ_QUESTIONS, DESTINATION_ARCHETYPES } from "../data/quizQuestions";

import QuizHero      from "../components/country-fit-quiz/QuizHero";
import QuizQuestions from "../components/country-fit-quiz/QuizQuestions";
import QuizResult    from "../components/country-fit-quiz/QuizResult";
import QuizLoading   from "../components/country-fit-quiz/QuizLoading";
import QuizCTA       from "../components/country-fit-quiz/QuizCTA";

/* ─── Build the AI prompt from quiz answers ─── */
function buildQuizPrompt(answers) {
  // Map question id -> chosen answer text, in question order
  const answerLines = QUIZ_QUESTIONS.map((q) => `- ${q.question} → ${answers[q.id] || "Not answered"}`).join("\n");

  const destinationContext = Object.entries(DESTINATION_ARCHETYPES)
    .map(([key, d]) => `${d.label} (${d.flag}):
  Best for: ${d.bestFor}
  Strengths: ${d.strengths.join(", ")}
  Considerations: ${d.considerations.join(", ")}`)
    .join("\n\n");

  return `You are an expert international education counsellor and psychologist who specialises in matching students to study-abroad destinations based on their genuine personality and priorities — not generic rankings.

STUDENT'S QUIZ ANSWERS:
${answerLines}

DESTINATION REFERENCE DATA (use as grounding, supplement with your own knowledge):
${destinationContext}

TASK:
1. Synthesise the student's answers into a genuine personality archetype — give it a memorable, specific title (not generic like "The Student"). Pick a single relevant emoji.
2. Rank the TOP 4 best-fit destinations from the reference list (or others you know well) based on holistic fit with ALL their answers together, not just one trait.
3. For each destination, write a specific reason tied to multiple answers they gave — avoid generic statements.
4. Write 3-4 insight bullets about what their answer PATTERN reveals about them as a student (be specific and a little fun, not clinical).
5. Suggest 3 concrete next steps.

Be honest — don't make every destination sound perfect. If their answers point to budget constraints, surface that. If they show low risk tolerance, don't over-recommend high-uncertainty destinations.

Return ONLY valid raw JSON (no markdown, no code fences, no preamble):
{
  "archetype": {
    "emoji": "<single emoji>",
    "title": "<memorable archetype title, e.g. 'The Strategic Builder'>",
    "description": "<2-sentence description of this archetype tied to their actual answers>",
    "traits": ["<trait tag 1>", "<trait tag 2>", "<trait tag 3>", "<trait tag 4>"]
  },
  "summary": "<2-sentence overall summary if archetype description is not used standalone>",
  "destinations": [
    {
      "country": "<destination name>",
      "flag": "<emoji>",
      "matchScore": <integer 60-99>,
      "reason": "<personalised 1-2 sentence reason tied to 2-3 of their specific answers>",
      "strengths": ["<strength 1 relevant to them>", "<strength 2>", "<strength 3>"],
      "watchOut": "<1 short honest caveat or consideration for this student specifically>"
    }
  ],
  "insights": [
    "<insight about their answer pattern, written conversationally>",
    "<another insight>",
    "<another insight>"
  ],
  "nextSteps": [
    { "step": "<short action title>", "detail": "<1-2 sentence actionable detail>" }
  ]
}`;
}

/* ─── AI API call via Vite proxy ─── */
async function callQuizAI(answers) {
  const prompt = buildQuizPrompt(answers);

  const response = await fetch("/api/claude", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1800,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error ${response.status}`);
  }

  const data = await response.json();
  const raw = data.content?.map((b) => b.text || "").join("") || "";
  const clean = raw.replace(/^```(?:json)?\n?/m, "").replace(/```$/m, "").trim();
  return JSON.parse(clean);
}

/* ─── Page ─── */
export default function EducationFitQuiz() {
  const [result, setResult]       = useState(null);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const [hasResult, setHasResult] = useState(false);

  const resultRef = useRef(null);

  const handleComplete = async (answers) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setHasResult(false);

    try {
      const data = await callQuizAI(answers);
      setResult(data);
      setHasResult(true);
    } catch (err) {
      console.error("Quiz AI error:", err);
      setError(
        err.message?.includes("JSON")
          ? "AI returned an unexpected format. Please try again."
          : err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const handleReset = () => {
    setResult(null);
    setHasResult(false);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <QuizHero />

      {!hasResult && !loading && !error && (
        <QuizQuestions onComplete={handleComplete} />
      )}

      {loading && <QuizLoading />}

      <div ref={resultRef}>
        {error && !loading && (
          <section style={{ fontFamily: "var(--font-main)", padding: "64px 24px", background: "var(--bg-light)", textAlign: "center" }}>
            <div style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", border: "1px solid #ffc8c8", borderRadius: "var(--radius-lg)", padding: "36px 40px", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#fff1f1", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>Something went wrong</h3>
              <p style={{ color: "var(--text-medium)", fontSize: "14px", marginBottom: "24px", lineHeight: 1.6 }}>{error}</p>
              <button onClick={handleReset}
                style={{ padding: "12px 28px", borderRadius: "var(--radius-md)", border: "none", background: "var(--gradient-secondary)", color: "#fff", fontSize: "14px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer" }}>
                Try Again
              </button>
            </div>
          </section>
        )}

        {!loading && hasResult && (
          <QuizResult result={result} onReset={handleReset} />
        )}
      </div>

      <QuizCTA />
    </>
  );
}