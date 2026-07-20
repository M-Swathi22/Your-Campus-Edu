import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, PlaneTakeoff, MessageCircle } from "lucide-react";

export default function CountryCTA({ destination, details }) {
  const { name } = destination;
  const { visaSteps, eligibility } = details;

  return (
    <>
      <section className="cc-roadmap">
        <div className="cc-inner">
          <div className="cc-head">
            <span className="cc-eyebrow">Before you board</span>
            <h2>Your {name} visa roadmap</h2>
          </div>

          <div className="cc-steps">
            {visaSteps.map((s, i) => (
              <motion.div
                className="cc-step"
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <div className="cc-step__num">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < visaSteps.length - 1 && <div className="cc-step__line" />}
              </motion.div>
            ))}
          </div>

          <div className="cc-eligibility">
            <span className="cc-eligibility__label">What you'll need</span>
            <div className="cc-eligibility__list">
              {eligibility.map((e) => (
                <div className="cc-eligibility__item" key={e}>
                  <CheckCircle2 size={16} />
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cc-banner">
        <div className="cc-banner__inner">
          <PlaneTakeoff size={30} className="cc-banner__icon" />
          <h2>Ready to book your seat to {name}?</h2>
          <p>Our counselors map your shortlist, applications and visa filing into one timeline — start whenever you're ready.</p>
          <div className="cc-banner__actions">
            <Link to="/apply" className="cc-btn cc-btn--light">
              Start application
            </Link>
            <Link to="/contact" className="cc-btn cc-btn--outline">
              <MessageCircle size={16} />
              Talk to a counselor
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .cc-roadmap { background: var(--bg-main); padding: 72px 0; font-family: var(--font-main); }
        .cc-inner { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

        .cc-head { margin-bottom: 44px; }
        .cc-eyebrow {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--secondary); display: block; margin-bottom: 10px;
        }
        .cc-head h2 {
          font-size: clamp(1.6rem, 3.2vw, 2.2rem); font-weight: 800;
          color: var(--text-dark); letter-spacing: -0.02em; margin: 0;
        }

        .cc-steps {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
          margin-bottom: 48px;
        }
        .cc-step { position: relative; }
        .cc-step__num {
          font-size: 0.9rem; font-weight: 800; color: var(--text-white);
          background: var(--gradient-secondary);
          width: 36px; height: 36px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px; position: relative; z-index: 1;
        }
        .cc-step__line {
          position: absolute; top: 18px; left: 36px; right: -24px; height: 0;
          border-top: 1.5px dashed var(--border);
        }
        .cc-step h3 { font-size: 0.95rem; font-weight: 700; color: var(--text-dark); margin: 0 0 6px; }
        .cc-step p { font-size: 0.83rem; color: var(--text-medium); line-height: 1.55; margin: 0; }

        .cc-eligibility {
          background: var(--bg-section); border-radius: var(--radius-lg); padding: 28px;
        }
        .cc-eligibility__label {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-light); display: block; margin-bottom: 16px;
        }
        .cc-eligibility__list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; }
        .cc-eligibility__item {
          display: flex; align-items: flex-start; gap: 9px;
          font-size: 0.87rem; color: var(--text-dark); font-weight: 500; line-height: 1.4;
        }
        .cc-eligibility__item svg { color: var(--accent-green); flex-shrink: 0; margin-top: 1px; }

        .cc-banner {
          background: var(--gradient-secondary);
          padding: 80px 24px;
          position: relative; overflow: hidden;
        }
        .cc-banner::before {
          content: ""; position: absolute; inset: 0;
          background: radial-gradient(600px 300px at 85% 20%, rgba(255,255,255,0.08), transparent);
        }
        .cc-banner__inner {
          max-width: 640px; margin: 0 auto; text-align: center; position: relative; z-index: 1;
        }
        .cc-banner__icon { color: var(--text-white); opacity: 0.85; margin-bottom: 18px; transform: rotate(45deg); }
        .cc-banner__inner h2 {
          font-size: clamp(1.6rem, 3.4vw, 2.3rem); font-weight: 800; color: var(--text-white);
          letter-spacing: -0.02em; margin: 0 0 14px;
        }
        .cc-banner__inner p {
          color: rgba(255,255,255,0.82); font-size: 0.98rem; line-height: 1.6; margin: 0 0 32px;
        }
        .cc-banner__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .cc-btn {
          font-family: var(--font-main); font-size: 0.92rem; font-weight: 600;
          padding: 13px 28px; border-radius: var(--radius-lg);
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          transition: var(--transition);
        }
        .cc-btn--light { background: var(--text-white); color: var(--primary-dark); }
        .cc-btn--light:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }
        .cc-btn--outline { background: transparent; color: var(--text-white); border: 1.5px solid rgba(255,255,255,0.4); }
        .cc-btn--outline:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.7); }

        @media (max-width: 900px) {
          .cc-steps { grid-template-columns: 1fr 1fr; row-gap: 32px; }
          .cc-step__line { display: none; }
          .cc-eligibility__list { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .cc-steps { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}