import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plane } from "lucide-react";
import heroBg from "../../assets/images/ai-tool.png";

const DESTINATIONS = [
  { code: "LHR", city: "London", country: "United Kingdom", intake: "Jan '27", match: 96 },
  { code: "YYZ", city: "Toronto", country: "Canada", intake: "Fall '26", match: 93 },
  { code: "SYD", city: "Sydney", country: "Australia", intake: "Feb '27", match: 91 },
  { code: "FRA", city: "Frankfurt", country: "Germany", intake: "Oct '26", match: 95 },
  { code: "DUB", city: "Dublin", country: "Ireland", intake: "Sep '26", match: 92 },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % DESTINATIONS.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  const destination = DESTINATIONS[index];

  return (
    <section className="sdh-root">
      <div className="sdh-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="sdh-scrim" />

      <div className="sdh-container">
        <motion.div
          className="sdh-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Study Abroad Consultancy · Coimbatore
        </motion.div>

        <motion.h1
          className="sdh-title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Your boarding pass
          <span> to a global degree</span>
        </motion.h1>

        <motion.p
          className="sdh-description"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          Get matched with the right country and universities across 15+
          destinations, backed by counsellors who've boarded a thousand
          students before you.
        </motion.p>

        <motion.div
          className="sdh-buttons"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
        >
          <a href="/ai-tools/country-match" className="sdh-btn-primary">
            Find My Country
            <ArrowRight size={18} />
          </a>
          <a href="/contact" className="sdh-btn-secondary">
            Book Free Consultation
          </a>
        </motion.div>

        
      </div>

      <motion.div
        className="sdh-ticket"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3 }}
        whileHover={{ y: -4 }}
        style={{ transform: "none", rotate: 0 }}
      >
        <div className="sdh-ticket-main">
          <div className="sdh-ticket-header">
            <span className="sdh-ticket-brand">
              <Plane size={14} />
              Boarding Pass
            </span>
            <span className="sdh-ticket-chip">AI Country Match</span>
          </div>

          <div className="sdh-ticket-route">
            <div className="sdh-ticket-place">
              <span className="sdh-ticket-code">COK</span>
              <span className="sdh-ticket-city">Coimbatore</span>
            </div>

            <div className="sdh-ticket-path">
              <span className="sdh-ticket-dash" />
              <Plane size={14} className="sdh-ticket-plane" />
              <span className="sdh-ticket-dash" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={destination.code}
                className="sdh-ticket-place sdh-ticket-place-right"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
              >
                <span className="sdh-ticket-code">{destination.code}</span>
                <span className="sdh-ticket-city">{destination.city}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="sdh-ticket-fields">
            <div className="sdh-ticket-field">
              <span className="sdh-ticket-label">Student</span>
              <span className="sdh-ticket-value">You</span>
            </div>
            <div className="sdh-ticket-field">
              <span className="sdh-ticket-label">Counsellor</span>
              <span className="sdh-ticket-value">
                <span className="sdh-ticket-dot" />
                Assigned
              </span>
            </div>
            <div className="sdh-ticket-field">
              <span className="sdh-ticket-label">Intake</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={destination.intake}
                  className="sdh-ticket-value"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {destination.intake}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="sdh-ticket-stub">
          <span className="sdh-ticket-stub-label">Country match</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={destination.match}
              className="sdh-ticket-stub-score"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {destination.match}%
            </motion.span>
          </AnimatePresence>
          <div className="sdh-ticket-barcode" />
          <span className="sdh-ticket-stub-label">AI verified</span>
        </div>
      </motion.div>

      <style>{`
        .sdh-root {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          padding: 130px 24px 70px;
          background: var(--bg-light);
          font-family: var(--font-main);
        }

        .sdh-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .sdh-scrim {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 900px 620px at 50% 32%, rgba(240,244,245,0.9) 0%, rgba(240,244,245,0.74) 45%, rgba(240,244,245,0.28) 75%, transparent 100%),
            linear-gradient(135deg, rgba(109,83,163,0.28) 0%, rgba(49,185,120,0.18) 45%, rgba(240,244,245,0.6) 100%),
            linear-gradient(180deg, rgba(240,244,245,0.05) 0%, rgba(240,244,245,0.5) 72%, var(--bg-light) 100%);
        }

        .sdh-container {
          position: relative;
          z-index: 2;
          max-width: 700px;
          width: 100%;
          text-align: center;
          margin-bottom: 44px;
        }

        .sdh-badge {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          border-radius: 999px;
          background: var(--white);
          border: 1px solid var(--border);
          color: var(--primary-dark);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          margin-bottom: 22px;
          box-shadow: var(--shadow-sm);
        }

        .sdh-title {
          font-size: clamp(2.2rem, 4.4vw, 3.4rem);
          font-weight: 700;
          line-height: 1.14;
          color: var(--primary-dark);
          letter-spacing: -0.01em;
          margin-bottom: 16px;
        }

        .sdh-title span {
          display: block;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sdh-description {
          color: var(--text-medium);
          line-height: 1.75;
          font-size: 1rem;
          max-width: 500px;
          margin: 0 auto 28px;
        }

        .sdh-buttons {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .sdh-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 26px;
          background: var(--primary-dark);
          color: var(--white);
          text-decoration: none;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .sdh-btn-primary:hover {
          background: var(--primary);
          transform: translateY(-2px);
        }

        .sdh-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 15px 26px;
          border: 1px solid var(--border);
          border-radius: 999px;
          text-decoration: none;
          color: var(--primary-dark);
          font-weight: 600;
          font-size: 0.95rem;
          background: var(--white);
          transition: var(--transition);
        }

        .sdh-btn-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .sdh-btn-primary:focus-visible,
        .sdh-btn-secondary:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 3px;
        }

        .sdh-stats {
          color: var(--text-light);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .sdh-ticket {
          position: relative;
          z-index: 2;
          display: flex;
          width: min(560px, 100%);
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          transform: none;
          transition: var(--transition);
        }

        .sdh-ticket-main {
          flex: 1;
          padding: 24px 26px;
          position: relative;
        }

        .sdh-ticket-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sdh-ticket-brand {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--primary-dark);
        }

        .sdh-ticket-chip {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--primary);
          background: var(--primary-light);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .sdh-ticket-route {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .sdh-ticket-place {
          display: flex;
          flex-direction: column;
          min-width: 84px;
        }

        .sdh-ticket-place-right {
          align-items: flex-end;
          text-align: right;
        }

        .sdh-ticket-code {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--primary-dark);
          letter-spacing: 0.03em;
        }

        .sdh-ticket-city {
          font-size: 0.75rem;
          color: var(--text-light);
          margin-top: 2px;
        }

        .sdh-ticket-path {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 12px;
          color: var(--primary);
        }

        .sdh-ticket-dash {
          flex: 1;
          height: 1px;
          border-top: 1px dashed var(--border);
        }

        .sdh-ticket-plane {
          flex-shrink: 0;
        }

        .sdh-ticket-fields {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px dashed var(--border);
        }

        .sdh-ticket-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sdh-ticket-label {
          font-size: 0.66rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-light);
        }

        .sdh-ticket-value {
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-dark);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .sdh-ticket-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
        }

        .sdh-ticket-stub {
          width: 128px;
          flex-shrink: 0;
          background: var(--primary-light);
          border-left: 1px dashed var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 18px 12px;
          position: relative;
        }

        .sdh-ticket-stub::before,
        .sdh-ticket-stub::after {
          content: "";
          position: absolute;
          left: -7px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--bg-light);
        }

        .sdh-ticket-stub::before { top: -7px; }
        .sdh-ticket-stub::after { bottom: -7px; }

        .sdh-ticket-stub-label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--primary);
          text-align: center;
        }

        .sdh-ticket-stub-score {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--primary-dark);
        }

        .sdh-ticket-barcode {
          width: 100%;
          height: 26px;
          background: repeating-linear-gradient(
            90deg,
            var(--primary-dark) 0px,
            var(--primary-dark) 2px,
            transparent 2px,
            transparent 5px,
            var(--primary-dark) 5px,
            var(--primary-dark) 6px,
            transparent 6px,
            transparent 9px
          );
          opacity: 0.55;
        }

        @media (max-width: 576px) {
          .sdh-root {
            padding: 110px 20px 60px;
          }

          .sdh-title {
            font-size: 2rem;
          }

          .sdh-buttons {
            flex-direction: column;
          }

          .sdh-btn-primary,
          .sdh-btn-secondary {
            justify-content: center;
          }

          .sdh-ticket {
            flex-direction: column;
          }

          .sdh-ticket-stub {
            width: 100%;
            flex-direction: row;
            border-left: none;
            border-top: 1px dashed var(--border);
            padding: 14px 20px;
            gap: 14px;
          }

          .sdh-ticket-stub::before,
          .sdh-ticket-stub::after {
            top: -7px;
            left: auto;
          }

          .sdh-ticket-stub::before { left: -7px; }
          .sdh-ticket-stub::after { right: -7px; }

          .sdh-ticket-barcode {
            width: 60px;
            height: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;