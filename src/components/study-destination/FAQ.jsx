import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PlaneTakeoff, ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    gate: "G01",
    q: "How does Your Campus Edu help me choose the right course?",
    a: "Our AI Course Match tool analyzes your academic background, budget, and career goals against thousands of programs to shortlist the ones that genuinely fit — then our counsellors refine that list with you in a one-on-one session.",
  },
  {
    gate: "G02",
    q: "Do you help with both domestic and study-abroad applications?",
    a: "Yes. Whether you're targeting a top Indian university or an international one, our tools and counsellors cover eligibility checks, budgeting, college comparisons, and country-fit guidance for both tracks.",
  },
  {
    gate: "G03",
    q: "How accurate is the Eligibility Checker?",
    a: "It cross-references your academic scores, test results, and target programs against live admission criteria, giving you a realistic verdict — safe, moderate, or reach — before you invest time in an application.",
  },
  {
    gate: "G04",
    q: "What does the Budget Calculator actually estimate?",
    a: "Tuition, living costs, visa fees, insurance, and travel — broken down by country and city — so you get a real total cost of attendance instead of just the headline tuition number.",
  },
  {
    gate: "G05",
    q: "Is there a fee for the initial consultation?",
    a: "No. Your first consultation, eligibility check, and course match report are completely free. You only engage our paid services once you decide to move forward with an application.",
  },
  {
    gate: "G06",
    q: "What's your visa success rate?",
    a: "We maintain a 98% visa success rate, built on meticulous documentation review, mock interviews, and country-specific guidance tailored to each student's profile.",
  },
];

function FaqRow({ item, index, isOpen, onToggle }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`fb-row ${isOpen ? "fb-row--open" : ""}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
    >
      <button className="fb-row__head" onClick={onToggle} aria-expanded={isOpen}>
        <span className="fb-cell fb-cell--gate">{item.gate}</span>
        <span className="fb-cell fb-cell--dest">{item.q}</span>
        <span className={`fb-status ${isOpen ? "fb-status--open" : ""}`}>
          <span className="fb-status__dot" />
          {isOpen ? "Open" : "Closed"}
        </span>
        <span className={`fb-chevron ${isOpen ? "fb-chevron--open" : ""}`}>
          <ChevronDown size={18} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="fb-row__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="fb-answer">
              <div className="fb-answer__icon">
                <PlaneTakeoff size={15} />
              </div>
              <p className="fb-answer__text">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="fb-root">
      <div className="fb-container">
        <motion.div
          className="fb-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="fb-eyebrow">Information Desk</span>
          <h2 className="fb-headline">
            <span className="fb-headline-dark">Frequently Asked</span>{" "}
            <span className="fb-headline-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="fb-board">
          <div className="fb-board__cols">
            <span className="fb-col-label fb-col-label--gate">Gate</span>
            <span className="fb-col-label fb-col-label--dest">Question</span>
            <span className="fb-col-label fb-col-label--status">Status</span>
            <span />
          </div>

          <div className="fb-board__rows">
            {FAQ_DATA.map((item, i) => (
              <FaqRow
                key={item.gate}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .fb-root {
          position: relative;
          padding: 100px 24px;
          background: var(--bg-main);
          font-family: var(--font-main);
        }

        .fb-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* ---------- Heading ---------- */

        .fb-heading {
          text-align: center;
          margin-bottom: 44px;
        }

        .fb-eyebrow {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 999px;
          background: var(--primary-light);
          color: var(--primary);
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 18px;
        }

        .fb-headline {
          font-size: clamp(1.9rem, 3.4vw, 2.7rem);
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .fb-headline-dark {
          color: var(--primary-dark);
        }

        .fb-headline-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ---------- Board shell ---------- */

        .fb-board {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }

        .fb-board__cols {
          display: grid;
          grid-template-columns: 76px 1fr 100px 32px;
          gap: 16px;
          padding: 16px 24px;
          background: var(--primary-light);
          border-bottom: 1px solid var(--border);
        }

        .fb-col-label {
          color: var(--primary);
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .fb-board__rows {
          padding: 6px 10px;
        }

        /* ---------- Row ---------- */

        .fb-row {
          border-bottom: 1px solid var(--border);
        }

        .fb-row:last-child {
          border-bottom: none;
        }

        .fb-row--open {
          background: var(--bg-section);
          border-radius: var(--radius-md);
          border-bottom-color: transparent;
        }

        .fb-row__head {
          width: 100%;
          display: grid;
          grid-template-columns: 76px 1fr 100px 32px;
          align-items: center;
          gap: 16px;
          padding: 18px 14px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-main);
        }

        .fb-cell--gate {
          font-size: 0.92rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: 0.03em;
        }

        .fb-cell--dest {
          font-size: 0.98rem;
          font-weight: 600;
          color: var(--primary-dark);
          line-height: 1.4;
        }

        .fb-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          justify-self: start;
          padding: 5px 12px;
          border-radius: 999px;
          background: var(--bg-section);
          color: var(--text-light);
          font-size: 0.7rem;
          font-weight: 700;
        }

        .fb-status__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        .fb-status--open {
          background: color-mix(in srgb, var(--accent-green) 16%, transparent);
          color: var(--accent-green);
        }

        .fb-chevron {
          color: var(--text-light);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .fb-chevron--open {
          color: var(--accent-green);
          transform: rotate(180deg);
        }

        /* ---------- Answer ---------- */

        .fb-row__body {
          overflow: hidden;
        }

        .fb-answer {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 4px 24px 20px 14px;
        }

        .fb-answer__icon {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 76px;
        }

        .fb-answer__text {
          color: var(--text-medium);
          font-size: 0.94rem;
          line-height: 1.75;
        }

        /* ---------- Responsive ---------- */

        @media (max-width: 768px) {
          .fb-board__cols {
            display: none;
          }

          .fb-row__head {
            grid-template-columns: 52px 1fr 26px;
            grid-template-areas:
              "gate dest chev"
              "status status status";
            row-gap: 10px;
            padding: 16px 12px;
          }

          .fb-cell--gate { grid-area: gate; }
          .fb-cell--dest { grid-area: dest; font-size: 0.92rem; }
          .fb-chevron { grid-area: chev; }
          .fb-status { grid-area: status; justify-self: start; }

          .fb-answer {
            padding: 4px 16px 18px 12px;
          }

          .fb-answer__icon {
            margin-left: 0;
          }
        }

        @media (max-width: 480px) {
          .fb-root {
            padding: 70px 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fb-chevron {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

export default FaqSection;