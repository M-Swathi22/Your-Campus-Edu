import { useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Brain, Shield, Zap } from "lucide-react";

const STATS = [
  { value: "100+", label: "Courses Mapped" },
  { value: "9", label: "Career Domains" },
  { value: "AI", label: "Real-Time Match" },
];

const TRUST_PILLS = [
  { icon: Brain, text: "Powered by Claude AI" },
  { icon: Shield, text: "Personalised, not filtered" },
  { icon: Zap, text: "Results in 10 seconds" },
];

/* Animated score bar shown in the hero visual */
function ScoreBar({ label, pct, delay }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--text-dark)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          {pct}%
        </span>
      </div>
      <div
        style={{
          height: "8px",
          borderRadius: "100px",
          background: "var(--bg-light)",
          overflow: "hidden",
        }}
      >
        <div
          className="hero-bar"
          style={{
            height: "100%",
            borderRadius: "100px",
            background: "var(--gradient-primary)",
            width: "0%",
            transition: `width 1.1s cubic-bezier(.4,0,.2,1) ${delay}ms`,
          }}
          data-width={pct}
        />
      </div>
    </div>
  );
}

export default function MatchHero() {
  const barsRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!barsRef.current) return;
      barsRef.current.querySelectorAll(".hero-bar").forEach((el) => {
        el.style.width = el.dataset.width + "%";
      });
    }, 300);
    return () => clearTimeout(timeout);
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
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(109,83,163,0.5) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(49,185,120,0.3) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "100px",
                padding: "7px 18px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--accent-green)",
                  animation: "heroPulse 2s infinite",
                  flexShrink: 0,
                }}
              />
              <Sparkles size={14} color="rgba(255,255,255,0.8)" />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                AI-Powered Career Guidance
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.12,
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Discover the Course
              <br />
              <span
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built for You
              </span>
              , Not Everyone.
            </h1>

            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "36px",
              }}
            >
              Answer a few questions. Our AI analyses your profile against 100+
              courses across 9 domains — and tells you exactly which ones fit,
              and why.
            </p>

            {/* Trust pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "40px",
              }}
            >
              {TRUST_PILLS.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "100px",
                    padding: "6px 14px",
                  }}
                >
                  <Icon size={13} color="var(--accent-green)" />
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="#course-match-form"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--gradient-primary)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "var(--transition)",
                  boxShadow: "0 8px 24px rgba(49,185,120,0.3)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                Start My AI Match
                <ArrowRight size={17} />
              </a>

              <a
                href="/courses"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "var(--radius-md)",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textDecoration: "none",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Browse All Courses
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "36px",
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: 800,
                      background: "var(--gradient-primary)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", fontWeight: 500, marginTop: "2px" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — live preview card */}
          <div ref={barsRef}>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "var(--radius-xl)",
                padding: "32px",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                  paddingBottom: "20px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-sm)",
                    background: "var(--gradient-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Brain size={22} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>
                    AI Match Preview
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
                    Science (Biology) · Doctor · Research
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    background: "rgba(49,185,120,0.15)",
                    border: "1px solid rgba(49,185,120,0.3)",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--accent-green)",
                  }}
                >
                  Live
                </div>
              </div>

              <ScoreBar label="MBBS" pct={97} delay={300} />
              <ScoreBar label="BDS" pct={84} delay={450} />
              <ScoreBar label="B.Sc Nursing" pct={79} delay={600} />
              <ScoreBar label="BAMS" pct={74} delay={750} />
              <ScoreBar label="B.Sc Medical Lab Technology" pct={68} delay={900} />

              {/* Footer note */}
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Sparkles size={13} color="rgba(255,255,255,0.4)" />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
                  Match scores are personalised by AI — not a filter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        @media(max-width:768px){
          .hero-grid{ grid-template-columns:1fr !important; gap:40px !important; }
        }
      `}</style>
    </section>
  );
}