import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { TicketCheck, Sparkles, Calculator, ArrowRight } from "lucide-react";

const CollegeCTA = ({ state, city }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="college-cta">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="college-cta__counter"
        >
          <div className="college-cta__window">
            <div className="college-cta__badge">
              <TicketCheck size={16} strokeWidth={2.25} />
              <span>BOOKING COUNTER OPEN</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-main)", fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginTop: "0.6rem" }}>
              Still deciding between colleges in {city.name}?
            </h2>
            <p style={{ fontFamily: "var(--font-main)", fontSize: "clamp(0.9rem, 1.4vw, 1rem)", color: "rgba(255,255,255,0.82)", maxWidth: "32rem", marginTop: "0.6rem" }}>
              Let our AI tools match your budget, eligibility and goals against every college in {state.name} — no guesswork required.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/tools/compare-colleges" className="college-cta__btn college-cta__btn--primary">
                <Sparkles size={15} strokeWidth={2.25} />
                Compare Colleges with AI
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
              <Link to="/tools/budget-calculator" className="college-cta__btn college-cta__btn--ghost">
                <Calculator size={15} strokeWidth={2.25} />
                Estimate My Budget
              </Link>
            </div>
          </div>

          <div className="college-cta__stub">
            <span className="college-cta__stub-label">DESTINATION</span>
            <span className="college-cta__stub-value">{city.name.toUpperCase()}</span>
            <span className="college-cta__stub-label" style={{ marginTop: "0.8rem" }}>STATE</span>
            <span className="college-cta__stub-value">{state.code}</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .college-cta { background: var(--page-bg, #f7f5fb); }
        .college-cta__counter { position: relative; display: flex; flex-wrap: wrap; background: var(--primary-dark, #24144f); border-radius: 22px; overflow: hidden; box-shadow: 0 24px 60px rgba(36, 20, 79, 0.25); }
        .college-cta__window { flex: 1; min-width: 18rem; padding: 2.4rem; }
        .college-cta__badge { display: inline-flex; align-items: center; gap: 0.4rem; font-family: monospace; font-size: 0.68rem; letter-spacing: 0.12em; color: var(--accent-green, #35d48c); border: 1px solid color-mix(in srgb, var(--accent-green, #35d48c) 45%, transparent); padding: 0.3rem 0.7rem; border-radius: 999px; }
        .college-cta__btn { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.7rem 1.3rem; border-radius: 999px; font-family: var(--font-main); font-size: 0.85rem; font-weight: 600; transition: transform 0.2s ease, opacity 0.2s ease; }
        .college-cta__btn:hover { transform: translateY(-2px); }
        .college-cta__btn--primary { background: #fff; color: var(--primary-dark, #24144f); }
        .college-cta__btn--ghost { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.35); }
        .college-cta__stub { width: 11rem; display: flex; flex-direction: column; justify-content: center; padding: 2rem 1.6rem; border-left: 2px dashed rgba(255,255,255,0.25); background: rgba(255,255,255,0.04); }
        .college-cta__stub-label { font-family: monospace; font-size: 0.62rem; letter-spacing: 0.14em; color: rgba(255,255,255,0.55); }
        .college-cta__stub-value { font-family: monospace; font-size: 1.3rem; font-weight: 700; color: #fff; letter-spacing: 0.04em; margin-top: 0.15rem; }
        @media (max-width: 640px) {
          .college-cta__stub { width: 100%; flex-direction: row; gap: 1.5rem; border-left: none; border-top: 2px dashed rgba(255,255,255,0.25); }
        }
      `}</style>
    </section>
  );
};

export default CollegeCTA;