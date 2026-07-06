import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import story1 from "../../assets/images/story/story1.jpg";
import story2 from "../../assets/images/story/story2.jpg";
import story3 from "../../assets/images/story/story3.jpg";
import story4 from "../../assets/images/story/story4.jpg";
import story5 from "../../assets/images/story/story5.jpg";
import story6 from "../../assets/images/story/story6.png";

const FEATURES = [
  "Expert Career Counseling",
  "University & Course Selection",
  "Personalized Student Guidance",
  "Scholarship & Admission Support",
  "Long-Term Career Planning",
];

/* ─────────────────────────────────────────────────────────────
   Flower collage geometry  —  ViewBox 580 × 580
   Center : r = 100  at (290, 290)
   Petals : r = 108  offset 190px from center
───────────────────────────────────────────────────────────── */
const CX       = 290;
const CY       = 290;
const CENTER_R = 100;
const PETAL_R  = 108;
const OFFSET   = 190;
const BORDER   = 7;

const SRCS = [story1, story2, story3, story4, story5];

const petals = [0, 1, 2, 3, 4].map((i) => ({
  x: CX + OFFSET * Math.sin((Math.PI * 2 * i) / 5),
  y: CY - OFFSET * Math.cos((Math.PI * 2 * i) / 5),
  src: SRCS[i],
}));

