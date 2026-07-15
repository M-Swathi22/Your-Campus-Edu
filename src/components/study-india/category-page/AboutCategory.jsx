import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

/**
 * AboutCategory
 * Signature element: a bound "dossier page" — a framed panel with a folded
 * paper corner and a manila file-tab (outside the clip so it never gets cut
 * off), set on a soft, light backdrop with gentle primary-tinted blobs.
 * Split by a perforated spine into an academic intro (ghost quote mark, drop
 * cap) and hoverable index cards with an accent rail. Theming is anchored
 * entirely to `--primary` from theme.css — no per-category accent color.
 */
export default function AboutCategory({ category, data }) {
  const about = data?.about;
  if (!about) return null;
  const fileLabel = `${category.category?.toUpperCase() || "FIELD"} FILE`;

  return (
    <section className="about-cat">
      <div className="about-cat__blob about-cat__blob--a" aria-hidden="true" />
      <div className="about-cat__blob about-cat__blob--b" aria-hidden="true" />

      <div className="about-cat__container">
        <div className="about-cat__frame-wrap">
          <div className="about-cat__tab">
            <span className="about-cat__tab-dot" />
            {fileLabel}
          </div>

          <div className="about-cat__frame">
            <div className="about-cat__fold" aria-hidden="true" />

            <div className="about-cat__grid">
              {/* Text column */}
              <div className="about-cat__text">
                <Icons.Quote className="about-cat__ghost-icon" aria-hidden="true" />

                <motion.span
                  className="about-cat__eyebrow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                >
                  About the Field
                </motion.span>

                <motion.h2
                  className="about-cat__heading"
                  style={{ fontSize: "clamp(1.85rem, 3.2vw, 2.6rem)" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                >
                  {about.heading}
                </motion.h2>

                <div className="about-cat__body">
                  {about.paragraphs.map((p, i) => (
                    <motion.p
                      key={i}
                      className={i === 0 ? "about-cat__para about-cat__para--lead" : "about-cat__para"}
                      style={{ fontSize: "clamp(0.96rem, 1.1vw, 1.04rem)" }}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: 0.14 + i * 0.06 }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </div>

              {/* Perforated spine */}
              <div className="about-cat__spine" aria-hidden="true">
                <span className="about-cat__spine-notch about-cat__spine-notch--top" />
                <span className="about-cat__spine-line" />
                <span className="about-cat__spine-notch about-cat__spine-notch--bottom" />
              </div>

              {/* Index card column */}
              <div className="about-cat__cards">
                <span className="about-cat__cards-label">Key Highlights</span>

                {about.highlights.map((h, i) => {
                  const HIcon = Icons[h.icon] || Icons.Sparkles;
                  return (
                    <motion.div
                      key={h.title}
                      className="about-cat__card"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.09 }}
                    >
                      <span className="about-cat__card-rail" />
                      <span className="about-cat__card-index">{String(i + 1).padStart(2, "0")}</span>
                      <div className="about-cat__card-icon">
                        <HIcon size={18} aria-hidden="true" strokeWidth={1.75} />
                      </div>
                      <div className="about-cat__card-text">
                        <h3 className="about-cat__card-title">{h.title}</h3>
                        <p className="about-cat__card-desc">{h.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-cat {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, var(--bg-main) 0%, var(--primary-light) 100%);
          padding: clamp(4rem, 8vw, 6.5rem) clamp(1.25rem, 4vw, 3rem);
        }

        /* -- Ambient primary-tinted blobs (no secondary/orange mix) -- */
        .about-cat__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .about-cat__blob--a {
          width: 420px;
          height: 420px;
          top: -140px;
          left: -120px;
          background: color-mix(in srgb, var(--primary) 22%, transparent);
        }
        .about-cat__blob--b {
          width: 360px;
          height: 360px;
          bottom: -140px;
          right: -100px;
          background: color-mix(in srgb, var(--primary-dark) 16%, transparent);
        }

        .about-cat__container {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* -- Frame wrap (unclipped, holds the tab) -- */
        .about-cat__frame-wrap {
          position: relative;
        }

        .about-cat__tab {
          position: absolute;
          top: 0;
          left: clamp(1.5rem, 4vw, 2.75rem);
          transform: translateY(-100%);
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-main);
          border: 1px solid var(--border);
          border-bottom: none;
          padding: 0.55rem 1.15rem 0.9rem;
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          font-family: var(--font-main);
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          white-space: nowrap;
          color: var(--primary);
        }
        .about-cat__tab-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          background: var(--primary);
        }

        /* -- Frame / dossier panel -- */
        .about-cat__frame {
          position: relative;
          background:
            radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--primary) 7%, transparent) 0%, transparent 55%),
            linear-gradient(155deg, var(--primary-light) 0%, var(--bg-main) 46%);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          padding: clamp(2rem, 4vw, 3.25rem);
          clip-path: polygon(0 0, calc(100% - 46px) 0, 100% 46px, 100% 100%, 0 100%);
        }

        .about-cat__fold {
          position: absolute;
          top: 0;
          right: 0;
          width: 46px;
          height: 46px;
          background: linear-gradient(135deg,
            color-mix(in srgb, var(--text-dark) 10%, var(--bg-main)) 50%,
            transparent 50%
          );
          box-shadow: -4px 4px 8px color-mix(in srgb, var(--text-dark) 12%, transparent);
        }

        .about-cat__grid {
          display: grid;
          grid-template-columns: 1.05fr auto 0.95fr;
          gap: clamp(2rem, 4vw, 3rem);
          align-items: stretch;
        }

        /* -- Text column -- */
        .about-cat__text {
          position: relative;
        }

        .about-cat__ghost-icon {
          position: absolute;
          top: -0.5rem;
          left: -0.25rem;
          width: 64px;
          height: 64px;
          color: color-mix(in srgb, var(--primary) 10%, transparent);
          z-index: 0;
        }

        .about-cat__eyebrow {
          position: relative;
          z-index: 1;
          display: inline-block;
          font-family: var(--font-main);
          font-weight: 600;
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.4rem 0.95rem;
          border-radius: var(--radius-sm);
          margin-bottom: 1.1rem;
          color: var(--primary);
          background: color-mix(in srgb, var(--primary) 10%, transparent);
        }

        .about-cat__heading {
          position: relative;
          z-index: 1;
          font-family: var(--font-main);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.22;
          margin: 0 0 1.4rem;
          letter-spacing: -0.01em;
        }

        .about-cat__body {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .about-cat__para {
          font-family: var(--font-main);
          line-height: 1.75;
          color: var(--text-medium);
          margin: 0;
        }

        .about-cat__para--lead {
          font-size: 1.05em;
          color: var(--text-dark);
        }
        .about-cat__para--lead::first-letter {
          font-family: var(--font-main);
          font-weight: 700;
          font-size: 3.2em;
          line-height: 0.8;
          float: left;
          padding: 0.02em 0.09em 0 0;
          color: var(--primary-dark);
        }

        /* -- Perforated spine -- */
        .about-cat__spine {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-cat__spine-line {
          flex: 1;
          width: 0;
          border-left: 1.5px dashed var(--border-dark);
        }
        .about-cat__spine-notch {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--bg-main);
          border: 1.5px solid var(--border-dark);
          flex-shrink: 0;
        }

        /* -- Index card column -- */
        .about-cat__cards {
          display: flex;
          flex-direction: column;
        }

        .about-cat__cards-label {
          display: block;
          font-family: var(--font-main);
          font-weight: 600;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .about-cat__card {
          position: relative;
          display: grid;
          grid-template-columns: auto auto 1fr;
          align-items: flex-start;
          gap: 0.9rem;
          background: color-mix(in srgb, var(--bg-main) 88%, transparent);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.2rem 1.1rem 1rem;
          margin-bottom: 0.85rem;
          overflow: hidden;
          transition: var(--transition);
        }
        .about-cat__card:last-child { margin-bottom: 0; }
        .about-cat__card:hover {
          transform: translateX(4px);
          box-shadow: var(--shadow-md);
          border-color: color-mix(in srgb, var(--primary) 40%, var(--border));
        }

        .about-cat__card-rail {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--primary);
          transform: scaleY(0.3);
          transform-origin: center;
          transition: var(--transition);
        }
        .about-cat__card:hover .about-cat__card-rail {
          transform: scaleY(1);
        }

        .about-cat__card-index {
          font-family: var(--font-main);
          font-weight: 700;
          font-size: 0.78rem;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.03em;
          color: color-mix(in srgb, var(--text-dark) 25%, transparent);
          padding-top: 0.6rem;
        }

        .about-cat__card-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--primary);
          background: color-mix(in srgb, var(--primary) 12%, transparent);
        }

        .about-cat__card-title {
          font-family: var(--font-main);
          font-weight: 600;
          font-size: 0.96rem;
          color: var(--text-dark);
          margin: 0.5rem 0 0.25rem;
        }

        .about-cat__card-desc {
          font-family: var(--font-main);
          font-size: 0.87rem;
          line-height: 1.6;
          color: var(--text-medium);
          margin: 0;
        }

        @media (max-width: 900px) {
          .about-cat__grid {
            grid-template-columns: 1fr;
          }
          .about-cat__spine {
            flex-direction: row;
            padding: 0.5rem 0;
          }
          .about-cat__spine-line {
            width: auto;
            height: 0;
            flex: 1;
            border-left: none;
            border-top: 1.5px dashed var(--border-dark);
          }
        }

        @media (max-width: 560px) {
          .about-cat__blob { display: none; }
          .about-cat__frame {
            clip-path: polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%);
            padding: 1.75rem 1.25rem;
          }
          .about-cat__fold { width: 32px; height: 32px; }
          .about-cat__ghost-icon { width: 48px; height: 48px; }
          .about-cat__tab {
            left: 1.1rem;
            font-size: 0.62rem;
            padding: 0.45rem 0.85rem 0.75rem;
          }
          .about-cat__card {
            grid-template-columns: auto 1fr;
          }
          .about-cat__card-index { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-cat * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
}