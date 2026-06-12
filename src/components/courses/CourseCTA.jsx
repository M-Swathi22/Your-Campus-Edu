import { PhoneCall } from "lucide-react";

export default function CourseCTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">

          <div className="cta-content">
            <h2 className="cta-heading">
              Still Confused About
              <br />
              Choosing a Course?
            </h2>

            <p className="cta-sub">
              Talk with our expert advisors and get personalized guidance
              matched to your goals, scores, and budget — completely free.
            </p>

            <div className="cta-actions">
              <button className="cta-btn cta-btn--primary">
                <PhoneCall size={16} />
                Book Free Counseling
              </button>
              <button className="cta-btn cta-btn--ghost">
                Browse All Courses →
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* ── Structural Layout ── */
        .cta-section {
          padding: 0 0 80px;
          font-family: var(--font-main);
        }
        .cta-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* ── Premium Gradient Card Design ── */
        .cta-card {
          background: var(--gradient-secondary);
          border-radius: var(--radius-xl);
          padding: 72px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        /* ── Center Content Engine ── */
        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 620px;
          margin: 0 auto;
        }

        /* ── Typography Restyling ── */
        .cta-heading {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700; /* Sleeker aesthetic font-weight matching */
          color: var(--white);
          line-height: 1.25;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }
        .cta-sub {
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
          color: var(--primary-light); /* Highly crisp contrast base */
          line-height: 1.7;
          margin: 0 0 36px;
          opacity: 0.9;
        }

        /* ── Interactive Action Elements ── */
        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-main);
          font-size: 0.95rem;
          font-weight: 700;
          padding: 16px 32px;
          border-radius: var(--radius-md);
          cursor: pointer;
          border: 2px solid transparent;
          transition: var(--transition);
        }
        .cta-btn--primary {
          background: var(--gradient-primary);
          color: var(--white);
          box-shadow: var(--shadow-md);
        }
        .cta-btn--primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(49, 185, 120, 0.35);
        }
        .cta-btn--ghost {
          background: rgba(255, 255, 255, 0.06);
          color: var(--white);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .cta-btn--ghost:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px);
        }

        /* ── Responsive Viewports ── */
        @media (max-width: 768px) {
          .cta-card {
            padding: 56px 24px;
          }
          .cta-actions {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .cta-btn {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}