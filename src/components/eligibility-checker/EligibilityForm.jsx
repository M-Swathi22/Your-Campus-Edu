import { useState } from "react";
import { Sparkles, MapPin, Globe, ArrowRight, Plane, GraduationCap, Compass, BookOpen, Fingerprint } from "lucide-react";
import DomesticForm from "./DomesticForm";
import AbroadForm from "./AbroadForm";

const TYPES = [
  {
    key: "domestic",
    icon: MapPin,
    title: "Study in India",
    subtitle: "Eligibility for Indian colleges, NEET, JEE, CLAT, CUET and more",
    tag: "Domestic Pathway",
    accentColor: "var(--accent-green)",
    fromCode: "YOU",
    fromLabel: "Aspirant",
    toCode: "CAMPUS",
    toLabel: "Indian University",
    watermark: "INDIA",
    // Contextual Academic Stub Data
    stubData: [
      { label: "EXAM GATEWAY", value: "JEE / NEET / CUET" },
      { label: "ELIGIBILITY MATRIX", value: "12th / UG Criteria" },
      { label: "EVALUATION TIME", value: "Instant (~3m)" }
    ],
    actionText: "CHECK ELIGIBILITY"
  },
  {
    key: "abroad",
    icon: Globe,
    title: "Study Abroad",
    subtitle: "Eligibility for USA, UK, Canada, Australia, Germany, Ireland & more",
    tag: "Global Transit",
    accentColor: "var(--accent-blue)",
    fromCode: "IND",
    fromLabel: "Origin",
    toCode: "GLOBAL",
    toLabel: "International Campus",
    watermark: "ABROAD",
    // Contextual Immigration / Travel Stub Data
    stubData: [
      { label: "VISA ASSESSMENT", value: "Tier 4 / Student Visa" },
      { label: "LANGUAGE TRACK", value: "IELTS / TOEFL / GMAT" },
      { label: "EVALUATION TIME", value: "Instant (~4m)" }
    ],
    actionText: "START ASSESSMENT"
  },
];

