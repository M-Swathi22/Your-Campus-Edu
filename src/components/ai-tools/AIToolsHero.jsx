import React from "react";
import { Sparkles, ArrowRight, Brain, Wallet, Search, UserCheck } from "lucide-react";
import heroBg from "../../assets/images/ai-tool.png";

function AIToolsHero() {
  const aiTools = [
    {
      icon: <Brain size={20} style={{ color: "var(--extra-purple)" }} />,
      bg: "rgba(142, 86, 255, 0.12)",
      title: "AI Match",
      description: "Personalized academic pathway guidance",
    },
    {
      icon: <UserCheck size={20} style={{ color: "var(--accent-green)" }} />,
      bg: "rgba(49, 185, 120, 0.12)",
      title: "Eligibility Checker",
      description: "Instant verification of institutional match",
    },
    {
      icon: <Wallet size={20} style={{ color: "var(--extra-orange)" }} />,
      bg: "rgba(248, 148, 31, 0.12)",
      title: "Budget Calculator",
      description: "Intelligent cost forecasting & scholarships",
    },
    {
      icon: <Search size={20} style={{ color: "var(--accent-blue)" }} />,
      bg: "rgba(57, 192, 250, 0.12)",
      title: "Compare Colleges",
      description: "Side-by-side matrices of premium courses",
    },
    {
      icon: <Sparkles size={20} style={{ color: "var(--accent-pink)" }} />,
      bg: "rgba(249, 37, 150, 0.12)",
      title: "Country Fit Quiz",
      description: "Discover your ideal global study destination",
    },
  ];

  // Tripled for a seamless infinite vertical loop
  const infiniteToolsList = [...aiTools, ...aiTools, ...aiTools];

  return (
    <section className="ath-root">

      {/* Background image + overlay wash (matches CoursesHero) */}
      <div className="ath-photo" style={{ backgroundImage: `url(${heroBg})` }} role="presentation" />
      <div className="ath-wash" />

      <div className="ath-shell">

        {/* ── Left Content ── */}
        <div className="ath-left">
          <div className="ath-badge">
            <Sparkles size={14} className="ath-badge-icon" />
            <span>AI-Powered Student Guidance</span>
          </div>

          <h1 className="ath-headline">
            Find Your Perfect
            <span className="ath-hl-accent">Course, College &amp; Country</span>
            with Intelligence
          </h1>

          <p className="ath-sub">
            Get personalized recommendations, check your eligibility,
            calculate your budget, compare colleges, and discover your
            ideal study destination — all powered by premium AI tools.
          </p>

          <div className="ath-actions">
            <a href="#ai-tools" className="ath-btn-primary">
              <span>Explore AI Tools</span>
              <ArrowRight size={18} className="ath-btn-arrow" />
            </a>
            <a href="#ai-match" className="ath-btn-secondary">
              <span>Start AI Match</span>
            </a>
          </div>

          <div className="ath-stats">
            <div className="ath-stat">
              <h3>10K+</h3>
              <p>Students Guided</p>
            </div>
            <div className="ath-stat">
              <h3>95%</h3>
              <p>Match Accuracy</p>
            </div>
            <div className="ath-stat">
              <h3>50+</h3>
              <p>Destinations</p>
            </div>
          </div>
        </div>

        {/* ── Right: Running AI Tools Track ── */}
        <div className="ath-right">
          <div className="ath-track">

            <div className="ath-track-head">
              <div className="ath-track-head-left">
                <span className="ath-live-dot" />
                <span>AI Tools — Live</span>
              </div>
              <span className="ath-track-head-right">Continuous Sync</span>
            </div>

            <div className="ath-track-window">
              <div className="ath-track-belt">
                {infiniteToolsList.map((tool, index) => (
                  <div className="ath-tool-card" key={index}>
                    <div className="ath-tool-icon" style={{ background: tool.bg }}>
                      {tool.icon}
                    </div>
                    <div className="ath-tool-text">
                      <h4>{tool.title}</h4>
                      <p>{tool.description}</p>
                    </div>
                    <span className="ath-tool-status">Ready</span>
                  </div>
                ))}
              </div>
              <div className="ath-fade ath-fade-top" />
              <div className="ath-fade ath-fade-bottom" />
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .ath-root {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 130px 24px 90px;
          overflow: hidden;
          background: var(--bg-section);
          font-family: var(--font-main);
          color: var(--text-dark);
          box-sizing: border-box;
          isolation: isolate;
        }

        .ath-photo {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 1;
  z-index: 0;
}

        .ath-wash {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      135deg,
      rgba(248,245,255,0.65) 0%,
      rgba(243,238,255,0.55) 50%,
      rgba(255,255,255,0.45) 100%
    );
  z-index: 1;
}

        .ath-shell {
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
        .ath-left {
          display: flex;
          flex-direction: column;
          animation: athFadeUp 0.7s ease both;
        }

        .ath-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          padding: 8px 18px;
          margin-bottom: 24px;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary-dark);
        }
        .ath-badge-icon { color: var(--secondary); }

        .ath-headline {
          margin: 0 0 20px;
          font-size: clamp(2.1rem, 4vw, 3.4rem);
          line-height: 1.18;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--primary-dark);
          display: flex;
          flex-direction: column;
        }
        .ath-hl-accent {
          margin: 4px 0;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ath-sub {
          font-size: clamp(0.92rem, 1.3vw, 1.04rem);
          color: var(--text-medium);
          line-height: 1.75;
          max-width: 480px;
          margin: 0 0 32px;
          font-weight: 400;
        }

        .ath-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ath-btn-primary {
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
        .ath-btn-primary:hover {
          transform: translateY(-3px);
          background: var(--primary);
          box-shadow: var(--shadow-lg);
        }
        .ath-btn-arrow { transition: transform 0.25s ease; }
        .ath-btn-primary:hover .ath-btn-arrow { transform: translateX(3px); }

        .ath-btn-secondary {
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
        .ath-btn-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
        }

        .ath-stats {
          display: grid;
          grid-template-columns: repeat(3, auto);
          gap: 40px;
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid var(--border);
        }
        .ath-stat h3 {
          margin: 0;
          font-size: 1.9rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: var(--primary-dark);
        }
        .ath-stat p {
          margin: 4px 0 0;
          font-size: 0.85rem;
          color: var(--text-light);
        }

        /* ── Right: Running Track ── */
        .ath-right {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: athFadeUp 0.7s ease 0.15s both;
        }

        .ath-track {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 520px;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.6);
         background: rgba(255,255,255,0.82);
  border: 1px solid rgba(255,255,255,0.9);
  box-shadow:
    0 20px 60px rgba(36,20,79,0.18),
    0 8px 24px rgba(36,20,79,0.08);
          box-shadow: var(--shadow-lg);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .ath-track-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border);
          flex-shrink: 0;
        }
        .ath-track-head-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-light);
        }
        .ath-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-green);
          animation: athPulse 1.6s ease-in-out infinite;
          flex-shrink: 0;
        }
        .ath-track-head-right {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--text-light);
          background: rgba(255,255,255,0.6);
          border: 1px solid var(--border);
          padding: 4px 10px;
          border-radius: 100px;
        }

        .ath-track-window {
          position: relative;
          flex: 1;
          overflow: hidden;
          padding: 0 16px;
        }

        .ath-track-belt {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 16px 0;
          animation: athRunSeamless 26s linear infinite;
          will-change: transform;
        }
        .ath-track-window:hover .ath-track-belt {
          animation-play-state: paused;
        }

        .ath-tool-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.7);
          transition: var(--transition);
        }
        .ath-tool-card:hover {
          border-color: var(--primary);
          transform: translateX(2px);
          box-shadow: var(--shadow-sm);
        }

        .ath-tool-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
        }

        .ath-tool-text { flex: 1; min-width: 0; }
        .ath-tool-text h4 {
          margin: 0;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--primary-dark);
          letter-spacing: -0.01em;
        }
        .ath-tool-text p {
          margin: 4px 0 0;
          font-size: 0.78rem;
          color: var(--text-light);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ath-tool-status {
          flex-shrink: 0;
          font-size: 0.66rem;
          font-weight: 600;
          font-family: monospace;
          letter-spacing: 0.04em;
          color: var(--text-light);
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.5);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .ath-fade {
          position: absolute;
          left: 0;
          right: 0;
          height: 56px;
          pointer-events: none;
          z-index: 2;
        }
        .ath-fade-top {
          top: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.75), transparent);
        }
        .ath-fade-bottom {
          bottom: 0;
          background: linear-gradient(to top, rgba(255,255,255,0.75), transparent);
        }

        @keyframes athRunSeamless {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.3333%); }
        }
        @keyframes athPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.4); }
        }
        @keyframes athFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 980px) {
          .ath-shell {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .ath-right { order: -1; }
          .ath-track { max-width: 100%; height: 440px; }
        }

        @media (max-width: 600px) {
          .ath-root { padding: 100px 20px 70px; }
          .ath-actions { flex-direction: column; align-items: stretch; }
          .ath-btn-primary, .ath-btn-secondary { justify-content: center; }
          .ath-stats { gap: 24px; margin-top: 40px; }
          .ath-stat h3 { font-size: 1.6rem; }
          .ath-track { height: 380px; }
          .ath-track-head { padding: 16px 18px; }
          .ath-tool-card { padding: 13px; gap: 12px; }
          .ath-tool-icon { width: 38px; height: 38px; }
          .ath-tool-status { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ath-track-belt, .ath-live-dot, .ath-left, .ath-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

export default AIToolsHero;