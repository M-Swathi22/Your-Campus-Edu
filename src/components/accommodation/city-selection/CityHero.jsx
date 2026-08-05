// src/components/accommodation/city-selection/CityHero.jsx
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Plane, ChevronRight, Building2, Wallet, MapPinned } from "lucide-react";

const CityHero = ({ country, cityCount, listingCount, rentRange }) => {
  const reduceMotion = useReducedMotion();

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="city-hero" aria-labelledby="city-hero-title">
      <div className="city-hero__glow" aria-hidden="true" />

      <div className="city-hero__container">
        <motion.nav
          className="city-hero__crumbs"
          aria-label="Breadcrumb"
          {...rise(0)}
        >
          <Link to="/accommodation">Accommodation</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span>{country.name}</span>
        </motion.nav>

        <motion.div className="city-hero__badge" {...rise(0.06)}>
          <Plane size={14} aria-hidden="true" />
          <span>
            {country.gate} · {country.code} BOARDING
          </span>
        </motion.div>

        <motion.h1 id="city-hero-title" className="city-hero__title" {...rise(0.12)}>
          <span className="city-hero__flag" aria-hidden="true">
            {country.flag}
          </span>
          Pick your city in{" "}
          <span className="city-hero__title-gradient">{country.name}</span>
        </motion.h1>

        <motion.p className="city-hero__subtitle" {...rise(0.18)}>
          Verified hostels, PGs and student residences across{" "}
          {cityCount} {cityCount === 1 ? "city" : "cities"} in {country.name}.
          Compare rent, distance to campus and resident reviews before you
          commit.
        </motion.p>

        <motion.div className="city-hero__stats" {...rise(0.24)}>
          <div className="city-hero__stat">
            <MapPinned size={18} aria-hidden="true" />
            <div>
              <strong>{cityCount}</strong>
              <span>Cities open</span>
            </div>
          </div>
          <div className="city-hero__stat-divider" aria-hidden="true" />
          <div className="city-hero__stat">
            <Building2 size={18} aria-hidden="true" />
            <div>
              <strong>{listingCount}+</strong>
              <span>Verified stays</span>
            </div>
          </div>
          <div className="city-hero__stat-divider" aria-hidden="true" />
          <div className="city-hero__stat">
            <Wallet size={18} aria-hidden="true" />
            <div>
              <strong>{rentRange}</strong>
              <span>Typical rent</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .city-hero {
          position: relative;
          overflow: hidden;
          background: var(--bg-main);
          padding: clamp(48px, 8vw, 96px) 24px clamp(40px, 6vw, 64px);
          font-family: var(--font-main);
        }

        .city-hero__glow {
          position: absolute;
          top: -180px;
          left: 50%;
          width: 720px;
          height: 420px;
          transform: translateX(-50%);
          background: radial-gradient(
            closest-side,
            var(--primary-light) 0%,
            transparent 75%
          );
          pointer-events: none;
        }

        .city-hero__container {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }

        .city-hero__crumbs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-light);
          margin-bottom: 20px;
        }

        .city-hero__crumbs a {
          color: var(--text-light);
          text-decoration: none;
          transition: var(--transition);
        }

        .city-hero__crumbs a:hover {
          color: var(--primary);
        }

        .city-hero__crumbs span {
          color: var(--text-dark);
          font-weight: 600;
        }

        .city-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          border-radius: var(--radius-xl);
          background: var(--primary-light);
          color: var(--primary);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          margin-bottom: 20px;
        }

        .city-hero__title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          font-size: clamp(30px, 5vw, 48px);
          font-weight: 700;
          line-height: 1.15;
          color: var(--text-dark);
          margin: 0 0 18px;
        }

        .city-hero__flag {
          font-size: clamp(26px, 4vw, 40px);
          line-height: 1;
        }

        .city-hero__title-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .city-hero__subtitle {
          font-size: clamp(15px, 1.6vw, 17px);
          line-height: 1.65;
          color: var(--text-medium);
          max-width: 620px;
          margin: 0 auto clamp(28px, 4vw, 40px);
        }

        .city-hero__stats {
          display: inline-flex;
          align-items: center;
          gap: clamp(16px, 3vw, 32px);
          padding: 18px clamp(20px, 4vw, 36px);
          border-radius: var(--radius-lg);
          background: var(--bg-main);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-md);
          flex-wrap: wrap;
          justify-content: center;
        }

        .city-hero__stat {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--primary);
          text-align: left;
        }

        .city-hero__stat div {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .city-hero__stat strong {
          font-size: 17px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .city-hero__stat span {
          font-size: 12px;
          color: var(--text-light);
          font-weight: 500;
        }

        .city-hero__stat-divider {
          width: 1px;
          height: 28px;
          background: var(--border);
        }

        @media (max-width: 520px) {
          .city-hero__stats {
            gap: 16px;
            padding: 16px 20px;
          }
          .city-hero__stat-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CityHero;