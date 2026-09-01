import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight, ImageOff, BookMarked } from "lucide-react";
import { courseCategories } from "../../Data/indianCourses";

function CategoryImage({ src, alt }) {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return (
      <div className="pc-card__image-fallback">
        <ImageOff size={22} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="pc-card__image"
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}

export default function PopularCourses() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pc-section">
      <div className="pc-container">
        <div className="pc-header">
          <span className="pc-eyebrow">
            <BookMarked size={13} />
            Popular Courses
          </span>
          <h2 className="pc-title">
            Explore Courses By{" "}
            <span className="pc-title__gradient">Category</span>
          </h2>
          <p className="pc-subtitle">
            Browse programs across medicine, engineering, management, law and more.
          </p>
        </div>

        <div className="pc-grid">
          {courseCategories.map((cat, i) => {
            const Icon = Icons[cat.icon] || Icons.BookOpen;

            return (
              <motion.div
                key={cat.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Link
                  to={`/study-india/${cat.id}`}
                  className="pc-card"
                  aria-label={`Explore ${cat.category} courses`}
                >
                  {/* ── Pass panel: image + icon chip + name ── */}
                  <div className="pc-card__panel">
                    <CategoryImage src={cat.image} alt={cat.category} />
                    <div className="pc-card__scrim" />

                    <span className="pc-card__icon-chip">
                      <Icon size={16} />
                    </span>

                    <h3 className="pc-card__name">{cat.category}</h3>
                  </div>

                  {/* ── Perforated die-cut divider ── */}
                  <div className="pc-card__perforation">
                    <span className="pc-card__notch pc-card__notch--left" />
                    <span className="pc-card__notch pc-card__notch--right" />
                  </div>

                  {/* ── Stub: course count + CTA ── */}
                  <div className="pc-card__stub">
                    <div className="pc-card__stub-count">
                      <span className="pc-card__count-number">{cat.courseCount}</span>
                      <span className="pc-card__count-label">
                        {cat.courseCount === 1 ? "Course" : "Courses"}&nbsp;Available
                      </span>
                    </div>

                    <span className="pc-card__cta" aria-hidden="true">
                      <ArrowUpRight size={18} className="pc-card__cta-icon" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .pc-section {
          padding: 5rem 1.5rem;
          background: var(--bg-section);
          font-family: var(--font-main);
        }
        .pc-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Header (matches WhyStudyIndia heading treatment) ── */
        .pc-header {
          max-width: 700px;
          margin: 0 auto 2.75rem;
          text-align: center;
        }
        .pc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary);
        }
        .pc-title {
          margin-top: 0.85rem;
          font-size: clamp(1.9rem, 1.4rem + 2.2vw, 3rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 1.15;
          color: var(--primary-dark);
        }
        .pc-title__gradient {
          background-image: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .pc-subtitle {
          margin-top: 0.75rem;
          font-size: clamp(0.9rem, 1vw, 1rem);
          color: var(--text-light);
        }

        /* ── Grid ── */
        .pc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.75rem;
        }

        /* ── Card shell (admission-pass concept) ── */
        .pc-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-main);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .pc-card:hover {
          transform: translateY(-7px);
          border-color: color-mix(in srgb, var(--primary) 45%, var(--border));
          box-shadow: var(--shadow-lg);
        }
        .pc-card:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 3px;
        }

        /* ── Panel (image zone) ── */
        .pc-card__panel {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--primary-light);
        }
        .pc-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pc-card:hover .pc-card__image {
          transform: scale(1.09);
        }
        .pc-card__image-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          background: var(--primary-light);
        }
        .pc-card__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            185deg,
            transparent 40%,
            color-mix(in srgb, var(--primary-dark) 92%, transparent) 100%
          );
        }

        .pc-card__icon-chip {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          color: var(--text-white);
          background: color-mix(in srgb, var(--primary-dark) 55%, transparent);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid color-mix(in srgb, var(--text-white) 25%, transparent);
        }

        .pc-card__name {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 0.9rem;
          font-size: clamp(1.02rem, 1.3vw, 1.18rem);
          font-weight: 700;
          letter-spacing: -0.015em;
          line-height: 1.25;
          color: var(--text-white);
        }

        /* ── Perforated die-cut divider ── */
        .pc-card__perforation {
          position: relative;
          height: 0;
          border-top: 2px dashed color-mix(in srgb, var(--primary) 30%, var(--border));
        }
        .pc-card__notch {
          position: absolute;
          top: 50%;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: var(--bg-section);
          transform: translateY(-50%);
        }
        .pc-card__notch--left {
          left: -9px;
        }
        .pc-card__notch--right {
          right: -9px;
        }

        /* ── Stub (count + CTA) ── */
        .pc-card__stub {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 1rem 1.15rem;
        }

        .pc-card__stub-count {
          display: flex;
          align-items: baseline;
          gap: 0.45rem;
        }
        .pc-card__count-number {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--primary);
          transition: color 0.3s ease;
        }
        .pc-card__count-label {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-light);
          max-width: 90px;
          line-height: 1.3;
        }

        .pc-card__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--primary) 22%, var(--border));
          background: var(--primary-light);
          color: var(--primary);
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease,
            box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pc-card:hover .pc-card__cta {
          background: var(--gradient-primary);
          border-color: transparent;
          color: var(--text-white);
          box-shadow: var(--shadow-md);
          transform: rotate(45deg);
        }
        .pc-card__cta-icon {
          transition: transform 0.2s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .pc-card,
          .pc-card__image,
          .pc-card__cta,
          .pc-card__count-number {
            transition: none !important;
          }
          .pc-card:hover .pc-card__cta {
            transform: none;
          }
        }

        @media (max-width: 420px) {
          .pc-card__count-label {
            max-width: 76px;
          }
        }
      `}</style>
    </section>
  );
}