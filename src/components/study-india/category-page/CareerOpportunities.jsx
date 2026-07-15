import React from "react";
import { motion } from "framer-motion";

/**
 * CareerOpportunities
 * Horizontal zig-zag path infographic — a hex "step" marker on alternating
 * sides of the track, connected by an L-shaped wire, with the text content
 * beside it. Collapses to a single left-aligned vertical track on mobile,
 * with the wire correctly running center-to-center from step 1 to step 2,
 * step 2 to step 3, step 3 to step 4, and so on — every row forced to the
 * same left-aligned direction on mobile regardless of its desktop side.
 * Every hex — including the last one — uses the same primary color, no
 * secondary/orange accent. Uses custom properties exclusively from
 * theme.css.
 */
export default function CareerOpportunities({ category, data }) {
  if (!data || !data.careers || data.careers.length === 0) return null;

  return (
    <section className="career-path">
      <span className="career-path__glow career-path__glow--a" aria-hidden="true" />
      <span className="career-path__glow career-path__glow--b" aria-hidden="true" />

      <div className="career-path__container">
        <div className="career-path__head">
          <span className="career-path__eyebrow">Future Pathways</span>
          <h2 className="career-path__title">
            Where the <span className="career-path__title-accent">{category.category}</span> line takes you
          </h2>
          <p className="career-path__subtitle">
            Explore real-world professional destinations graduates commonly secure following the completion of these programmes.
          </p>
        </div>

        <div className="career-path__track">
          {data.careers.map((c, i) => {
            const stepNum = i + 1;
            const isLast = i === data.careers.length - 1;
            const side = stepNum % 2 !== 0 ? "left" : "right";

            return (
              <motion.div
                key={c.role || i}
                className={`career-path__row career-path__row--${side}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              >
                {!isLast && (
                  <span className="career-path__wire" aria-hidden="true">
                    <span className="career-path__wire-h" />
                    <span className="career-path__wire-v" />
                  </span>
                )}

                <div className="career-path__row-inner">
                  <div className="career-path__marker-zone">
                    <div className="career-path__hex">
                      <span className="career-path__hex-label">STEP</span>
                      <span className="career-path__hex-value">{stepNum}</span>
                    </div>
                    <div className="career-path__hex-base" />
                  </div>

                  <div className="career-path__text-zone">
                    <h3 className="career-path__role">{c.role}</h3>
                    <p className="career-path__description">{c.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .career-path {
          --node-w: 110px;
          --hex-w: 88px;
          --hex-h: 96px;
          --row-gap: 3.25rem;
          position: relative;
          padding: clamp(3.5rem, 6vw, 5.5rem) clamp(1.25rem, 4vw, 3rem);
          background: var(--primary-light);
          overflow: hidden;
          font-family: var(--font-main);
        }

        .career-path__container {
          position: relative;
          z-index: 2;
          max-width: 980px;
          margin: 0 auto;
        }

        .career-path__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(130px);
          pointer-events: none;
          z-index: 1;
          opacity: 0.5;
        }
        .career-path__glow--a {
          top: -10%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: color-mix(in srgb, var(--primary) 30%, transparent);
        }
        .career-path__glow--b {
          bottom: -10%;
          right: -5%;
          width: 450px;
          height: 450px;
          background: color-mix(in srgb, var(--primary-dark) 20%, transparent);
        }

        /* -- Header -- */
        .career-path__head {
          max-width: 700px;
          margin-bottom: clamp(3rem, 5vw, 4.5rem);
        }
        .career-path__eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent-green);
          margin-bottom: 0.65rem;
        }
        .career-path__title {
          font-size: clamp(2rem, 3.8vw, 2.75rem);
          font-weight: 700;
          color: var(--primary-dark);
          margin: 0 0 0.95rem;
          line-height: 1.15;
          letter-spacing: -0.025em;
        }
        .career-path__title-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .career-path__subtitle {
          font-size: clamp(1rem, 1.2vw, 1.1rem);
          color: var(--text-medium);
          margin: 0;
          line-height: 1.6;
        }

        /* -- Track -- */
        .career-path__track {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: var(--row-gap);
        }

        .career-path__row {
          position: relative;
          width: 100%;
        }

        .career-path__row-inner {
          display: flex;
          align-items: flex-start;
          gap: 2.25rem;
          width: 100%;
        }
        .career-path__row--left .career-path__row-inner {
          flex-direction: row;
          text-align: left;
        }
        .career-path__row--right .career-path__row-inner {
          flex-direction: row-reverse;
          text-align: right;
        }

        /* -- Hex marker (uniform primary color, including the last step) -- */
        .career-path__marker-zone {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: var(--node-w);
          flex-shrink: 0;
          z-index: 5;
        }

        .career-path__hex {
          position: relative;
          width: var(--hex-w);
          height: var(--hex-h);
          background-color: var(--primary);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          z-index: 2;
          transition: var(--transition);
        }

        .career-path__hex-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: color-mix(in srgb, var(--text-white) 75%, transparent);
          margin-bottom: 1px;
        }
        .career-path__hex-value {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--text-white);
          line-height: 1;
        }

        .career-path__hex-base {
          width: calc(var(--hex-w) + 16px);
          height: 24px;
          background: color-mix(in srgb, var(--primary) 22%, transparent);
          border-radius: 50%;
          margin-top: -12px;
          z-index: 1;
          transition: var(--transition);
        }

        .career-path__row:hover .career-path__hex { transform: translateY(-4px); }
        .career-path__row:hover .career-path__hex-base {
          transform: scale(0.94);
          opacity: 0.8;
        }

        /* -- Text -- */
        .career-path__text-zone {
          flex-grow: 1;
          padding-top: 14px;
          max-width: 620px;
        }
        .career-path__role {
          font-size: clamp(1.4rem, 2.2vw, 1.8rem);
          font-weight: 600;
          color: var(--text-dark);
          margin: 0 0 0.5rem;
        }
        .career-path__description {
          font-size: clamp(1rem, 1.1vw, 1.12rem);
          line-height: 1.6;
          color: var(--text-medium);
          margin: 0;
        }

        /* -- Connecting wire: runs center-to-center, step N to step N+1 -- */
        .career-path__wire {
          position: absolute;
          top: calc(var(--hex-h) / 2);
          height: calc(100% + var(--row-gap));
          left: calc(var(--node-w) / 2);
          right: calc(var(--node-w) / 2);
          z-index: 2;
          pointer-events: none;
        }
        .career-path__wire-h,
        .career-path__wire-v {
          position: absolute;
          background-color: var(--primary);
          opacity: 0.35;
        }
        .career-path__wire-h {
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
        }
        .career-path__wire-v {
          top: 0;
          bottom: 0;
          width: 2px;
        }
        .career-path__row--left .career-path__wire-v { right: 0; }
        .career-path__row--right .career-path__wire-v { left: 0; }

        /* -- Mobile: single left-aligned column, one continuous line down the steps -- */
        @media (max-width: 768px) {
          .career-path {
            --node-w: 70px;
            --hex-w: 68px;
            --hex-h: 74px;
            --row-gap: 2.75rem;
          }

          /* Force EVERY row — left or right on desktop — into the same
             left-aligned direction. Without this, .career-path__row--right
             .career-path__row-inner (higher specificity than the bare
             .career-path__row-inner rule below) kept its desktop
             row-reverse, so every even step's marker rendered on the right
             instead of the left. That's what made the line look like it
             jumped 1 → 3 → 5: the even steps' markers weren't where the
             wire expected them to be. */
          .career-path__row--left .career-path__row-inner,
          .career-path__row--right .career-path__row-inner {
            flex-direction: row;
            text-align: left;
            gap: 1.25rem;
          }

          .career-path__hex-value { font-size: 1.5rem; }
          .career-path__hex-base { height: 18px; margin-top: -8px; }

          /* Wire runs from this hex's exact center to the next hex's exact
             center — one continuous line, step 1 → 2 → 3 → 4 → 5. */
          .career-path__wire {
            top: calc(var(--hex-h) / 2);
            left: calc(var(--node-w) / 2);
            right: auto;
          }
          .career-path__wire-h { display: none; }
          .career-path__row--left .career-path__wire-v,
          .career-path__row--right .career-path__wire-v {
            left: 0;
            right: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .career-path * {
            transition: none !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}