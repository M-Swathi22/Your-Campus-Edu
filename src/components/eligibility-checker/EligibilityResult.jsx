import { RotateCcw, Sparkles, CheckCircle, AlertTriangle, XCircle, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Verdict config ─── */
const VERDICT_CONFIG = {
  ELIGIBLE: {
    label: "Fully Eligible",
    color: "var(--accent-green)",
    bg: "rgba(49,185,120,0.08)",
    border: "rgba(49,185,120,0.25)",
    gradientBg: "linear-gradient(135deg, rgba(49,185,120,0.12) 0%, rgba(49,185,120,0.04) 100%)",
    icon: CheckCircle,
    symbol: "✓",
    tagline: "You meet all core requirements.",
  },
  CONDITIONAL: {
    label: "Conditionally Eligible",
    color: "var(--warning)",
    bg: "rgba(248,148,31,0.08)",
    border: "rgba(248,148,31,0.25)",
    gradientBg: "linear-gradient(135deg, rgba(248,148,31,0.1) 0%, rgba(248,148,31,0.03) 100%)",
    icon: AlertTriangle,
    symbol: "⚡",
    tagline: "You're close — a few gaps to address.",
  },
  INELIGIBLE: {
    label: "Currently Ineligible",
    color: "var(--danger)",
    bg: "rgba(255,0,3,0.06)",
    border: "rgba(255,0,3,0.2)",
    gradientBg: "linear-gradient(135deg, rgba(255,0,3,0.07) 0%, rgba(255,0,3,0.02) 100%)",
    icon: XCircle,
    symbol: "✕",
    tagline: "There are significant gaps to overcome.",
  },
};

const STATUS_CONFIG = {
  MET: { label: "Met", color: "var(--accent-green)", bg: "rgba(49,185,120,0.1)" },
  PARTIAL: { label: "Partial", color: "var(--warning)", bg: "rgba(248,148,31,0.1)" },
  NOT_MET: { label: "Not Met", color: "var(--danger)", bg: "rgba(255,0,3,0.08)" },
  NOT_REQUIRED: { label: "N/A", color: "var(--text-light)", bg: "var(--bg-light)" },
};

/* ─── Sub-components ─── */
function ScoreRing({ score, color }) {
  const r = 38;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <div style={{ position: "relative", width: "96px", height: "96px", flexShrink: 0 }}>
      <svg width="96" height="96" viewBox="0 0 96 96" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="48" cy="48" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        <circle
          cx="48" cy="48" r={r} fill="none"
          stroke={color} strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1.2s ease" }}
        />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "22px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{score}</span>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>/ 100</span>
      </div>
    </div>
  );
}

