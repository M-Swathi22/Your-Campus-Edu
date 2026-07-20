import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SlidersHorizontal, MapPin, ChevronDown, GitCompareArrows, X, ArrowUpRight } from "lucide-react";

const FILTERS = ["All", "Government", "Private", "Autonomous"];
const SORTS = [
  { id: "rank", label: "Ranking" },
  { id: "name", label: "Name: A-Z" },
  { id: "rating", label: "Rating" },
];

const sortColleges = (list, sortId) => {
  const arr = [...list];
  switch (sortId) {
    case "name": return arr.sort((a, b) => a.name.localeCompare(b.name));
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
      <section className="college-grid-section">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-10">
          <p style={{ fontFamily: "var(--font-main)", color: "var(--primary-dark)", fontSize: "1.1rem", fontWeight: 600 }}>
            No colleges listed yet for {city.name}.
          </p>
        </div>
        <style>{`.college-grid-section { background: var(--primary-light); width: 100%; }`}</style>
      </section>
    );
  }

  return (
    <section className="college-grid-section">
      <div className="college-grid mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal size={15} strokeWidth={2.25} color="var(--primary)" />
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((college, i) => (
              <motion.article
                key={college.id}
                layout
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : Math.min(i * 0.05, 0.3), ease: "easeOut" }}
                className="college-namecard"
              >
                <div className="college-namecard__notch college-namecard__notch--left" aria-hidden="true" />
                <div className="college-namecard__notch college-namecard__notch--right" aria-hidden="true" />

                <div className="flex items-start justify-between gap-3">
                  <span className="college-namecard__type" data-type={college.type}>{college.type}</span>
                  <button onClick={() => toggleCompare(college.id)} className="college-namecard__compare" data-active={compareIds.includes(college.id)} aria-label="Add to compare">
                    <GitCompareArrows size={13} strokeWidth={2.25} />
                  </button>
                </div>

                <h3 className="college-namecard__name">{college.name}</h3>

                <div className="college-namecard__meta">
                  <MapPin size={12} strokeWidth={2.25} />
                  <span>{city.name} &middot; Est. {college.established}</span>
                </div>

                <div className="college-namecard__divider" aria-hidden="true" />

                <button onClick={() => toggleCompare(college.id)} className="college-namecard__cta" style={{ fontFamily: "var(--font-main)" }}>
                  Compare <ArrowUpRight size={13} strokeWidth={2.5} />
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {compareIds.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }} transition={{ duration: 0.25 }} className="college-grid__compare-bar">
              <div className="flex items-center gap-2" style={{ fontFamily: "var(--font-main)" }}>
                <GitCompareArrows size={15} strokeWidth={2.25} />
                <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{compareIds.length} selected for comparison</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`/compare-colleges?ids=${compareIds.join(",")}&mode=specific&names=${filtered
                    .filter((c) => compareIds.includes(c.id))
                    .map((c) => encodeURIComponent(c.name))
                    .join(",")}`}
                  className="college-grid__compare-cta"
                >
                  Compare Now
                </a>
                <button onClick={() => setCompareIds([])} aria-label="Clear selection" className="college-grid__compare-clear"><X size={15} strokeWidth={2.25} /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .college-grid-section { background: var(--primary-light); width: 100%; }

        .college-grid__filter {
          padding: 0.4rem 0.9rem; border-radius: var(--radius-xl); font-size: 0.78rem; font-weight: 500;
          border: 1px solid color-mix(in srgb, var(--primary) 25%, transparent);
          color: var(--primary-dark); background: var(--bg-main); transition: var(--transition);
        }
        .college-grid__filter[data-active="true"] { background: var(--gradient-primary); color: var(--text-white); border-color: transparent; }

        .college-grid__sort-trigger {
          display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.45rem 1rem; border-radius: var(--radius-xl);
          font-size: 0.78rem; font-weight: 500; color: var(--primary-dark);
          border: 1px solid color-mix(in srgb, var(--primary) 25%, transparent); background: var(--bg-main);
        }
        .college-grid__sort-menu {
          position: absolute; right: 0; top: calc(100% + 6px); background: var(--bg-main); border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg); padding: 0.4rem; min-width: 12rem; z-index: 20;
        }
        .college-grid__sort-option { display: block; width: 100%; text-align: left; padding: 0.5rem 0.7rem; border-radius: var(--radius-sm); font-size: 0.8rem; color: var(--primary-dark); font-family: var(--font-main); }
        .college-grid__sort-option:hover { background: var(--primary-light); }

        .college-namecard {
          position: relative; background: var(--bg-main); border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md); overflow: hidden;
          padding: 1.4rem 1.4rem 1.2rem; transition: var(--transition);
        }
        .college-namecard:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }
        .college-namecard__notch { position: absolute; width: 20px; height: 20px; border-radius: 50%; background: var(--primary-light); top: 50%; transform: translateY(-50%); z-index: 2; }
        .college-namecard__notch--left { left: -10px; }
        .college-namecard__notch--right { right: -10px; }

        .college-namecard__type {
          font-family: var(--font-main); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 0.2rem 0.55rem; border-radius: var(--radius-sm);
          background: color-mix(in srgb, var(--primary) 12%, transparent); color: var(--primary-dark);
        }
        .college-namecard__type[data-type="Government"] { background: color-mix(in srgb, var(--accent-green) 18%, transparent); color: #1c7a4f; }
        .college-namecard__type[data-type="Private"] { background: color-mix(in srgb, var(--accent-blue) 18%, transparent); color: #1d5a9e; }

        .college-namecard__compare {
          width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          border: 1px solid color-mix(in srgb, var(--primary) 25%, transparent); color: var(--primary); flex-shrink: 0; transition: var(--transition);
        }
        .college-namecard__compare[data-active="true"] { background: var(--primary); color: var(--text-white); border-color: transparent; }

        .college-namecard__name {
          font-family: var(--font-main); font-size: clamp(1.05rem, 1.6vw, 1.2rem); font-weight: 700;
          color: var(--primary-dark); margin-top: 0.7rem; line-height: 1.3;
        }
        .college-namecard__meta {
          display: flex; align-items: center; gap: 0.35rem; font-family: var(--font-main);
          font-size: 0.78rem; color: var(--text-medium); margin-top: 0.4rem;
        }
        .college-namecard__meta svg { color: var(--primary); flex-shrink: 0; }

        .college-namecard__divider { height: 0; border-top: 1px dashed var(--border); margin: 1rem 0 0.85rem; }

        .college-namecard__cta {
          display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.76rem; font-weight: 600;
          color: var(--primary); transition: var(--transition);
        }
        .college-namecard__cta:hover { color: var(--primary-dark); }

        .college-grid__compare-bar {
          position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 1.2rem;
          padding: 0.8rem 1.2rem; border-radius: var(--radius-xl); background: var(--primary-dark); color: var(--text-white);
          box-shadow: var(--shadow-lg); z-index: 40;
        }
        .college-grid__compare-cta {
          font-family: var(--font-main); font-size: 0.8rem; font-weight: 600; padding: 0.45rem 1rem;
          border-radius: var(--radius-xl); background: var(--bg-main); color: var(--primary-dark);
        }
        .college-grid__compare-clear {
          width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--text-white) 15%, transparent); color: var(--text-white);
        }
      `}</style>
    </section>
  );
};

export default CollegeGrid;