export default function EligibilityForm({ onSubmit }) {
  const [type, setType] = useState(null);

  return (
    <section id="eligibility-form" className="elig-form">
      <div className="elig-form__ambient elig-form__ambient--a" />
      <div className="elig-form__ambient elig-form__ambient--b" />

      <div className="elig-form__inner">
        {!type && (
          <>
            <div className="elig-form__header">
              <span className="elig-form__eyebrow">
                <Sparkles size={14} />
                Eligibility Portal
              </span>
              <h2 className="elig-form__title">Where do you want to study?</h2>
              <p className="elig-form__subtitle">
                Select your academic direction below to review targeted grade, quota, and entry requirements.
              </p>
            </div>

            <div className="elig-form__grid">
              {TYPES.map(({ key, icon: Icon, title, subtitle, tag, accentColor, fromCode, fromLabel, toCode, toLabel, watermark, stubData, actionText }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setType(key)}
                  className="elig-ticket"
                  style={{ "--card-accent": accentColor }}
                  aria-label={`Select ${title}`}
                >
                  {/* Decorative backdrop graphics */}
                  <div className="elig-ticket__bg-glow" />
                  <div className="elig-ticket__watermark">{watermark}</div>

                  {/* Left Main Segment: Core Info & Conditional Journey Mapping */}
                  <div className="elig-ticket__main">
                    <div className="elig-ticket__meta">
                      <div className="elig-ticket__icon-frame">
                        <Icon size={20} />
                      </div>
                      <span className="elig-ticket__tag">{tag}</span>
                    </div>

                    <div className="elig-ticket__content">
                      <h3 className="elig-ticket__title">{title}</h3>
                      <p className="elig-ticket__subtitle">{subtitle}</p>
                    </div>

                    {/* DYNAMIC TRACKING SECTION */}
                    <div className="elig-ticket__route">
                      <div className="elig-ticket__checkpoint">
                        <span className="elig-ticket__checkpoint-code">{fromCode}</span>
                        <span className="elig-ticket__checkpoint-name">{fromLabel}</span>
                      </div>
                      
                      <div className="elig-ticket__track">
                        <span className="elig-ticket__track-node elig-ticket__track-node--active" />
                        <div className="elig-ticket__track-vector">
                          {key === "domestic" ? (
                            <BookOpen size={14} className="elig-ticket__track-runner" />
                          ) : (
                            <Plane size={14} className="elig-ticket__track-runner" />
                          )}
                        </div>
                        <span className="elig-ticket__track-node" />
                      </div>

                      <div className="elig-ticket__checkpoint elig-ticket__checkpoint--right">
                        <span className="elig-ticket__checkpoint-code">
                          {key === "domestic" ? <GraduationCap size={24} style={{ verticalAlign: 'middle', color: 'var(--primary)' }} /> : toCode}
                        </span>
                        <span className="elig-ticket__checkpoint-name">{toLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Separation / Tear Gutter Lines */}
                  <div className="elig-ticket__tear-strip">
                    <div className="elig-ticket__notch elig-ticket__notch--top" />
                    <div className="elig-ticket__perforation" />
                    <div className="elig-ticket__notch elig-ticket__notch--bottom" />
                  </div>

                  {/* Right Custom Segment: Domain Specific Checklist Stubs */}
                  <div className="elig-ticket__stub">
                    {stubData.map((item, idx) => (
                      <div className="elig-ticket__stub-data" key={idx}>
                        <span className="elig-ticket__stub-label">{item.label}</span>
                        <span className="elig-ticket__stub-value">{item.value}</span>
                      </div>
                    ))}

                    <div className="elig-ticket__stub-action">
                      <span>{actionText}</span>
                      <ArrowRight size={14} className="elig-ticket__stub-arrow" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {type === "domestic" && (
          <DomesticForm onSubmit={(data) => onSubmit({ ...data, type: "domestic" })} onBack={() => setType(null)} />
        )}
        {type === "abroad" && (
          <AbroadForm onSubmit={(data) => onSubmit({ ...data, type: "abroad" })} onBack={() => setType(null)} />
        )}
      </div>

      <style>{`
        .elig-form {
          position: relative;
          font-family: var(--font-main);
          background: var(--bg-section);
          padding: clamp(56px, 8vw, 96px) 24px;
          overflow: hidden;
        }
        .elig-form__ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .elig-form__ambient--a {
          width: 380px; height: 380px;
          background: var(--primary-light);
          top: -120px; left: -100px;
          opacity: 0.7;
        }
        .elig-form__ambient--b {
          width: 320px; height: 320px;
          background: color-mix(in srgb, var(--accent-blue) 14%, transparent);
          bottom: -100px; right: -80px;
        }
        .elig-form__inner {
          position: relative;
          max-width: 1040px;
          margin: 0 auto;
        }
        .elig-form__header {
          text-align: center;
          margin-bottom: 56px;
        }
        .elig-form__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 100px;
          padding: 8px 18px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .elig-form__title {
          font-size: clamp(28px, 4.5vw, 38px);
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .elig-form__subtitle {
          font-size: 15px;
          color: var(--text-medium);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .elig-form__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        /* ===== ADAPTIVE PHYSICAL TICKETS WITH GRAPHIC OVERRIDES ===== */
        .elig-ticket {
          position: relative;
          text-align: left;
          font-family: var(--font-main);
          background: var(--bg-main);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 0;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }

        .elig-ticket__bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 15% 30%, var(--card-accent), transparent 40%);
          opacity: 0.02;
          pointer-events: none;
          transition: var(--transition);
        }

        .elig-ticket__watermark {
          position: absolute;
          bottom: -20px;
          left: 40px;
          font-size: 96px;
          font-weight: 900;
          color: var(--bg-light);
          opacity: 0.35;
          z-index: 0;
          pointer-events: none;
          letter-spacing: -0.01em;
          transition: var(--transition);
        }

        .elig-ticket:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--card-accent) 40%, var(--border));
          box-shadow: var(--shadow-lg);
        }

        .elig-ticket:hover .elig-ticket__bg-glow {
          opacity: 0.06;
        }

        .elig-ticket:hover .elig-ticket__watermark {
          transform: translateY(-4px);
          color: color-mix(in srgb, var(--card-accent) 10%, var(--bg-light));
        }

        .elig-ticket:focus-visible {
          outline: 2px solid var(--primary);
          outline-offset: 4px;
        }

        /* Ticket Left Side Elements */
        .elig-ticket__main {
          position: relative;
          z-index: 1;
          flex: 1;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .elig-ticket__meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .elig-ticket__icon-frame {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .elig-ticket:hover .elig-ticket__icon-frame {
          background: var(--card-accent);
          color: var(--white);
        }

        .elig-ticket__tag {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-medium);
          background: var(--bg-light);
          padding: 5px 14px;
          border-radius: 100px;
        }

        .elig-ticket__content {
          max-width: 90%;
        }

        .elig-ticket__title {
          font-size: 22px;
          font-weight: 800;
          color: var(--text-dark);
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }

        .elig-ticket__subtitle {
          font-size: 14px;
          color: var(--text-medium);
          line-height: 1.5;
          margin: 0;
        }

        /* Dynamic Progress / Route Strip Layout */
        .elig-ticket__route {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: auto;
          max-width: 480px;
          position: relative;
          z-index: 2;
        }

        .elig-ticket__checkpoint {
          display: flex;
          flex-direction: column;
          min-width: 65px;
        }
        
        .elig-ticket__checkpoint--right {
          align-items: flex-end;
          text-align: right;
        }

        .elig-ticket__checkpoint-code {
          font-size: 22px;
          font-weight: 800;
          color: var(--primary-dark);
          line-height: 1;
        }

        .elig-ticket__checkpoint-name {
          font-size: 10px;
          font-weight: 600;
          color: var(--text-light);
          text-transform: uppercase;
          margin-top: 5px;
          letter-spacing: 0.04em;
        }

        .elig-ticket__track {
          flex: 1;
          display: flex;
          align-items: center;
          position: relative;
        }

        .elig-ticket__track-node {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--border);
          position: relative;
          z-index: 1;
        }

        .elig-ticket__track-node--active {
          background: var(--card-accent);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--card-accent) 20%, transparent);
        }

        .elig-ticket__track-vector {
          flex: 1;
          height: 2px;
          background: var(--border);
          margin: 0 -2px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .elig-ticket__track-runner {
          color: var(--text-light);
          background: var(--bg-main);
          padding: 0 8px;
          box-sizing: content-box;
          transform: translateX(-15px);
          transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), color 0.3s;
        }

        .elig-ticket:hover .elig-ticket__track-runner {
          transform: translateX(15px);
          color: var(--card-accent);
        }

        /* Center Section: Ticket Perforated Lines */
        .elig-ticket__tear-strip {
          position: relative;
          width: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg-main);
          user-select: none;
        }

        .elig-ticket__notch {
          position: absolute;
          width: 24px;
          height: 12px;
          background: var(--bg-section);
          border: 1px solid var(--border);
          z-index: 2;
        }

        .elig-ticket__notch--top {
          top: -1px;
          border-radius: 0 0 12px 12px;
          border-top: none;
        }

        .elig-ticket__notch--bottom {
          bottom: -1px;
          border-radius: 12px 12px 0 0;
          border-bottom: none;
        }

        .elig-ticket__perforation {
          height: 85%;
          width: 1px;
          border-left: 2px dashed var(--border);
        }

        /* Right Side: Specialized Stub Segment */
        .elig-ticket__stub {
          position: relative;
          z-index: 1;
          width: 240px;
          background: color-mix(in srgb, var(--bg-light) 50%, var(--bg-main));
          border-left: 1px dashed var(--border);
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .elig-ticket__stub-data {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .elig-ticket__stub-label {
          font-size: 9px;
          font-weight: 700;
          color: var(--text-light);
          letter-spacing: 0.08em;
        }

        .elig-ticket__stub-value {
          font-size: 14px;
          font-weight: 700;
          color: var(--primary-dark);
          line-height: 1.3;
        }

        .elig-ticket__stub-action {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 18px;
          background: var(--gradient-secondary);
          border-radius: var(--radius-sm);
          color: var(--white);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          transition: var(--transition);
        }

        .elig-ticket__stub-arrow {
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .elig-ticket:hover .elig-ticket__stub-action {
          background: var(--primary);
          box-shadow: 0 6px 16px color-mix(in srgb, var(--primary) 25%, transparent);
        }

        .elig-ticket:hover .elig-ticket__stub-arrow {
          transform: translateX(4px);
        }

        /* Screen Configurations */
        @media (min-width: 860px) {
          .elig-form__grid {
            grid-template-columns: 1fr 1fr;
          }
          .elig-ticket__stub {
            width: 180px;
            padding: 28px 20px;
          }
          .elig-ticket__main {
            padding: 28px 24px;
          }
          .elig-ticket__watermark {
            font-size: 68px;
          }
        }

        @media (max-width: 600px) {
          .elig-ticket {
            flex-direction: column;
          }
          .elig-ticket__tear-strip {
            display: none;
          }
          .elig-ticket__stub {
            width: 100%;
            border-left: none;
            border-top: 1px dashed var(--border);
            padding: 24px;
          }
          .elig-ticket__stub-action {
            margin-top: 12px;
            width: 100%;
          }
          .elig-ticket__main {
            padding: 24px;
          }
          .elig-ticket__content {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}