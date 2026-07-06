import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MapPin,
  Globe2,
  TrendingUp,
  GraduationCap,
  BookOpen,
  Compass,
} from "lucide-react";
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
    options: "Bangalore · Pune · Hyderabad",
    duration: "4 Years",
    demand: "High",
    match: 94,
  },
  abroad: {
    course: "Computer Science & AI",
    career: "AI Engineer",
    options: "Canada · Germany · Australia",
    duration: "4 Years",
    demand: "High",
    match: 91,
  },
};

const STATS = [
  { icon: GraduationCap, value: "500+", label: "Courses" },
  { icon: BookOpen, value: "12+", label: "Fields" },
  { icon: Compass, value: "40+", label: "Countries" },
];

export default function CoursesHero() {
  const [mode, setMode] = useState("abroad");
  const [activeFactor, setActiveFactor] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const widgetRef = useRef(null);

  useEffect(() => {
    setActiveFactor(0);
    setShowResult(false);
  }, [mode]);

  useEffect(() => {
    if (showResult) return;
    if (activeFactor < FACTORS.length - 1) {
      const t = setTimeout(() => setActiveFactor((i) => i + 1), 520);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowResult(true), 520);
    return () => clearTimeout(t);
  }, [activeFactor, showResult]);

  const handleMouseMove = (e) => {
    if (!widgetRef.current) return;
    const rect = widgetRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const result = RESULTS[mode];

  return (
    <section className="ch-root">
      <div className="ch-photo" style={{ backgroundImage: `url(${heroBg})` }} role="presentation" />
      <div className="ch-wash" />

      <div className="ch-decor ch-decor--1" aria-hidden="true" />
      <div className="ch-decor ch-decor--2" aria-hidden="true" />
      <div className="ch-decor ch-decor--3" aria-hidden="true" />

      <div className="ch-shell">

        {/* ── LEFT ── */}
        <div className="ch-left">
          <nav className="ch-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="ch-bc-link">Home</Link>
            <span className="ch-bc-slash" aria-hidden="true">/</span>
            <span className="ch-bc-active">Courses</span>
          </nav>

          <div className="ch-eyebrow">
            <span className="ch-eyebrow-dot" />
            <span>AI-Powered Course Discovery</span>
          </div>

          <h1 className="ch-headline">
            Find the course
            <br />
            <span className="ch-hl-outline">that shapes</span>
            <br />
            <span className="ch-hl-accent">your future.</span>
          </h1>

          <p className="ch-sub">
            From engineering to medicine, management to arts — explore every path
            available in India and abroad. Our AI matches you to the best-fit course
            based on your profile, goals, and budget.
          </p>

          {/* Stats — grid layout so all 3 always visible */}
          <div className="ch-stats">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div className="ch-stat" key={label}>
                <span className="ch-stat-icon-wrap">
                  <Icon size={16} aria-hidden="true" />
                </span>
                <span className="ch-stat-value">{value}</span>
                <span className="ch-stat-label">{label}</span>
              </div>
            ))}
          </div>

          <div className="ch-actions">
            <a href="#course-finder" className="ch-btn-primary">
              <span>Explore Courses</span>
              <ArrowRight size={16} className="ch-btn-arrow" aria-hidden="true" />
            </a>
            <Link to="/ai-match" className="ch-btn-ghost">
              <Sparkles size={15} aria-hidden="true" />
              <span>AI Course Match</span>
            </Link>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="ch-right">
          <div
            className="ch-widget"
            ref={widgetRef}
            onMouseMove={handleMouseMove}
            style={{ "--mx": `${mousePos.x}%`, "--my": `${mousePos.y}%` }}
          >
            <div className="ch-widget-spotlight" aria-hidden="true" />
            <div className="ch-widget-stripe" aria-hidden="true" />

            <div className="ch-widget-head">
              <div className="ch-widget-brand">
                <span className="ch-widget-icon">
                  <Sparkles size={14} aria-hidden="true" />
                </span>
                <span className="ch-widget-name">AI Course Match</span>
              </div>
              <div className="ch-widget-meta">
                <span className="ch-widget-beta">Beta</span>
                <span className="ch-widget-live">
                  <span className="ch-live-dot" />
                  Live
                </span>
              </div>
            </div>

            <div className="ch-toggle-wrap">
              <div className="ch-toggle">
                <button
                  type="button"
                  className={`ch-toggle-btn ${mode === "domestic" ? "ch-toggle-btn--on" : ""}`}
                  onClick={() => setMode("domestic")}
                >
                  <MapPin size={13} aria-hidden="true" />
                  <span>Study in India</span>
                </button>
                <button
                  type="button"
                  className={`ch-toggle-btn ${mode === "abroad" ? "ch-toggle-btn--on" : ""}`}
                  onClick={() => setMode("abroad")}
                >
                  <Globe2 size={13} aria-hidden="true" />
                  <span>Study Abroad</span>
                </button>
              </div>
            </div>

            <div className="ch-widget-body">
              {!showResult ? (
                <div className="ch-scan">
                  <p className="ch-scan-label">Analysing your profile…</p>
                  <ul className="ch-factors" aria-live="polite">
                    {FACTORS.map((f, i) => (
                      <li
                        key={f}
                        className={`ch-factor ${
                          i < activeFactor
                            ? "ch-factor--done"
                            : i === activeFactor
                            ? "ch-factor--active"
                            : ""
                        }`}
                      >
                        <span className="ch-factor-icon" aria-hidden="true">
                          {i < activeFactor ? (
                            <CheckCircle2 size={15} />
                          ) : (
                            <span className="ch-factor-dot" />
                          )}
                        </span>
                        <span className="ch-factor-text">{f}</span>
                        {i === activeFactor && (
                          <span className="ch-factor-bar" aria-hidden="true">
                            <span className="ch-factor-bar-fill" />
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="ch-result" key={mode}>
                  <div className="ch-result-top">
                    <span className="ch-result-tag">Best match</span>
                    <div className="ch-match-ring">
                      <svg viewBox="0 0 44 44" className="ch-ring-svg" aria-hidden="true">
                        <circle cx="22" cy="22" r="18" className="ch-ring-track" />
                        <circle
                          cx="22" cy="22" r="18"
                          className="ch-ring-fill"
                          strokeDasharray={`${(result.match / 100) * 113} 113`}
                        />
                      </svg>
                      <span className="ch-ring-val">{result.match}%</span>
                    </div>
                  </div>

                  <div className="ch-result-course">
                    <h3 className="ch-result-name">{result.course}</h3>
                    <span className="ch-result-career">
                      <TrendingUp size={12} aria-hidden="true" />
                      {result.career}
                    </span>
                  </div>

                  <div className="ch-result-pills">
                    <span className="ch-pill">
                      <MapPin size={11} aria-hidden="true" />
                      {result.options}
                    </span>
                  </div>

                  <div className="ch-result-grid">
                    <div className="ch-result-cell">
                      <span className="ch-result-lbl">Duration</span>
                      <span className="ch-result-val">{result.duration}</span>
                    </div>
                    <div className="ch-result-cell">
                      <span className="ch-result-lbl">Demand</span>
                      <span className="ch-result-val ch-result-val--green">
                        <span className="ch-demand-dot" aria-hidden="true" />
                        {result.demand}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/ai-match" className="ch-widget-cta">
              <span>Get my personalised match</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <p className="ch-widget-note">Powered by AI · Updated daily</p>
        </div>

      </div>

      <style>{`
        .ch-root {
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

        .ch-photo {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center 30%;
          opacity: 0.55;
          z-index: 0;
        }
        .ch-wash {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 90% 10%, rgba(49,185,120,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 5% 95%, rgba(109,83,163,0.16) 0%, transparent 65%),
            linear-gradient(160deg, rgba(240,244,245,0.28) 0%, rgba(234,240,242,0.72) 55%, rgba(240,244,245,0.90) 100%);
          z-index: 1;
        }

        .ch-decor {
          position: absolute;
          border-radius: 50%;
          opacity: 0.45;
          z-index: 2;
          pointer-events: none;
        }
        .ch-decor--1 {
          width: 340px; height: 340px;
          top: -80px; right: -80px;
          background: radial-gradient(circle, rgba(49,185,120,0.18) 0%, transparent 70%);
          animation: chFloat 8s ease-in-out infinite;
        }
        .ch-decor--2 {
          width: 240px; height: 240px;
          bottom: 40px; left: -60px;
          background: radial-gradient(circle, rgba(109,83,163,0.14) 0%, transparent 70%);
          animation: chFloat 10s ease-in-out infinite reverse;
        }
        .ch-decor--3 {
          width: 120px; height: 120px;
          top: 45%; right: 42%;
          background: radial-gradient(circle, rgba(249,37,150,0.08) 0%, transparent 70%);
          animation: chFloat 7s ease-in-out infinite 2s;
        }
        @keyframes chFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }

        .ch-shell {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 72px;
          align-items: center;
        }

        /* ── Left ── */
        .ch-left {
          display: flex;
          flex-direction: column;
          order: 1;
        }

        .ch-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
        }
        .ch-bc-link {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--text-light);
          text-decoration: none;
          transition: var(--transition);
        }
        .ch-bc-link:hover { color: var(--primary); }
        .ch-bc-slash { color: var(--border); font-size: 0.75rem; }
        .ch-bc-active {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--primary-dark);
        }

        .ch-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-green);
          margin-bottom: 20px;
        }
        .ch-eyebrow-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent-green);
          flex-shrink: 0;
          animation: chPulse 2s ease-in-out infinite;
        }
        @keyframes chPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(49,185,120,0.5); }
          50% { box-shadow: 0 0 0 5px rgba(49,185,120,0); }
        }

        .ch-headline {
          margin: 0 0 22px;
          font-size: clamp(2.4rem, 4.2vw, 3.6rem);
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--primary-dark);
        }
        .ch-hl-outline {
          color: transparent;
          -webkit-text-stroke: 2px var(--primary-dark);
        }
        .ch-hl-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ch-sub {
          font-size: clamp(0.92rem, 1.2vw, 1.02rem);
          color: var(--text-medium);
          line-height: 1.8;
          max-width: 490px;
          margin: 0 0 28px;
          font-weight: 400;
        }

        /* ── Stats: always 3-col grid, never overflow ── */
        .ch-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 32px;
          width: 100%;
        }
        .ch-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.58);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 16px;
          padding: 14px 10px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: var(--shadow-sm);
          text-align: center;
        }
        .ch-stat-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px; height: 32px;
          border-radius: 10px;
          background: var(--primary-light);
          color: var(--primary);
          margin-bottom: 2px;
        }
        .ch-stat-value {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--primary-dark);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .ch-stat-label {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text-light);
        }

        /* ── Actions ── */
        .ch-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .ch-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary-dark);
          color: var(--white);
          padding: 15px 30px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          letter-spacing: 0.01em;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          white-space: nowrap;
        }
        .ch-btn-primary:hover {
          transform: translateY(-3px);
          background: var(--primary);
          box-shadow: var(--shadow-lg);
        }
        .ch-btn-arrow { transition: transform 0.25s ease; }
        .ch-btn-primary:hover .ch-btn-arrow { transform: translateX(3px); }

        .ch-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.65);
          color: var(--primary-dark);
          padding: 14px 26px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          letter-spacing: 0.01em;
          border: 1px solid rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          white-space: nowrap;
        }
        .ch-btn-ghost:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        /* ── Right ── */
        .ch-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          order: 2;
        }

        /* Widget */
        .ch-widget {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: rgba(255,255,255,0.68);
          border: 1px solid rgba(255,255,255,0.75);
          border-radius: 28px;
          box-shadow:
            var(--shadow-lg),
            0 0 0 1px rgba(255,255,255,0.5) inset;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .ch-widget-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background: radial-gradient(
            circle 160px at var(--mx, 50%) var(--my, 30%),
            rgba(49,185,120,0.12) 0%,
            transparent 70%
          );
          transition: background 0.15s ease;
        }
        .ch-widget-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--gradient-primary);
          z-index: 2;
        }

        .ch-widget-head {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 24px 0;
        }
        .ch-widget-brand {
          display: flex;
          align-items: center;
          gap: 9px;
        }
        .ch-widget-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px; height: 28px;
          border-radius: 8px;
          background: var(--gradient-primary);
          color: var(--white);
          flex-shrink: 0;
          animation: chSparkle 2.5s ease-in-out infinite;
        }
        @keyframes chSparkle {
          0%, 100% { box-shadow: 0 0 0 0 rgba(49,185,120,0.4); }
          50% { box-shadow: 0 0 0 5px rgba(49,185,120,0); }
        }
        .ch-widget-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary-dark);
          letter-spacing: -0.01em;
        }
        .ch-widget-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ch-widget-beta {
          font-size: 0.63rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--primary);
          background: var(--primary-light);
          padding: 3px 9px;
          border-radius: 100px;
        }
        .ch-widget-live {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.63rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--accent-green);
        }
        .ch-live-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          animation: chPulse 1.8s ease-in-out infinite;
        }

        .ch-toggle-wrap {
          position: relative;
          z-index: 2;
          padding: 16px 24px 0;
        }
        .ch-toggle {
          display: flex;
          background: rgba(240,244,245,0.7);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 3px;
          gap: 3px;
        }
        .ch-toggle-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: var(--font-main);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-light);
          background: transparent;
          border: none;
          border-radius: 100px;
          padding: 9px 12px;
          cursor: pointer;
          transition: var(--transition);
        }
        .ch-toggle-btn:hover { color: var(--primary-dark); }
        .ch-toggle-btn--on {
          background: var(--white);
          color: var(--primary-dark);
          box-shadow: var(--shadow-sm);
        }

        .ch-widget-body {
          position: relative;
          z-index: 2;
          padding: 22px 24px 26px;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .ch-scan-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-light);
          margin: 0 0 16px;
        }
        .ch-factors {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .ch-factor {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-light);
          transition: var(--transition);
        }
        .ch-factor--active { color: var(--primary-dark); }
        .ch-factor--done { color: var(--text-medium); }
        .ch-factor-icon {
          flex-shrink: 0;
          width: 20px; height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ch-factor--done .ch-factor-icon { color: var(--accent-green); }
        .ch-factor-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--border);
          display: block;
        }
        .ch-factor--active .ch-factor-dot {
          background: var(--primary);
          animation: chDotPulse 0.85s ease-in-out infinite;
        }
        @keyframes chDotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.7); opacity: 0.35; }
        }
        .ch-factor-bar {
          flex: 1;
          height: 2px;
          background: var(--border);
          border-radius: 100px;
          overflow: hidden;
        }
        .ch-factor-bar-fill {
          display: block;
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 100px;
          animation: chBarSlide 0.52s ease forwards;
        }
        @keyframes chBarSlide {
          from { width: 0%; }
          to { width: 100%; }
        }

        .ch-result {
          display: flex;
          flex-direction: column;
          gap: 14px;
          animation: chFadeUp 0.4s ease;
        }
        @keyframes chFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ch-result-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ch-result-tag {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--white);
          background: var(--gradient-primary);
          padding: 4px 12px;
          border-radius: 100px;
        }
        .ch-match-ring {
          position: relative;
          width: 44px; height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ch-ring-svg {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          transform: rotate(-90deg);
        }
        .ch-ring-track {
          fill: none;
          stroke: var(--border);
          stroke-width: 3;
        }
        .ch-ring-fill {
          fill: none;
          stroke: var(--accent-green);
          stroke-width: 3;
          stroke-linecap: round;
          transition: stroke-dasharray 0.8s ease;
        }
        .ch-ring-val {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--primary-dark);
          position: relative;
          z-index: 1;
        }
        .ch-result-course {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .ch-result-name {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--primary-dark);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .ch-result-career {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--primary);
        }
        .ch-result-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ch-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-medium);
          background: rgba(255,255,255,0.7);
          border: 1px solid var(--border);
          padding: 5px 12px;
          border-radius: 100px;
        }
        .ch-result-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .ch-result-cell {
          background: rgba(255,255,255,0.65);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 11px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ch-result-lbl {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-light);
        }
        .ch-result-val {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary-dark);
        }
        .ch-result-val--green {
          color: var(--accent-green);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ch-demand-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent-green);
          flex-shrink: 0;
        }

        .ch-widget-cta {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--gradient-primary);
          color: var(--white);
          font-weight: 700;
          font-size: 0.88rem;
          padding: 16px 20px;
          text-decoration: none;
          transition: var(--transition);
          letter-spacing: 0.01em;
        }
        .ch-widget-cta:hover { filter: brightness(1.09); }
        .ch-widget-cta:hover svg { transform: translateX(3px); }
        .ch-widget-cta svg { transition: transform 0.25s ease; }

        .ch-widget-note {
          margin: 0;
          font-size: 0.72rem;
          color: var(--text-light);
          font-weight: 500;
          text-align: center;
          letter-spacing: 0.02em;
        }

        /* ═══════════════════════════
           TABLET  ≤ 960px
        ═══════════════════════════ */
        @media (max-width: 960px) {
          .ch-shell {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ch-left { order: 1; }
          .ch-right { order: 2; }
          .ch-widget { max-width: 100%; }
          .ch-sub { max-width: 100%; }
        }

        /* ═══════════════════════════
           MOBILE  ≤ 600px
        ═══════════════════════════ */
        @media (max-width: 600px) {
          .ch-root {
            padding: 96px 16px 60px;
          }

          /* Headline */
          .ch-headline {
            font-size: clamp(1.9rem, 8.5vw, 2.5rem);
          }
          .ch-hl-outline {
            -webkit-text-stroke-width: 1.5px;
          }

          /* Body copy */
          .ch-sub {
            font-size: 0.92rem;
            line-height: 1.7;
            margin-bottom: 22px;
          }

          /* Stats: stay 3-col but tighter */
          .ch-stats {
            gap: 8px;
            margin-bottom: 24px;
          }
          .ch-stat {
            padding: 12px 6px;
            border-radius: 14px;
          }
          .ch-stat-icon-wrap {
            width: 28px; height: 28px;
            border-radius: 8px;
          }
          .ch-stat-icon-wrap svg { width: 14px; height: 14px; }
          .ch-stat-value { font-size: 0.95rem; }
          .ch-stat-label { font-size: 0.65rem; }

          /* Buttons: full-width stack */
          .ch-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .ch-btn-primary,
          .ch-btn-ghost {
            justify-content: center;
            width: 100%;
            box-sizing: border-box;
            padding: 15px 20px;
          }

          /* Widget */
          .ch-widget { border-radius: 20px; }
          .ch-widget-head { padding: 16px 16px 0; }
          .ch-widget-name { font-size: 0.82rem; }
          .ch-toggle-wrap { padding: 12px 16px 0; }
          .ch-toggle-btn { font-size: 0.76rem; padding: 8px 10px; }
          .ch-widget-body {
            padding: 16px 16px 20px;
            min-height: 200px;
          }
          .ch-widget-cta {
            padding: 14px 16px;
            font-size: 0.84rem;
          }
          .ch-result-name { font-size: 1.15rem; }
          .ch-pill { font-size: 0.7rem; }
        }

        /* ═══════════════════════════
           VERY SMALL  ≤ 360px
        ═══════════════════════════ */
        @media (max-width: 360px) {
          .ch-headline { font-size: 1.75rem; }
          .ch-stat-label { display: none; }
          .ch-stat-value { font-size: 0.9rem; }
          .ch-widget-meta { gap: 5px; }
          .ch-widget-beta, .ch-widget-live { font-size: 0.58rem; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .ch-widget-icon,
          .ch-eyebrow-dot,
          .ch-live-dot,
          .ch-factor--active .ch-factor-dot,
          .ch-decor { animation: none; }
          .ch-factor-bar-fill { animation: none; width: 100%; }
        }
      `}</style>
    </section>
  );
}