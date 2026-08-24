import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Users, GraduationCap } from "lucide-react";
import heroBg from "../../assets/images/studydestination_hero.png";

const STATS = [
  { icon: Globe2, value: "15+", label: "Destinations" },
  { icon: Users, value: "1,000+", label: "Students Placed" },
  { icon: GraduationCap, value: "50+", label: "Partner Universities" },
];

function Hero() {
  return (
    <section className="sdh-root">
      <div className="sdh-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="sdh-scrim" />

      <div className="sdh-container">
        <div className="sdh-content">
          <motion.div
            className="sdh-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="sdh-badge-dot" />
            Study Abroad Consultancy · Coimbatore
          </motion.div>

          <motion.h1
            className="sdh-title"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <span className="sdh-title-line">Study in the country</span>
            <span className="sdh-title-line">that's actually</span>
            <span className="sdh-title-accent">right for you</span>
          </motion.h1>

          <motion.p
            className="sdh-description"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            Get matched with the right country and universities across 15+
            destinations, backed by counsellors who've guided a thousand
            students before you.
          </motion.p>

          <motion.div
            className="sdh-buttons"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            <a href="/ai-tools/country-match" className="sdh-btn-primary">
              Find My Country
              <ArrowRight size={18} className="sdh-btn-arrow" />
            </a>
            <a href="/contact" className="sdh-btn-secondary">
              Book Free Consultation
            </a>
          </motion.div>

          <motion.p
            className="sdh-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.36 }}
          >
            No fees for your first consultation
          </motion.p>

          <motion.div
            className="sdh-stats"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
          >
            {STATS.map((s, i) => (
              <React.Fragment key={s.label}>
                <div className="sdh-stat">
                  <div className="sdh-stat-icon">
                    <s.icon size={16} />
                  </div>
                  <div className="sdh-stat-text">
                    <span className="sdh-stat-value">{s.value}</span>
                    <span className="sdh-stat-label">{s.label}</span>
                  </div>
                </div>
                {i < STATS.length - 1 && <span className="sdh-stat-divider" />}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .sdh-root {
          position: relative;
          overflow: hidden;
          min-height: 680px;
          display: flex;
          align-items: center;
          padding: 150px 24px 90px;
          background: var(--bg-light);
          font-family: var(--font-main);
        }

        .sdh-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .sdh-scrim {
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

        .sdh-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        .sdh-content { text-align: left; max-width: 570px; }

        .sdh-badge {
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

        .sdh-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          flex-shrink: 0;
        }

        .sdh-title {
          display: flex;
          flex-direction: column;
          font-size: clamp(2.15rem, 3.8vw, 3.5rem);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.02em;
          color: var(--primary-dark);
          margin-bottom: 22px;
        }

        .sdh-title-line { display: block; }

        .sdh-title-accent {
          display: block;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sdh-description {
          color: var(--text-medium);
          line-height: 1.75;
          font-size: 1.05rem;
          max-width: 460px;
          margin-bottom: 30px;
        }

        .sdh-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }

        .sdh-btn-primary {
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

        .sdh-btn-primary:hover { background: var(--primary); transform: translateY(-2px); }
        .sdh-btn-primary:hover .sdh-btn-arrow { transform: translateX(3px); }

        .sdh-btn-arrow { transition: var(--transition); }

        .sdh-btn-secondary {
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

        .sdh-btn-secondary:hover { border-color: var(--primary); color: var(--primary); }

        .sdh-btn-primary:focus-visible,
        .sdh-btn-secondary:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 3px;
        }

        .sdh-trust {
          font-size: 0.82rem;
          color: var(--text-light);
          font-weight: 500;
          margin-bottom: 36px;
        }

        /* Stats */
        .sdh-stats {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        .sdh-stat {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sdh-stat-icon {
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

        .sdh-stat-text { display: flex; flex-direction: column; gap: 1px; }

        .sdh-stat-value {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--primary-dark);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .sdh-stat-label {
          font-size: 0.74rem;
          color: var(--text-light);
          font-weight: 500;
        }

        .sdh-stat-divider {
          width: 1px;
          height: 30px;
          background: var(--border);
        }

        @media (prefers-reduced-motion: reduce) {
          .sdh-btn-primary:hover,
          .sdh-btn-primary:hover .sdh-btn-arrow { transform: none; }
        }

        /* ── Tablet ── */
        @media (max-width: 980px) {
          .sdh-root { padding: 130px 22px 80px; min-height: 600px; }
          .sdh-scrim {
            background:
              linear-gradient(180deg,
                var(--bg-light) 0%,
                color-mix(in srgb, var(--bg-light) 90%, transparent) 40%,
                color-mix(in srgb, var(--bg-light) 60%, transparent) 68%,
                color-mix(in srgb, var(--bg-light) 20%, transparent) 100%
              );
          }
          .sdh-content { max-width: 100%; text-align: center; margin: 0 auto; }
          .sdh-description { margin-left: auto; margin-right: auto; }
          .sdh-buttons { justify-content: center; }
          .sdh-trust { text-align: center; }
          .sdh-stats { justify-content: center; }
        }

        /* ── Mobile ── */
        @media (max-width: 576px) {
          .sdh-root { padding: 112px 18px 72px; min-height: 560px; }
          .sdh-title { font-size: 2rem; }
          .sdh-description { font-size: 0.95rem; }
          .sdh-buttons { flex-direction: column; width: 100%; }
          .sdh-btn-primary, .sdh-btn-secondary { justify-content: center; width: 100%; }
          .sdh-trust { margin-bottom: 28px; }
          .sdh-stats { gap: 14px; justify-content: space-between; width: 100%; }
          .sdh-stat { flex-direction: column; align-items: center; text-align: center; gap: 6px; }
          .sdh-stat-text { align-items: center; }
          .sdh-stat-divider { display: none; }
        }
      `}</style>
    </section>
  );
}

export default Hero;