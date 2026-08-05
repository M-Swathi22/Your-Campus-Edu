// src/components/accommodation/city-selection/CityGrid.jsx
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Radio } from "lucide-react";

const CityGrid = ({ country, cities }) => {
  const reduceMotion = useReducedMotion();

  const rowVariants = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.4, delay: Math.min(i, 8) * 0.04, ease: "easeOut" },
    }),
  };

  return (
    <section className="city-grid" aria-labelledby="city-grid-title">
      <div className="city-grid__container">
        <div className="city-grid__board">
          <div className="city-grid__board-header">
            <div className="city-grid__board-title">
              <Radio size={14} className="city-grid__pulse" aria-hidden="true" />
              <h2 id="city-grid-title">Departures — {country.name}</h2>
            </div>
            <span className="city-grid__board-updated">Live availability</span>
          </div>

          <div className="city-grid__columns" aria-hidden="true">
            <span>City</span>
            <span>Highlights</span>
            <span>Listings</span>
            <span>Typical rent</span>
            <span>Status</span>
          </div>

          <ul className="city-grid__rows" role="list">
            {cities.map((city, i) => (
              <motion.li
                key={city.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={rowVariants}
              >
                <Link
                  to={`/accommodation/${country.id}/${city.id}`}
                  className="city-grid__row"
                >
                  <span className="city-grid__row-city">
                    <span
                      className="city-grid__row-thumb"
                      style={{ backgroundImage: `url(${city.image})` }}
                      aria-hidden="true"
                    />
                    {city.name}
                  </span>
                  <span className="city-grid__row-note">{city.note}</span>
                  <span className="city-grid__row-listings">
                    {city.listingsCount} stays
                  </span>
                  <span className="city-grid__row-rent">{city.avgRent}</span>
                  <span className="city-grid__row-status">
                    <span className="city-grid__row-dot" aria-hidden="true" />
                    {city.status}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="city-grid__row-arrow"
                    aria-hidden="true"
                  />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .city-grid {
          background: var(--bg-light);
          padding: clamp(40px, 6vw, 72px) 24px;
          font-family: var(--font-main);
        }

        .city-grid__container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .city-grid__board {
          background: var(--bg-dark);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .city-grid__board-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px clamp(20px, 4vw, 32px);
          border-bottom: 1px solid var(--border-dark);
        }

        .city-grid__board-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .city-grid__board-title h2 {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: var(--text-white);
          letter-spacing: 0.02em;
        }

        .city-grid__pulse {
          color: var(--accent-green);
          animation: city-grid-pulse 1.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .city-grid__pulse {
            animation: none;
          }
        }

        @keyframes city-grid-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        .city-grid__board-updated {
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-light);
          text-transform: uppercase;
        }

        .city-grid__columns {
          display: grid;
          grid-template-columns: 1.4fr 1.6fr 0.9fr 1fr 0.8fr 20px;
          gap: 12px;
          padding: 12px clamp(20px, 4vw, 32px);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-light);
        }

        .city-grid__rows {
          list-style: none;
          margin: 0;
          padding: 0 8px 8px;
        }

        .city-grid__row {
          display: grid;
          grid-template-columns: 1.4fr 1.6fr 0.9fr 1fr 0.8fr 20px;
          align-items: center;
          gap: 12px;
          padding: 14px clamp(12px, 3vw, 24px);
          margin: 0 4px 4px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: var(--text-white);
          transition: var(--transition);
        }

        .city-grid__row:hover,
        .city-grid__row:focus-visible {
          background: color-mix(in srgb, var(--white) 6%, transparent);
        }

        .city-grid__row:focus-visible {
          outline: 2px solid var(--accent-blue);
          outline-offset: -2px;
        }

        .city-grid__row-city {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 15px;
        }

        .city-grid__row-thumb {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
          border: 1px solid var(--border-dark);
        }

        .city-grid__row-note {
          font-size: 13px;
          color: var(--text-light);
        }

        .city-grid__row-listings,
        .city-grid__row-rent {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-white);
        }

        .city-grid__row-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--success);
        }

        .city-grid__row-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--success);
        }

        .city-grid__row-arrow {
          color: var(--text-light);
          transition: var(--transition);
          justify-self: end;
        }

        .city-grid__row:hover .city-grid__row-arrow {
          color: var(--accent-green);
          transform: translate(2px, -2px);
        }

        @media (max-width: 720px) {
          .city-grid__columns {
            display: none;
          }
          .city-grid__row {
            grid-template-columns: 1fr auto;
            grid-template-areas:
              "city status"
              "note note"
              "listings rent";
            row-gap: 6px;
          }
          .city-grid__row-city { grid-area: city; }
          .city-grid__row-status { grid-area: status; }
          .city-grid__row-note { grid-area: note; }
          .city-grid__row-listings { grid-area: listings; }
          .city-grid__row-rent { grid-area: rent; justify-self: end; }
          .city-grid__row-arrow { display: none; }
        }
      `}</style>
    </section>
  );
};

export default CityGrid;