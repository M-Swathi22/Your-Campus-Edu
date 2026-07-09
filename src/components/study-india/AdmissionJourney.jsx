import React from "react";
import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";

// ------------------------------------------------------------------
// Admission Process — Target + Pierced Arrow + Curved Swallow-Tail Ribbons
// ------------------------------------------------------------------

const PIN = { x: 235, y: 250 };   // Base pivot point where ribbons merge
const BUNCH = 145;                // Length of smooth curved taper flare out of the pin
const REACH = 360;                // Uniform radius distance for all ribbon tips

const STEPS = [
  {
    label: "COUNSELLING",
    description:
      "Our advisors map your academic background and goals to shortlist the right streams and courses.",
    color: "var(--accent-green)",
    angle: -32,
    halfWidth: 15,
  },
  {
    label: "SHORTLISTING",
    description:
      "We compare cut-offs, placements and campus life to build a balanced college list.",
    color: "var(--accent-blue)",
    angle: -16,
    halfWidth: 14,
  },
  {
    label: "APPLICATION",
    description:
      "We help you complete every form and organise transcripts, IDs and certificates without errors.",
    color: "var(--primary)",
    angle: 0,
    halfWidth: 17,
  },
  {
    label: "ENTRANCE EXAM",
    description:
      "From CUET to state CETs, we track dates, prep timelines and merit-list movements for you.",
    color: "var(--extra-indigo)",
    angle: 16,
    halfWidth: 14,
  },
  {
    label: "ENROLLMENT",
    description:
      "We guide you through seat confirmation, fee payment and document verification to day one.",
    color: "var(--primary-dark)",
    angle: 32,
    halfWidth: 15,
  },
];

// ---------- Geometry Calculators ----------

function buildRibbon({ pin, angle, halfWidth, bunch, total }) {
  const rad = (angle * Math.PI) / 180;
  const dir = { x: Math.cos(rad), y: Math.sin(rad) };
  const perp = { x: -Math.sin(rad), y: Math.cos(rad) };
  const notch = halfWidth + 8;

  // Key coordinate nodes along the vector path
  const E = { x: pin.x + dir.x * bunch, y: pin.y + dir.y * bunch };
  const T = { x: pin.x + dir.x * total, y: pin.y + dir.y * total };
  const A = { x: E.x + perp.x * halfWidth, y: E.y + perp.y * halfWidth };
  const D = { x: E.x - perp.x * halfWidth, y: E.y - perp.y * halfWidth };
  const B = { x: T.x + perp.x * halfWidth, y: T.y + perp.y * halfWidth };
  const C = { x: T.x - perp.x * halfWidth, y: T.y - perp.y * halfWidth };
  const N = { x: T.x - dir.x * notch, y: T.y - dir.y * notch };

  // Control points keep curves parallel and tightly bunched at origin
  const ctrl = { x: pin.x + bunch * 0.55, y: pin.y };

  const d = [
    `M ${pin.x} ${pin.y}`,
    `Q ${ctrl.x} ${ctrl.y} ${A.x} ${A.y}`,
    `L ${B.x} ${B.y}`,
    `L ${N.x} ${N.y}`,
    `L ${C.x} ${C.y}`,
    `L ${D.x} ${D.y}`,
    `Q ${ctrl.x} ${ctrl.y} ${pin.x} ${pin.y}`,
    "Z",
  ].join(" ");

  const labelPos = { 
    x: pin.x + dir.x * (bunch + 15), 
    y: pin.y + dir.y * (bunch + 15) 
  };

  return { d, T, labelPos, angle };
}

const RIBBONS = STEPS.map((step) =>
  Object.assign({}, step, buildRibbon({ pin: PIN, bunch: BUNCH, total: REACH, ...step }))
);

// Target Dimensions (Ellipses recreate the sharp 3D perspective angle)
const TARGET_CX = 95;
const TARGET_CY = 250;
const ELLIPSES = [
  { rx: 32, ry: 100, color: "var(--accent-blue)" },
  { rx: 25, ry: 80,  color: "var(--white)" },
  { rx: 18, ry: 60,  color: "var(--accent-blue)" },
  { rx: 11, ry: 40,  color: "var(--white)" },
  { rx: 5,  ry: 20,  color: "var(--accent-blue)" },
];

