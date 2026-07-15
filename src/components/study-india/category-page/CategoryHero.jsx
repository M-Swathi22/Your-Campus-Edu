import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, GraduationCap } from "lucide-react";

/**
 * CategoryHero
 * A calm, professional full-bleed hero: single editorial photograph, one
 * gradient wash, one fade-up entrance. No badges, no route strip — the
 * category name and description carry the page.
 */
export default function CategoryHero({ category, data }) {
  return (
    <section className="cat-hero">
      <div className="cat-hero__bg" aria-hidden="true">
        <img src={category.image} alt="" loading="eager" />
        <div className="cat-hero__scrim" />
      </div>

      <div className="cat-hero__container">
        <nav className="cat-hero__crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <Link to="/study-india">Study India</Link>
          <ChevronRight size={13} aria-hidden="true" />
          <span aria-current="page">{category.category}</span>
        </nav>

        <motion.div
          className="cat-hero__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cat-hero__eyebrow">Study India — Category Guide</span>

          <h1 className="cat-hero__title" style={{ fontSize: "clamp(2.3rem, 5vw, 3.75rem)" }}>
            {category.category}
          </h1>

          <p className="cat-hero__tagline" style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
            {data.tagline}
          </p>

          <p className="cat-hero__desc" style={{ fontSize: "clamp(0.94rem, 1.1vw, 1.02rem)" }}>
            {data.heroDescription}
          </p>

          <div className="cat-hero__actions">
            <a href="#course-explorer" className="cat-hero__btn cat-hero__btn--primary">
              Explore Courses
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <Link to="/contact" className="cat-hero__btn cat-hero__btn--ghost">
              Talk to a Counsellor
            </Link>
          </div>

          <div className="cat-hero__meta">
            <GraduationCap size={16} aria-hidden="true" />
            <span>{category.courseCount} courses available in this category</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .cat-hero {
          position: relative;
          overflow: hidden;
          min-height: clamp(540px, 82vh, 720px);
          display: flex;
          align-items: center;
          background: var(--bg-dark);
        }

        .cat-hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .cat-hero__bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cat-hero__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg,
            color-mix(in srgb, var(--primary-dark) 88%, transparent) 0%,
            color-mix(in srgb, var(--primary-dark) 68%, transparent) 38%,
            color-mix(in srgb, var(--primary-dark) 30%, transparent) 72%,
            transparent 100%
          );
        }

        .cat-hero__container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: clamp(5.5rem, 10vw, 7rem) clamp(1.25rem, 4vw, 3rem) clamp(3rem, 6vw, 4rem);
        }

        .cat-hero__crumbs {
          position: absolute;
          top: clamp(1.5rem, 4vw, 2.25rem);
          left: clamp(1.25rem, 4vw, 3rem);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-main);
          font-size: 0.8rem;
          color: color-mix(in srgb, var(--text-white) 75%, transparent);
        }
        .cat-hero__crumbs a { color: inherit; text-decoration: none; transition: var(--transition); }
        .cat-hero__crumbs a:hover { color: var(--text-white); }
        .cat-hero__crumbs span[aria-current] { color: var(--text-white); font-weight: 600; }

        .cat-hero__content {
          max-width: 680px;
        }

        .cat-hero__eyebrow {
          display: inline-block;
          font-family: var(--font-main);
          font-weight: 600;
          font-size: 0.76rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--text-white) 82%, transparent);
          margin-bottom: 1rem;
        }

        .cat-hero__title {
          font-family: var(--font-main);
          font-weight: 700;
          color: var(--text-white);
          line-height: 1.08;
          margin: 0 0 0.9rem;
          letter-spacing: -0.01em;
        }

        .cat-hero__tagline {
          font-family: var(--font-main);
          font-weight: 500;
          color: var(--text-white);
          margin: 0 0 0.85rem;
        }

        .cat-hero__desc {
          font-family: var(--font-main);
          line-height: 1.7;
          color: color-mix(in srgb, var(--text-white) 76%, transparent);
          max-width: 52ch;
          margin: 0 0 2rem;
        }

        .cat-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }
        .cat-hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-main);
          font-weight: 600;
          font-size: 0.92rem;
          padding: 0.85rem 1.65rem;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: var(--transition);
        }
        .cat-hero__btn--primary {
          background: var(--gradient-primary);
          color: var(--text-white);
        }
        .cat-hero__btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .cat-hero__btn--ghost {
          border: 1.5px solid color-mix(in srgb, var(--text-white) 42%, transparent);
          color: var(--text-white);
        }
        .cat-hero__btn--ghost:hover {
          background: color-mix(in srgb, var(--text-white) 10%, transparent);
        }

        .cat-hero__meta {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: var(--font-main);
          font-weight: 500;
          font-size: 0.88rem;
          color: color-mix(in srgb, var(--text-white) 82%, transparent);
          padding-top: 1.25rem;
          border-top: 1px solid color-mix(in srgb, var(--text-white) 22%, transparent);
        }

        @media (max-width: 900px) {
          .cat-hero { align-items: flex-end; }
          .cat-hero__container { padding-top: clamp(4.5rem, 14vw, 6rem); }
          .cat-hero__content { max-width: 100%; }
        }

        @media (max-width: 560px) {
          .cat-hero__crumbs { top: 1.25rem; left: 1.1rem; }
          .cat-hero__crumbs span:not([aria-current]) { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cat-hero * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
}