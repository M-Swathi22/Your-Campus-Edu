import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const ROW_A = [
  {
    name: "Aditya Prakash",
    role: "B.Tech CSE",
    company: "Placed @ Microsoft India",
    avatar: "https://i.pravatar.cc/120?img=11",
    text: "YourCampus gave me a structured roadmap when I had none. Secured my dream placement 3 months before graduation — from a Tier-2 college.",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    role: "B.Sc Statistics",
    company: "Analyst @ Flipkart",
    avatar: "https://i.pravatar.cc/120?img=12",
    text: "Zero to full-time data analyst in 8 months. The project-based curriculum is unlike anything I had seen before.",
    rating: 5,
  },
  {
    name: "Rohan Shah",
    role: "M.Tech",
    company: "IIT Bombay",
    avatar: "https://i.pravatar.cc/120?img=15",
    text: "The alumni network alone is worth it. Every senior I messaged before my interviews responded within hours. That is real community.",
    rating: 5,
  },
  {
    name: "Nikhil Verma",
    role: "B.E. Mechanical",
    company: "PM @ Razorpay",
    avatar: "https://i.pravatar.cc/120?img=52",
    text: "Switched from mechanical to product management with zero background. The transition program gave me a roadmap when I had none.",
    rating: 5,
  },
];

const ROW_B = [
  {
    name: "Shruti Reddy",
    role: "MBA",
    company: "XLRI Jamshedpur",
    avatar: "https://i.pravatar.cc/120?img=47",
    text: "Live doubt sessions with industry professionals made all the difference. The clarity I got here I could not find anywhere else.",
    rating: 5,
  },
  {
    name: "Priya Devi",
    role: "B.Com · CA Aspirant",
    company: "Patna",
    avatar: "https://i.pravatar.cc/120?img=44",
    text: "Bridged the gap between my ambitions and resources. Scholarships and expert guidance in one place. Truly life-changing.",
    rating: 5,
  },
  {
    name: "Anjali Kapoor",
    role: "BBA · Marketing",
    company: "Delhi University",
    avatar: "https://i.pravatar.cc/120?img=56",
    text: "Every resource is built for Indian students. It never feels copy-pasted from a foreign platform. It genuinely feels ours.",
    rating: 5,
  },
  {
    name: "Tanvi Singh",
    role: "B.Sc CS",
    company: "SWE @ Infosys BPM",
    avatar: "https://i.pravatar.cc/120?img=39",
    text: "I actually finished what I started. The weekly check-ins and mentor nudges kept me accountable like nothing else had before.",
    rating: 5,
  },
];

// ─── Slider constants ─────────────────────────────────────────────────────────
const CW   = 300;   // card width
const GAP  = 16;
const STEP = CW + GAP;
const COPIES = 5;

