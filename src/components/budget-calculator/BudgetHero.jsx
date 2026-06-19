import { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Brain, Shield, Zap, DollarSign } from "lucide-react";

const STATS = [
  { value: "8+",    label: "Destinations" },
  { value: "₹→$",   label: "All Currencies" },
  { value: "AI",    label: "Smart Planning" },
];

const TRUST_PILLS = [
  { icon: Brain,      text: "Powered by Claude AI"       },
  { icon: Shield,     text: "Real cost data, not guesses" },
  { icon: Zap,        text: "Full plan in 15 seconds"    },
];

const PREVIEW_ITEMS = [
  { label: "Tuition (B.Tech, Canada)",  amount: "C$ 28,000", bar: 72, color: "var(--primary)"      },
  { label: "Living & Food",             amount: "C$ 14,000", bar: 48, color: "var(--extra-indigo)"  },
  { label: "Scholarships (est.)",       amount: "−C$ 6,000", bar: 28, color: "var(--accent-green)"  },
  { label: "Part-time earnings (est.)", amount: "−C$ 9,600", bar: 34, color: "var(--accent-green)"  },
];

function PreviewBar({ label, amount, bar, color, delay }) {
  return (
    <div style={{ marginBottom: "13px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{label}</span>
        <span style={{ fontSize: "12px", fontWeight: 700, color }}>{amount}</span>
      </div>
      <div style={{ height: "6px", borderRadius: "100px", background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
        <div
          className="budget-bar"
          data-width={bar}
          style={{ height: "100%", borderRadius: "100px", background: color, width: "0%", opacity: 0.85, transition: `width 1.1s cubic-bezier(.4,0,.2,1) ${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function BudgetHero() {
  const barsRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      barsRef.current?.querySelectorAll(".budget-bar").forEach((el) => {
        el.style.width = el.dataset.width + "%";
      });
    }, 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{ fontFamily: "var(--font-main)", background: "var(--primary-dark)", position: "relative", overflow: "hidden", padding: "72px 24px 80px" }}
    >
      <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(109,83,163,0.5) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(49,185,120,0.28) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="budget-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

          {/* LEFT */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "100px", padding: "7px 18px", marginBottom: "28px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent-green)", animation: "budgetPulse 2s infinite", flexShrink: 0 }} />
              <DollarSign size={14} color="rgba(255,255,255,0.75)" />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.06em", textTransform: "uppercase" }}>AI Budget Calculator</span>
            </div>

            <h1 style={{ fontSize: "clamp(30px,4.5vw,54px)", fontWeight: 800, lineHeight: 1.12, color: "#fff", marginBottom: "20px" }}>
              Know the Real Cost of
              <br />
              <span style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Your Study Abroad Dream.
              </span>
            </h1>

            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", lineHeight: 1.7, maxWidth: "480px", marginBottom: "32px" }}>
              Enter your destination, course, and budget. Our AI builds a complete
              financial plan — tuition, living costs, loan options, scholarships,
              and part-time earnings — all in one place.
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
              <a
                href="#budget-form"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "var(--radius-md)", background: "var(--gradient-primary)", color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 8px 24px rgba(49,185,120,0.3)", transition: "var(--transition)" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                Calculate My Budget
                <ArrowRight size={17} />
              </a>
              <a
                href="/eligibility-checker"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "var(--radius-md)", background: "transparent", border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "15px", textDecoration: "none", transition: "var(--transition)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Check Eligibility First
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

          {/* RIGHT — live preview card */}
          <div ref={barsRef}>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-xl)", padding: "32px", backdropFilter: "blur(12px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px", paddingBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-sm)", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Brain size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Budget Preview</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>B.Tech · Canada · 4 years</div>
                </div>
                <div style={{ marginLeft: "auto", background: "rgba(49,185,120,0.15)", border: "1px solid rgba(49,185,120,0.3)", borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, color: "var(--accent-green)" }}>Live</div>
              </div>

              {/* Total cost highlight */}
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "var(--radius-md)", padding: "16px 18px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Total Est. (4 yr)</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#fff", marginTop: "3px" }}>C$ 1,46,000</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>≈ ₹89 Lakh</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ background: "rgba(49,185,120,0.15)", border: "1px solid rgba(49,185,120,0.25)", borderRadius: "var(--radius-sm)", padding: "6px 12px" }}>
                    <div style={{ fontSize: "11px", color: "var(--accent-green)", fontWeight: 700 }}>Budget: Stretched</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>Gap: ₹18L</div>
                  </div>
                </div>
              </div>

              {PREVIEW_ITEMS.map((item, i) => (
                <PreviewBar key={item.label} {...item} delay={300 + i * 150} />
              ))}

              <div style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles size={13} color="rgba(255,255,255,0.4)" />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>AI-generated breakdown — not a generic estimate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes budgetPulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        @media(max-width:768px){ .budget-hero-grid{ grid-template-columns:1fr !important; gap:40px !important; } }
      `}</style>
    </section>
  );
}