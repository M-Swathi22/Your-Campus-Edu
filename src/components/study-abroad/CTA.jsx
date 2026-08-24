// src/components/study-destination/CTA.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PlaneTakeoff, ArrowRight, Clock, Calendar } from "lucide-react";

const CTA = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.55, delay, ease: "easeOut" },
        };

  return (
    <section className="sd-cta">
      <div className="sd-cta__container">
        <motion.div className="sd-pass" {...fadeUp(0)}>
          {/* ---------- Main panel ---------- */}
          <div className="sd-pass__main">
            <div className="sd-pass__topline">
              <span className="sd-pass__label">Boarding Pass</span>
              <span className="sd-pass__class">Priority Counsel</span>
            </div>

            <div className="sd-pass__route">
              <div className="sd-pass__point">
                <span className="sd-pass__code">HERE</span>
                <span className="sd-pass__city">Where you are</span>
              </div>

              <div className="sd-pass__path">
                <span className="sd-pass__dash" />
                <motion.span
                  className="sd-pass__plane"
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { left: ["0%", "100%"], opacity: [0, 1, 1, 0] }
                  }
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <PlaneTakeoff size={16} />
                </motion.span>
              </div>

              <div className="sd-pass__point sd-pass__point--end">
                <span className="sd-pass__code">GOAL</span>
                <span className="sd-pass__city">Your dream campus</span>
              </div>
            </div>

            <h2 className="sd-pass__title">
              Your gate number is waiting on a 15-minute call.
            </h2>
            <p className="sd-pass__sub">
              Talk to a counsellor, get your country shortlist in writing, and
              leave with a realistic timeline — no obligation to book
              anything.
            </p>

            <div className="sd-pass__meta">
              <div className="sd-pass__meta-item">
                <Clock size={14} />
                <span>15 min · free</span>
              </div>
              <div className="sd-pass__meta-item">
                <Calendar size={14} />
                <span>Slots open today</span>
              </div>
            </div>
          </div>

          {/* ---------- Perforated divider ---------- */}
          <div className="sd-pass__divider">
            <span className="sd-pass__notch sd-pass__notch--top" />
            <span className="sd-pass__notch sd-pass__notch--bottom" />
          </div>

          {/* ---------- Stub panel ---------- */}
          <div className="sd-pass__stub">
            <span className="sd-pass__stub-label">Admit One Student</span>

            <a href="/contact" className="sd-pass__primary">
              <span>Book Free Consultation</span>
              <ArrowRight size={16} />
            </a>

            <a href="/ai-tools" className="sd-pass__secondary">
              Try the Country Fit Quiz first
            </a>

            <div className="sd-pass__barcode" aria-hidden="true">
              {Array.from({ length: 22 }).map((_, i) => (
                <span key={i} style={{ width: i % 4 === 0 ? 3 : 1.5 }} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .sd-cta {
          position: relative;
          background: var(--bg-section);
          padding: 6rem 1.5rem;
          font-family: var(--font-main);
        }

        .sd-cta__container {
          max-width: 920px;
          margin: 0 auto;
        }

        /* ---------- Boarding pass shell ---------- */

        .sd-pass {
          display: grid;
          grid-template-columns: 1fr auto 260px;
          background: var(--gradient-secondary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .sd-pass__main {
          padding: 3rem 2.75rem;
        }

        .sd-pass__topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .sd-pass__label {
          color: var(--text-white);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .sd-pass__class {
          padding: 5px 12px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--accent-green) 20%, transparent);
          color: var(--accent-green);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ---------- Route ---------- */

        .sd-pass__route {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 18px;
          margin-bottom: 2.25rem;
        }

        .sd-pass__point {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sd-pass__point--end {
          text-align: right;
          align-items: flex-end;
        }

        .sd-pass__code {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-white);
          letter-spacing: 0.03em;
        }

        .sd-pass__city {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 500;
        }

        .sd-pass__path {
          position: relative;
          height: 20px;
        }

        .sd-pass__dash {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 0;
          border-top: 2px dashed rgba(255, 255, 255, 0.28);
          transform: translateY(-50%);
        }

        .sd-pass__plane {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%) rotate(0deg);
          color: var(--accent-green);
          background: var(--primary-dark);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sd-pass__title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          line-height: 1.3;
          color: var(--text-white);
          margin: 0 0 0.9rem;
          max-width: 460px;
        }

        .sd-pass__sub {
          color: rgba(255, 255, 255, 0.72);
          font-size: 0.95rem;
          line-height: 1.7;
          max-width: 440px;
          margin-bottom: 1.75rem;
        }

        .sd-pass__meta {
          display: flex;
          gap: 22px;
        }

        .sd-pass__meta-item {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.82rem;
          font-weight: 600;
        }

        .sd-pass__meta-item svg {
          color: var(--accent-green);
        }

        /* ---------- Perforated divider ---------- */

        .sd-pass__divider {
          position: relative;
          width: 0;
          border-left: 2px dashed rgba(255, 255, 255, 0.25);
          margin: 24px 0;
        }

        .sd-pass__notch {
          position: absolute;
          left: -12px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-section);
        }

        .sd-pass__notch--top {
          top: -24px;
        }

        .sd-pass__notch--bottom {
          bottom: -24px;
        }

        /* ---------- Stub ---------- */

        .sd-pass__stub {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
          gap: 14px;
          padding: 3rem 2rem;
          background: rgba(0, 0, 0, 0.12);
        }

        .sd-pass__stub-label {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
          margin-bottom: 4px;
        }

        .sd-pass__primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--text-white);
          color: var(--primary-dark);
          font-weight: 700;
          font-size: 0.92rem;
          padding: 0.85rem 1.2rem;
          border-radius: var(--radius-md);
          text-decoration: none;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }

        .sd-pass__primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .sd-pass__secondary {
          text-align: center;
          color: var(--text-white);
          font-size: 0.84rem;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.4);
          padding-bottom: 3px;
          align-self: center;
        }

        .sd-pass__barcode {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 24px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .sd-pass__barcode span {
          display: block;
          height: 100%;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 1px;
        }

        /* ---------- Responsive ---------- */

        @media (max-width: 860px) {
          .sd-pass {
            grid-template-columns: 1fr;
          }

          .sd-pass__divider {
            width: auto;
            height: 0;
            border-left: none;
            border-top: 2px dashed rgba(255, 255, 255, 0.25);
            margin: 0 28px;
          }

          .sd-pass__notch {
            top: -12px;
            width: 24px;
            height: 24px;
          }

          .sd-pass__notch--top {
            left: -12px;
          }

          .sd-pass__notch--bottom {
            left: auto;
            right: -12px;
          }

          .sd-pass__main {
            padding: 2.5rem 1.75rem 2rem;
          }

          .sd-pass__point--end {
            text-align: right;
          }

          .sd-pass__stub {
            padding: 2.25rem 1.75rem 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .sd-cta {
            padding: 4.5rem 1.25rem;
          }

          .sd-pass__code {
            font-size: 1.25rem;
          }

          .sd-pass__title {
            font-size: 1.4rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sd-pass__primary {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;