import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowUpRight,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  GraduationCap,
  Users,
  ShieldCheck,
  BadgeDollarSign,
  Landmark,
} from "lucide-react";

const faqs = [
  {
    id: "admissions",
    number: "01",
    icon: GraduationCap,
    question: "What are the eligibility criteria and admission process?",
    answer:
      "Undergraduate applicants require 10+2 completion with relevant subject streams; postgraduate programs need a recognised bachelor's degree with minimum qualifying marks. The process covers online application, merit or entrance-exam shortlisting, document verification, and personal counselling. Our dedicated admissions team is available at every stage to ensure a seamless journey from application to enrolment.",
    tag: "Admissions",
  },
  {
    id: "placements",
    number: "02",
    icon: Users,
    question: "How strong is the placement support and industry network?",
    answer:
      "Our active placement cell is connected to 120+ partner universities and 500+ industry recruiters spanning healthcare, technology, law, and business. A consistent 98% placement rate is backed by career counselling, resume workshops, mock interviews, and on-campus drives. Students gain access to exclusive internship pipelines with leading hospitals, top-tier law firms, and Fortune-500 companies.",
    tag: "Placements",
  },
  {
    id: "facilities",
    number: "03",
    icon: Landmark,
    question: "What world-class facilities and infrastructure are available?",
    answer:
      "The campus features simulation labs, a 1,000-seat auditorium, fully equipped clinical training centres, advanced fabrication workshops, a digital law library, and high-speed smart learning spaces. Residential infrastructure includes modern hostels with 24/7 security, multi-cuisine dining, wellness centres, and recreational zones — engineered for focused, holistic academic life.",
    tag: "Campus",
  },
  {
    id: "accreditation",
    number: "04",
    icon: ShieldCheck,
    question: "Are your programs nationally and internationally accredited?",
    answer:
      "Yes. All programs hold accreditations from MCI, BCI, AICTE, and UGC, with discipline-specific recognition from relevant professional bodies. Many programs also carry international approvals from WHO-listed medical councils and ABET-certified engineering bodies, giving your degree global standing and opening doors to careers and higher studies worldwide.",
    tag: "Accreditation",
  },
  {
    id: "scholarships",
    number: "05",
    icon: BadgeDollarSign,
    question: "What scholarship and financial assistance options are available?",
    answer:
      "Merit scholarships cover up to 100% of tuition for top performers. Need-based aid, SC/ST/OBC government scheme facilitation, and sports or cultural excellence awards are also available. Our financial counselling desk assists with education loan processing through partner banks at preferential rates — ensuring that no deserving student is held back by financial constraints.",
    tag: "Finance",
  },
];

