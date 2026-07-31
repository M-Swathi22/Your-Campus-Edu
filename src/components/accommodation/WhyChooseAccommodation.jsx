// src/components/accommodation/WhyChooseAccommodation.jsx
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wallet,
  Video,
  MapPin,
  Headphones,
  FileCheck2,
} from "lucide-react";
import { whyChooseFeatures } from "../../data/accommodationData";

const ICONS = {
  ShieldCheck,
  Wallet,
  Video,
  MapPin,
  Headphones,
  FileCheck2,
};

// Theme-token ring colors — cycled per card
const RING_COLORS = [
  "var(--secondary)",
  "var(--extra-orange)",
  "var(--accent-blue)",
  "var(--primary)",
  "var(--accent-pink)",
  "var(--accent-green)",
];

/* ---------- Arc math for the comet-style ring ---------- */
function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

const R = 92;
const C = 100;
const ARC_START = -76;
const ARC_END = 76;
const arcPath = describeArc(C, C, R, ARC_START, ARC_END);
const arcStart = polarToCartesian(C, C, R, ARC_START);
const arcEnd = polarToCartesian(C, C, R, ARC_END);

export default function WhyChooseAccommodation() {
  return (
    <section className="why-acc">
      <div className="why-acc__inner">
        <div className="why-acc__header">
          <span className="why-acc__eyebrow">WHY BOOK THROUGH US</span>

          <h2 className="why-acc__title">
            <span className="why-acc__title-accent">Stays we&apos;d trust</span>{" "}
            for our own kids
          </h2>

          <p className="why-acc__subtitle">
            Every stay checked, every rupee accounted for.
          </p>

          <div className="why-acc__dots" aria-hidden="true">
            {RING_COLORS.slice(0, 3).map((c, i) => (
              <span key={i} className="why-acc__dot" style={{ background: c }} />
            ))}
          </div>
        </div>

        <div className="why-acc__grid">
          {whyChooseFeatures.map((feature, i) => {
            const Icon = ICONS[feature.icon];
            const color = RING_COLORS[i % RING_COLORS.length];
            const num = String(i + 1).padStart(2, "0");
            const gradId = `why-acc-fade-${i}`;

            return (
              <motion.div
                className="why-acc__card"
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="why-acc__ring-wrap">
                  <svg
                    className="why-acc__ring-svg"
                    viewBox="0 0 200 200"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id={gradId}
                        gradientUnits="userSpaceOnUse"
                        x1={arcStart.x}
                        y1={arcStart.y}
                        x2={arcEnd.x}
                        y2={arcEnd.y}
                      >
                        <stop offset="0%" stopColor={color} stopOpacity="0" />
                        <stop offset="20%" stopColor={color} stopOpacity="1" />
                        <stop offset="80%" stopColor={color} stopOpacity="1" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* faint thin base ring — the "faded half" */}
                    <circle
                      cx={C}
                      cy={C}
                      r={R}
                      fill="none"
                      stroke={color}
                      strokeOpacity="0.16"
                      strokeWidth="1.5"
                    />

                    {/* thick dark arc on the right, fading into the thin ring */}
                    <path
                      d={arcPath}
                      fill="none"
                      stroke={`url(#${gradId})`}
                      strokeWidth="5.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div
                    className="why-acc__badge"
                    style={{ background: color }}
                  >
                    {Icon && <Icon size={22} strokeWidth={2.2} />}
                  </div>

                  <div className="why-acc__ring-content">
                    <span className="why-acc__card-eyebrow" style={{ color }}>
                      OPTION {num}
                    </span>
                    <h3 className="why-acc__card-title">{feature.title}</h3>
                    <p className="why-acc__card-desc">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-acc {
          background: var(--primary-light);
          font-family: var(--font-main);
          padding: clamp(3.5rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem);
        }

        .why-acc__inner {
          max-width: 1320px;
          margin: 0 auto;
        }

        .why-acc__header {
          max-width: 38rem;
          margin: 0 auto clamp(3rem, 6vw, 4.25rem);
          text-align: center;
        }

        .why-acc__eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: var(--primary);
          margin-bottom: 0.9rem;
        }

        .why-acc__title {
          font-size: clamp(1.9rem, 3.8vw, 2.75rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          color: var(--primary-dark);
          margin: 0 0 0.85rem;
        }

        .why-acc__title-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .why-acc__subtitle {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-medium);
          margin: 0 auto;
        }

        .why-acc__dots {
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 1.4rem;
        }

        .why-acc__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        /* ---- Grid ---- */

        .why-acc__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 1.25rem;
          row-gap: 2.25rem;
        }

        .why-acc__card {
          display: flex;
          justify-content: center;
        }

        /* ---- Ring ---- */

        .why-acc__ring-wrap {
          position: relative;
          width: 100%;
          max-width: 300px;
          aspect-ratio: 1 / 1;
        }

        .why-acc__ring-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 8px 18px rgba(36, 20, 79, 0.08));
        }

        .why-acc__badge {
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-white);
          box-shadow: 0 0 0 6px var(--primary-light), var(--shadow-md);
          z-index: 2;
        }

        .why-acc__ring-content {
          position: absolute;
          inset: 34px 26px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.5rem;
        }

        .why-acc__card-eyebrow {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .why-acc__card-title {
          font-size: 1.12rem;
          font-weight: 600;
          line-height: 1.3;
          color: var(--text-dark);
          margin: 0;
        }

        .why-acc__card-desc {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--text-medium);
          margin: 0;
        }

        @media (max-width: 960px) {
          .why-acc__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 2.5rem;
          }
        }

        @media (max-width: 620px) {
          .why-acc__grid {
            grid-template-columns: 1fr;
            row-gap: 2.5rem;
          }
          .why-acc__ring-wrap {
            max-width: 270px;
          }
          .why-acc__title { font-size: 1.8rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-acc__card { transition: none !important; }
        }
      `}</style>
    </section>
  );
}