import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";

/**
 * CourseExplorer
 * Signature element: ticket-stub cards with a real perforated tear-line
 * splitting an index stub from the course content, and a "level meter" —
 * filled bars that actually encode difficulty — replacing the old decorative
 * barcode. The filter row is a sliding-pill selector (one shared background
 * gliding between tabs) instead of static toggle buttons.
 *
 * Background updated to a premium dark surface (var(--bg-dark)) with soft
 * ambient glows in the brand gradient colors, and cards moved to a glass
 * treatment so the ticket-stub signature reads as elevated, not flat.
 */
export default function CourseExplorer({ category, data }) {
  const levels = useMemo(() => {
    const unique = Array.from(new Set(data.courses.map((c) => c.level)));
    return ["All", ...unique];
  }, [data.courses]);

  const levelRank = useMemo(() => {
    const unique = Array.from(new Set(data.courses.map((c) => c.level)));
    const map = {};
    unique.forEach((lvl, i) => (map[lvl] = i + 1));
    return { map, total: unique.length };
  }, [data.courses]);

  const [activeLevel, setActiveLevel] = useState("All");

  const filtered =
    activeLevel === "All" ? data.courses : data.courses.filter((c) => c.level === activeLevel);

  return (
    <section className="course-explorer" id="course-explorer">
      <span className="course-explorer__glow course-explorer__glow--a" aria-hidden="true" />
      <span className="course-explorer__glow course-explorer__glow--b" aria-hidden="true" />

      <div className="course-explorer__container">
        <div className="course-explorer__head">
          <span className="course-explorer__eyebrow">Timetable</span>
          <h2 style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)" }}>
            Courses on the {category.category} line
          </h2>
          <p className="course-explorer__count">
            Showing {filtered.length} of {data.courses.length} courses
          </p>
        </div>

        <div className="course-explorer__tabs" role="tablist" aria-label="Filter by level">
          {levels.map((level) => (
            <button
              key={level}
              role="tab"
              aria-selected={activeLevel === level}
              className={`course-explorer__tab ${activeLevel === level ? "is-active" : ""}`}
              onClick={() => setActiveLevel(level)}
            >
              {activeLevel === level && (
                <motion.span
                  layoutId="course-explorer-pill"
                  className="course-explorer__tab-bg"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="course-explorer__tab-label">{level}</span>
            </button>
          ))}
        </div>

        <motion.div className="course-explorer__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => {
              const rank = levelRank.map[course.level] || 1;
              return (
                <motion.article
                  key={course.name}
                  className="course-explorer__card"
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="course-explorer__rail" aria-hidden="true" />

                  <div className="course-explorer__stub">
                    <span className="course-explorer__index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="course-explorer__stub-level">{course.level}</span>
                  </div>

                  <div className="course-explorer__tear" aria-hidden="true">
                    <span className="course-explorer__notch course-explorer__notch--top" />
                    <span className="course-explorer__tear-line" />
                    <span className="course-explorer__notch course-explorer__notch--bottom" />
                  </div>

                  <div className="course-explorer__body">
                    <h3>{course.name}</h3>

                    <div className="course-explorer__meta">
                      <span><Clock size={14} aria-hidden="true" /> {course.duration}</span>
                    </div>

                    <div className="course-explorer__footer">
                      <div className="course-explorer__level-meter" aria-label={`Level: ${course.level}`}>
                        {Array.from({ length: levelRank.total || 3 }).map((_, idx) => (
                          <span
                            key={idx}
                            className={`course-explorer__level-bar ${idx < rank ? "is-filled" : ""}`}
                          />
                        ))}
                      </div>

                      <a href="#" className="course-explorer__link">
                        Syllabus
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .course-explorer {
          position: relative;
          padding: clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3rem);
          background: var(--bg-dark);
          overflow: hidden;
        }
        .course-explorer__container {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* -- Ambient premium glows -- */
        .course-explorer__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .course-explorer__glow--a {
          top: -12%;
          left: -6%;
          width: 480px;
          height: 480px;
          background: color-mix(in srgb, var(--primary) 35%, transparent);
        }
        .course-explorer__glow--b {
          bottom: -18%;
          right: -8%;
          width: 420px;
          height: 420px;
          background: color-mix(in srgb, var(--accent-green) 22%, transparent);
        }

        .course-explorer__head { margin-bottom: 1.5rem; }
        .course-explorer__eyebrow {
          display: inline-block;
          font-family: var(--font-main);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-green);
          margin-bottom: 0.6rem;
        }
        .course-explorer__head h2 {
          font-family: var(--font-main);
          font-weight: 700;
          color: var(--text-white);
          margin: 0 0 0.4rem;
          line-height: 1.15;
        }
        .course-explorer__count {
          font-family: var(--font-main);
          font-size: 0.86rem;
          color: color-mix(in srgb, var(--text-white) 55%, transparent);
          margin: 0;
        }

        /* -- Sliding pill tabs -- */
        .course-explorer__tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2.25rem;
          padding: 0.35rem;
          background: color-mix(in srgb, var(--text-white) 6%, transparent);
          border: 1px solid color-mix(in srgb, var(--text-white) 8%, transparent);
          border-radius: var(--radius-lg);
          width: fit-content;
        }
        .course-explorer__tab {
          position: relative;
          font-family: var(--font-main);
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.55rem 1.15rem;
          border-radius: var(--radius-md);
          border: none;
          background: transparent;
          color: color-mix(in srgb, var(--text-white) 60%, transparent);
          cursor: pointer;
          transition: color 0.25s ease;
        }
        .course-explorer__tab.is-active { color: var(--text-white); }
        .course-explorer__tab:hover:not(.is-active) { color: var(--text-white); }
        .course-explorer__tab-bg {
          position: absolute;
          inset: 0;
          background: var(--gradient-primary);
          border-radius: var(--radius-md);
          z-index: 0;
          box-shadow: var(--shadow-md);
        }
        .course-explorer__tab-label { position: relative; z-index: 1; }

        /* -- Grid -- */
        .course-explorer__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(258px, 1fr));
          gap: 1.1rem;
        }

        /* -- Ticket-stub card (glass, premium) -- */
        .course-explorer__card {
          position: relative;
          display: grid;
          grid-template-columns: auto auto 1fr;
          background: color-mix(in srgb, var(--text-white) 4%, transparent);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid color-mix(in srgb, var(--text-white) 10%, transparent);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: var(--transition);
        }
        .course-explorer__card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
          border-color: color-mix(in srgb, var(--accent-green) 45%, transparent);
          background: color-mix(in srgb, var(--text-white) 6%, transparent);
        }

        .course-explorer__rail {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--gradient-primary);
          transform: scaleY(0.25);
          transform-origin: center;
          transition: var(--transition);
        }
        .course-explorer__card:hover .course-explorer__rail { transform: scaleY(1); }

        .course-explorer__stub {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1.1rem 0.85rem;
          background: color-mix(in srgb, var(--text-white) 3%, transparent);
        }
        .course-explorer__index {
          font-family: var(--font-main);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.06em;
          color: color-mix(in srgb, var(--text-white) 40%, transparent);
        }
        .course-explorer__stub-level {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: var(--font-main);
          font-weight: 600;
          font-size: 0.66rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-green);
          white-space: nowrap;
        }

        .course-explorer__tear {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.6rem 0;
        }
        .course-explorer__tear-line {
          flex: 1;
          width: 0;
          border-left: 1.5px dashed color-mix(in srgb, var(--text-white) 16%, transparent);
        }
        .course-explorer__notch {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--bg-dark);
          flex-shrink: 0;
        }

        .course-explorer__body {
          padding: 1.4rem 1.3rem 1.2rem;
          display: flex;
          flex-direction: column;
        }
        .course-explorer__body h3 {
          font-family: var(--font-main);
          font-size: 1.02rem;
          font-weight: 600;
          color: var(--text-white);
          margin: 0 0 0.65rem;
          line-height: 1.32;
        }
        .course-explorer__meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          margin-bottom: 1.1rem;
        }
        .course-explorer__meta span {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-main);
          font-size: 0.78rem;
          color: color-mix(in srgb, var(--text-white) 55%, transparent);
        }

        .course-explorer__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding-top: 0.9rem;
          border-top: 1px solid color-mix(in srgb, var(--text-white) 10%, transparent);
          margin-top: auto;
        }

        .course-explorer__level-meter {
          display: flex;
          gap: 3px;
        }
        .course-explorer__level-bar {
          width: 16px;
          height: 5px;
          border-radius: 3px;
          background: color-mix(in srgb, var(--text-white) 14%, transparent);
        }
        .course-explorer__level-bar.is-filled { background: var(--accent-green); }

        .course-explorer__link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-main);
          font-weight: 600;
          font-size: 0.8rem;
          color: color-mix(in srgb, var(--text-white) 78%, transparent);
          text-decoration: none;
          transition: var(--transition);
        }
        .course-explorer__link:hover {
          color: var(--accent-green);
          gap: 0.45rem;
        }

        @media (max-width: 560px) {
          .course-explorer__stub-level { display: none; }
          .course-explorer__stub { padding: 1rem 0.6rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .course-explorer * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
}