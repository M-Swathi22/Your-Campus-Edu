// src/components/home/CountrySelector.jsx

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================
   IMAGES
========================================= */

import uzbekistanImg from "../../assets/images/countries/uzbekistan.png";
import georgiaImg from "../../assets/images/countries/georgia.png";
import russiaImg from "../../assets/images/countries/russia.png";
import usaImg from "../../assets/images/countries/usa.png";
import tajikistanImg from "../../assets/images/countries/tajikistan.png";
import ukImg from "../../assets/images/countries/uk.png";

/* =========================================
   DATA
========================================= */

const COUNTRIES = [
  {
    id: "uzbekistan",
    name: "Uzbekistan",
    universities: "85+",
    tag: "Affordable MBBS",
    tagIcon: "🏥",
    desc: "Affordable MBBS universities with modern campuses and growing international recognition.",
    img: uzbekistanImg,
    number: "01",
  },
  {
    id: "georgia",
    name: "Georgia",
    universities: "70+",
    tag: "European Education",
    tagIcon: "🎓",
    desc: "European-standard education with globally recognised English programs and a safe environment.",
    img: georgiaImg,
    number: "02",
  },
  {
    id: "russia",
    name: "Russia",
    universities: "120+",
    tag: "Top Medical Hub",
    tagIcon: "🩺",
    desc: "Trusted MBBS destination with advanced medical training and strong global recognition.",
    img: russiaImg,
    number: "03",
  },
  {
    id: "usa",
    name: "United States",
    universities: "4000+",
    tag: "Top Ranked",
    tagIcon: "🇺🇸",
    desc: "Home to elite institutions, innovation hubs and world-class career opportunities.",
    img: usaImg,
    number: "04",
  },
  {
    id: "tajikistan",
    name: "Tajikistan",
    universities: "40+",
    tag: "Budget Friendly",
    tagIcon: "💰",
    desc: "Affordable MBBS programs with simple admissions — an emerging destination for international students.",
    img: tajikistanImg,
    number: "05",
  },
  {
    id: "uk",
    name: "United Kingdom",
    universities: "350+",
    tag: "Russell Group",
    tagIcon: "🏛️",
    desc: "Oxford, Cambridge & globally respected universities with premium education and strong career outcomes.",
    img: ukImg,
    number: "06",
  },
];

/* =========================================
   STYLES
========================================= */