export default function AdmissionProcess() {
  return (
    <section
      className="relative w-full py-20 px-6 lg:px-16 overflow-hidden"
      style={{ background: "var(--bg-main)", fontFamily: "var(--font-main)" }}
    >
      {/* Header section */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
          style={{
            background: "var(--primary-light)",
            color: "var(--primary)",
            border: "1px solid var(--border)",
          }}
        >
          <BookMarked size={15} />
          <span
            className="text-xs font-semibold uppercase"
            style={{ letterSpacing: "0.12em" }}
          >
            Admission Journey
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-extrabold uppercase leading-tight whitespace-nowrap"
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            letterSpacing: "1.5px",
            color: "var(--primary-dark)",
          }}
        >
          Simple{" "}
          <span
            style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Admission
          </span>{" "}
          Process
        </h2>

        {/* Divider */}
        <div
          className="mx-auto mt-5 mb-5"
          style={{
            width: "90px",
            height: "4px",
            borderRadius: "999px",
            background: "var(--gradient-primary)",
          }}
        />

        {/* Subtitle */}
        <p
          className="mx-auto"
          style={{
            maxWidth: "700px",
            color: "var(--text-light)",
            fontSize: "16px",
            lineHeight: "1.8",
          }}
        >
          From career counselling to successful enrollment, our expert advisors
          guide you through every stage with personalized support, ensuring a
          smooth and stress-free admission experience.
        </p>
      </div>

      {/* SVG Canvas Container */}
      <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-none">
        <svg
          viewBox="0 0 920 500"
          className="w-full min-w-[840px] h-auto block"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ============ 3D TARGET (LEFT SIDE) ============ */}
          <g>
            {/* Thick 3D Side Depth Plate */}
            <ellipse cx={TARGET_CX + 8} cy={TARGET_CY} rx="32" ry="100" fill="var(--border)" />
            <rect x={TARGET_CX} y={TARGET_CY - 100} width="8" height="200" fill="var(--border)" />
            
            {/* Concentric Rings */}
            {ELLIPSES.map((el, i) => (
              <ellipse key={i} cx={TARGET_CX} cy={TARGET_CY} rx={el.rx} ry={el.ry} fill={el.color} />
            ))}
          </g>

          {/* ============ PIERCING ARROW SHAFT ============ */}
          <g>
            {/* Fine needle tip penetrating target center */}
            <line 
              x1={TARGET_CX} 
              y1={TARGET_CY} 
              x2={PIN.x - 55} 
              y2={TARGET_CY} 
              stroke="var(--text-light)" 
              strokeWidth="2.5" 
            />
            {/* Plastic connector barrel adapter */}
            <path
              d={`M ${PIN.x - 55} ${TARGET_CY - 10} 
                  L ${PIN.x - 22} ${TARGET_CY - 10} 
                  L ${PIN.x - 14} ${TARGET_CY - 5} 
                  L ${PIN.x - 14} ${TARGET_CY + 5} 
                  L ${PIN.x - 22} ${TARGET_CY + 10} 
                  L ${PIN.x - 55} ${TARGET_CY + 10} Z`}
              fill="var(--border)"
            />
            {/* Darker cap piece securing ribbon bundles */}
            <path
              d={`M ${PIN.x - 14} ${TARGET_CY - 5} 
                  L ${PIN.x} ${TARGET_CY - 5} 
                  L ${PIN.x} ${TARGET_CY + 5} 
                  L ${PIN.x - 14} ${TARGET_CY + 5} Z`}
              fill="var(--text-light)"
            />
          </g>

          {/* ============ RIBBONS & SIDE DESCRIPTIONS ============ */}
          {RIBBONS.map((r, i) => (
            <motion.g
              key={r.label}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              {/* Ribbon Body Layer */}
              <path d={r.d} fill={r.color} style={{ filter: "drop-shadow(var(--shadow-sm))" }} />
              
              {/* Rotated Internal Label Text */}
              <text
                x={r.labelPos.x}
                y={r.labelPos.y}
                transform={`rotate(${r.angle} ${r.labelPos.x} ${r.labelPos.y})`}
                fill="var(--text-white)"
                fontFamily="var(--font-main)"
                fontSize="11.5px"
                fontWeight="700"
                letterSpacing="0.8"
                dominantBaseline="middle"
              >
                {r.label}
              </text>

              {/* Clean Horizontal Text Layout on Right Side */}
              <foreignObject x={r.T.x + 25} y={r.T.y - 30} width="270" height="70">
                <div
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    fontFamily: "var(--font-main)",
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "1.4",
                    color: "var(--text-medium)",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  {r.description}
                </div>
              </foreignObject>
            </motion.g>
          ))}
        </svg>
      </div>
    </section>
  );
}