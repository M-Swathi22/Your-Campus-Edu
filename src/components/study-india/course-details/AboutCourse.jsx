// src/components/study-india/course-details/AboutCourse.jsx
import * as Icons from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutCourse({ about, stats, accent = "var(--primary)" }) {
  const reduceMotion = useReducedMotion();
  if (!about) return null;

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left: narrative */}
        <div>
          <h2
            className="font-semibold leading-snug"
            style={{ color: "var(--text-dark)", fontFamily: "var(--font-main)", fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)" }}
          >
            {about.heading}
          </h2>
          <div className="mt-5 space-y-4">
            {about.paragraphs?.map((p, i) => (
              <p
                key={i}
                style={{ color: "var(--text-medium)", fontFamily: "var(--font-main)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.75 }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Departure-board style stat strip */}
          {stats?.length > 0 && (
            <div className="mt-9 flex flex-wrap gap-4 sm:gap-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="min-w-[104px] rounded-[var(--radius-md)] border px-4 py-3"
                  style={{ borderColor: "var(--border)", background: "var(--bg-main)" }}
                >
                  <div
                    className="font-bold"
                    style={{ color: accent, fontFamily: "var(--font-main)", fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="uppercase tracking-wide"
                    style={{ color: "var(--text-light)", fontFamily: "var(--font-main)", fontSize: "clamp(0.65rem, 0.8vw, 0.72rem)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: highlight cards, boarding-stub style */}
        <div className="flex flex-col gap-4">
          {about.highlights?.map((h, i) => {
            const Icon = Icons[h.icon] || Icons.CheckCircle2;
            return (
              <motion.div
                key={i}
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-[var(--radius-md)] p-5"
                style={{ background: "var(--bg-section)" }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)]"
                  style={{ background: "var(--bg-main)" }}
                >
                  <Icon size={19} style={{ color: accent }} />
                </div>
                <div>
                  <p
                    className="font-medium"
                    style={{ color: "var(--text-dark)", fontFamily: "var(--font-main)", fontSize: "clamp(0.95rem, 1.1vw, 1.02rem)" }}
                  >
                    {h.title}
                  </p>
                  <p
                    className="mt-1"
                    style={{ color: "var(--text-medium)", fontFamily: "var(--font-main)", fontSize: "clamp(0.85rem, 1vw, 0.92rem)" }}
                  >
                    {h.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}