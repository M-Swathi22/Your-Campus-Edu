import { Link } from "react-router-dom";
import {
  ArrowRight,
  Scale,
  UserCheck,
  GraduationCap,
} from "lucide-react";

export default function CompareCollegesCTA() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "var(--bg-light)",
        fontFamily: "var(--font-main)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "var(--bg-main)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
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
              padding: "50px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 1fr",
                gap: "40px",
                alignItems: "center",
              }}
            >
              {/* Left Side */}
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "999px",
                    background: "var(--primary-light)",
                    color: "var(--primary)",
                    fontWeight: 600,
                    fontSize: "14px",
                    marginBottom: "20px",
                  }}
                >
                  <Scale size={16} />
                  Comparison Complete
                </div>

                <h2
                  style={{
                    fontSize: "clamp(30px,4vw,42px)",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: "var(--text-dark)",
                    marginBottom: "16px",
                  }}
                >
                  Found Colleges You Like?
                  <span
                    style={{
                      display: "block",
                      color: "var(--primary)",
                    }}
                  >
                    Let's Choose the Best One.
                  </span>
                </h2>

                <p
                  style={{
                    color: "var(--text-medium)",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    maxWidth: "580px",
                  }}
                >
                  Comparing colleges is the first step. Our experts can help
                  you evaluate rankings, placements, scholarships, tuition
                  costs, and admission chances before making your final choice.
                </p>
              </div>

              {/* Right Side */}
              <div
                style={{
                  background: "var(--bg-section)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "14px",
                      background: "var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <UserCheck size={22} />
                  </div>

                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        marginBottom: "4px",
                      }}
                    >
                      Expert Recommendation
                    </h4>

                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-medium)",
                      }}
                    >
                      Get help choosing confidently
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "18px",
                    marginBottom: "22px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "12px",
                      alignItems: "center",
                    }}
                  >
                    <GraduationCap
                      size={18}
                      color="var(--accent-green)"
                    />
                    <span style={{ color: "var(--text-dark)" }}>
                      Admission Guidance
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <GraduationCap
                      size={18}
                      color="var(--accent-green)"
                    />
                    <span style={{ color: "var(--text-dark)" }}>
                      Scholarship Support
                    </span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    padding: "15px",
                    background: "var(--primary)",
                    color: "#fff",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Talk to an Expert
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}