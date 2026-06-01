// src/components/home/ContactSection.jsx
// ─────────────────────────────────────────────────────────────
//  PREMIUM CONTACT SECTION — Study Abroad Consultancy
//  Layout: Left (heading + form) | Right (illustrated visual)
//  Theme: theme.css CSS variables + Poppins only
// ─────────────────────────────────────────────────────────────

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  GraduationCap,
  Globe2,
  Plane,
  BookOpen,
  Star,
} from "lucide-react";

/* ── FLOATING BADGE DATA ─────────────────────────────────────── */
const floatingBadges = [
  { icon: GraduationCap, label: "500+ Universities", color: "var(--primary)", bg: "var(--primary-light)", top: "8%", left: "4%", delay: 0 },
  { icon: Globe2, label: "45+ Countries", color: "var(--accent-green)", bg: "#E8FBF3", top: "28%", right: "4%", delay: 0.2 },
  { icon: Plane, label: "Free Counselling", color: "var(--extra-indigo)", bg: "#ECEFFE", top: "62%", left: "6%", delay: 0.35 },
  { icon: Star, label: "4.9★ Rated", color: "var(--extra-orange)", bg: "#FFF4E6", bottom: "14%", right: "6%", delay: 0.5 },
];

/* ── CONTACT INFO ────────────────────────────────────────────── */
const contactInfo = [
  { icon: Phone, label: "+91 98765 43210" },
  { icon: Mail, label: "hello@studyabroad.in" },
  { icon: Clock, label: "Mon–Sat, 9 AM – 7 PM" },
];

/* ── DESTINATION DOTS (decorative globe) ────────────────────── */
const destinations = [
  { name: "USA", x: "22%", y: "32%" },
  { name: "UK", x: "44%", y: "22%" },
  { name: "AUS", x: "75%", y: "64%" },
  { name: "CAN", x: "18%", y: "28%" },
  { name: "GER", x: "50%", y: "30%" },
  { name: "NZ",  x: "78%", y: "70%" },
  { name: "SGP", x: "70%", y: "50%" },
  { name: "IRE", x: "40%", y: "24%" },
];

/* ── FORM FIELD ──────────────────────────────────────────────── */
function Field({ icon: Icon, label, type = "text", placeholder, name, value, onChange, rows }) {
  const [focused, setFocused] = useState(false);
  const Tag = rows ? "textarea" : "input";

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block",
        fontFamily: "var(--font-main)",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--text-medium)",
        marginBottom: 8,
      }}>
        {label}
      </label>
      <div style={{
        position: "relative",
        borderRadius: "var(--radius-md)",
        border: focused ? "1.5px solid var(--primary)" : "1.5px solid var(--border)",
        background: focused ? "var(--primary-light)" : "var(--bg-main)",
        boxShadow: focused ? "0 0 0 4px rgba(109,83,163,0.08)" : "none",
        transition: "all 0.25s ease",
        overflow: "hidden",
      }}>
        {/* Left icon strip */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, bottom: 0,
          width: 46,
          display: "flex",
          alignItems: rows ? "flex-start" : "center",
          justifyContent: "center",
          paddingTop: rows ? 14 : 0,
          borderRight: `1px solid ${focused ? "rgba(109,83,163,0.2)" : "var(--border)"}`,
          background: focused ? "rgba(109,83,163,0.06)" : "var(--bg-section)",
          transition: "all 0.25s ease",
        }}>
          <Icon size={15} strokeWidth={2} color={focused ? "var(--primary)" : "var(--text-light)"} />
        </div>

        <Tag
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            display: "block",
            width: "100%",
            paddingLeft: 58,
            paddingRight: 16,
            paddingTop: 14,
            paddingBottom: 14,
            background: "transparent",
            border: "none",
            outline: "none",
            fontFamily: "var(--font-main)",
            fontSize: 14,
            fontWeight: 400,
            color: "var(--text-dark)",
            lineHeight: 1.6,
            resize: rows ? "vertical" : "none",
            minHeight: rows ? 110 : "auto",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
}

