import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PlaneTakeoff, MessageCircle } from "lucide-react";

const faqs = [
  {
    tag: "Q1",
    color: "var(--primary)",
    question: "Which documents do I need to apply to an Indian college?",
    answer:
      "You'll typically need your 10th & 12th mark sheets, transfer/migration certificate, entrance exam scorecard (if applicable), Aadhaar or passport, and passport-size photos. Our Eligibility Checker tells you the exact list for your target course in under a minute.",
  },
  {
    tag: "Q2",
    color: "var(--secondary)",
    question: "How do I know which state fits my course and budget?",
    answer:
      "Every state has a different specialization and cost of living — Karnataka leans tech, Tamil Nadu leans engineering & medical. Use the Budget Calculator alongside our state cards to shortlist 2–3 states before comparing individual colleges.",
  },
  {
    tag: "Q3",
    color: "var(--accent-green)",
    question: "Can I get a scholarship as a domestic student?",
    answer:
      "Yes — most colleges offer merit-based and state-quota scholarships, and several private institutions run need-based aid programs. Share your marks and target course with us and we'll match you against active scholarships.",
  },
  {
    tag: "Q4",
    color: "var(--accent-blue)",
    question: "How far in advance should I start my application?",
    answer:
      "Ideally 6–8 months before the academic year starts, so you have time for entrance exams, document verification, and hostel booking. We'll flag every deadline for your shortlisted colleges automatically.",
  },
  {
    tag: "Q5",
    color: "var(--accent-pink)",
    question: "Do you help with hostel and accommodation too?",
    answer:
      "Yes — once you confirm admission, our team shares verified hostel and PG options near your campus, along with typical rent ranges for that city so there are no surprises.",
  },
  {
    tag: "Q6",
    color: "var(--extra-purple)",
    question: "Is this guidance free for students?",
    answer:
      "Our AI tools — Course Match, Eligibility Checker, and Compare Colleges — are free to use. Personalized 1:1 counselling is available as a paid add-on if you'd like a dedicated advisor.",
  },
];

export default function StudyIndiaFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-section__glow faq-section__glow--a" aria-hidden="true" />
      <div className="faq-section__glow faq-section__glow--b" aria-hidden="true" />

      <div className="faq-section__content mx-auto max-w-3xl px-6 py-24">
        <div className="mb-12 text-center">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider"
            style={{ color: "var(--primary)", fontFamily: "var(--font-main)" }}
          >
            <PlaneTakeoff size={15} />
            Need To Know
          </span>
          <h2
            className="mx-auto mt-3 max-w-lg text-3xl font-semibold sm:text-4xl md:text-[3rem] md:leading-[1.12]"
            style={{ color: "var(--text-dark)", fontFamily: "var(--font-main)" }}
          >
            Frequently asked{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              questions
            </span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.tag}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                style={{ "--faq-accent": item.color }}
              >
                <button
                  className="faq-item__header"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="faq-item__tag"
                    style={{
                      color: item.color,
                      background: `color-mix(in srgb, ${item.color} 14%, transparent)`,
                      fontFamily: "var(--font-main)",
                    }}
                  >
                    {item.tag}
                  </span>

                  <span className="faq-item__divider" aria-hidden="true">
                    <span className="faq-item__notch faq-item__notch--top" />
                    <span className="faq-item__notch faq-item__notch--bottom" />
                  </span>

                  <span
                    className="faq-item__question"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-main)" }}
                  >
                    {item.question}
                  </span>

                  <span className="faq-item__icon" style={{ color: item.color }}>
                    <ChevronDown size={18} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-item__body"
                    >
                      <p
                        className="faq-item__answer"
                        style={{ color: "var(--text-medium)", fontFamily: "var(--font-main)" }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="faq-cta">
          <span
            className="faq-cta__text"
            style={{ color: "var(--text-medium)", fontFamily: "var(--font-main)" }}
          >
            Still have questions?
          </span>
          <a href="/contact" className="faq-cta__btn">
            <MessageCircle size={16} />
            <span style={{ fontFamily: "var(--font-main)" }}>Talk to an advisor</span>
          </a>
        </div>
      </div>

      <style>{`
        .faq-section {
          position: relative;
          overflow: hidden;
          background: var(--bg-section);
        }

        .faq-section__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          opacity: 0.55;
        }
        .faq-section__glow--a {
          top: -120px;
          left: -80px;
          width: 320px;
          height: 320px;
          background: var(--primary-light);
        }
        .faq-section__glow--b {
          bottom: -140px;
          right: -100px;
          width: 360px;
          height: 360px;
          background: color-mix(in srgb, var(--accent-green) 22%, transparent);
        }

        .faq-list {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-item {
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          background: var(--bg-main);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: var(--transition);
        }
        .faq-item--open {
          border-color: color-mix(in srgb, var(--faq-accent) 45%, var(--border));
          box-shadow: var(--shadow-md);
        }

        .faq-item__header {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .faq-item__tag {
          flex-shrink: 0;
          padding: 5px 10px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .faq-item__divider {
          position: relative;
          flex-shrink: 0;
          align-self: stretch;
          width: 1px;
          border-left: 1.5px dashed var(--border);
        }
        .faq-item__notch {
          position: absolute;
          left: -6px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--bg-main);
          border: 1px solid var(--border);
        }
        .faq-item__notch--top { top: -22px; }
        .faq-item__notch--bottom { bottom: -22px; }

        .faq-item__question {
          flex: 1 1 auto;
          font-size: 15.5px;
          font-weight: 600;
          line-height: 1.35;
        }

        .faq-item__icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--faq-accent) 12%, transparent);
          transition: transform 0.3s ease;
        }
        .faq-item--open .faq-item__icon {
          transform: rotate(180deg);
        }

        .faq-item__body {
          overflow: hidden;
        }

        .faq-item__answer {
          padding: 0 18px 18px 82px;
          font-size: 14px;
          line-height: 1.65;
        }

        .faq-cta {
          position: relative;
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          text-align: center;
        }
        .faq-cta__text {
          font-size: 14.5px;
        }
        .faq-cta__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          border-radius: 999px;
          background: var(--gradient-primary);
          color: var(--text-white);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        .faq-cta__btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        /* ===== Mobile responsiveness ===== */
        @media (max-width: 640px) {
          .faq-section__content {
            padding-top: 64px;
            padding-bottom: 64px;
          }
          .faq-item__header {
            gap: 10px;
            padding: 13px 14px;
          }
          .faq-item__tag {
            font-size: 10.5px;
            padding: 4px 8px;
          }
          .faq-item__question {
            font-size: 14px;
          }
          .faq-item__icon {
            width: 26px;
            height: 26px;
          }
          .faq-section__glow--a,
          .faq-section__glow--b {
            width: 200px;
            height: 200px;
            filter: blur(50px);
          }
        }

        @media (max-width: 480px) {
          .faq-item__divider {
            display: none;
          }
          .faq-item__answer {
            padding-left: 14px;
            padding-right: 14px;
            font-size: 13.5px;
          }
          .faq-cta__btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-item, .faq-item__icon, .faq-cta__btn {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}