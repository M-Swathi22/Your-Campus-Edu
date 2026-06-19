import { RotateCcw, Sparkles, TrendingUp, BookOpen, CreditCard } from "lucide-react";
import { BudgetSummaryCard, CostBreakdown, DestinationCard, CollegeCard } from "./BudgetSubComponents";

function fmtNum(n) { return Number(n || 0).toLocaleString("en-IN"); }

export default function BudgetResult({ result = null, onReset }) {
  if (!result) return null;

  const fund = result.fundingPlan || {};
  const nextSteps = result.nextSteps || [];
  const destComparison = result.destinationComparison || [];
  const savingTips = result.savingTips || [];

  return (
    <section style={{ fontFamily: "var(--font-main)", padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── 1. Summary Banner ── */}
        <BudgetSummaryCard result={result} />

        {/* ── 2. Two-col layout: Breakdown + Funding ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "24px", marginBottom: "24px" }} className="result-2col">

          {/* Cost Breakdown */}
          <CostBreakdown breakdown={result.costBreakdown || []} />

          {/* Funding Plan card */}
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px 28px", boxShadow: "var(--shadow-sm)", height: "fit-content" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CreditCard size={18} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--text-dark)" }}>Funding Plan</h3>
            </div>

            {/* Budget covered bar */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "7px" }}>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-medium)" }}>Budget coverage</span>
                <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--primary)" }}>{fund.budgetCovered || 0}%</span>
              </div>
              <div style={{ height: "8px", borderRadius: "100px", background: "var(--bg-light)", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${fund.budgetCovered || 0}%`, borderRadius: "100px", background: fund.budgetCovered >= 80 ? "var(--accent-green)" : fund.budgetCovered >= 50 ? "var(--warning)" : "var(--danger)", transition: "width 1.1s ease" }} />
              </div>
            </div>

            {/* Key figures */}
            {[
              { label: "Funding gap", value: fund.gap > 0 ? `₹${fmtNum(fund.gap)}` : "None — you're covered", color: fund.gap > 0 ? "var(--danger)" : "var(--accent-green)" },
              { label: "Suggested loan", value: fund.recommendedLoan > 0 ? `₹${fmtNum(fund.recommendedLoan)}` : "Not needed", color: "var(--primary)" },
              { label: "Est. monthly EMI", value: fund.loanEMIEstimate || "—", color: "var(--text-dark)" },
              { label: "Part-time earnings", value: fund.partTimeEarnings || "Check local regulations", color: "var(--accent-green)" },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontSize: "13px", color: "var(--text-medium)" }}>{label}</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color }}>{value}</span>
              </div>
            ))}

            {/* Lenders */}
            {fund.lenders?.length > 0 && (
              <div style={{ marginTop: "18px" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-light)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Recommended Lenders</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {fund.lenders.map((l) => (
                    <span key={l} style={{ background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 600 }}>{l}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Scholarship note */}
            {fund.scholarshipPotential && (
              <div style={{ background: "rgba(49,185,120,0.06)", border: "1px solid rgba(49,185,120,0.2)", borderRadius: "var(--radius-sm)", padding: "12px 14px", marginTop: "16px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent-green)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>Scholarship potential</div>
                <div style={{ fontSize: "12px", color: "var(--text-medium)", lineHeight: 1.55 }}>{fund.scholarshipPotential}</div>
              </div>
            )}
          </div>
        </div>

        {/* ── 3. Destination Comparison ── */}
        {destComparison.length > 0 && (
          <div style={{ marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp size={18} color="var(--primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)" }}>Destination Comparison</h3>
                <p style={{ fontSize: "12px", color: "var(--text-light)" }}>All costs converted to INR for a fair comparison</p>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
              {destComparison.map((d, i) => <DestinationCard key={i} dest={d} />)}
            </div>
          </div>
        )}

        {/* ── 4. Saving Tips ── */}
        {savingTips.length > 0 && (
          <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px 32px", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "rgba(49,185,120,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={18} color="var(--accent-green)" />
              </div>
              <div>
                <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)" }}>AI Cost-Saving Tips</h3>
                <p style={{ fontSize: "12px", color: "var(--text-light)" }}>Personalised to your destination and priorities</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {savingTips.map((tip, i) => <CollegeCard key={i} tip={tip} />)}
            </div>
          </div>
        )}

        {/* ── 5. Next Steps ── */}
        {nextSteps.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <BookOpen size={18} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)" }}>Your Next Steps</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {nextSteps.map((ns, i) => (
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
            <RotateCcw size={15} /> Plan a different budget
          </button>
        </div>
      </div>

      <style>{`@media(max-width:768px){ .result-2col{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}