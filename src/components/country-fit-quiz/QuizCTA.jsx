import { ArrowRight, MessageCircle, Compass, Users, GitCompareArrows, CheckCircle2 } from "lucide-react";

const TRUST_STEPS = [
  {
    icon: Compass,
    number: "01",
    label: "Free Personality Match",
    sub: "Instant algorithm assessment. No signup obstacles.",
    accent: "var(--extra-purple)",
    accentRgb: "142,86,255",
  },
  {
    icon: Users,
    number: "02",
    label: "Expert Verification",
    sub: "1-on-1 session matching results to your real goals.",
    accent: "var(--accent-green)",
    accentRgb: "49,185,120",
  },
  {
    icon: GitCompareArrows,
    number: "03",
    label: "Strategic Shortlisting",
    sub: "Criteria-mapped shortlist across top global campuses.",
    accent: "var(--accent-blue)",
    accentRgb: "57,192,250",
  },
];

export default function PremiumQuizCTA() {
  return (
    <section className="qcta-section">
      {/* Subtle ambient blobs only — no lines */}
      <div className="qcta-blob qcta-blob--a" aria-hidden="true" />
      <div className="qcta-blob qcta-blob--b" aria-hidden="true" />

      <div className="qcta-container">

        {/* ── LEFT: Dark brand panel ── */}
        <div className="qcta-panel">
          {/* Soft inner glow orbs */}
          <div className="qcta-panel-orb qcta-panel-orb--1" aria-hidden="true" />
          <div className="qcta-panel-orb qcta-panel-orb--2" aria-hidden="true" />

          <div className="qcta-panel-content">
            <span className="qcta-micro-badge">
              <CheckCircle2 size={12} />
              Quiz Completed
            </span>

            <h2 className="qcta-heading">
              Got Your Match?
              <br />
              <span className="qcta-heading-accent">Let's Build It.</span>
            </h2>

            <p className="qcta-paragraph">
              Your quiz score is the starting line — not the finish. Our strategic counselors turn your country-fit results into a real action plan: shortlisted campuses, optimised applications, and clear visa pathways.
            </p>

            <div className="qcta-action-row">
              <a href="/contact" className="qcta-btn qcta-btn--primary">
                <span>Book Free Session</span>
                <span className="qcta-btn-arrow">
                  <ArrowRight size={15} />
                </span>
              </a>

              <a href="/compare-colleges" className="qcta-btn qcta-btn--ghost">
                <MessageCircle size={15} />
                <span>Compare Campuses</span>
              </a>
            </div>

            {/* Social proof footnote */}
            <p className="qcta-footnote">
              Trusted by 4,200+ students · 92% acceptance rate
            </p>
          </div>
        </div>

        {/* ── RIGHT: Step stamp cards ── */}
        <div className="qcta-steps">
          <div className="qcta-steps-header">
            <span className="qcta-steps-eyebrow">What happens next</span>
            <h3 className="qcta-steps-title">Your Path to Admission</h3>
          </div>

          <div className="qcta-steps-list">
            {TRUST_STEPS.map(({ icon: Icon, number, label, sub, accent, accentRgb }) => (
              <div
                key={number}
                className="qcta-step"
                style={{ "--step-accent": accent, "--step-rgb": accentRgb }}
              >
                {/* Left stamp band */}
                <div className="qcta-step-band">
                  <span className="qcta-step-num">{number}</span>
                </div>

                {/* Icon circle */}
                <div className="qcta-step-icon">
                  <Icon size={17} />
                </div>

                {/* Text */}
                <div className="qcta-step-text">
                  <h4 className="qcta-step-label">{label}</h4>
                  <p className="qcta-step-sub">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA nudge */}
          <div className="qcta-steps-nudge">
            <span>Ready to start?</span>
            <a href="/contact" className="qcta-nudge-link">
              Claim your spot <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>

      <style>{`
        /* ── Section ── */
        .qcta-section {
          font-family: var(--font-main);
          background: var(--bg-main);
          padding: clamp(72px, 10vw, 130px) 24px;
          position: relative;
          overflow: hidden;
        }

        /* Ambient blobs — no lines */
        .qcta-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }
        .qcta-blob--a {
          width: 480px;
          height: 480px;
          background: color-mix(in srgb, var(--primary) 8%, transparent);
          top: -120px;
          left: -100px;
        }
        .qcta-blob--b {
          width: 360px;
          height: 360px;
          background: color-mix(in srgb, var(--accent-blue) 7%, transparent);
          bottom: -80px;
          right: -80px;
        }

        /* ── Layout grid ── */
        .qcta-container {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: stretch;
          position: relative;
          z-index: 1;
        }

        /* ── LEFT PANEL ── */
        .qcta-panel {
          background: var(--gradient-secondary);
          border-radius: var(--radius-xl);
          padding: clamp(40px, 6vw, 60px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(36,20,79,0.28);
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 480px;
        }

        /* Soft inner orbs only — NO grid lines */
        .qcta-panel-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
        }
        .qcta-panel-orb--1 {
          width: 260px;
          height: 260px;
          background: rgba(57,192,250,0.18);
          top: -60px;
          right: -60px;
        }
        .qcta-panel-orb--2 {
          width: 200px;
          height: 200px;
          background: rgba(249,37,150,0.12);
          bottom: -40px;
          left: -40px;
        }

        .qcta-panel-content {
          position: relative;
          z-index: 2;
        }

        .qcta-micro-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-green);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }

        .qcta-heading {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 900;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 18px;
          letter-spacing: -0.03em;
        }

        .qcta-heading-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .qcta-paragraph {
          font-size: 15px;
          color: rgba(255,255,255,0.72);
          line-height: 1.8;
          margin: 0 0 36px;
          max-width: 380px;
        }

        /* ── Button row ── */
        .qcta-action-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          margin-bottom: 28px;
        }

        .qcta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 50px;
          padding: 0 22px;
          border-radius: var(--radius-md);
          font-family: var(--font-main);
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition);
          white-space: nowrap;
        }

        .qcta-btn--primary {
          background: #fff;
          color: var(--primary-dark);
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
          padding-right: 8px;
        }
        .qcta-btn--primary:hover {
          background: var(--primary-light);
          color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(109,83,163,0.22);
        }

        .qcta-btn-arrow {
          width: 34px;
          height: 34px;
          border-radius: calc(var(--radius-md) - 4px);
          background: var(--gradient-secondary);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition);
        }
        .qcta-btn--primary:hover .qcta-btn-arrow {
          background: var(--gradient-primary);
        }

        .qcta-btn--ghost {
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.16);
          color: #fff;
        }
        .qcta-btn--ghost:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.32);
          transform: translateY(-2px);
        }

        .qcta-footnote {
          font-size: 12px;
          color: rgba(255,255,255,0.38);
          margin: 0;
          letter-spacing: 0.01em;
        }

        /* ── RIGHT: Steps panel ── */
        .qcta-steps {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }

        .qcta-steps-header {
          margin-bottom: 28px;
        }

        .qcta-steps-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .qcta-steps-title {
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 800;
          color: var(--text-dark);
          margin: 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        /* ── Step cards — passport stamp style ── */
        .qcta-steps-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .qcta-step {
          display: flex;
          align-items: center;
          gap: 0;
          background: var(--bg-main);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }
        .qcta-step:hover {
          border-color: var(--step-accent);
          box-shadow: 0 8px 24px rgba(var(--step-rgb), 0.14);
          transform: translateY(-2px);
        }

        /* Left stamp band */
        .qcta-step-band {
          width: 52px;
          flex-shrink: 0;
          align-self: stretch;
          background: color-mix(in srgb, var(--step-accent) 10%, transparent);
          border-right: 1.5px solid color-mix(in srgb, var(--step-accent) 20%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .qcta-step:hover .qcta-step-band {
          background: color-mix(in srgb, var(--step-accent) 16%, transparent);
        }

        .qcta-step-num {
          font-size: 13px;
          font-weight: 900;
          color: var(--step-accent);
          letter-spacing: 0.05em;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          line-height: 1;
        }

        /* Icon circle */
        .qcta-step-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--step-accent) 10%, transparent);
          color: var(--step-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin: 0 16px;
          transition: var(--transition);
        }
        .qcta-step:hover .qcta-step-icon {
          background: var(--step-accent);
          color: #fff;
          box-shadow: 0 4px 14px rgba(var(--step-rgb), 0.35);
        }

        /* Text block */
        .qcta-step-text {
          flex: 1;
          padding: 18px 16px 18px 0;
        }

        .qcta-step-label {
          font-size: 14.5px;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 4px;
          letter-spacing: -0.01em;
          line-height: 1.3;
        }

        .qcta-step-sub {
          font-size: 12.5px;
          color: var(--text-medium);
          margin: 0;
          line-height: 1.5;
        }

        /* Bottom nudge */
        .qcta-steps-nudge {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 22px;
          font-size: 13px;
          color: var(--text-light);
          font-weight: 500;
        }

        .qcta-nudge-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
          transition: var(--transition);
        }
        .qcta-nudge-link:hover {
          gap: 8px;
          color: var(--primary-dark);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .qcta-container {
            grid-template-columns: 1fr;
          }
          .qcta-panel {
            min-height: auto;
          }
          .qcta-paragraph {
            max-width: 100%;
          }
        }

        @media (max-width: 520px) {
          .qcta-section {
            padding: 56px 16px;
          }
          .qcta-panel {
            padding: 32px 24px;
          }
          .qcta-btn {
            flex: 1;
            justify-content: center;
          }
          .qcta-btn--primary {
            justify-content: space-between;
          }
          .qcta-action-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}