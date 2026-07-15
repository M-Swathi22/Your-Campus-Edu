import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function WhyChooseCategory({ category, data }) {
  const reasons = data?.whyChoose || [];
  const accent = category.accent || "--primary";

  return (
    <section className="bg-[var(--bg-section)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <span
              className="inline-block rounded-full px-4 py-1 text-xs font-medium tracking-wide"
              style={{
                background: `color-mix(in srgb, var(${accent}) 12%, transparent)`,
                color: `var(${accent})`,
                fontFamily: "var(--font-main)",
              }}
            >
              Why This Field
            </span>
            <h2
              className="mt-4 text-3xl font-semibold leading-snug text-[var(--text-dark)] md:text-4xl"
              style={{ fontFamily: "var(--font-main)" }}
            >
              Why Choose {category.category}?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-medium)]" style={{ fontFamily: "var(--font-main)" }}>
              A closer look at what makes this stream worth the years of study — beyond the classroom.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {reasons.map((r, i) => {
              const RIcon = Icons[r.icon] || Icons.Sparkles;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-5 rounded-[var(--radius-lg)] border bg-[var(--bg-main)] p-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                    style={{
                      background: `color-mix(in srgb, var(${accent}) 14%, transparent)`,
                      color: `var(${accent})`,
                    }}
                  >
                    <RIcon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[var(--text-dark)]" style={{ fontFamily: "var(--font-main)" }}>
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--text-medium)]" style={{ fontFamily: "var(--font-main)" }}>
                      {r.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}