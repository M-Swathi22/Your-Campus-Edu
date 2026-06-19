import { RotateCcw, Sparkles, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import RecommendedCourseCard from "./RecommendedCourseCard";
import MatchProgressBar from "./MatchProgressBar";

export default function MatchResult({ results = [], analysis = null, onReset }) {
  if (!results || results.length === 0) return null;

  const confidence = Math.min(99, Math.max(70, analysis?.confidence ?? 87));

  return (
    <section
      style={{
        fontFamily: "var(--font-main)",
        padding: "80px 24px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── AI Analysis Banner ── */}
        <div
          style={{
            background: "var(--gradient-secondary)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(28px,5vw,52px)",
            marginBottom: "52px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative blobs */}
          <div style={{ position: "absolute", right: "-50px", top: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: "42%", bottom: "-70px", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(49,185,120,0.1)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr auto", gap: "32px", alignItems: "center" }} className="banner-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <Sparkles size={14} color="rgba(255,255,255,0.55)" />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                  AI Analysis Complete
                </span>
              </div>

              <h2 style={{ fontSize: "clamp(22px,3.5vw,36px)", fontWeight: 800, color: "#fff", marginBottom: "12px", lineHeight: 1.2 }}>
                {analysis?.category
                  ? `${analysis.category} is your strongest pathway`
                  : "Your personalised matches are ready"}
              </h2>

              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: "600px", marginBottom: "24px" }}>
                {analysis?.summary || "Based on your academic profile, interests, and career preferences, we've identified the best-fit courses for your future."}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "100px", padding: "7px 18px", fontSize: "13px", fontWeight: 700, color: "#fff" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><polyline points="2,7 5.5,10.5 12,3.5" stroke="var(--accent-green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {confidence}% Profile Confidence
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "100px", padding: "7px 18px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
                  {results.length} courses matched
                </div>
              </div>
            </div>

            {/* Confidence gauge card */}
            <div style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "var(--radius-lg)", padding: "24px 28px", minWidth: "220px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <Brain size={16} color="rgba(255,255,255,0.7)" />
                <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>Overall Confidence</span>
              </div>
              <div style={{ fontSize: "48px", fontWeight: 800, color: "#fff", lineHeight: 1, marginBottom: "12px" }}>
                {confidence}<span style={{ fontSize: "22px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>%</span>
              </div>
              <div style={{ height: "6px", borderRadius: "100px", background: "rgba(255,255,255,0.15)", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${confidence}%`, background: "var(--accent-green)", borderRadius: "100px", transition: "width 1.2s ease" }} />
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>
                Based on your full profile
              </div>
            </div>
          </div>
        </div>

        {/* ── Section heading ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "4px" }}>
              Your Matched Courses
            </h3>
            <p style={{ fontSize: "13px", color: "var(--text-light)" }}>
              Ranked by AI fit score — top pick first
            </p>
          </div>
          <div style={{ background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "6px 18px", fontSize: "13px", fontWeight: 700 }}>
            {results.length} Courses Found
          </div>
        </div>

        {/* ── Overall confidence bar ── */}
        <div style={{ background: "var(--bg-light)", borderRadius: "var(--radius-md)", padding: "20px 24px", marginBottom: "32px", border: "1px solid var(--border)" }}>
          <MatchProgressBar score={confidence} label="AI Confidence Score" />
        </div>

        {/* ── Course grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "22px",
            marginBottom: "52px",
          }}
        >
          {results.map((course, i) => (
            <RecommendedCourseCard key={i} course={course} index={i} />
          ))}
        </div>

        {/* ── Reset ── */}
        {/* ── Actions ── */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  }}
>
  <button
    onClick={onReset}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "13px 32px",
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
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "var(--primary)";
      e.currentTarget.style.color = "var(--primary)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.color = "var(--text-medium)";
    }}
  >
    <RotateCcw size={15} />
    Start a New Match
  </button>

  <Link
    to="/eligibility-checker"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "13px 32px",
      borderRadius: "var(--radius-md)",
      border: "none",
      background: "var(--gradient-secondary)",
      color: "#fff",
      fontSize: "14px",
      fontWeight: 700,
      fontFamily: "var(--font-main)",
      textDecoration: "none",
      transition: "var(--transition)",
      boxShadow: "var(--shadow-md)",
    }}
  >
    Check Eligibility
    <ArrowRight size={15} />
  </Link>
</div>
      </div>

      <style>{`
        @media(max-width:768px){
          .banner-grid{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}