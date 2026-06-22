import {
  ArrowRight,
  CheckCircle2,
  UserCheck,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MatchCTA() {
  return (
    <section
      style={{
        padding: "70px 24px",
        background: "var(--bg-light)",
        fontFamily: "var(--font-main)",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "var(--bg-main)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top Gradient */}
          <div
            style={{
              height: "6px",
              background: "var(--gradient-primary)",
            }}
          />

          <div
            style={{
              padding: "48px",
              textAlign: "center",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "999px",
                background: "var(--primary-light)",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "24px",
              }}
            >
              <GraduationCap size={16} />
              AI Analysis Complete
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(30px,4vw,42px)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "var(--text-dark)",
                marginBottom: "14px",
              }}
            >
              Your Course Match Is Ready.
              <span
                style={{
                  display: "block",
                  color: "var(--primary)",
                }}
              >
                Let's Build Your Next Step.
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                maxWidth: "650px",
                margin: "0 auto",
                color: "var(--text-medium)",
                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              You've received your AI-powered course recommendations.
              Our education experts can now help you shortlist universities,
              explore scholarships, and create a complete admission strategy.
            </p>

            {/* Status Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "24px",
                marginTop: "34px",
                marginBottom: "34px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <CheckCircle2
                  size={20}
                  color="var(--accent-green)"
                />
                <span
                  style={{
                    fontWeight: 600,
                    color: "var(--text-dark)",
                  }}
                >
                  AI Recommendation Ready
                </span>
              </div>

              <div
                style={{
                  width: "1px",
                  background: "var(--border)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <UserCheck
                  size={20}
                  color="var(--primary)"
                />
                <span
                  style={{
                    fontWeight: 600,
                    color: "var(--text-dark)",
                  }}
                >
                  Expert Guidance Available
                </span>
              </div>
            </div>

            {/* CTA Button */}
           {/* CTA Buttons */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  }}
>
  {/* Primary Button */}
  <a
    href="/contact"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "16px 34px",
      borderRadius: "var(--radius-md)",
      background: "var(--primary)",
      color: "#fff",
      textDecoration: "none",
      fontWeight: 700,
      boxShadow: "0 10px 24px rgba(109,83,163,0.25)",
      transition: "var(--transition)",
    }}
  >
    Book Free Consultation
    <ArrowRight size={18} />
  </a>

  {/* Secondary Button */}
  <Link
  to="/eligibility-checker"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "16px 34px",
    borderRadius: "var(--radius-md)",
    background: "transparent",
    color: "var(--primary)",
    textDecoration: "none",
    fontWeight: 700,
    border: "1.5px solid var(--primary)",
    transition: "var(--transition)",
  }}
>
  Check Eligibility
  <ArrowRight size={18} />
</Link>
</div>
            {/* Trust Text */}
            <p
              style={{
                marginTop: "18px",
                fontSize: "14px",
                color: "var(--text-light)",
              }}
            >
              No obligation consultation • Personalized guidance • Study abroad & domestic admissions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}