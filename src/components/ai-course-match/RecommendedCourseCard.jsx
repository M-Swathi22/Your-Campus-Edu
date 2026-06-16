import { GraduationCap, Clock, TrendingUp, ChevronRight } from "lucide-react";
import MatchProgressBar from "./MatchProgressBar";

export default function RecommendedCourseCard({ course, index = 0 }) {
  const score = course.fit_score ?? course.matchPercentage ?? 80;
  const isTopPick = index === 0;

  return (
    <div
      style={{
        fontFamily: "var(--font-main)",
        background: "#fff",
        border: isTopPick
          ? "2px solid var(--primary)"
          : "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "24px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        transition: "var(--transition)",
        boxShadow: isTopPick ? "var(--shadow-md)" : "var(--shadow-sm)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = isTopPick
          ? "var(--shadow-md)"
          : "var(--shadow-sm)";
      }}
    >
      {/* Top Pick badge */}
      {isTopPick && (
        <div
          style={{
            position: "absolute",
            top: "-13px",
            left: "20px",
            background: "var(--gradient-primary)",
            color: "#fff",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 14px",
            borderRadius: "100px",
          }}
        >
          ★ Top Pick
        </div>
      )}

      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "14px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-sm)",
            background: "var(--primary-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <GraduationCap size={22} color="var(--primary)" />
        </div>

        <span
          style={{
            background: score >= 90 ? "rgba(49,185,120,0.12)" : "var(--primary-light)",
            color: score >= 90 ? "var(--accent-green)" : "var(--primary)",
            borderRadius: "100px",
            padding: "5px 14px",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          {score}% Match
        </span>
      </div>

      {/* Category tag */}
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "var(--primary-light)",
          color: "var(--primary)",
          borderRadius: "100px",
          padding: "4px 12px",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: "10px",
          width: "fit-content",
        }}
      >
        {course.category}
      </span>

      {/* Course name */}
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "var(--text-dark)",
          lineHeight: 1.35,
          marginBottom: "16px",
        }}
      >
        {course.name}
      </h3>

      {/* Progress bar */}
      <MatchProgressBar score={score} label="Match Score" />

      {/* Meta row */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "12px",
            color: "var(--text-light)",
          }}
        >
          <Clock size={13} />
          {course.duration}
        </div>
        {course.career_outcome && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "12px",
              color: "var(--text-light)",
            }}
          >
            <TrendingUp size={13} />
            {course.career_outcome}
          </div>
        )}
      </div>

      {/* AI reason */}
      {course.reason && (
        <div
          style={{
            background: "var(--bg-light)",
            borderLeft: "3px solid var(--primary)",
            borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
            padding: "10px 14px",
            fontSize: "12px",
            color: "var(--text-medium)",
            lineHeight: 1.6,
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>AI insight: </span>
          {course.reason}
        </div>
      )}

      {/* Legacy reason tags fallback */}
      {!course.reason && course.reasons?.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "20px",
          }}
        >
          {course.reasons.filter(Boolean).map((r, i) => (
            <span
              key={i}
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)",
                borderRadius: "100px",
                padding: "4px 10px",
                fontSize: "11px",
                fontWeight: 500,
              }}
            >
              {r}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <button
        style={{
          marginTop: "auto",
          width: "100%",
          padding: "11px",
          borderRadius: "var(--radius-sm)",
          border: "1.5px solid var(--border)",
          background: "#fff",
          color: "var(--primary)",
          fontSize: "13px",
          fontWeight: 700,
          fontFamily: "var(--font-main)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          transition: "var(--transition)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--primary)";
          e.currentTarget.style.color = "#fff";
          e.currentTarget.style.borderColor = "var(--primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.color = "var(--primary)";
          e.currentTarget.style.borderColor = "var(--border)";
        }}
      >
        View Course Details
        <ChevronRight size={15} />
      </button>
    </div>
  );
}