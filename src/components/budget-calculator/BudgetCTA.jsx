import { ArrowRight, MessageCircle, Calculator, Users, Globe, PiggyBank, Sparkles } from "lucide-react";

const TRUST = [
  { icon: Calculator, label: "Free to Use",          sub: "No account or login required" },
  { icon: Users,      label: "Expert Counselors",   sub: "Assistance with loans & visas" },
  { icon: Globe,      label: "8+ Destinations",     sub: "Global & domestic pathways" },
  { icon: PiggyBank,  label: "Scholarship Guidance", sub: "Fully-funded opportunities" },
];

export default function BudgetCTA() {
  return (
    <section className="budget-cta">
      {/* Subtle organic background depth */}
      <div className="budget-cta__ambient" />

      <div className="budget-cta__container">
        
        {/* LEFT COLUMN: Clean High-Contrast Action Terminal */}
        <div className="budget-panel">
          <div className="budget-panel__bg" />
          <div className="budget-panel__inner">
            
            <span className="budget-panel__badge">
              <Sparkles size={12} />
              Financial Roadmap
            </span>

            <h2 className="budget-panel__title">
              Budget Ready? <br />
              Let's Make It Happen.
            </h2>

            <p className="budget-panel__description">
              Our seasoned counselors help you structure education loans, secure regional 
              scholarships, and match with premium, high-ROI campuses entirely free of cost.
            </p>

            <div className="budget-panel__actions">
              <a href="/contact" className="budget-btn budget-btn--primary">
                <span>Book Free Consultation</span>
                <div className="budget-btn__arrow">
                  <ArrowRight size={16} />
                </div>
              </a>
              
              <a href="/eligibility-checker" className="budget-btn budget-btn--secondary">
                <MessageCircle size={16} />
                <span>Check Eligibility</span>
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Professional Minimalist Trust Grid */}
        <div className="budget-trust">
          <div className="budget-trust__header">
            <span className="budget-trust__tagline">PLATFORM ADVANTAGES</span>
            <h3 className="budget-trust__title">Transparent planning from start to finish.</h3>
          </div>

          <div className="budget-trust__grid">
            {TRUST.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="budget-card">
                <div className="budget-card__icon-wrap">
                  <Icon size={18} />
                </div>
                <div className="budget-card__content">
                  <h4 className="budget-card__label">{label}</h4>
                  <p className="budget-card__sub">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        /* ===== UTILITY CONTAINER ===== */
        .budget-cta {
          position: relative;
          font-family: var(--font-main), system-ui, -apple-system, sans-serif;
          padding: clamp(60px, 8vw, 100px) 24px;
          background: var(--bg-light);
          overflow: hidden;
        }

        .budget-cta__container {
          position: relative;
          z-index: 2;
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }

        @media (min-width: 960px) {
          .budget-cta__container {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 64px;
          }
        }

        .budget-cta__ambient {
          position: absolute;
          width: 450px;
          height: 450px;
          background: var(--primary-light);
          filter: blur(130px);
          border-radius: 50%;
          opacity: 0.5;
          top: -100px;
          right: -50px;
          pointer-events: none;
          z-index: 1;
        }

        /* ===== LEFT: ASYMMETRIC CORE PANEL ===== */
        .budget-panel {
          position: relative;
          background: var(--gradient-secondary);
          border-radius: var(--radius-xl);
          padding: clamp(32px, 6vw, 56px);
          overflow: hidden;
          box-shadow: var(--shadow-lg), 0 20px 40px color-mix(in srgb, var(--primary) 10%, transparent);
        }

        .budget-panel__bg {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: radial-gradient(#fff 1px, transparent 1px);
          background-size: 16px 16px;
        }

        .budget-panel__inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .budget-panel__badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--white);
          background: rgba(255, 255, 255, 0.12);
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 24px;
        }

        .budget-panel__title {
          font-size: clamp(26px, 4.2vw, 38px);
          font-weight: 800;
          color: var(--white);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 16px 0;
        }

        .budget-panel__description {
          font-size: 15px;
          color: color-mix(in srgb, var(--white) 84%, transparent);
          line-height: 1.6;
          max-width: 540px;
          margin: 0 0 36px 0;
        }

        .budget-panel__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          width: 100%;
        }

        /* ===== ACTION CONTROLS ===== */
        .budget-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 30px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition);
        }

        @media (max-width: 480px) {
          .budget-btn {
            width: 100%;
          }
        }

        .budget-btn--primary {
          background: var(--white);
          color: var(--primary);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
        }

        .budget-btn--primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.14);
        }

        .budget-btn__arrow {
          display: flex;
          align-items: center;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .budget-btn--primary:hover .budget-btn__arrow {
          transform: translateX(4px);
        }

        .budget-btn--secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--white);
          backdrop-filter: blur(4px);
        }

        .budget-btn--secondary:hover {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.35);
          transform: translateY(-2px);
        }

        /* ===== RIGHT: MINIMALIST METADATA TRUST HUB ===== */
        .budget-trust {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .budget-trust__header {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .budget-trust__tagline {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--primary);
        }

        .budget-trust__title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-dark);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .budget-trust__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 520px) and (max-width: 959px) {
          .budget-trust__grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .budget-card {
          background: var(--bg-main);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: var(--transition);
        }

        .budget-card:hover {
          transform: translateX(4px);
          border-color: color-mix(in srgb, var(--primary) 25%, var(--border));
          box-shadow: var(--shadow-sm);
        }

        @media (max-width: 959px) {
          .budget-card:hover {
            transform: translateY(-2px);
          }
        }

        .budget-card__icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition);
        }

        .budget-card:hover .budget-card__icon-wrap {
          background: var(--primary);
          color: var(--white);
        }

        .budget-card__content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .budget-card__label {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0;
        }

        .budget-card__sub {
          font-size: 12px;
          color: var(--text-light);
          margin: 0;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}