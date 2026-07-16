// src/components/study-india/city-selection/CityHero.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CityHero = ({ state }) => {
  return (
    <section className="city-hero-simple">
      <div className="city-hero-simple__inner">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="city-hero-simple__title"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          {state.name}
        </motion.h1>

        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          aria-label="Breadcrumb"
          className="city-hero-simple__crumbs"
        >
          <Link to="/" className="city-hero-simple__crumb-link">
            Home
          </Link>
          <span className="city-hero-simple__crumb-sep">/</span>
          <Link to="/study-india" className="city-hero-simple__crumb-link">
            Study India
          </Link>
          <span className="city-hero-simple__crumb-sep">/</span>
          <span className="city-hero-simple__crumb-current">{state.name}</span>
        </motion.nav>
      </div>

      <style>{`
        .city-hero-simple {
          font-family: var(--font-main);
          background: var(--gradient-primary);
          padding: 3.5rem 1.5rem;
        }

        .city-hero-simple__inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .city-hero-simple__title {
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
        }

        .city-hero-simple__crumbs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .city-hero-simple__crumb-link {
          color: color-mix(in srgb, #ffffff 85%, transparent);
          text-decoration: none;
          transition: var(--transition);
        }
        .city-hero-simple__crumb-link:hover {
          color: #ffffff;
        }

        .city-hero-simple__crumb-sep {
          color: color-mix(in srgb, #ffffff 45%, transparent);
        }

        .city-hero-simple__crumb-current {
          color: #ffffff;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .city-hero-simple {
            padding: 2.5rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CityHero;