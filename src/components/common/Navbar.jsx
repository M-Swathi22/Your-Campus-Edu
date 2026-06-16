import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu, X, ChevronDown, UserPlus, Sparkles,
  Target, CheckCircle, Wallet, BarChart2, Globe,
  ArrowRight, Zap,
} from "lucide-react";
import logo from "../../assets/images/logo.png";

/* =========================================
   DATA
========================================= */

const AI_ROUTES = [
  "/ai-tools", "/ai-course-match", "/eligibility-checker",
  "/budget-calculator", "/compare-colleges", "/country-fit-quiz",
];

const NAV_LINKS = [
  { to: "/",          label: "Home",    exact: true },
  { to: "/about",     label: "About"               },
  { to: "/courses",   label: "Courses"             },
  { to: "/countries", label: "Countries"           },
];

// AI sub-tools only (no /ai-tools page link here — handled separately)
const AI_ITEMS = [
  { to: "/ai-course-match",            label: "AICourseMatch",            desc: "Find your ideal university",       Icon: Target,      accent: "#31B978", bg: "rgba(49,185,120,0.12)",  num: "01" },
  { to: "/eligibility-checker", label: "Eligibility Checker", desc: "Check your admission chances",     Icon: CheckCircle, accent: "#6D53A3", bg: "rgba(109,83,163,0.12)", num: "02" },
  { to: "/budget-calculator",   label: "Budget Calculator",   desc: "Plan your education finances",     Icon: Wallet,      accent: "#F8941F", bg: "rgba(248,148,31,0.12)", num: "03" },
  { to: "/compare-colleges",    label: "Compare Colleges",    desc: "Side-by-side university analysis", Icon: BarChart2,   accent: "#39C0FA", bg: "rgba(57,192,250,0.12)", num: "04" },
  { to: "/country-fit-quiz",    label: "Country Fit Quiz",    desc: "Discover your best study country", Icon: Globe,       accent: "#F92596", bg: "rgba(249,37,150,0.12)", num: "05" },
];

function getActiveLink(pathname) {
  if (AI_ROUTES.includes(pathname)) return "__ai__";
  const match = [...NAV_LINKS, { to: "/contact" }].find((item) =>
    item.exact ? pathname === item.to : pathname.startsWith(item.to)
  );
  return match ? match.to : null;
}

/* =========================================
   STYLES
========================================= */

