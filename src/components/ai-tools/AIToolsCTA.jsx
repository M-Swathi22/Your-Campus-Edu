import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

/* =========================================
   STYLES — derived only from theme.css tokens
========================================= */

const styles = `
  .atc {
    position: relative;
    background: var(--primary-light);
    padding: 110px 0;
  }

  .atc__inner {
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
    display: grid;
    grid-template-columns: 1fr 0.95fr;
    gap: 64px;
    align-items: center;
  }

  /* ── LEFT: content ─────────────────────── */
  .atc__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-main);
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--primary);
  }
  .atc__eyebrowDash {
    width: 28px;
    height: 1.5px;
    background: var(--primary);
  }

  .atc__heading {
    font-family: var(--font-main);
    font-weight: 700;
    font-size: clamp(2.1rem, 4vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.5px;
    color: var(--primary-dark);
    margin-top: 20px;
  }
  .atc__heading em {
    font-style: normal;
    color: var(--secondary);
  }

  .atc__body {
    font-family: var(--font-main);
    font-size: 16px;
    line-height: 1.7;
    color: var(--text-medium);
    max-width: 440px;
    margin-top: 20px;
  }

  .atc__actions {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 36px;
    flex-wrap: wrap;
  }

  .atc__btnPrimary {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 15px 26px;
    border-radius: var(--radius-sm);
    background: var(--gradient-secondary);
    color: var(--text-white);
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 15px;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow-md);
  }
  .atc__btnPrimary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  .atc__btnPrimary svg { transition: transform 0.25s ease; }
  .atc__btnPrimary:hover svg { transform: translateX(3px); }

  .atc__btnGhost {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 15px 24px;
    border-radius: var(--radius-sm);
    background: var(--bg-main);
    color: var(--primary-dark);
    font-family: var(--font-main);
    font-weight: 600;
    font-size: 15px;
    border: 1.5px solid var(--border);
    cursor: pointer;
    transition: var(--transition);
  }
  .atc__btnGhost:hover {
    border-color: var(--primary);
    color: var(--primary);
  }

  .atc__trust {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 32px;
    font-family: var(--font-main);
    font-size: 12.5px;
    color: var(--text-light);
  }
  .atc__trustDot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--accent-green);
    flex-shrink: 0;
  }

  /* ── RIGHT: signature route diagram ────── */
  .atc__route {
    position: relative;
    padding: 4px 0;
  }

  .atc__stop {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 18px;
    padding-bottom: 44px;
  }
  .atc__stop:last-child { padding-bottom: 0; }

  .atc__stopRail {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 12px;
  }
  .atc__stopDot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--bg-main);
    border: 2px solid var(--primary);
    flex-shrink: 0;
    z-index: 1;
  }
  .atc__stop:last-child .atc__stopDot {
    background: var(--gradient-primary);
    border-color: transparent;
  }
  .atc__stopLine {
    width: 2px;
    flex: 1;
    margin-top: 4px;
    min-height: 44px;
    background: var(--gradient-primary);
    opacity: 0.35;
    border-radius: 2px;
  }

  .atc__stopLabel {
    font-family: var(--font-main);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--primary);
  }
  .atc__stopTitle {
    font-family: var(--font-main);
    font-size: 18px;
    font-weight: 700;
    color: var(--primary-dark);
    margin-top: 5px;
  }
  .atc__stopDesc {
    font-family: var(--font-main);
    font-size: 13.5px;
    color: var(--text-medium);
    margin-top: 4px;
    line-height: 1.55;
    max-width: 300px;
  }

  /* ── RESPONSIVE ─────────────────────────── */
  @media (max-width: 980px) {
    .atc { padding: 80px 0; }
    .atc__inner {
      grid-template-columns: 1fr;
      gap: 52px;
    }
    .atc__body { max-width: 100%; }
  }
  @media (max-width: 560px) {
    .atc__inner { padding: 0 20px; }
    .atc__actions { flex-direction: column; align-items: stretch; }
    .atc__btnPrimary, .atc__btnGhost { justify-content: center; }
  }
`;

/* =========================================
   DATA — the journey the AI tools actually map
========================================= */

const ROUTE = [
  {
    label: "Step 01",
    title: "Tell us your subject",
    desc: "Academic background, interests, and budget — the inputs our matching engine needs.",
  },
  {
    label: "Step 02",
    title: "AI runs the match",
    desc: "Course Match, Eligibility Checker, and Budget Calculator score every option in seconds.",
  },
  {
    label: "Step 03",
    title: "Land on your country",
    desc: "A ranked shortlist of courses and destinations built around what actually fits you.",
  },
];

/* =========================================
   COMPONENT
========================================= */

const AIToolsCTA = () => {
  return (
    <section className="atc">
      <style>{styles}</style>

      <div className="atc__inner">

        {/* LEFT — message + actions */}
        <div>
          <span className="atc__eyebrow">
            <span className="atc__eyebrowDash" />
            AI-Powered Student Success
          </span>

          <h2 className="atc__heading">
            Plot your path from
            <br />
            course to <em>country</em>.
          </h2>

          <p className="atc__body">
            Our AI tools turn a vague "where should I study?" into a clear
            route — matched courses, real eligibility, and a budget that
            actually adds up, before you apply anywhere.
          </p>

          <div className="atc__actions">
            <button className="atc__btnPrimary">
              Start AI Match
              <ArrowRight size={17} />
            </button>
            <button className="atc__btnGhost">
              <MessageCircle size={17} />
              Talk to a Counsellor
            </button>
          </div>

          <div className="atc__trust">
            <span className="atc__trustDot" />
            No fees to get matched — built for Indian students, abroad and at home
          </div>
        </div>

        {/* RIGHT — signature route diagram */}
        <div className="atc__route">
          {ROUTE.map((stop, i) => (
            <div className="atc__stop" key={stop.title}>
              <div className="atc__stopRail">
                <div className="atc__stopDot" />
                {i < ROUTE.length - 1 && <div className="atc__stopLine" />}
              </div>
              <div>
                <span className="atc__stopLabel">{stop.label}</span>
                <div className="atc__stopTitle">{stop.title}</div>
                <p className="atc__stopDesc">{stop.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIToolsCTA;