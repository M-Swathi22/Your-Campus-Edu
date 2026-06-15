import React from "react";
import { UserRound, BrainCircuit, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: UserRound,
    number: "01",
    shortTitle: "Profile",
    description:
      "Share your academic background, interests, preferred course, study destination, and budget.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    shortTitle: "Analysis",
    description:
      "Our intelligent tools evaluate your preferences, eligibility, and career goals to identify suitable options.",
  },
  {
    icon: GraduationCap,
    number: "03",
    shortTitle: "Results",
    description:
      "Receive personalized course, college, and country suggestions along with eligibility and budget insights.",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{
        fontFamily: "var(--font-main)",
        background: "var(--bg-main)",
        padding: "80px 24px 72px",
      }}
    >
      <style>{`
        .hiw-heading-wrap {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
        }

        .hiw-label {
          display: inline-flex;
          align-items: center;
          padding: 7px 20px;
          border-radius: 100px;
          background: var(--primary-light);
          color: var(--primary);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .hiw-title {
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.25;
          margin: 0 0 12px;
        }

        .hiw-title-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hiw-subtitle {
          font-size: 14.5px;
          color: var(--text-medium);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Grid ── */
        .hiw-grid {
          display: grid;
          grid-template-columns: repeat(3, 300px);
          gap: 0px;
          max-width: 960px;
          margin: 0 auto;
          justify-content: center;
        }

        @media (max-width: 960px) {
          .hiw-grid {
            grid-template-columns: 300px;
            gap: 20px;
          }
        }

        /* ── Card ── */
        .hiw-card-wrap {
          position: relative;
          width: 300px;
          height: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hiw-arc-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: visible;
        }

        .hiw-icon-ring {
          position: relative;
          z-index: 5;
          width: 108px;
          height: 108px;
          border-radius: 50%;
          background: var(--bg-main);
          box-shadow: 0 8px 28px rgba(109,83,163,0.13);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 16px;
          flex-shrink: 0;
        }

        .hiw-icon-inner {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hiw-step-pill {
          position: relative;
          z-index: 5;
          margin-top: 28px;
          background: var(--bg-main);
          border-radius: 100px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          padding: 4px 18px 4px 4px;
          gap: 10px;
          flex-shrink: 0;
        }

        .hiw-step-num {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--primary);
          color: var(--text-white);
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hiw-step-label {
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-dark);
        }

        .hiw-desc {
          position: relative;
          z-index: 5;
          margin-top: 18px;
          text-align: center;
          font-size: 13px;
          font-weight: 400;
          color: var(--text-medium);
          line-height: 1.7;
          padding: 0;
          width: 185px;
          flex-shrink: 0;
        }

        .hiw-anchor-dot {
          position: absolute;
          top: 326px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-main);
          border: 8px solid #d8dce8;
          box-shadow: 0 4px 14px rgba(0,0,0,0.07);
        }

        .hiw-cta {
          max-width: 700px;
          margin: 56px auto 0;
          background: var(--gradient-secondary);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          padding: 40px 48px;
          text-align: center;
          color: var(--text-white);
        }

        .hiw-cta h3 {
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 700;
          margin: 0 0 10px;
        }

        .hiw-cta p {
          font-size: 14px;
          opacity: 0.82;
          line-height: 1.7;
          max-width: 480px;
          margin: 0 auto;
        }
      `}</style>

      {/* Heading */}
      <div className="hiw-heading-wrap">
        <div className="hiw-label">How It Works?</div>
        <h2 className="hiw-title">
          Simple AI Powered{" "}
          <span className="hiw-title-accent">Process</span>
        </h2>
        <p className="hiw-subtitle">
          Get personalized educational guidance in just a few minutes using our
          AI‑powered tools.
        </p>
      </div>

      {/* Cards */}
      <div className="hiw-grid">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="hiw-card-wrap">
              <svg
                className="hiw-arc-svg"
                viewBox="0 0 300 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 150,70 A 140,140 0 1,1 150,350"
                  stroke="var(--accent-blue)"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <div className="hiw-icon-ring">
                <div className="hiw-icon-inner">
                  <Icon size={30} strokeWidth={2} />
                </div>
              </div>

              <div className="hiw-step-pill">
                <div className="hiw-step-num">{step.number}</div>
                <div className="hiw-step-label">{step.shortTitle}</div>
              </div>

              <p className="hiw-desc">{step.description}</p>

              <div className="hiw-anchor-dot" />
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="hiw-cta">
        <h3>From Confusion to Clarity</h3>
        <p>
          Stop spending hours researching courses, colleges, and countries. Let
          AI simplify the process and help you make confident decisions about
          your future.
        </p>
      </div>
    </section>
  );
}