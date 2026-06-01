// src/components/home/CoursesSection.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Scale,
  HeartPulse,
  Building2,
  GraduationCap,
  Cpu,
  Stethoscope,
  Briefcase,
  Award,
  ArrowRight,
  Sparkles,
  FlaskConical,
  ChevronRight,
} from "lucide-react";

/* =========================================
   IMAGE IMPORTS
========================================= */
import medicalImg      from "../../assets/images/courses/medical.jpg";
import managementImg   from "../../assets/images/courses/management.jpg";
import engineeringImg  from "../../assets/images/courses/engineering.jpg";
import lawImg          from "../../assets/images/courses/law.jpg";
import alliedHealthImg from "../../assets/images/courses/alliedhealth.jpg";
import architectureImg from "../../assets/images/courses/architecture.jpg";
import artsScienceImg  from "../../assets/images/courses/arts-science.jpg";
import paramedicalImg  from "../../assets/images/courses/paramedical.jpg";
import valueAddedImg   from "../../assets/images/courses/vap.jpg";

/* =========================================
   DATA
========================================= */
const courses = [
  {
    title: "Medical",
    desc: "Build a successful future in modern healthcare and clinical sciences with globally recognised MBBS programs.",
    icon: Stethoscope,
    image: medicalImg,
    badge: "Most Popular",
    accentColor: "#6d4dff",
    scrimFrom: "rgba(20,8,50,0.97)",
    scrimMid:  "rgba(36,20,79,0.72)",
  },
  {
    title: "Management",
    desc: "Develop leadership and business strategies for global industries.",
    icon: Briefcase,
    image: managementImg,
    accentColor: "#7c4dff",
    scrimFrom: "rgba(12,6,35,0.95)",
    scrimMid:  "rgba(60,36,120,0.65)",
  },
  {
    title: "Engineering",
    desc: "Master innovation, technology, and advanced engineering systems.",
    icon: Cpu,
    image: engineeringImg,
    accentColor: "#31B978",
    scrimFrom: "rgba(5,28,16,0.96)",
    scrimMid:  "rgba(18,80,46,0.65)",
  },
  {
    title: "Law",
    desc: "Build expertise in legal systems, advocacy, and corporate law.",
    icon: Scale,
    image: lawImg,
    accentColor: "#FF5B5C",
    scrimFrom: "rgba(30,5,8,0.96)",
    scrimMid:  "rgba(130,20,30,0.65)",
  },
  {
    title: "Allied Health",
    desc: "Advance patient care through specialised healthcare support programs.",
    icon: HeartPulse,
    image: alliedHealthImg,
    accentColor: "#39C0FA",
    scrimFrom: "rgba(5,18,38,0.96)",
    scrimMid:  "rgba(14,60,130,0.65)",
  },
  {
    title: "Architecture",
    desc: "Design inspiring spaces with creative and technical excellence.",
    icon: Building2,
    image: architectureImg,
    accentColor: "#F8941F",
    scrimFrom: "rgba(30,14,4,0.96)",
    scrimMid:  "rgba(120,55,8,0.65)",
  },
  {
    title: "Arts & Science",
    desc: "Explore diverse academic disciplines with strong career pathways.",
    icon: GraduationCap,
    image: artsScienceImg,
    accentColor: "#5866EB",
    scrimFrom: "rgba(8,10,36,0.96)",
    scrimMid:  "rgba(38,46,160,0.65)",
  },
  {
    title: "Paramedical",
    desc: "Train in emergency, diagnostic, and patient support services.",
    icon: FlaskConical,
    image: paramedicalImg,
    accentColor: "#8E56FF",
    scrimFrom: "rgba(16,8,38,0.96)",
    scrimMid:  "rgba(60,28,140,0.65)",
  },
  {
    title: "Value Added",
    desc: "Gain practical industry-ready skills that go beyond core academics.",
    icon: Award,
    image: valueAddedImg,
    accentColor: "#FF8F3C",
    scrimFrom: "rgba(30,12,4,0.96)",
    scrimMid:  "rgba(140,60,10,0.65)",
  },
];

/* =========================================
   ANIMATION HELPER
========================================= */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

/* =========================================
   SCRIM — reusable bottom-up gradient
========================================= */
function Scrim({ from, mid }) {
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 1,
      background: `linear-gradient(to top,
        ${from} 0%,
        ${mid} 40%,
        rgba(0,0,0,0.05) 100%)`,
      pointerEvents: "none",
    }} />
  );
}

