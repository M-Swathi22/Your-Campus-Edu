// src/components/home/StatsSection.jsx

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "140K+", label: "Study Abroad Programs", target: 140, suffix: "K+", isK: true },
  { number: "1,500+", label: "Global Institutions", target: 1500, suffix: "+", isComma: true },
  { number: "150+", label: "Student Nationalities", target: 150, suffix: "+" },
  { number: "95%", label: "Acceptance Rate", target: 95, suffix: "%" },
];

function useCountUp(target, suffix, isK, isComma, inView) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const duration = 1800;
    let start = null;
    let raf;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * target);

      if (isK) setDisplay(current + suffix);
      else if (isComma) setDisplay(current >= 1000 ? "1,500" + suffix : current + suffix);
      else setDisplay(current + suffix);

      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, suffix, isK, isComma]);

  return display;
}

function StatItem({ item, index, inView }) {
  const display = useCountUp(
    item.target,
    item.suffix,
    item.isK,
    item.isComma,
    inView
  );

  return (
    <motion.div
      className="stats__item"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <h2 className="stats__number">{display}</h2>
      <p className="stats__label">{item.label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats">
      <div className="container">
        <div className="stats__wrapper" ref={ref}>
          {stats.map((item, index) => (
            <StatItem key={index} item={item} index={index} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        .stats {
          padding: 55px 0;
          background: var(--primary-light);
          border-top: 1px solid rgba(109,83,163,0.08);
          border-bottom: 1px solid rgba(109,83,163,0.08);
        }
        .stats__wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .stats__item {
          text-align: center;
          position: relative;
        }
        .stats__item:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -12px;
          transform: translateY(-50%);
          width: 1px;
          height: 52px;
          background: rgba(109,83,163,0.12);
        }
        .stats__number {
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
          font-family: var(--font-main);
          color: var(--text-dark);
          margin-bottom: 10px;
          letter-spacing: -1px;
        }
        .stats__label {
          font-size: 15px;
          font-weight: 500;
          line-height: 1.5;
          font-family: var(--font-main);
          color: var(--text-medium);
        }

        @media (max-width: 992px) {
          .stats__wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 24px;
          }
          .stats__item:nth-child(2)::after {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .stats { padding: 45px 0; }
          .stats__wrapper {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .stats__item::after { display: none; }
          .stats__number { font-size: 38px; }
          .stats__label { font-size: 14px; }
        }
      `}</style>
    </section>
  );
}
