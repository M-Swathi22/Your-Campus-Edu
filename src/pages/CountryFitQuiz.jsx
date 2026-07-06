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



/* ─── Page ─── */
export default function EducationFitQuiz() {
  const [result, setResult]       = useState(null);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const [hasResult, setHasResult] = useState(false);

  const resultRef = useRef(null);

  const handleComplete =  (answers) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setHasResult(false);

    try {
      const data = {
  archetype: {
    emoji: "🎯",
    title: "The Strategic Explorer",
    description:
      "You balance career growth, affordability, and global exposure when choosing a study destination.",
    traits: [
      "Career Focused",
      "Practical",
      "Adaptable",
      "Growth Mindset",
    ],
  },

  summary:
    "Your answers suggest that you value strong career opportunities while keeping costs under control.",

  destinations: [
    {
      country: "Canada",
      flag: "🇨🇦",
      matchScore: 95,
      reason:
        "Excellent balance of education quality, affordability, and post-study work opportunities.",
      strengths: [
        "Affordable tuition",
        "Work opportunities",
        "Immigration pathway",
      ],
      watchOut: "Cold weather may require adjustment.",
    },

    {
      country: "Australia",
      flag: "🇦🇺",
      matchScore: 90,
      reason:
        "Strong universities and excellent student lifestyle.",
      strengths: [
        "High quality education",
        "Part-time work",
        "Good lifestyle",
      ],
      watchOut: "Living expenses can be high.",
    },

    {
      country: "Germany",
      flag: "🇩🇪",
      matchScore: 87,
      reason:
        "Excellent option for students looking for affordable education.",
      strengths: [
        "Low tuition fees",
        "Strong engineering programs",
        "Research opportunities",
      ],
      watchOut: "Learning German may be beneficial.",
    },

    {
      country: "United Kingdom",
      flag: "🇬🇧",
      matchScore: 82,
      reason:
        "Prestigious universities with shorter degree durations.",
      strengths: [
        "Global reputation",
        "Shorter programs",
        "Strong alumni network",
      ],
      watchOut: "Higher tuition costs.",
    },
  ],

  insights: [
    "You appear to prioritize long-term career outcomes over short-term convenience.",
    "You are open to adapting to new environments if the opportunity is worthwhile.",
    "Cost matters, but you are willing to invest when value is clear.",
  ],

  nextSteps: [
    {
      step: "Research Universities",
      detail:
        "Shortlist universities in your top two matched countries.",
    },
    {
      step: "Estimate Budget",
      detail:
        "Calculate tuition and living expenses for your preferred destination.",
    },
    {
      step: "Check Eligibility",
      detail:
        "Review admission requirements and language tests.",
    },
  ],
};

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