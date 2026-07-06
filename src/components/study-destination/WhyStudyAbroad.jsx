import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Briefcase,
  Wallet,
  Award,
  Sparkles,
  MapPin,
} from "lucide-react";
import hubImg from "../../assets/images/ai-tool.png";
import sideImg from "../../assets/images/ai-tool.png";

const NODES = [
  {
    icon: <Sparkles size={22} />,
    title: "Scholarship access",
    color: "var(--primary)",
    angle: 240,
    radius: 205,
    arc: 230,
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Unforgettable experience",
    color: "var(--accent-pink)",
    angle: 180,
    radius: 250,
    arc: 210,
  },
  {
    icon: <Wallet size={22} />,
    title: "International funding options",
    color: "var(--secondary)",
    angle: 120,
    radius: 205,
    arc: 220,
  },
  {
    icon: <Award size={22} />,
    title: "Lower tuition abroad",
    color: "var(--accent-blue)",
    angle: 300,
    radius: 205,
    arc: 230,
  },
  {
    icon: <Globe2 size={22} />,
    title: "Time to explore the world",
    color: "var(--accent-green)",
    angle: 0,
    radius: 250,
    arc: 210,
  },
  {
    icon: <Briefcase size={22} />,
    title: "Better job prospects",
    color: "var(--extra-orange)",
    angle: 60,
    radius: 205,
    arc: 220,
  },
];

const VIEWBOX = 700;
const CENTER = 350;
const NODE_RADIUS = 74; // Half of 148px node size
const BACKDROP_RING_RADIUS = 228;

function toCssAngle(mathDeg) {
  return ((mathDeg + 90) % 360 + 360) % 360;
}

