// src/components/accommodation/AccommodationCTA.jsx
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Home } from "lucide-react";

export default function AccommodationCTA() {
  return (
    <section className="acc-cta" id="accommodation-cta">
      <motion.div
        className="acc-cta__box"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="acc-cta__glow" aria-hidden="true" />

        <div className="acc-cta__icon">
          <Home size={22} strokeWidth={2} />
        </div>

        <span className="acc-cta__eyebrow">Last step before you fly</span>
        <h2 className="acc-cta__title">
          Let's find your room before you find your flight
        </h2>
        <p className="acc-cta__subtitle">
          Tell us your university and move-in month — we'll shortlist verified
          stays within your budget in under 48 hours.
        </p>

        <div className="acc-cta__actions">
          <a href="/contact" className="acc-cta__btn acc-cta__btn--primary">
            Get my shortlist
            <ArrowRight size={18} strokeWidth={2.25} />
          </a>
          <a href="tel:+910000000000" className="acc-cta__btn acc-cta__btn--ghost">
            <PhoneCall size={17} strokeWidth={2.25} />
            Speak to a counselor
          </a>
        </div>
      </motion.div>

      <style>{`
        .acc-cta {
          font-family: var(--font-main);
          background: var(--bg-light);
          padding: clamp(3rem, 7vw, 5.5rem) clamp(1.25rem, 5vw, 3rem);
          display: flex;
          justify-content: center;
        }

        .acc-cta__box {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 720px;
          background: var(--gradient-secondary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          padding: clamp(2.25rem, 5vw, 3.5rem);
          text-align: center;
        }

        .acc-cta__glow {
          position: absolute;
          top: -35%;
          right: -20%;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--accent-blue) 38%, transparent) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .acc-cta__icon {
          position: relative;
          z-index: 1;
          width: 52px;
          height: 52px;
          margin: 0 auto 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-md);
          background: color-mix(in srgb, var(--white) 14%, transparent);
          color: var(--text-white);
        }

        .acc-cta__eyebrow {
          position: relative;
          z-index: 1;
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--text-white) 82%, transparent);
          margin-bottom: 0.9rem;
        }

        .acc-cta__title {
          position: relative;
          z-index: 1;
          font-size: clamp(1.5rem, 3.2vw, 2.15rem);
          font-weight: 700;
          line-height: 1.25;
          color: var(--text-white);
          margin: 0 0 0.8rem;
        }

        .acc-cta__subtitle {
          position: relative;
          z-index: 1;
          font-size: 0.98rem;
          line-height: 1.65;
          color: color-mix(in srgb, var(--text-white) 84%, transparent);
          max-width: 480px;
          margin: 0 auto 2rem;
        }

        .acc-cta__actions {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.85rem;
        }

        .acc-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-main);
          font-weight: 600;
          font-size: 0.92rem;
          padding: 0.8rem 1.5rem;
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: var(--transition);
          border: 1px solid transparent;
        }

        .acc-cta__btn--primary {
          background: var(--text-white);
          color: var(--primary-dark);
        }

        .acc-cta__btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .acc-cta__btn--ghost {
          background: color-mix(in srgb, var(--white) 10%, transparent);
          color: var(--text-white);
          border-color: color-mix(in srgb, var(--white) 28%, transparent);
        }

        .acc-cta__btn--ghost:hover {
          background: color-mix(in srgb, var(--white) 18%, transparent);
        }

        @media (max-width: 480px) {
          .acc-cta__actions {
            flex-direction: column;
          }
          .acc-cta__btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .acc-cta__btn {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}