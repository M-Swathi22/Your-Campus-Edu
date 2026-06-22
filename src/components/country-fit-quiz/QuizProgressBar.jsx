export default function QuizProgressBar({ current, total }) {
  const pct = Math.round((current / (total - 1)) * 100);

  return (
    <div style={{ fontFamily: "var(--font-main)", marginBottom: "32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        {/* Dots */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "100px", background: i <= current ? "var(--primary)" : "var(--border)", transition: "var(--transition)" }} />
          ))}
        </div>
        <span style={{ fontSize: "12px", color: "var(--text-light)", fontWeight: 600 }}>
          Question {current + 1} of {total}
        </span>
      </div>
      <div style={{ height: "4px", borderRadius: "100px", background: "var(--bg-light)", overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: "100px", background: "var(--gradient-primary)", width: `${pct}%`, transition: "width 0.5s ease" }} />
      </div>
    </div>
  );
}