import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, GraduationCap, Landmark, Ticket } from "lucide-react";
import heroBackground from "../../assets/images/ai-tool.png";

const destinations = [
  { city: "BENGALURU", state: "KARNATAKA", nirf: "#7", fee: "₹3.2L" },
  { city: "PUNE", state: "MAHARASHTRA", nirf: "#12", fee: "₹2.8L" },
  { city: "DELHI NCR", state: "DELHI", nirf: "#3", fee: "₹4.1L" },
  { city: "CHENNAI", state: "TAMIL NADU", nirf: "#5", fee: "₹2.5L" },
  { city: "HYDERABAD", state: "TELANGANA", nirf: "#9", fee: "₹3.0L" },
];

const stats = [
  { label: "Institutes Mapped", value: "1,400+", icon: Landmark },
  { label: "States Covered", value: "28", icon: MapPin },
  { label: "Avg. Cost vs Abroad", value: "72%", icon: GraduationCap },
];

const headlineLines = [
  { text: "Every State.", accent: false },
  { text: "One Campus Search.", accent: true },
];

const lineVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.14, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const flapVariants = {
  initial: { rotateX: 90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1 },
  exit: { rotateX: -90, opacity: 0 },
};

export default function StudyIndiaHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % destinations.length);
    }, 2900);
    return () => clearInterval(interval);
  }, []);

  const current = destinations[index];

  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:py-32"
      style={{ fontFamily: "var(--font-main)" }}
    >
      {/* background image */}
      <img
        src={heroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* light scrim — image stays visible, just enough contrast for text */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(180deg,
            color-mix(in srgb, var(--primary-light) 62%, transparent) 0%,
            color-mix(in srgb, var(--primary-light) 40%, transparent) 45%,
            color-mix(in srgb, var(--primary-light) 68%, transparent) 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-secondary)", opacity: 0.28, mixBlendMode: "multiply" }}
      />

      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full blur-[130px]"
        style={{ background: "var(--accent-green)", opacity: 0.06 }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            background: "color-mix(in srgb, var(--accent-green) 16%, transparent)",
            color: "var(--primary-dark)",
            border: "1px solid color-mix(in srgb, var(--accent-green) 45%, transparent)",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          <Ticket size={14} style={{ color: "var(--accent-green)" }} />
          Domestic Admissions Desk
        </motion.span>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)",
            fontWeight: 700,
            lineHeight: 1.14,
            letterSpacing: "-0.01em",
          }}
        >
          {headlineLines.map((line, i) => (
            <motion.span
              key={line.text}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="block"
              style={
                line.accent
                  ? {
                      backgroundImage: "var(--gradient-primary)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }
                  : { color: "var(--primary-dark)" }
              }
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl"
          style={{ color: "var(--text-medium)", fontSize: "1rem", lineHeight: 1.75 }}
        >
          Compare NIRF-ranked colleges, real fee ranges, and placement data
          across every state — built for students who want a world-class
          degree without leaving home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            className="group flex items-center gap-2 rounded-full px-7 py-3.5 transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--gradient-primary)",
              color: "var(--text-white)",
              boxShadow: "var(--shadow-md)",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            Explore Colleges
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            className="rounded-full px-7 py-3.5 transition-colors"
            style={{
              color: "var(--primary-dark)",
              border: "1px solid color-mix(in srgb, var(--primary-dark) 35%, transparent)",
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          >
            Take the Fit Quiz
          </button>
        </motion.div>

        {/* live destinations board — signature element, no fixed origin */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-3xl overflow-hidden px-5 py-4 sm:px-8 sm:py-5"
          style={{
            background: "color-mix(in srgb, var(--primary-dark) 90%, black)",
            border: "1px solid color-mix(in srgb, var(--accent-green) 28%, transparent)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start">
            <motion.span
              animate={{ opacity: [1, 0.25, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--accent-green)" }}
            />
            <span
              style={{
                color: "color-mix(in srgb, var(--text-white) 60%, transparent)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Live Destinations Across India
            </span>
          </div>

          <div
            className="flex flex-col items-stretch divide-y sm:flex-row sm:divide-x sm:divide-y-0"
            style={{ borderColor: "color-mix(in srgb, var(--text-white) 12%, transparent)" }}
          >
            <div className="flex flex-1 items-center justify-center gap-2 py-3 sm:justify-start sm:pr-5" style={{ perspective: "300px" }}>
              <div className="text-left">
                <span
                  className="block"
                  style={{
                    color: "color-mix(in srgb, var(--text-white) 55%, transparent)",
                    fontSize: "0.66rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Destination
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.city}
                    variants={flapVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="block origin-top"
                    style={{ color: "var(--accent-green)", fontSize: "1.1rem", fontWeight: 700 }}
                  >
                    {current.city}
                    <span
                      className="ml-2"
                      style={{
                        color: "color-mix(in srgb, var(--text-white) 50%, transparent)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {current.state}
                    </span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center gap-6 py-3" style={{ perspective: "300px" }}>
              <div className="text-left">
                <span
                  className="block"
                  style={{
                    color: "color-mix(in srgb, var(--text-white) 55%, transparent)",
                    fontSize: "0.66rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  NIRF Rank
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.nirf}
                    variants={flapVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.45, ease: "easeInOut", delay: 0.05 }}
                    className="block origin-top"
                    style={{ color: "var(--text-white)", fontSize: "1.1rem", fontWeight: 700 }}
                  >
                    {current.nirf}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="text-left">
                <span
                  className="block"
                  style={{
                    color: "color-mix(in srgb, var(--text-white) 55%, transparent)",
                    fontSize: "0.66rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Fee / Yr
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.fee}
                    variants={flapVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.45, ease: "easeInOut", delay: 0.05 }}
                    className="block origin-top"
                    style={{ color: "var(--text-white)", fontSize: "1.1rem", fontWeight: 700 }}
                  >
                    {current.fee}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center gap-2 py-3 sm:justify-end sm:pl-5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-green)" }} />
              <span
                style={{
                  color: "var(--accent-green)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                Admissions Open
              </span>
            </div>
          </div>
        </motion.div>

        {/* stat row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-5"
        >
          {stats.map(({ label, value, icon: Icon }, i) => (
            <div key={label} className="flex items-center gap-3">
              {i !== 0 && (
                <span
                  className="hidden h-8 w-px sm:block"
                  style={{ background: "color-mix(in srgb, var(--primary-dark) 18%, transparent)" }}
                />
              )}
              <Icon size={18} style={{ color: "var(--accent-green)" }} />
              <div className="text-left">
                <span
                  className="block"
                  style={{ color: "var(--primary-dark)", fontSize: "1.25rem", fontWeight: 700 }}
                >
                  {value}
                </span>
                <span
                  className="block"
                  style={{ color: "var(--text-medium)", fontSize: "0.72rem", fontWeight: 500 }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}