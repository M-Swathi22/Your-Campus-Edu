import React from "react";
import {
  Target,
  Clock3,
  Wallet,
  Building2,
  ShieldCheck,
  Globe,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Personalized Guidance",
    description:
      "Receive recommendations tailored to your academic background, interests, career goals, and preferences.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    description:
      "Avoid spending hours researching universities, countries, fees, and admission requirements manually.",
  },
  {
    icon: Wallet,
    title: "Smarter Budget Planning",
    description:
      "Understand tuition fees, living costs, and affordable study options before making decisions.",
  },
  {
    icon: Building2,
    title: "Better College Selection",
    description:
      "Compare institutions side-by-side and choose the best fit for your academic journey.",
  },
  {
    icon: ShieldCheck,
    title: "Admission Confidence",
    description:
      "Check eligibility and requirements early to reduce uncertainty during applications.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "Explore study destinations worldwide and discover countries aligned with your goals.",
  },
];

function WaveLeft() {
  return (
    <svg
      viewBox="0 0 340 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
      preserveAspectRatio="none"
    >
      <path
        d="M 0,0 L 155,0 Q 122,35 95,78 Q 72,112 58,155 L 0,155 Z"
        fill="var(--primary)"
      />
      <path
        d="M 0,105 Q 32,88 60,112 Q 80,132 70,168 L 0,168 Z"
        fill="var(--primary-dark)"
      />
      <path
        d="M 0,158 Q 44,142 76,168 Q 98,184 92,220 L 0,220 Z"
        fill="var(--primary)"
      />
    </svg>
  );
}

function WaveRight() {
  return (
    <svg
      viewBox="0 0 340 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
      preserveAspectRatio="none"
    >
      <path
        d="M 340,0 L 185,0 Q 218,35 245,78 Q 268,112 282,155 L 340,155 Z"
        fill="var(--primary)"
      />
      <path
        d="M 340,105 Q 308,88 280,112 Q 260,132 270,168 L 340,168 Z"
        fill="var(--primary-dark)"
      />
      <path
        d="M 340,158 Q 296,142 264,168 Q 242,184 248,220 L 340,220 Z"
        fill="var(--primary)"
      />
    </svg>
  );
}

export default function BenefitsSection() {
  return (
    <section
      style={{
        fontFamily: "var(--font-main)",
        background: "var(--bg-light)",
        padding: "88px 24px",
      }}
    >
      <style>{`
        /* ── Heading ── */
        .ben-heading-wrap {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 64px;
        }
        .ben-label {
          display: inline-flex;
          align-items: center;
          padding: 8px 22px;
          border-radius: 100px;
          background: var(--primary-light);
          color: var(--primary);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .ben-title {
          font-size: clamp(28px, 3.8vw, 44px);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.22;
          margin: 0 0 14px;
        }
        .ben-title-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ben-subtitle {
          font-size: 15.5px;
          color: var(--text-medium);
          line-height: 1.72;
          margin: 0;
        }

        /* ── Grid ── */
        .ben-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1140px;
          margin: 0 auto;
        }
        @media (max-width: 960px) {
          .ben-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .ben-grid { grid-template-columns: 1fr; }
        }

        /* ── Card ── */
        .ben-card {
          position: relative;
          background: var(--bg-main);
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 230px;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }
        .ben-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        /* Accent bars */
        .ben-bar-right {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 52px;
          border-radius: 4px 0 0 4px;
          background: var(--primary);
          z-index: 4;
        }
        .ben-bar-left {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 52px;
          border-radius: 0 4px 4px 0;
          background: var(--primary);
          z-index: 4;
        }

        /* Content areas — UNTOUCHED */
        .ben-content-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
          height: 100%;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px 32px 28px 10px;
          gap: 10px;
        }
        .ben-content-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px 10px 28px 32px;
          gap: 10px;
        }

        /* Icon — default (used by 2nd row, UNTOUCHED) */
        .ben-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-sm);
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Icon — 1st row only: absolute top-right corner */
        .ben-icon-wrap--top-right {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 6;
          width: 50px;
          height: 50px;
          border-radius: var(--radius-sm);
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Text */
        .ben-card-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.3;
          margin: 0;
        }
        .ben-card-desc {
          font-size: 12.5px;
          color: var(--text-medium);
          line-height: 1.68;
          margin: 0;
        }
      `}</style>

      {/* Heading */}
      <div className="ben-heading-wrap">
        <div className="ben-label">Why Students Choose Us</div>
        <h2 className="ben-title">
          Benefits of Using Our{" "}<br />
          <span className="ben-title-accent">AI Tools</span>
        </h2>
        <p className="ben-subtitle">
          Make smarter educational decisions with intelligent guidance, instant
          insights, and data-driven recommendations.
        </p>
      </div>

      {/* Grid */}
      <div className="ben-grid">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          const isLeftWave = index < 3;

          return (
            <div key={index} className="ben-card">

              {isLeftWave ? <WaveLeft /> : <WaveRight />}

              {isLeftWave
                ? <div className="ben-bar-right" />
                : <div className="ben-bar-left" />
              }

              {/* 1st row: icon absolutely pinned top-right, outside content div */}
              {isLeftWave && (
                <div className="ben-icon-wrap--top-right">
                  <Icon size={24} strokeWidth={2} />
                </div>
              )}

              <div className={isLeftWave ? "ben-content-right" : "ben-content-left"}>
                {/* 2nd row: icon stays here, exactly as original — UNTOUCHED */}
                {!isLeftWave && (
                  <div className="ben-icon-wrap">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                )}
                <h3 className="ben-card-title">{benefit.title}</h3>
                <p className="ben-card-desc">{benefit.description}</p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}