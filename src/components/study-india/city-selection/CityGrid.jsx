// src/components/study-india/city-selection/CityGrid.jsx
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const CityGrid = ({ state, cities }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="city-grid py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2
          className="city-grid__heading mb-8"
          style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
        >
          Cities in {state.name}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, i) => (
            <motion.div
              key={city.id}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.06, ease: "easeOut" }}
            >
              <Link
                to={`/study-india/colleges/${state.id}/${city.id}`}
                className="city-card"
                style={{ "--city-accent": state.color }}
              >
                <h3 className="city-card__name">{city.name}</h3>
                <span className="city-card__meta">
                  <GraduationCap size={16} />
                  {city.collegeCount} Colleges
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .city-grid {
          font-family: var(--font-main);
          background: var(--bg-light);
        }

        .city-grid__heading {
          font-weight: 700;
          color: var(--primary-dark);
        }

        .city-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: var(--bg-main);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          padding: 1.25rem 1.5rem;
          text-decoration: none;
          transition: var(--transition);
        }
        .city-card:hover {
          box-shadow: var(--shadow-md);
          border-color: color-mix(in srgb, var(--city-accent) 45%, var(--border));
          transform: translateY(-2px);
        }

        .city-card__name {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--primary-dark);
        }

        .city-card__meta {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-medium);
          white-space: nowrap;
        }
        .city-card__meta svg {
          color: var(--city-accent);
        }
      `}</style>
    </section>
  );
};

export default CityGrid;