const S = {
  section: {
    position: "relative",
    overflowX: "hidden",
    overflowY: "visible",
    padding: "70px 0",
    background: "linear-gradient(180deg, #ffffff 0%, #f7f8fc 100%)",
    fontFamily: "var(--font-main)",
  },

  inner: {
    maxWidth: 1380,
    margin: "0 auto",
    padding: "0 22px",
    position: "relative",
    zIndex: 2,
  },

  topRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 22,
  },

  topBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "13px 22px",
    borderRadius: 999,
    background: "var(--gradient-primary)",
    color: "#fff",
    textDecoration: "none",
    fontSize: 12,
    fontWeight: 700,
    boxShadow: "0 10px 24px rgba(109,83,163,0.16)",
    transition: "var(--transition)",
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 24,
    flexWrap: "wrap",
    marginBottom: 38,
  },

  left: {
    flex: "1 1 580px",
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "7px 14px",
    borderRadius: 999,
    background: "rgba(109,83,163,0.08)",
    border: "1px solid rgba(109,83,163,0.12)",
    marginBottom: 16,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "var(--primary)",
  },

  eyebrowText: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--primary)",
  },

  heading: {
    margin: 0,
    fontSize: "clamp(32px, 6vw, 62px)",
    lineHeight: 1.05,
    fontWeight: 800,
    letterSpacing: "-0.05em",
    color: "var(--text-dark)",
  },

  headingAccent: {
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subheading: {
    marginTop: 16,
    maxWidth: 620,
    fontSize: 15,
    lineHeight: 1.8,
    color: "var(--text-medium)",
  },

  stats: {
    display: "flex",
    alignItems: "center",
    gap: 22,
  },

  statBlock: {
    textAlign: "center",
  },

  statNum: {
    display: "block",
    fontSize: 30,
    fontWeight: 800,
    color: "var(--primary)",
  },

  statLabel: {
    display: "block",
    marginTop: 4,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--text-light)",
  },

  statDivider: {
    width: 1,
    height: 34,
    background: "rgba(0,0,0,0.10)",
  },

  sliderOuter: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "relative",
    borderRadius: 34,
    padding: "8px 0",
  },

  sliderTrack: {
    display: "flex",
    gap: 22,
    width: "fit-content",
  },

  /* ================= CARD ================= */

  card: (hovered) => ({
    position: "relative",
    width: 285,
    minWidth: 285,
    height: 410,
    overflow: "hidden",
    borderRadius: 26,
    background: "#111822",
    cursor: "pointer",
    flexShrink: 0,
    boxShadow: hovered
      ? "0 22px 50px rgba(36,20,79,0.22)"
      : "0 8px 24px rgba(0,0,0,0.08)",
    transition: "all 0.35s ease",
  }),

  image: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
  },

  /* Darker overlay on hover to make text readable */
  overlay: (hovered) => ({
    position: "absolute",
    inset: 0,
    background: hovered
      ? "linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.20) 100%)"
      : "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.40) 55%, rgba(0,0,0,0.06) 100%)",
    transition: "background 0.4s ease",
  }),

  number: {
    position: "absolute",
    top: 18,
    right: 18,
    fontSize: 12,
    fontWeight: 700,
    color: "rgba(255,255,255,0.78)",
    zIndex: 2,
  },

  tagWrap: {
    position: "absolute",
    top: 18,
    left: 18,
    zIndex: 2,
  },

  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 999,
    background: "linear-gradient(135deg, rgba(49,185,120,0.96), rgba(109,83,163,0.96))",
    color: "#fff",
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  cardBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "0 22px 22px",
    zIndex: 2,
  },

  uniRow: {
    display: "flex",
    alignItems: "baseline",
    gap: 5,
    marginBottom: 10,
  },

  uniNum: {
    fontSize: 14,
    fontWeight: 800,
    color: "#fff",
  },

  uniLabel: {
    fontSize: 11,
    color: "rgba(255,255,255,0.68)",
  },

  countryName: {
    margin: 0,
    fontSize: 31,
    lineHeight: 1.05,
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "-0.04em",
  },

  /* Description — only visible on hover */
  desc: {
    marginTop: 12,
    fontSize: 13,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.85)",
  },

  divider: (hovered) => ({
    width: hovered ? "100%" : 36,
    height: 2,
    borderRadius: 999,
    marginTop: 16,
    background: "var(--gradient-primary)",
    transition: "width 0.35s cubic-bezier(0.22,1,0.36,1)",
  }),

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },

  exploreText: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#fff",
  },

  arrowBtn: (hovered) => ({
    width: 46,
    height: 46,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: hovered ? "var(--gradient-primary)" : "rgba(255,255,255,0.08)",
    border: hovered ? "1px solid transparent" : "1px solid rgba(255,255,255,0.16)",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  }),

  /* ================= CTA ================= */

  ctaWrap: {
    marginTop: 38,
    display: "flex",
    justifyContent: "center",
  },

  ctaCard: {
    width: "100%",
    maxWidth: 760,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    padding: "20px 24px",
    borderRadius: 24,
    background: "#fff",
    border: "1px solid rgba(109,83,163,0.10)",
    boxShadow: "0 10px 30px rgba(36,20,79,0.06)",
    flexWrap: "wrap",
  },

  ctaTextWrap: {
    flex: 1,
  },

  ctaTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: 700,
    color: "var(--text-dark)",
  },

  ctaSub: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 1.7,
    color: "var(--text-medium)",
  },

  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 24px",
    borderRadius: 999,
    background: "var(--gradient-secondary)",
    color: "#fff",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 700,
    whiteSpace: "nowrap",
    boxShadow: "0 10px 24px rgba(36,20,79,0.16)",
  },
};

/* =========================================
   ICON
========================================= */

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#fff"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