const styles = `
  /* ─── RESET ──────────────────────────────── */
  .nb * { box-sizing: border-box; }

  /* ─── HEADER SHELL ───────────────────────── */
  .nb {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;
    background: rgba(255,255,255,0.82);
    backdrop-filter: blur(28px) saturate(180%);
    -webkit-backdrop-filter: blur(28px) saturate(180%);
    border-bottom: 1px solid rgba(109,83,163,0.08);
    transition: background 0.35s ease, box-shadow 0.35s ease;
  }
  .nb.scrolled {
    background: rgba(255,255,255,0.97);
    box-shadow: 0 1px 0 rgba(109,83,163,0.06), 0 4px 32px rgba(36,20,79,0.06);
  }

  /* ─── INNER ─────────────────────────────── */
  .nb__inner {
    max-width: 1320px;
    margin: auto;
    height: 74px;
    padding: 0 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  /* ─── LOGO ──────────────────────────────── */
  .nb__logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
  }
  .nb__logoWrap {
    position: relative;
    width: 78px;
    height: 78px;
    border-radius: 20px;
    background: var(--gradient-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(109,83,163,0.30);
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
    overflow: hidden;
  }
  .nb__logoWrap::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(140deg, rgba(255,255,255,0.22) 0%, transparent 55%);
    pointer-events: none;
    z-index: 1;
    border-radius: 20px;
  }
  .nb__logoRing {
    position: absolute;
    inset: -3px;
    border-radius: 23px;
    background: conic-gradient(from 0deg, #31B978 0%, #6D53A3 45%, #39C0FA 75%, #31B978 100%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: nbSpin 3.5s linear infinite paused;
  }
  @keyframes nbSpin { to { transform: rotate(360deg); } }
  .nb__logo:hover .nb__logoRing { opacity: 1; animation-play-state: running; }
  .nb__logo:hover .nb__logoWrap {
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 10px 36px rgba(109,83,163,0.38);
  }
  .nb__logoImg {
    height: 58px;
    width: auto;
    object-fit: contain;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.15));
  }

  /* ─── DESKTOP NAV ────────────────────────── */
  .nb__desktop {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
  }

  /* ─── NAV LINK ───────────────────────────── */
  .nb__link {
    position: relative;
    padding: 8px 15px;
    border-radius: 10px;
    font-size: 13.5px;
    font-weight: 600;
    color: var(--text-medium);
    text-decoration: none;
    font-family: var(--font-main);
    white-space: nowrap;
    letter-spacing: 0.05px;
    isolation: isolate;
    transition: color 0.2s ease;
  }
  .nb__link::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: var(--primary-light);
    transform: scale(0.85);
    opacity: 0;
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease;
    z-index: -1;
  }
  .nb__link:hover::before, .nb__link.active::before {
    transform: scale(1);
    opacity: 1;
  }
  .nb__link:hover, .nb__link.active { color: var(--primary); }
  .nb__link::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 18px;
    height: 2px;
    border-radius: 99px;
    background: var(--gradient-primary);
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
    transform-origin: center;
  }
  .nb__link.active::after { transform: translateX(-50%) scaleX(1); }
  .nb__link:hover::after  { transform: translateX(-50%) scaleX(1); }

  /* ─── SEPARATOR ──────────────────────────── */
  .nb__sep {
    width: 1px;
    height: 18px;
    background: linear-gradient(to bottom, transparent, rgba(109,83,163,0.15), transparent);
    margin: 0 6px;
    flex-shrink: 0;
  }

  /* ─── AI TRIGGER ─────────────────────────── */
  .nb__aiWrap { position: relative; }

  .nb__aiBtn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 15px;
    border-radius: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 13.5px;
    font-weight: 600;
    color: var(--text-medium);
    font-family: var(--font-main);
    white-space: nowrap;
    letter-spacing: 0.05px;
    isolation: isolate;
    transition: color 0.2s ease;
  }
  .nb__aiBtn::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background: var(--primary-light);
    transform: scale(0.85);
    opacity: 0;
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease;
    z-index: -1;
  }
  .nb__aiBtn:hover::before, .nb__aiBtn.active::before {
    transform: scale(1);
    opacity: 1;
  }
  .nb__aiBtn:hover, .nb__aiBtn.active { color: var(--primary); }
  .nb__aiBtn::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 18px;
    height: 2px;
    border-radius: 99px;
    background: var(--gradient-primary);
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
    transform-origin: center;
  }
  .nb__aiBtn.active::after, .nb__aiBtn:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  .nb__badge {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 7px;
    border-radius: 99px;
    background: var(--gradient-primary);
    color: #fff;
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1.6;
    position: relative;
    z-index: 1;
    box-shadow: 0 2px 8px rgba(49,185,120,0.3);
  }
  .nb__chevron {
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
    flex-shrink: 0;
    color: var(--text-light);
    position: relative;
    z-index: 1;
  }
  .nb__chevron.open { transform: rotate(180deg); }

  /* ─── DROPDOWN ───────────────────────────── */
  .nb__dropdown {
    position: absolute;
    top: calc(100% + 14px);
    left: 50%;
    width: 380px;
    background: #fff;
    border: 1px solid rgba(109,83,163,0.09);
    border-radius: 22px;
    padding: 10px;
    box-shadow:
      0 0 0 1px rgba(109,83,163,0.04),
      0 8px 20px rgba(36,20,79,0.07),
      0 24px 56px rgba(36,20,79,0.11);
    transform-origin: top center;
    animation: nbDropIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both;
  }
  @keyframes nbDropIn {
    from { opacity: 0; transform: translateX(-50%) translateY(-10px) scale(0.95); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0)      scale(1);    }
  }

  /* dropdown header strip */
  .nb__ddHead {
    display: flex;
    align-items: center;
    padding: 8px 10px 10px;
    margin-bottom: 4px;
  }
  .nb__ddHeadLeft {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nb__ddHeadIcon {
    width: 30px;
    height: 30px;
    border-radius: 9px;
    background: var(--gradient-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .nb__ddHeadTitle {
    font-size: 12.5px;
    font-weight: 700;
    color: var(--text-dark);
    font-family: var(--font-main);
    letter-spacing: -0.1px;
  }
  .nb__ddHeadSub {
    font-size: 10px;
    color: var(--text-light);
    font-family: var(--font-main);
  }

  .nb__ddDivider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(109,83,163,0.08), transparent);
    margin: 0 4px 8px;
  }

  /* ── ITEMS ──────────────────────────────── */
  .nb__ddList { display: flex; flex-direction: column; gap: 2px; }

  .nb__ddItem {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 14px;
    text-decoration: none;
    overflow: hidden;
    isolation: isolate;
    transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
    cursor: pointer;
  }
  .nb__ddItem::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 14px;
    background: var(--primary-light);
    transform: translateX(-105%);
    transition: transform 0.32s cubic-bezier(0.77,0,0.18,1);
    z-index: -1;
  }
  .nb__ddItem:hover::before { transform: translateX(0); }
  .nb__ddItem.active::before { transform: translateX(0); background: rgba(109,83,163,0.10); }

  /* left accent bar */
  .nb__ddItem::after {
    content: '';
    position: absolute;
    left: 0;
    top: 22%;
    bottom: 22%;
    width: 2.5px;
    border-radius: 99px;
    background: var(--item-accent, var(--primary));
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1) 0.04s;
    z-index: 1;
  }
  .nb__ddItem:hover::after  { transform: scaleY(1); }
  .nb__ddItem.active::after { transform: scaleY(1); }
  .nb__ddItem:hover { transform: translateX(4px); }

  /* icon box */
  .nb__ddIconBox {
    width: 38px;
    height: 38px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.22s ease;
  }
  .nb__ddItem:hover .nb__ddIconBox {
    transform: rotate(-7deg) scale(1.1);
    box-shadow: 0 4px 14px rgba(0,0,0,0.12);
  }

  .nb__ddContent {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    z-index: 1;
    min-width: 0;
  }
  .nb__ddLabel {
    font-size: 13px;
    font-weight: 700;
    color: var(--text-dark);
    font-family: var(--font-main);
    line-height: 1.3;
    transition: color 0.18s ease;
  }
  .nb__ddItem:hover .nb__ddLabel,
  .nb__ddItem.active .nb__ddLabel { color: var(--primary); }
  .nb__ddDesc {
    font-size: 11px;
    color: var(--text-light);
    font-family: var(--font-main);
    margin-top: 1px;
    line-height: 1.35;
  }

  /* arrow — straight, slides in on hover (no diagonal rotation) */
  .nb__ddArrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 8px;
    background: transparent;
    color: rgba(109,83,163,0.2);
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 0.2s ease, transform 0.24s cubic-bezier(0.34,1.56,0.64,1), background 0.2s ease, color 0.2s ease;
  }
  .nb__ddItem:hover .nb__ddArrow {
    opacity: 1;
    transform: translateX(0);
    background: rgba(109,83,163,0.09);
    color: var(--primary);
  }

  /* ── DROPDOWN FOOTER ─────────────────────── */
  .nb__ddFooter {
    margin-top: 10px;
    padding: 10px 12px;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(109,83,163,0.06) 0%, rgba(49,185,120,0.06) 100%);
    border: 1px solid rgba(109,83,163,0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.24s ease;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }
  .nb__ddFooter::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-secondary);
    opacity: 0;
    transition: opacity 0.28s ease;
    z-index: -1;
    border-radius: 14px;
  }
  .nb__ddFooter:hover::before { opacity: 1; }
  .nb__ddFooterLeft {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .nb__ddFooterIcon {
    width: 32px; height: 32px;
    border-radius: 9px;
    background: var(--gradient-secondary);
    display: flex; align-items: center; justify-content: center;
    color: #fff;
    flex-shrink: 0;
    transition: background 0.24s ease;
  }
  .nb__ddFooter:hover .nb__ddFooterIcon { background: rgba(255,255,255,0.20); }
  .nb__ddFooterTitle {
    font-size: 12.5px;
    font-weight: 700;
    color: var(--text-dark);
    font-family: var(--font-main);
    transition: color 0.2s ease;
  }
  .nb__ddFooterSub {
    font-size: 10px;
    color: var(--text-light);
    font-family: var(--font-main);
    margin-top: 1px;
    display: block;
    transition: color 0.2s ease;
  }
  .nb__ddFooter:hover .nb__ddFooterTitle,
  .nb__ddFooter:hover .nb__ddFooterSub { color: #fff; }
  .nb__ddFooterBtn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 14px;
    border-radius: 8px;
    background: var(--gradient-secondary);
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    font-family: var(--font-main);
    white-space: nowrap;
    border: none;
    pointer-events: none;
    flex-shrink: 0;
    transition: background 0.24s ease;
  }
  .nb__ddFooter:hover .nb__ddFooterBtn {
    background: rgba(255,255,255,0.22);
  }

  /* ─── ACTIONS ────────────────────────────── */
  .nb__actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .nb__enquire {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 9px 18px;
    border-radius: 11px;
    font-size: 13px;
    font-weight: 600;
    color: var(--primary);
    background: var(--primary-light);
    border: 1.5px solid rgba(109,83,163,0.12);
    text-decoration: none;
    font-family: var(--font-main);
    white-space: nowrap;
    isolation: isolate;
    position: relative;
    overflow: hidden;
    transition: color 0.25s ease, border-color 0.25s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease;
  }
  .nb__enquire::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--primary);
    transform: translateY(102%);
    transition: transform 0.28s cubic-bezier(0.77,0,0.18,1);
    z-index: -1;
  }
  .nb__enquire:hover::before { transform: translateY(0); }
  .nb__enquire:hover {
    color: #fff;
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .nb__signup {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 22px;
    border-radius: 11px;
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    background: var(--gradient-secondary);
    text-decoration: none;
    font-family: var(--font-main);
    white-space: nowrap;
    box-shadow: 0 6px 20px rgba(109,83,163,0.26);
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
    isolation: isolate;
  }
  .nb__signup::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -80%;
    width: 50%;
    height: 200%;
    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.22), transparent);
    transform: skewX(-20deg);
    transition: left 0.5s ease;
    pointer-events: none;
  }
  .nb__signup:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 12px 32px rgba(109,83,163,0.36);
    color: #fff;
  }
  .nb__signup:hover::after { left: 150%; }
  .nb__signup:active { transform: scale(0.97); }

  /* ─── HAMBURGER ──────────────────────────── */
  .nb__menuBtn {
    display: none;
    width: 44px;
    height: 44px;
    border: 1.5px solid var(--border);
    border-radius: 12px;
    background: transparent;
    color: var(--primary);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.22s ease;
  }
  .nb__menuBtn:hover { background: var(--primary-light); border-color: rgba(109,83,163,0.26); }

  /* ─── MOBILE MENU ────────────────────────── */
  .nb__mobile {
    display: none;
    flex-direction: column;
    gap: 2px;
    background: #fff;
    border-top: 1px solid rgba(109,83,163,0.07);
    padding: 12px 16px 28px;
    max-height: calc(100svh - 74px);
    overflow-y: auto;
    animation: nbMobileIn 0.25s ease both;
  }
  .nb__mobile.open { display: flex; }
  @keyframes nbMobileIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .nb__mSection {
    font-size: 9px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: var(--text-light);
    padding: 12px 12px 4px;
    font-family: var(--font-main);
  }

  .nb__mLink {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: 12px;
    font-size: 14.5px;
    font-weight: 600;
    color: var(--text-dark);
    text-decoration: none;
    font-family: var(--font-main);
    position: relative;
    overflow: hidden;
    isolation: isolate;
    transition: color 0.2s ease;
  }
  .nb__mLink::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: var(--primary-light);
    transform: translateX(-105%);
    transition: transform 0.3s cubic-bezier(0.77,0,0.18,1);
    z-index: -1;
  }
  .nb__mLink:hover::before, .nb__mLink.active::before { transform: translateX(0); }
  .nb__mLink:hover, .nb__mLink.active { color: var(--primary); }
  .nb__mDot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gradient-primary);
    flex-shrink: 0;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.18s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
  }
  .nb__mLink.active .nb__mDot { opacity: 1; transform: scale(1); }

  .nb__mDivider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
    margin: 6px 0;
  }

  /* ─── MOBILE AI ACCORDION ─────────────────── */
  .nb__mAIToggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 14px;
    border-radius: 14px;
    background: var(--gradient-secondary);
    border: none;
    cursor: pointer;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .nb__mAIToggle::before {
    content: '';
    position: absolute;
    width: 110px; height: 110px;
    border-radius: 50%;
    background: rgba(255,255,255,0.06);
    top: -30px; right: -20px;
    pointer-events: none;
  }
  .nb__mAIToggleLeft {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 1;
  }
  .nb__mAIToggleIcon {
    width: 34px; height: 34px;
    border-radius: 10px;
    background: rgba(255,255,255,0.16);
    border: 1px solid rgba(255,255,255,0.22);
    display: flex; align-items: center; justify-content: center;
    color: #fff;
    flex-shrink: 0;
  }
  .nb__mAIToggleText { text-align: left; }
  .nb__mAIToggleTitle {
    font-size: 13.5px;
    font-weight: 700;
    color: #fff;
    font-family: var(--font-main);
    display: block;
    line-height: 1.2;
  }
  .nb__mAIToggleSub {
    font-size: 10px;
    color: rgba(255,255,255,0.62);
    font-family: var(--font-main);
  }
  .nb__mAIToggleRight {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nb__mAICount {
    font-size: 10.5px;
    font-weight: 700;
    color: rgba(255,255,255,0.70);
    background: rgba(255,255,255,0.12);
    padding: 3px 9px;
    border-radius: 99px;
    border: 1px solid rgba(255,255,255,0.18);
    font-family: var(--font-main);
  }
  .nb__mAIChevron {
    color: rgba(255,255,255,0.7);
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
  }
  .nb__mAIChevron.open { transform: rotate(180deg); }

  /* accordion body */
  .nb__mAIBody {
    display: none;
    flex-direction: column;
    gap: 2px;
    background: var(--bg-light);
    border-radius: 0 0 14px 14px;
    padding: 8px 8px 10px;
    border: 1px solid rgba(109,83,163,0.09);
    border-top: none;
    margin-top: -4px;
  }
  .nb__mAIBody.open { display: flex; animation: nbMobileIn 0.22s ease both; }

  /* "View All AI Tools" row inside mobile accordion */
  .nb__mAIViewAll {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 12px;
    border-radius: 11px;
    text-decoration: none;
    background: linear-gradient(135deg, rgba(109,83,163,0.08) 0%, rgba(49,185,120,0.08) 100%);
    border: 1px dashed rgba(109,83,163,0.18);
    margin-bottom: 4px;
    transition: all 0.22s ease;
    cursor: pointer;
  }
  .nb__mAIViewAll:hover { background: var(--primary-light); border-color: rgba(109,83,163,0.3); }
  .nb__mAIViewAllIcon {
    width: 32px; height: 32px;
    border-radius: 9px;
    background: var(--gradient-secondary);
    display: flex; align-items: center; justify-content: center;
    color: #fff;
    flex-shrink: 0;
  }
  .nb__mAIViewAllText {
    font-size: 13px;
    font-weight: 700;
    color: var(--primary);
    font-family: var(--font-main);
    flex: 1;
  }
  .nb__mAIViewAllSub {
    display: block;
    font-size: 10.5px;
    color: var(--text-light);
    font-weight: 500;
  }

  .nb__mAIItem {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 11px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1);
    background: #fff;
    cursor: pointer;
  }
  .nb__mAIItem::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 11px;
    background: var(--primary-light);
    transform: translateX(-105%);
    transition: transform 0.28s cubic-bezier(0.77,0,0.18,1);
    z-index: -1;
  }
  .nb__mAIItem:hover::before, .nb__mAIItem.active::before { transform: translateX(0); }
  .nb__mAIItem:hover { transform: translateX(3px); }

  .nb__mAIIcon {
    width: 36px; height: 36px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
  }
  .nb__mAIItem:hover .nb__mAIIcon { transform: rotate(-5deg) scale(1.07); }

  .nb__mAIContent { flex: 1; min-width: 0; }
  .nb__mAIName {
    font-size: 13.5px; font-weight: 700;
    color: var(--text-dark);
    font-family: var(--font-main);
    display: block;
    line-height: 1.3;
    transition: color 0.16s ease;
  }
  .nb__mAIItem:hover .nb__mAIName,
  .nb__mAIItem.active .nb__mAIName { color: var(--primary); }
  .nb__mAIDesc {
    font-size: 11px;
    color: var(--text-light);
    font-family: var(--font-main);
    margin-top: 1px;
  }
  .nb__mAIArr {
    color: rgba(109,83,163,0.22);
    flex-shrink: 0;
    transition: color 0.16s ease, transform 0.2s ease;
  }
  .nb__mAIItem:hover .nb__mAIArr { color: var(--primary); transform: translateX(2px); }

  /* mobile CTAs */
  .nb__mCtas { display: flex; flex-direction: column; gap: 9px; margin-top: 12px; }

  .nb__mCtaA {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    padding: 14px; border-radius: 13px;
    background: var(--gradient-secondary); color: #fff;
    font-size: 14.5px; font-weight: 700; font-family: var(--font-main);
    text-decoration: none; border: none; cursor: pointer;
    box-shadow: 0 6px 20px rgba(109,83,163,0.24);
    position: relative; overflow: hidden;
    transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease;
  }
  .nb__mCtaA::after {
    content: '';
    position: absolute;
    top: -50%; left: -80%; width: 50%; height: 200%;
    background: linear-gradient(100deg, transparent, rgba(255,255,255,0.20), transparent);
    transform: skewX(-20deg);
    transition: left 0.5s ease;
  }
  .nb__mCtaA:hover { transform: scale(1.02); box-shadow: 0 12px 32px rgba(109,83,163,0.34); color: #fff; }
  .nb__mCtaA:hover::after { left: 150%; }

  .nb__mCtaB {
    display: flex; align-items: center; justify-content: center; gap: 7px;
    padding: 13px; border-radius: 13px;
    background: var(--primary-light); color: var(--primary);
    font-size: 14px; font-weight: 700; font-family: var(--font-main);
    text-decoration: none; cursor: pointer;
    border: 1.5px solid rgba(109,83,163,0.18);
    transition: all 0.24s ease;
    position: relative; overflow: hidden; isolation: isolate;
  }
  .nb__mCtaB::before {
    content: '';
    position: absolute; inset: 0;
    background: var(--primary);
    transform: translateY(104%);
    transition: transform 0.28s cubic-bezier(0.77,0,0.18,1);
    z-index: -1;
    border-radius: 12px;
  }
  .nb__mCtaB:hover::before { transform: translateY(0); }
  .nb__mCtaB:hover { color: #fff; border-color: transparent; }

  /* ─── RESPONSIVE ─────────────────────────── */
  @media (max-width: 1060px) {
    .nb__desktop { display: none; }
    .nb__actions  { display: none; }
    .nb__menuBtn  { display: flex; }
    .nb__inner    { height: 68px; padding: 0 18px; }
    .nb__mobile   { max-height: calc(100svh - 68px); }
  }
  @media (max-width: 480px) {
    .nb__logoWrap { width: 70px; height: 70px; border-radius: 18px; }
    .nb__logoImg  { height: 52px; }
    .nb__inner    { padding: 0 14px; }
  }
`;

