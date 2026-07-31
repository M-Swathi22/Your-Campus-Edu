import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqData = [
  {
    question: "Are the hostels, PGs, and residences actually verified?",
    answer:
      "Yes. Every listing on this page is physically inspected or verified through the partner university or accredited housing provider before it goes live — we check safety, hygiene, and the accuracy of photos and pricing.",
  },
  {
    question: "When should I start applying for student accommodation?",
    answer:
      "We recommend applying as soon as you receive your admission offer. Popular residences near top campuses fill up 3–4 months before intake, especially for the September and January intakes.",
  },
  {
    question: "Is a security deposit required, and is it refundable?",
    answer:
      "Most residences ask for a refundable security deposit, typically equal to one month's rent. It's returned after checkout, minus any documented damages, as per the property's policy.",
  },
  {
    question: "Can I book accommodation before my visa is approved?",
    answer:
      "Yes, many partner residences allow you to reserve a room with a smaller holding deposit before your visa comes through, and offer a full refund if your visa application is rejected.",
  },
  {
    question: "What's included in the rent — utilities, Wi-Fi, meals?",
    answer:
      "It varies by property. Each listing clearly states what's included, whether that's utilities, Wi-Fi, weekly cleaning, or meal plans, so you can compare the real cost before booking.",
  },
  
];

export default function AccommodationFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="acc-faq">
      <div className="acc-faq__container">
        <div className="acc-faq__header">
          <span className="acc-faq__eyebrow">FAQs</span>
          <h2 className="acc-faq__title">
            Accommodation, <span className="acc-faq__title-accent">answered</span>
          </h2>
          <p className="acc-faq__subtitle">
            Everything students usually ask before booking a hostel, PG, or residence with us.
          </p>
        </div>

        <div className="acc-faq__list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`acc-faq__item ${isOpen ? "acc-faq__item--open" : ""}`}
              >
                <button
                  className="acc-faq__question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`acc-faq-panel-${index}`}
                  id={`acc-faq-header-${index}`}
                >
                  <span>{item.question}</span>
                  <span className="acc-faq__icon" aria-hidden="true">
                    <Plus size={18} strokeWidth={2.25} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`acc-faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`acc-faq-header-${index}`}
                      className="acc-faq__answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="acc-faq__answer">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .acc-faq {
          background: var(--primary-light);
          padding: clamp(3rem, 6vw, 5.5rem) 1.5rem;
        }

        .acc-faq__container {
          max-width: 860px;
          margin: 0 auto;
        }

        .acc-faq__header {
          text-align: center;
          margin-bottom: clamp(2rem, 4vw, 3rem);
        }

        .acc-faq__eyebrow {
          display: inline-block;
          font-family: var(--font-main);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--primary);
          background: color-mix(in srgb, var(--primary) 10%, transparent);
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-xl);
          margin-bottom: 1rem;
        }

        .acc-faq__title {
          font-family: var(--font-main);
          font-weight: 600;
          font-size: clamp(1.75rem, 3.2vw, 2.5rem);
          color: var(--text-dark);
          margin: 0 0 0.75rem;
        }

        .acc-faq__title-accent {
          background-image: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .acc-faq__subtitle {
          font-family: var(--font-main);
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          color: var(--text-medium);
          max-width: 520px;
          margin: 0 auto;
        }

        .acc-faq__list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .acc-faq__item {
          background: var(--bg-main);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition);
        }

        .acc-faq__item--open {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .acc-faq__question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 1.15rem 1.4rem;
          font-family: var(--font-main);
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
          font-weight: 500;
          color: var(--text-dark);
        }

        .acc-faq__item--open .acc-faq__question {
          color: var(--primary-dark);
        }

        .acc-faq__icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--primary);
          transition: var(--transition);
        }

        .acc-faq__item--open .acc-faq__icon {
          background: var(--primary);
          color: var(--text-white);
          transform: rotate(45deg);
        }

        .acc-faq__answer-wrap {
          overflow: hidden;
        }

        .acc-faq__answer {
          margin: 0;
          padding: 0 1.4rem 1.25rem;
          font-family: var(--font-main);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-medium);
        }

        @media (prefers-reduced-motion: reduce) {
          .acc-faq__icon,
          .acc-faq__item {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}