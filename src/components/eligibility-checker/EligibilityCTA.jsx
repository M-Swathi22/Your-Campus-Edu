import { ArrowRight, MessageCircle, FileCheck, Globe, Users, CheckCircle2 } from "lucide-react";

const TRUST_METRICS = [
  { icon: FileCheck, label: "Free Eligibility Check", sub: "No registration required" },
  { icon: Users, label: "Expert Counselors", sub: "Available 6 days a week" },
  { icon: Globe, label: "India & 7+ Countries", sub: "Domestic & international" },
];

export default function EligibilityCTA() {
  return (
    <section className="elig-cta-section">
      <div className="elig-cta-container">
        
        {/* UPPER TRUST ROW: Minimalist Industry Cards */}
        <div className="elig-trust-row">
          {TRUST_METRICS.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="elig-trust-item">
              <div className="elig-trust-icon-wrapper">
                <Icon size={18} />
              </div>
              <div className="elig-trust-text-block">
                <span className="elig-trust-label">{label}</span>
                <span className="elig-trust-sub">{sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN CONVERSION PANEL: Premium Minimalist Split Layout */}
        <div className="elig-hero-panel">
          {/* Subtle Structural Overlay Grid Lines */}
          <div className="elig-panel-grid-lines" />

          {/* Left: Core Messaging and Value Checklist */}
          <div className="elig-panel-body">
            <h2 className="elig-panel-title">
              Got Your Result? <br />
              Let's Plan Your Next Move.
            </h2>
            <p className="elig-panel-desc">
              Our seasoned counselors help you interpret score matrices, shortlist target campuses, 
              uncover matching scholarship pools, and build a cohesive application timeline completely free.
            </p>
            
            <div className="elig-panel-bullets">
              <div className="elig-bullet">
                <CheckCircle2 size={14} className="elig-bullet-icon" />
                <span>Personalized Campus Matching Matrix</span>
              </div>
              <div className="elig-bullet">
                <CheckCircle2 size={14} className="elig-bullet-icon" />
                <span>Scholarship & Financial Aid Evaluation</span>
              </div>
            </div>
          </div>

          {/* Right: Focused Action Box with Embedded Performance Metrics */}
          <div className="elig-panel-actions-card">
            <div className="elig-action-header">
              <div className="elig-pulse-indicator">
                <span className="elig-pulse-dot" />
                <span className="elig-pulse-text">Counselors Active Now</span>
              </div>
            </div>

            <div className="elig-action-buttons">
              <a href="/contact" className="elig-main-btn elig-main-btn--primary">
                <span>Book Free Consultation</span>
                <ArrowRight size={15} className="elig-btn-arrow" />
              </a>
              
              <a href="/ai-course-match" className="elig-main-btn elig-main-btn--secondary">
                <MessageCircle size={15} />
                <span>Try AI Course Match</span>
              </a>
            </div>

            <span className="elig-action-footer-note">
              Average connection response time under 180 seconds.
            </span>
          </div>

        </div>
      </div>

      <style>{`
        /* ===== STRUCTURAL CONTAINERS ===== */
        .elig-cta-section {
          font-family: var(--font-main), system-ui, -apple-system, sans-serif;
          padding: clamp(60px, 8vw, 100px) 24px;
          background: var(--bg-light);
          position: relative;
        }

        .elig-cta-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* ===== TOP ROW: MINIMALIST TRUST HOVER CARDS ===== */
        .elig-trust-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        .elig-trust-item {
          background: var(--bg-main, #ffffff);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: border-color var(--transition, 0.2s), transform var(--transition, 0.2s);
        }

        .elig-trust-item:hover {
          border-color: color-mix(in srgb, var(--primary) 30%, var(--border));
          transform: translateY(-2px);
        }

        .elig-trust-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .elig-trust-text-block {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .elig-trust-label {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .elig-trust-sub {
          font-size: 12px;
          color: var(--text-light);
        }

        /* ===== MAIN HERO PANEL: SPLIT ARCHITECTURE ===== */
        .elig-hero-panel {
          position: relative;
          background: var(--gradient-secondary);
          border-radius: var(--radius-xl);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
          box-shadow: var(--shadow-md), 0 20px 40px color-mix(in srgb, var(--primary) 8%, transparent);
        }

        @media (min-width: 860px) {
          .elig-hero-panel {
            grid-template-columns: 1.25fr 0.95fr;
          }
        }

        /* Minimalist internal wireframe grid background */
        .elig-panel-grid-lines {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: linear-gradient(var(--white) 1px, transparent 1px),
                            linear-gradient(90deg, var(--white) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        /* Left Side Content Styles */
        .elig-panel-body {
          position: relative;
          z-index: 2;
          padding: clamp(32px, 5vw, 56px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .elig-panel-title {
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 800;
          color: var(--white, #ffffff);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }

        .elig-panel-desc {
          font-size: 15px;
          color: color-mix(in srgb, var(--white) 80%, transparent);
          line-height: 1.6;
          margin: 0 0 28px;
          max-width: 540px;
        }

        .elig-panel-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .elig-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 600;
          color: var(--white);
        }

        .elig-bullet-icon {
          color: color-mix(in srgb, var(--white) 85%, transparent);
          flex-shrink: 0;
        }

        /* Right Side Content / Dark Minimalist Context Box */
        .elig-panel-actions-card {
          position: relative;
          z-index: 2;
          background: rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: clamp(32px, 5vw, 56px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 24px;
        }

        @media (min-width: 860px) {
          .elig-panel-actions-card {
            border-top: none;
            border-left: 1px solid rgba(255, 255, 255, 0.08);
          }
        }

        /* Live Activity Bar */
        .elig-pulse-indicator {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 6px 14px;
          border-radius: 100px;
        }

        .elig-pulse-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-green, #31b978);
          border-radius: 50%;
          display: inline-block;
          animation: eligPulse 2s infinite ease-in-out;
        }

        .elig-pulse-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--white) 90%, transparent);
        }

        /* Buttons & Interactions */
        .elig-action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .elig-main-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 28px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: transform var(--transition, 0.2s), cubic-bezier(0.16, 1, 0.3, 1);
        }

        .elig-main-btn--primary {
          background: var(--white, #ffffff);
          color: var(--primary);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .elig-main-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .elig-btn-arrow {
          transition: transform var(--transition, 0.2s);
        }

        .elig-main-btn--primary:hover .elig-btn-arrow {
          transform: translateX(3px);
        }

        .elig-main-btn--secondary {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: var(--white);
        }

        .elig-main-btn--secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .elig-action-footer-note {
          font-size: 11px;
          color: color-mix(in srgb, var(--white) 50%, transparent);
          text-align: center;
          line-height: 1.4;
        }

        /* Keyframes */
        @keyframes eligPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}