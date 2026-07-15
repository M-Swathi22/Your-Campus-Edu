import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";

export default function CategoryCTA({ category }) {
  const accent = category.accent || "--primary";

  const reassurance = [
    "Free for students",
    "Personalised shortlist",
    "Quick response",
  ];

  return (
    <section
      id="category-cta"
      className="relative overflow-hidden py-14 sm:py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, var(--bg-main) 0%, var(--bg-light) 100%)" }}
    >
      {/* Soft ambient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[10%] h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: `var(${accent})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-[8%] h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--accent-green)" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        {/* Elevated card — primary-dark surface */}
        <div
          className="rounded-[var(--radius-lg)] px-5 py-10 text-center sm:rounded-[var(--radius-xl)] sm:px-10 sm:py-14 md:px-14 md:py-16"
          style={{
            background: "var(--primary-dark)",
            border: "1px solid color-mix(in srgb, var(--text-white) 10%, transparent)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-2xl font-semibold sm:text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-main)", color: "var(--text-white)", lineHeight: 1.25 }}
          >
            Not sure which {category.category.toLowerCase()} course fits you?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mx-auto mt-3 max-w-xl text-sm sm:mt-4 sm:text-[15px]"
            style={{
              fontFamily: "var(--font-main)",
              color: "color-mix(in srgb, var(--text-white) 65%, transparent)",
            }}
          >
            Talk to a YourCampus counsellor for free — get college shortlists, eligibility checks and admission timelines tailored to you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
          >
            <button
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-[var(--radius-md)] px-7 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 sm:w-auto"
              style={{
                background: "var(--gradient-primary)",
                color: "var(--text-white)",
                fontFamily: "var(--font-main)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] transition-transform duration-700 ease-out group-hover:translate-x-[150%]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, color-mix(in srgb, var(--text-white) 35%, transparent), transparent)",
                }}
              />
              <span className="relative z-10 inline-flex items-center gap-2">
                Get Free Counselling <ArrowRight size={16} />
              </span>
            </button>

            <button
              className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border px-7 py-3 text-sm font-medium transition-colors sm:w-auto"
              style={{
                borderColor: "color-mix(in srgb, var(--text-white) 25%, transparent)",
                color: "var(--text-white)",
                fontFamily: "var(--font-main)",
                background: "color-mix(in srgb, var(--text-white) 5%, transparent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "color-mix(in srgb, var(--text-white) 12%, transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "color-mix(in srgb, var(--text-white) 5%, transparent)";
              }}
            >
              <PhoneCall size={16} /> Request a Callback
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-8 sm:gap-x-6"
          >
            {reassurance.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 text-xs"
                style={{
                  fontFamily: "var(--font-main)",
                  color: "color-mix(in srgb, var(--text-white) 60%, transparent)",
                }}
              >
                <CheckCircle2 size={13} style={{ color: "var(--accent-green)" }} />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}