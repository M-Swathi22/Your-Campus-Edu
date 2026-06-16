import {
  ArrowRight,
  MessageCircle,
  GraduationCap,
} from "lucide-react";

export default function MatchCTA() {
  return (
    <section
      style={{
        fontFamily: "var(--font-main)",
        padding: "80px 24px",
        background: "var(--bg-light)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            background: "var(--gradient-secondary)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(36px,6vw,60px)",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Decorative Blobs */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-40px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(49,185,120,0.12)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "var(--radius-md)",
                background: "rgba(255,255,255,0.12)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <GraduationCap size={34} color="#fff" />
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(24px,4vw,38px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "14px",
              }}
            >
              Need Guidance After Your Course Match?
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.7,
                marginBottom: "36px",
              }}
            >
              Get personalised counselling to choose the right course,
              shortlist colleges, understand eligibility requirements,
              explore scholarships, and plan your academic journey.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "14px",
              }}
            >
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "15px 32px",
                  borderRadius: "var(--radius-md)",
                  background: "#fff",
                  color: "var(--primary)",
                  fontSize: "15px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                Book Free Consultation
                <ArrowRight size={17} />
              </a>

              <a
                href="/courses"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "15px 32px",
                  borderRadius: "var(--radius-md)",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.28)",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "rgba(255,255,255,0.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <MessageCircle size={17} />
                Explore All Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}