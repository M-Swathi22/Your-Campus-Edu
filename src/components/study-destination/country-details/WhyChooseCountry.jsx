import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap, Briefcase, FlaskConical, Building2, Clock3, Landmark,
  Globe2, IndianRupee, ShieldCheck, Users, Sun, Cog, Leaf, PlaneTakeoff, Cpu,
  MapPin, TrendingUp,
} from "lucide-react";

const ICONS = {
  GraduationCap, Briefcase, FlaskConical, Building2, Clock3, Landmark,
  Globe2, IndianRupee, ShieldCheck, Users, Sun, Cog, Leaf, PlaneTakeoff, Cpu,
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyChooseCountry({ destination, details }) {
  const { name } = destination;
  const { overview, highlights, costBreakdown, visaRate, workRights, prPathway, popularCities } = details;

  const visaRateNum = parseInt(visaRate, 10) || 0;

  return (
    <section className="wc-section">
      <div className="wc-inner">
        <div className="wc-head">
          <span className="wc-eyebrow">Why {name}</span>
          <h2>The case for {name}</h2>
          <p className="wc-overview">{overview}</p>
        </div>

        <motion.div
          className="wc-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((h) => {
            const Icon = ICONS[h.icon] || GraduationCap;
            return (
              <motion.div className="wc-card" key={h.title} variants={cardVariants}>
                <div className="wc-card__icon">
                  <Icon size={20} />
                </div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="wc-stats"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="wc-stat wc-stat--cost">
            <span className="wc-stat__label">Cost breakdown</span>
            <div className="wc-cost-rows">
              <div className="wc-cost-row">
                <span>Tuition</span>
                <strong>{costBreakdown.tuition}</strong>
              </div>
              <div className="wc-cost-row">
                <span>Living</span>
                <strong>{costBreakdown.living}</strong>
              </div>
              <div className="wc-cost-row wc-cost-row--total">
                <span>Total</span>
                <strong>{costBreakdown.total}</strong>
              </div>
            </div>
          </div>

          <div className="wc-stat wc-stat--visa">
            <span className="wc-stat__label">Visa success rate</span>
            <div
              className="wc-ring"
              style={{ "--pct": `${visaRateNum}%` }}
            >
              <span>{visaRate}</span>
            </div>
          </div>

          <div className="wc-stat wc-stat--info">
            <span className="wc-stat__label">
              <Briefcase size={13} /> Work rights
            </span>
            <p>{workRights}</p>
            <span className="wc-stat__label" style={{ marginTop: 14 }}>
              <TrendingUp size={13} /> PR pathway
            </span>
            <p>{prPathway}</p>
          </div>

          <div className="wc-stat wc-stat--cities">
            <span className="wc-stat__label">
              <MapPin size={13} /> Popular cities
            </span>
            <div className="wc-city-chips">
              {popularCities.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .wc-section { background: var(--bg-main); padding: 88px 0 60px; font-family: var(--font-main); }
        .wc-inner { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

        .wc-head { max-width: 680px; margin-bottom: 48px; }
        .wc-eyebrow {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--secondary); display: block; margin-bottom: 10px;
        }
        .wc-head h2 {
          font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 800;
          color: var(--text-dark); letter-spacing: -0.02em; margin: 0 0 14px;
        }
        .wc-overview { color: var(--text-medium); font-size: 1rem; line-height: 1.7; margin: 0; }

        .wc-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px;
          margin-bottom: 40px;
        }
        .wc-card {
          background: var(--bg-section);
          border-radius: var(--radius-lg);
          padding: 26px 22px;
          border: 1px solid transparent;
          transition: var(--transition);
        }
        .wc-card:hover { border-color: var(--primary); background: var(--primary-light); }
        .wc-card__icon {
          width: 42px; height: 42px; border-radius: var(--radius-md);
          background: var(--gradient-primary);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-white); margin-bottom: 16px;
        }
        .wc-card h3 { font-size: 0.98rem; font-weight: 700; color: var(--text-dark); margin: 0 0 8px; }
        .wc-card p { font-size: 0.85rem; color: var(--text-medium); line-height: 1.55; margin: 0; }

        .wc-stats {
          display: grid; grid-template-columns: 1.1fr 0.8fr 1fr 1fr; gap: 16px;
        }
        .wc-stat {
          background: var(--bg-section); border-radius: var(--radius-lg);
          padding: 22px; display: flex; flex-direction: column;
        }
        .wc-stat__label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-light); display: flex; align-items: center; gap: 6px; margin-bottom: 14px;
        }

        .wc-cost-rows { display: flex; flex-direction: column; gap: 8px; }
        .wc-cost-row { display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-medium); }
        .wc-cost-row strong { color: var(--text-dark); font-weight: 700; }
        .wc-cost-row--total { border-top: 1px dashed var(--border); padding-top: 8px; margin-top: 2px; }
        .wc-cost-row--total strong { color: var(--primary); }

        .wc-stat--visa { align-items: center; justify-content: center; }
        .wc-ring {
          width: 88px; height: 88px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: conic-gradient(var(--accent-green) var(--pct), var(--border) 0);
          position: relative;
        }
        .wc-ring::before {
          content: ""; position: absolute; inset: 8px; border-radius: 50%; background: var(--bg-section);
        }
        .wc-ring span { position: relative; z-index: 1; font-weight: 800; font-size: 1.05rem; color: var(--primary-dark); }

        .wc-stat--info p { font-size: 0.85rem; color: var(--text-dark); line-height: 1.5; margin: 0; font-weight: 500; }

        .wc-city-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .wc-city-chips span {
          font-size: 0.78rem; font-weight: 600; color: var(--primary-dark);
          background: var(--primary-light); padding: 5px 11px; border-radius: var(--radius-sm);
        }

        @media (max-width: 1024px) {
          .wc-grid { grid-template-columns: repeat(2, 1fr); }
          .wc-stats { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .wc-grid { grid-template-columns: 1fr; }
          .wc-stats { grid-template-columns: 1fr; }
          .wc-stat--visa { flex-direction: row; gap: 16px; justify-content: flex-start; }
        }
      `}</style>
    </section>
  );
}