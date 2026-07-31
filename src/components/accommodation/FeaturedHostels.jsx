// src/components/accommodation/FeaturedHostels.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { featuredHostels } from "../../data/accommodationData";

export default function FeaturedHostels() {
  return (
    <section className="feat-host">
      <div className="feat-host__inner">
        <div className="feat-host__header">
          <div>
            <span className="feat-host__eyebrow">FEATURED STAYS</span>
            <h2 className="feat-host__title">Rooms our students actually live in</h2>
          </div>
          <p className="feat-host__subtitle">
            A short-list pulled from properties with the highest returning
            rebooking rate from past batches of Your Campus Edu students.
          </p>
        </div>

        <div className="feat-host__grid">
          {featuredHostels.map((h, i) => (
            <motion.div
              className="host-card"
              key={h.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div
                className="host-card__image"
                style={{ backgroundImage: `url(${h.image})` }}
              >
                <span className="host-card__type">{h.type}</span>
              </div>

              <div className="host-card__body">
                <div className="host-card__top-row">
                  <h3 className="host-card__name">{h.name}</h3>
                  <span className="host-card__rating">
                    <Star size={13} strokeWidth={0} fill="currentColor" />
                    {h.rating}
                  </span>
                </div>

                <span className="host-card__location">
                  <MapPin size={13} strokeWidth={2.2} />
                  {h.city}, {h.country}
                </span>

                <div className="host-card__amenities">
                  {h.amenities.map((a) => (
                    <span className="host-card__chip" key={a}>
                      {a}
                    </span>
                  ))}
                </div>

                <div className="host-card__footer">
                  <div>
                    <span className="host-card__price">{h.price}</span>
                    <span className="host-card__price-unit">
                      {h.priceUnit}
                    </span>
                  </div>
                  <Link
                    to={`/accommodation/${h.slug}`}
                    className="host-card__cta"
                  >
                    View rooms
                    <ArrowRight size={15} strokeWidth={2.3} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .feat-host {
          background: var(--bg-light);
          font-family: var(--font-main);
          padding: clamp(3.5rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem);
        }

        .feat-host__inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .feat-host__header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1.25rem;
          margin: 0 0 clamp(2.5rem, 5vw, 3.5rem);
        }

        .feat-host__eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: var(--primary);
          margin-bottom: 0.9rem;
        }

        .feat-host__title {
          font-size: clamp(1.6rem, 3.4vw, 2.4rem);
          font-weight: 700;
          color: var(--text-dark);
          margin: 0;
          max-width: 30rem;
        }

        .feat-host__subtitle {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-medium);
          max-width: 22rem;
          margin: 0;
        }

        .feat-host__grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .host-card {
          background: var(--bg-main);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .host-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .host-card__image {
          height: 160px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .host-card__type {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--text-dark);
          background: color-mix(in srgb, var(--white) 92%, transparent);
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-sm);
        }

        .host-card__body {
          padding: 1.15rem 1.2rem 1.3rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .host-card__top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .host-card__name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0;
          line-height: 1.3;
        }

        .host-card__rating {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          flex-shrink: 0;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--warning);
        }

        .host-card__location {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: var(--text-light);
          margin: 0.4rem 0 0.9rem;
        }

        .host-card__amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.1rem;
        }

        .host-card__chip {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--primary);
          background: var(--primary-light);
          padding: 0.3rem 0.55rem;
          border-radius: var(--radius-sm);
        }

        .host-card__footer {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.9rem;
          border-top: 1px dashed var(--border);
        }

        .host-card__price {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-dark);
        }

        .host-card__price-unit {
          font-size: 0.78rem;
          color: var(--text-light);
          margin-left: 0.15rem;
        }

        .host-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--secondary);
          text-decoration: none;
        }

        .host-card__cta:hover {
          gap: 0.5rem;
        }

        @media (max-width: 1080px) {
          .feat-host__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .feat-host__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}