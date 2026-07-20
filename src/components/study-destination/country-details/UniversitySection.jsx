import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Award } from "lucide-react";

const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #6d53a3 0%, #24144f 100%)",
  "linear-gradient(135deg, #31b978 0%, #6d53a3 100%)",
  "linear-gradient(135deg, #39c0fa 0%, #6d53a3 100%)",
  "linear-gradient(135deg, #f92596 0%, #24144f 100%)",
  "linear-gradient(135deg, #f8941f 0%, #ff5b5c 100%)",
];

function initials(name) {
  return name
    .split(" ")
    .filter((w) => w.length > 2 || /[A-Z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function UniversitySection({ destination, universities }) {
  const { name } = destination;

  if (!universities || universities.length === 0) return null;

  return (
    <section className="us-section">
      <div className="us-inner">
        <div className="us-head">
          <span className="us-eyebrow">Where you'd study</span>
          <h2>Top universities in {name}</h2>
        </div>

        <div className="us-grid">
          {universities.map((u, i) => (
            <motion.div
              className="us-card"
              key={u.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="us-card__top">
                <div
                  className="us-avatar"
                  style={{ background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length] }}
                >
                  {initials(u.short || u.name)}
                </div>
                <div className="us-rank">
                  <Award size={12} />
                  {u.ranking}
                </div>
              </div>

              <h3>{u.name}</h3>
              <div className="us-location">
                <MapPin size={13} />
                {u.location}
              </div>

              <div className="us-courses">
                {u.courses.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>

              <div className="us-footer">
                <div>
                  <span>Est. tuition</span>
                  <strong>{u.tuition}</strong>
                </div>
                <button type="button" className="us-arrow" aria-label={`Explore ${u.name}`}>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .us-section { background: var(--bg-section); padding: 72px 0 88px; font-family: var(--font-main); }
        .us-inner { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

        .us-head { margin-bottom: 40px; }
        .us-eyebrow {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--secondary); display: block; margin-bottom: 10px;
        }
        .us-head h2 {
          font-size: clamp(1.6rem, 3.2vw, 2.2rem); font-weight: 800;
          color: var(--text-dark); letter-spacing: -0.02em; margin: 0;
        }

        .us-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;
        }
        .us-card {
          background: var(--bg-main); border-radius: var(--radius-lg);
          padding: 24px; box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          transition: var(--transition);
          display: flex; flex-direction: column;
        }
        .us-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); border-color: var(--primary-light); }

        .us-card__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
        .us-avatar {
          width: 46px; height: 46px; border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-white); font-weight: 800; font-size: 0.9rem;
        }
        .us-rank {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.68rem; font-weight: 700; color: var(--primary-dark);
          background: var(--primary-light); padding: 5px 9px; border-radius: var(--radius-sm);
        }

        .us-card h3 {
          font-size: 1rem; font-weight: 700; color: var(--text-dark);
          margin: 0 0 6px; line-height: 1.3;
        }
        .us-location {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.8rem; color: var(--text-light); margin-bottom: 16px;
        }

        .us-courses { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px; flex: 1; align-content: flex-start; }
        .us-courses span {
          font-size: 0.72rem; font-weight: 600; color: var(--text-medium);
          background: var(--bg-light); padding: 4px 10px; border-radius: var(--radius-sm);
        }

        .us-footer {
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid var(--border); padding-top: 14px;
        }
        .us-footer span { font-size: 0.68rem; color: var(--text-light); display: block; }
        .us-footer strong { font-size: 0.88rem; color: var(--text-dark); font-weight: 700; }
        .us-arrow {
          width: 34px; height: 34px; border-radius: 50%; border: 1.5px solid var(--border);
          background: var(--bg-main); color: var(--primary);
          display: flex; align-items: center; justify-content: center; cursor: pointer;
          transition: var(--transition);
        }
        .us-arrow:hover { background: var(--primary); color: var(--text-white); border-color: var(--primary); }
      `}</style>
    </section>
  );
}