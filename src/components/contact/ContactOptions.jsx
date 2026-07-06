import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const CHANNELS = [
  {
    id: "01",
    title: "Call the desk",
    value: "+91 98765 43210",
    detail: "Mon &ndash; Sat, 9am to 7pm IST",
    icon: Phone,
    accent: "var(--primary)",
    href: "tel:+919876543210",
  },
  {
    id: "02",
    title: "Send an email",
    value: "hello@yourcampusedu.com",
    detail: "We reply within 24 hours",
    icon: Mail,
    accent: "var(--accent-blue)",
    href: "mailto:hello@yourcampusedu.com",
  },
  {
    id: "03",
    title: "Message on WhatsApp",
    value: "+91 98765 43210",
    detail: "Usually replies in minutes",
    icon: MessageCircle,
    accent: "var(--accent-green)",
    href: "https://wa.me/919876543210",
  },
  {
    id: "04",
    title: "Visit our office",
    value: "Coimbatore, Tamil Nadu",
    detail: "By appointment preferred",
    icon: MapPin,
    accent: "var(--secondary)",
    href: "#",
  },
];

export default function ContactOptions() {
  return (
    <section className="co-root">
      <div className="co-glow co-glow--one" aria-hidden="true" />
      <div className="co-glow co-glow--two" aria-hidden="true" />

      <div className="co-head">
        <span className="co-tag">
          <span className="co-tag-dot" />
          Get in touch
        </span>
        <h2 className="co-title">Four ways to reach the desk</h2>
        <p className="co-subtitle">
          Pick whichever works for you &mdash; every channel lands with the
          same counsellor, the same day.
        </p>
      </div>

      <div className="co-board">
        {CHANNELS.map((channel, i) => {
          const Icon = channel.icon;
          return (
            <motion.a
              key={channel.id}
              href={channel.href}
              className="co-card"
              style={{ "--accent": channel.accent }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="co-card-bar" aria-hidden="true" />

              <span className="co-card-index">{channel.id}</span>

              <div className="co-card-icon">
                <Icon size={20} strokeWidth={2} />
              </div>

              <h3 className="co-card-title">{channel.title}</h3>
              <p className="co-card-value">{channel.value}</p>
              <span
                className="co-card-detail"
                dangerouslySetInnerHTML={{ __html: channel.detail }}
              />

              <span className="co-card-cta">
                Reach out
                <ArrowUpRight size={15} />
              </span>
            </motion.a>
          );
        })}
      </div>

      <style>{`
        .co-root {
          position: relative;
          background: var(--primary-dark);
          padding: clamp(72px, 10vw, 120px) clamp(20px, 6vw, 80px);
          overflow: hidden;
        }

        .co-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .co-glow--one {
          top: -18%;
          left: 50%;
          transform: translateX(-50%);
          width: 60vw;
          max-width: 720px;
          height: 60vw;
          max-height: 720px;
          background: radial-gradient(circle, color-mix(in srgb, var(--primary) 38%, transparent) 0%, transparent 68%);
        }

        .co-glow--two {
          bottom: -20%;
          right: -6%;
          width: 40vw;
          max-width: 480px;
          height: 40vw;
          max-height: 480px;
          background: radial-gradient(circle, color-mix(in srgb, var(--accent-blue) 22%, transparent) 0%, transparent 70%);
        }

        .co-head {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 620px;
          margin: 0 auto clamp(44px, 6vw, 68px);
        }

        .co-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-main);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--white) 82%, transparent);
          margin-bottom: 16px;
        }

        .co-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent-green) 25%, transparent);
        }

        .co-title {
          font-family: var(--font-main);
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--text-white);
          letter-spacing: -0.01em;
          margin: 0 0 14px;
        }

        .co-subtitle {
          font-family: var(--font-main);
          font-size: 15px;
          line-height: 1.6;
          color: color-mix(in srgb, var(--white) 68%, transparent);
          margin: 0;
        }

        .co-board {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* ---------- elevated white card ---------- */
        .co-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 28px 24px 24px;
          border-radius: var(--radius-lg);
          background: var(--bg-main);
          border: 1px solid transparent;
          text-decoration: none;
          overflow: hidden;
          box-shadow: 0 12px 28px color-mix(in srgb, var(--black) 22%, transparent);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .co-card-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--accent);
          transform: scaleX(0.22);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .co-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 26px 48px color-mix(in srgb, var(--accent) 32%, transparent);
        }

        .co-card:hover .co-card-bar {
          transform: scaleX(1);
        }

        .co-card-index {
          position: absolute;
          top: 22px;
          right: 22px;
          font-family: var(--font-main);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-light);
        }

        .co-card-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: var(--radius-md);
          background: color-mix(in srgb, var(--accent) 12%, transparent);
          color: var(--accent);
          margin-bottom: 22px;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                      background 0.4s ease, color 0.4s ease;
        }

        .co-card:hover .co-card-icon {
          background: var(--accent);
          color: var(--white);
          transform: scale(1.08) rotate(-6deg);
        }

        .co-card-title {
          font-family: var(--font-main);
          font-size: 14.5px;
          font-weight: 600;
          color: var(--text-light);
          margin: 0 0 10px;
        }

        .co-card-value {
          font-family: var(--font-main);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 6px;
          word-break: break-word;
          line-height: 1.35;
        }

        .co-card-detail {
          font-family: var(--font-main);
          font-size: 12.5px;
          color: var(--text-medium);
        }

        .co-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 22px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          font-family: var(--font-main);
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          transition: gap 0.3s ease;
        }

        .co-card:hover .co-card-cta {
          gap: 10px;
        }

        @media (max-width: 980px) {
          .co-board { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 540px) {
          .co-board { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}