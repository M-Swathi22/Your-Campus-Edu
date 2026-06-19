import { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Brain, Shield, Zap, GitCompareArrows } from "lucide-react";

const STATS = [
  { value: "10+",  label: "Colleges Indexed" },
  { value: "8",    label: "Compare Parameters" },
  { value: "AI",   label: "Personalised Verdict" },
];

const TRUST_PILLS = [
  { icon: Brain,  text: "Powered by Claude AI" },
  { icon: Shield, text: "Real rankings & fees"  },
  { icon: Zap,    text: "Side-by-side in 15s"   },
];

const PREVIEW_ROWS = [
  { label: "QS World Rank",   a: "#227", b: "#21",  aWin: false },
  { label: "Total Fees",      a: "₹8L",  b: "₹90L", aWin: true  },
  { label: "Placement Rate",  a: "98%",  b: "85%",  aWin: true  },
  { label: "Avg Package",     a: "₹21L", b: "₹55L", aWin: false },
];

function CompareRow({ label, a, b, aWin, delay }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 70px 70px", alignItems: "center", gap: "8px", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.07)", opacity: 0, animation: `fadeInRow 0.5s ease ${delay}ms forwards` }}>
      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>{label}</span>
      <span style={{ fontSize: "12px", fontWeight: 700, textAlign: "center", color: aWin ? "var(--accent-green)" : "rgba(255,255,255,0.6)", background: aWin ? "rgba(49,185,120,0.12)" : "transparent", borderRadius: "100px", padding: "3px 0" }}>{a}</span>
      <span style={{ fontSize: "12px", fontWeight: 700, textAlign: "center", color: !aWin ? "var(--accent-green)" : "rgba(255,255,255,0.6)", background: !aWin ? "rgba(49,185,120,0.12)" : "transparent", borderRadius: "100px", padding: "3px 0" }}>{b}</span>
    </div>
  );
}

export default function CompareHero() {
  const cardRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      cardRef.current?.querySelectorAll(".fade-row").forEach((el) => (el.style.opacity = "1"));
    }, 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{ fontFamily: "var(--font-main)", background: "var(--primary-dark)", position: "relative", overflow: "hidden", padding: "72px 24px 80px" }}>
      <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(109,83,163,0.5) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(49,185,120,0.28) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="compare-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

          {/* LEFT */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "100px", padding: "7px 18px", marginBottom: "28px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent-green)", animation: "comparePulse 2s infinite", flexShrink: 0 }} />
              <GitCompareArrows size={14} color="rgba(255,255,255,0.8)" />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.06em", textTransform: "uppercase" }}>AI College Comparison</span>
            </div>

            <h1 style={{ fontSize: "clamp(30px,4.5vw,54px)", fontWeight: 800, lineHeight: 1.12, color: "#fff", marginBottom: "20px" }}>
              Compare Colleges
              <br />
              <span style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Side by Side. Instantly.
              </span>
            </h1>

            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", lineHeight: 1.7, maxWidth: "480px", marginBottom: "32px" }}>
              Pick any colleges — in India or abroad — and let AI compare rankings,
              fees, placements, and scholarships side by side. Or tell us your
              priorities and we'll suggest the best-fit colleges for you.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "38px" }}>
              {TRUST_PILLS.map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "100px", padding: "6px 14px" }}>
                  <Icon size={13} color="var(--accent-green)" />
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="#compare-form"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "var(--radius-md)", background: "var(--gradient-primary)", color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 8px 24px rgba(49,185,120,0.3)", transition: "var(--transition)" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}>
                Compare Colleges Now <ArrowRight size={17} />
              </a>
              <a href="/budget-calculator"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "var(--radius-md)", background: "transparent", border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "15px", textDecoration: "none", transition: "var(--transition)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                Calculate Budget First
              </a>
            </div>

            <div style={{ display: "flex", gap: "36px", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: "26px", fontWeight: 800, background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{value}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginTop: "2px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — preview comparison card */}
          <div ref={cardRef}>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-xl)", padding: "32px", backdropFilter: "blur(12px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", paddingBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-sm)", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Brain size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Comparison Preview</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>IIT Madras vs U. of Toronto</div>
                </div>
                <div style={{ marginLeft: "auto", background: "rgba(49,185,120,0.15)", border: "1px solid rgba(49,185,120,0.3)", borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, color: "var(--accent-green)" }}>Live</div>
              </div>

              {/* College headers */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 70px 70px", marginBottom: "10px" }}>
                <span></span>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.7)", textAlign: "center" }}>🇮🇳 IIT-M</span>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.7)", textAlign: "center" }}>🇨🇦 UofT</span>
              </div>

              {PREVIEW_ROWS.map((row, i) => (
                <div key={row.label} className="fade-row" style={{ opacity: 0, transition: `opacity 0.5s ease ${200 + i * 150}ms` }}>
                  <CompareRow {...row} delay={200 + i * 150} />
                </div>
              ))}

              <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles size={13} color="rgba(255,255,255,0.4)" />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>AI picks the winner per parameter — not a generic table</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes comparePulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        @keyframes fadeInRow { from{opacity:0; transform:translateY(6px);} to{opacity:1; transform:translateY(0);} }
        @media(max-width:768px){ .compare-hero-grid{ grid-template-columns:1fr !important; gap:40px !important; } }
      `}</style>
    </section>
  );
}