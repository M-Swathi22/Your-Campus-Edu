// HowItWorks.jsx — Equal-zone scroll, fast plane animation, start/end dot
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── STEPS ──────────────────────────────────────────────────── */
const STEPS = [
  {
    num: "01",
    title: "Tell Us Your Goals",
    desc: "Take our 3-minute AI assessment. Share your academic background, budget, and dream career — we listen before we advise.",
    btn: "Start Your Assessment",
    color: "#6D53A3",
    light: "#F3EEFF",
  },
  {
    num: "02",
    title: "University Application",
    desc: "Make university applications an easy task with our personalized support — from essays to documents, we've got you covered.",
    btn: "Get Application Assistance",
    color: "#5866EB",
    light: "#ECEFFE",
  },
  {
    num: "03",
    title: "Expert Counseling",
    desc: "Connect with IELTS-certified counselors for personalized guidance on applications, SOPs, and scholarships.",
    btn: "Talk to a Counselor",
    color: "#39C0FA",
    light: "#E6F8FF",
  },
  {
    num: "04",
    title: "AI-Matched Universities",
    desc: "Our AI analyzes 8,500+ universities to find your best matches with real admission probability scores — no guesswork.",
    btn: "See My Matches",
    color: "#8E56FF",
    light: "#F0EAFF",
  },
  {
    num: "05",
    title: "Visa & Pre-Departure",
    desc: "From visa filing to accommodation search, we handle every step until you're fully ready to fly.",
    btn: "Start Visa Process",
    color: "#31B978",
    light: "#E6FAF1",
  },
  {
    num: "06",
    title: "Fly & Succeed",
    desc: "Land at your dream university with full day-one support — accommodation, orientation, and a global community.",
    btn: "Join Thousands of Students",
    color: "#F92596",
    light: "#FFF0F9",
  },
];

