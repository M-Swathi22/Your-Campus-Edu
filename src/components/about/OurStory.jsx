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
   Each petal overlaps the center ring slightly — classic flower look
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
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "var(--bg-light)", fontFamily: "var(--font-main)" }}
    >
      {/* Top-left decorative blob */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "var(--primary-light)",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <div
        className="container mx-auto max-w-7xl px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ══════════ LEFT – FLOWER COLLAGE ══════════ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <div
              style={{
                position: "relative",
                width: "580px",
                height: "580px",
                flexShrink: 0,
              }}
            >
              {/* Soft radial glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "60px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(109,83,163,0.09) 0%, transparent 68%)",
                  zIndex: 0,
                }}
              />

              <svg
                viewBox="0 0 580 580"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  zIndex: 1,
                  overflow: "visible",
                }}
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
            className="max-w-xl"
          >
            {/* Label pill */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "var(--primary-light)",
                color: "var(--primary)",
                borderRadius: "999px",
                padding: "6px 18px",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-main)",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "inline-block",
                }}
              />
              Our Story
            </span>

            {/* Heading */}
            <h2
              style={{
                marginTop: "20px",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: "700",
                lineHeight: "1.2",
                color: "var(--text-dark)",
                fontFamily: "var(--font-main)",
              }}
            >
              Guiding Students
              <br />
              Towards A{" "}
              <span style={{ color: "var(--primary)" }}>Better Future</span>
            </h2>

            {/* Body */}
            <p
              style={{
                marginTop: "24px",
                fontSize: "1rem",
                lineHeight: "1.85",
                color: "var(--text-medium)",
                fontFamily: "var(--font-main)",
              }}
            >
              Your Campus Edu was created to simplify one of the most important
              decisions in a student&rsquo;s life — choosing the right course,
              college, and career path.
            </p>
            <p
              style={{
                marginTop: "12px",
                fontSize: "1rem",
                lineHeight: "1.85",
                color: "var(--text-medium)",
                fontFamily: "var(--font-main)",
              }}
            >
              Through expert counseling, personalized guidance, and modern
              technology, we help students discover opportunities that align
              with their ambitions, strengths, and future goals.
            </p>

            {/* Feature list */}
            <ul
              style={{
                marginTop: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                listStyle: "none",
                padding: 0,
              }}
            >
              {FEATURES.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: "var(--font-main)",
                  }}
                >
                  <CheckCircle2
                    size={20}
                    style={{ color: "var(--primary)", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      color: "var(--text-dark)",
                    }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.button
              whileHover={{ translateY: -3 }}
              transition={{ duration: 0.2 }}
              style={{
                marginTop: "36px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--gradient-secondary)",
                color: "var(--text-white)",
                border: "none",
                borderRadius: "var(--radius-md)",
                padding: "14px 28px",
                fontSize: "0.95rem",
                fontWeight: "600",
                fontFamily: "var(--font-main)",
                cursor: "pointer",
                boxShadow: "var(--shadow-md)",
              }}
            >
              Learn More
              <ArrowRight size={17} />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}