/* =========================================
   HERO CARD — Medical (large left)
========================================= */
function HeroCard({ course }) {
  const [hov, setHov] = useState(false);
  const Icon = course.icon;

  return (
    <motion.div
      {...fadeUp(0.05)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", overflow: "hidden",
        borderRadius: 28,
        minHeight: 380,
        cursor: "pointer",
        display: "flex", flexDirection: "column",
        boxShadow: hov
          ? `0 32px 64px rgba(36,20,79,0.30), 0 0 0 1px rgba(109,83,163,0.15)`
          : "0 12px 40px rgba(36,20,79,0.18)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
        transform: hov ? "translateY(-7px)" : "translateY(0)",
      }}
    >
      {/* Full-cover image */}
      <img src={course.image} alt={course.title} style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center top",
        zIndex: 0,
        transform: hov ? "scale(1.07)" : "scale(1.02)",
        transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1)",
      }} />

      {/* Scrim */}
      <Scrim from={course.scrimFrom} mid={course.scrimMid} />

      {/* Accent color wash */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: `${course.accentColor}14`,
        pointerEvents: "none",
      }} />

      {/* Top accent bar that grows on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, zIndex: 4,
        height: 3, borderRadius: "28px 28px 0 0",
        background: `linear-gradient(90deg, ${course.accentColor}, transparent)`,
        width: hov ? "100%" : "40%",
        transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 3,
        display: "flex", flexDirection: "column",
        justifyContent: "space-between",
        padding: "26px 30px",
        minHeight: 380, flex: 1,
        boxSizing: "border-box",
      }}>
        {/* TOP row: badge left, icon right */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.13)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.20)",
            borderRadius: 99, padding: "5px 13px",
          }}>
            <Sparkles size={11} color="#FFD700" />
            <span style={{
              fontSize: 9.5, fontWeight: 700, letterSpacing: "0.13em",
              textTransform: "uppercase", color: "#fff",
              fontFamily: "var(--font-main)",
            }}>
              {course.badge}
            </span>
          </div>

          <div style={{
            width: 50, height: 50, borderRadius: 15,
            background: course.accentColor,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 6px 22px ${course.accentColor}65`,
            transform: hov ? "scale(1.1) rotate(-4deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.4s ease",
          }}>
            <Icon size={24} color="#fff" strokeWidth={1.8} />
          </div>
        </div>

        {/* BOTTOM: text block */}
        <div>
          <div style={{
            width: hov ? 52 : 32, height: 3, borderRadius: 99,
            background: course.accentColor, marginBottom: 14,
            transition: "width 0.4s ease",
          }} />

          <h3 style={{
            fontFamily: "var(--font-main)",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 800, letterSpacing: "-0.04em",
            lineHeight: 1.1, color: "#fff",
            margin: "0 0 10px",
          }}>
            {course.title}
          </h3>

          <p style={{
            fontFamily: "var(--font-main)",
            fontSize: 13.5, lineHeight: 1.75,
            color: "rgba(255,255,255,0.78)",
            margin: "0 0 22px", maxWidth: 340,
          }}>
            {course.desc}
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 42, height: 42, borderRadius: "50%",
              background: hov ? course.accentColor : "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: hov
                ? `0 6px 22px ${course.accentColor}55`
                : "0 4px 14px rgba(0,0,0,0.22)",
              transition: "background 0.3s ease, box-shadow 0.3s ease",
              flexShrink: 0,
            }}>
              <ArrowRight size={16}
                color={hov ? "#fff" : course.accentColor}
                strokeWidth={2.6}
                style={{ transition: "color 0.3s ease" }}
              />
            </div>
            <span style={{
              fontFamily: "var(--font-main)",
              fontSize: 11, fontWeight: 700,
              color: hov ? "#fff" : "rgba(255,255,255,0.60)",
              letterSpacing: "0.08em", textTransform: "uppercase",
              transition: "color 0.3s ease",
            }}>
              Explore Programs
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================
   HORIZONTAL CARD — right col pair
========================================= */
function HorizontalCard({ course, delay = 0 }) {
  const [hov, setHov] = useState(false);
  const Icon = course.icon;

  return (
    <motion.div
      {...fadeUp(delay)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", overflow: "hidden",
        borderRadius: 22,
        flex: 1, minHeight: 172,
        cursor: "pointer",
        boxShadow: hov
          ? `0 20px 44px ${course.accentColor}28, 0 0 0 1px ${course.accentColor}20`
          : "0 6px 22px rgba(0,0,0,0.10)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
        transform: hov ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      {/* Image */}
      <img src={course.image} alt={course.title} style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center",
        zIndex: 0,
        transform: hov ? "scale(1.08)" : "scale(1.02)",
        transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
      }} />

      <Scrim from={course.scrimFrom} mid={course.scrimMid} />

      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: `${course.accentColor}12`,
        pointerEvents: "none",
      }} />

      {/* Left accent border */}
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, zIndex: 4,
        width: 3, borderRadius: "22px 0 0 22px",
        background: `linear-gradient(180deg, ${course.accentColor}, transparent)`,
        opacity: hov ? 1 : 0,
        transition: "opacity 0.35s ease",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 3,
        padding: "20px 22px",
        display: "flex", alignItems: "flex-end",
        justifyContent: "space-between",
        minHeight: 172, height: "100%",
        boxSizing: "border-box",
      }}>
        {/* Left text */}
        <div style={{ flex: 1 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: course.accentColor,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 12,
            boxShadow: `0 4px 14px ${course.accentColor}55`,
            transform: hov ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.35s ease",
          }}>
            <Icon size={20} color="#fff" strokeWidth={2} />
          </div>

          <h3 style={{
            fontFamily: "var(--font-main)",
            fontSize: 19, fontWeight: 800,
            letterSpacing: "-0.03em", lineHeight: 1.15,
            color: "#fff", margin: "0 0 6px",
          }}>
            {course.title}
          </h3>

          <p style={{
            fontFamily: "var(--font-main)",
            fontSize: 12, lineHeight: 1.65,
            color: "rgba(255,255,255,0.70)",
            margin: 0, maxWidth: 210,
          }}>
            {course.desc}
          </p>
        </div>

        {/* Arrow */}
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          background: hov ? course.accentColor : "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.18)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, marginLeft: 14,
          transition: "background 0.3s ease",
          backdropFilter: "blur(8px)",
        }}>
          <ArrowRight size={15} color="#fff" strokeWidth={2.4} />
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================
   SMALL CARD — bottom 6-grid
========================================= */
function SmallCard({ course, delay = 0 }) {
  const [hov, setHov] = useState(false);
  const Icon = course.icon;

  return (
    <motion.div
      {...fadeUp(delay)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", overflow: "hidden",
        borderRadius: 20, cursor: "pointer",
        boxShadow: hov
          ? `0 18px 40px ${course.accentColor}28, 0 0 0 1px ${course.accentColor}18`
          : "0 4px 18px rgba(0,0,0,0.09)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
        transform: hov ? "translateY(-7px)" : "translateY(0)",
        minHeight: 215,
      }}
    >
      {/* Image */}
      <img src={course.image} alt={course.title} style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center",
        zIndex: 0,
        transform: hov ? "scale(1.09)" : "scale(1.02)",
        transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
      }} />

      <Scrim from={course.scrimFrom} mid={course.scrimMid} />

      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: `${course.accentColor}10`,
        pointerEvents: "none",
      }} />

      {/* Top bar on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 4,
        height: 3,
        background: `linear-gradient(90deg, ${course.accentColor} 0%, transparent 100%)`,
        opacity: hov ? 1 : 0,
        transition: "opacity 0.35s ease",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 3,
        padding: "16px 16px 18px",
        display: "flex", flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 215, height: "100%",
        boxSizing: "border-box",
      }}>
        {/* Icon — top right */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 11,
            background: course.accentColor,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 4px 12px ${course.accentColor}55`,
            transform: hov ? "scale(1.12) rotate(-5deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.4s ease",
          }}>
            <Icon size={17} color="#fff" strokeWidth={2} />
          </div>
        </div>

        {/* Bottom text */}
        <div>
          <div style={{
            width: hov ? 32 : 20, height: 2.5, borderRadius: 99,
            background: course.accentColor, marginBottom: 10,
            transition: "width 0.4s ease",
          }} />

          <h3 style={{
            fontFamily: "var(--font-main)",
            fontSize: 14.5, fontWeight: 800,
            letterSpacing: "-0.025em", lineHeight: 1.2,
            color: "#fff", margin: "0 0 6px",
          }}>
            {course.title}
          </h3>

          <p style={{
            fontFamily: "var(--font-main)",
            fontSize: 11.5, lineHeight: 1.65,
            color: "rgba(255,255,255,0.68)",
            margin: "0 0 14px",
          }}>
            {course.desc}
          </p>

          {/* Pill CTA */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: hov ? course.accentColor : "rgba(255,255,255,0.10)",
            border: `1px solid ${hov ? course.accentColor : "rgba(255,255,255,0.16)"}`,
            borderRadius: 99, padding: "5px 11px",
            backdropFilter: "blur(10px)",
            transition: "background 0.3s ease, border 0.3s ease",
          }}>
            <span style={{
              fontFamily: "var(--font-main)",
              fontSize: 9.5, fontWeight: 700,
              color: "#fff", letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}>
              Explore
            </span>
            <ChevronRight size={10} color="#fff" strokeWidth={3} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================
   MAIN SECTION
========================================= */
export default function CoursesSection() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      padding: "96px 0 108px",
      background: "var(--bg-main)",
      fontFamily: "var(--font-main)",
    }}>

      {/* ── Ambient BG ── */}
      <div style={{
        position: "absolute", top: -220, left: "50%",
        transform: "translateX(-50%)",
        width: 920, height: 520, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(109,83,163,0.065) 0%, transparent 68%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: -160, right: -120,
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(49,185,120,0.055) 0%, transparent 68%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(rgba(109,83,163,0.04) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      {/* ── Container ── */}
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 24px", position: "relative", zIndex: 2,
      }}>

        {/* ════════════════════════════════════
            HEADER — left title + right desc
            (same side-by-side layout as CountrySelector)
        ════════════════════════════════════ */}
        <motion.div
          {...fadeUp(0)}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px 48px",
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          {/* Left: eyebrow + big headline on ONE line */}
          <div style={{ flex: "1 1 460px" }}>
            {/* Eyebrow pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 14px", borderRadius: 999,
              background: "rgba(109,83,163,0.08)",
              border: "1px solid rgba(109,83,163,0.12)",
              marginBottom: 16,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "var(--primary)", display: "inline-block",
              }} />
              <span style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--primary)", fontFamily: "var(--font-main)",
              }}>
                Top Courses
              </span>
            </div>

            {/* ── Headline: "Explore Popular" + gradient "Courses" — SAME LINE ── */}
            <h2 style={{
              margin: 0,
              // nowrap so "Explore Popular Courses" never breaks
              whiteSpace: "nowrap",
              fontSize: "clamp(28px, 4.2vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
              color: "var(--text-dark)",
              fontFamily: "var(--font-main)",
            }}>
              Explore Popular{" "}
              <span style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Courses
              </span>
            </h2>
          </div>

          {/* Right: description + CTA link */}
          <div style={{ flex: "1 1 340px", maxWidth: 420 }}>
            <p style={{
              fontFamily: "var(--font-main)",
              fontSize: 15, lineHeight: 1.8,
              color: "var(--text-medium)",
              margin: "0 0 20px",
            }}>
              Discover industry-focused programs designed to prepare students for
              modern careers in healthcare, technology, business, design, and beyond.
            </p>

            {/* "View all courses" link */}
            <a
              href="/courses"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-main)",
                fontSize: 13, fontWeight: 700,
                color: "var(--primary)",
                textDecoration: "none",
                background: "rgba(109,83,163,0.07)",
                border: "1px solid rgba(109,83,163,0.14)",
                borderRadius: 99, padding: "10px 20px",
                transition: "var(--transition)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(109,83,163,0.07)";
                e.currentTarget.style.color = "var(--primary)";
              }}
            >
              View All Courses
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>

        {/* ── Top row: Hero (left) + 2 horizontal (right) ── */}
        <div className="cs-top-row">
          <HeroCard course={courses[0]} />
          <div className="cs-right-col">
            <HorizontalCard course={courses[1]} delay={0.10} />
            <HorizontalCard course={courses[2]} delay={0.18} />
          </div>
        </div>

        {/* ── Bottom grid: 6 small cards ── */}
        <div className="cs-bottom-grid">
          {courses.slice(3).map((course, i) => (
            <SmallCard key={course.title} course={course} delay={i * 0.055} />
          ))}
        </div>

      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        .cs-top-row {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 18px;
          margin-bottom: 18px;
          align-items: stretch;
        }
        .cs-right-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cs-bottom-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        @media (max-width: 1100px) {
          .cs-bottom-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 860px) {
          .cs-top-row {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-bottom: 14px;
          }
          .cs-right-col {
            flex-direction: row;
            gap: 14px;
          }
          .cs-right-col > * {
            flex: 1 1 0;
            min-height: 160px;
          }
          .cs-bottom-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }
        @media (max-width: 640px) {
          h2 { white-space: normal !important; }
        }
        @media (max-width: 540px) {
          .cs-right-col {
            flex-direction: column;
          }
          .cs-bottom-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>

    </section>
  );
}