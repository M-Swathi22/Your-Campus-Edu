import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Globe,
  Phone,
} from "lucide-react";

function AIToolsCTA() {
  return (
    <section
      className="py-24"
      style={{
        background: "var(--bg-light)",
        fontFamily: "var(--font-main)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16"
          style={{
            background: "var(--bg-main)",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <span
              className="inline-block px-4 py-2 text-sm font-semibold"
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)",
                borderRadius: "999px",
              }}
            >
              Your Future Starts Here
            </span>

            <h2
              className="mt-6 text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "var(--text-dark)" }}
            >
              Ready to Take the
              <span
                className="block"
                style={{ color: "var(--primary)" }}
              >
                Next Step?
              </span>
            </h2>

            <p
              className="mt-6 text-lg max-w-lg"
              style={{ color: "var(--text-medium)" }}
            >
              Whether you're exploring courses, comparing study destinations,
              or looking for expert guidance, we're here to help you make the
              right decision.
            </p>
          </div>

          {/* RIGHT ACTION PANEL */}
          <div className="space-y-4">
            <Link
              to="/ai-tools/ai-match"
              className="group flex items-center justify-between p-6 transition-all duration-300 hover:translate-x-2"
              style={{
                background: "var(--primary-light)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 flex items-center justify-center rounded-full"
                  style={{
                    background: "var(--primary)",
                    color: "var(--white)",
                  }}
                >
                  <GraduationCap size={22} />
                </div>

                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "var(--text-dark)" }}
                  >
                    Try AI Match
                  </h3>

                  <p
                    className="text-sm"
                    style={{ color: "var(--text-medium)" }}
                  >
                    Find your best-fit course and university.
                  </p>
                </div>
              </div>

              <ArrowRight
                size={20}
                style={{ color: "var(--primary)" }}
              />
            </Link>

            <Link
              to="/destinations"
              className="group flex items-center justify-between p-6 transition-all duration-300 hover:translate-x-2"
              style={{
                background: "var(--bg-light)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 flex items-center justify-center rounded-full"
                  style={{
                    background: "var(--accent-blue)",
                    color: "var(--white)",
                  }}
                >
                  <Globe size={22} />
                </div>

                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "var(--text-dark)" }}
                  >
                    Explore Destinations
                  </h3>

                  <p
                    className="text-sm"
                    style={{ color: "var(--text-medium)" }}
                  >
                    Compare countries and opportunities.
                  </p>
                </div>
              </div>

              <ArrowRight
                size={20}
                style={{ color: "var(--accent-blue)" }}
              />
            </Link>

            <Link
              to="/contact"
              className="group flex items-center justify-between p-6 transition-all duration-300 hover:translate-x-2"
              style={{
                background: "var(--secondary-light)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 flex items-center justify-center rounded-full"
                  style={{
                    background: "var(--secondary)",
                    color: "var(--white)",
                  }}
                >
                  <Phone size={22} />
                </div>

                <div>
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "var(--text-dark)" }}
                  >
                    Talk to an Expert
                  </h3>

                  <p
                    className="text-sm"
                    style={{ color: "var(--text-medium)" }}
                  >
                    Get personalized guidance from our team.
                  </p>
                </div>
              </div>

              <ArrowRight
                size={20}
                style={{ color: "var(--secondary)" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIToolsCTA;