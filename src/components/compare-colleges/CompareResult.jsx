import { RotateCcw, Sparkles, Crown, CheckCircle, XCircle, ChevronRight } from "lucide-react";
import ComparisonTable from "./ComparisonTable";
import CompareProgressBar from "./CompareProgressBar";

function fmtINR(n) {
  if (!n) return "—";
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  return `₹${Number(n).toLocaleString("en-IN")}`;
}

function CollegeDetailCard({ college, isRecommended }) {
  return (
    <div style={{ background: "#fff", border: isRecommended ? "2px solid var(--primary)" : "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px", position: "relative", display: "flex", flexDirection: "column", gap: "0", transition: "var(--transition)" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>

      {isRecommended && (
        <div style={{ position: "absolute", top: "-13px", left: "20px", background: "var(--gradient-primary)", color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "100px", display: "flex", alignItems: "center", gap: "4px" }}>
          <Crown size={11} /> Recommended
        </div>
      )}

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "26px" }}>{college.flag}</span>
          <div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.3 }}>{college.name}</div>
            <div style={{ fontSize: "11px", color: "var(--text-light)" }}>{college.city}</div>
          </div>
        </div>
        <span style={{ background: college.overallScore >= 85 ? "rgba(49,185,120,0.1)" : "var(--primary-light)", color: college.overallScore >= 85 ? "var(--accent-green)" : "var(--primary)", borderRadius: "100px", padding: "5px 12px", fontSize: "12px", fontWeight: 800, flexShrink: 0 }}>
          {college.overallScore}%
        </span>
      </div>

      <CompareProgressBar score={college.overallScore} label="Fit for you" />

      {/* Quick stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", margin: "14px 0" }}>
        <div style={{ background: "var(--bg-light)", borderRadius: "var(--radius-sm)", padding: "10px 12px" }}>
          <div style={{ fontSize: "10px", color: "var(--text-light)", fontWeight: 600, textTransform: "uppercase" }}>Fees</div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-dark)" }}>{college.fees?.label || fmtINR(college.fees?.totalINR)}</div>
        </div>
        <div style={{ background: "var(--bg-light)", borderRadius: "var(--radius-sm)", padding: "10px 12px" }}>
          <div style={{ fontSize: "10px", color: "var(--text-light)", fontWeight: 600, textTransform: "uppercase" }}>Avg Package</div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-dark)" }}>₹{college.avgPackageLPA} LPA</div>
        </div>
      </div>

      {/* Best for tag */}
      {college.bestFor && (
        <div style={{ fontSize: "11px", color: "var(--primary)", fontWeight: 600, background: "var(--primary-light)", borderRadius: "100px", padding: "5px 12px", display: "inline-block", marginBottom: "14px", width: "fit-content" }}>
          Best for: {college.bestFor}
        </div>
      )}

      {/* Pros/Cons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {(college.pros || []).slice(0, 3).map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "7px", fontSize: "12px", color: "var(--text-medium)" }}>
            <CheckCircle size={13} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: "1px" }} />{p}
          </div>
        ))}
        {(college.cons || []).slice(0, 2).map((c, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "7px", fontSize: "12px", color: "var(--text-medium)" }}>
            <XCircle size={13} color="var(--danger)" style={{ flexShrink: 0, marginTop: "1px" }} />{c}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompareResult({ result = null, onReset }) {
  if (!result) return null;

  const colleges = result.colleges || [];

  return (
    <section style={{ fontFamily: "var(--font-main)", padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── Verdict Banner ── */}
        <div style={{ background: "var(--gradient-secondary)", borderRadius: "var(--radius-xl)", padding: "clamp(28px,5vw,52px)", marginBottom: "40px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: "-50px", top: "-50px", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: "40%", bottom: "-70px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(49,185,120,0.1)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <Sparkles size={14} color="rgba(255,255,255,0.55)" />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>AI Comparison Complete</span>
            </div>

            {result.recommendedCollege && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(49,185,120,0.15)", border: "1px solid rgba(49,185,120,0.3)", borderRadius: "100px", padding: "7px 18px", marginBottom: "16px" }}>
                <Crown size={15} color="var(--accent-green)" />
                <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--accent-green)" }}>Recommended: {result.recommendedCollege}</span>
              </div>
            )}

            <h2 style={{ fontSize: "clamp(20px,3.5vw,32px)", fontWeight: 800, color: "#fff", marginBottom: "10px", lineHeight: 1.2 }}>
              {result.recommendationReason || "Here's your personalised comparison"}
            </h2>

            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", lineHeight: 1.65, maxWidth: "700px", marginBottom: "12px" }}>
              {result.summary}
            </p>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "100px", padding: "6px 16px", fontSize: "13px", fontWeight: 600, color: "#fff", marginTop: "8px" }}>
              {colleges.length} colleges compared
            </div>
          </div>
        </div>

        {/* ── Comparison Table ── */}
        <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "8px" }}>Full Comparison Table</h3>
        <p style={{ fontSize: "13px", color: "var(--text-light)", marginBottom: "20px" }}>Green highlights show the best option for each parameter</p>

        <ComparisonTable colleges={colleges} parameterWinners={result.parameterWinners || []} recommendedCollege={result.recommendedCollege} />

        {/* ── College Detail Cards ── */}
        <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "20px" }}>College Breakdown</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {colleges.map((c, i) => (
            <CollegeDetailCard key={i} college={c} isRecommended={c.name === result.recommendedCollege} />
          ))}
        </div>

        {/* ── Final Verdict ── */}
        {result.verdict && (
          <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "28px 32px", marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={18} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 800, color: "var(--text-dark)" }}>AI's Final Verdict</h3>
            </div>
            <p style={{ fontSize: "14px", color: "var(--text-medium)", lineHeight: 1.7 }}>{result.verdict}</p>
          </div>
        )}

        {/* ── Reset ── */}
        <div style={{ textAlign: "center" }}>
          <button onClick={onReset}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 32px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border)", background: "#fff", color: "var(--text-medium)", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-main)", cursor: "pointer", transition: "var(--transition)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-medium)"; }}>
            <RotateCcw size={15} /> Compare different colleges
          </button>
        </div>
      </div>
    </section>
  );
}