// ─── Hook: detect mobile ──────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars({ n = 5 }) {
  return (
    <div style={{ display: "flex", gap: 2, flexShrink: 0 }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width={12} height={12} viewBox="0 0 24 24" fill="var(--primary)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
// NO fixed height — card grows with content so text is never clipped
function Card({ item, cardWidth }) {
  const w = cardWidth || CW;
  return (
    <div
      style={{
        width: w,
        minWidth: w,
        flexShrink: 0,
        background: "var(--white)",
        borderRadius: "var(--radius-md)",
        border: "1px solid rgba(109,83,163,0.10)",
        padding: "18px 20px 16px 24px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Top-right blob */}
      <div style={{
        position: "absolute", top: -22, right: -22,
        width: 72, height: 72, borderRadius: "50%",
        background: "var(--primary)", opacity: 0.045,
        pointerEvents: "none",
      }} />

      {/* Left accent bar */}
      <div style={{
        position: "absolute", top: 20, left: 0,
        width: 3, height: 36, borderRadius: "0 3px 3px 0",
        background: "var(--gradient-primary)",
      }} />

      {/* Ghost quote mark */}
      <div style={{
        position: "absolute", top: 8, right: 14,
        fontSize: 48, lineHeight: 1,
        fontFamily: "Georgia, serif",
        color: "var(--primary)", opacity: 0.07,
        userSelect: "none", pointerEvents: "none",
      }}>
        "
      </div>

      {/* Quote text — full text, no clamp, no overflow:hidden on text */}
      <p style={{
        fontFamily: "var(--font-main)",
        fontSize: 13,
        lineHeight: 1.75,
        color: "var(--text-medium)",
        margin: "0 0 14px",
        flex: 1,
        // deliberately NO WebkitLineClamp, NO overflow:hidden
      }}>
        "{item.text}"
      </p>

      {/* Footer */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        paddingTop: 12,
        borderTop: "1px solid rgba(109,83,163,0.08)",
        marginTop: "auto",
      }}>
        <img
          src={item.avatar}
          alt={item.name}
          width={36} height={36}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid var(--primary)",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "var(--font-main)",
            fontSize: 12.5, fontWeight: 700,
            color: "var(--text-dark)", lineHeight: 1.3,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {item.name}
          </div>
          <div style={{
            fontFamily: "var(--font-main)",
            fontSize: 10.5, color: "var(--primary)",
            fontWeight: 600, lineHeight: 1.3, marginTop: 1,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>
            {item.company}
          </div>
        </div>
        <Stars n={item.rating} />
      </div>
    </div>
  );
}

// ─── Desktop infinite scroll row (RAF) ────────────────────────────────────────
function ScrollRow({ items, direction = 1, speed = 1.0 }) {
  const stripRef = useRef(null);
  const posRef   = useRef(0);
  const rafRef   = useRef(null);
  const paused   = useRef(false);

  const totalW   = items.length * STEP;
  const allItems = Array.from({ length: COPIES }, () => items).flat();

  useEffect(() => {
    const tick = () => {
      if (!paused.current) {
        posRef.current += speed * direction;
        if (posRef.current >= totalW) posRef.current -= totalW;
        if (posRef.current < 0)       posRef.current += totalW;
        if (stripRef.current)
          stripRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [totalW, direction, speed]);

  return (
    <div
      style={{ position: "relative", overflow: "hidden", width: "100%" }}
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      {/* Fade edges */}
      {["left", "right"].map((side) => (
        <div key={side} style={{
          position: "absolute", top: 0, bottom: 0, [side]: 0,
          width: 80, zIndex: 10, pointerEvents: "none",
          background: `linear-gradient(to ${side === "left" ? "right" : "left"}, var(--primary-light) 10%, transparent 100%)`,
        }} />
      ))}
      <div
        ref={stripRef}
        style={{ display: "flex", gap: GAP, willChange: "transform", padding: "6px 0", alignItems: "stretch" }}
      >
        {allItems.map((item, i) => <Card key={i} item={item} />)}
      </div>
    </div>
  );
}

// ─── Mobile swipeable grid ────────────────────────────────────────────────────
// Shows all cards in a single-column scrollable list so nothing is hidden
function MobileCards({ items }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 14,
      width: "100%",
    }}>
      {items.map((item, i) => (
        <Card key={i} item={item} cardWidth="100%" />
      ))}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Testimonials() {
  const isMobile = useIsMobile();
  const allItems = [...ROW_A, ...ROW_B];

  return (
    <section
      style={{
        background: "var(--primary-light)",
        fontFamily: "var(--font-main)",
        position: "relative",
        overflow: "hidden",
        padding: isMobile ? "64px 0 72px" : "100px 0 108px",
      }}
    >
      {/* ── Ambient orbs ── */}
      <div style={{
        position: "absolute", top: -160, right: -160,
        width: 520, height: 520, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(109,83,163,0.09) 0%, transparent 65%)",
      }} />
      <div style={{
        position: "absolute", bottom: -130, left: -130,
        width: 440, height: 440, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(49,185,120,0.07) 0%, transparent 65%)",
      }} />
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(rgba(109,83,163,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* ── Inner container ── */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: isMobile ? "0 16px" : "0 24px",
        position: "relative",
        zIndex: 10,
      }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: isMobile ? 36 : 58 }}
        >
          {/* Eyebrow pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "7px 14px", borderRadius: 999,
            background: "rgba(109,83,163,0.08)",
            border: "1px solid rgba(109,83,163,0.12)",
            marginBottom: 16,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--primary)", display: "inline-block",
            }} />
            <span style={{
              fontSize: 10, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--primary)", fontFamily: "var(--font-main)",
            }}>
              Student Stories
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            margin: 0,
            fontSize: isMobile ? "clamp(28px, 8vw, 38px)" : "clamp(32px, 6vw, 62px)",
            lineHeight: 1.05, fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "var(--text-dark)", fontFamily: "var(--font-main)",
          }}>
            Real Students.{" "}
            <span style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Real Results.
            </span>
          </h2>

          {/* Sub-copy */}
          <p style={{
            fontFamily: "var(--font-main)",
            marginTop: 16, fontSize: isMobile ? 14 : 15,
            color: "var(--text-medium)", lineHeight: 1.8,
            margin: "16px auto 0", maxWidth: 520,
            padding: isMobile ? "0 8px" : 0,
          }}>
            Over 50,000 students have transformed their careers through YourCampus.
            Here's what they have to say.
          </p>
        </motion.div>

        {/* ── Desktop: two infinite scroll rows ── */}
        {!isMobile && (
          <>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
              style={{ marginBottom: 16 }}
            >
              <ScrollRow items={ROW_A} direction={1} speed={1.0} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
              style={{ marginBottom: 48 }}
            >
              <ScrollRow items={ROW_B} direction={-1} speed={0.9} />
            </motion.div>
          </>
        )}

        {/* ── Mobile: single-column stacked cards ── */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 36 }}
          >
            <MobileCards items={allItems} />
          </motion.div>
        )}

        {/* ── Bottom trust strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.22 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? 8 : 10,
            flexWrap: "wrap",
          }}
        >
          {/* Stacked avatars */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {["?img=11","?img=12","?img=15","?img=52","?img=47"].map((q, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/60${q}`}
                alt=""
                width={30} height={30}
                style={{
                  borderRadius: "50%",
                  border: "2px solid var(--primary-light)",
                  objectFit: "cover",
                  marginLeft: i === 0 ? 0 : -10,
                  zIndex: 5 - i,
                  position: "relative",
                }}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: 2 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width={13} height={13} viewBox="0 0 24 24" fill="var(--primary)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <span style={{
            fontFamily: "var(--font-main)",
            fontSize: isMobile ? 12 : 13,
            color: "var(--text-medium)", fontWeight: 500,
            textAlign: "center",
          }}>
            <strong style={{ color: "var(--primary-dark)", fontWeight: 700 }}>4.9 / 5</strong>
            {" "}from 50,000+ students across India
          </span>
        </motion.div>

      </div>
    </section>
  );
}