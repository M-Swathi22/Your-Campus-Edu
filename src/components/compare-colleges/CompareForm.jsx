import { useState } from "react";
import {
  Sparkles, ArrowRight, ArrowLeft, AlertCircle,
  X, Search, GitCompareArrows, Wand2, Plus, Building2
} from "lucide-react";
import { searchColleges } from "../../utils/compareCalculator";
import { COUNTRY_OPTIONS, FIELD_OPTIONS, PRIORITY_OPTIONS } from "../../data/collegesData";

/* ─── Chip ─── */
function Chip({ label, selected, onClick, variant = "p" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cf2-chip${selected ? ` cf2-chip--${variant}` : ""}`}
    >
      {label}
    </button>
  );
}

/* ─── Sidebar step ─── */
function Step({ num, title, hint, active, done, variant = "p" }) {
  return (
    <div className={`cf2-step${active ? " cf2-step--active" : ""}${done ? " cf2-step--done" : ""}`}>
      <div className={`cf2-step-dot${active ? ` cf2-step-dot--${variant}` : ""}${done ? " cf2-step-dot--done" : ""}`}>
        {done ? "✓" : num}
      </div>
      <div className="cf2-step-info">
        <div className="cf2-step-name">{title}</div>
        <div className="cf2-step-hint">{hint}</div>
      </div>
    </div>
  );
}

/* ─── College autocomplete input ─── */
function CollegeInput({ value, onChange, onRemove, placeholder, index }) {
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);

  const handleInput = (val) => {
    onChange(val);
    setSuggestions(searchColleges(val));
    setOpen(true);
  };

  return (
    <div className="cf2-ci-wrap">
      <div className="cf2-ci-row">
        <div className="cf2-ci-idx">{index + 1}</div>
        <div className="cf2-ci-field">
          <Search size={13} className="cf2-ci-icon" />
          <input
            type="text"
            value={value}
            onChange={(e) => handleInput(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
            placeholder={placeholder}
            className="cf2-ci-inp"
          />
        </div>
        {onRemove && (
          <button type="button" onClick={onRemove} className="cf2-ci-rm" aria-label="Remove college">
            <X size={13} />
          </button>
        )}
      </div>

      {open && suggestions.length > 0 && (
        <div className="cf2-dropdown">
          {suggestions.map((s) => (
            <button
              key={s.id}
              type="button"
              onMouseDown={() => { onChange(s.name); setOpen(false); }}
              className="cf2-dropdown-item"
            >
              <span className="cf2-dropdown-flag">{s.flag}</span>
              <div>
                <div className="cf2-dropdown-name">{s.name}</div>
                <div className="cf2-dropdown-city">{s.city}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main ─── */
export default function CompareForm({ onSubmit }) {
  const [mode, setMode] = useState(null);
  const [collegeNames, setCollegeNames] = useState(["", ""]);
  const [countries, setCountries] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [studentField, setStudentField] = useState("");
  const [studentLevel, setStudentLevel] = useState("");
  const [budgetSensitivity, setBudgetSensitivity] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [error, setError] = useState("");

  const togglePriority = (p) =>
    setPriorities((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : prev.length < 4 ? [...prev, p] : prev
    );
  const toggleCountry = (c) =>
    setCountries((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);

  const updateCollegeName = (i, val) =>
    setCollegeNames((prev) => prev.map((v, idx) => (idx === i ? val : v)));
  const addCollegeSlot = () =>
    collegeNames.length < 4 && setCollegeNames((prev) => [...prev, ""]);
  const removeCollegeSlot = (i) =>
    setCollegeNames((prev) => prev.filter((_, idx) => idx !== i));

  const handleSubmitSpecific = () => {
    const filled = collegeNames.filter((n) => n.trim());
    if (filled.length < 2) { setError("Please enter at least 2 colleges to compare."); return; }
    setError("");
    onSubmit({ mode: "specific", collegeNames: filled, priorities, studentProfile: { field: studentField, level: studentLevel, budgetSensitivity }, extraInfo });
  };

  const handleSubmitSuggest = () => {
    if (!studentField) { setError("Please select your field of interest."); return; }
    if (priorities.length === 0) { setError("Please pick at least one priority."); return; }
    setError("");
    onSubmit({ mode: "suggest", countries, fields: [studentField], priorities, studentProfile: { field: studentField, level: studentLevel, budgetSensitivity }, extraInfo });
  };

  return (
    <section className="cf2-section">
      <div className="cf2-container">

        {/* ── Header ── */}
        <div className="cf2-header">
          <div className="cf2-eyebrow">
            <Building2 size={12} />
            College Comparison
          </div>
          <h2 className="cf2-h1">
            Find Your Perfect{" "}
            <span className="cf2-h1-grad">College Match</span>
          </h2>
          <p className="cf2-sub">
            Run a head-to-head comparison, or let AI surface your top strategic fits based on your unique profile.
          </p>
        </div>

        {/* ── Mode selector ── */}
        {!mode && (
          <div className="cf2-mode-row">
            {[
              {
                key: "specific",
                num: "01",
                label: "Direct Compare",
                title: "I Know My Colleges",
                desc: "Enter 2–4 specific institutions and run a granular, parameter-level head-to-head analysis.",
                variant: "p",
              },
              {
                key: "suggest",
                num: "02",
                label: "AI Discovery",
                title: "Suggest Best Matches",
                desc: "Tell us your field, priorities and life goals — AI extracts your top strategic college fits.",
                variant: "i",
              },
            ].map(({ key, num, label, title, desc, variant }) => (
              <button
                key={key}
                type="button"
                onClick={() => setMode(key)}
                className={`cf2-mcard cf2-mcard--${variant}`}
              >
                <div className="cf2-mcard-num">{num}</div>
                <div className="cf2-mcard-rule" />
                <div className="cf2-mcard-label">{label}</div>
                <h3 className="cf2-mcard-title">{title}</h3>
                <p className="cf2-mcard-desc">{desc}</p>
                <span className={`cf2-mcard-btn cf2-mcard-btn--${variant}`}>
                  Get started <ArrowRight size={13} className="cf2-mcard-arrow" />
                </span>
                <div className="cf2-mcard-deco">{num}</div>
              </button>
            ))}
          </div>
        )}

        {/* ── Specific panel ── */}
        {mode === "specific" && (
          <div className="cf2-panel">
            <div className="cf2-panel-bar cf2-panel-bar--p">
              <div className="cf2-panel-bar-dot" />
              <span className="cf2-panel-bar-title">Direct Compare — Enter Your Colleges</span>
              <button type="button" onClick={() => { setMode(null); setError(""); }} className="cf2-back">
                <ArrowLeft size={13} /> Back
              </button>
            </div>

            <div className="cf2-panel-body">
              {/* Sidebar */}
              <div className="cf2-sidebar">
                <div className="cf2-sidebar-label">Your steps</div>
                <Step num="1" title="Add colleges" hint="2–4 institutions" active done={false} variant="p" />
                <div className="cf2-connector" />
                <Step num="2" title="Your priorities" hint="What matters most" active={false} done={false} variant="p" />
                <div className="cf2-connector" />
                <Step num="3" title="Extra context" hint="Optional notes" active={false} done={false} variant="p" />
              </div>

              {/* Form area */}
              <div className="cf2-form-area">
                <div className="cf2-fg">
                  <label className="cf2-label">
                    Colleges <span className="cf2-label-hint">(2–4)</span>
                  </label>
                  <div className="cf2-inputs-stack">
                    {collegeNames.map((name, i) => (
                      <CollegeInput
                        key={i}
                        value={name}
                        onChange={(v) => updateCollegeName(i, v)}
                        onRemove={collegeNames.length > 2 ? () => removeCollegeSlot(i) : null}
                        placeholder={`College ${i + 1} — e.g. IIT Madras`}
                        index={i}
                      />
                    ))}
                  </div>
                  {collegeNames.length < 4 && (
                    <button type="button" onClick={addCollegeSlot} className="cf2-add-slot">
                      <Plus size={13} /> Add another college
                    </button>
                  )}
                </div>

                <hr className="cf2-sep" />

                <div className="cf2-fg">
                  <label className="cf2-label">
                    What matters most? <span className="cf2-label-hint">(up to 4)</span>
                  </label>
                  <div className="cf2-chips">
                    {PRIORITY_OPTIONS.map((p) => (
                      <Chip key={p} label={p} selected={priorities.includes(p)} onClick={() => togglePriority(p)} variant="p" />
                    ))}
                  </div>
                </div>

                <hr className="cf2-sep" />

                <div className="cf2-fg">
                  <label className="cf2-label">
                    Extra context <span className="cf2-label-hint">(optional)</span>
                  </label>
                  <textarea
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                    placeholder="e.g. I prefer smaller class sizes, GATE score 650, campus near a city…"
                    className="cf2-textarea"
                  />
                </div>

                {error && (
                  <div className="cf2-error">
                    <AlertCircle size={14} /> {error}
                  </div>
                )}

                <button type="button" onClick={handleSubmitSpecific} className="cf2-submit cf2-submit--p">
                  <Sparkles size={14} />
                  <span>Compare These Colleges</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Suggest panel ── */}
        {mode === "suggest" && (
          <div className="cf2-panel">
            <div className="cf2-panel-bar cf2-panel-bar--i">
              <div className="cf2-panel-bar-dot" />
              <span className="cf2-panel-bar-title">AI Discovery — Build Your Profile</span>
              <button type="button" onClick={() => { setMode(null); setError(""); }} className="cf2-back">
                <ArrowLeft size={13} /> Back
              </button>
            </div>

            <div className="cf2-panel-body">
              {/* Sidebar */}
              <div className="cf2-sidebar">
                <div className="cf2-sidebar-label">Your steps</div>
                <Step num="1" title="Field & level" hint="Your study focus" active done={false} variant="i" />
                <div className="cf2-connector" />
                <Step num="2" title="Preferences" hint="Country & budget" active={false} done={false} variant="i" />
                <div className="cf2-connector" />
                <Step num="3" title="Priorities" hint="What matters most" active={false} done={false} variant="i" />
                <div className="cf2-connector" />
                <Step num="4" title="Extra context" hint="Optional notes" active={false} done={false} variant="i" />
              </div>

              {/* Form area */}
              <div className="cf2-form-area">
                <div className="cf2-fg">
                  <label className="cf2-label">
                    Field of interest <span className="cf2-required">*</span>
                  </label>
                  <div className="cf2-chips">
                    {FIELD_OPTIONS.map((f) => (
                      <Chip key={f} label={f} selected={studentField === f} onClick={() => setStudentField(f)} variant="i" />
                    ))}
                  </div>
                </div>

                <div className="cf2-fg">
                  <label className="cf2-label">Study level</label>
                  <div className="cf2-chips">
                    {["Undergraduate", "Postgraduate", "PhD"].map((l) => (
                      <Chip key={l} label={l} selected={studentLevel === l} onClick={() => setStudentLevel(l)} variant="i" />
                    ))}
                  </div>
                </div>

                <hr className="cf2-sep" />

                <div className="cf2-fg">
                  <label className="cf2-label">
                    Preferred countries <span className="cf2-label-hint">(optional)</span>
                  </label>
                  <div className="cf2-chips">
                    {COUNTRY_OPTIONS.map((c) => (
                      <Chip key={c.value} label={c.label} selected={countries.includes(c.value)} onClick={() => toggleCountry(c.value)} variant="i" />
                    ))}
                  </div>
                </div>

                <div className="cf2-fg">
                  <label className="cf2-label">Budget sensitivity</label>
                  <div className="cf2-chips">
                    {["Very budget-conscious", "Moderate budget", "Budget is not a constraint"].map((b) => (
                      <Chip key={b} label={b} selected={budgetSensitivity === b} onClick={() => setBudgetSensitivity(b)} variant="i" />
                    ))}
                  </div>
                </div>

                <hr className="cf2-sep" />

                <div className="cf2-fg">
                  <label className="cf2-label">
                    What matters most? <span className="cf2-required">*</span>{" "}
                    <span className="cf2-label-hint">(up to 4)</span>
                  </label>
                  <div className="cf2-chips">
                    {PRIORITY_OPTIONS.map((p) => (
                      <Chip key={p} label={p} selected={priorities.includes(p)} onClick={() => togglePriority(p)} variant="i" />
                    ))}
                  </div>
                </div>

                <hr className="cf2-sep" />

                <div className="cf2-fg">
                  <label className="cf2-label">
                    Extra context <span className="cf2-label-hint">(optional)</span>
                  </label>
                  <textarea
                    value={extraInfo}
                    onChange={(e) => setExtraInfo(e.target.value)}
                    placeholder="e.g. strong AI research, warmer climate preferred, IELTS 7.5…"
                    className="cf2-textarea cf2-textarea--i"
                  />
                </div>

                {error && (
                  <div className="cf2-error">
                    <AlertCircle size={14} /> {error}
                  </div>
                )}

                <button type="button" onClick={handleSubmitSuggest} className="cf2-submit cf2-submit--i">
                  <Wand2 size={14} />
                  <span>Find My Best-Fit Colleges</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* ══ SECTION SHELL ══ */
        .cf2-section {
          font-family: var(--font-main), system-ui, sans-serif;
          background: var(--bg-light);
          padding: clamp(56px, 8vw, 96px) 20px;
        }

        .cf2-container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* ══ HEADER ══ */
        .cf2-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .cf2-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--primary);
          background: var(--primary-light);
          border: 1.5px solid color-mix(in srgb, var(--primary) 20%, transparent);
          border-radius: 100px;
          padding: 5px 16px 5px 12px;
          margin-bottom: 20px;
        }

        .cf2-h1 {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 900;
          color: var(--text-dark);
          letter-spacing: -.03em;
          line-height: 1.1;
          margin-bottom: 14px;
        }

        .cf2-h1-grad {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cf2-sub {
          font-size: 15px;
          color: var(--text-medium);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ══ MODE ROW: full-bleed split-panel ══ */
        .cf2-mode-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1.5px solid var(--border);
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 600px) {
          .cf2-mode-row { grid-template-columns: 1fr; }
          .cf2-mcard:first-child { border-right: none; border-bottom: 1.5px solid var(--border); }
        }

        .cf2-mcard {
          position: relative;
          padding: 44px 36px;
          cursor: pointer;
          border: none;
          background: var(--bg-main);
          text-align: left;
          font-family: inherit;
          transition: background .3s ease;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
          outline: none;
        }

        .cf2-mcard:first-child { border-right: 1.5px solid var(--border); }

        /* radial wash on hover */
        .cf2-mcard::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity .4s;
          pointer-events: none;
        }

        .cf2-mcard--p::after {
          background: radial-gradient(ellipse at 20% 10%, color-mix(in srgb, var(--primary) 8%, transparent), transparent 65%);
        }

        .cf2-mcard--i::after {
          background: radial-gradient(ellipse at 20% 10%, color-mix(in srgb, var(--extra-indigo) 8%, transparent), transparent 65%);
        }

        .cf2-mcard:hover::after { opacity: 1; }

        .cf2-mcard--p:hover { background: color-mix(in srgb, var(--primary) 2%, white); }
        .cf2-mcard--i:hover { background: color-mix(in srgb, var(--extra-indigo) 2%, white); }

        /* large ghost number */
        .cf2-mcard-num {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 900;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .cf2-mcard--p .cf2-mcard-num { background: var(--primary-light); color: var(--primary); }
        .cf2-mcard--i .cf2-mcard-num { background: color-mix(in srgb, var(--extra-indigo) 10%, transparent); color: var(--extra-indigo); }

        /* accent rule */
        .cf2-mcard-rule {
          width: 32px;
          height: 2px;
          border-radius: 2px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .cf2-mcard--p .cf2-mcard-rule { background: var(--gradient-primary); }
        .cf2-mcard--i .cf2-mcard-rule { background: linear-gradient(90deg, var(--extra-indigo), var(--extra-purple)); }

        .cf2-mcard-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .cf2-mcard--p .cf2-mcard-label { color: var(--primary); }
        .cf2-mcard--i .cf2-mcard-label { color: var(--extra-indigo); }

        .cf2-mcard-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -.02em;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .cf2-mcard-desc {
          font-size: 13px;
          color: var(--text-medium);
          line-height: 1.7;
          margin-bottom: 32px;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        /* pill CTA */
        .cf2-mcard-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 11px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          font-family: inherit;
          border: none;
          cursor: pointer;
          transition: all .25s;
          position: relative;
          z-index: 1;
          width: fit-content;
        }

        .cf2-mcard-btn--p {
          background: var(--primary);
          color: #fff;
          box-shadow: 0 6px 16px color-mix(in srgb, var(--primary) 28%, transparent);
        }

        .cf2-mcard-btn--i {
          background: var(--extra-indigo);
          color: #fff;
          box-shadow: 0 6px 16px color-mix(in srgb, var(--extra-indigo) 28%, transparent);
        }

        .cf2-mcard--p:hover .cf2-mcard-btn--p { background: var(--primary-dark); transform: translateY(-1px); }
        .cf2-mcard--i:hover .cf2-mcard-btn--i { background: #4555d8; transform: translateY(-1px); }

        .cf2-mcard-arrow { transition: transform .2s; }
        .cf2-mcard:hover .cf2-mcard-arrow { transform: translateX(3px); }

        /* watermark deco */
        .cf2-mcard-deco {
          position: absolute;
          bottom: 16px;
          right: 24px;
          font-size: 80px;
          font-weight: 900;
          line-height: 1;
          opacity: .04;
          letter-spacing: -.04em;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .cf2-mcard--p .cf2-mcard-deco { color: var(--primary); }
        .cf2-mcard--i .cf2-mcard-deco { color: var(--extra-indigo); }

        /* ══ FORM PANEL ══ */
        .cf2-panel {
          background: var(--bg-main);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        /* top bar */
        .cf2-panel-bar {
          padding: 18px 32px;
          border-bottom: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .cf2-panel-bar-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .cf2-panel-bar--p .cf2-panel-bar-dot { background: var(--primary); }
        .cf2-panel-bar--i .cf2-panel-bar-dot { background: var(--extra-indigo); }

        .cf2-panel-bar-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-dark);
          flex: 1;
        }

        .cf2-back {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-light);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          transition: all .2s;
        }

        .cf2-back:hover { color: var(--text-dark); background: var(--bg-light); }

        /* two-column body */
        .cf2-panel-body {
          display: grid;
          grid-template-columns: 200px 1fr;
        }

        @media (max-width: 680px) {
          .cf2-panel-body { grid-template-columns: 1fr; }
          .cf2-sidebar { display: none; }
        }

        /* ── sidebar ── */
        .cf2-sidebar {
          padding: 32px 22px;
          border-right: 1.5px solid var(--border);
          background: var(--bg-light);
        }

        .cf2-sidebar-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .07em;
          color: var(--text-light);
          margin-bottom: 20px;
        }

        .cf2-step {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-bottom: 4px;
        }

        .cf2-step-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 1px;
          background: var(--bg-main);
          color: var(--text-light);
          transition: all .3s;
        }

        .cf2-step-dot--p { background: var(--primary); border-color: var(--primary); color: #fff; }
        .cf2-step-dot--i { background: var(--extra-indigo); border-color: var(--extra-indigo); color: #fff; }
        .cf2-step-dot--done { background: var(--accent-green); border-color: var(--accent-green); color: #fff; }

        .cf2-step-name {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .cf2-step-hint {
          font-size: 11px;
          color: var(--text-light);
          margin-top: 2px;
          line-height: 1.4;
        }

        .cf2-connector {
          width: 2px;
          height: 14px;
          margin: 3px 0 3px 11px;
          border-radius: 2px;
          background: var(--border);
        }

        /* ── form area ── */
        .cf2-form-area {
          padding: 32px 36px;
        }

        .cf2-fg { margin-bottom: 24px; }

        .cf2-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .05em;
          color: var(--text-dark);
          display: block;
          margin-bottom: 10px;
        }

        .cf2-label-hint {
          text-transform: none;
          font-weight: 400;
          color: var(--text-light);
          letter-spacing: 0;
          font-size: 11px;
        }

        .cf2-required { color: var(--danger); }

        /* ── chips ── */
        .cf2-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .cf2-chip {
          padding: 6px 15px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--bg-main);
          color: var(--text-medium);
          font-size: 12px;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: all .2s;
          outline: none;
          line-height: 1.4;
        }

        .cf2-chip:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-light);
        }

        .cf2-chip--p {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          color: #fff !important;
          font-weight: 600;
        }

        .cf2-chip--i {
          background: var(--extra-indigo) !important;
          border-color: var(--extra-indigo) !important;
          color: #fff !important;
          font-weight: 600;
        }

        /* ── college inputs ── */
        .cf2-inputs-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
        }

        .cf2-ci-wrap { position: relative; }

        .cf2-ci-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cf2-ci-idx {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--primary-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .cf2-ci-field { position: relative; flex: 1; }

        .cf2-ci-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
          pointer-events: none;
        }

        .cf2-ci-inp {
          width: 100%;
          height: 44px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 0 14px 0 36px;
          font-size: 13px;
          font-family: inherit;
          color: var(--text-dark);
          outline: none;
          transition: all .2s;
          background: var(--bg-main);
          box-sizing: border-box;
        }

        .cf2-ci-inp:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 10%, transparent);
        }

        .cf2-ci-rm {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: none;
          background: var(--bg-light);
          color: var(--text-light);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all .2s;
        }

        .cf2-ci-rm:hover {
          background: color-mix(in srgb, var(--danger) 10%, transparent);
          color: var(--danger);
        }

        /* dropdown */
        .cf2-dropdown {
          position: absolute;
          top: 50px;
          left: 36px;
          right: 0;
          background: var(--bg-main);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          z-index: 20;
          overflow: hidden;
        }

        .cf2-dropdown-item {
          width: 100%;
          text-align: left;
          padding: 10px 14px;
          border: none;
          background: var(--bg-main);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid var(--border);
          transition: all .15s;
          font-family: inherit;
        }

        .cf2-dropdown-item:last-child { border-bottom: none; }
        .cf2-dropdown-item:hover { background: var(--primary-light); }

        .cf2-dropdown-flag { font-size: 15px; }

        .cf2-dropdown-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-dark);
        }

        .cf2-dropdown-city {
          font-size: 11px;
          color: var(--text-light);
        }

        /* add slot */
        .cf2-add-slot {
          width: 100%;
          padding: 11px;
          border: 1.5px dashed var(--border);
          border-radius: var(--radius-md);
          background: none;
          font-family: inherit;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--primary);
          cursor: pointer;
          transition: all .2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        .cf2-add-slot:hover {
          border-color: var(--primary);
          background: var(--primary-light);
        }

        /* separator */
        .cf2-sep {
          height: 1px;
          background: var(--border);
          border: none;
          margin: 8px 0 24px 0;
        }

        /* textarea */
        .cf2-textarea {
          width: 100%;
          min-height: 80px;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 12px 14px;
          font-size: 13px;
          font-family: inherit;
          color: var(--text-dark);
          outline: none;
          resize: vertical;
          transition: all .2s;
          box-sizing: border-box;
          line-height: 1.5;
          background: var(--bg-main);
        }

        .cf2-textarea:focus { border-color: var(--primary); }
        .cf2-textarea--i:focus { border-color: var(--extra-indigo); }

        /* error */
        .cf2-error {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--danger);
          font-size: 12.5px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        /* submit */
        .cf2-submit {
          width: 100%;
          padding: 15px 24px;
          border-radius: var(--radius-md);
          border: none;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          transition: all .25s;
        }

        .cf2-submit:hover { transform: translateY(-2px); }

        .cf2-submit--p {
          background: var(--gradient-primary);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--primary) 22%, transparent);
        }

        .cf2-submit--p:hover {
          box-shadow: 0 14px 32px color-mix(in srgb, var(--primary) 32%, transparent);
        }

        .cf2-submit--i {
          background: linear-gradient(90deg, var(--extra-indigo), var(--extra-purple));
          box-shadow: 0 8px 24px color-mix(in srgb, var(--extra-indigo) 22%, transparent);
        }

        .cf2-submit--i:hover {
          box-shadow: 0 14px 32px color-mix(in srgb, var(--extra-indigo) 32%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .cf2-mcard, .cf2-submit, .cf2-chip,
          .cf2-mcard-arrow, .cf2-mcard-btn,
          .cf2-step-dot { transition: none; }
        }
      `}</style>
    </section>
  );
}