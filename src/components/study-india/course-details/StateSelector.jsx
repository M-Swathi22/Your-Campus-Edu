// src/components/study-india/course-details/StateSelector.jsx
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

// Directory-tile design: each state is a static card with a gradient
// monogram (its code), name, and college tally. Clicking a tile takes
// the visitor to that state's City Selection page.
//
// Mobile fix: below `sm` the grid now renders as a single-column list
// of full-width rows instead of a cramped 2-up grid, so the state name
// never truncates and the tap target stays comfortably large. The
// hover-only arrow reveal is also mirrored for touch devices via a
// `pointer: coarse` media query, since coarse pointers never fire
// `:hover`.
export default function StateSelector({
  states = [],
  categoryId,
  courseSlug,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-12 sm:py-16 lg:py-24" style={{ background: "var(--primary-light)" }}>
      <style>{`
        .state-tile {
          background: var(--bg-main);
          border: 1px solid var(--border);
          transition: var(--transition);
          text-decoration: none;
        }
        .state-tile:hover {
          border-color: color-mix(in srgb, var(--primary) 35%, var(--border));
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .state-tile:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 2px;
        }
        .state-tile__monogram {
          background: var(--gradient-primary);
        }
        .state-tile__arrow {
          opacity: 0;
          transform: translate(-2px, 2px);
          transition: var(--transition);
        }
        .state-tile:hover .state-tile__arrow,
        .state-tile:focus-visible .state-tile__arrow {
          opacity: 1;
          transform: translate(0, 0);
        }
        /* Touch devices can't hover — keep the arrow visible so the
           tile still reads as tappable/navigable. */
        @media (pointer: coarse) {
          .state-tile__arrow {
            opacity: 0.6;
            transform: translate(0, 0);
          }
          .state-tile:active {
            border-color: color-mix(in srgb, var(--primary) 35%, var(--border));
            transform: scale(0.99);
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:mb-10 lg:mb-14">
          <span
            className="uppercase tracking-[0.2em]"
            style={{ color: "var(--primary)", fontFamily: "var(--font-main)", fontSize: "clamp(0.66rem, 2.4vw, 0.78rem)" }}
          >
            Where You Can Study
          </span>
          <h2
            className="font-semibold"
            style={{ color: "var(--text-dark)", fontFamily: "var(--font-main)", fontSize: "clamp(1.35rem, 5vw, 2.1rem)" }}
          >
            Choose a state to explore
          </h2>
          <p
            style={{ color: "var(--text-medium)", fontFamily: "var(--font-main)", fontSize: "clamp(0.85rem, 2.4vw, 1rem)" }}
          >
            {states.length} states run colleges offering this program.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {states.map((state, i) => (
            <motion.div
              key={state.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.4) }}
            >
              <Link
                to={`/study-india/${categoryId}/${courseSlug}/${state.id}`}
                aria-label={`Explore cities in ${state.name}`}
                className="state-tile relative flex items-center gap-3 rounded-[var(--radius-md)] p-3.5 sm:p-4"
              >
                <div
                  className="state-tile__monogram flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] font-bold sm:h-11 sm:w-11"
                  style={{ color: "var(--text-white)", fontFamily: "var(--font-main)", fontSize: "0.85rem" }}
                >
                  {state.code}
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className="truncate font-medium"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-main)", fontSize: "clamp(0.9rem, 3.4vw, 0.95rem)" }}
                  >
                    {state.name}
                  </p>
                  <div
                    className="mt-0.5 flex items-center gap-1.5"
                    style={{ color: "var(--text-light)", fontFamily: "var(--font-main)", fontSize: "clamp(0.74rem, 2.8vw, 0.78rem)" }}
                  >
                    <MapPin size={11} />
                    {state.collegeCount} colleges
                  </div>
                </div>

                <ArrowUpRight
                  size={15}
                  className="state-tile__arrow shrink-0"
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}