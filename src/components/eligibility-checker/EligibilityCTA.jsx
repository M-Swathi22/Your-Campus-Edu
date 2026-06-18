import { ArrowRight, MessageCircle, FileCheck, Globe, Users } from "lucide-react";

const TRUST = [
  { icon: FileCheck, label: "Free eligibility check", sub: "No registration needed" },
  { icon: Users, label: "Expert counsellors", sub: "Available 6 days a week" },
  { icon: Globe, label: "India & 7+ countries", sub: "Domestic & international" },
];

export default function EligibilityCTA() {
  return (
    <section style={{ fontFamily: "var(--font-main)", padding: "80px 24px", background: "var(--bg-light)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Trust row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {TRUST.map(({ icon: Icon, label, sub }) => (
            <div key={label} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "20px 24px", display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-sm)", background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={20} color="var(--primary)" />
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-dark)" }}>{label}</div>
                <div style={{ fontSize: "12px", color: "var(--text-light)", marginTop: "2px" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div style={{ background: "var(--gradient-secondary)", borderRadius: "var(--radius-xl)", padding: "clamp(36px,6vw,60px)", position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "240px", height: "240px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-80px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(49,185,120,0.12)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "620px", margin: "0 auto" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "var(--radius-md)", background: "rgba(255,255,255,0.12)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <FileCheck size={34} color="#fff" />
            </div>

            <h2 style={{ fontSize: "clamp(22px,3.5vw,38px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "14px" }}>
              Got Your Result? Let's Plan Your Next Move.
            </h2>

            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: "36px" }}>
              Our counsellors can help you shortlist the right colleges, prepare your application,
              understand scholarship options, and build a complete roadmap — completely free.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
              <a href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 32px", borderRadius: "var(--radius-md)", background: "#fff", color: "var(--primary)", fontSize: "15px", fontWeight: 700, textDecoration: "none", transition: "var(--transition)", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                Book Free Consultation
                <ArrowRight size={17} />
              </a>
              <a href="/ai-course-match"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 32px", borderRadius: "var(--radius-md)", background: "transparent", border: "1px solid rgba(255,255,255,0.28)", color: "rgba(255,255,255,0.9)", fontSize: "15px", fontWeight: 600, textDecoration: "none", transition: "var(--transition)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <MessageCircle size={17} />
                Try AI Course Match
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}