function WhyStudyAbroad() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  const popIn = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, scale: 0.85 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.5, delay, ease: "easeOut" },
        };

  return (
    <section className="wsa-root">
      <div className="wsa-container">
        <div className="wsa-top">
          <div className="wsa-left">
            <div className="wsa-orbit">
              {/* SVG Background Lines & Ring */}
              <svg
                className="wsa-lines"
                viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
              >
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={BACKDROP_RING_RADIUS}
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  opacity="0.5"
                />
                {NODES.map((node, i) => {
                  const rad = (node.angle * Math.PI) / 180;
                  const x2 = CENTER + node.radius * Math.cos(rad);
                  const y2 = CENTER + node.radius * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1={CENTER}
                      y1={CENTER}
                      x2={x2}
                      y2={y2}
                      stroke={node.color}
                      strokeWidth="2"
                      strokeDasharray="5 6"
                      opacity="0.65"
                    />
                  );
                })}
              </svg>

              <div className="wsa-hub-ring" />

              {/* Central Hub Image */}
              <motion.div className="wsa-hub" {...popIn(0.1)}>
                <img src={hubImg} alt="Student who studied abroad" />
              </motion.div>

              {/* Orbiting Benefit Nodes */}
              {NODES.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = node.radius * Math.cos(rad);
                const y = node.radius * Math.sin(rad);

                // Precise placement facing the hub boundary
                const dotX = -Math.cos(rad) * NODE_RADIUS;
                const dotY = -Math.sin(rad) * NODE_RADIUS;

                const outwardCss = toCssAngle(node.angle);
                const gradientFrom = ((outwardCss - node.arc / 2) % 360 + 360) % 360;

                return (
                  <motion.div
                    className="wsa-node"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      background: `conic-gradient(from ${gradientFrom}deg, ${node.color} 0deg ${node.arc}deg, var(--primary-dark) ${node.arc}deg 360deg)`,
                    }}
                    key={node.title}
                    {...popIn(0.15 + i * 0.06)}
                  >
                    <span
                      className="wsa-node-dot"
                      style={{
                        left: `calc(50% + ${dotX}px)`,
                        top: `calc(50% + ${dotY}px)`,
                        background: node.color,
                      }}
                    />
                    <div className="wsa-node-inner">
                      <div className="wsa-node-icon" style={{ color: node.color }}>
                        {node.icon}
                      </div>
                      <span className="wsa-node-title">{node.title}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div className="wsa-right" {...fadeUp(0.1)}>
            <h2 className="wsa-headline">
              <span className="wsa-headline-line wsa-headline-dark">Benefits of</span>
              <span className="wsa-headline-line wsa-headline-gradient">Studying</span>
              <span className="wsa-headline-line wsa-headline-dark">Abroad</span>
            </h2>

            <p>
              Studying abroad is more than earning a degree. It opens doors
              to global careers, international exposure, and lifelong
              opportunities most students never get at home.
            </p>

            <div className="wsa-media">
              <div className="wsa-media-shape" />
              <img src={sideImg} alt="Graduate ready for their study abroad journey" />
              <div className="wsa-media-flag">
                <MapPin size={14} />
                <span>A Study Destination</span>
              </div>
            </div>

            <div className="wsa-mini-stats">
              <div className="wsa-mini-stat">
                <strong>50+</strong>
                <span>Universities</span>
              </div>
              <div className="wsa-mini-stat">
                <strong>15+</strong>
                <span>Countries</span>
              </div>
              <div className="wsa-mini-stat">
                <strong>98%</strong>
                <span>Visa Success</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="wsa-grid">
          {NODES.map((node, index) => (
            <div className="wsa-card" key={index}>
              <div
                className="wsa-icon"
                style={{
                  color: node.color,
                  background: `color-mix(in srgb, ${node.color} 14%, transparent)`,
                }}
              >
                {node.icon}
              </div>
              <h3>{node.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .wsa-root {
          padding: 100px 24px;
          background: var(--bg-main);
          font-family: var(--font-main);
          overflow: hidden;
        }

        .wsa-container {
          max-width: 1200px;
          margin: auto;
        }

        .wsa-top {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 70px;
        }

        .wsa-left {
          display: flex;
          justify-content: center;
        }

        .wsa-orbit {
          position: relative;
          width: 700px;
          height: 700px;
          max-width: 100%;
        }

        .wsa-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .wsa-hub-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -125px;
          margin-top: -125px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          border: 2px dashed var(--border);
          z-index: 1;
        }

        .wsa-hub {
          position: absolute;
          top: 50%;
          left: 50%;
          margin-left: -92px;
          margin-top: -92px;
          width: 184px;
          height: 184px;
          border-radius: 50%;
          z-index: 3;
        }

        .wsa-hub img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid var(--white);
          box-shadow: var(--shadow-lg);
          display: block;
        }

        .wsa-node {
          position: absolute;
          margin-left: -74px;
          margin-top: -74px;
          width: 148px;
          height: 148px;
          border-radius: 50%;
          padding: 5px;
          box-shadow: var(--shadow-sm);
          transition: box-shadow var(--transition), transform var(--transition);
          z-index: 2;
        }

        .wsa-node:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }

        .wsa-node-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--white);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px;
          text-align: center;
        }

        .wsa-node-dot {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-left: -10px;
          margin-top: -10px;
          border: 3px solid var(--white);
          box-shadow: var(--shadow-sm);
          z-index: 4;
        }

        .wsa-node-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wsa-node-title {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--primary-dark);
          line-height: 1.3;
        }

        .wsa-right {
          display: flex;
          flex-direction: column;
        }

        .wsa-headline {
          margin-bottom: 18px;
        }

        .wsa-headline-line {
          display: block;
          font-size: clamp(2.4rem, 4.6vw, 3.6rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .wsa-headline-dark {
          color: var(--primary-dark);
        }

        .wsa-headline-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .wsa-headline-accent {
          color: var(--accent-pink);
        }

        .wsa-right p {
          line-height: 1.8;
          color: var(--text-medium);
          margin-bottom: 30px;
          max-width: 440px;
        }

        .wsa-media {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin-bottom: 34px;
        }

        .wsa-media-shape {
          position: absolute;
          bottom: -28px;
          right: -24px;
          width: 65%;
          height: 55%;
          background: var(--gradient-primary);
          opacity: 0.9;
          border-radius: var(--radius-xl) var(--radius-xl) 0 var(--radius-xl);
          z-index: 0;
        }

        .wsa-media img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          display: block;
        }

        .wsa-media-badge {
          position: absolute;
          bottom: -18px;
          left: 24px;
          z-index: 2;
          background: var(--white);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .wsa-media-badge svg {
          color: var(--accent-green);
          flex-shrink: 0;
        }

        .wsa-media-badge div {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }

        .wsa-media-badge strong {
          color: var(--primary-dark);
          font-size: 1rem;
        }

        .wsa-media-badge span {
          color: var(--text-light);
          font-size: 0.72rem;
        }

        .wsa-media-flag {
          position: absolute;
          top: 16px;
          right: -14px;
          z-index: 2;
          background: var(--primary-dark);
          color: var(--white);
          border-radius: 999px;
          padding: 8px 14px 8px 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          box-shadow: var(--shadow-lg);
        }

        .wsa-mini-stats {
          display: flex;
          gap: 32px;
        }

        .wsa-mini-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .wsa-mini-stat strong {
          font-size: 1.4rem;
          color: var(--primary-dark);
        }

        .wsa-mini-stat span {
          font-size: 0.78rem;
          color: var(--text-light);
        }

        .wsa-grid {
          display: none;
        }

        .wsa-card {
          background: var(--white);
          padding: 30px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
          text-align: center;
        }

        .wsa-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }

        .wsa-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 16px;
        }

        .wsa-card h3 {
          color: var(--primary-dark);
          font-size: 1rem;
        }

        @media (max-width: 992px) {
          .wsa-top {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 50px;
          }

          .wsa-left {
            display: none; /* Entirely hide dead block since orbit is hidden */
          }

          .wsa-right {
            align-items: center;
            text-align: center;
          }

          .wsa-right p {
            margin-left: auto;
            margin-right: auto;
          }

          .wsa-media,
          .wsa-mini-stats {
            align-self: center;
          }

          .wsa-orbit {
            display: none;
          }

          .wsa-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .wsa-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .wsa-media {
            max-width: 85%; /* Scales seamlessly on mid-size devices */
          }
        }

        @media (max-width: 640px) {
          .wsa-root {
            padding: 60px 16px;
          }

          .wsa-card {
            padding: 20px 16px; /* Optimized padding for small screens */
          }

          .wsa-mini-stats {
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .wsa-grid {
            grid-template-columns: 1fr; /* Stack cards cleanly on viewports under 480px */
            gap: 16px;
          }

          .wsa-media-flag {
            right: 0; /* Keep the ribbon within screen boundary boundaries */
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wsa-node,
          .wsa-hub {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

export default WhyStudyAbroad;