/* ── MAIN SECTION ────────────────────────────────────────────── */
export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 0 110px",
        background: "var(--bg-light)",
        fontFamily: "var(--font-main)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr; gap: 52px; }
          .contact-right { order: -1; }
        }

        .send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(109,83,163,0.35) !important;
        }
        .send-btn:active { transform: translateY(0); }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes floatY2 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(108px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(108px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(0deg) translateX(76px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(76px) rotate(-360deg); }
        }
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* ── Background blobs ── */}
      <div style={{
        position: "absolute", top: -140, right: -140,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,83,163,0.08) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(49,185,120,0.07) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "0 28px", position: "relative", zIndex: 2,
      }}>
        <div className="contact-grid">

          {/* ════════════════════════════════
               LEFT — HEADING + FORM
          ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 16px", borderRadius: "var(--radius-xl)",
              background: "var(--primary-light)",
              border: "1.5px solid rgba(109,83,163,0.18)",
              marginBottom: 20,
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "var(--gradient-primary)",
              }} />
              <span style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "var(--primary)", fontFamily: "var(--font-main)",
              }}>
                Get in Touch
              </span>
            </div>

            {/* Headline */}
            <h2 style={{
              fontFamily: "var(--font-main)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--primary-dark)",
              margin: "0 0 12px",
            }}>
              Start Your{" "}
              <span style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Global Journey
              </span>
            </h2>

            <p style={{
              fontFamily: "var(--font-main)",
              fontSize: 14.5, lineHeight: 1.75,
              color: "var(--text-medium)", fontWeight: 400,
              margin: "0 0 32px", maxWidth: 420,
            }}>
              Book a free counselling session with our certified study abroad experts.
              We'll help you find the right university, country, and scholarship.
            </p>

            {/* Contact info row */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 16,
              marginBottom: 36,
            }}>
              {contactInfo.map(({ icon: Icon, label }, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "8px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1.5px solid var(--border)",
                  background: "var(--bg-main)",
                  boxShadow: "var(--shadow-sm)",
                }}>
                  <Icon size={13} strokeWidth={2} color="var(--primary)" />
                  <span style={{
                    fontFamily: "var(--font-main)",
                    fontSize: 12, fontWeight: 500,
                    color: "var(--text-medium)",
                  }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── FORM ── */}
            {!submitted ? (
              <div style={{
                background: "var(--bg-main)",
                borderRadius: "var(--radius-lg)",
                border: "1.5px solid var(--border)",
                padding: "32px",
                boxShadow: "var(--shadow-md)",
              }}>
                {/* Top accent */}
                <div style={{
                  height: 3, borderRadius: "2px 2px 0 0",
                  background: "var(--gradient-primary)",
                  margin: "-32px -32px 28px",
                  borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                }} />

                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
                    <Field icon={User} label="Your Name" placeholder="e.g. Arjun Sharma" name="name" value={form.name} onChange={handleChange} />
                    <Field icon={Phone} label="Phone Number" type="tel" placeholder="+91 98765 43210" name="phone" value={form.phone} onChange={handleChange} />
                  </div>
                  <Field icon={Mail} label="Email Address" type="email" placeholder="you@example.com" name="email" value={form.email} onChange={handleChange} />
                  <Field icon={MessageSquare} label="Your Message" placeholder="Tell us about your study abroad goals, preferred country, or any questions…" name="message" value={form.message} onChange={handleChange} rows={4} />

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
                    <p style={{
                      fontFamily: "var(--font-main)",
                      fontSize: 11.5, color: "var(--text-light)",
                      margin: 0, fontWeight: 400,
                    }}>
                      🔒 Your data is 100% private and secure.
                    </p>
                    <button
                      type="submit"
                      className="send-btn"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        padding: "13px 28px",
                        borderRadius: "var(--radius-xl)",
                        background: "var(--gradient-secondary)",
                        border: "none",
                        color: "#fff",
                        fontFamily: "var(--font-main)",
                        fontSize: 13, fontWeight: 700,
                        letterSpacing: "0.06em", textTransform: "uppercase",
                        cursor: "pointer",
                        boxShadow: "var(--shadow-md)",
                        transition: "var(--transition)",
                      }}
                    >
                      Send Message
                      <Send size={14} strokeWidth={2.5} />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  background: "var(--bg-main)",
                  borderRadius: "var(--radius-lg)",
                  border: "1.5px solid var(--accent-green)",
                  padding: "40px 32px",
                  textAlign: "center",
                  boxShadow: "0 8px 32px rgba(49,185,120,0.12)",
                }}
              >
                <CheckCircle2 size={48} color="var(--accent-green)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
                <h3 style={{
                  fontFamily: "var(--font-main)",
                  fontSize: 20, fontWeight: 700,
                  color: "var(--primary-dark)", margin: "0 0 8px",
                }}>
                  Message Received!
                </h3>
                <p style={{
                  fontFamily: "var(--font-main)",
                  fontSize: 14, color: "var(--text-medium)",
                  lineHeight: 1.7, margin: 0,
                }}>
                  Our counsellor will reach out within 24 hours. Your global journey starts now.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* ════════════════════════════════
               RIGHT — ILLUSTRATED VISUAL
          ════════════════════════════════ */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
            {/* ── Main globe card ── */}
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              borderRadius: "var(--radius-xl)",
              border: "1.5px solid var(--border)",
              background: "var(--bg-main)",
              boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
              paddingBottom: 24,
            }}>
              {/* Gradient header band */}
              <div style={{
                height: 6,
                background: "var(--gradient-primary)",
              }} />

              {/* Globe SVG area */}
              <div style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "36px 24px 20px",
                background: "linear-gradient(160deg, var(--primary-light) 0%, var(--bg-main) 100%)",
              }}>
                <svg
                  viewBox="0 0 320 280"
                  width="100%"
                  style={{ maxWidth: 320, display: "block" }}
                >
                  {/* ── Defs ── */}
                  <defs>
                    <radialGradient id="globeGrad" cx="42%" cy="38%" r="58%">
                      <stop offset="0%" stopColor="#8B6FCC" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#24144F" stopOpacity="0.06" />
                    </radialGradient>
                    <radialGradient id="globeCore" cx="40%" cy="35%" r="60%">
                      <stop offset="0%" stopColor="#A58BE0" />
                      <stop offset="60%" stopColor="#6D53A3" />
                      <stop offset="100%" stopColor="#24144F" />
                    </radialGradient>
                    <radialGradient id="globeShine" cx="32%" cy="28%" r="40%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>

                  {/* ── Orbit rings ── */}
                  <ellipse cx="160" cy="140" rx="118" ry="30" fill="none" stroke="#6D53A3" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 6" />
                  <ellipse cx="160" cy="140" rx="84" ry="84" fill="none" stroke="#31B978" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="3 8" />
                  <ellipse cx="160" cy="140" rx="138" ry="50" fill="none" stroke="#6D53A3" strokeWidth="0.8" strokeOpacity="0.08" strokeDasharray="5 10" transform="rotate(-20,160,140)" />

                  {/* ── Globe body ── */}
                  <circle cx="160" cy="140" r="82" fill="url(#globeCore)" />
                  <circle cx="160" cy="140" r="82" fill="url(#globeShine)" />

                  {/* ── Latitude / longitude lines ── */}
                  {[-50,-25,0,25,50].map((offset, i) => (
                    <ellipse key={i} cx="160" cy={140+offset} rx={Math.sqrt(82*82 - offset*offset) * 0.98} ry="7"
                      fill="none" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.12" />
                  ))}
                  {[0,36,72,108,144].map((angle, i) => (
                    <ellipse key={i} cx="160" cy="140" rx="82" ry="82"
                      fill="none" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.1"
                      transform={`rotate(${angle},160,140)`} />
                  ))}

                  {/* ── Continent blobs ── */}
                  <ellipse cx="140" cy="118" rx="28" ry="18" fill="#31B978" fillOpacity="0.5" transform="rotate(-15,140,118)" />
                  <ellipse cx="175" cy="130" rx="16" ry="24" fill="#31B978" fillOpacity="0.45" transform="rotate(10,175,130)" />
                  <ellipse cx="120" cy="148" rx="22" ry="14" fill="#31B978" fillOpacity="0.4" transform="rotate(-8,120,148)" />
                  <ellipse cx="185" cy="155" rx="12" ry="10" fill="#31B978" fillOpacity="0.38" />
                  <ellipse cx="148" cy="162" rx="18" ry="9" fill="#31B978" fillOpacity="0.35" transform="rotate(5,148,162)" />

                  {/* ── Destination pins ── */}
                  {[
                    { cx: 132, cy: 115, label: "UK" },
                    { cx: 108, cy: 135, label: "USA" },
                    { cx: 185, cy: 122, label: "GER" },
                    { cx: 200, cy: 148, label: "AUS" },
                    { cx: 145, cy: 155, label: "CAN" },
                    { cx: 172, cy: 108, label: "UAE" },
                  ].map(({ cx, cy, label }, i) => (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r="5" fill="#fff" stroke="#6D53A3" strokeWidth="1.5" />
                      <circle cx={cx} cy={cy} r="2.5" fill="#6D53A3" />
                      <text x={cx} y={cy - 9} textAnchor="middle"
                        fontSize="7" fill="#fff" fontFamily="Poppins,sans-serif" fontWeight="600" opacity="0.9"
                      >{label}</text>
                    </g>
                  ))}

                  {/* ── Orbital plane dot ── */}
                  <circle r="8" fill="#FF5B5C" filter="url(#glow)" opacity="0.9">
                    <animateMotion dur="7s" repeatCount="indefinite"
                      path="M 160,140 m -118,0 a 118,30 0 1,1 236,0 a 118,30 0 1,1 -236,0" />
                  </circle>

                  <circle r="5" fill="#F8941F" opacity="0.85">
                    <animateMotion dur="11s" repeatCount="indefinite"
                      path="M 160,140 m -84,0 a 84,84 0 1,0 168,0 a 84,84 0 1,0 -168,0" />
                  </circle>

                  {/* ── Gloss overlay ── */}
                  <circle cx="160" cy="140" r="82" fill="none" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.15" />
                </svg>

                {/* Floating badge — top right of globe */}
                <div style={{
                  position: "absolute",
                  top: 28, right: 24,
                  padding: "8px 14px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg-main)",
                  border: "1.5px solid var(--border)",
                  boxShadow: "var(--shadow-md)",
                  animation: "floatY 4s ease-in-out infinite",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <BookOpen size={13} color="var(--primary)" strokeWidth={2} />
                    <div>
                      <p style={{ fontFamily: "var(--font-main)", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-light)", margin: 0 }}>Programs</p>
                      <p style={{ fontFamily: "var(--font-main)", fontSize: 14, fontWeight: 800, color: "var(--primary-dark)", margin: 0, lineHeight: 1 }}>500+</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge — bottom left */}
                <div style={{
                  position: "absolute",
                  bottom: 28, left: 20,
                  padding: "8px 14px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg-main)",
                  border: "1.5px solid var(--border)",
                  boxShadow: "var(--shadow-md)",
                  animation: "floatY2 5s ease-in-out infinite",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <Globe2 size={13} color="var(--accent-green)" strokeWidth={2} />
                    <div>
                      <p style={{ fontFamily: "var(--font-main)", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-light)", margin: 0 }}>Countries</p>
                      <p style={{ fontFamily: "var(--font-main)", fontSize: 14, fontWeight: 800, color: "var(--primary-dark)", margin: 0, lineHeight: 1 }}>45+</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card label */}
              <div style={{ padding: "0 24px", textAlign: "center" }}>
                <p style={{
                  fontFamily: "var(--font-main)",
                  fontSize: 13, fontWeight: 600,
                  color: "var(--primary-dark)", margin: "0 0 4px",
                }}>
                  Study Anywhere in the World
                </p>
                <p style={{
                  fontFamily: "var(--font-main)",
                  fontSize: 12, color: "var(--text-light)",
                  margin: 0, lineHeight: 1.6,
                }}>
                  Expert guidance for 45+ destinations
                </p>
              </div>
            </div>

            {/* ── Bottom stat chips ── */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              width: "100%",
              maxWidth: 420,
            }}>
              {[
                { value: "15k+", label: "Students Placed", color: "var(--primary)", bg: "var(--primary-light)" },
                { value: "98%",  label: "Visa Success Rate", color: "var(--accent-green)", bg: "#E8FBF3" },
                { value: "120+", label: "Partner Universities", color: "var(--extra-indigo)", bg: "#ECEFFE" },
                { value: "Free", label: "First Counselling", color: "var(--secondary)", bg: "var(--secondary-light)" },
              ].map((chip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  style={{
                    padding: "16px 18px",
                    borderRadius: "var(--radius-md)",
                    border: "1.5px solid var(--border)",
                    background: "var(--bg-main)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-main)",
                    fontSize: 22, fontWeight: 800,
                    color: chip.color, lineHeight: 1,
                  }}>
                    {chip.value}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-main)",
                    fontSize: 11.5, fontWeight: 500,
                    color: "var(--text-medium)", lineHeight: 1.3,
                  }}>
                    {chip.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}