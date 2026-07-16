// src/components/study-india/city-selection/CityCTA.jsx
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { TrainFront, ArrowRight, PhoneCall } from "lucide-react";

const CityCTA = ({ state }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="city-cta py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="city-cta__panel"
        >
          <TrainFront aria-hidden="true" className="city-cta__ghost-icon" />

          <div className="city-cta__content">
            <p className="city-cta__eyebrow">Not on the board yet?</p>
            <h2 className="city-cta__heading" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)" }}>
              Can't find your city in {state.name}?
            </h2>
            <p className="city-cta__subtext" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)" }}>
              We track colleges well beyond the cities listed here. Talk to a counselor and we'll
              match you to the right campus, wherever it is.
            </p>
          </div>

          <div className="city-cta__actions">
            <Link to="/contact" className="city-cta__btn city-cta__btn--primary">
              <PhoneCall size={16} />
              Talk to a Counselor
            </Link>
            <Link to={`/study-india/colleges/${state.id}`} className="city-cta__btn city-cta__btn--ghost">
              View All {state.name} Colleges
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        .city-cta { font-family: var(--font-main); background: var(--bg-light); }

        .city-cta__panel {
          position: relative;
          overflow: hidden;
          background: var(--gradient-secondary);
          border-radius: var(--radius-xl);
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          align-items: flex-start;
        }

        .city-cta__ghost-icon {
          position: absolute;
          right: -1.5rem;
          bottom: -2rem;
          width: 11rem;
          height: 11rem;
          color: var(--white);
          opacity: 0.07;
          transform: rotate(-8deg);
          pointer-events: none;
        }

        .city-cta__eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--white) 75%, transparent);
          margin-bottom: 0.5rem;
        }
        .city-cta__heading { font-weight: 700; color: var(--white); line-height: 1.2; }
        .city-cta__subtext {
          margin-top: 0.75rem;
          color: color-mix(in srgb, var(--white) 82%, transparent);
          max-width: 56ch;
          line-height: 1.6;
        }

        .city-cta__actions {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .city-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 0.75rem 1.3rem;
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: var(--transition);
        }
        .city-cta__btn--primary {
          background: var(--white);
          color: var(--primary-dark);
        }
        .city-cta__btn--primary:hover { filter: brightness(0.96); }

        .city-cta__btn--ghost {
          background: transparent;
          color: var(--white);
          border: 1px solid color-mix(in srgb, var(--white) 40%, transparent);
        }
        .city-cta__btn--ghost:hover { background: color-mix(in srgb, var(--white) 10%, transparent); }

        @media (min-width: 768px) {
          .city-cta__panel { flex-direction: row; align-items: center; justify-content: space-between; }
          .city-cta__actions { flex-direction: column; align-items: stretch; }
        }
      `}</style>
    </section>
  );
};

export default CityCTA;