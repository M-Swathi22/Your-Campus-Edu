import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Globe, ChevronRight, BookOpen, DollarSign, PiggyBank } from "lucide-react";

/* ─── Shared helpers ─── */
function fmtNum(n) {
  return Number(n || 0).toLocaleString("en-IN");
}

/* ═══════════════════════════════════════════
   BUDGET SUMMARY CARD
   Top banner card — total cost, fit, funding
═══════════════════════════════════════════ */
export function BudgetSummaryCard({ result }) {
  const fit = result.budgetFit || "STRETCHED";
  const score = Math.min(100, Math.max(0, result.overallScore || 70));
  const est = result.totalCostEstimate || {};
  const fund = result.fundingPlan || {};

  const FIT_CONFIG = {
    COMFORTABLE: { label: "Budget: Comfortable",    color: "var(--accent-green)", bg: "rgba(49,185,120,0.12)",  border: "rgba(49,185,120,0.25)" },
    STRETCHED:   { label: "Budget: Stretched",      color: "var(--warning)",      bg: "rgba(248,148,31,0.1)",  border: "rgba(248,148,31,0.25)" },
    SHORT:       { label: "Budget: Short",           color: "var(--danger)",       bg: "rgba(255,0,3,0.08)",    border: "rgba(255,0,3,0.2)"     },
  };
  const fitCfg = FIT_CONFIG[fit] || FIT_CONFIG.STRETCHED;

  return (
    <div style={{ background: "var(--gradient-secondary)", borderRadius: "var(--radius-xl)", padding: "clamp(28px,5vw,52px)", marginBottom: "32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "-50px", top: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "38%", bottom: "-70px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(49,185,120,0.1)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
          <DollarSign size={14} color="rgba(255,255,255,0.55)" />
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>AI Budget Analysis Complete</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "28px", alignItems: "flex-start" }} className="summary-inner">
          <div>
            {/* Fit badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: fitCfg.bg, border: `1px solid ${fitCfg.border}`, borderRadius: "100px", padding: "6px 16px", marginBottom: "16px" }}>
              {fit === "COMFORTABLE" ? <CheckCircle size={14} color={fitCfg.color} /> : <AlertCircle size={14} color={fitCfg.color} />}
              <span style={{ fontSize: "13px", fontWeight: 700, color: fitCfg.color }}>{fitCfg.label}</span>
            </div>

            <h2 style={{ fontSize: "clamp(20px,3.5vw,34px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "10px" }}>
              {est.currency}{fmtNum(est.grandTotal)} over {est.totalDuration} year{est.totalDuration !== 1 ? "s" : ""}
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>≈ ₹{fmtNum(est.grandTotalINR)} total &nbsp;·&nbsp; {est.currency}{fmtNum(est.perYear)} / year</p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: "600px", marginBottom: "22px" }}>{result.summary}</p>

            {/* Stats row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "100px", padding: "6px 16px", fontSize: "13px", fontWeight: 600, color: "#fff" }}>
                {fund.budgetCovered || 0}% budget covered
              </div>
              {fund.gap > 0 && (
                <div style={{ background: "rgba(255,143,60,0.15)", border: "1px solid rgba(255,143,60,0.3)", borderRadius: "100px", padding: "6px 16px", fontSize: "13px", fontWeight: 600, color: "var(--warning)" }}>
                  Gap: ₹{fmtNum(fund.gap)}
                </div>
              )}
              {fund.recommendedLoan > 0 && (
                <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "100px", padding: "6px 16px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>
                  Suggested loan: ₹{fmtNum(fund.recommendedLoan)}
                </div>
              )}
            </div>
          </div>

          {/* Score ring */}
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <svg width="96" height="96" viewBox="0 0 96 96" style={{ transform: "rotate(-90deg)" }}>
              <circle cx="48" cy="48" r="38" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
              <circle cx="48" cy="48" r="38" fill="none" stroke={fitCfg.color} strokeWidth="8"
                strokeDasharray={`${(score / 100) * 2 * Math.PI * 38} ${2 * Math.PI * 38}`}
                strokeLinecap="round" style={{ transition: "stroke-dasharray 1.2s ease" }} />
            </svg>
            <div style={{ marginTop: "-68px", marginBottom: "12px", textAlign: "center" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{score}</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>/ 100</div>
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "40px" }}>Budget fit score</div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:640px){ .summary-inner{ grid-template-columns:1fr !important; } }`}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════
   COST BREAKDOWN
   Bar chart style breakdown per category
═══════════════════════════════════════════ */
export function CostBreakdown({ breakdown = [] }) {
  if (!breakdown.length) return null;

  const maxTypical = Math.max(...breakdown.map((b) => b.typicalAmount || 0));

  return (
    <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px 32px", marginBottom: "24px", boxShadow: "var(--shadow-sm)" }}>
      <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "24px" }}>Annual Cost Breakdown</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {breakdown.map((item, i) => {
          const pct = maxTypical > 0 ? Math.round((item.typicalAmount / maxTypical) * 100) : 0;
          const barColor = i === 0 ? "var(--primary)" : i === 1 ? "var(--extra-indigo)" : i === 2 ? "var(--accent-blue)" : i % 2 === 0 ? "var(--extra-orange)" : "var(--accent-green)";

          return (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <div>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-dark)" }}>{item.category}</span>
                  <span style={{ fontSize: "12px", color: "var(--text-light)", marginLeft: "10px" }}>{item.note}</span>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-dark)" }}>{item.currency}{fmtNum(item.typicalAmount)}</span>
                  <span style={{ fontSize: "11px", color: "var(--text-light)", display: "block" }}>
                    {item.currency}{fmtNum(item.minAmount)} – {item.currency}{fmtNum(item.maxAmount)}
                  </span>
                </div>
              </div>
              <div style={{ height: "8px", borderRadius: "100px", background: "var(--bg-light)", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, borderRadius: "100px", background: barColor, transition: "width 1s ease" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   DESTINATION CARD
   One card per compared destination
═══════════════════════════════════════════ */
export function DestinationCard({ dest }) {
  const FIT = {
    COMFORTABLE: { color: "var(--accent-green)", bg: "rgba(49,185,120,0.08)", label: "Comfortable" },
    STRETCHED:   { color: "var(--warning)",      bg: "rgba(248,148,31,0.08)", label: "Stretched"   },
    SHORT:       { color: "var(--danger)",        bg: "rgba(255,0,3,0.06)",   label: "Short"       },
  };
  const fit = FIT[dest.budgetFit] || FIT.STRETCHED;

  return (
    <div
      style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "22px", display: "flex", flexDirection: "column", gap: "12px", transition: "var(--transition)" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.borderColor = "var(--primary)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--border)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "28px", lineHeight: 1 }}>{dest.flag}</span>
          <div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-dark)" }}>{dest.destination}</div>
            <div style={{ fontSize: "11px", color: "var(--text-light)" }}>Total est. (INR)</div>
          </div>
        </div>
        <span style={{ background: fit.bg, color: fit.color, borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700 }}>{fit.label}</span>
      </div>

      <div style={{ fontSize: "22px", fontWeight: 800, color: "var(--text-dark)" }}>
        ₹{fmtNum(dest.totalCostINR)}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {(dest.pros || []).map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "7px", fontSize: "12px", color: "var(--text-medium)" }}>
            <span style={{ color: "var(--accent-green)", fontWeight: 800, flexShrink: 0 }}>+</span>{p}
          </div>
        ))}
        {(dest.cons || []).map((c, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "7px", fontSize: "12px", color: "var(--text-medium)" }}>
            <span style={{ color: "var(--danger)", fontWeight: 800, flexShrink: 0 }}>−</span>{c}
          </div>
        ))}
      </div>

      {dest.verdict && (
        <div style={{ background: "var(--bg-light)", borderLeft: "3px solid var(--primary)", borderRadius: "0 var(--radius-sm) var(--radius-sm) 0", padding: "8px 12px", fontSize: "12px", color: "var(--text-medium)", lineHeight: 1.5 }}>
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>AI: </span>{dest.verdict}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   COLLEGE CARD
   Used in saving tips section
═══════════════════════════════════════════ */
export function CollegeCard({ tip }) {
  return (
    <div
      style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "18px 20px", display: "flex", gap: "14px", alignItems: "flex-start", transition: "var(--transition)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <PiggyBank size={18} color="var(--primary)" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-dark)" }}>{tip.tip}</div>
          {tip.potentialSaving && (
            <span style={{ background: "rgba(49,185,120,0.1)", color: "var(--accent-green)", borderRadius: "100px", padding: "3px 10px", fontSize: "11px", fontWeight: 700, flexShrink: 0, marginLeft: "10px" }}>
              Save {tip.potentialSaving}/yr
            </span>
          )}
        </div>
        <div style={{ fontSize: "12px", color: "var(--text-medium)", lineHeight: 1.55 }}>{tip.detail}</div>
      </div>
    </div>
  );
}