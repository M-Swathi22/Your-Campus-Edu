import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Landmark, MapPin, GraduationCap } from "lucide-react";
import heroBg from "../../assets/images/studyindia_hero.png";

const STATS = [
  { icon: Landmark, value: "1,400+", label: "Institutes Mapped" },
  { icon: MapPin, value: "28", label: "States Covered" },
  { icon: GraduationCap, value: "72%", label: "Avg. Cost vs Abroad" },
];

function StudyIndiaHero() {
  return (
    <section className="sih-root">
      <div className="sih-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="sih-scrim" />

      <div className="sih-container">
        <div className="sih-content">
          <motion.div
            className="sih-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="sih-badge-dot" />
            Domestic Admissions Desk · Coimbatore
          </motion.div>

          <motion.h1
            className="sih-title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="sih-title-line">Every state.</span>
            <span className="sih-title-accent">One campus search.</span>
          </motion.h1>

          <motion.p
            className="sih-description"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            Compare NIRF-ranked colleges, real fee ranges, and placement
            data across every state — built for students who want a
            world-class degree without leaving home.
          </motion.p>

          <motion.div
            className="sih-buttons"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            <a href="/study-india/colleges" className="sih-btn-primary">
              Explore Colleges
              <ArrowRight size={18} className="sih-btn-arrow" />
            </a>
            <a href="/ai-tools/country-fit-quiz" className="sih-btn-secondary">
              Take the Fit Quiz
            </a>
          </motion.div>

          <motion.p
            className="sih-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.36 }}
          >
            No fees for your first consultation
          </motion.p>

          <motion.div
            className="sih-stats"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
          >
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="sih-stat">
                  <div className="sih-stat-icon">
                    <s.icon size={16} />
                  </div>
                  <div className="sih-stat-text">
                    <span className="sih-stat-value">{s.value}</span>
                    <span className="sih-stat-label">{s.label}</span>
                  </div>
                </div>
                {i < STATS.length - 1 && <span className="sih-stat-divider" />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .sih-root {
          position: relative;
          overflow: hidden;
          min-height: 680px;
          display: flex;
          align-items: center;
          padding: 150px 24px 90px;
          background: var(--bg-light);
          font-family: var(--font-main);
        }

        .sih-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .sih-scrim {
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

        .sih-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        .sih-content { text-align: left; max-width: 570px; }

        .sih-badge {
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

        .sih-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          flex-shrink: 0;
        }

        .sih-title {
          display: flex;
          flex-direction: column;
          font-size: clamp(2.15rem, 3.8vw, 3.5rem);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.02em;
          color: var(--primary-dark);
          margin-bottom: 22px;
        }

        .sih-title-line { display: block; }

        .sih-title-accent {
          display: block;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sih-description {
          color: var(--text-medium);
          line-height: 1.75;
          font-size: 1.05rem;
          max-width: 460px;
          margin-bottom: 30px;
        }

        .sih-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }

        .sih-btn-primary {
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

        .sih-btn-primary:hover { background: var(--primary); transform: translateY(-2px); }
        .sih-btn-primary:hover .sih-btn-arrow { transform: translateX(3px); }

        .sih-btn-arrow { transition: var(--transition); }

        .sih-btn-secondary {
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

        .sih-btn-secondary:hover { border-color: var(--primary); color: var(--primary); }

        .sih-btn-primary:focus-visible,
        .sih-btn-secondary:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 3px;
        }

        .sih-trust {
          font-size: 0.82rem;
          color: var(--text-light);
          font-weight: 500;
          margin-bottom: 36px;
        }

        /* Stats */
        .sih-stats {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        .sih-stat {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sih-stat-icon {
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

        .sih-stat-text { display: flex; flex-direction: column; gap: 1px; }

        .sih-stat-value {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--primary-dark);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .sih-stat-label {
          font-size: 0.74rem;
          color: var(--text-light);
          font-weight: 500;
        }

        .sih-stat-divider {
          width: 1px;
          height: 30px;
          background: var(--border);
        }

        @media (prefers-reduced-motion: reduce) {
          .sih-btn-primary:hover,
          .sih-btn-primary:hover .sih-btn-arrow { transform: none; }
        }

        /* ── Tablet ── */
        @media (max-width: 980px) {
          .sih-root { padding: 130px 22px 80px; min-height: 600px; }
          .sih-scrim {
            background:
              linear-gradient(180deg,
                var(--bg-light) 0%,
                color-mix(in srgb, var(--bg-light) 90%, transparent) 40%,
                color-mix(in srgb, var(--bg-light) 60%, transparent) 68%,
                color-mix(in srgb, var(--bg-light) 20%, transparent) 100%
              );
          }
          .sih-content { max-width: 100%; text-align: center; margin: 0 auto; }
          .sih-description { margin-left: auto; margin-right: auto; }
          .sih-buttons { justify-content: center; }
          .sih-trust { text-align: center; }
          .sih-stats { justify-content: center; }
        }

        /* ── Mobile ── */
        @media (max-width: 576px) {
          .sih-root { padding: 112px 18px 72px; min-height: 560px; }
          .sih-title { font-size: 2rem; }
          .sih-description { font-size: 0.95rem; }
          .sih-buttons { flex-direction: column; width: 100%; }
          .sih-btn-primary, .sih-btn-secondary { justify-content: center; width: 100%; }
          .sih-trust { margin-bottom: 28px; }
          .sih-stats { gap: 14px; justify-content: space-between; width: 100%; }
          .sih-stat { flex-direction: column; align-items: center; text-align: center; gap: 6px; }
          .sih-stat-text { align-items: center; }
          .sih-stat-divider { display: none; }
        }
      `}</style>
    </section>
  );
}

export default StudyIndiaHero;