/* =========================================
   CARD
========================================= */

function CountryCard({ country, onClick, onHoverChange }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    onHoverChange(false);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ y: hovered ? -8 : 0 }}
      transition={{ duration: 0.35 }}
      style={S.card(hovered)}
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={country.img}
        alt={country.name}
        style={{
          ...S.image,
          transform: hovered ? "scale(1.07)" : "scale(1.02)",
        }}
      />

      {/* Overlay — darkens more on hover */}
      <div style={S.overlay(hovered)} />

      {/* Number badge */}
      <div style={S.number}>{country.number}</div>

      {/* Tag badge */}
      <div style={S.tagWrap}>
        <div style={S.tag}>
          <span>{country.tagIcon}</span>
          {country.tag}
        </div>
      </div>

      {/* Bottom content */}
      <div style={S.cardBottom}>

        {/* University count */}
        <div style={S.uniRow}>
          <span style={S.uniNum}>{country.universities}</span>
          <span style={S.uniLabel}>Universities</span>
        </div>

        {/* Country name */}
        <h3 style={S.countryName}>{country.name}</h3>

        {/* Description — only on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.p
              key="desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.28 }}
              style={S.desc}
            >
              {country.desc}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Divider */}
        <div style={S.divider(hovered)} />

        {/* Footer row — only on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="footer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              style={S.footer}
            >
              <span style={S.exploreText}>Explore Universities</span>
              <div style={S.arrowBtn(hovered)}>
                <ArrowIcon />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

function CountrySelector() {
  const navigate = useNavigate();
  const [duplicatedCountries, setDuplicatedCountries] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setDuplicatedCountries([...COUNTRIES, ...COUNTRIES]);
  }, []);

  return (
    <section style={S.section}>
      <div style={S.inner}>

        {/* TOP BUTTON */}
        <div style={S.topRow}>
          <motion.a
            href="/study-abroad"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={S.topBtn}
          >
            Explore Global Destinations
            <ArrowIcon />
          </motion.a>
        </div>

        {/* HEADER */}
        <div style={S.headerRow}>
          <div style={S.left}>
            <div style={S.eyebrow}>
              <span style={S.dot} />
              <span style={S.eyebrowText}>Global Education Destinations</span>
            </div>

            <h2 style={S.heading}>
              Choose Your{" "}
              <span style={S.headingAccent}>Dream Country</span>
            </h2>

            <p style={S.subheading}>
              Explore globally recognised destinations with affordable tuition,
              top-ranked universities and global career opportunities.
            </p>
          </div>

          <div style={S.stats}>
            <div style={S.statBlock}>
              <span style={S.statNum}>5000+</span>
              <span style={S.statLabel}>Universities</span>
            </div>
            <div style={S.statDivider} />
            <div style={S.statBlock}>
              <span style={S.statNum}>6</span>
              <span style={S.statLabel}>Countries</span>
            </div>
            <div style={S.statDivider} />
            <div style={S.statBlock}>
              <span style={S.statNum}>100+</span>
              <span style={S.statLabel}>Courses</span>
            </div>
          </div>
        </div>

        {/* AUTO SLIDER — pauses when any card is hovered */}
        <div style={S.sliderOuter}>
          <motion.div
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={
              isPaused
                ? { duration: 0 }
                : { repeat: Infinity, duration: 22, ease: "linear" }
            }
            style={S.sliderTrack}
          >
            {duplicatedCountries.map((country, index) => (
              <CountryCard
                key={`${country.id}-${index}`}
                country={country}
                onHoverChange={(val) => setIsPaused(val)}
                onClick={() => navigate(`/study-abroad/${country.id}`)}
              />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div style={S.ctaWrap}>
          <div style={S.ctaCard}>
            <div style={S.ctaTextWrap}>
              <h3 style={S.ctaTitle}>Need Help Choosing The Right Country?</h3>
              <p style={S.ctaSub}>
                Our expert counsellors guide you based on your budget, career
                goals and preferred universities.
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              style={S.ctaBtn}
            >
              Get Free Counselling
              <ArrowIcon />
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CountrySelector;