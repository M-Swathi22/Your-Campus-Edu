import { RotateCcw, Sparkles, Crown, CheckCircle, ChevronRight, User } from "lucide-react";

const MATCH_TIERS = {
  EXCELLENT: { label: "Excellent Match", color: "var(--accent-green)", bg: "rgba(49,185,120,0.08)",  border: "rgba(49,185,120,0.25)" },
  GOOD:      { label: "Good Match",       color: "var(--primary)",      bg: "var(--primary-light)",  border: "rgba(109,83,163,0.2)"  },
  FAIR:      { label: "Fair Match",       color: "var(--warning)",      bg: "rgba(248,148,31,0.08)", border: "rgba(248,148,31,0.25)" },
};

function tierFor(score) {
  if (score >= 85) return MATCH_TIERS.EXCELLENT;
  if (score >= 65) return MATCH_TIERS.GOOD;
  return MATCH_TIERS.FAIR;
}

/* ─── Destination rank card ─── */
function DestinationCard({ dest, rank }) {
  const tier = tierFor(dest.matchScore);
  const isTop = rank === 0;

  return (
    <div
      style={{ background: "#fff", border: isTop ? "2px solid var(--primary)" : "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px", position: "relative", transition: "var(--transition)" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {isTop && (
        <div style={{ position: "absolute", top: "-13px", left: "20px", background: "var(--gradient-primary)", color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "100px", display: "flex", alignItems: "center", gap: "4px" }}>
          <Crown size={11} /> Your #1 Match
        </div>
      )}

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "34px", lineHeight: 1 }}>{dest.flag}</span>
          <div>
            <div style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)" }}>{dest.country}</div>
            <span style={{ background: tier.bg, color: tier.color, borderRadius: "100px", padding: "2px 10px", fontSize: "11px", fontWeight: 700 }}>{tier.label}</span>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "24px", fontWeight: 800, color: tier.color }}>{dest.matchScore}%</div>
          <div style={{ fontSize: "10px", color: "var(--text-light)", fontWeight: 600 }}>match</div>
        </div>
      </div>

      {/* Score bar */}
      <div style={{ height: "8px", borderRadius: "100px", background: "var(--bg-light)", overflow: "hidden", marginBottom: "16px" }}>
        <div style={{ height: "100%", width: `${dest.matchScore}%`, borderRadius: "100px", background: tier.color, transition: "width 1.1s ease" }} />
      </div>

      {/* AI reason */}
      {dest.reason && (
        <div style={{ background: "var(--bg-light)", borderLeft: "3px solid var(--primary)", borderRadius: "0 var(--radius-sm) var(--radius-sm) 0", padding: "10px 14px", fontSize: "12px", color: "var(--text-medium)", lineHeight: 1.6, marginBottom: "16px" }}>
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Why it fits: </span>{dest.reason}
        </div>
      )}

      {/* Strengths */}
      {dest.strengths?.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {dest.strengths.slice(0, 3).map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "7px", fontSize: "12px", color: "var(--text-medium)" }}>
              <CheckCircle size={13} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: "1px" }} />{s}
            </div>
          ))}
        </div>
      )}

      {dest.watchOut && (
        <div style={{ marginTop: "12px", fontSize: "11px", color: "var(--text-light)", fontStyle: "italic" }}>
          Consider: {dest.watchOut}
        </div>
      )}
    </div>
  );
}

export default function QuizResult({ result = null, onReset }) {
  if (!result) return null;

  const destinations = result.destinations || [];
  const archetype = result.archetype || {};

  return (
    <section style={{ fontFamily: "var(--font-main)", padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Archetype Banner ── */}
        <div style={{ background: "var(--gradient-secondary)", borderRadius: "var(--radius-xl)", padding: "clamp(28px,5vw,52px)", marginBottom: "40px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: "-50px", top: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: "40%", bottom: "-70px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(49,185,120,0.1)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <Sparkles size={14} color="rgba(255,255,255,0.55)" />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Your AI-Generated Profile</span>
            </div>

            <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px", flexShrink: 0 }}>
                {archetype.emoji || "🎯"}
              </div>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <h2 style={{ fontSize: "clamp(20px,3.5vw,32px)", fontWeight: 800, color: "#fff", marginBottom: "6px", lineHeight: 1.2 }}>
                  {archetype.title || "The Determined Explorer"}
                </h2>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: "640px" }}>
                  {archetype.description || result.summary}
                </p>
              </div>
            </div>

            {/* Trait tags */}
            {archetype.traits?.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
                {archetype.traits.map((t, i) => (
                  <span key={i} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "100px", padding: "5px 14px", fontSize: "12px", fontWeight: 600, color: "#fff" }}>
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Ranked Destinations ── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "4px" }}>Your Best-Fit Destinations</h3>
            <p style={{ fontSize: "13px", color: "var(--text-light)" }}>Ranked by genuine personality and priority fit</p>
          </div>
          <div style={{ background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "6px 18px", fontSize: "13px", fontWeight: 700 }}>
            {destinations.length} matches found
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {destinations.map((dest, i) => (
            <DestinationCard key={i} dest={dest} rank={i} />
          ))}
        </div>

        {/* ── Personality Insights ── */}
        {result.insights?.length > 0 && (
          <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px 32px", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <User size={18} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)" }}>What Your Answers Reveal</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {result.insights.map((insight, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: "#fff", borderRadius: "var(--radius-md)", padding: "14px 18px", border: "1px solid var(--border)" }}>
                  <ChevronRight size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "13px", color: "var(--text-medium)", lineHeight: 1.6 }}>{insight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Next Steps ── */}
        {result.nextSteps?.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "18px" }}>Your Next Steps</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {result.nextSteps.map((ns, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", background: "#fff", borderRadius: "var(--radius-md)", padding: "16px 20px", border: "1px solid var(--border)" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--gradient-secondary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "13px", flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "4px" }}>{ns.step}</div>
                    <div style={{ fontSize: "13px", color: "var(--text-medium)", lineHeight: 1.55 }}>{ns.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Reset ── */}
        <div style={{ textAlign: "center" }}>
          <button onClick={onReset}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 32px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border)", background: "#fff", color: "var(--text-medium)", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-main)", cursor: "pointer", transition: "var(--transition)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-medium)"; }}>
            <RotateCcw size={15} /> Retake the quiz
          </button>
        </div>
      </div>
    </section>
  );
}