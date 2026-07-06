import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero.avif";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const PROFILE_CHIPS = ["B.Tech · CS", "IELTS 7.5", "Budget ₹25L"];

const MATCHES = [
  { university: "University of Toronto", flag: "🇨🇦", program: "MS Computer Science", score: 96 },
  { university: "University of Melbourne", flag: "🇦🇺", program: "MS Data Science", score: 91 },
  { university: "TU Munich", flag: "🇩🇪", program: "MS Computer Science", score: 88 },
];

const HEADLINE = "The AI That Actually Knows Where You'll Get In.";

/* ─────────────────────────────────────────────
   KINETIC WORD-REVEAL HEADLINE
───────────────────────────────────────────── */

function KineticTitle({ text }) {
  const words = text.split(" ");
  return (
    <h1 className="hs__title">
      {words.map((word, i) => (
        <span className="hs__word-mask" key={i}>
          <motion.span
            className="hs__word"
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, delay: 0.15 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/* ─────────────────────────────────────────────
   SPLIT-FLAP DIGIT REEL — used for confidence scores
───────────────────────────────────────────── */

function DigitReel({ char, delay }) {
  if (!/[0-9]/.test(char)) {
    return <span className="reel reel--static">{char}</span>;
  }
  const target = parseInt(char, 10);
  return (
    <span className="reel">
      <motion.span
        className="reel__col"
        initial={{ y: "0%" }}
        animate={{ y: `-${target * 10}%` }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {Array.from({ length: 10 }, (_, n) => (
          <span className="reel__digit" key={n}>{n}</span>
        ))}
      </motion.span>
    </span>
  );
}

function ScoreValue({ value, delay }) {
  return (
    <span className="match__score-value">
      {String(value).split("").map((ch, i) => (
        <DigitReel key={i} char={ch} delay={delay + i * 0.05} />
      ))}
      %
    </span>
  );
}

/* ─────────────────────────────────────────────
   TILTING MATCH ENGINE PANEL
───────────────────────────────────────────── */

function MatchPanel() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [6, -6]);
  const rotateY = useTransform(x, [-60, 60], [-6, 6]);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="panel"
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="panel__head">
        <div className="panel__dots">
          <span style={{ background: "var(--danger)" }} />
          <span style={{ background: "var(--warning)" }} />
          <span style={{ background: "var(--accent-green)" }} />
        </div>
        <span className="panel__title">AI Match Engine</span>
        <span className="panel__live">
          <span className="panel__live-dot" />
          Live
        </span>
      </div>

      <div className="panel__body">
        <div className="panel__row-label">Your Profile</div>
        <div className="panel__chips">
          {PROFILE_CHIPS.map((chip, i) => (
            <motion.span
              className="panel__chip"
              key={chip}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
            >
              {chip}
            </motion.span>
          ))}
        </div>

        <div className="panel__scan">
          <motion.div
            className="panel__scan-line"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "260%", opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.1, delay: 0.95, ease: "easeInOut" }}
          />
        </div>

        <div className="panel__row-label">Ranked Matches</div>
        <div className="panel__matches">
          {MATCHES.map((m, i) => (
            <motion.div
              className="match"
              key={m.university}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="match__info">
                <span className="match__flag">{m.flag}</span>
                <div>
                  <div className="match__uni">{m.university}</div>
                  <div className="match__program">{m.program}</div>
                </div>
              </div>

              <div className="match__score">
                <ScoreValue value={m.score} delay={1.7 + i * 0.15} />
                <div className="match__bar">
                  <motion.div
                    className="match__bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${m.score}%` }}
                    transition={{ duration: 0.8, delay: 1.65 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export default function HeroSection() {
  return (
    <>
      <style>{`

        .hs {
          position: relative;
          overflow: hidden;
          background: var(--bg-dark);
          font-family: var(--font-main);
          color: var(--text-white);
          padding: 128px 0 0;
        }

        /* ── background texture ── */

        .hs__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hs__bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.22;
          mix-blend-mode: luminosity;
          filter: saturate(0.6);
        }

        .hs__bg-tint {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg,
              color-mix(in srgb, var(--bg-dark) 88%, transparent) 0%,
              color-mix(in srgb, var(--bg-dark) 60%, transparent) 45%,
              var(--bg-dark) 100%
            ),
            linear-gradient(100deg,
              color-mix(in srgb, var(--primary-dark) 70%, transparent) 0%,
              transparent 55%
            );
        }

        .hs__grain {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.05;
          mix-blend-mode: overlay;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* ── layout ── */

        .hs__wrap {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }

        .hs__left {
          max-width: 560px;
          padding-bottom: 70px;
        }

        /* ── eyebrow ── */

        .hs__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px 7px 10px;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--text-white) 14%, transparent);
          background: color-mix(in srgb, var(--text-white) 5%, transparent);
          margin-bottom: 28px;
        }

        .hs__eyebrow svg { color: var(--accent-green); }

        .hs__eyebrow span {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--text-white) 85%, transparent);
        }

        /* ── kinetic headline ── */

        .hs__title {
          margin: 0;
          font-size: clamp(36px, 4.4vw, 58px);
          line-height: 1.08;
          letter-spacing: -1.8px;
          font-weight: 800;
        }

        .hs__word-mask {
          display: inline-block;
          overflow: hidden;
          vertical-align: top;
          margin-right: 0.26em;
        }

        .hs__word:last-of-type { }

        .hs__title .hs__word-mask:nth-of-type(2) .hs__word,
        .hs__title .hs__word-mask:nth-of-type(3) .hs__word {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hs__desc {
          margin-top: 24px;
          font-size: 16px;
          line-height: 1.85;
          color: color-mix(in srgb, var(--text-white) 68%, transparent);
          max-width: 470px;
        }

        /* ── actions ── */

        .hs__actions {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 36px;
          flex-wrap: wrap;
        }

        .hs__btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 26px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          color: var(--text-white);
          background: var(--gradient-primary);
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }

        .hs__btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }

        .hs__link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-white);
          border-bottom: 1px solid color-mix(in srgb, var(--text-white) 30%, transparent);
          padding-bottom: 3px;
          transition: var(--transition);
        }

        .hs__link:hover {
          color: var(--accent-green);
          border-color: var(--accent-green);
          gap: 12px;
        }

        /* ── marquee ── */

        .hs__marquee-wrap {
          position: relative;
          z-index: 2;
          border-top: 1px solid color-mix(in srgb, var(--text-white) 10%, transparent);
          padding: 22px 0;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }

        .hs__marquee {
          display: flex;
          width: max-content;
          animation: hsMarquee 26s linear infinite;
        }

        .hs__marquee span {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.4px;
          color: color-mix(in srgb, var(--text-white) 45%, transparent);
          white-space: nowrap;
          padding: 0 22px;
          border-right: 1px solid color-mix(in srgb, var(--text-white) 12%, transparent);
        }

        @keyframes hsMarquee {
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hs__marquee { animation: none; }
        }

        /* ── match engine panel ── */

        .panel {
          position: relative;
          border-radius: var(--radius-xl);
          border: 1px solid color-mix(in srgb, var(--text-white) 12%, transparent);
          background: color-mix(in srgb, var(--bg-dark) 40%, transparent);
          backdrop-filter: blur(22px);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .panel__head {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-bottom: 1px solid color-mix(in srgb, var(--text-white) 10%, transparent);
        }

        .panel__dots {
          display: flex;
          gap: 6px;
        }

        .panel__dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0.85;
        }

        .panel__title {
          font-size: 12.5px;
          font-weight: 700;
          color: color-mix(in srgb, var(--text-white) 82%, transparent);
        }

        .panel__live {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--accent-green);
        }

        .panel__live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          position: relative;
        }

        .panel__live-dot::after {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--accent-green) 35%, transparent);
          animation: hsPulse 1.8s infinite;
        }

        @keyframes hsPulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        .panel__body {
          padding: 22px 20px 20px;
        }

        .panel__row-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--text-white) 42%, transparent);
          margin-bottom: 10px;
        }

        .panel__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .panel__chip {
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 11.5px;
          font-weight: 600;
          padding: 7px 12px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--primary) 22%, transparent);
          border: 1px solid color-mix(in srgb, var(--primary) 40%, transparent);
          color: color-mix(in srgb, var(--text-white) 92%, transparent);
        }

        .panel__scan {
          position: relative;
          height: 1px;
          margin: 20px 0;
          background: color-mix(in srgb, var(--text-white) 8%, transparent);
          overflow: visible;
        }

        .panel__scan-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 44px;
          top: -20px;
          background: linear-gradient(180deg,
            transparent,
            color-mix(in srgb, var(--accent-green) 45%, transparent),
            transparent
          );
        }

        .panel__matches {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .match {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          background: color-mix(in srgb, var(--text-white) 4%, transparent);
          border: 1px solid color-mix(in srgb, var(--text-white) 7%, transparent);
        }

        .match__info {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .match__flag {
          font-size: 17px;
          flex-shrink: 0;
        }

        .match__uni {
          font-size: 12.5px;
          font-weight: 700;
          color: color-mix(in srgb, var(--text-white) 92%, transparent);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .match__program {
          font-size: 11px;
          color: color-mix(in srgb, var(--text-white) 50%, transparent);
          margin-top: 2px;
        }

        .match__score {
          flex-shrink: 0;
          width: 74px;
          text-align: right;
        }

        .match__score-value {
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 15px;
          font-weight: 800;
          color: var(--accent-green);
          display: inline-flex;
        }

        .reel {
          display: inline-block;
          width: 0.6em;
          height: 1.05em;
          overflow: hidden;
          position: relative;
          vertical-align: top;
        }

        .reel--static { width: auto; }
        .reel__col { display: flex; flex-direction: column; }
        .reel__digit {
          height: 1.05em;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .match__bar {
          margin-top: 6px;
          height: 3px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--text-white) 10%, transparent);
          overflow: hidden;
        }

        .match__bar-fill {
          height: 100%;
          border-radius: 999px;
          background: var(--gradient-primary);
        }

        /* ── responsive ── */

        @media (max-width: 980px) {
          .hs__wrap {
            grid-template-columns: 1fr;
            padding: 0 24px;
          }
          .hs__left { max-width: 100%; padding-bottom: 40px; }
          .panel { max-width: 460px; margin: 0 auto 56px; }
        }

        @media (max-width: 480px) {
          .hs { padding: 108px 0 0; }
          .hs__actions { flex-direction: column; align-items: flex-start; gap: 18px; }
          .match__program { display: none; }
        }

      `}</style>

      <section className="hs">
        <div className="hs__bg">
          <img src={heroImg} alt="" />
        </div>
        <div className="hs__bg-tint" />
        <div className="hs__grain" />

        <div className="hs__wrap">
          <div className="hs__left">
            <motion.div
              className="hs__eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={12} />
              <span>AI Admissions Engine</span>
            </motion.div>

            <KineticTitle text={HEADLINE} />

            <motion.p
              className="hs__desc"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Upload your profile once. Get ranked, confidence-scored matches
              across 500+ universities in six countries — with scholarships
              and visa steps mapped out automatically.
            </motion.p>

            <motion.div
              className="hs__actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <Link to="/contact" className="hs__btn-primary">
                <span>Get My Matches</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/about" className="hs__link">
                <span>Watch it work</span>
                <ArrowRight size={13} />
              </Link>
            </motion.div>
          </div>

          <MatchPanel />
        </div>

        <div className="hs__marquee-wrap">
          <div className="hs__marquee">
            {[...Array(2)].map((_, set) => (
              <div className="hs__marquee" key={set} style={{ animation: "none" }}>
                <span><MapPin size={11} />500+ Partner Universities</span>
                <span>🇬🇧 United Kingdom</span>
                <span>🇨🇦 Canada</span>
                <span>🇦🇺 Australia</span>
                <span>🇺🇸 United States</span>
                <span>🇩🇪 Germany</span>
                <span>🇮🇪 Ireland</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


