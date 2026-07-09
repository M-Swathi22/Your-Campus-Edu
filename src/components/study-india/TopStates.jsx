import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Building2, ArrowUpRight, ArrowRight } from "lucide-react";
import { indianStates, featuredStateIds } from "../../data/indianStates";

const featuredStates = featuredStateIds
  .map((id) => indianStates.find((s) => s.id === id))
  .filter(Boolean);

export default function TopStates() {
  return (
    <section className="top-states" style={{ background: "var(--primary-light)" }}>
      <div className="top-states__inner mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 text-center">
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "var(--primary)", fontFamily: "var(--font-main)" }}
          >
            Boarding — Study India
          </span>
          <h2
            className="mx-auto mt-3 max-w-xl text-4xl font-semibold md:text-[3rem] md:leading-[1.12]"
            style={{ color: "var(--text-dark)", fontFamily: "var(--font-main)" }}
          >
            Top{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              states
            </span>{" "}
            to study in
          </h2>
        </div>

        <div className="top-states__grid">
          {featuredStates.map((state, i) => (
            <motion.div
              key={state.id}
              className="state-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/study-india/${state.id}`} className="state-card__link">
                <div
                  className="state-card__image"
                  style={{ background: `color-mix(in srgb, ${state.color} 12%, var(--bg-light))` }}
                >
                  <img src={state.image} alt={state.name} loading="lazy" />
                  <span
                    className="state-card__code"
                    style={{ background: state.color, fontFamily: "var(--font-main)" }}
                  >
                    {state.code}
                  </span>
                  <span className="state-card__gate">
                    <ArrowUpRight size={15} />
                  </span>
                </div>

                <div className="state-card__stub">
                  <div className="min-w-0">
                    <h3
                      className="state-card__name"
                      style={{ color: "var(--text-dark)", fontFamily: "var(--font-main)" }}
                    >
                      {state.name}
                    </h3>
                    <p className="state-card__city" style={{ fontFamily: "var(--font-main)" }}>
                      <MapPin size={13} style={{ color: state.color, flexShrink: 0 }} />
                      <span className="truncate">{state.topCities.slice(0, 2).join(" · ")}</span>
                    </p>
                  </div>

                  <div
                    className="state-card__count"
                    style={{
                      background: `color-mix(in srgb, ${state.color} 14%, transparent)`,
                      color: state.color,
                      fontFamily: "var(--font-main)",
                    }}
                  >
                    <Building2 size={13} />
                    {state.collegeCount} colleges
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link to="/study-india/states" className="view-all-btn">
            <span style={{ fontFamily: "var(--font-main)" }}>View All States</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        .top-states__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }
        @media (min-width: 640px) {
          .top-states__grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }

        .state-card {
          aspect-ratio: 1 / 1;
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          background: var(--bg-main);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          transition: var(--transition);
        }
        .state-card:hover {
          transform: translateY(-8px) rotate(-0.6deg);
          box-shadow: var(--shadow-lg);
        }

        .state-card__link {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
        }

        /* photo — roughly two-thirds of the square */
        .state-card__image {
          position: relative;
          flex: 1 1 auto;
          min-height: 0;
          overflow: hidden;
        }
        .state-card__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .state-card:hover .state-card__image img {
          transform: scale(1.08);
        }
        .state-card__image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, color-mix(in srgb, var(--bg-dark) 42%, transparent) 100%);
        }

        .state-card__code {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 1;
          padding: 5px 11px;
          border-radius: var(--radius-sm);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--text-white);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
        }

        .state-card__gate {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 1;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--bg-dark) 55%, transparent);
          color: var(--text-white);
          backdrop-filter: blur(3px);
          transition: var(--transition);
        }
        .state-card:hover .state-card__gate {
          transform: rotate(45deg);
        }

        /* torn-ticket stub — jagged perforation instead of a flat line */
        .state-card__stub {
          position: relative;
          flex: 0 0 auto;
          padding: 24px 20px 20px;
          background: var(--bg-main);
          clip-path: polygon(
            0% 10px, 6.25% 0, 12.5% 10px, 18.75% 0, 25% 10px, 31.25% 0,
            37.5% 10px, 43.75% 0, 50% 10px, 56.25% 0, 62.5% 10px, 68.75% 0,
            75% 10px, 81.25% 0, 87.5% 10px, 93.75% 0, 100% 10px,
            100% 100%, 0% 100%
          );
          margin-top: -1px;
        }

        .state-card__name {
          font-size: 19px;
          font-weight: 700;
          line-height: 1.2;
        }

        .state-card__city {
          margin-top: 6px;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          color: var(--text-medium);
        }

        .state-card__count {
          margin-top: 14px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 11px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 30px;
          border-radius: 999px;
          background: var(--gradient-primary);
          color: var(--text-white);
          font-size: 14.5px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        .view-all-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .view-all-btn svg {
          transition: transform 0.25s ease;
        }
        .view-all-btn:hover svg {
          transform: translateX(3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .state-card,
          .state-card__image img,
          .state-card__gate,
          .view-all-btn,
          .view-all-btn svg {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}