function CriteriaRow({ criterion }) {
  const status = STATUS_CONFIG[criterion.status] || STATUS_CONFIG.NOT_REQUIRED;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 90px 90px", gap: "12px", alignItems: "center", padding: "14px 0", borderBottom: "1px solid var(--border)" }} className="criteria-row">
      <div>
        <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)", marginBottom: "3px" }}>{criterion.label}</div>
        <div style={{ fontSize: "12px", color: "var(--text-light)", lineHeight: 1.5 }}>{criterion.note}</div>
      </div>
      <div style={{ fontSize: "12px", color: "var(--text-medium)", textAlign: "center" }}>{criterion.requiredValue || "—"}</div>
      <div style={{ fontSize: "12px", color: "var(--text-medium)", textAlign: "center", fontWeight: 600 }}>{criterion.studentValue || "—"}</div>
      <div style={{ textAlign: "center" }}>
        <span style={{ background: status.bg, color: status.color, borderRadius: "100px", padding: "4px 10px", fontSize: "11px", fontWeight: 700, whiteSpace: "nowrap" }}>
          {status.label}
        </span>
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export default function EligibilityResult({ result = null, formType = "domestic", onReset }) {
  if (!result) return null;

  const verdict = VERDICT_CONFIG[result.verdict] || VERDICT_CONFIG.CONDITIONAL;
  const VerdictIcon = verdict.icon;
  const score = Math.min(100, Math.max(0, result.overallScore ?? 75));

  return (
    <section
      style={{
        fontFamily: "var(--font-main)",
        padding: "80px 24px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Verdict Banner ── */}
        <div
          style={{
            background: "var(--gradient-secondary)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(28px,5vw,52px)",
            marginBottom: "40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", right: "-50px", top: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: "40%", bottom: "-70px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(49,185,120,0.1)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }} className="banner-inner">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", flexWrap: "wrap" }}>
              {/* Score ring */}
              <ScoreRing score={score} color={verdict.color} />

              {/* Content */}
              <div style={{ flex: 1, minWidth: "240px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <Sparkles size={14} color="rgba(255,255,255,0.55)" />
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
                    AI Eligibility Result
                  </span>
                </div>

                {/* Verdict pill */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: verdict.bg, border: `1px solid ${verdict.border}`, borderRadius: "100px", padding: "7px 18px", marginBottom: "16px" }}>
                  <VerdictIcon size={15} color={verdict.color} />
                  <span style={{ fontSize: "14px", fontWeight: 700, color: verdict.color }}>{verdict.label}</span>
                </div>

                <h2 style={{ fontSize: "clamp(20px,3.5vw,32px)", fontWeight: 800, color: "#fff", marginBottom: "10px", lineHeight: 1.2 }}>
                  {result.primaryCategory
                    ? `${result.primaryCategory} — ${verdict.tagline}`
                    : verdict.tagline}
                </h2>

                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: "620px", marginBottom: "20px" }}>
                  {result.summary}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "100px", padding: "6px 16px", fontSize: "13px", fontWeight: 600, color: "#fff" }}>
                    {result.criteria?.length || 0} criteria evaluated
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "100px", padding: "6px 16px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
                    {formType === "domestic" ? "🇮🇳 India / Domestic" : "🌐 Study Abroad"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Criteria Table ── */}
        {result.criteria?.length > 0 && (
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px 32px", marginBottom: "32px", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "20px" }}>
              Eligibility Criteria Breakdown
            </h3>

            {/* Table header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 90px 90px", gap: "12px", paddingBottom: "10px", borderBottom: "2px solid var(--border)", marginBottom: "4px" }} className="criteria-row">
              {["Criterion", "Required", "Your Value", "Status"].map((h) => (
                <div key={h} style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-light)", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: h !== "Criterion" ? "center" : "left" }}>{h}</div>
              ))}
            </div>

            {result.criteria.map((c, i) => <CriteriaRow key={i} criterion={c} />)}
          </div>
        )}

        {/* ── Strengths & Gaps ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "32px" }} className="sg-grid">
          {/* Strengths */}
          {result.strengths?.length > 0 && (
            <div style={{ background: "rgba(49,185,120,0.05)", border: "1px solid rgba(49,185,120,0.2)", borderRadius: "var(--radius-lg)", padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent-green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckCircle size={17} color="#fff" />
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-dark)" }}>Your Strengths</h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {result.strengths.map((s, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "var(--accent-green)", fontWeight: 800, fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                    <span style={{ fontSize: "13px", color: "var(--text-medium)", lineHeight: 1.55 }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Gaps */}
          {result.gaps?.length > 0 && (
            <div style={{ background: "rgba(255,143,60,0.05)", border: "1px solid rgba(255,143,60,0.2)", borderRadius: "var(--radius-lg)", padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--warning)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <AlertTriangle size={17} color="#fff" />
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-dark)" }}>Gaps to Address</h4>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {result.gaps.map((g, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ color: "var(--warning)", fontWeight: 800, fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>⚡</span>
                    <span style={{ fontSize: "13px", color: "var(--text-medium)", lineHeight: 1.55 }}>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ── Next Steps ── */}
        {result.nextSteps?.length > 0 && (
          <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px 32px", marginBottom: "32px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "20px" }}>Your AI-Recommended Next Steps</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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

        {/* ── Alternative Paths ── */}
        {result.alternativePaths?.length > 0 && (
          <div style={{ marginBottom: "40px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "16px" }}>Alternative Paths Worth Exploring</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px" }}>
              {result.alternativePaths.map((alt, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "8px", transition: "var(--transition)", cursor: "default" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-dark)" }}>{alt.name}</span>
                    <ChevronRight size={16} color="var(--primary)" />
                  </div>
                  <span style={{ fontSize: "12px", color: "var(--text-medium)", lineHeight: 1.55 }}>{alt.reason}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Actions ── */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  }}
>
  {/* Budget Calculator */}
 <Link
  to="/ai-tools/budget-calculator"
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
    cursor: "pointer",
    transition: "var(--transition)",
    boxShadow: "var(--shadow-md)",
  }}
>
  <ArrowRight size={15} />
  Calculate My Budget
</Link>

  {/* Reset */}
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
    Check Another Eligibility
  </button>
</div>
      </div>

      <style>{`
        @media(max-width:768px){
          .criteria-row{ grid-template-columns:1fr !important; }
          .sg-grid{ grid-template-columns:1fr !important; }
          .banner-inner > div{ flex-direction:column !important; }
        }
      `}</style>
    </section>
  );
}