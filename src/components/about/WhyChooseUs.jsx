import {
  FaUniversity,
  FaUserGraduate,
  FaAward,
  FaPassport,
  FaRobot,
  FaFileAlt,
} from "react-icons/fa";
import { useState } from "react";

import story from "../../assets/images/story/story1.jpg";

const cardTitleStyle = {
  fontSize: "17px",
  fontWeight: 700,
  color: "var(--text-dark)",
  fontFamily: "var(--font-main)",
  margin: "0 0 8px 0",
  lineHeight: 1.35,
};

const cardDescStyle = {
  fontSize: "14px",
  color: "var(--text-medium)",
  fontFamily: "var(--font-main)",
  margin: 0,
  lineHeight: 1.65,
};

/* Each badge gets a unique gradient ID to avoid SVG defs collision in the DOM */
function Badge({ uid, isRight }) {
  const s = 54;
  const r = 11;
  const f = 14;
  const gradId = `grad-${uid}`;

  /* isRight = badge is on LEFT edge of card (right-column cards), fold bottom-right
     !isRight = badge is on RIGHT edge of card (left-column cards), fold bottom-left */
  const pathD = isRight
    ? `M ${r} 0 L ${s-r} 0 Q ${s} 0 ${s} ${r} L ${s} ${s-f} L ${s-f} ${s} L ${r} ${s} Q 0 ${s} 0 ${s-r} L 0 ${r} Q 0 0 ${r} 0 Z`
    : `M ${r} 0 L ${s-r} 0 Q ${s} 0 ${s} ${r} L ${s} ${s-r} Q ${s} ${s} ${s-r} ${s} L ${f} ${s} L 0 ${s-f} L 0 ${r} Q 0 0 ${r} 0 Z`;

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6d53a3" />
          <stop offset="100%" stopColor="#24144f" />
        </linearGradient>
      </defs>
      <path d={pathD} fill={`url(#${gradId})`} />
    </svg>
  );
}

