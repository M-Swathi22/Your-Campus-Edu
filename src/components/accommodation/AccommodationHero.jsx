// src/components/accommodation/AccommodationHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Home, ShieldCheck } from "lucide-react";
import heroBg from "../../assets/images/accommodation_hero.png";

const STATS = [
  { icon: Globe2, value: "8", label: "Countries" },
  { icon: Home, value: "1,900+", label: "Verified Stays" },
  { icon: ShieldCheck, value: "0%", label: "Brokerage" },
];

function AccommodationHero() {
  return (
    <section className="ach-root">
      <div className="ach-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="ach-scrim" />

      <div className="ach-container">
        <div className="ach-content">
          <motion.div
            className="ach-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="ach-badge-dot" />
            Student Accommodation · Verified Stays
          </motion.div>

          <motion.h1
            className="ach-title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="ach-title-line">Find a room that's</span>
            <span className="ach-title-line">actually ready</span>
            <span className="ach-title-accent">before you land</span>
          </motion.h1>

          <motion.p
            className="ach-description"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            Verified hostels, PGs and student residences across 8 countries —
            matched to your campus, budget and move-in date, picked by
            counsellors who've placed a thousand students before you.
          </motion.p>

          <motion.div
            className="ach-buttons"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            <a href="#popular-destinations" className="ach-btn-primary">
              Find My Stay
              <ArrowRight size={18} className="ach-btn-arrow" />
            </a>
            <a href="#accommodation-cta" className="ach-btn-secondary">
              Talk to a Counselor
            </a>
          </motion.div>

          <motion.p
            className="ach-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.36 }}
          >
            No brokerage on your first booking
          </motion.p>

          <motion.div
            className="ach-stats"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
          >
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="ach-stat">
                  <div className="ach-stat-icon">
                    <s.icon size={16} />
                  </div>
                  <div className="ach-stat-text">
                    <span className="ach-stat-value">{s.value}</span>
                    <span className="ach-stat-label">{s.label}</span>
                  </div>
                </div>
                {i < STATS.length - 1 && <span className="ach-stat-divider" />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .ach-root {
          position: relative;
          overflow: hidden;
          min-height: 680px;
          display: flex;
          align-items: center;
          padding: 110px 24px 90px;
          background: var(--bg-light);
          font-family: var(--font-main);
        }

        .ach-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .ach-scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(100deg,
              var(--bg-light) 0%,
              color-mix(in srgb, var(--bg-light) 92%, transparent) 32%,
              color-mix(in srgb, var(--bg-light) 55%, transparent) 52%,
              color-mix(in srgb, var(--bg-light) 15%, transparent) 72%,
              transparent 100%
            ),
            linear-gradient(0deg,
              color-mix(in srgb, var(--bg-light) 40%, transparent) 0%,
              transparent 30%
            );
        }

        .ach-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        .ach-content { text-align: left; max-width: 570px; }

        .ach-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 999px;
          background: var(--white);
          border: 1px solid var(--border);
          color: var(--primary-dark);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          margin-bottom: 26px;
          box-shadow: var(--shadow-sm);
        }

        .ach-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          flex-shrink: 0;
        }

        .ach-title {
          display: flex;
          flex-direction: column;
          font-size: clamp(2.15rem, 3.8vw, 3.5rem);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.02em;
          color: var(--primary-dark);
          margin-bottom: 22px;
        }

        .ach-title-line { display: block; }

        .ach-title-accent {
          display: block;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ach-description {
          color: var(--text-medium);
          line-height: 1.75;
          font-size: 1.05rem;
          max-width: 460px;
          margin-bottom: 30px;
        }

        .ach-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }

        .ach-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 26px;
          background: var(--primary-dark);
          color: var(--white);
          text-decoration: none;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .ach-btn-primary:hover { background: var(--primary); transform: translateY(-2px); }
        .ach-btn-primary:hover .ach-btn-arrow { transform: translateX(3px); }

        .ach-btn-arrow { transition: var(--transition); }

        .ach-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 15px 26px;
          border: 1px solid var(--border);
          border-radius: 999px;
          text-decoration: none;
          color: var(--primary-dark);
          font-weight: 600;
          font-size: 0.95rem;
          background: var(--white);
          transition: var(--transition);
        }

        .ach-btn-secondary:hover { border-color: var(--primary); color: var(--primary); }

        .ach-btn-primary:focus-visible,
        .ach-btn-secondary:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 3px;
        }

        .ach-trust {
          font-size: 0.82rem;
          color: var(--text-light);
          font-weight: 500;
          margin-bottom: 36px;
        }

        /* Stats */
        .ach-stats {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        .ach-stat {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ach-stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          border-radius: var(--radius-sm);
          background: var(--primary-light);
          color: var(--primary-dark);
        }

        .ach-stat-text { display: flex; flex-direction: column; gap: 1px; }

        .ach-stat-value {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--primary-dark);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .ach-stat-label {
          font-size: 0.74rem;
          color: var(--text-light);
          font-weight: 500;
        }

        .ach-stat-divider {
          width: 1px;
          height: 30px;
          background: var(--border);
        }

        @media (prefers-reduced-motion: reduce) {
          .ach-btn-primary:hover,
          .ach-btn-primary:hover .ach-btn-arrow { transform: none; }
        }

        /* ── Tablet ── */
        @media (max-width: 980px) {
          .ach-root { padding: 96px 22px 80px; min-height: 600px; }
          .ach-scrim {
            background:
              linear-gradient(180deg,
                var(--bg-light) 0%,
                color-mix(in srgb, var(--bg-light) 90%, transparent) 40%,
                color-mix(in srgb, var(--bg-light) 60%, transparent) 68%,
                color-mix(in srgb, var(--bg-light) 20%, transparent) 100%
              );
          }
          .ach-content { max-width: 100%; text-align: center; margin: 0 auto; }
          .ach-description { margin-left: auto; margin-right: auto; }
          .ach-buttons { justify-content: center; }
          .ach-trust { text-align: center; }
          .ach-stats { justify-content: center; }
        }

        /* ── Mobile ── */
        @media (max-width: 576px) {
          .ach-root { padding: 84px 18px 72px; min-height: 560px; }
          .ach-title { font-size: 2rem; }
          .ach-description { font-size: 0.95rem; }
          .ach-buttons { flex-direction: column; width: 100%; }
          .ach-btn-primary, .ach-btn-secondary { justify-content: center; width: 100%; }
          .ach-trust { margin-bottom: 28px; }
          .ach-stats { gap: 14px; justify-content: space-between; width: 100%; }
          .ach-stat { flex-direction: column; align-items: center; text-align: center; gap: 6px; }
          .ach-stat-text { align-items: center; }
          .ach-stat-divider { display: none; }
        }
      `}</style>
    </section>
  );
}

export default AccommodationHero;