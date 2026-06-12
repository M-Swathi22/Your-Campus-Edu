import { Search, X } from "lucide-react";

const categories = [
   "Medical", "Paramedical & Nursing", "Pharmaceutical",
  "Allied Health Science", "Engineering", "Arts & Science Advanced",
  "Arts & Science", "Law", "Management",
];

export default function CourseFinder({ search, setSearch, category, setCategory }) {
  return (
    <section id="course-finder" className="cfi-section">

      {/* ── Subtle noise texture overlay ── */}
      <div className="cfi-noise" aria-hidden="true" />

      {/* ── Aurora glow blobs + star dots ── */}
      <svg
        className="cfi-aurora"
        viewBox="0 0 1200 580"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="cfi-a1" cx="18%" cy="22%" r="52%">
            <stop offset="0%" stopColor="#6d53a3" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6d53a3" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cfi-a2" cx="82%" cy="78%" r="46%">
            <stop offset="0%" stopColor="#31b978" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#31b978" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cfi-a3" cx="80%" cy="14%" r="40%">
            <stop offset="0%" stopColor="#39c0fa" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#39c0fa" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cfi-a4" cx="50%" cy="105%" r="50%">
            <stop offset="0%" stopColor="#24144f" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#24144f" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cfi-a5" cx="50%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#6d53a3" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#6d53a3" stopOpacity="0" />
          </radialGradient>
          <filter id="cfi-blur-lg">
            <feGaussianBlur stdDeviation="38" />
          </filter>
          <filter id="cfi-blur-md">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>

        {/* Aurora ellipses — pure soft glows, no lines */}
        <ellipse cx="220"  cy="145" rx="420" ry="300" fill="url(#cfi-a1)" filter="url(#cfi-blur-lg)" />
        <ellipse cx="980"  cy="440" rx="360" ry="270" fill="url(#cfi-a2)" filter="url(#cfi-blur-lg)" />
        <ellipse cx="950"  cy="80"  rx="280" ry="210" fill="url(#cfi-a3)" filter="url(#cfi-blur-md)" />
        <ellipse cx="600"  cy="600" rx="500" ry="240" fill="url(#cfi-a4)" filter="url(#cfi-blur-lg)" />
        <ellipse cx="600"  cy="290" rx="320" ry="220" fill="url(#cfi-a5)" filter="url(#cfi-blur-lg)" />

        {/* Star field — scattered soft dots only */}
        <circle cx="95"   cy="42"  r="1.2" fill="rgba(255,255,255,0.45)" />
        <circle cx="280"  cy="20"  r="0.9" fill="rgba(255,255,255,0.35)" />
        <circle cx="520"  cy="32"  r="1.1" fill="rgba(255,255,255,0.38)" />
        <circle cx="760"  cy="18"  r="0.8" fill="rgba(255,255,255,0.32)" />
        <circle cx="920"  cy="50"  r="1.3" fill="rgba(255,255,255,0.42)" />
        <circle cx="1100" cy="28"  r="1.0" fill="rgba(255,255,255,0.35)" />
        <circle cx="38"   cy="220" r="1.0" fill="rgba(255,255,255,0.28)" />
        <circle cx="1160" cy="190" r="1.1" fill="rgba(255,255,255,0.3)"  />
        <circle cx="65"   cy="430" r="0.9" fill="rgba(255,255,255,0.22)" />
        <circle cx="1140" cy="460" r="1.0" fill="rgba(255,255,255,0.25)" />
        <circle cx="460"  cy="550" r="1.2" fill="rgba(255,255,255,0.2)"  />
        <circle cx="740"  cy="540" r="0.8" fill="rgba(255,255,255,0.18)" />
        <circle cx="180"  cy="530" r="1.0" fill="rgba(255,255,255,0.2)"  />
        <circle cx="1020" cy="520" r="0.9" fill="rgba(255,255,255,0.18)" />
        <circle cx="380"  cy="28"  r="1.0" fill="rgba(255,255,255,0.3)"  />
        <circle cx="640"  cy="22"  r="0.8" fill="rgba(255,255,255,0.28)" />
        <circle cx="840"  cy="35"  r="1.1" fill="rgba(255,255,255,0.32)" />
      </svg>

      <div className="cfi-container">

        {/* ── Heading Block ── */}
        <div className="cfi-heading-block">
          <div className="cfi-badge-wrapper">
            <span className="cfi-eyebrow">Explore Opportunities</span>
          </div>
          <h2 className="cfi-heading">
            Search &amp; Find Your <span className="cfi-text-gradient">Ideal Course</span>
          </h2>
          <p className="cfi-sub">
            Filter through premier medical, engineering, and professional programs to unlock your academic potential.
          </p>
        </div>

        {/* ── Search Bar ── */}
        <div className="cfi-search-container">
          <div className="cfi-search-box">
            <div className="cfi-search-icon">
              <Search size={21} />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by degree name, specialization, or keyword..."
              className="cfi-input"
            />
            {search && (
              <button className="cfi-clear" onClick={() => setSearch("")} aria-label="Clear search">
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* ── Filter Pills ── */}
        <div className="cfi-track-wrapper">
          <div className="cfi-filters">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`cfi-pill ${category === item ? "cfi-pill--active" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        /* ── Section base ── */
        .cfi-section {
          position: relative;
          padding: 72px 0 82px;
          font-family: var(--font-main);
          overflow: hidden;
          background:
            radial-gradient(ellipse 75% 55% at 14% 20%, rgba(109,83,163,0.5)  0%, transparent 60%),
            radial-gradient(ellipse 58% 48% at 86% 80%, rgba(49,185,120,0.25)  0%, transparent 55%),
            radial-gradient(ellipse 48% 38% at 82% 10%, rgba(57,192,250,0.18)  0%, transparent 50%),
            radial-gradient(ellipse 65% 55% at 50% 115%,rgba(36,20,79,0.65)    0%, transparent 65%),
            linear-gradient(148deg, #120828 0%, #1c1040 30%, #17273e 62%, #0c1e33 100%);
        }

        /* ── Noise grain overlay ── */
        .cfi-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px 180px;
        }

        /* ── Aurora SVG layer ── */
        .cfi-aurora {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
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
          margin-bottom: 52px;
        }
        .cfi-badge-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        .cfi-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.88);
          background: rgba(109, 83, 163, 0.22);
          border: 1px solid rgba(109, 83, 163, 0.42);
          padding: 7px 22px;
          border-radius: var(--radius-xl);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .cfi-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 18px;
          letter-spacing: -0.02em;
        }
        .cfi-text-gradient {
          background: linear-gradient(90deg, #31b978 0%, #39c0fa 50%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cfi-sub {
          font-size: 1.02rem;
          color: rgba(255, 255, 255, 0.48);
          line-height: 1.72;
          max-width: 560px;
          margin: 0 auto;
        }

        /* ── Search bar ── */
        .cfi-search-container {
          max-width: 720px;
          margin: 0 auto 44px;
        }
        .cfi-search-box {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-xl);
          padding: 6px 8px 6px 20px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: var(--transition);
        }
        .cfi-search-box:focus-within {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(109, 83, 163, 0.55);
          box-shadow:
            0 0 0 3px rgba(109, 83, 163, 0.14),
            0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .cfi-search-icon {
          color: #31b978;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          margin-right: 12px;
          flex-shrink: 0;
        }
        .cfi-input {
          width: 100%;
          height: 52px;
          border: none;
          background: transparent;
          font-family: var(--font-main);
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.88);
          outline: none;
          padding-right: 44px;
        }
        .cfi-input::placeholder {
          color: rgba(255, 255, 255, 0.24);
        }
        .cfi-clear {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }
        .cfi-clear:hover {
          background: var(--secondary);
          color: var(--white);
          transform: translateY(-50%) rotate(90deg);
        }

        /* ── Filter pills ── */
        .cfi-track-wrapper {
          width: 100%;
          overflow: hidden;
        }
        .cfi-filters {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 10px;
          padding: 4px 4px 16px;
          scrollbar-width: none;
        }
        .cfi-filters::-webkit-scrollbar { display: none; }
        @media (min-width: 992px) {
          .cfi-filters {
            flex-wrap: wrap;
            justify-content: center;
            padding-bottom: 4px;
          }
        }
        .cfi-pill {
          padding: 11px 22px;
          border-radius: var(--radius-xl);
          font-size: 0.85rem;
          font-weight: 600;
          font-family: var(--font-main);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cfi-pill:hover {
          background: rgba(109, 83, 163, 0.25);
          border-color: rgba(109, 83, 163, 0.45);
          color: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
        }
        .cfi-pill--active {
          background: linear-gradient(135deg, #31b978 0%, #6d53a3 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 18px rgba(49, 185, 120, 0.28);
        }
        .cfi-pill--active:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(49, 185, 120, 0.36);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .cfi-section { padding: 56px 0 62px; }
          .cfi-heading-block { margin-bottom: 36px; }
          .cfi-input { height: 46px; font-size: 0.93rem; }
          .cfi-pill { padding: 9px 18px; font-size: 0.8rem; }
        }
      `}</style>
    </section>
  );
}