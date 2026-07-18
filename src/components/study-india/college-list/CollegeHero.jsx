// src/components/study-india/college-list/CollegeHero.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CollegeHero = ({ state, city, collegeCount, categoryId, courseSlug }) => {
  return (
    <section className="college-hero-simple">
      <div className="college-hero-simple__inner">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="college-hero-simple__title"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          {city.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          className="college-hero-simple__subtitle"
        >
          {collegeCount} College{collegeCount === 1 ? "" : "s"}
        </motion.p>

        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
          aria-label="Breadcrumb"
          className="college-hero-simple__crumbs"
        >
          <Link to="/study-india" className="college-hero-simple__crumb-link">
            Study India
          </Link>
          <span className="college-hero-simple__crumb-sep">/</span>
          <Link
            to={`/study-india/${categoryId}/${courseSlug}/${state.id}`}
            className="college-hero-simple__crumb-link"
          >
            {state.name}
          </Link>
          <span className="college-hero-simple__crumb-sep">/</span>
          <span className="college-hero-simple__crumb-current">{city.name}</span>
        </motion.nav>
      </div>

      <style>{`
        .college-hero-simple {
          font-family: var(--font-main);
          background: var(--gradient-primary);
          padding: 3.5rem 1.5rem;
        }

        .college-hero-simple__inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .college-hero-simple__title {
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin-bottom: 0.6rem;
        }

        .college-hero-simple__subtitle {
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          font-weight: 500;
          color: color-mix(in srgb, #ffffff 88%, transparent);
          margin-bottom: 1.25rem;
        }

        .college-hero-simple__crumbs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          flex-wrap: wrap;
          justify-content: center;
        }

        .college-hero-simple__crumb-link {
          color: color-mix(in srgb, #ffffff 85%, transparent);
          text-decoration: none;
          transition: var(--transition);
        }
        .college-hero-simple__crumb-link:hover {
          color: #ffffff;
        }

        .college-hero-simple__crumb-sep {
          color: color-mix(in srgb, #ffffff 45%, transparent);
        }

        .college-hero-simple__crumb-current {
          color: #ffffff;
          font-weight: 600;
        }

        @media (max-width: 640px) {
          .college-hero-simple {
            padding: 2.5rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CollegeHero;