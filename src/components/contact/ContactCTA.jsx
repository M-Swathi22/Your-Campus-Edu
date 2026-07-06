import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="cc-root">
      <motion.div
        className="cc-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="cc-text">
          <span className="cc-tag">FINAL CALL</span>
          <h2 className="cc-title">Still deciding? Just say hello.</h2>
          <p className="cc-sub">
            You don&rsquo;t need a finished plan to talk to us &mdash; most
            students start with a single question.
          </p>
        </div>

        <div className="cc-actions">
          <a href="https://wa.me/919876543210" className="cc-btn cc-btn-light">
            <MessageCircle size={17} />
            <span>Chat on WhatsApp</span>
          </a>
          <a href="#contact-form" className="cc-btn cc-btn-outline">
            <span>Fill the form</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="cc-orb" />
      </motion.div>

      <style>{`
        .cc-root {
          background: var(--bg-main);
          padding: 0 clamp(20px, 6vw, 80px) clamp(80px, 10vw, 120px);
        }

        .cc-card {
          position: relative;
          max-width: 1180px;
          margin: 0 auto;
          background: var(--gradient-secondary);
          border-radius: var(--radius-xl);
          padding: clamp(40px, 6vw, 64px);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          overflow: hidden;
          isolation: isolate;
        }

        .cc-orb {
          position: absolute;
          right: -6%;
          bottom: -30%;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, color-mix(in srgb, var(--accent-green) 40%, transparent), transparent 70%);
          z-index: 0;
        }

        .cc-text { position: relative; z-index: 1; max-width: 460px; }

        .cc-tag {
          display: inline-block;
          font-family: var(--font-main);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--accent-green);
          margin-bottom: 12px;
        }

        .cc-title {
          font-family: var(--font-main);
          font-weight: 700;
          font-size: clamp(1.6rem, 2.8vw, 2.1rem);
          color: var(--text-white);
          line-height: 1.2;
          margin: 0 0 12px;
        }

        .cc-sub {
          font-family: var(--font-main);
          font-size: 14.5px;
          line-height: 1.65;
          color: color-mix(in srgb, var(--white) 78%, transparent);
          margin: 0;
        }

        .cc-actions {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cc-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: var(--radius-sm);
          font-family: var(--font-main);
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition);
          white-space: nowrap;
        }

        .cc-btn-light {
          background: var(--text-white);
          color: var(--primary-dark);
        }

        .cc-btn-light:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .cc-btn-outline {
          border: 1px solid color-mix(in srgb, var(--white) 35%, transparent);
          color: var(--text-white);
        }

        .cc-btn-outline:hover {
          background: color-mix(in srgb, var(--white) 10%, transparent);
        }

        @media (max-width: 640px) {
          .cc-card { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}