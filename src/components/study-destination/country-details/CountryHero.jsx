import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock3,
  CalendarDays,
  IndianRupee,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function CountryHero({ destination, details }) {
  const { name, flag, code, tagline, image, duration, intake, avgCost, visaRate, topFields } =
    destination;

  const stats = [
    { icon: Clock3, label: "Duration", value: duration, accent: "var(--accent-blue)" },
    { icon: CalendarDays, label: "Next intake", value: intake, accent: "var(--accent-green)" },
    { icon: IndianRupee, label: "Total cost", value: avgCost, accent: "var(--secondary)" },
    { icon: ShieldCheck, label: "Visa success", value: visaRate, accent: "var(--accent-pink)" },
  ];

  return (
    <section className="ctry-hero">
      {/* Background */}
      <div className="ctry-hero__bg">
        <img src={image} alt={name} className="ctry-hero__img" />
        <div className="ctry-hero__scrim" />
      </div>

      {/* Signature: oversized ghost country code */}
      <span className="ctry-hero__ghost" aria-hidden="true">
        {code}
      </span>

      {/* Top bar */}
      <div className="ctry-hero__top">
        <Link to="/study-destination" className="ctry-hero__back">
          <ArrowLeft size={16} />
          <span>All destinations</span>
        </Link>

        {details?.heroStamp && (
          <div className="ctry-hero__badge">
            <Sparkles size={13} />
            <span>{details.heroStamp}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="ctry-hero__body">
        <motion.div
          className="ctry-hero__intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ctry-hero__eyebrow">
            <span className="ctry-hero__flag">{flag}</span>
            <span>Study destination</span>
          </div>
          <h1>{name}</h1>
          <p>{tagline}</p>

          <div className="ctry-hero__cta">
            <Link to="/apply" className="ctry-btn ctry-btn--primary">
              Start application
            </Link>
            <Link to="/contact" className="ctry-btn ctry-btn--ghost">
              Talk to a counselor
            </Link>
          </div>
        </motion.div>

        <motion.aside
          className="ctry-panel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="ctry-panel__head">
            <span>Snapshot</span>
          </div>

          <div className="ctry-panel__stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="ctry-panel__stat"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              >
                <s.icon size={16} style={{ color: s.accent }} />
                <div>
                  <span>{s.label}</span>
                  <strong>{s.value}</strong>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="ctry-panel__fields">
            <span className="ctry-panel__fields-label">Popular fields</span>
            <div className="ctry-panel__chips">
              {topFields.map((f) => (
                <span key={f} className="ctry-chip">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>

      <style>{`
        .ctry-hero {
          position: relative;
          font-family: var(--font-main);
          height: 92vh;
          min-height: 680px;
          max-height: 940px;
          overflow: hidden;
          color: var(--text-white);
        }

        /* Background */
        .ctry-hero__bg { position: absolute; inset: 0; z-index: 0; }
        .ctry-hero__img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ctry-hero__scrim {
          position: absolute; inset: 0;
          background:
            linear-gradient(180deg, rgba(17,24,34,0.55) 0%, rgba(17,24,34,0.28) 30%, rgba(17,24,34,0.35) 55%, rgba(17,24,34,0.92) 100%),
            linear-gradient(90deg, rgba(17,24,34,0.55) 0%, rgba(17,24,34,0.05) 45%, rgba(17,24,34,0.05) 60%, rgba(17,24,34,0.55) 100%);
        }

        /* Ghost signature type */
        .ctry-hero__ghost {
          position: absolute;
          top: -2.5vw;
          right: 2vw;
          z-index: 1;
          font-size: clamp(7rem, 19vw, 15rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.05em;
          color: rgba(255,255,255,0.07);
          pointer-events: none;
          user-select: none;
        }

        /* Top bar */
        .ctry-hero__top {
          position: relative; z-index: 2;
          display: flex; align-items: center; justify-content: space-between;
          padding: 28px 32px 0;
        }
        .ctry-hero__back {
          display: inline-flex; align-items: center; gap: 8px;
          color: var(--text-white); text-decoration: none;
          font-size: 0.85rem; font-weight: 500;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(8px);
          padding: 9px 16px; border-radius: var(--radius-lg);
          transition: var(--transition);
        }
        .ctry-hero__back:hover { background: rgba(255,255,255,0.2); }

        .ctry-hero__badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em;
          color: var(--text-white);
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(8px);
          padding: 8px 14px; border-radius: var(--radius-lg);
        }
        .ctry-hero__badge svg { color: var(--accent-pink); }

        /* Body layout */
        .ctry-hero__body {
          position: relative; z-index: 2;
          height: calc(100% - 84px);
          max-width: 1400px; margin: 0 auto;
          padding: 0 32px 56px;
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 48px;
        }

        .ctry-hero__intro { max-width: 620px; }

        .ctry-hero__eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.76rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.72);
          margin-bottom: 18px;
        }
        .ctry-hero__flag { font-size: 1.1rem; line-height: 1; }

        .ctry-hero__intro h1 {
          font-size: clamp(2.6rem, 5.4vw, 4.4rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 0.98;
          margin: 0 0 16px;
        }
        .ctry-hero__intro p {
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          font-weight: 400; line-height: 1.55;
          color: rgba(255,255,255,0.82);
          margin: 0 0 32px;
          max-width: 520px;
        }

        .ctry-hero__cta { display: flex; gap: 14px; flex-wrap: wrap; }
        .ctry-btn {
          font-family: var(--font-main);
          font-size: 0.92rem; font-weight: 600;
          padding: 14px 28px; border-radius: var(--radius-lg);
          text-decoration: none; text-align: center;
          transition: var(--transition);
          display: inline-flex; align-items: center; justify-content: center;
        }
        .ctry-btn--primary {
          background: var(--gradient-secondary); color: var(--text-white);
          box-shadow: var(--shadow-lg);
        }
        .ctry-btn--primary:hover { transform: translateY(-2px); }
        .ctry-btn--ghost {
          background: rgba(255,255,255,0.08); color: var(--text-white);
          border: 1.5px solid rgba(255,255,255,0.35);
          backdrop-filter: blur(8px);
        }
        .ctry-btn--ghost:hover { background: rgba(255,255,255,0.16); border-color: rgba(255,255,255,0.55); }

        /* Snapshot panel */
        .ctry-panel {
          flex-shrink: 0;
          width: 360px;
          background: rgba(17,24,34,0.58);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(22px);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          padding: 26px 26px 22px;
        }

        .ctry-panel__head {
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 18px;
        }

        .ctry-panel__stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 18px 16px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.14);
          margin-bottom: 18px;
        }
        .ctry-panel__stat { display: flex; align-items: flex-start; gap: 8px; }
        .ctry-panel__stat div { display: flex; flex-direction: column; }
        .ctry-panel__stat span {
          font-size: 0.68rem; color: rgba(255,255,255,0.55); font-weight: 500; margin-bottom: 3px;
        }
        .ctry-panel__stat strong { font-size: 0.94rem; font-weight: 700; color: var(--text-white); }

        .ctry-panel__fields-label {
          display: block;
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 10px;
        }
        .ctry-panel__chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .ctry-chip {
          font-size: 0.74rem; font-weight: 600; color: var(--text-white);
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          padding: 5px 12px; border-radius: var(--radius-sm);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .ctry-hero__body { flex-direction: column; align-items: stretch; gap: 28px; }
          .ctry-panel { width: 100%; }
          .ctry-hero { height: auto; min-height: 0; max-height: none; padding-bottom: 40px; }
          .ctry-hero__ghost { font-size: clamp(5rem, 24vw, 9rem); top: -1vw; }
        }

        @media (max-width: 640px) {
          .ctry-hero__top { padding: 22px 20px 0; }
          .ctry-hero__body { padding: 0 20px 40px; }
          .ctry-hero__bg { position: relative; height: 46vh; min-height: 320px; }
          .ctry-hero { height: auto; }
          .ctry-hero__scrim {
            background: linear-gradient(180deg, rgba(17,24,34,0.4) 0%, rgba(17,24,34,0.95) 100%);
          }
          .ctry-hero__ghost { display: none; }
          .ctry-panel__stats { grid-template-columns: 1fr 1fr; }
          .ctry-hero__cta { flex-direction: column; }
          .ctry-btn { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ctry-hero * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}