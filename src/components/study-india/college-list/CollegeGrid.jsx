import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SlidersHorizontal, Star, Users, Home, TrendingUp, Award, ChevronDown, GitCompareArrows, X } from "lucide-react";
import { formatFeesINR } from "../../../Data/collegesData";

const FILTERS = ["All", "Government", "Private", "Autonomous", "Deemed"];
const SORTS = [
  { id: "rank", label: "Ranking" },
  { id: "fees-low", label: "Fees: Low to High" },
  { id: "fees-high", label: "Fees: High to Low" },
  { id: "rating", label: "Rating" },
];

const sortColleges = (list, sortId) => {
  const arr = [...list];
  switch (sortId) {
    case "fees-low": return arr.sort((a, b) => a.feesPerYearINR - b.feesPerYearINR);
    case "fees-high": return arr.sort((a, b) => b.feesPerYearINR - a.feesPerYearINR);
    case "rating": return arr.sort((a, b) => b.rating - a.rating);
    default: return arr.sort((a, b) => (a.nirfRank ?? 999) - (b.nirfRank ?? 999));
  }
};

const CollegeGrid = ({ colleges, city }) => {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortId, setSortId] = useState("rank");
  const [sortOpen, setSortOpen] = useState(false);
  const [compareIds, setCompareIds] = useState([]);

  const filtered = useMemo(() => {
    const base = activeFilter === "All" ? colleges : colleges.filter((c) => c.type === activeFilter);
    return sortColleges(base, sortId);
  }, [colleges, activeFilter, sortId]);

  const toggleCompare = (id) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((c) => c !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  };

  if (colleges.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-10">
        <p style={{ fontFamily: "var(--font-main)", color: "var(--primary-dark, #24144f)", fontSize: "1.1rem", fontWeight: 600 }}>
          No colleges listed yet for {city.name}.
        </p>
      </section>
    );
  }

  return (
    <section className="college-grid mx-auto max-w-6xl px-6 py-16 sm:px-10">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <SlidersHorizontal size={15} strokeWidth={2.25} color="var(--primary, #6d53a3)" />
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)} className="college-grid__filter" data-active={activeFilter === f} style={{ fontFamily: "var(--font-main)" }}>
              {f}
            </button>
          ))}
        </div>

        <div className="relative">
          <button onClick={() => setSortOpen((o) => !o)} className="college-grid__sort-trigger" style={{ fontFamily: "var(--font-main)" }}>
            Sort: {SORTS.find((s) => s.id === sortId)?.label}
            <ChevronDown size={14} strokeWidth={2.5} style={{ transform: sortOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
          </button>
          <AnimatePresence>
            {sortOpen && (
              <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }} className="college-grid__sort-menu">
                {SORTS.map((s) => (
                  <button key={s.id} onClick={() => { setSortId(s.id); setSortOpen(false); }} className="college-grid__sort-option" style={{ fontFamily: "var(--font-main)" }}>
                    {s.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((college, i) => (
            <motion.article
              key={college.id}
              layout
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : Math.min(i * 0.05, 0.3), ease: "easeOut" }}
              className="college-ticket"
            >
              <div className="college-ticket__notch college-ticket__notch--left" aria-hidden="true" />
              <div className="college-ticket__notch college-ticket__notch--right" aria-hidden="true" />

              <div className="college-ticket__main">
                <div className="flex items-start justify-between gap-3">
                  <span className="college-ticket__type" data-type={college.type}>{college.type}</span>
                  <button onClick={() => toggleCompare(college.id)} className="college-ticket__compare" data-active={compareIds.includes(college.id)} aria-label="Add to compare">
                    <GitCompareArrows size={13} strokeWidth={2.25} />
                  </button>
                </div>

                <h3 style={{ fontFamily: "var(--font-main)", fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", fontWeight: 700, color: "var(--primary-dark, #24144f)", marginTop: "0.6rem", lineHeight: 1.25 }}>
                  {college.name}
                </h3>
                <p style={{ fontFamily: "var(--font-main)", fontSize: "0.78rem", color: "var(--text-secondary, #6b6478)", marginTop: "0.25rem" }}>
                  Est. {college.established} &middot; {college.affiliation}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {college.courses.slice(0, 2).map((c) => (
                    <span key={c} className="college-ticket__tag">{c}</span>
                  ))}
                </div>
              </div>

              <div className="college-ticket__divider" aria-hidden="true" />

              <div className="college-ticket__stub">
                <div className="college-ticket__stub-row">
                  <div className="college-ticket__stat"><Award size={13} strokeWidth={2.25} /><span>{college.nirfRank ? `NIRF #${college.nirfRank}` : "Unranked"}</span></div>
                  <div className="college-ticket__stat"><Star size={13} strokeWidth={2.25} /><span>{college.rating.toFixed(1)}</span></div>
                </div>
                <div className="college-ticket__stub-row">
                  <div className="college-ticket__stat"><TrendingUp size={13} strokeWidth={2.25} /><span>{college.placementRate} placed</span></div>
                  <div className="college-ticket__stat"><Home size={13} strokeWidth={2.25} /><span>{college.hostelAvailable ? "Hostel" : "No hostel"}</span></div>
                </div>
                <div className="college-ticket__fare">
                  <span className="college-ticket__fare-label">FARE</span>
                  <span className="college-ticket__fare-amount">{formatFeesINR(college.feesPerYearINR)}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {compareIds.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.25 }} className="college-grid__compare-bar">
            <div className="flex items-center gap-2" style={{ fontFamily: "var(--font-main)" }}>
              <Users size={15} strokeWidth={2.25} />
              <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{compareIds.length} selected for comparison</span>
            </div>
            <div className="flex items-center gap-2">
              <a href={`/compare-colleges?ids=${compareIds.join(",")}`} className="college-grid__compare-cta">Compare Now</a>
              <button onClick={() => setCompareIds([])} aria-label="Clear selection" className="college-grid__compare-clear"><X size={15} strokeWidth={2.25} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .college-grid__filter {
          padding: 0.4rem 0.9rem; border-radius: 999px; font-size: 0.78rem; font-weight: 500;
          border: 1px solid color-mix(in srgb, var(--primary, #6d53a3) 25%, transparent);
          color: var(--primary-dark, #24144f); background: #fff; transition: all 0.2s ease;
        }
        .college-grid__filter[data-active="true"] { background: var(--gradient-primary); color: #fff; border-color: transparent; }
        .college-grid__sort-trigger {
          display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.45rem 1rem; border-radius: 999px;
          font-size: 0.78rem; font-weight: 500; color: var(--primary-dark, #24144f);
          border: 1px solid color-mix(in srgb, var(--primary, #6d53a3) 25%, transparent); background: #fff;
        }
        .college-grid__sort-menu { position: absolute; right: 0; top: calc(100% + 6px); background: #fff; border-radius: 12px; box-shadow: 0 12px 30px rgba(36, 20, 79, 0.15); padding: 0.4rem; min-width: 12rem; z-index: 20; }
        .college-grid__sort-option { display: block; width: 100%; text-align: left; padding: 0.5rem 0.7rem; border-radius: 8px; font-size: 0.8rem; color: var(--primary-dark, #24144f); }
        .college-grid__sort-option:hover { background: color-mix(in srgb, var(--primary, #6d53a3) 8%, transparent); }

        .college-ticket { position: relative; background: #fff; border-radius: 18px; box-shadow: 0 10px 32px rgba(36, 20, 79, 0.09); overflow: hidden; border: 1px solid color-mix(in srgb, var(--primary, #6d53a3) 10%, transparent); }
        .college-ticket__notch { position: absolute; width: 20px; height: 20px; border-radius: 50%; background: var(--page-bg, #f7f5fb); top: 62%; transform: translateY(-50%); z-index: 2; }
        .college-ticket__notch--left { left: -10px; }
        .college-ticket__notch--right { right: -10px; }
        .college-ticket__main { padding: 1.4rem 1.4rem 1.1rem; }
        .college-ticket__type { font-family: monospace; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.55rem; border-radius: 6px; text-transform: uppercase; background: color-mix(in srgb, var(--primary, #6d53a3) 12%, transparent); color: var(--primary-dark, #24144f); }
        .college-ticket__type[data-type="Government"] { background: color-mix(in srgb, var(--accent-green, #35d48c) 18%, transparent); color: #1c7a4f; }
        .college-ticket__type[data-type="Private"] { background: color-mix(in srgb, var(--accent-blue, #4a90e2) 18%, transparent); color: #1d5a9e; }
        .college-ticket__type[data-type="Deemed"] { background: color-mix(in srgb, var(--accent-pink, #ec6f9b) 18%, transparent); color: #a13c66; }
        .college-ticket__compare { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid color-mix(in srgb, var(--primary, #6d53a3) 25%, transparent); color: var(--primary, #6d53a3); flex-shrink: 0; transition: all 0.2s ease; }
        .college-ticket__compare[data-active="true"] { background: var(--primary, #6d53a3); color: #fff; border-color: transparent; }
        .college-ticket__tag { font-family: var(--font-main); font-size: 0.68rem; padding: 0.2rem 0.55rem; border-radius: 999px; background: color-mix(in srgb, var(--primary, #6d53a3) 7%, transparent); color: var(--primary-dark, #24144f); }
        .college-ticket__divider { height: 0; border-top: 2px dashed color-mix(in srgb, var(--primary, #6d53a3) 22%, transparent); margin: 0 0.4rem; }
        .college-ticket__stub { padding: 1rem 1.4rem 1.4rem; }
        .college-ticket__stub-row { display: flex; justify-content: space-between; margin-bottom: 0.55rem; }
        .college-ticket__stat { display: inline-flex; align-items: center; gap: 0.35rem; font-family: var(--font-main); font-size: 0.76rem; color: var(--text-secondary, #6b6478); }
        .college-ticket__stat svg { color: var(--primary, #6d53a3); }
        .college-ticket__fare { display: flex; align-items: baseline; justify-content: space-between; margin-top: 0.7rem; padding-top: 0.7rem; border-top: 1px solid color-mix(in srgb, var(--primary, #6d53a3) 10%, transparent); }
        .college-ticket__fare-label { font-family: monospace; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--text-secondary, #6b6478); }
        .college-ticket__fare-amount { font-family: var(--font-main); font-weight: 700; font-size: 1rem; color: var(--primary-dark, #24144f); }

        .college-grid__compare-bar { position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 1.2rem; padding: 0.8rem 1.2rem; border-radius: 999px; background: var(--primary-dark, #24144f); color: #fff; box-shadow: 0 16px 36px rgba(36, 20, 79, 0.35); z-index: 40; }
        .college-grid__compare-cta { font-family: var(--font-main); font-size: 0.8rem; font-weight: 600; padding: 0.45rem 1rem; border-radius: 999px; background: #fff; color: var(--primary-dark, #24144f); }
        .college-grid__compare-clear { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.15); color: #fff; }
      `}</style>
    </section>
  );
};

export default CollegeGrid;