function FeatureCard({ uid, icon, title, desc, side, stagger }) {
  const [hovered, setHovered] = useState(false);
  const isRight = side === "right"; /* right column */
  const s = 54;

  return (
    <div
      style={{
        alignSelf: isRight ? "flex-start" : "flex-end",
        position: "relative",
        ...(isRight
          ? { marginLeft: stagger ? "52px" : "-10px" }
          : { marginRight: stagger ? "52px" : "-10px" }),
        transition: "transform 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge container */}
      <div style={{
        position: "absolute",
        width: `${s}px`,
        height: `${s}px`,
        zIndex: 3,
        top: "-18px",
        ...(isRight ? { left: "-18px" } : { right: "-18px" }),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Badge uid={uid} isRight={isRight} />
        <span style={{
          position: "relative",
          zIndex: 1,
          color: "#ffffff",
          fontSize: "21px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "6px",
          marginLeft: isRight ? "-6px" : "6px",
        }}>
          {icon}
        </span>
      </div>

      {/* Card */}
      <div style={{
        background: hovered ? "rgba(109,83,163,0.13)" : "rgba(109,83,163,0.08)",
        borderRadius: "18px",
        padding: isRight ? "22px 24px 22px 66px" : "22px 66px 22px 24px",
        width: "300px",
        boxShadow: hovered
          ? "0 14px 36px rgba(109,83,163,0.18)"
          : "0 4px 16px rgba(109,83,163,0.07)",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}>
        <h3 style={cardTitleStyle}>{title}</h3>
        <p style={cardDescStyle}>{desc}</p>
      </div>
    </div>
  );
}

function MobileCard({ uid, icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  const s = 48;
  const gradId = `grad-mob-${uid}`;

  return (
    <div
      style={{
        position: "relative",
        paddingTop: "18px",
        paddingLeft: "18px",
        transition: "transform 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "absolute",
        top: 0, left: 0,
        width: `${s}px`, height: `${s}px`,
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ position: "absolute", top: 0, left: 0 }}>
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6d53a3" />
              <stop offset="100%" stopColor="#24144f" />
            </linearGradient>
          </defs>
          {/* fold at bottom-right */}
          <path
            d={`M 10 0 L 38 0 Q 48 0 48 10 L 48 34 L 34 48 L 10 48 Q 0 48 0 38 L 0 10 Q 0 0 10 0 Z`}
            fill={`url(#${gradId})`}
          />
        </svg>
        <span style={{
          position: "relative", zIndex: 1,
          color: "#ffffff", fontSize: "19px",
          display: "flex", marginBottom: "5px",
        }}>
          {icon}
        </span>
      </div>

      <div style={{
        background: hovered ? "rgba(109,83,163,0.13)" : "rgba(109,83,163,0.08)",
        borderRadius: "16px",
        padding: "18px 20px 18px 58px",
        boxShadow: hovered
          ? "0 10px 28px rgba(109,83,163,0.16)"
          : "0 3px 12px rgba(109,83,163,0.06)",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}>
        <h3 style={{ ...cardTitleStyle, fontSize: "16px" }}>{title}</h3>
        <p style={cardDescStyle}>{desc}</p>
      </div>
    </div>
  );
}

const leftFeatures = [
  { uid: "u1", icon: <FaUniversity />,   title: "1000+ University Partners", desc: "Access leading universities and colleges across India and abroad." },
  { uid: "u2", icon: <FaUserGraduate />, title: "Personalized Counseling",   desc: "One-on-one guidance tailored to your academic goals." },
  { uid: "u3", icon: <FaAward />,        title: "Scholarship Assistance",    desc: "Discover scholarships and financial support opportunities." },
];

const rightFeatures = [
  { uid: "u4", icon: <FaPassport />, title: "Visa & Admission Support", desc: "Complete documentation and admission assistance." },
  { uid: "u5", icon: <FaRobot />,    title: "AI Career Matching",       desc: "Smart recommendations based on your interests and budget." },
  { uid: "u6", icon: <FaFileAlt />,  title: "End-to-End Support",       desc: "From application to enrollment, we're with you." },
];

export default function WhyChooseUs() {
  return (
    <section style={{
      background: "var(--primary-light)",
      fontFamily: "var(--font-main)",
      padding: "90px 0",
      overflow: "hidden",
    }}>

      <style>{`
        .wcu-desktop { display: grid !important; }
        .wcu-mobile  { display: none !important; }
        @media (max-width: 960px) {
          .wcu-desktop { display: none !important; }
          .wcu-mobile  { display: flex !important; }
        }
      `}</style>

      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{
            display: "inline-block",
            background: "var(--primary)",
            color: "var(--white)",
            borderRadius: "999px",
            padding: "7px 24px",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "16px",
            fontFamily: "var(--font-main)",
          }}>
            Why Choose Us
          </span>

          <h2 style={{
            fontSize: "clamp(30px, 4vw, 46px)",
            fontWeight: 700,
            color: "var(--text-dark)",
            lineHeight: 1.25,
            fontFamily: "var(--font-main)",
            margin: 0,
          }}>
            More Than A Consultancy,{" "}
            <span style={{ color: "var(--primary)" }}>Your Education Partner</span>
          </h2>

          <p style={{
            marginTop: "14px",
            color: "var(--text-medium)",
            fontSize: "16px",
            fontFamily: "var(--font-main)",
          }}>
            Helping students discover the right course, university, and career path with confidence.
          </p>
        </div>

        {/* DESKTOP */}
        <div
          className="wcu-desktop"
          style={{ gridTemplateColumns: "1fr 360px 1fr", alignItems: "center" }}
        >
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px", paddingRight: "10px" }}>
            {leftFeatures.map((f, i) => (
              <FeatureCard key={f.uid} {...f} side="left" stagger={i === 1} />
            ))}
          </div>

          {/* Center circle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
            <div style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "8px solid var(--white)",
              boxShadow: "0 20px 60px rgba(109,83,163,0.22)",
              flexShrink: 0,
            }}>
              <img src={story} alt="Education counselors" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px", paddingLeft: "10px" }}>
            {rightFeatures.map((f, i) => (
              <FeatureCard key={f.uid} {...f} side="right" stagger={i === 1} />
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="wcu-mobile" style={{ flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px", marginBottom: "40px" }}>
            {leftFeatures.map((f) => <MobileCard key={f.uid} {...f} />)}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
            <div style={{
              width: "270px",
              height: "270px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "7px solid var(--white)",
              boxShadow: "0 16px 48px rgba(109,83,163,0.2)",
            }}>
              <img src={story} alt="Education counselors" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {rightFeatures.map((f) => <MobileCard key={f.uid} {...f} />)}
          </div>
        </div>

      </div>
    </section>
  );
}