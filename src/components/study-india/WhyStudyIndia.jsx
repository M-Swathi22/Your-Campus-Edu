import React from "react";
import { motion } from "framer-motion";

const advantages = [
  {
    id: "cost",
    keyword: "COST",
    title: "Affordable Tuition",
    body: "Affordable tuition compared to most international destinations with excellent ROI.",
    accentColor: "var(--primary)",
    yOffset: "0px",
  },
  {
    id: "nep",
    keyword: "NEP",
    title: "Flexible Education",
    body: "Flexible multidisciplinary education with multiple entry and exit options.",
    accentColor: "var(--accent-green)",
    yOffset: "90px",
  },
  {
    id: "rank",
    keyword: "RANK",
    title: "Globally Recognized",
    body: "IITs, IIMs and AIIMS are globally recognized institutions with increasing international rankings.",
    accentColor: "var(--primary)",
    yOffset: "0px",
  },
  {
    id: "local",
    keyword: "LOCAL",
    title: "Strong Network",
    body: "Strong alumni network, nearby family support, internships and industry exposure.",
    accentColor: "var(--accent-green)",
    yOffset: "90px",
  },
  {
    id: "growth",
    keyword: "GROWTH",
    title: "Expanding Ecosystem",
    body: "India's rapidly expanding technology, healthcare and startup ecosystem creates strong career opportunities.",
    accentColor: "var(--primary)",
    yOffset: "0px",
  },
];

export default function WhyStudyIndia() {
  return (
    <section
      className="select-none overflow-hidden bg-white px-8 py-24"
      style={{ fontFamily: "var(--font-main)" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2
            className="text-4xl font-extrabold uppercase tracking-widest md:text-5xl"
            style={{ color: "var(--primary-dark)", letterSpacing: "2px" }}
          >
            Why Study In{" "}
            <span
              style={{
                backgroundImage: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              India
            </span>
          </h2>
        </div>

        {/* desktop composition */}
        <div className="relative hidden h-[400px] w-full lg:block">
          <svg
            className="pointer-events-none absolute left-0 top-[115px] h-[180px] w-full opacity-30"
            style={{ overflow: "visible" }}
          >
            <path
              d="M 10% 25 L 30% 115 L 50% 25 L 70% 115 L 90% 25"
              fill="none"
              stroke="var(--bg-section)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="absolute inset-0 grid grid-cols-5 gap-6">
            {advantages.map((item, index) => {
              return (
                <div key={item.id} className="relative flex flex-col items-center">
                  {/* card */}
                  <div
                    className="relative z-10 flex h-[150px] w-full items-center justify-center transition-all duration-300"
                    style={{ top: item.yOffset }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                      className="group relative cursor-pointer"
                    >
                      <div
                        className="absolute left-4 top-12 h-14 w-28 rounded-full opacity-90 blur-xl transition-all duration-300 group-hover:scale-125"
                        style={{
                          background: `color-mix(in srgb, ${item.accentColor} 55%, transparent)`,
                          transform: "scaleY(0.4) rotate(-15deg)",
                        }}
                      />
                      <div
                        className="absolute left-[6px] top-[6px] h-20 w-28 rounded-[22px]"
                        style={{
                          background: item.accentColor,
                          transform: "rotateX(55deg) rotateZ(-30deg)",
                        }}
                      />
                      <div
                        className="relative flex h-20 w-28 items-center justify-center rounded-[22px] border border-white/60 transition-all duration-300 group-hover:-translate-y-2"
                        style={{
                          background: "rgba(255, 255, 255, 0.85)",
                          backdropFilter: "blur(12px)",
                          transform: "rotateX(55deg) rotateZ(-30deg)",
                          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                        }}
                      >
                        <span
                          className="select-none text-lg font-black tracking-widest"
                          style={{ color: item.accentColor, transform: "skewX(12deg) rotateZ(3deg)" }}
                        >
                          {item.keyword}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* content */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
                    className="absolute w-full px-3 text-left"
                    style={{ top: `calc(${item.yOffset} + 175px)` }}
                  >
                    <h3
                      className="mb-1 text-lg font-extrabold uppercase tracking-wide"
                      style={{ color: item.accentColor }}
                    >
                      {item.title}
                    </h3>
                    <div className="mb-3 h-[2.5px] w-12 rounded-full" style={{ background: item.accentColor }} />
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-medium)" }}>
                      {item.body}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* mobile / tablet fallback */}
        <div className="mx-auto mt-4 flex max-w-xl flex-col gap-16 lg:hidden">
          {advantages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex items-start gap-6"
            >
              {index !== advantages.length - 1 && (
                <div
                  className="absolute bottom-[-40px] left-8 top-20 w-[3px] rounded-full opacity-40"
                  style={{ background: "var(--bg-section)" }}
                />
              )}

              <div className="relative shrink-0 pt-1">
                <div
                  className="absolute left-2 top-10 h-12 w-16 rounded-full opacity-75 blur-md"
                  style={{ background: `color-mix(in srgb, ${item.accentColor} 55%, transparent)` }}
                />
                <div
                  className="absolute left-[4px] top-[4px] h-12 w-16 rounded-xl"
                  style={{ background: item.accentColor }}
                />
                <div
                  className="relative flex h-12 w-16 items-center justify-center rounded-xl border border-white/60 text-xs font-black tracking-wider"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(8px)",
                    color: item.accentColor,
                    transform: "rotateX(40deg) rotateZ(-20deg)",
                  }}
                >
                  {item.keyword}
                </div>
              </div>

              <div>
                <h3
                  className="mb-1 text-xl font-extrabold uppercase tracking-wide"
                  style={{ color: item.accentColor }}
                >
                  {item.title}
                </h3>
                <div className="mb-3 h-[2px] w-10 rounded-full" style={{ background: item.accentColor }} />
                <p className="text-base leading-relaxed" style={{ color: "var(--text-medium)" }}>
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}