const trustItems = [
  { label: "Programs Offered", value: "9+" },
  { label: "Students Enrolled", value: "50k+" },
  { label: "Placement Rate", value: "98%" },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const Icon = faq.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      onClick={onToggle}
      style={{
        borderRadius: "var(--radius-md)",
        border: isOpen ? "1.5px solid var(--primary)" : "1.5px solid var(--border)",
        background: "var(--bg-main)",
        boxShadow: isOpen ? "0 8px 32px rgba(109,83,163,0.14)" : "var(--shadow-sm)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div style={{
        height: 3,
        background: isOpen ? "var(--gradient-primary)" : "transparent",
        transition: "background 0.35s ease",
      }} />

      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 24px" }}>
        <div style={{
          flexShrink: 0, width: 42, height: 42,
          borderRadius: "var(--radius-sm)",
          background: isOpen ? "var(--primary)" : "var(--bg-section)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.3s ease",
        }}>
          <Icon size={18} strokeWidth={1.8} color={isOpen ? "#fff" : "var(--primary)"} style={{ transition: "color 0.3s ease" }} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{
            fontFamily: "var(--font-main)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: isOpen ? "var(--primary)" : "var(--text-light)",
            display: "block", marginBottom: 4, transition: "color 0.3s ease",
          }}>
            {faq.tag}
          </span>
          <h3 style={{
            fontFamily: "var(--font-main)",
            fontSize: "clamp(13.5px, 1.5vw, 15.5px)",
            fontWeight: 600, lineHeight: 1.45,
            color: isOpen ? "var(--primary-dark)" : "var(--text-dark)",
            margin: 0, transition: "color 0.3s ease",
          }}>
            {faq.question}
          </h3>
        </div>

        <div style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: "50%",
          border: isOpen ? "1.5px solid var(--primary)" : "1.5px solid var(--border)",
          background: isOpen ? "var(--primary)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.3s ease",
        }}>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
            <ChevronDown size={14} strokeWidth={2.5} color={isOpen ? "#fff" : "var(--text-light)"} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ display: "flex", gap: 0, padding: "0 24px 24px 76px" }}>
              <div style={{
                width: 3, borderRadius: 3,
                background: "var(--gradient-primary)",
                flexShrink: 0, marginRight: 18, minHeight: 56,
              }} />
              <p style={{
                fontFamily: "var(--font-main)", fontSize: 14,
                lineHeight: 1.85, color: "var(--text-medium)", margin: 0, fontWeight: 400,
              }}>
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState("admissions");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      ref={ref}
      style={{
        position: "relative", overflow: "hidden",
        padding: "100px 0 110px",
        background: "var(--bg-light)",
        fontFamily: "var(--font-main)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        .faq-body { display: grid; grid-template-columns: 300px 1fr; gap: 48px; align-items: start; }
        .faq-left-sticky { position: sticky; top: 96px; }
        @media (max-width: 900px) {
          .faq-body { grid-template-columns: 1fr; gap: 40px; }
          .faq-left-sticky { position: static; }
        }
      `}</style>

      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,83,163,0.07) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 360, height: 360, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(49,185,120,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 2 }}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 16px", borderRadius: "var(--radius-xl)",
            background: "var(--primary-light)",
            border: "1.5px solid rgba(109,83,163,0.18)",
            marginBottom: 20,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gradient-primary)" }} />
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--primary)", fontFamily: "var(--font-main)",
            }}>
              Support & Information
            </span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-main)", margin: "0 0 14px",
            fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800,
            letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--primary-dark)",
          }}>
            Frequently Asked{" "}
            <span style={{
              background: "var(--gradient-primary)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Questions
            </span>
          </h2>

          <p style={{
            fontFamily: "var(--font-main)", fontSize: 15, lineHeight: 1.75,
            color: "var(--text-medium)", maxWidth: 500, margin: "0 auto", fontWeight: 400,
          }}>
            Everything you need to know before taking the next step in your academic journey.
          </p>
        </motion.div>

        {/* BODY */}
        <div className="faq-body">

          {/* LEFT */}
          <motion.div
            className="faq-left-sticky"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* Why Choose Us */}
            <div style={{
              borderRadius: "var(--radius-lg)", border: "1.5px solid var(--border)",
              background: "var(--bg-main)", padding: "22px 24px",
              boxShadow: "var(--shadow-sm)", marginBottom: 16,
            }}>
              <p style={{
                fontFamily: "var(--font-main)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--primary)", margin: "0 0 16px",
              }}>
                Why Choose Us
              </p>
              {["NAAC A+ Accredited Institution", "Global University Partnerships", "Industry-Integrated Curriculum"].map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: i < 2 ? 12 : 0 }}>
                  <CheckCircle2 size={15} strokeWidth={2.2} color="var(--accent-green)" style={{ marginTop: 1, flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-main)", fontSize: 12.5, color: "var(--text-medium)", lineHeight: 1.5, fontWeight: 400 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <div style={{
              borderRadius: "var(--radius-lg)", border: "1.5px solid rgba(109,83,163,0.2)",
              background: "var(--primary-light)", padding: "22px 24px",
            }}>
              <p style={{ fontFamily: "var(--font-main)", fontSize: 13, fontWeight: 600, color: "var(--primary-dark)", margin: "0 0 4px" }}>
                Still have questions?
              </p>
              <p style={{ fontFamily: "var(--font-main)", fontSize: 12, color: "var(--text-medium)", margin: "0 0 18px", lineHeight: 1.6 }}>
                Our team responds within 24 hours.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "11px 18px", borderRadius: "var(--radius-xl)",
                    background: "var(--gradient-secondary)", border: "none", color: "#fff",
                    fontFamily: "var(--font-main)", fontSize: 12, fontWeight: 700,
                    letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer",
                    boxShadow: "var(--shadow-md)", transition: "var(--transition)", width: "100%",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
                >
                  <MessageCircle size={13} strokeWidth={2.3} />
                  Chat with Admissions
                </button>
                <button
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "10px 18px", borderRadius: "var(--radius-xl)",
                    background: "transparent", border: "1.5px solid var(--primary)",
                    color: "var(--primary)", fontFamily: "var(--font-main)",
                    fontSize: 12, fontWeight: 600, cursor: "pointer",
                    transition: "var(--transition)", width: "100%",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(109,83,163,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                >
                  <PhoneCall size={13} strokeWidth={2.3} />
                  Request a Callback
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Accordions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i} isOpen={openId === faq.id} onToggle={() => toggle(faq.id)} />
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexWrap: "wrap", gap: 16, marginTop: 8, padding: "20px 24px",
                borderRadius: "var(--radius-md)", border: "1.5px dashed var(--border)",
                background: "var(--bg-main)",
              }}
            >
              <p style={{ fontFamily: "var(--font-main)", fontSize: 13, color: "var(--text-medium)", margin: 0, fontWeight: 400 }}>
                Can't find what you're looking for? Browse our full help centre.
              </p>
              <button
                style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "9px 20px", borderRadius: "var(--radius-xl)",
                  background: "transparent", border: "1.5px solid var(--primary)",
                  color: "var(--primary)", fontFamily: "var(--font-main)",
                  fontSize: 12, fontWeight: 700, letterSpacing: "0.06em",
                  textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap",
                  transition: "var(--transition)",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-light)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "none"; }}
              >
                View Help Centre
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}