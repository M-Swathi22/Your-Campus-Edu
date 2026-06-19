export default function CompareProgressBar({ score, label = "Match Score", color }) {
  const barColor = color || (
    score >= 85 ? "var(--accent-green)" : score >= 65 ? "var(--primary)" : "var(--warning)"
  );

  return (
    <div style={{ fontFamily: "var(--font-main)", marginBottom: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-medium)" }}>{label}</span>
        <span style={{ fontSize: "13px", fontWeight: 800, color: barColor }}>{score}%</span>
      </div>
      <div style={{ width: "100%", height: "8px", borderRadius: "100px", background: "var(--bg-light)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${score}%`, borderRadius: "100px", background: barColor, transition: "width 1.1s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}