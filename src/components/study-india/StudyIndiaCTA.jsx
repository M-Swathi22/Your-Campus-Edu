import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function StudyIndiaCTA() {
  return (
    <section className="sicta">
      <div className="sicta__inner">
        <motion.div
          className="sicta__panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="sicta__eyebrow">Admissions 2026</span>
          <span className="sicta__rule" aria-hidden="true" />

          <h2 className="sicta__heading">
            Ready to find your{" "}
            <span className="sicta__heading-accent">dream college?</span>
          </h2>

          <p className="sicta__subtext">
            Discover the right course, compare colleges, and get expert
            admission guidance — all in one place.
          </p>

          <div className="sicta__actions">
            <Link to="/courses" className="sicta__btn sicta__btn--primary">
              Explore Courses
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="sicta__btn sicta__btn--ghost">
              <PhoneCall size={18} />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .sicta {
          padding: 88px 24px;
        }

        .sicta__inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        .sicta__panel {
          background: var(--gradient-secondary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          padding: 72px 56px;
          text-align: center;
        }

        .sicta__eyebrow {
          display: inline-block;
          color: var(--text-white);
          font-family: var(--font-main);
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .sicta__rule {
          display: block;
          width: 48px;
          height: 3px;
          border-radius: 2px;
          background: var(--gradient-primary);
          margin: 14px auto 0;
        }

        .sicta__heading {
          font-family: var(--font-main);
          font-size: clamp(2rem, 3.4vw, 2.9rem);
          font-weight: 700;
          line-height: 1.2;
          color: var(--text-white);
          margin: 22px auto 0;
          max-width: 620px;
        }

        .sicta__heading-accent {
          color: var(--accent-green);
        }

        .sicta__subtext {
          font-family: var(--font-main);
          font-size: 15.5px;
          line-height: 1.75;
          color: color-mix(in srgb, var(--text-white) 78%, transparent);
          max-width: 460px;
          margin: 16px auto 0;
        }

        .sicta__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 36px;
        }

        .sicta__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          border-radius: var(--radius-md);
          font-family: var(--font-main);
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: var(--transition);
        }

        .sicta__btn--primary {
          background: var(--text-white);
          color: var(--primary-dark);
        }

        .sicta__btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .sicta__btn--ghost {
          background: transparent;
          color: var(--text-white);
          border: 1px solid color-mix(in srgb, var(--text-white) 35%, transparent);
        }

        .sicta__btn--ghost:hover {
          border-color: var(--text-white);
        }

        @media (max-width: 640px) {
          .sicta {
            padding: 56px 16px;
          }

          .sicta__panel {
            padding: 56px 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sicta__btn {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}