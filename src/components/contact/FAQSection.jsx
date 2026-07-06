import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Is the counselling session really free?",
    a: "Yes. Your first session, and every session needed to build your shortlist, is free. We only get involved commercially once you decide to move forward with an application.",
  },
  {
    q: "Do you help with both Indian colleges and study abroad?",
    a: "Both. Tell us your goals and we'll route you to the right specialist, whether that's a domestic admissions counsellor or a country-specific study abroad advisor.",
  },
  {
    q: "How soon after I submit the form will I hear back?",
    a: "Within 24 hours on working days. If you book a specific boarding time slot above, we'll confirm that exact slot directly.",
  },
  {
    q: "What documents should I have ready before the call?",
    a: "Nothing is required upfront. If you already have transcripts, test scores, or a target country in mind, bring them along, but they're not mandatory for the first conversation.",
  },
  {
    q: "Can parents join the counselling call?",
    a: "Absolutely. Most families prefer it. Just mention it while booking your slot and we'll plan the call accordingly.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="fq-root">
      <div className="fq-head">
        <span className="fq-tag">FREQUENTLY ASKED</span>
        <h2 className="fq-title">Before you check in</h2>
      </div>

      <div className="fq-list">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div className={`fq-item ${isOpen ? "is-open" : ""}`} key={item.q}>
              <button
                className="fq-question"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <Plus size={18} className="fq-icon" />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="fq-answer-wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                  >
                    <p className="fq-answer">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <style>{`
        .fq-root {
          background: var(--bg-section);
          padding: clamp(64px, 9vw, 110px) clamp(20px, 6vw, 80px);
        }

        .fq-head {
          text-align: center;
          margin-bottom: clamp(32px, 5vw, 48px);
        }

        .fq-tag {
          display: inline-block;
          font-family: var(--font-main);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .fq-title {
          font-family: var(--font-main);
          font-weight: 700;
          font-size: clamp(1.7rem, 3vw, 2.3rem);
          color: var(--text-dark);
          margin: 0;
        }

        .fq-list {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .fq-item {
          border-bottom: 1px solid var(--border);
        }

        .fq-item:first-child { border-top: 1px solid var(--border); }

        .fq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 20px 4px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-main);
          font-size: 15.5px;
          font-weight: 600;
          color: var(--text-dark);
        }

        .fq-icon {
          flex-shrink: 0;
          color: var(--primary);
          transition: transform 0.25s ease;
        }

        .fq-item.is-open .fq-icon { transform: rotate(45deg); }

        .fq-answer-wrap { overflow: hidden; }

        .fq-answer {
          font-family: var(--font-main);
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--text-medium);
          padding: 0 4px 20px;
          margin: 0;
          max-width: 600px;
        }
      `}</style>
    </section>
  );
}