/* ─── CENTER ILLUSTRATIONS ───────────────────────────────────── */
const C_ILLUS = [
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <defs>
      <linearGradient id="ci1bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F3EEFF"/>
        <stop offset="100%" stop-color="#E0D8FF"/>
      </linearGradient>
      <linearGradient id="ci1btn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#31B978"/>
        <stop offset="100%" stop-color="#6D53A3"/>
      </linearGradient>
    </defs>
    <circle cx="140" cy="140" r="136" fill="url(#ci1bg)"/>
    <circle cx="140" cy="94" r="30" fill="#6D53A3"/>
    <ellipse cx="140" cy="158" rx="40" ry="30" fill="#6D53A3" opacity="0.85"/>
    <circle cx="130" cy="90" r="4" fill="white" opacity="0.4"/>
    <circle cx="150" cy="90" r="4" fill="white" opacity="0.4"/>
    <path d="M133 102 q7 6 14 0" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="165" y="50" width="78" height="52" rx="14" fill="white" opacity="0.95" filter="drop-shadow(0 4px 12px rgba(109,83,163,0.18))"/>
    <polygon points="171,102 183,102 177,114" fill="white" opacity="0.95"/>
    <text x="179" y="72" font-size="13" fill="#F8941F">★</text>
    <text x="195" y="72" font-size="13" fill="#6D53A3">★</text>
    <text x="211" y="72" font-size="13" fill="#31B978">★</text>
    <text x="204" y="89" font-family="Poppins,sans-serif" font-size="8" font-weight="700" fill="#6D53A3" text-anchor="middle">MY DREAM</text>
    <circle cx="50" cy="112" r="7" fill="#31B978" opacity="0.5"/>
    <circle cx="66" cy="82" r="4" fill="#F92596" opacity="0.45"/>
    <circle cx="34" cy="162" r="5" fill="#39C0FA" opacity="0.45"/>
    <rect x="52" y="208" width="176" height="38" rx="19" fill="url(#ci1btn)"/>
    <text x="140" y="232" text-anchor="middle" font-family="Poppins,sans-serif" font-size="13" font-weight="700" fill="white">Set Your Goals</text>
  </svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <defs>
      <linearGradient id="ci2bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#EEF2FF"/>
        <stop offset="100%" stop-color="#DDE5FF"/>
      </linearGradient>
      <linearGradient id="ci2btn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#5866EB"/>
        <stop offset="100%" stop-color="#6D53A3"/>
      </linearGradient>
    </defs>
    <circle cx="140" cy="140" r="136" fill="url(#ci2bg)"/>
    <rect x="42" y="56" width="158" height="124" rx="16" fill="white" filter="drop-shadow(0 6px 18px rgba(88,102,235,0.18))"/>
    <rect x="42" y="56" width="158" height="36" rx="16" fill="#24144F"/>
    <rect x="42" y="74" width="158" height="18" fill="#24144F"/>
    <circle cx="61" cy="74" r="5" fill="#F92596" opacity="0.8"/>
    <circle cx="76" cy="74" r="5" fill="#F8941F" opacity="0.8"/>
    <circle cx="91" cy="74" r="5" fill="#31B978" opacity="0.8"/>
    <text x="162" y="79" text-anchor="middle" font-family="Poppins,sans-serif" font-size="9" font-weight="600" fill="white" opacity="0.6">Application</text>
    <rect x="56" y="102" width="128" height="10" rx="5" fill="#EEF2FF" stroke="#C8D6E0" stroke-width="1"/>
    <rect x="56" y="120" width="128" height="10" rx="5" fill="#EEF2FF" stroke="#C8D6E0" stroke-width="1"/>
    <rect x="56" y="138" width="128" height="10" rx="5" fill="#EEF2FF" stroke="#C8D6E0" stroke-width="1"/>
    <rect x="72" y="158" width="96" height="10" rx="5" fill="#5866EB" opacity="0.9"/>
    <circle cx="212" cy="74" r="22" fill="#31B978" filter="drop-shadow(0 4px 10px rgba(49,185,120,0.35))"/>
    <path d="M202 74l7 7 13-13" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="30" cy="130" r="6" fill="#5866EB" opacity="0.35"/>
    <circle cx="238" cy="152" r="5" fill="#F92596" opacity="0.35"/>
    <rect x="52" y="208" width="176" height="38" rx="19" fill="url(#ci2btn)"/>
    <text x="140" y="232" text-anchor="middle" font-family="Poppins,sans-serif" font-size="13" font-weight="700" fill="white">Apply Online</text>
  </svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <defs>
      <linearGradient id="ci3bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E6F8FF"/>
        <stop offset="100%" stop-color="#CCF1FF"/>
      </linearGradient>
      <linearGradient id="ci3btn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#39C0FA"/>
        <stop offset="100%" stop-color="#5866EB"/>
      </linearGradient>
    </defs>
    <circle cx="140" cy="140" r="136" fill="url(#ci3bg)"/>
    <rect x="30" y="44" width="200" height="130" rx="16" fill="white" filter="drop-shadow(0 6px 18px rgba(57,192,250,0.2))"/>
    <rect x="30" y="44" width="200" height="36" rx="16" fill="#24144F"/>
    <rect x="30" y="62" width="200" height="18" fill="#24144F"/>
    <circle cx="50" cy="62" r="5" fill="#F92596" opacity="0.75"/>
    <circle cx="66" cy="62" r="5" fill="#F8941F" opacity="0.75"/>
    <circle cx="82" cy="62" r="5" fill="#31B978" opacity="0.75"/>
    <text x="176" y="67" text-anchor="middle" font-family="Poppins,sans-serif" font-size="9" font-weight="600" fill="white" opacity="0.6">Live Session</text>
    <rect x="44" y="88" width="96" height="72" rx="12" fill="#EEF2FF"/>
    <circle cx="92" cy="112" r="18" fill="#39C0FA" opacity="0.6"/>
    <ellipse cx="92" cy="138" rx="24" ry="14" fill="#39C0FA" opacity="0.35"/>
    <rect x="148" y="88" width="66" height="48" rx="10" fill="#F3EEFF"/>
    <circle cx="181" cy="102" r="12" fill="#6D53A3" opacity="0.55"/>
    <ellipse cx="181" cy="122" rx="16" ry="9" fill="#6D53A3" opacity="0.3"/>
    <rect x="154" y="140" width="50" height="18" rx="9" fill="#F92596"/>
    <circle cx="166" cy="149" r="4" fill="white" opacity="0.9"/>
    <text x="179" y="153" font-family="Poppins,sans-serif" font-size="8" font-weight="700" fill="white">LIVE</text>
    <text x="140" y="196" text-anchor="middle" font-size="16">⭐⭐⭐⭐⭐</text>
    <rect x="52" y="210" width="176" height="38" rx="19" fill="url(#ci3btn)"/>
    <text x="140" y="234" text-anchor="middle" font-family="Poppins,sans-serif" font-size="13" font-weight="700" fill="white">Expert Session</text>
  </svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <defs>
      <linearGradient id="ci4bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#F0EAFF"/>
        <stop offset="100%" stop-color="#E2D5FF"/>
      </linearGradient>
      <linearGradient id="ci4btn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#8E56FF"/>
        <stop offset="100%" stop-color="#F92596"/>
      </linearGradient>
      <linearGradient id="bar1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#31B978"/>
        <stop offset="100%" stop-color="#6D53A3"/>
      </linearGradient>
      <linearGradient id="bar2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#39C0FA"/>
        <stop offset="100%" stop-color="#5866EB"/>
      </linearGradient>
      <linearGradient id="bar3" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#F92596"/>
        <stop offset="100%" stop-color="#8E56FF"/>
      </linearGradient>
    </defs>
    <circle cx="140" cy="140" r="136" fill="url(#ci4bg)"/>
    <rect x="24" y="36" width="210" height="162" rx="18" fill="white" filter="drop-shadow(0 6px 18px rgba(142,86,255,0.18))"/>
    <rect x="24" y="36" width="210" height="40" rx="18" fill="#F0EAFF"/>
    <rect x="24" y="56" width="210" height="20" fill="#F0EAFF"/>
    <rect x="36" y="46" width="40" height="20" rx="10" fill="#8E56FF"/>
    <text x="56" y="60" text-anchor="middle" font-family="Poppins,sans-serif" font-size="10" font-weight="800" fill="white">AI</text>
    <text x="138" y="62" text-anchor="middle" font-family="Poppins,sans-serif" font-size="10" font-weight="700" fill="#6D53A3">University Match</text>
    <text x="38" y="101" font-family="Poppins,sans-serif" font-size="9" fill="#808080">MIT</text>
    <rect x="64" y="92" width="132" height="12" rx="6" fill="#F0F4F5"/>
    <rect x="64" y="92" width="122" height="12" rx="6" fill="url(#bar1)"/>
    <text x="210" y="101" font-family="Poppins,sans-serif" font-size="9" font-weight="700" fill="#6D53A3">92%</text>
    <text x="38" y="123" font-family="Poppins,sans-serif" font-size="9" fill="#808080">Oxford</text>
    <rect x="64" y="113" width="132" height="12" rx="6" fill="#F0F4F5"/>
    <rect x="64" y="113" width="104" height="12" rx="6" fill="url(#bar2)"/>
    <text x="210" y="123" font-family="Poppins,sans-serif" font-size="9" font-weight="700" fill="#5866EB">78%</text>
    <text x="38" y="145" font-family="Poppins,sans-serif" font-size="9" fill="#808080">NUS</text>
    <rect x="64" y="134" width="132" height="12" rx="6" fill="#F0F4F5"/>
    <rect x="64" y="134" width="88" height="12" rx="6" fill="url(#bar3)"/>
    <text x="210" y="145" font-family="Poppins,sans-serif" font-size="9" font-weight="700" fill="#F92596">65%</text>
    <rect x="30" y="158" width="58" height="26" rx="8" fill="#F0EAFF"/>
    <text x="59" y="175" text-anchor="middle" font-family="Poppins,sans-serif" font-size="8" font-weight="700" fill="#8E56FF">8500+</text>
    <rect x="96" y="158" width="60" height="26" rx="8" fill="#E6FAF1"/>
    <text x="126" y="175" text-anchor="middle" font-family="Poppins,sans-serif" font-size="8" font-weight="700" fill="#31B978">Instant AI</text>
    <rect x="164" y="158" width="52" height="26" rx="8" fill="#FFF0F9"/>
    <text x="190" y="175" text-anchor="middle" font-family="Poppins,sans-serif" font-size="8" font-weight="700" fill="#F92596">98%</text>
    <rect x="52" y="208" width="176" height="38" rx="19" fill="url(#ci4btn)"/>
    <text x="140" y="232" text-anchor="middle" font-family="Poppins,sans-serif" font-size="13" font-weight="700" fill="white">AI Powered</text>
  </svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <defs>
      <linearGradient id="ci5bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#E6FAF1"/>
        <stop offset="100%" stop-color="#C8F4E0"/>
      </linearGradient>
      <linearGradient id="ci5btn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#31B978"/>
        <stop offset="100%" stop-color="#39C0FA"/>
      </linearGradient>
    </defs>
    <circle cx="140" cy="140" r="136" fill="url(#ci5bg)"/>
    <rect x="70" y="32" width="120" height="164" rx="14" fill="#24144F" filter="drop-shadow(0 8px 20px rgba(36,20,79,0.3))"/>
    <rect x="70" y="32" width="18" height="164" rx="7" fill="#1a0f38"/>
    <circle cx="136" cy="112" r="30" fill="none" stroke="#F8941F" stroke-width="2" opacity="0.6"/>
    <circle cx="136" cy="112" r="18" fill="#F8941F" opacity="0.15"/>
    <text x="136" y="118" text-anchor="middle" font-size="18" fill="#F8941F" font-weight="900" opacity="0.85">✦</text>
    <rect x="96" y="152" width="78" height="6" rx="3" fill="white" opacity="0.4"/>
    <rect x="102" y="166" width="60" height="4" rx="2" fill="white" opacity="0.25"/>
    <rect x="96" y="177" width="74" height="4" rx="2" fill="white" opacity="0.25"/>
    <g transform="translate(210,90) rotate(-18)">
      <rect x="-36" y="-24" width="72" height="48" rx="6" fill="none" stroke="#31B978" stroke-width="2.5"/>
      <text x="0" y="-8" text-anchor="middle" font-family="Poppins,sans-serif" font-size="10" font-weight="800" fill="#31B978">VISA</text>
      <text x="0" y="6" text-anchor="middle" font-family="Poppins,sans-serif" font-size="7" fill="#31B978" font-weight="600">APPROVED</text>
      <text x="0" y="18" text-anchor="middle" font-family="Poppins,sans-serif" font-size="6" fill="#31B978">2025 — 2026</text>
    </g>
    <rect x="28" y="100" width="52" height="80" rx="10" fill="white" filter="drop-shadow(0 3px 10px rgba(49,185,120,0.2))"/>
    <circle cx="42" cy="120" r="6" fill="#31B978"/>
    <path d="M39 120l2 2 4-4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="51" y="117" width="22" height="4" rx="2" fill="#E5E5E5"/>
    <circle cx="42" cy="140" r="6" fill="#31B978"/>
    <path d="M39 140l2 2 4-4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="51" y="137" width="18" height="4" rx="2" fill="#E5E5E5"/>
    <circle cx="42" cy="160" r="6" fill="#31B978"/>
    <path d="M39 160l2 2 4-4" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="51" y="157" width="20" height="4" rx="2" fill="#E5E5E5"/>
    <rect x="52" y="210" width="176" height="38" rx="19" fill="url(#ci5btn)"/>
    <text x="140" y="234" text-anchor="middle" font-family="Poppins,sans-serif" font-size="13" font-weight="700" fill="white">Visa Approved ✓</text>
  </svg>`,

  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <defs>
      <linearGradient id="ci6bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#FFF0F9"/>
        <stop offset="100%" stop-color="#FFE0F3"/>
      </linearGradient>
      <linearGradient id="ci6btn" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#F92596"/>
        <stop offset="100%" stop-color="#8E56FF"/>
      </linearGradient>
    </defs>
    <circle cx="140" cy="140" r="136" fill="url(#ci6bg)"/>
    <circle cx="140" cy="116" r="82" fill="none" stroke="#F92596" stroke-width="1.2" stroke-dasharray="5 5" opacity="0.2"/>
    <circle cx="140" cy="116" r="56" fill="none" stroke="#8E56FF" stroke-width="1" stroke-dasharray="4 6" opacity="0.18"/>
    <ellipse cx="50" cy="100" rx="22" ry="12" fill="white" opacity="0.75"/>
    <ellipse cx="218" cy="116" rx="20" ry="11" fill="white" opacity="0.6"/>
    <ellipse cx="88" cy="56" rx="16" ry="9" fill="white" opacity="0.55"/>
    <g transform="translate(196,58) rotate(32)">
      <path d="M0-22 L7 6 L0 1 L-7 6 Z" fill="#F92596"/>
      <path d="M-16 0 L16 0 L11 7 L-11 7 Z" fill="#F92596" opacity="0.7"/>
      <path d="M-6 7 L6 7 L5 13 L-5 13 Z" fill="#F92596" opacity="0.5"/>
    </g>
    <g transform="translate(96, 116)">
      <polygon points="44,0 88,18 44,36 0,18" fill="#24144F"/>
      <rect x="72" y="18" width="16" height="24" rx="2" fill="#24144F"/>
      <rect x="64" y="42" width="32" height="8" rx="4" fill="#6D53A3"/>
      <line x1="80" y1="18" x2="80" y2="0" stroke="#F8941F" stroke-width="2.2"/>
      <circle cx="80" cy="0" r="5" fill="#F8941F"/>
    </g>
    <rect x="38" y="140" width="8" height="8" rx="2" fill="#F92596" opacity="0.7" transform="rotate(20,42,144)"/>
    <rect x="220" y="90" width="7" height="7" rx="2" fill="#31B978" opacity="0.7" transform="rotate(-15,223,93)"/>
    <rect x="54" y="174" width="6" height="6" rx="1" fill="#39C0FA" opacity="0.7" transform="rotate(30,57,177)"/>
    <circle cx="224" cy="162" r="5" fill="#F8941F" opacity="0.6"/>
    <circle cx="30" cy="72" r="4" fill="#8E56FF" opacity="0.5"/>
    <rect x="52" y="210" width="176" height="38" rx="19" fill="url(#ci6btn)"/>
    <text x="140" y="234" text-anchor="middle" font-family="Poppins,sans-serif" font-size="13" font-weight="700" fill="white">You Made It! 🎓</text>
  </svg>`,
];

