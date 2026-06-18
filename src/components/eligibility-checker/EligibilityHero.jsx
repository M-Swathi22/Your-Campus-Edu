import { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Brain, Shield, Zap } from "lucide-react";

const STATS = [
  { value: "50+", label: "Course Categories" },
  { value: "7+", label: "Study Destinations" },
  { value: "AI", label: "Instant Verdict" },
];

const TRUST_PILLS = [
  { icon: Brain, text: "Powered by Claude AI" },
  { icon: Shield, text: "Domestic & Abroad" },
  { icon: Zap, text: "Verdict in seconds" },
];

const PREVIEW_CRITERIA = [
  { label: "Stream Requirement", status: "MET", pct: 100 },
  { label: "Minimum Percentage", status: "MET", pct: 88 },
  { label: "Entrance Exam", status: "PARTIAL", pct: 62 },
  { label: "English Proficiency", status: "MET", pct: 95 },
];

function statusColor(status) {
  if (status === "MET") return "var(--accent-green)";
  if (status === "PARTIAL") return "var(--warning)";
  return "var(--danger)";
}

function CriteriaBar({ label, status, pct, delay }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", alignItems: "center" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{label}</span>
        <span
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: statusColor(status),
            background: "rgba(255,255,255,0.07)",
            padding: "2px 10px",
            borderRadius: "100px",
          }}
        >
          {status === "MET" ? "✓ Met" : status === "PARTIAL" ? "⚡ Partial" : "✕ Not Met"}
        </span>
      </div>
      <div style={{ height: "6px", borderRadius: "100px", background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
        <div
          className="elig-bar"
          data-width={pct}
          style={{
            height: "100%",
            borderRadius: "100px",
            background: statusColor(status),
            width: "0%",
            transition: `width 1.1s cubic-bezier(.4,0,.2,1) ${delay}ms`,
            opacity: 0.85,
          }}
        />
      </div>
    </div>
  );
}

export default function EligibilityHero() {
  const barsRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      barsRef.current?.querySelectorAll(".elig-bar").forEach((el) => {
        el.style.width = el.dataset.width + "%";
      });
    }, 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        fontFamily: "var(--font-main)",
        background: "var(--primary-dark)",
        position: "relative",
        overflow: "hidden",
        padding: "72px 24px 80px",
      }}
    >
      {/* Ambient blobs */}
      <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(109,83,163,0.5) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(49,185,120,0.28) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="elig-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "100px", padding: "7px 18px", marginBottom: "28px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent-green)", animation: "eligPulse 2s infinite", flexShrink: 0 }} />
              <Sparkles size={14} color="rgba(255,255,255,0.8)" />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                AI Eligibility Checker
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(30px,4.5vw,54px)", fontWeight: 800, lineHeight: 1.12, color: "#fff", marginBottom: "20px" }}>
              Know Your Eligibility
              <br />
              <span style={{ background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Before You Apply.
              </span>
            </h1>

            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.68)", lineHeight: 1.7, maxWidth: "480px", marginBottom: "32px" }}>
              Check eligibility for Indian colleges or international universities in seconds.
              Our AI evaluates your stream, marks, entrance scores, and more — then gives
              you a personalised verdict with clear next steps.
            </p>

            {/* Trust pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "38px" }}>
              {TRUST_PILLS.map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "100px", padding: "6px 14px" }}>
                  <Icon size={13} color="var(--accent-green)" />
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#eligibility-form"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "var(--radius-md)", background: "var(--gradient-primary)", color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 8px 24px rgba(49,185,120,0.3)", transition: "var(--transition)" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                Check My Eligibility
                <ArrowRight size={17} />
              </a>
              <a
                href="/courses"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "var(--radius-md)", background: "transparent", border: "1px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "15px", textDecoration: "none", transition: "var(--transition)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Browse Courses
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "36px", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontSize: "26px", fontWeight: 800, background: "var(--gradient-primary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{value}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginTop: "2px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — preview card */}
          <div ref={barsRef}>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-xl)", padding: "32px", backdropFilter: "blur(12px)" }}>
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px", paddingBottom: "18px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-sm)", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Brain size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>Eligibility Preview</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Science (Biology) · MBBS · India</div>
                </div>
                <div style={{ marginLeft: "auto", background: "rgba(49,185,120,0.15)", border: "1px solid rgba(49,185,120,0.3)", borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, color: "var(--accent-green)" }}>
                  Live
                </div>
              </div>

              {/* Verdict badge */}
              <div style={{ background: "rgba(49,185,120,0.12)", border: "1px solid rgba(49,185,120,0.25)", borderRadius: "var(--radius-sm)", padding: "12px 16px", marginBottom: "22px", display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--accent-green)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontWeight: 800, fontSize: "14px" }}>✓</span>
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--accent-green)" }}>Fully Eligible</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>All core criteria met</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: "22px", fontWeight: 800, color: "#fff" }}>92<span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>%</span></div>
              </div>

              {PREVIEW_CRITERIA.map((c, i) => (
                <CriteriaBar key={c.label} {...c} delay={300 + i * 150} />
              ))}

              <div style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "8px" }}>
                <Sparkles size={13} color="rgba(255,255,255,0.4)" />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>AI verdict — not a generic filter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes eligPulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        @media(max-width:768px){ .elig-hero-grid{ grid-template-columns:1fr !important; gap:40px !important; } }
      `}</style>
    </section>
  );
}