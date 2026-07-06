import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock3, CheckCircle2 } from "lucide-react";

const SLOTS = [
  { time: "10:00 AM", status: "open" },
  { time: "11:30 AM", status: "open" },
  { time: "1:00 PM", status: "full" },
  { time: "2:30 PM", status: "open" },
  { time: "4:00 PM", status: "open" },
  { time: "5:30 PM", status: "full" },
];

export default function CounsellingSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="cs-root">
      <div className="cs-panel">
        <div className="cs-info">
          <span className="cs-tag">BOARDING TIME</span>
          <h2 className="cs-title">Pick a slot for your free session</h2>
          <p className="cs-sub">
            Every session is one-on-one with a counsellor who specialises in
            your shortlisted destinations &mdash; no group calls, no scripts.
          </p>

          <ul className="cs-points">
            <li>
              <CheckCircle2 size={16} /> 30-minute one-on-one call
            </li>
            <li>
              <CheckCircle2 size={16} /> Personalised shortlist of options
            </li>
            <li>
              <CheckCircle2 size={16} /> No cost, no obligation
            </li>
          </ul>
        </div>

        <div className="cs-board">
          <div className="cs-board-head">
            <Clock3 size={15} />
            <span>Today &middot; Choose a boarding time</span>
          </div>

          <div className="cs-slots">
            {SLOTS.map((slot) => {
              const isFull = slot.status === "full";
              const isActive = selected === slot.time;
              return (
                <motion.button
                  key={slot.time}
                  disabled={isFull}
                  className={`cs-slot ${isActive ? "is-active" : ""} ${
                    isFull ? "is-full" : ""
                  }`}
                  onClick={() => setSelected(slot.time)}
                  whileTap={{ scale: isFull ? 1 : 0.97 }}
                >
                  <span className="cs-slot-time">{slot.time}</span>
                  <span className="cs-slot-status">
                    {isFull ? "Full" : isActive ? "Selected" : "Open"}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <button className="cs-confirm" disabled={!selected}>
            {selected ? `Confirm ${selected} slot` : "Select a time above"}
          </button>
        </div>
      </div>

      <style>{`
        .cs-root {
          background: var(--bg-main);
          padding: clamp(64px, 9vw, 110px) clamp(20px, 6vw, 80px);
        }

        .cs-panel {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 6vw, 72px);
          align-items: center;
        }

        .cs-tag {
          display: inline-block;
          font-family: var(--font-main);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--secondary);
          margin-bottom: 14px;
        }

        .cs-title {
          font-family: var(--font-main);
          font-weight: 700;
          font-size: clamp(1.7rem, 3vw, 2.3rem);
          color: var(--text-dark);
          line-height: 1.2;
          margin: 0 0 16px;
        }

        .cs-sub {
          font-family: var(--font-main);
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-medium);
          max-width: 420px;
          margin: 0 0 22px;
        }

        .cs-points {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cs-points li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-main);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
        }

        .cs-points svg { color: var(--success); flex-shrink: 0; }

        .cs-board {
          background: var(--bg-section);
          border-radius: var(--radius-lg);
          padding: clamp(24px, 3vw, 32px);
          box-shadow: var(--shadow-md);
        }

        .cs-board-head {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-main);
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-medium);
          margin-bottom: 18px;
        }

        .cs-board-head svg { color: var(--primary); }

        .cs-slots {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .cs-slot {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--bg-main);
          cursor: pointer;
          transition: var(--transition);
          text-align: left;
        }

        .cs-slot:hover:not(.is-full) {
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .cs-slot.is-active {
          border-color: var(--primary);
          background: color-mix(in srgb, var(--primary) 8%, var(--bg-main));
        }

        .cs-slot.is-full {
          cursor: not-allowed;
          opacity: 0.5;
        }

        .cs-slot-time {
          font-family: var(--font-main);
          font-size: 14px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .cs-slot-status {
          font-family: var(--font-main);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-light);
        }

        .cs-slot.is-active .cs-slot-status { color: var(--primary); }

        .cs-confirm {
          width: 100%;
          padding: 13px;
          border: none;
          border-radius: var(--radius-sm);
          background: var(--gradient-primary);
          color: var(--text-white);
          font-family: var(--font-main);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .cs-confirm:disabled {
          background: var(--border);
          color: var(--text-light);
          cursor: not-allowed;
        }

        .cs-confirm:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 900px) {
          .cs-panel { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .cs-slots { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}