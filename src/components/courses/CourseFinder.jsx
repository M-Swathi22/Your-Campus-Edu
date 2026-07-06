import { Search, X, ChevronRight } from "lucide-react";

const categories = [
  "Medical",
  "Paramedical & Nursing",
  "Pharmaceutical",
  "Allied Health Science",
  "Engineering",
  "Arts & Science Advanced",
  "Arts & Science",
  "Law",
  "Management",
];

export default function CourseFinder({ search, setSearch, category, setCategory }) {
  return (
    <section id="course-finder" className="cfi-root">

      {/* Background layer */}
      <div className="cfi-bg" aria-hidden="true" />
      <div className="cfi-grid-overlay" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="cfi-orb cfi-orb--purple" aria-hidden="true" />
      <div className="cfi-orb cfi-orb--green"  aria-hidden="true" />
      <div className="cfi-orb cfi-orb--blue"   aria-hidden="true" />

      <div className="cfi-container">

        {/* ── Heading ── */}
        <div className="cfi-heading-block">
          <span className="cfi-eyebrow">
            <span className="cfi-eyebrow-dot" aria-hidden="true" />
            Explore Opportunities
          </span>
          <h2 className="cfi-heading">
            Search &amp; Find Your{" "}
            <span className="cfi-heading-accent">Ideal Course</span>
          </h2>
          <p className="cfi-sub">
            Filter through premier medical, engineering, and professional programs
            to unlock your academic potential.
          </p>
        </div>

        {/* ── Search bar ── */}
        <div className="cfi-search-wrap">
          <div className="cfi-search-box">
            <span className="cfi-search-icon" aria-hidden="true">
              <Search size={20} />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search degree, specialization, or keyword…"
              className="cfi-input"
              aria-label="Search courses"
            />
            {search && (
              <button
                className="cfi-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        {/* ── Filter pills ── */}
        <div className="cfi-filters-block">
          <p className="cfi-filter-label">Filter by field</p>

          {/* Mobile: horizontal scroll row */}
          <div className="cfi-scroll-track" role="group" aria-label="Course category filters">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`cfi-pill ${category === item ? "cfi-pill--active" : ""}`}
                aria-pressed={category === item}
              >
                {item}
                {category === item && (
                  <span className="cfi-pill-check" aria-hidden="true">✓</span>
                )}
              </button>
            ))}
          </div>

          {/* Desktop: wrapped grid (shown via CSS) */}
          <div className="cfi-grid-track" role="group" aria-label="Course category filters">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`cfi-pill ${category === item ? "cfi-pill--active" : ""}`}
                aria-pressed={category === item}
              >
                {item}
                {category === item && (
                  <span className="cfi-pill-check" aria-hidden="true">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active filter indicator */}
        {category && (
          <div className="cfi-active-filter">
            <span className="cfi-active-filter-label">Showing:</span>
            <span className="cfi-active-filter-value">{category}</span>
            <button
              className="cfi-active-filter-clear"
              onClick={() => setCategory("")}
              aria-label={`Remove ${category} filter`}
            >
              <X size={12} />
            </button>
          </div>
        )}

      </div>

      <style>{`
        /* ── Root ── */
        .cfi-root {
          position: relative;
          padding: 80px 0 88px;
          font-family: var(--font-main);
          overflow: hidden;
          isolation: isolate;
        }

        /* ── Background ── */
        .cfi-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background:
            linear-gradient(148deg, #0e0620 0%, #160d36 28%, #111e38 60%, #09182e 100%);
        }

        /* Dot-grid texture */
        .cfi-grid-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.18;
          background-image:
            radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        /* ── Glow orbs ── */
        .cfi-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(72px);
          z-index: 1;
        }
        .cfi-orb--purple {
          width: 520px; height: 420px;
          top: -80px; left: -120px;
          background: rgba(109,83,163,0.38);
          animation: cfiFloat 9s ease-in-out infinite;
        }
        .cfi-orb--green {
          width: 380px; height: 320px;
          bottom: -60px; right: -60px;
          background: rgba(49,185,120,0.22);
          animation: cfiFloat 11s ease-in-out infinite reverse;
        }
        .cfi-orb--blue {
          width: 260px; height: 220px;
          top: 20%; right: 15%;
          background: rgba(57,192,250,0.14);
          animation: cfiFloat 7s ease-in-out infinite 2s;
        }
        @keyframes cfiFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        /* ── Container ── */
        .cfi-container {
          position: relative;
          z-index: 2;
          max-width: 1040px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Heading block ── */
        .cfi-heading-block {
          text-align: center;
          margin-bottom: 48px;
        }
        .cfi-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-green);
          background: rgba(49,185,120,0.1);
          border: 1px solid rgba(49,185,120,0.25);
          padding: 7px 18px;
          border-radius: 100px;
          margin-bottom: 22px;
        }
        .cfi-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          flex-shrink: 0;
          animation: cfiDotPulse 2s ease-in-out infinite;
        }
        @keyframes cfiDotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(49,185,120,0.5); }
          50% { box-shadow: 0 0 0 4px rgba(49,185,120,0); }
        }
        .cfi-heading {
          font-size: clamp(2rem, 4vw, 3.1rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 16px;
          letter-spacing: -0.025em;
        }
        .cfi-heading-accent {
          background: linear-gradient(90deg, #31b978 0%, #39c0fa 55%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cfi-sub {
          font-size: clamp(0.9rem, 1.2vw, 1rem);
          color: rgba(255,255,255,0.44);
          line-height: 1.75;
          max-width: 520px;
          margin: 0 auto;
        }

        /* ── Search bar ── */
        .cfi-search-wrap {
          max-width: 700px;
          margin: 0 auto 40px;
        }
        .cfi-search-box {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 6px 8px 6px 22px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: var(--transition);
          gap: 12px;
        }
        .cfi-search-box:focus-within {
          background: rgba(255,255,255,0.09);
          border-color: rgba(109,83,163,0.6);
          box-shadow:
            0 0 0 3px rgba(109,83,163,0.15),
            0 12px 36px rgba(0,0,0,0.35);
        }
        .cfi-search-icon {
          color: var(--accent-green);
          display: flex;
          align-items: center;
          flex-shrink: 0;
          pointer-events: none;
        }
        .cfi-input {
          flex: 1;
          min-width: 0;
          height: 50px;
          border: none;
          background: transparent;
          font-family: var(--font-main);
          font-size: 0.97rem;
          color: rgba(255,255,255,0.88);
          outline: none;
        }
        .cfi-input::placeholder {
          color: rgba(255,255,255,0.22);
        }
        .cfi-clear {
          flex-shrink: 0;
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          margin-right: 4px;
        }
        .cfi-clear:hover {
          background: var(--secondary);
          border-color: var(--secondary);
          color: var(--white);
          transform: rotate(90deg);
        }

        /* ── Filter label ── */
        .cfi-filters-block {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .cfi-filter-label {
          margin: 0;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          text-align: center;
        }

        /* ── MOBILE scroll track (shown below 768px) ── */
        .cfi-scroll-track {
          display: none;
          overflow-x: auto;
          gap: 8px;
          padding: 4px 0 14px;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x proximity;
        }
        .cfi-scroll-track::-webkit-scrollbar { display: none; }

        /* ── DESKTOP wrap grid (shown above 768px) ── */
        .cfi-grid-track {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          padding: 4px 0;
        }

        /* ── Pill base (shared) ── */
        .cfi-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 22px;
          border-radius: 100px;
          font-size: 0.84rem;
          font-weight: 600;
          font-family: var(--font-main);
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.055);
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
          flex-shrink: 0;
          scroll-snap-align: start;
          line-height: 1;
        }
        .cfi-pill:hover {
          background: rgba(109,83,163,0.22);
          border-color: rgba(109,83,163,0.45);
          color: rgba(255,255,255,0.92);
          transform: translateY(-2px);
        }
        .cfi-pill--active {
          background: linear-gradient(135deg, rgba(49,185,120,0.25) 0%, rgba(109,83,163,0.35) 100%);
          border-color: rgba(49,185,120,0.55);
          color: #ffffff;
          box-shadow:
            0 0 0 1px rgba(49,185,120,0.25) inset,
            0 4px 18px rgba(49,185,120,0.2);
        }
        .cfi-pill--active:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 0 1px rgba(49,185,120,0.35) inset,
            0 6px 24px rgba(49,185,120,0.28);
        }
        .cfi-pill-check {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--accent-green);
        }

        /* ── Active filter chip ── */
        .cfi-active-filter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 22px;
          animation: cfiFadeIn 0.3s ease;
        }
        @keyframes cfiFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cfi-active-filter-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.35);
          font-weight: 500;
        }
        .cfi-active-filter-value {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-green);
          background: rgba(49,185,120,0.12);
          border: 1px solid rgba(49,185,120,0.3);
          padding: 4px 14px;
          border-radius: 100px;
        }
        .cfi-active-filter-clear {
          width: 22px; height: 22px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          padding: 0;
        }
        .cfi-active-filter-clear:hover {
          background: var(--secondary);
          border-color: var(--secondary);
          color: var(--white);
        }

        /* ═══════════════════════════════
           MOBILE  ≤ 767px
        ═══════════════════════════════ */
        @media (max-width: 767px) {
          .cfi-root { padding: 60px 0 68px; }

          .cfi-heading-block { margin-bottom: 36px; }

          /* Switch tracks */
          .cfi-scroll-track { display: flex; }
          .cfi-grid-track   { display: none; }

          /* Pill sizing on mobile — bigger touch targets */
          .cfi-pill {
            padding: 12px 20px;
            font-size: 0.86rem;
            border-width: 1.5px;
          }
          .cfi-pill--active {
            border-color: rgba(49,185,120,0.7);
            box-shadow:
              0 0 0 1px rgba(49,185,120,0.3) inset,
              0 4px 16px rgba(49,185,120,0.22);
          }

          /* Search */
          .cfi-input { height: 46px; font-size: 0.92rem; }
          .cfi-search-box { padding: 4px 6px 4px 18px; }

          /* Fade edges on scroll track */
          .cfi-filters-block {
            position: relative;
          }
          .cfi-scroll-track {
            padding-left: 0;
            padding-right: 0;
            /* Fade out right edge to signal scrollability */
            -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
            mask-image: linear-gradient(to right, black 80%, transparent 100%);
          }

          .cfi-filter-label { text-align: left; }
        }

        /* ═══════════════════════════════
           VERY SMALL  ≤ 380px
        ═══════════════════════════════ */
        @media (max-width: 380px) {
          .cfi-container { padding: 0 14px; }
          .cfi-pill { padding: 11px 16px; font-size: 0.82rem; }
          .cfi-heading { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  );
}