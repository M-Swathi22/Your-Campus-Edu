import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function AboutCTA() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div
          className="rounded-[32px] px-8 py-12 lg:px-16 lg:py-14"
          style={{
            background: "var(--gradient-secondary)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}

            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-5"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "var(--white)",
              }}
            >
              Start Your Journey Today
            </span>

            {/* Heading */}

            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Your Dream University
              <br />
              Awaits You
            </h2>

            {/* Description */}

            <p className="mt-5 text-white/80 text-base lg:text-lg leading-relaxed">
              Get expert guidance for admissions, scholarships,
              university selection, and career planning—all in one place.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--white)",
                  color: "var(--primary)",
                }}
              >
                Book Free Counseling

                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold border transition-all duration-300 hover:bg-white hover:text-[var(--primary)]"
                style={{
                  borderColor: "rgba(255,255,255,0.25)",
                  color: "var(--white)",
                }}
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}