export default function OurStory() {
  return (
    <section
      className="our-story-section"
      style={{ background: "var(--bg-light)", fontFamily: "var(--font-main)" }}
    >
      <style>{`
        .our-story-section {
          position: relative;
          overflow: hidden;
          padding: clamp(64px, 10vw, 128px) 0;
        }

        .our-story-blob {
          position: absolute;
          top: -100px;
          left: -100px;
          width: clamp(200px, 40vw, 420px);
          height: clamp(200px, 40vw, 420px);
          border-radius: 50%;
          background: var(--primary-light);
          opacity: 0.5;
          z-index: 0;
        }

        .our-story-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 48px);
        }

        .our-story-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: clamp(40px, 6vw, 64px);
        }

        @media (min-width: 1024px) {
          .our-story-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ── Flower collage wrapper ── */
        .our-story-collage-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          /* On mobile the SVG should not overflow the screen */
          width: 100%;
        }

        .our-story-collage-inner {
          position: relative;
          /* Intrinsic SVG sizing: let it fill available width up to 520px */
          width: min(100%, 520px);
        }

        .our-story-glow {
          position: absolute;
          inset: 10%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(109,83,163,0.09) 0%, transparent 68%);
          z-index: 0;
          pointer-events: none;
        }

        .our-story-svg {
          width: 100%;
          height: auto;       /* keeps the square aspect ratio from viewBox */
          display: block;
          position: relative;
          z-index: 1;
          overflow: visible;
        }

        /* ── Text panel ── */
        .our-story-text {
          max-width: 540px;
          /* On mobile center-align everything */
        }

        @media (max-width: 1023px) {
          .our-story-text {
            max-width: 100%;
            margin: 0 auto;
            text-align: center;
          }
          .our-story-features {
            align-items: center;
          }
          .our-story-cta-wrap {
            display: flex;
            justify-content: center;
          }
        }

        .our-story-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 999px;
          padding: 6px 18px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: var(--font-main);
        }

        .our-story-pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--primary);
          display: inline-block;
          flex-shrink: 0;
        }

        .our-story-heading {
          margin-top: 20px;
          font-size: clamp(1.75rem, 3.5vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          color: var(--text-dark);
          font-family: var(--font-main);
        }

        .our-story-body {
          margin-top: 24px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          line-height: 1.85;
          color: var(--text-medium);
          font-family: var(--font-main);
        }

        .our-story-body + .our-story-body {
          margin-top: 12px;
        }

        .our-story-features {
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          list-style: none;
          padding: 0;
        }

        .our-story-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-main);
        }

        @media (max-width: 1023px) {
          .our-story-feature-item {
            justify-content: center;
          }
        }

        .our-story-feature-label {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-dark);
        }

        .our-story-cta {
          margin-top: 36px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--gradient-secondary);
          color: var(--text-white);
          border: none;
          border-radius: var(--radius-md);
          padding: clamp(12px, 2vw, 14px) clamp(22px, 3vw, 28px);
          font-size: 0.95rem;
          font-weight: 600;
          font-family: var(--font-main);
          cursor: pointer;
          box-shadow: var(--shadow-md);
        }
      `}</style>

      {/* Decorative blob */}
      <div aria-hidden="true" className="our-story-blob" />

      <div className="our-story-container">
        <div className="our-story-grid">

          {/* ══════════ LEFT – FLOWER COLLAGE ══════════ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="our-story-collage-wrap"
          >
            <div className="our-story-collage-inner">
              <div aria-hidden="true" className="our-story-glow" />

              <svg
                viewBox="0 0 580 580"
                xmlns="http://www.w3.org/2000/svg"
                className="our-story-svg"
              >
                <defs>
                  <clipPath id="clip-c">
                    <circle cx={CX} cy={CY} r={CENTER_R} />
                  </clipPath>
                  {petals.map((p, i) => (
                    <clipPath key={i} id={`clip-p${i}`}>
                      <circle cx={p.x} cy={p.y} r={PETAL_R} />
                    </clipPath>
                  ))}
                  <filter id="fshadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="rgba(36,20,79,0.13)" />
                  </filter>
                </defs>

                {/* Petal circles — behind center */}
                {petals.map((p, i) => (
                  <g key={i} filter="url(#fshadow)">
                    <circle cx={p.x} cy={p.y} r={PETAL_R + BORDER} fill="white" />
                    <image
                      href={p.src}
                      x={p.x - PETAL_R}
                      y={p.y - PETAL_R}
                      width={PETAL_R * 2}
                      height={PETAL_R * 2}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#clip-p${i})`}
                    />
                  </g>
                ))}

                {/* Center circle — on top */}
                <g filter="url(#fshadow)">
                  <circle cx={CX} cy={CY} r={CENTER_R + BORDER + 2} fill="white" />
                  <image
                    href={story6}
                    x={CX - CENTER_R}
                    y={CY - CENTER_R}
                    width={CENTER_R * 2}
                    height={CENTER_R * 2}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#clip-c)"
                  />
                  <circle
                    cx={CX} cy={CY}
                    r={CENTER_R + BORDER + 2}
                    fill="none"
                    stroke="#6d53a3"
                    strokeWidth="3"
                    opacity="0.28"
                  />
                </g>
              </svg>
            </div>
          </motion.div>

          {/* ══════════ RIGHT – TEXT ══════════ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="our-story-text"
          >
            {/* Label pill */}
            <span className="our-story-pill">
              <span className="our-story-pill-dot" />
              Our Story
            </span>

            {/* Heading */}
            <h2 className="our-story-heading">
              Guiding Students
              <br />
              Towards A{" "}
              <span style={{ color: "var(--primary)" }}>Better Future</span>
            </h2>

            {/* Body */}
            <p className="our-story-body">
              Your Campus Edu was created to simplify one of the most important
              decisions in a student&rsquo;s life — choosing the right course,
              college, and career path.
            </p>
            <p className="our-story-body">
              Through expert counseling, personalized guidance, and modern
              technology, we help students discover opportunities that align
              with their ambitions, strengths, and future goals.
            </p>

            {/* Feature list */}
            <ul className="our-story-features">
              {FEATURES.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  className="our-story-feature-item"
                >
                  <CheckCircle2
                    size={20}
                    style={{ color: "var(--primary)", flexShrink: 0 }}
                  />
                  <span className="our-story-feature-label">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="our-story-cta-wrap">
              <motion.button
                whileHover={{ translateY: -3 }}
                transition={{ duration: 0.2 }}
                className="our-story-cta"
              >
                Learn More
                <ArrowRight size={17} />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}