// src/components/accommodation/city-selection/CityCTA.jsx
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircleQuestion, ArrowRight } from "lucide-react";

const CityCTA = ({ countryName }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="city-cta">
      <motion.div
        className="city-cta__box"
        initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
        whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="city-cta__icon">
          <MessageCircleQuestion size={22} aria-hidden="true" />
        </div>
        <h2 className="city-cta__title">Can't find your city in {countryName}?</h2>
        <p className="city-cta__text">
          Some campuses sit outside our listed cities. Tell an advisor where
          you're headed and we'll source verified options nearby.
        </p>
        <div className="city-cta__actions">
          <Link to="/contact" className="city-cta__btn-primary">
            Talk to an advisor
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/accommodation" className="city-cta__btn-secondary">
            Browse all destinations
          </Link>
        </div>
      </motion.div>

      <style>{`
        .city-cta {
          background: var(--bg-main);
          padding: clamp(48px, 7vw, 80px) 24px;
          font-family: var(--font-main);
          display: flex;
          justify-content: center;
        }

        .city-cta__box {
          width: 100%;
          max-width: 560px;
          text-align: center;
          padding: clamp(32px, 5vw, 44px) clamp(24px, 5vw, 40px);
          border-radius: var(--radius-lg);
          background: var(--primary-light);
          border: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
        }

        .city-cta__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: var(--gradient-primary);
          color: var(--white);
          margin-bottom: 18px;
        }

        .city-cta__title {
          font-size: clamp(19px, 2.4vw, 23px);
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 10px;
        }

        .city-cta__text {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--text-medium);
          max-width: 420px;
          margin: 0 auto 24px;
        }

        .city-cta__actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .city-cta__btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: var(--radius-xl);
          background: var(--gradient-primary);
          color: var(--white);
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }

        .city-cta__btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .city-cta__btn-secondary {
          font-size: 14.5px;
          font-weight: 600;
          color: var(--primary);
          text-decoration: none;
          padding: 12px 6px;
          transition: var(--transition);
        }

        .city-cta__btn-secondary:hover {
          color: var(--primary-dark);
        }
      `}</style>
    </section>
  );
};

export default CityCTA;