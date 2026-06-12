import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, MapPin, Globe2, TrendingUp } from "lucide-react";
import heroBg from "../../assets/images/courses-hero.avif";

const FACTORS = [
  "Academic performance",
  "Interests & strengths",
  "Career goals",
  "Budget preferences",
  "Future opportunities",
];

const RESULTS = {
  domestic: {
    course: "Computer Science & AI",
    career: "AI Engineer",
    options: "India · Bangalore · Pune",
    duration: "4 Years",
    demand: "High",
  },
  abroad: {
    course: "Computer Science & AI",
    career: "AI Engineer",
    options: "India · Canada · Germany",
    duration: "4 Years",
    demand: "High",
  },
};

export default function CoursesHero() {
  const [mode, setMode] = useState("abroad");
  const [activeFactor, setActiveFactor] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setActiveFactor(0);
    setShowResult(false);
  }, [mode]);

  useEffect(() => {
    if (showResult) return;
    if (activeFactor < FACTORS.length - 1) {
      const t = setTimeout(() => setActiveFactor((i) => i + 1), 550);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowResult(true), 550);
    return () => clearTimeout(t);
  }, [activeFactor, showResult]);

  const result = RESULTS[mode];

  return (
    <section className="ch15-root">

      <div className="ch15-photo" style={{ backgroundImage: `url(${heroBg})` }} role="presentation" />
      <div className="ch15-wash" />

      <div className="ch15-shell">

        {/* ── Left: editorial column ── */}
        <div className="ch15-left">
          <nav className="ch15-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="ch15-bc-link">Home</Link>
            <span className="ch15-bc-slash" aria-hidden="true">/</span>
            <span className="ch15-bc-active">Courses</span>
          </nav>

          <h1 className="ch15-headline">
            Discover the right
            <br />
            course for
            <br />
            <span className="ch15-hl-accent">your future.</span>
          </h1>

          <p className="ch15-sub">
            Explore engineering, medicine, management, law, nursing, arts, science, and
            study abroad programs. Compare opportunities and find the course that aligns
            with your goals.
          </p>

          <div className="ch15-actions">
            <a href="#course-finder" className="ch15-btn-primary">
              <span>Explore Courses</span>
              <ArrowRight size={16} className="ch15-btn-arrow" />
            </a>
            <Link to="/ai-match" className="ch15-btn-secondary">
              <Sparkles size={15} />
              <span>Take AI Course Match</span>
            </Link>
          </div>
        </div>

        {/* ── Right: AI Course Match widget ── */}
        <div className="ch15-right">
          <div className="ch15-widget">

            <div className="ch15-widget-glow" aria-hidden="true" />

            <div className="ch15-widget-head">
              <div className="ch15-widget-title">
                <span className="ch15-widget-icon-wrap">
                  <Sparkles size={16} />
                </span>
                <span>AI Course Match</span>
              </div>
              <span className="ch15-widget-tag">Beta</span>
            </div>

            <div className="ch15-mode-toggle">
              <button
                type="button"
                className={`ch15-mode-btn ${mode === "domestic" ? "ch15-mode-btn--active" : ""}`}
                onClick={() => setMode("domestic")}
              >
                <MapPin size={14} />
                <span>Domestic</span>
              </button>
              <button
                type="button"
                className={`ch15-mode-btn ${mode === "abroad" ? "ch15-mode-btn--active" : ""}`}
                onClick={() => setMode("abroad")}
              >
                <Globe2 size={14} />
                <span>Abroad</span>
              </button>
            </div>

            <div className="ch15-widget-body">

              {!showResult ? (
                <>
                  
                  <ul className="ch15-factor-list">
                    {FACTORS.map((f, i) => (
                      <li
                        key={f}
                        className={`ch15-factor ${
                          i < activeFactor
                            ? "ch15-factor--done"
                            : i === activeFactor
                            ? "ch15-factor--active"
                            : ""
                        }`}
                      >
                        <span className="ch15-factor-icon">
                          {i < activeFactor ? (
                            <CheckCircle2 size={16} />
                          ) : (
                            <span className="ch15-factor-dot" />
                          )}
                        </span>
                        <span className="ch15-factor-text">{f}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="ch15-result" key={mode}>
                  <span className="ch15-result-label">Recommended for you</span>

                  <div className="ch15-result-course">
                    <span className="ch15-result-course-name">{result.course}</span>
                    <span className="ch15-result-course-career">
                      <TrendingUp size={13} />
                      Career path: {result.career}
                    </span>
                  </div>

                  <div className="ch15-result-grid">
                    <div className="ch15-result-cell">
                      <span className="ch15-result-cell-lbl">Study options</span>
                      <span className="ch15-result-cell-val">{result.options}</span>
                    </div>
                    <div className="ch15-result-cell">
                      <span className="ch15-result-cell-lbl">Duration</span>
                      <span className="ch15-result-cell-val">{result.duration}</span>
                    </div>
                    <div className="ch15-result-cell ch15-result-cell--full">
                      <span className="ch15-result-cell-lbl">Demand level</span>
                      <span className="ch15-result-demand">
                        <span className="ch15-result-demand-dot" />
                        {result.demand}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/ai-match" className="ch15-widget-cta">
              <span>Get my full match</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        .ch15-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 130px 24px 90px;
          overflow: hidden;
          background: var(--bg-section);
          font-family: var(--font-main);
          box-sizing: border-box;
          isolation: isolate;
        }

        .ch15-photo {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.6;
          z-index: 0;
        }

        .ch15-wash {
          position: absolute;
          inset: 0;
          background:
          radial-gradient(ellipse 65% 55% at 88% 12%, rgba(49, 185, 120, 0.14) 0%, transparent 60%),
          radial-gradient(ellipse 55% 65% at 4% 96%, rgba(109, 83, 163, 0.18) 0%, transparent 65%),
          linear-gradient(180deg, rgba(240, 244, 245, 0.35) 0%, rgba(240, 244, 245, 0.65) 100%);
          z-index: 1;
        }

        .ch15-shell {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 64px;
          align-items: center;
        }

        /* ── Left column ── */
        .ch15-left { display: flex; flex-direction: column; }

        .ch15-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 26px;
        }
        .ch15-bc-link {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--text-light);
          text-decoration: none;
          text-transform: uppercase;
          transition: var(--transition);
        }
        .ch15-bc-link:hover { color: var(--primary); }
        .ch15-bc-slash { color: var(--border); font-size: 0.78rem; }
        .ch15-bc-active {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--primary-dark);
        }

        .ch15-headline {
          margin: 0 0 20px;
          font-size: clamp(2.1rem, 4vw, 3.3rem);
          line-height: 1.14;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--primary-dark);
        }
        .ch15-hl-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ch15-sub {
          font-size: clamp(0.92rem, 1.3vw, 1.04rem);
          color: var(--text-medium);
          line-height: 1.75;
          max-width: 480px;
          margin: 0 0 32px;
          font-weight: 400;
        }

        .ch15-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ch15-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary-dark);
          color: var(--white);
          padding: 16px 32px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          letter-spacing: 0.01em;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }
        .ch15-btn-primary:hover {
          transform: translateY(-3px);
          background: var(--primary);
          box-shadow: var(--shadow-lg);
        }
        .ch15-btn-arrow { transition: transform 0.25s ease; }
        .ch15-btn-primary:hover .ch15-btn-arrow { transform: translateX(3px); }

        .ch15-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.7);
          color: var(--primary-dark);
          padding: 15px 28px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
          letter-spacing: 0.01em;
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .ch15-btn-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
        }

        /* ── Right column: AI Course Match widget ── */
        .ch15-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ch15-widget {
          position: relative;
          width: 100%;
          max-width: 440px;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .ch15-widget-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(49,185,120,0.22) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .ch15-widget-head {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 26px 0;
        }
        .ch15-widget-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--primary-dark);
        }
        .ch15-widget-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: var(--radius-sm);
          background: var(--gradient-primary);
          color: var(--white);
          flex-shrink: 0;
          animation: ch15SparkPulse 2.2s ease-in-out infinite;
        }
        .ch15-widget-tag {
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-green);
          background: rgba(49,185,120,0.14);
          padding: 4px 10px;
          border-radius: 100px;
        }

        @keyframes ch15SparkPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(49,185,120,0.35); }
          50% { box-shadow: 0 0 0 6px rgba(49,185,120,0); }
        }

        /* ── Mode toggle ── */
        .ch15-mode-toggle {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 8px;
          padding: 18px 26px 0;
        }
        .ch15-mode-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-main);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-medium);
          background: rgba(255,255,255,0.5);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 10px 14px;
          cursor: pointer;
          transition: var(--transition);
        }
        .ch15-mode-btn:hover { color: var(--primary); border-color: var(--primary); }
        .ch15-mode-btn--active {
          background: var(--primary-dark);
          border-color: var(--primary-dark);
          color: var(--text-white);
          box-shadow: var(--shadow-sm);
        }

        .ch15-widget-body {
          position: relative;
          z-index: 1;
          padding: 24px 26px 28px;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ── Scanning state ── */
        .ch15-scan-label {
          margin: 0 0 18px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-light);
        }
        .ch15-factor-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }
        .ch15-factor {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-light);
          transition: var(--transition);
        }
        .ch15-factor--active { color: var(--primary-dark); }
        .ch15-factor--done { color: var(--text-medium); }
        .ch15-factor-icon {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ch15-factor--done .ch15-factor-icon { color: var(--accent-green); }
        .ch15-factor-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--border);
        }
        .ch15-factor--active .ch15-factor-dot {
          background: var(--primary);
          animation: ch15DotPulse 0.9s ease-in-out infinite;
        }
        @keyframes ch15DotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.4; }
        }

        /* ── Result state ── */
        .ch15-result {
          display: flex;
          flex-direction: column;
          gap: 16px;
          animation: ch15FadeIn 0.45s ease;
        }
        @keyframes ch15FadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ch15-result-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-green);
        }
        .ch15-result-course {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ch15-result-course-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--primary-dark);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .ch15-result-course-career {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--primary);
        }

        .ch15-result-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .ch15-result-cell {
          background: rgba(255,255,255,0.7);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ch15-result-cell--full {
          grid-column: 1 / -1;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .ch15-result-cell-lbl {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--text-light);
        }
        .ch15-result-cell-val {
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--primary-dark);
        }
        .ch15-result-demand {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.86rem;
          font-weight: 700;
          color: var(--accent-green);
        }
        .ch15-result-demand-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-green);
        }

        /* ── CTA ── */
        .ch15-widget-cta {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--gradient-primary);
          color: var(--white);
          font-weight: 700;
          font-size: 0.9rem;
          padding: 17px 20px;
          text-decoration: none;
          transition: var(--transition);
        }
        .ch15-widget-cta:hover { filter: brightness(1.08); }

        @media (max-width: 980px) {
          .ch15-shell {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .ch15-right { order: -1; }
          .ch15-widget { max-width: 100%; }
        }

        @media (max-width: 600px) {
          .ch15-root { padding: 100px 20px 70px; }
          .ch15-actions { flex-direction: column; align-items: stretch; }
          .ch15-btn-primary, .ch15-btn-secondary { justify-content: center; }
          .ch15-widget-head, .ch15-mode-toggle { padding-left: 20px; padding-right: 20px; }
          .ch15-widget-body { padding: 20px 20px 24px; }
          .ch15-widget-cta { padding: 15px 20px; }
          .ch15-result-grid { grid-template-columns: 1fr; }
          .ch15-result-cell--full { flex-direction: row; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ch15-widget-icon-wrap, .ch15-factor--active .ch15-factor-dot { animation: none; }
        }
      `}</style>
    </section>
  );
}