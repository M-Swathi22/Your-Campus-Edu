import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutHeroImg from "../../assets/images/about-hero.png";

const stats = [
  { number: "5000+", label: "Students Guided" },
  { number: "250+", label: "Universities" },
  { number: "15+", label: "Countries" },
  { number: "10+", label: "Years Experience" },
];

const AboutHero = () => {
  return (
    <>
      <style>{`
        .about-hero-wrap {
          position: relative;
          height: 100dvh;
          max-height: 700px;
          min-height: 560px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: var(--font-main);
        }

        /* ── breadcrumb ── */
        .about-bc-link {
          font-family: var(--font-main);
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s ease;
        }
        .about-bc-link:hover { color: #fff; }
        .about-bc-sep {
          font-family: var(--font-main);
          font-size: 13px;
          color: rgba(255,255,255,0.28);
        }
        .about-bc-current {
          font-family: var(--font-main);
          font-size: 13px;
          font-weight: 400;
          color: rgba(255,255,255,0.42);
        }

        /* ── badge ── */
        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: var(--radius-xl);
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.18);
          margin-bottom: 22px;
          font-family: var(--font-main);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
        }
        .about-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #31b978;
          flex-shrink: 0;
        }

        /* ── heading ── */
        .about-h1 {
          font-family: var(--font-main);
          font-size: clamp(2.1rem, 5.5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 20px;
          max-width: 740px;
        }
        .about-h1-green {
          font-family: var(--font-main);
          font-weight: 800;
          color: #31b978;
        }

        /* ── description ── */
        .about-desc {
          font-family: var(--font-main);
          font-size: 15px;
          line-height: 1.85;
          color: rgba(255,255,255,0.72);
          margin: 0 auto;
          max-width: 560px;
          font-weight: 400;
        }

        /* ── stats ── */
        .about-stats-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 700px;
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding-top: 28px;
        }
        .about-stat-item {
          flex: 1 1 150px;
          text-align: center;
          padding: 0 28px;
          border-right: 1px solid rgba(255,255,255,0.12);
        }
        .about-stat-item:last-child {
          border-right: none;
        }
        .about-stat-num {
          font-family: var(--font-main);
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .about-stat-lbl {
          font-family: var(--font-main);
          font-size: 10px;
          font-weight: 700;
          color: rgba(255,255,255,0.45);
          margin: 7px 0 0;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        /* ── mobile ── */
        @media (max-width: 640px) {
          .about-hero-wrap {
            max-height: none;
            min-height: 100dvh;
          }
          .about-h1 {
            font-size: clamp(1.8rem, 8vw, 2.4rem);
            letter-spacing: -0.02em;
          }
          .about-desc {
            font-size: 14px;
          }
          .about-stat-item {
            flex: 1 1 42%;
            border-right: none !important;
            padding: 0 10px 18px;
          }
          .about-stat-item:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.1) !important;
          }
          .about-stat-item:nth-last-child(-n+2) {
            padding-bottom: 0;
          }
          .about-stats-row {
            padding-top: 22px;
          }
          .about-badge {
            font-size: 9px;
            padding: 5px 14px;
          }
        }
      `}</style>

      <section className="about-hero-wrap" aria-label="About Your Campus Edu">

        {/* Background Image */}
        <img
          src={aboutHeroImg}
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          loading="eager"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 25%",
            zIndex: 0,
          }}
        />

        {/* Single clean overlay — NOT too dark */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(8, 4, 20, 0.50)",
            zIndex: 1,
          }}
        />

        {/* Bottom gradient to anchor stats */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "220px",
            background:
              "linear-gradient(to top, rgba(8,4,20,0.92) 0%, rgba(8,4,20,0.4) 60%, transparent 100%)",
            zIndex: 2,
          }}
        />

        {/* ── Main content — pushed UP via justifyContent flex ── */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 24px 40px",
            textAlign: "center",
          }}
        >
          {/* Breadcrumb */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              marginBottom: "28px",
            }}
          >
            <Link to="/" className="about-bc-link">
              <svg
                width="13" height="13" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </Link>
            <span className="about-bc-sep" aria-hidden="true">›</span>
            <span className="about-bc-current">About Us</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            className="about-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="about-badge-dot" aria-hidden="true" />
            About Your Campus Edu
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="about-h1"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Shaping Future{" "}
            <span className="about-h1-green">Global Leaders</span>
            <br />
            Through Education
          </motion.h1>

          {/* Description */}
          <motion.p
            className="about-desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            We help ambitious students discover the right universities, courses,
            scholarships, and global opportunities through expert guidance and
            personalized support at every step of their study abroad journey.
          </motion.p>

          {/* Spacer between text and stats */}
          <div style={{ height: "40px" }} />

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div className="about-stats-row">
              {stats.map((item, i) => (
                <div key={i} className="about-stat-item">
                  <p className="about-stat-num">{item.number}</p>
                  <p className="about-stat-lbl">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </section>
    </>
  );
};

export default AboutHero;