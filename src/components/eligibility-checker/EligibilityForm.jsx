import { useState } from "react";
import { Sparkles, MapPin, Globe } from "lucide-react";
import DomesticForm from "./DomesticForm";
import AbroadForm from "./AbroadForm";

export default function EligibilityForm({ onSubmit }) {
  const [type, setType] = useState(null); // "domestic" | "abroad"

  return (
    <section
      id="eligibility-form"
      style={{ fontFamily: "var(--font-main)", background: "var(--bg-light)", padding: "80px 24px" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "7px 18px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
            <Sparkles size={14} />
            Eligibility Checker
          </span>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.2, marginBottom: "12px" }}>
            Where Do You Want to Study?
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-medium)", maxWidth: "460px", margin: "0 auto" }}>
            Select your study destination type — we'll show you the right eligibility questions.
          </p>
        </div>

        {/* Type selector */}
        {!type && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "0" }} className="type-grid">
            {[
              {
                key: "domestic",
                icon: MapPin,
                title: "Study in India",
                subtitle: "Check eligibility for Indian colleges, NEET, JEE, CLAT, and more",
                tag: "Domestic",
                color: "var(--primary)",
                bg: "var(--primary-light)",
              },
              {
                key: "abroad",
                icon: Globe,
                title: "Study Abroad",
                subtitle: "Check eligibility for USA, UK, Canada, Australia, Germany, Ireland & more",
                tag: "International",
                color: "var(--extra-indigo)",
                bg: "rgba(88,102,235,0.08)",
              },
            ].map(({ key, icon: Icon, title, subtitle, tag, color, bg }) => (
              <button
                key={key}
                type="button"
                onClick={() => setType(key)}
                style={{
                  background: "#fff",
                  border: "2px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "36px 28px",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "var(--transition)",
                  fontFamily: "var(--font-main)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "var(--radius-sm)", background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={24} color={color} />
                  </div>
                  <span style={{ background: bg, color, borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {tag}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "8px" }}>{title}</div>
                  <div style={{ fontSize: "13px", color: "var(--text-medium)", lineHeight: 1.6 }}>{subtitle}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color, fontWeight: 700, fontSize: "13px", marginTop: "4px" }}>
                  Select <span>→</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Routed forms */}
        {type === "domestic" && (
          <DomesticForm onSubmit={(data) => onSubmit({ ...data, type: "domestic" })} onBack={() => setType(null)} />
        )}
        {type === "abroad" && (
          <AbroadForm onSubmit={(data) => onSubmit({ ...data, type: "abroad" })} onBack={() => setType(null)} />
        )}
      </div>

      <style>{`@media(max-width:600px){ .type-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}