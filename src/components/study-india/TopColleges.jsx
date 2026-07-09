import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, Landmark } from "lucide-react";
import { topColleges } from "../../data/topColleges";

export default function TopColleges() {
  return (
    <section className="px-6 py-20" style={{ background: "var(--bg-section)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-xl">
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "var(--primary)" }}
          >
            Top Colleges
          </span>
          <h2
            className="mt-3 text-3xl font-semibold md:text-4xl"
            style={{ color: "var(--text-dark)" }}
          >
            Ranked, graded, and verified
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topColleges.map((college, i) => (
            <motion.div
              key={college.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex flex-col p-6"
              style={{
                background: "var(--bg-main)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                  style={{
                    background: `color-mix(in srgb, ${college.accent} 15%, transparent)`,
                    color: college.accent,
                  }}
                >
                  <Award size={12} /> NIRF #{college.nirfRank}
                </span>
                <span
                  className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
                  style={{
                    background: "color-mix(in srgb, var(--accent-green) 15%, transparent)",
                    color: "var(--accent-green)",
                  }}
                >
                  NAAC {college.naacGrade}
                </span>
              </div>

              <h3 className="mb-1 text-base font-semibold leading-snug" style={{ color: "var(--text-dark)" }}>
                {college.shortName}
              </h3>
              <p className="mb-4 text-xs" style={{ color: "var(--text-light)" }}>
                {college.name}
              </p>

              <div className="mt-auto space-y-2 border-t pt-4" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-medium)" }}>
                  <Landmark size={13} style={{ color: college.accent }} />
                  {college.state} &middot; {college.type}
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-medium)" }}>
                  <Calendar size={13} style={{ color: college.accent }} />
                  Est. {college.established}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {college.courses.slice(0, 3).map((c) => (
                  <span
                    key={c}
                    className="rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{ background: "var(--bg-light)", color: "var(--text-medium)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}