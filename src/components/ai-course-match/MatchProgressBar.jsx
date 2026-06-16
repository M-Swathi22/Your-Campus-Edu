export default function MatchProgressBar({ score, label = "AI Confidence Score" }) {
  const color =
    score >= 90
      ? "var(--accent-green)"
      : score >= 75
      ? "var(--primary)"
      : "var(--warning)";

  return (
    <div
      style={{
        fontFamily: "var(--font-main)",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--text-medium)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 800,
            color,
          }}
        >
          {score}%
        </span>
      </div>

      <div
        style={{
          width: "100%",
          height: "10px",
          borderRadius: "100px",
          background: "var(--bg-light)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${score}%`,
            borderRadius: "100px",
            background:
              score >= 90
                ? "var(--gradient-primary)"
                : score >= 75
                ? "var(--gradient-secondary)"
                : "var(--warning)",
            transition: "width 1.1s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>

      {/* Score label */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        <span style={{ fontSize: "11px", color: "var(--text-light)" }}>Poor fit</span>
        <span style={{ fontSize: "11px", color: "var(--text-light)" }}>
          {score >= 90 ? "🎯 Excellent fit" : score >= 75 ? "✓ Strong fit" : "Moderate fit"}
        </span>
      </div>
    </div>
  );
}