/* ─── STEP FEATURE BULLETS ───────────────────────────────────── */
const STEP_FEATURES = [
  ["AI-powered goal mapping", "Budget & timeline planning", "Personalised roadmap"],
  ["SOP & essay support", "Document checklist", "Deadline tracking"],
  ["IELTS-certified counselors", "1-on-1 video sessions", "Scholarship guidance"],
  ["8,500+ universities analyzed", "Real admission probability", "Instant smart shortlist"],
  ["End-to-end visa filing", "Pre-departure checklist", "Accommodation search"],
  ["Day-one campus orientation", "Global student community", "Alumni network access"],
];

/* ─── GEOMETRY ───────────────────────────────────────────────── */
const SZ = 500;
const CX = 250;
const CY = 250;
const TR = 188;
const IR = 128;
const START_ANG = 270;
const DOT_ANGS = [270, 330, 30, 90, 150, 210];

function toRad(d) { return d * Math.PI / 180; }
function ptOn(r, deg) {
  const a = toRad(deg);
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
}

function arcPath(r, fromDeg, toDeg, direction = 1) {
  let span;
  if (direction === 1) {
    span = toDeg - fromDeg;
    while (span < 0) span += 360;
  } else {
    span = fromDeg - toDeg;
    while (span < 0) span += 360;
  }
  if (span < 0.5) return "";
  if (span >= 359.9) {
    const top = ptOn(r, fromDeg);
    const bot = ptOn(r, fromDeg + 180);
    return `M${top.x.toFixed(2)} ${top.y.toFixed(2)} A${r} ${r} 0 1 1 ${bot.x.toFixed(2)} ${bot.y.toFixed(2)} A${r} ${r} 0 1 1 ${top.x.toFixed(2)} ${top.y.toFixed(2)}`;
  }
  const s = ptOn(r, fromDeg);
  const endDeg = direction === 1 ? fromDeg + span : fromDeg - span;
  const e = ptOn(r, endDeg);
  const lg = span > 180 ? 1 : 0;
  const sweep = direction === 1 ? 1 : 0;
  return `M${s.x.toFixed(2)} ${s.y.toFixed(2)} A${r} ${r} 0 ${lg} ${sweep} ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
}

function easeInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/* ─────────────────────────────────────────────────────────────
   MOBILE STEP CARD — with intersection-observer ref
───────────────────────────────────────────────────────────── */
function MobileStepCard({ step, index, feats, illus, isActive, isCompleted, cardRef }) {
  const iHref = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(illus)}`;
  const isLast = index === STEPS.length - 1;

  return (
    <div
      ref={cardRef}
      className={`mob-card ${isActive ? "mob-card--active" : ""} ${isCompleted ? "mob-card--done" : ""}`}
      style={{ "--step-color": step.color, "--step-light": step.light }}
      data-index={index}
    >
      {/* ── LEFT SPINE: badge + animated connector ── */}
      <div className="mob-spine">
        {/* Number badge */}
        <div className={`mob-badge ${isActive ? "mob-badge--active" : ""} ${isCompleted ? "mob-badge--done" : ""}`}>
          {isCompleted ? (
            /* checkmark svg */
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <span className="mob-badge-num">{step.num}</span>
          )}
          {/* pulse ring — only when active */}
          {isActive && <span className="mob-badge-pulse" />}
        </div>

        {/* Connector line — fills on scroll, hidden for last step */}
        {!isLast && (
          <div className="mob-line-track">
            <div
              className="mob-line-fill"
              style={{
                height: isCompleted ? "100%" : isActive ? "50%" : "0%",
                background: `linear-gradient(to bottom, ${step.color}, ${STEPS[index + 1]?.color ?? step.color})`,
              }}
            />
          </div>
        )}
      </div>

      {/* ── CARD BODY ── */}
      <div className="mob-body">

        {/* Illustration */}
        <div className="mob-illus-wrap">
          <img src={iHref} alt={step.title} className="mob-illus" />
          {/* Step label on illustration */}
          <div className="mob-illus-tag" style={{ background: step.color }}>
            Step {step.num}
          </div>
        </div>

        {/* Title */}
        <h3 className="mob-title">{step.title}</h3>

        {/* Description */}
        <p className="mob-desc">{step.desc}</p>

        {/* Feature bullets */}
        <div className="mob-feats">
          {feats.map((f, fi) => (
            <div className="mob-feat" key={fi}>
              <div className="mob-feat-dot" />
              <span className="mob-feat-txt">{f}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href="#" className="mob-btn">
          {step.btn}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ─── COMPONENT ──────────────────────────────────────────────── */
export default function HowItWorks() {
  /* ── DESKTOP state ── */
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);
  const [planeAngle, setPlaneAngle] = useState(START_ANG);
  const [filledUpTo, setFilledUpTo] = useState(-1);

  const planeRef = useRef(START_ANG);
  const filledRef = useRef(-1);
  const activeRef = useRef(0);
  const rafRef = useRef(null);
  const animIdRef = useRef(0);

  /* ── MOBILE state ── */
  const [mobActive, setMobActive] = useState(0);
  const [mobCompleted, setMobCompleted] = useState([]); // array of completed indices
  const cardRefs = useRef([]); // one ref per card

  /* ── MOBILE: IntersectionObserver ── */
  useEffect(() => {
    const isMobile = window.innerWidth <= 900;
    if (!isMobile) return;

    const observers = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setMobActive(i);
            // Mark all previous as completed
            setMobCompleted(
              Array.from({ length: i }, (_, k) => k)
            );
          }
        },
        {
          // Card is "active" when its top 40% is in the middle third of viewport
          rootMargin: "-30% 0px -50% 0px",
          threshold: 0,
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── DESKTOP: plane animation ── */
  const animatePlane = useCallback((targetDotIndex, direction, onArrive) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    animIdRef.current++;
    const myId = animIdRef.current;

    const targetAng = DOT_ANGS[targetDotIndex];
    const fromAng = ((planeRef.current % 360) + 360) % 360;
    const normTarget = ((targetAng % 360) + 360) % 360;

    let travelDist;
    if (direction === 1) {
      travelDist = normTarget - fromAng;
      while (travelDist <= 0) travelDist += 360;
    } else {
      travelDist = fromAng - normTarget;
      while (travelDist <= 0) travelDist += 360;
    }

    if (travelDist < 0.5) {
      planeRef.current = normTarget;
      setPlaneAngle(normTarget);
      onArrive && onArrive();
      return;
    }

    const duration = 220 + travelDist * 0.4;
    const t0 = performance.now();

    function tick(now) {
      if (animIdRef.current !== myId) return;
      const elapsed = now - t0;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOut(progress);
      const current = direction === 1
        ? fromAng + travelDist * eased
        : fromAng - travelDist * eased;
      const normalised = ((current % 360) + 360) % 360;
      planeRef.current = normalised;
      setPlaneAngle(normalised);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        planeRef.current = normTarget;
        setPlaneAngle(normTarget);
        onArrive && onArrive();
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  /* ── DESKTOP: scroll driver ── */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const N = STEPS.length;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const elH = el.offsetHeight;
      const winH = window.innerHeight;
      const scrollH = elH - winH;
      if (scrollH <= 0) return;

      const scrolled = Math.max(0, Math.min(-rect.top, scrollH));
      const ratio = scrolled / scrollH;
      const newActive = Math.min(Math.floor(ratio * N), N - 1);

      if (newActive === activeRef.current) return;
      const prev = activeRef.current;
      activeRef.current = newActive;
      setActive(newActive);

      if (newActive > prev) {
        animatePlane(newActive, 1, () => {
          filledRef.current = newActive;
          setFilledUpTo(newActive);
        });
      } else {
        filledRef.current = newActive - 1;
        setFilledUpTo(newActive - 1);
        animatePlane(newActive, -1, () => { });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animatePlane]);

  const planePt = ptOn(TR, planeAngle);
  const planeRot = planeAngle - 180;

  let arcSpan = planeAngle - START_ANG;
  while (arcSpan < 0) arcSpan += 360;
  const liveArcD = arcSpan > 0.5 ? arcPath(TR, START_ANG, START_ANG + arcSpan, 1) : "";

  const iHref = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(C_ILLUS[active])}`;
  const step = STEPS[active];
  const feats = STEP_FEATURES[active];

  const startDotPt = ptOn(TR, START_ANG);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .hiw-root *, .hiw-root *::before, .hiw-root *::after { box-sizing: border-box; }

        .hiw-root {
          font-family: 'Poppins', sans-serif;
          background: #fff;
          width: 100%;
        }

        /* ── HEADER ── */
        .hiw-hdr {
          text-align: center;
          padding: 96px 24px 64px;
          position: relative;
        }
        .hiw-hdr-bg {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,83,163,0.07) 0%, transparent 70%);
        }
        .hiw-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: #6D53A3;
          background: #F3EEFF;
          border: 1.5px solid rgba(109,83,163,0.2);
          padding: 7px 22px; border-radius: 50px; margin-bottom: 24px;
        }
        .hiw-eyebrow-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: linear-gradient(135deg,#31B978,#6D53A3);
        }
        .hiw-h2 {
          font-size: clamp(30px, 5vw, 56px); font-weight: 800;
          color: #181818; line-height: 1.08;
          letter-spacing: -1px; margin-bottom: 18px;
        }
        .hiw-h2 em {
          font-style: normal;
          background: linear-gradient(90deg,#31B978,#6D53A3);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hiw-sub {
          font-size: 16px; color: #808080;
          line-height: 1.8; max-width: 460px; margin: 0 auto;
        }

        /* ── DESKTOP SCROLL ── */
        .hiw-scroll { height: 600vh; width: 100%; position: relative; }
        .hiw-sticky {
          position: sticky; top: 0; height: 100vh; width: 100%;
          display: flex; align-items: stretch;
          background: #fff; overflow: hidden; z-index: 1;
        }
        .hiw-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          width: 100%; height: 100%;
        }

        /* ── LEFT ── */
        .hiw-left {
          display: flex; align-items: center; justify-content: center;
          padding: 40px 16px 40px 56px;
          background: #F0F4F5;
          position: relative; overflow: hidden;
        }
        .hiw-left-bg {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 70% 70% at 50% 50%, rgba(109,83,163,0.06) 0%, transparent 70%);
        }
        .hiw-cwrap {
          position: relative; z-index: 1;
          width: min(460px, calc(50vw - 72px));
          aspect-ratio: 1; flex-shrink: 0;
        }
        .hiw-svg { width: 100%; height: 100%; display: block; overflow: visible; }

        /* ── RIGHT ── */
        .hiw-right {
          display: flex; align-items: center;
          padding: 48px 72px 48px 52px;
          background: #fff;
          position: relative;
        }
        .hiw-right::before {
          content: '';
          position: absolute; left: 0; top: 10%; bottom: 10%;
          width: 3px; border-radius: 2px;
          background: linear-gradient(to bottom, transparent, #6D53A3, transparent);
          opacity: 0.18;
        }
        .hiw-content {
          width: 100%; max-width: 480px;
          display: flex; flex-direction: column; gap: 24px;
        }

        /* Progress bar */
        .hiw-prog-wrap { display: flex; flex-direction: column; gap: 8px; }
        .hiw-prog-label {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          color: #808080;
        }
        .hiw-prog-track {
          height: 5px; border-radius: 3px;
          background: #E5E5E5; overflow: hidden;
        }
        .hiw-prog-fill {
          height: 100%; border-radius: 3px;
          background: linear-gradient(90deg,#31B978,#6D53A3);
          transition: width 0.5s cubic-bezier(0.34,1.56,0.64,1);
        }

        /* Step number badge */
        .hiw-step-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px 6px 8px; border-radius: 50px; width: fit-content;
          background: #F3EEFF;
          border: 1.5px solid rgba(109,83,163,0.18);
        }
        .hiw-badge-num {
          width: 28px; height: 28px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(90deg,#31B978,#6D53A3);
          font-size: 11px; font-weight: 800; color: white;
        }
        .hiw-badge-step {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #6D53A3;
        }

        /* Icon + title row */
        .hiw-top { display: flex; align-items: flex-start; gap: 18px; }
        .hiw-icon-wrap {
          flex-shrink: 0;
          width: 64px; height: 64px; border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(109,83,163,0.22);
          transform: translateY(2px);
        }
        .hiw-title {
          font-size: clamp(22px, 2.4vw, 36px); font-weight: 800;
          color: #24144F;
          line-height: 1.12; margin: 0; letter-spacing: -0.5px;
        }
        .hiw-desc {
          font-size: 15px; color: #525151;
          line-height: 1.85; margin: 0;
        }

        /* Feature bullets */
        .hiw-feats { display: flex; flex-direction: column; gap: 10px; }
        .hiw-feat {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 16px; border-radius: 12px;
          background: #F0F4F5;
          border: 1px solid #E5E5E5;
        }
        .hiw-feat-dot {
          width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
        }
        .hiw-feat-txt {
          font-size: 13px; font-weight: 500;
          color: #181818;
        }

        /* CTA */
        .hiw-cta-row { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
        .hiw-btn {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px; font-weight: 700; color: #fff;
          background: linear-gradient(90deg,#31B978,#6D53A3);
          border: none; cursor: pointer; text-decoration: none;
          padding: 14px 28px; border-radius: 50px; width: fit-content;
          box-shadow: 0 8px 28px rgba(109,83,163,0.3);
          transition: all 0.3s ease;
        }
        .hiw-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(109,83,163,0.38); }
        .hiw-hint {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: #808080; font-weight: 500;
        }
        .hiw-arrow { animation: hiwBnc 1.8s ease-in-out infinite; display: inline-block; }
        @keyframes hiwBnc { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }

        /* ════════════════════════════════════════════════════════
           MOBILE — complete redesign
           ════════════════════════════════════════════════════════ */
        .hiw-mobile-section { display: none; }

        @media (max-width: 900px) {
          .hiw-scroll { display: none; }
          .hiw-mobile-section { display: block; }

          /* ── STICKY PROGRESS BAR at top ── */
          .mob-progress-bar-wrap {
            position: sticky;
            top: 0;
            z-index: 100;
            background: rgba(255,255,255,0.92);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid #EEEEEE;
            padding: 12px 20px 10px;
          }

          .mob-progress-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
          }

          .mob-progress-title {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #6D53A3;
          }

          .mob-progress-counter {
            font-size: 11px;
            font-weight: 700;
            color: #808080;
          }

          /* 6 segment dots */
          .mob-progress-dots {
            display: flex;
            gap: 5px;
            align-items: center;
          }

          .mob-prog-seg {
            flex: 1;
            height: 4px;
            border-radius: 2px;
            background: #E5E5E5;
            overflow: hidden;
            position: relative;
            transition: background 0.3s ease;
          }

          .mob-prog-seg--active {
            background: #E5E5E5;
          }

          .mob-prog-seg--done {
            background: transparent;
          }

          .mob-prog-seg-fill {
            position: absolute;
            inset: 0;
            border-radius: 2px;
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1);
          }

          .mob-prog-seg--done .mob-prog-seg-fill {
            transform: scaleX(1);
          }

          .mob-prog-seg--active .mob-prog-seg-fill {
            transform: scaleX(0.55);
            animation: mob-seg-pulse 2s ease-in-out infinite;
          }

          @keyframes mob-seg-pulse {
            0%, 100% { transform: scaleX(0.5); }
            50%       { transform: scaleX(0.65); }
          }

          /* ── CARDS CONTAINER ── */
          .mob-cards-wrap {
            padding: 32px 16px 48px;
            display: flex;
            flex-direction: column;
            gap: 0;
          }

          /* ── SINGLE CARD ── */
          .mob-card {
            display: grid;
            grid-template-columns: 52px 1fr;
            gap: 0 14px;
            position: relative;
          }

          /* ── SPINE (left column: badge + line) ── */
          .mob-spine {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 2px;
          }

          /* Badge */
          .mob-badge {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            position: relative;
            z-index: 2;
            background: white;
            border: 2px solid #E5E5E5;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .mob-badge--active {
            border-color: var(--step-color);
            background: var(--step-light);
            transform: scale(1.12);
            box-shadow: 0 0 0 6px color-mix(in srgb, var(--step-color) 12%, transparent),
                        0 8px 20px color-mix(in srgb, var(--step-color) 22%, transparent);
          }

          .mob-badge--done {
            background: var(--step-color);
            border-color: var(--step-color);
            transform: scale(1);
            box-shadow: 0 4px 12px color-mix(in srgb, var(--step-color) 28%, transparent);
          }

          .mob-badge-num {
            font-size: 13px;
            font-weight: 800;
            color: var(--step-color);
            font-family: 'Poppins', sans-serif;
            transition: color 0.3s ease;
          }

          .mob-badge--active .mob-badge-num {
            color: var(--step-color);
          }

          /* Pulse ring — animated only when active */
          .mob-badge-pulse {
            position: absolute;
            inset: -6px;
            border-radius: 50%;
            border: 2px solid var(--step-color);
            opacity: 0;
            animation: mob-pulse-ring 1.6s ease-out infinite;
          }

          @keyframes mob-pulse-ring {
            0%   { transform: scale(0.85); opacity: 0.7; }
            100% { transform: scale(1.4);  opacity: 0; }
          }

          /* Connector line track */
          .mob-line-track {
            flex: 1;
            width: 3px;
            border-radius: 2px;
            background: #EEEEEE;
            margin: 6px 0;
            overflow: hidden;
            position: relative;
            min-height: 60px;
          }

          /* Animated fill */
          .mob-line-fill {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            border-radius: 2px;
            transition: height 0.7s cubic-bezier(0.34, 1.2, 0.64, 1);
          }

          /* ── CARD BODY ── */
          .mob-body {
            background: white;
            border: 1.5px solid #EEEEEE;
            border-radius: 20px;
            padding: 18px;
            margin-bottom: 16px;
            transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
          }

          .mob-card--active .mob-body {
            border-color: var(--step-color);
            box-shadow:
              0 0 0 4px color-mix(in srgb, var(--step-color) 8%, transparent),
              0 12px 36px color-mix(in srgb, var(--step-color) 14%, transparent),
              0 4px 12px rgba(0,0,0,0.05);
            transform: translateX(2px);
          }

          .mob-card--done .mob-body {
            border-color: color-mix(in srgb, var(--step-color) 32%, transparent);
            background: color-mix(in srgb, var(--step-color) 2%, white);
          }

          /* Illustration */
          .mob-illus-wrap {
            width: 100%;
            height: 160px;
            border-radius: 14px;
            overflow: hidden;
            background: var(--step-light);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 14px;
            position: relative;
          }

          .mob-illus {
            width: 144px;
            height: 144px;
            object-fit: contain;
          }

          .mob-illus-tag {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 3px 10px;
            border-radius: 999px;
            font-size: 9.5px;
            font-weight: 700;
            color: white;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .mob-title {
            font-family: 'Poppins', sans-serif;
            font-size: 17px;
            font-weight: 800;
            line-height: 1.25;
            color: #24144F;
            margin: 0 0 8px;
          }

          .mob-desc {
            font-size: 13.5px;
            color: #525151;
            line-height: 1.75;
            margin: 0 0 14px;
          }

          /* Feature bullets */
          .mob-feats {
            display: flex;
            flex-direction: column;
            gap: 7px;
            margin-bottom: 16px;
          }

          .mob-feat {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 12px;
            border-radius: 10px;
            background: #F8F8FC;
            border: 1px solid #EEEEEE;
          }

          .mob-feat-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            flex-shrink: 0;
            background: var(--step-color);
          }

          .mob-feat-txt {
            font-size: 12.5px;
            font-weight: 500;
            color: #333;
          }

          /* CTA button */
          .mob-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            font-family: 'Poppins', sans-serif;
            font-size: 13px;
            font-weight: 700;
            color: white;
            background: linear-gradient(90deg, #31B978, #6D53A3);
            border: none;
            cursor: pointer;
            text-decoration: none;
            padding: 12px 22px;
            border-radius: 50px;
            box-shadow: 0 6px 20px rgba(109,83,163,0.28);
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .mob-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 28px rgba(109,83,163,0.36);
          }

          /* ── FINISH BANNER ── */
          .mob-finish-banner {
            margin: 8px 16px 0;
            padding: 24px 20px;
            border-radius: 22px;
            background: linear-gradient(135deg, #FFF0F9, #F0EAFF);
            border: 1.5px solid rgba(109,83,163,0.14);
            text-align: center;
            box-shadow: 0 8px 28px rgba(109,83,163,0.10);
          }

          .mob-finish-emoji {
            font-size: 36px;
            display: block;
            margin-bottom: 10px;
          }

          .mob-finish-txt {
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #6D53A3;
            line-height: 1.6;
            margin: 0;
          }
        }

        @media (min-width: 901px) {
          .hiw-mobile-section { display: none; }
        }

        @media (max-width: 600px) {
          .hiw-h2 { font-size: 26px; letter-spacing: -0.5px; }
          .hiw-hdr { padding: 64px 20px 40px; }
          .mob-cards-wrap { padding: 24px 12px 40px; }
        }
      `}</style>

      <div className="hiw-root">

        {/* ── HEADER ── */}
        <div className="hiw-hdr">
          <div className="hiw-hdr-bg" />
          <div className="hiw-eyebrow">
            <div className="hiw-eyebrow-dot" />
            Your Study Abroad Roadmap
          </div>
          <h2 className="hiw-h2">
            From <em>Dream</em> to Admit<br />in <em>6 Simple Steps</em>
          </h2>
          <p className="hiw-sub">
            Scroll through your complete journey — from setting goals to landing at your dream university abroad.
          </p>
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP: sticky scroll (UNCHANGED)
            ══════════════════════════════════════════ */}
        <div className="hiw-scroll" ref={scrollRef}>
          <div className="hiw-sticky">
            <div className="hiw-grid">

              {/* LEFT: circle */}
              <div className="hiw-left">
                <div className="hiw-left-bg" />
                <div className="hiw-cwrap">
                  <svg className="hiw-svg" viewBox={`0 0 ${SZ} ${SZ}`} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="hBg2" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(109,83,163,0.1)" />
                        <stop offset="100%" stopColor="rgba(109,83,163,0)" />
                      </radialGradient>
                      <linearGradient id="hArc2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#31B978" />
                        <stop offset="100%" stopColor="#6D53A3" />
                      </linearGradient>
                      <filter id="hDS2" x="-60%" y="-60%" width="220%" height="220%">
                        <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="rgba(36,20,79,0.28)" />
                      </filter>
                      <clipPath id="hIC2">
                        <circle cx={CX} cy={CY} r={IR - 1} />
                      </clipPath>
                    </defs>

                    <circle cx={CX} cy={CY} r={TR + 80} fill="url(#hBg2)" />
                    <circle cx={CX} cy={CY} r={TR + 14}
                      fill="none" stroke="rgba(109,83,163,0.07)" strokeWidth="1" />
                    <circle cx={CX} cy={CY} r={TR + 3} fill="rgba(255,255,255,0.6)" opacity="0.8" />
                    <circle cx={CX} cy={CY} r={TR}
                      fill="none" stroke="#D8DFF0"
                      strokeWidth="2.5" strokeDasharray="10 7" />

                    {liveArcD && (
                      <>
                        <path d={liveArcD} fill="none"
                          stroke="rgba(109,83,163,0.2)" strokeWidth="10" strokeLinecap="round" />
                        <path d={liveArcD} fill="none"
                          stroke="url(#hArc2)" strokeWidth="4" strokeLinecap="round" />
                      </>
                    )}

                    <circle cx={CX} cy={CY} r={IR + 8}
                      fill="none" stroke="rgba(109,83,163,0.08)" strokeWidth="8" />
                    <circle cx={CX} cy={CY} r={IR} fill="white" />
                    <circle cx={CX} cy={CY} r={IR}
                      fill="none" stroke="#E8EAF6" strokeWidth="2" />

                    <image
                      href={iHref}
                      x={CX - IR + 6}
                      y={CY - IR + 6}
                      width={(IR - 6) * 2}
                      height={(IR - 6) * 2}
                      clipPath="url(#hIC2)"
                      preserveAspectRatio="xMidYMid meet"
                    />

                    <g>
                      <circle cx={startDotPt.x} cy={startDotPt.y} r={18}
                        fill="none" stroke="rgba(49,185,120,0.3)" strokeWidth="2" />
                      <circle cx={startDotPt.x} cy={startDotPt.y} r={10}
                        fill="url(#hArc2)"
                        opacity={active === 0 ? 0 : 0.85}
                        style={{ transition: "opacity 0.3s" }} />
                      <text x={startDotPt.x} y={startDotPt.y - 26}
                        textAnchor="middle" dominantBaseline="central"
                        fontSize="9" fontWeight="700" fontFamily="Poppins,sans-serif"
                        fill="#6D53A3" opacity="0.5" letterSpacing="1.5">
                        START
                      </text>
                    </g>

                    {DOT_ANGS.map((ang, i) => {
                      const p = ptOn(TR, ang);
                      const isFilled = i <= filledUpTo;
                      const isActive = i === active;
                      const dotR = isActive ? 30 : 24;
                      const stepColor = STEPS[i].color;

                      return (
                        <g key={i}>
                          {isActive && (
                            <>
                              <circle cx={p.x} cy={p.y} r={dotR + 20}
                                fill="none"
                                stroke={isFilled ? `${stepColor}18` : `${stepColor}14`}
                                strokeWidth="1.5" />
                              <circle cx={p.x} cy={p.y} r={dotR + 10}
                                fill="none"
                                stroke={isFilled ? `${stepColor}22` : `${stepColor}18`}
                                strokeWidth="2" />
                            </>
                          )}
                          <circle
                            cx={p.x} cy={p.y} r={dotR}
                            fill={isFilled ? "#24144F" : isActive ? STEPS[i].light : "white"}
                            stroke={isFilled ? "none" : isActive ? stepColor : "#D0D8EF"}
                            strokeWidth={isActive && !isFilled ? "2.5" : "2"}
                            filter={isActive ? "url(#hDS2)" : undefined}
                          />
                          <text
                            x={p.x} y={p.y}
                            textAnchor="middle" dominantBaseline="central"
                            fontSize={isActive ? "12" : "11"} fontWeight="800"
                            fontFamily="Poppins,sans-serif"
                            fill={isFilled ? "#fff" : isActive ? stepColor : "#9AAABB"}
                          >
                            {STEPS[i].num}
                          </text>
                        </g>
                      );
                    })}

                    <g transform={`translate(${planePt.x},${planePt.y}) rotate(${planeRot})`}>
                      <circle r="22" fill="rgba(36,20,79,0.12)" transform="translate(2,3)" />
                      <circle r="20" fill="white"
                        style={{ filter: "drop-shadow(0 2px 6px rgba(36,20,79,0.2))" }} />
                      <circle r="20" fill="none"
                        stroke="url(#hArc2)" strokeWidth="2" opacity="0.5" />
                      <g transform="translate(-10,-10)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                            fill="#24144F"
                          />
                        </svg>
                      </g>
                    </g>

                  </svg>
                </div>
              </div>

              {/* RIGHT: content */}
              <div className="hiw-right">
                <div className="hiw-content">

                  <div className="hiw-prog-wrap">
                    <div className="hiw-prog-label">
                      <span>Your Journey</span>
                      <span>{active + 1} / {STEPS.length}</span>
                    </div>
                    <div className="hiw-prog-track">
                      <div className="hiw-prog-fill"
                        style={{ width: `${((active + 1) / STEPS.length) * 100}%` }} />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div key={`badge${active}`}
                      initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 16 }} transition={{ duration: 0.25 }}>
                      <div className="hiw-step-badge">
                        <div className="hiw-badge-num">{step.num}</div>
                        <span className="hiw-badge-step">Step {active + 1} of {STEPS.length}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div key={`top${active}`} className="hiw-top"
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                      <div className="hiw-icon-wrap"
                        dangerouslySetInnerHTML={{
                          __html: `<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                          <defs><linearGradient id="rig${active}" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stop-color="${STEPS[active].color}" stop-opacity="0.2"/>
                            <stop offset="100%" stop-color="${STEPS[active].color}" stop-opacity="0.05"/>
                          </linearGradient></defs>
                          <rect width="72" height="72" rx="18" fill="url(#rig${active})"/>
                          <image href="${iHref}" x="4" y="4" width="64" height="64"/>
                        </svg>` }}
                      />
                      <h3 className="hiw-title">{step.title}</h3>
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p key={`desc${active}`} className="hiw-desc"
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }} transition={{ duration: 0.28, delay: 0.04 }}>
                      {step.desc}
                    </motion.p>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div key={`feats${active}`} className="hiw-feats"
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }} transition={{ duration: 0.28, delay: 0.08 }}>
                      {feats.map((f, fi) => (
                        <motion.div key={fi} className="hiw-feat"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + fi * 0.05 }}>
                          <div className="hiw-feat-dot" style={{ background: step.color }} />
                          <span className="hiw-feat-txt">{f}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.div key={`cta${active}`} className="hiw-cta-row"
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }} transition={{ duration: 0.25, delay: 0.12 }}>
                      <a href="#" className="hiw-btn">
                        {step.btn}
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                      <div className="hiw-hint">
                        <span className="hiw-arrow">↓</span>
                        <span>
                          {active < STEPS.length - 1
                            ? "Scroll to continue"
                            : "Journey complete! 🎉"}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE: scroll-driven card stack
            ══════════════════════════════════════════ */}
        <div className="hiw-mobile-section">

          {/* Sticky progress bar */}
          <div className="mob-progress-bar-wrap">
            <div className="mob-progress-header">
              <span className="mob-progress-title">Your Journey</span>
              <span className="mob-progress-counter">
                {mobActive + 1} / {STEPS.length}
              </span>
            </div>
            <div className="mob-progress-dots">
              {STEPS.map((s, i) => {
                const isDone = mobCompleted.includes(i);
                const isAct = i === mobActive;
                return (
                  <div
                    key={i}
                    className={`mob-prog-seg ${isAct ? "mob-prog-seg--active" : ""} ${isDone ? "mob-prog-seg--done" : ""}`}
                  >
                    <div
                      className="mob-prog-seg-fill"
                      style={{
                        background: `linear-gradient(90deg, ${s.color}, ${STEPS[Math.min(i + 1, STEPS.length - 1)].color})`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card stack */}
          <div className="mob-cards-wrap">
            {STEPS.map((s, i) => (
              <MobileStepCard
                key={i}
                step={s}
                index={i}
                feats={STEP_FEATURES[i]}
                illus={C_ILLUS[i]}
                isActive={mobActive === i}
                isCompleted={mobCompleted.includes(i)}
                cardRef={(el) => { cardRefs.current[i] = el; }}
              />
            ))}
          </div>

          {/* Finish banner */}
          <div className="mob-finish-banner">
            <span className="mob-finish-emoji">🎓</span>
            <p className="mob-finish-txt">
              Thousands of students have taken this exact journey.<br />
              <strong>Your turn starts today.</strong>
            </p>
          </div>

        </div>

      </div>
    </>
  );
}