/* =========================================
   COMPONENT
========================================= */

export default function Navbar() {
  const location = useLocation();
  const navigate  = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aiOpen, setAiOpen]         = useState(false);
  const [mAiOpen, setMAiOpen]       = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  const dropdownRef = useRef(null);
  const activeLink  = getActiveLink(location.pathname);
  const isAiActive  = activeLink === "__ai__";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const fn = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setAiOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setAiOpen(false);
    setMAiOpen(false);
  }, [location.pathname]);

  const closeAll = () => {
    setMobileOpen(false);
    setAiOpen(false);
    setMAiOpen(false);
  };

  // Navigate + close dropdown
  const handleNavTo = (to) => {
    setAiOpen(false);
    navigate(to);
  };

  return (
    <>
      <style>{styles}</style>

      <header className={`nb${scrolled ? " scrolled" : ""}`}>
        <div className="nb__inner">

          {/* LOGO */}
          <Link to="/" className="nb__logo" aria-label="Home">
            <div className="nb__logoWrap">
              <div className="nb__logoRing" aria-hidden="true" />
              <img
                src={logo}
                alt="Your Campus Edu"
                className="nb__logoImg"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nb__desktop" aria-label="Main navigation">

            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to}
                className={`nb__link${activeLink === to ? " active" : ""}`}>
                {label}
              </Link>
            ))}

            <span className="nb__sep" aria-hidden="true" />

            {/* AI TOOLS — click goes straight to /ai-tools, hover reveals the dropdown */}
            <div
              className="nb__aiWrap"
              ref={dropdownRef}
              onMouseEnter={() => setAiOpen(true)}
              onMouseLeave={() => setAiOpen(false)}
            >
              <button
                className={`nb__aiBtn${isAiActive || aiOpen ? " active" : ""}`}
                onClick={() => handleNavTo("/ai-tools")}
                aria-expanded={aiOpen}
                aria-haspopup="true"
              >
                <span style={{ position: "relative", zIndex: 1 }}>AI Tools</span>
                <span className="nb__badge"><Sparkles size={8} />AI</span>
                <ChevronDown size={13}
                  className={`nb__chevron${aiOpen ? " open" : ""}`}
                  aria-hidden="true" />
              </button>

              {aiOpen && (
                <div className="nb__dropdown" role="menu">

                  {/* Header */}
                  <div className="nb__ddHead">
                    <div className="nb__ddHeadLeft">
                      <div className="nb__ddHeadIcon">
                        <Sparkles size={14} />
                      </div>
                      <div>
                        <div className="nb__ddHeadTitle">AI-Powered Tools</div>
                        <div className="nb__ddHeadSub">5 smart tools for your journey</div>
                      </div>
                    </div>
                  </div>

                  <div className="nb__ddDivider" />

                  {/* Individual tool items */}
                  <div className="nb__ddList">
                    {AI_ITEMS.map(({ to, label, desc, Icon, accent, bg }) => (
                      <button
                        key={to}
                        role="menuitem"
                        className={`nb__ddItem${location.pathname === to ? " active" : ""}`}
                        style={{ "--item-accent": accent, border: "none", width: "100%", textAlign: "left" }}
                        onClick={() => handleNavTo(to)}
                      >
                        <div className="nb__ddIconBox" style={{ background: bg }}>
                          <Icon size={18} color={accent} strokeWidth={2} />
                        </div>
                        <div className="nb__ddContent">
                          <span className="nb__ddLabel">{label}</span>
                          <span className="nb__ddDesc">{desc}</span>
                        </div>
                        <span className="nb__ddArrow" aria-hidden="true">
                          <ArrowRight size={13} />
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Footer — Free Counselling CTA */}
                  <button
                    className="nb__ddFooter"
                    onClick={() => handleNavTo("/contact")}
                    style={{ width: "100%", border: "none", textAlign: "left" }}
                  >
                    <div className="nb__ddFooterLeft">
                      <div className="nb__ddFooterIcon">
                        <Sparkles size={14} />
                      </div>
                      <div>
                        <div className="nb__ddFooterTitle">Not sure where to start?</div>
                        <span className="nb__ddFooterSub">Book a free counselling session</span>
                      </div>
                    </div>
                    <div className="nb__ddFooterBtn">
                      <ArrowRight size={11} /> Free Session
                    </div>
                  </button>

                </div>
              )}
            </div>

            <span className="nb__sep" aria-hidden="true" />

            <Link to="/contact"
              className={`nb__link${activeLink === "/contact" ? " active" : ""}`}>
              Contact
            </Link>

          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="nb__actions">
            <Link to="/contact" className="nb__enquire">Enquire</Link>
            <Link to="/signup" className="nb__signup">
              <UserPlus size={14} />
              Sign Up
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            className="nb__menuBtn"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="nb__mobile open" role="navigation" aria-label="Mobile navigation">

            <span className="nb__mSection">Navigation</span>

            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} onClick={closeAll}
                className={`nb__mLink${activeLink === to ? " active" : ""}`}>
                {label}
                <span className="nb__mDot" aria-hidden="true" />
              </Link>
            ))}

            <Link to="/contact" onClick={closeAll}
              className={`nb__mLink${activeLink === "/contact" ? " active" : ""}`}>
              Contact
              <span className="nb__mDot" aria-hidden="true" />
            </Link>

            <div className="nb__mDivider" />

            {/* AI accordion */}
            <span className="nb__mSection">AI Tools</span>

            <button
              className="nb__mAIToggle"
              onClick={() => setMAiOpen((prev) => !prev)}
              aria-expanded={mAiOpen}
            >
              <div className="nb__mAIToggleLeft">
                <div className="nb__mAIToggleIcon"><Sparkles size={16} /></div>
                <div className="nb__mAIToggleText">
                  <span className="nb__mAIToggleTitle">AI-Powered Tools</span>
                  <span className="nb__mAIToggleSub">Smart tools for students</span>
                </div>
              </div>
              <div className="nb__mAIToggleRight">
                <span className="nb__mAICount">5 tools</span>
                <ChevronDown size={15}
                  className={`nb__mAIChevron${mAiOpen ? " open" : ""}`}
                  aria-hidden="true" />
              </div>
            </button>

            <div className={`nb__mAIBody${mAiOpen ? " open" : ""}`}>

              {/* View All AI Tools row */}
              <Link to="/ai-tools" onClick={closeAll} className="nb__mAIViewAll">
                <div className="nb__mAIViewAllIcon"><Zap size={15} /></div>
                <div className="nb__mAIViewAllText">
                  View All AI Tools
                  <span className="nb__mAIViewAllSub">Explore the full AI suite</span>
                </div>
                <ArrowRight size={14} style={{ color: "var(--primary)", flexShrink: 0 }} />
              </Link>

              {AI_ITEMS.map(({ to, label, desc, Icon, accent, bg }) => (
                <Link key={to} to={to} onClick={closeAll}
                  className={`nb__mAIItem${location.pathname === to ? " active" : ""}`}>
                  <div className="nb__mAIIcon" style={{ background: bg }}>
                    <Icon size={17} color={accent} strokeWidth={2} />
                  </div>
                  <div className="nb__mAIContent">
                    <span className="nb__mAIName">{label}</span>
                    <span className="nb__mAIDesc">{desc}</span>
                  </div>
                  <ArrowRight size={14} className="nb__mAIArr" />
                </Link>
              ))}
            </div>

            <div className="nb__mCtas">
              <Link to="/signup" onClick={closeAll} className="nb__mCtaA">
                <UserPlus size={16} /> Sign Up Free
              </Link>
              <Link to="/contact" onClick={closeAll} className="nb__mCtaB">
                <Sparkles size={14} /> Book Free Counselling
              </Link>
            </div>

          </div>
        )}

      </header>
    </>
  );
}