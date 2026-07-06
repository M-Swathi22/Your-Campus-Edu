import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  Globe2,
  GraduationCap,
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const COUNTRIES = [
  "Not sure yet",
  "Domestic (India)",
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "Ireland",
  "New Zealand",
];

const OFFICE_ADDRESS =
  "D.R NO -12701BCD, Classic Towers, 1st Floor, Trichy Rd, Nadar Colony, Coimbatore, Tamil Nadu 641045";

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  OFFICE_ADDRESS
)}&output=embed`;

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  OFFICE_ADDRESS
)}`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[0-9\s-]{7,15}$/;

function validateField(name, value) {
  switch (name) {
    case "name":
      return value.trim().length >= 2 ? "" : "Enter your full name.";
    case "email":
      return EMAIL_RE.test(value.trim()) ? "" : "Enter a valid email address.";
    case "phone":
      return PHONE_RE.test(value.trim()) ? "" : "Enter a valid phone number.";
    default:
      return "";
  }
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: COUNTRIES[0],
    course: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      setErrors((er) => ({ ...er, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validateField(name, value) }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const fieldsToValidate = ["name", "email", "phone"];
    const nextErrors = {};
    fieldsToValidate.forEach((f) => {
      nextErrors[f] = validateField(f, form[f]);
    });
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true });

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) return;

    setSubmitting(true);
    // Wire to real API here.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <section className="cf-root">
      <div className="cf-wrap">
        <motion.div
          className="cf-pass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {/* ---------- left: visit / map panel ---------- */}
          <div className="cf-visit">
            <span className="cf-visit-tag">TERMINAL &middot; VISIT US</span>
            <h2 className="cf-visit-title">Meet us at the desk</h2>
            <p className="cf-visit-sub">
              Prefer talking face to face? Walk into our Coimbatore office
              &mdash; appointments are always given priority.
            </p>

            <div className="cf-visit-detail">
              <MapPin size={17} />
              <div>
                <span className="cf-visit-label">OFFICE ADDRESS</span>
                <span className="cf-visit-value">{OFFICE_ADDRESS}</span>
              </div>
            </div>

            <div className="cf-visit-detail">
              <Clock size={17} />
              <div>
                <span className="cf-visit-label">DESK HOURS</span>
                <span className="cf-visit-value">
                  Mon &ndash; Sat, 9:00 AM &ndash; 7:00 PM IST
                </span>
              </div>
            </div>

            <div className="cf-map-frame">
              <iframe
                title="Your Campus Edu office location"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              className="cf-directions"
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={15} />
              Get directions
            </a>
          </div>

          {/* ---------- perforation divider ---------- */}
          <div className="cf-perforation" aria-hidden="true">
            <span className="cf-notch cf-notch--top" />
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className="cf-dot" />
            ))}
            <span className="cf-notch cf-notch--bottom" />
          </div>

          {/* ---------- right: boarding-pass check-in form ---------- */}
          <div className="cf-pass-main">
            <div className="cf-pass-head">
              <div>
                <span className="cf-pass-brand">YOUR CAMPUS EDU</span>
                <span className="cf-pass-sub">Counselling Pass</span>
              </div>
              <Globe2 size={24} className="cf-pass-icon" />
            </div>

            {submitted ? (
              <motion.div
                className="cf-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 size={34} className="cf-success-icon" />
                <h3>You&rsquo;re checked in.</h3>
                <p>
                  Thanks, {form.name || "traveller"}. Our counselling desk
                  will contact you within 24 hours to confirm your session.
                </p>
              </motion.div>
            ) : (
              <form className="cf-form" onSubmit={handleSubmit} noValidate>
                <Field
                  id="name"
                  label="Full name"
                  icon={User}
                  placeholder="As on your passport / ID"
                  value={form.name}
                  error={touched.name && errors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <div className="cf-grid-2">
                  <Field
                    id="email"
                    type="email"
                    label="Email"
                    icon={Mail}
                    placeholder="you@email.com"
                    value={form.email}
                    error={touched.email && errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    id="phone"
                    label="Phone"
                    icon={Phone}
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    error={touched.phone && errors.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="cf-grid-2">
                  <div className="cf-field">
                    <label htmlFor="destination">Destination</label>
                    <div className="cf-input-row">
                      <Globe2 size={16} />
                      <select
                        id="destination"
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Field
                    id="course"
                    label="Course interest"
                    icon={GraduationCap}
                    placeholder="e.g. MS Computer Science"
                    value={form.course}
                    onChange={handleChange}
                    optional
                  />
                </div>

                <div className="cf-field">
                  <label htmlFor="message">
                    Message <span className="cf-optional-tag">optional</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us a little about your goals"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="cf-submit" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="cf-spin" />
                      <span>Checking in&hellip;</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm check-in</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        .cf-root {
          background: var(--bg-section);
          padding: clamp(64px, 9vw, 110px) clamp(20px, 6vw, 80px);
        }

        .cf-wrap {
          max-width: 1180px;
          margin: 0 auto;
        }

        .cf-pass {
          position: relative;
          display: grid;
          grid-template-columns: 0.85fr auto 1.15fr;
          background: var(--bg-main);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        /* ---------- left: visit panel ---------- */
        .cf-visit {
          position: relative;
          background: var(--gradient-secondary);
          color: var(--text-white);
          padding: clamp(28px, 4vw, 40px);
          display: flex;
          flex-direction: column;
        }

        .cf-visit-tag {
          font-family: var(--font-main);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--accent-green);
          margin-bottom: 14px;
        }

        .cf-visit-title {
          font-family: var(--font-main);
          font-weight: 700;
          font-size: clamp(1.4rem, 2.4vw, 1.7rem);
          line-height: 1.2;
          margin: 0 0 10px;
        }

        .cf-visit-sub {
          font-family: var(--font-main);
          font-size: 13.5px;
          line-height: 1.65;
          color: color-mix(in srgb, var(--white) 78%, transparent);
          margin: 0 0 24px;
          max-width: 320px;
        }

        .cf-visit-detail {
          display: flex;
          gap: 10px;
          margin-bottom: 18px;
        }

        .cf-visit-detail svg {
          color: var(--accent-green);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .cf-visit-detail > div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cf-visit-label {
          font-family: var(--font-main);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: color-mix(in srgb, var(--white) 55%, transparent);
        }

        .cf-visit-value {
          font-family: var(--font-main);
          font-size: 13.5px;
          font-weight: 500;
          line-height: 1.5;
          color: var(--text-white);
        }

        .cf-map-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-top: auto;
          border: 1px solid color-mix(in srgb, var(--white) 18%, transparent);
        }

        .cf-map-frame iframe {
          width: 100%;
          height: 100%;
          border: 0;
          filter: grayscale(0.15) contrast(1.05);
        }

        .cf-directions {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          font-family: var(--font-main);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-white);
          text-decoration: none;
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          background: color-mix(in srgb, var(--white) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--white) 20%, transparent);
          transition: var(--transition);
          width: fit-content;
        }

        .cf-directions:hover {
          background: var(--accent-green);
          border-color: var(--accent-green);
          color: var(--primary-dark);
        }

        /* ---------- perforation divider ---------- */
        .cf-perforation {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 20px 0;
        }

        .cf-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--bg-section);
        }

        .cf-notch {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--bg-section);
        }
        .cf-notch--top { top: -10px; }
        .cf-notch--bottom { bottom: -10px; }

        /* ---------- right: form panel ---------- */
        .cf-pass-main {
          padding: clamp(28px, 4vw, 40px);
        }

        .cf-pass-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 26px;
        }

        .cf-pass-brand {
          display: block;
          font-family: var(--font-main);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--primary);
        }

        .cf-pass-sub {
          display: block;
          font-family: var(--font-main);
          font-size: 19px;
          font-weight: 700;
          color: var(--text-dark);
          margin-top: 4px;
        }

        .cf-pass-icon { color: var(--accent-green); }

        .cf-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cf-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .cf-field label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-main);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-medium);
          margin-bottom: 7px;
        }

        .cf-optional-tag {
          font-size: 10.5px;
          font-weight: 500;
          color: var(--text-light);
        }

        .cf-input-row {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 11px 14px;
          background: var(--bg-main);
          transition: var(--transition);
        }

        .cf-input-row:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 14%, transparent);
        }

        .cf-input-row.cf-input-row--error {
          border-color: var(--danger);
        }

        .cf-input-row.cf-input-row--error:focus-within {
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--danger) 14%, transparent);
        }

        .cf-input-row.cf-input-row--valid {
          border-color: var(--success);
        }

        .cf-input-row svg:first-child { color: var(--text-light); flex-shrink: 0; }

        .cf-input-row input,
        .cf-input-row select {
          border: none;
          outline: none;
          background: transparent;
          font-family: var(--font-main);
          font-size: 14px;
          color: var(--text-dark);
          width: 100%;
        }

        .cf-valid-icon { color: var(--success); flex-shrink: 0; }

        .cf-error-text {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-main);
          font-size: 12px;
          font-weight: 500;
          color: var(--danger);
          margin-top: 6px;
        }

        .cf-field textarea {
          width: 100%;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          font-family: var(--font-main);
          font-size: 14px;
          color: var(--text-dark);
          resize: vertical;
          transition: var(--transition);
        }

        .cf-field textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 14%, transparent);
        }

        .cf-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 6px;
          padding: 13px 22px;
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

        .cf-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .cf-submit:disabled {
          opacity: 0.75;
          cursor: default;
        }

        .cf-spin { animation: cf-spin 0.8s linear infinite; }

        @keyframes cf-spin {
          to { transform: rotate(360deg); }
        }

        .cf-success {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 12px 0;
        }

        .cf-success-icon { color: var(--success); margin-bottom: 10px; }

        .cf-success h3 {
          font-family: var(--font-main);
          font-size: 19px;
          font-weight: 700;
          color: var(--text-dark);
          margin: 0 0 8px;
        }

        .cf-success p {
          font-family: var(--font-main);
          font-size: 14px;
          color: var(--text-medium);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 900px) {
          .cf-pass { grid-template-columns: 1fr; }
          .cf-perforation {
            flex-direction: row;
            padding: 0 20px;
            height: 28px;
          }
          .cf-notch--top { left: -10px; top: 50%; transform: translateY(-50%); }
          .cf-notch--bottom { right: -10px; left: auto; bottom: auto; top: 50%; transform: translateY(-50%); }
          .cf-map-frame { margin-top: 8px; }
        }

        @media (max-width: 560px) {
          .cf-grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function Field({
  id,
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  error,
  onChange,
  onBlur,
  optional,
}) {
  const showValid = !error && value && value.trim().length > 0 && onBlur;

  return (
    <div className="cf-field">
      <label htmlFor={id}>
        {label}
        {optional && <span className="cf-optional-tag">optional</span>}
      </label>
      <div
        className={
          "cf-input-row" +
          (error ? " cf-input-row--error" : "") +
          (showValid ? " cf-input-row--valid" : "")
        }
      >
        <Icon size={16} />
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={!optional}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {showValid && <CheckCircle2 size={16} className="cf-valid-icon" />}
      </div>
      {error && (
        <span className="cf-error-text" id={`${id}-error`}>
          <AlertCircle size={13} />
          {error}
        </span>
      )}
    </div>
  );
}