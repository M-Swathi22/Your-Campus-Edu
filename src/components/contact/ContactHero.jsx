import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

/**
 * ContactHero
 * Hero section for the Contact page — Your Campus Edu / AICourseMatch
 *
 * Minimal, centered, light hero: eyebrow, headline, subtext, two CTAs,
 * and a quiet trust strip. No dark backdrop, no grid lines, no
 * split layout, no channel chips — just clean premium type and spacing.
 */

const trustStats = [
  { id: "response", value: "< 2 hrs", label: "Avg. response time" },
  { id: "reach", value: "40+", label: "Countries reached" },
  { id: "online", value: "12", label: "Counsellors online" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactHero() {
  return (
    <section className="contact-hero" aria-label="Contact Your Campus Edu">
      <div className="contact-hero__backdrop" aria-hidden="true">
        <div className="contact-hero__glow contact-hero__glow--one" />
        <div className="contact-hero__glow contact-hero__glow--two" />
      </div>

      <motion.div
        className="contact-hero__inner"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="contact-hero__eyebrow" variants={itemVariants}>
          <span className="contact-hero__eyebrow-dot" />
          Get in touch
        </motion.div>

        <motion.h1 className="contact-hero__heading" variants={itemVariants}>
          Your next campus is
          <span className="contact-hero__heading-accent"> one conversation </span>
          away
        </motion.h1>

        <motion.p className="contact-hero__subtext" variants={itemVariants}>
          Tell us where you want to study and what's holding you back.
          A real counsellor replies — usually within two hours, not two days.
        </motion.p>

        <motion.div className="contact-hero__actions" variants={itemVariants}>
          <a href="#book" className="contact-hero__btn contact-hero__btn--primary">
            Book a free consultation
            <ArrowUpRight size={18} strokeWidth={2.25} />
          </a>
          <a href="#whatsapp" className="contact-hero__btn contact-hero__btn--ghost">
            <MessageCircle size={18} strokeWidth={2.25} />
            Message on WhatsApp
          </a>
        </motion.div>

        <motion.div className="contact-hero__trust" variants={itemVariants}>
          {trustStats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="contact-hero__trust-item">
                <span className="contact-hero__trust-value">{stat.value}</span>
                <span className="contact-hero__trust-label">{stat.label}</span>
              </div>
              {index < trustStats.length - 1 && (
                <span className="contact-hero__trust-divider" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        .contact-hero {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--bg-main);
          padding: clamp(88px, 11vw, 132px) clamp(20px, 5vw, 64px) clamp(64px, 7vw, 88px);
          font-family: var(--font-main);
          isolation: isolate;
        }

        .contact-hero__backdrop {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .contact-hero__glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.5;
        }

        .contact-hero__glow--one {
          width: 460px;
          height: 460px;
          top: -200px;
          left: 50%;
          transform: translateX(-70%);
          background: var(--primary-light);
        }

        .contact-hero__glow--two {
          width: 360px;
          height: 360px;
          top: -80px;
          left: 50%;
          transform: translateX(30%);
          background: var(--secondary-light);
          opacity: 0.6;
        }

        .contact-hero__inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .contact-hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px 8px 12px;
          border-radius: var(--radius-xl);
          background: var(--primary-light);
          border: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
          color: var(--primary);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .contact-hero__eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-green);
        }

        @media (prefers-reduced-motion: no-preference) {
          .contact-hero__eyebrow-dot {
            animation: contact-hero-blink 1.8s ease-in-out infinite;
          }
        }

        .contact-hero__heading {
          font-family: var(--font-main);
          font-weight: 600;
          font-size: clamp(32px, 4.4vw, 54px);
          line-height: 1.14;
          letter-spacing: -0.02em;
          color: var(--text-dark);
          margin: 0 0 20px;
        }

        .contact-hero__heading-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .contact-hero__subtext {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.65;
          color: var(--text-medium);
          max-width: 46ch;
          margin: 0 0 36px;
        }

        .contact-hero__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-bottom: 48px;
        }

        .contact-hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 26px;
          border-radius: var(--radius-md);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
          white-space: nowrap;
        }

        .contact-hero__btn--primary {
          background: var(--gradient-primary);
          color: var(--text-white);
          box-shadow: var(--shadow-md);
        }

        .contact-hero__btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .contact-hero__btn--ghost {
          background: var(--white);
          color: var(--text-dark);
          border: 1px solid var(--border);
        }

        .contact-hero__btn--ghost:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }

        .contact-hero__trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
          width: 100%;
        }

        .contact-hero__trust-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: auto;
        }

        .contact-hero__trust-value {
          font-size: clamp(16px, 1.6vw, 19px);
          font-weight: 700;
          color: var(--text-dark);
        }

        .contact-hero__trust-label {
          font-size: 11.5px;
          color: var(--text-light);
        }

        .contact-hero__trust-divider {
          width: 1px;
          height: 30px;
          background: var(--border);
          flex-shrink: 0;
        }

        @keyframes contact-hero-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        @media (max-width: 560px) {
          .contact-hero__actions {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }

          .contact-hero__btn {
            justify-content: center;
          }

          .contact-hero__trust {
            gap: 14px;
          }

          .contact-hero__trust-divider {
            height: 24px;
          }
        }

        @media (max-width: 400px) {
          .contact-hero__trust {
            flex-wrap: wrap;
            row-gap: 16px;
          }

          .contact-hero__trust-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
  
}