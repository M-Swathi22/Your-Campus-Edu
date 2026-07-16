// src/components/study-india/course-details/CourseCTA.jsx
import { Link } from "react-router-dom";
import { GraduationCap, ArrowRight, PhoneCall } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function CourseCTA({ courseName, phone = "+91 9789993666" }) {
  const reduceMotion = useReducedMotion();
  const telHref = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <section className="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
      <style>{`
        .course-cta__panel {
          background: var(--gradient-secondary);
        }
        .course-cta__glow {
          background: radial-gradient(circle, var(--accent-green) 0%, transparent 70%);
          filter: blur(70px);
        }
        .course-cta__icon {
          background: color-mix(in srgb, var(--white) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--white) 20%, transparent);
        }
        .course-cta__primary {
          background: var(--white);
          color: var(--primary-dark);
          transition: var(--transition);
        }
        .course-cta__primary:hover {
          background: var(--primary-light);
          transform: translateY(-1px);
        }
        .course-cta__secondary {
          border: 1px solid color-mix(in srgb, var(--white) 28%, transparent);
          color: var(--text-white);
          transition: var(--transition);
        }
        .course-cta__secondary:hover {
          background: color-mix(in srgb, var(--white) 10%, transparent);
        }
      `}</style>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="course-cta__panel relative overflow-hidden rounded-[var(--radius-lg)] px-6 py-12 text-center sm:px-14 sm:py-16"
      >
        <div
          className="course-cta__glow pointer-events-none absolute -top-20 -right-20 h-72 w-72 opacity-20"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center">
          <div className="course-cta__icon flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-sm)]">
            <GraduationCap size={22} style={{ color: "var(--text-white)" }} />
          </div>

          <p
            className="mb-1.5 mt-4 uppercase tracking-[0.2em]"
            style={{ color: "var(--accent-green)", fontFamily: "var(--font-main)", fontSize: "clamp(0.68rem, 0.85vw, 0.75rem)" }}
          >
            Admissions Open
          </p>
          <h3
            className="font-semibold leading-snug"
            style={{ color: "var(--text-white)", fontFamily: "var(--font-main)", fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)" }}
          >
            Reserve your seat in {courseName || "this course"}
          </h3>
          <p
            className="mx-auto mt-2 max-w-md"
            style={{
              color: "color-mix(in srgb, var(--white) 72%, transparent)",
              fontFamily: "var(--font-main)",
              fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
            }}
          >
            Talk to a Your Campus Edu counsellor for eligibility, fees and college shortlisting — free of cost.
          </p>

          <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="course-cta__primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium"
              style={{ fontFamily: "var(--font-main)", fontSize: "clamp(0.85rem, 1vw, 0.95rem)" }}
            >
              Get Free Counselling
              <ArrowRight size={16} />
            </Link>
            <a
              href={telHref}
              className="course-cta__secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium"
              style={{ fontFamily: "var(--font-main)", fontSize: "clamp(0.85rem, 1vw, 0.95rem)" }}
            >
              <PhoneCall size={16} />
              Call Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}