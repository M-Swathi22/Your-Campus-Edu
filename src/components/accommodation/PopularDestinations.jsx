// src/components/accommodation/PopularDestinations.jsx
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { destinations } from "../../data/countryDetails";

export default function PopularDestinations() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const idx = Math.round(scrollLeft / (clientWidth * 0.001 + 296));
    setActiveIndex(Math.min(idx, destinations.length - 1));
  };

  return (
    <section className="pop-dest" id="popular-destinations">
      <div className="pop-dest__inner">
        {/* ---------- Header ---------- */}
        <div className="pop-dest__header">
          <div className="pop-dest__heading">
            <span className="pop-dest__eyebrow">
              <span className="pop-dest__eyebrow-dot" />
              POPULAR DESTINATIONS
            </span>
            <h2 className="pop-dest__title">
              Pick a gate, <span className="pop-dest__title-accent">we'll tag a room</span>
            </h2>
          </div>

          <div className="pop-dest__nav">
            <button
              type="button"
              className="pop-dest__nav-btn"
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} strokeWidth={2.4} />
            </button>
            <button
              type="button"
              className="pop-dest__nav-btn pop-dest__nav-btn--primary"
              onClick={() => scroll(1)}
              aria-label="Scroll right"
            >
              <ChevronRight size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* ---------- Card rail ---------- */}
        <div className="pop-dest__scroll" ref={scrollRef} onScroll={handleScroll}>
          {destinations.map((d, i) => (
            <motion.div
              key={d.id}
              className="dest-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/accommodation/${d.id}`} className="dest-card__link">
                <div className="dest-card__frame">
                  <div
                    className="dest-card__img"
                    style={{ backgroundImage: `url(${d.heroImage})` }}
                  />
                  <div className="dest-card__scrim" aria-hidden="true" />

                  <div className="dest-card__content">
                    <h3 className="dest-card__name">{d.name}</h3>
                    <span className="dest-card__cta-btn">
                      <ArrowUpRight size={16} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ---------- Progress dots ---------- */}
        <div className="pop-dest__dots" aria-hidden="true">
          {destinations.map((d, i) => (
            <span
              key={d.id}
              className={`pop-dest__dot ${i === activeIndex ? "pop-dest__dot--active" : ""}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .pop-dest {
          background: var(--bg-main);
          font-family: var(--font-main);
          padding: clamp(4rem, 9vw, 7rem) 0;
          position: relative;
          overflow: hidden;
        }

        .pop-dest::before {
          content: "";
          position: absolute;
          top: -120px;
          right: -120px;
          width: 340px;
          height: 340px;
          background: var(--gradient-primary);
          opacity: 0.08;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }

        .pop-dest__inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 5vw, 3rem);
          position: relative;
          z-index: 1;
        }

        /* ---------- Header ---------- */

        .pop-dest__header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1.5rem;
          margin: 0 0 clamp(2.5rem, 5vw, 3.25rem);
        }

        .pop-dest__heading {
          max-width: 44rem;
        }

        .pop-dest__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .pop-dest__eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gradient-primary);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary) 14%, transparent);
        }

        .pop-dest__title {
          font-size: clamp(1.75rem, 3.6vw, 2.6rem);
          font-weight: 700;
          line-height: 1.15;
          color: var(--text-dark);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .pop-dest__title-accent {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .pop-dest__nav {
          display: flex;
          gap: 0.7rem;
          flex-shrink: 0;
        }

        .pop-dest__nav-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          background: var(--bg-main);
          color: var(--text-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .pop-dest__nav-btn:hover {
          border-color: transparent;
          background: var(--primary-light);
          color: var(--primary-dark);
          transform: translateY(-2px);
        }

        .pop-dest__nav-btn--primary {
          background: var(--gradient-primary);
          color: var(--text-white);
          border-color: transparent;
          box-shadow: var(--shadow-md);
        }

        .pop-dest__nav-btn--primary:hover {
          color: var(--text-white);
          background: var(--gradient-primary);
          transform: translateY(-2px) scale(1.04);
        }

        /* ---------- Rail ---------- */

        .pop-dest__scroll {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 0.4rem 0.4rem 1.25rem;
          scrollbar-width: none;
        }

        .pop-dest__scroll::-webkit-scrollbar {
          display: none;
        }

        .dest-card {
          flex: 0 0 280px;
          scroll-snap-align: start;
        }

        .dest-card__link {
          text-decoration: none;
          display: block;
        }

        .dest-card__frame {
          position: relative;
          height: 360px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-dark);
          box-shadow: var(--shadow-sm);
          transition: box-shadow 0.4s ease, transform 0.4s ease;
        }

        .dest-card__frame::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: var(--radius-lg);
          border: 1px solid color-mix(in srgb, var(--white) 14%, transparent);
          pointer-events: none;
          transition: border-color 0.4s ease;
        }

        .dest-card__link:hover .dest-card__frame {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .dest-card__link:hover .dest-card__frame::after {
          border-color: color-mix(in srgb, var(--primary) 55%, transparent);
        }

        .dest-card__img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .dest-card__link:hover .dest-card__img {
          transform: scale(1.08);
        }

        .dest-card__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            color-mix(in srgb, var(--primary-dark) 88%, transparent) 0%,
            color-mix(in srgb, var(--primary-dark) 38%, transparent) 45%,
            transparent 75%
          );
        }

        .dest-card__content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 0.75rem;
          height: 100%;
          padding: 1.25rem;
        }

        .dest-card__name {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-white);
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .dest-card__cta-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--gradient-primary);
          color: var(--text-white);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.35s ease;
        }

        .dest-card__link:hover .dest-card__cta-btn {
          transform: rotate(45deg) scale(1.08);
        }

        /* ---------- Dots ---------- */

        .pop-dest__dots {
          display: none;
          justify-content: center;
          gap: 0.45rem;
          margin-top: 1.5rem;
        }

        .pop-dest__dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--border);
          transition: var(--transition);
        }

        .pop-dest__dot--active {
          width: 22px;
          background: var(--gradient-primary);
        }

        @media (max-width: 640px) {
          .pop-dest__nav {
            display: none;
          }

          .pop-dest__dots {
            display: flex;
          }

          .dest-card {
            flex-basis: 78vw;
          }

          .dest-card__frame {
            height: 320px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dest-card__frame,
          .dest-card__img,
          .pop-dest__nav-btn,
          .dest-card__cta-btn {
            transition: none;
          }

          .dest-card__link:hover .dest-card__frame {
            transform: none;
          }

          .dest-card__link:hover .dest-card__img {
            transform: none;
          }

          .dest-card__link:hover .dest-card__cta-btn {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}