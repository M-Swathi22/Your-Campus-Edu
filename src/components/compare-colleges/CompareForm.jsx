import { useState } from "react";
import { Sparkles, ArrowRight, AlertCircle, X, Search, GitCompareArrows, Wand2 } from "lucide-react";
import { searchColleges } from "../../utils/compareCalculator";
import { COUNTRY_OPTIONS, FIELD_OPTIONS, PRIORITY_OPTIONS } from "../../data/collegesData";

/* ─── Chip ─── */
function Chip({ label, selected, onClick }) {
  return (
    <button type="button" onClick={onClick}
      style={{ padding: "9px 16px", borderRadius: "100px", border: selected ? "2px solid var(--primary)" : "1.5px solid var(--border)", background: selected ? "var(--primary)" : "#fff", color: selected ? "#fff" : "var(--text-medium)", fontSize: "13px", fontWeight: selected ? 600 : 500, fontFamily: "var(--font-main)", cursor: "pointer", transition: "var(--transition)" }}
      onMouseEnter={(e) => { if (!selected) { e.currentTarget.style.borderColor = "var(--primary)"; e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.background = "var(--primary-light)"; } }}
      onMouseLeave={(e) => { if (!selected) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-medium)"; e.currentTarget.style.background = "#fff"; } }}>
      {label}
    </button>
  );
}

/* ─── College name input with autocomplete ─── */
function CollegeInput({ value, onChange, onRemove, placeholder, index }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInput = (val) => {
    onChange(val);
    setSuggestions(searchColleges(val));
    setShowSuggestions(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, flexShrink: 0 }}>
          {index + 1}
        </div>
        <div style={{ position: "relative", flex: 1 }}>
          <Search size={15} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--text-light)" }} />
          <input
            type="text"
            value={value}
            onChange={(e) => handleInput(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            placeholder={placeholder}
            style={{ width: "100%", height: "48px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "0 16px 0 40px", fontSize: "14px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", transition: "var(--transition)" }}
            onKeyDown={(e) => { if (e.target === document.activeElement) e.currentTarget.style.borderColor = "var(--primary)"; }}
          />
        </div>
        {onRemove && (
          <button type="button" onClick={onRemove} style={{ width: "32px", height: "32px", borderRadius: "50%", border: "none", background: "var(--bg-light)", color: "var(--text-light)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <X size={15} />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div style={{ position: "absolute", top: "52px", left: "36px", right: "0", background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)", zIndex: 10, overflow: "hidden" }}>
          {suggestions.map((s) => (
            <button key={s.id} type="button"
              onMouseDown={() => { onChange(s.name); setShowSuggestions(false); }}
              style={{ width: "100%", textAlign: "left", padding: "10px 16px", border: "none", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid var(--border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--primary-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}>
              <span style={{ fontSize: "16px" }}>{s.flag}</span>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-dark)" }}>{s.name}</div>
                <div style={{ fontSize: "11px", color: "var(--text-light)" }}>{s.city}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CompareForm({ onSubmit }) {
  const [mode, setMode] = useState(null); // "specific" | "suggest"
  const [collegeNames, setCollegeNames] = useState(["", ""]);
  const [countries, setCountries] = useState([]);
  const [fields, setFields] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [studentField, setStudentField] = useState("");
  const [studentLevel, setStudentLevel] = useState("");
  const [budgetSensitivity, setBudgetSensitivity] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [error, setError] = useState("");

  const togglePriority = (p) => setPriorities((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : prev.length < 4 ? [...prev, p] : prev);
  const toggleCountry = (c) => setCountries((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);
  const toggleField = (f) => setFields((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);

  const updateCollegeName = (i, val) => setCollegeNames((prev) => prev.map((v, idx) => idx === i ? val : v));
  const addCollegeSlot = () => collegeNames.length < 4 && setCollegeNames((prev) => [...prev, ""]);
  const removeCollegeSlot = (i) => setCollegeNames((prev) => prev.filter((_, idx) => idx !== i));

  const handleSubmitSpecific = () => {
    const filled = collegeNames.filter((n) => n.trim());
    if (filled.length < 2) { setError("Please enter at least 2 colleges to compare."); return; }
    setError("");
    onSubmit({
      mode: "specific",
      collegeNames: filled,
      priorities,
      studentProfile: { field: studentField, level: studentLevel, budgetSensitivity },
      extraInfo,
    });
  };

  const handleSubmitSuggest = () => {
    if (!studentField) { setError("Please tell us your field of interest."); return; }
    if (priorities.length === 0) { setError("Please pick at least one priority."); return; }
    setError("");
    onSubmit({
      mode: "suggest",
      countries,
      fields: fields.length ? fields : [studentField],
      priorities,
      studentProfile: { field: studentField, level: studentLevel, budgetSensitivity },
      extraInfo,
    });
  };

  return (
    <section id="compare-form" style={{ fontFamily: "var(--font-main)", background: "var(--bg-light)", padding: "80px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "var(--primary-light)", color: "var(--primary)", borderRadius: "100px", padding: "7px 18px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
            <Sparkles size={14} /> College Comparison
          </span>
          <h2 style={{ fontSize: "clamp(24px,4vw,38px)", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.2, marginBottom: "12px" }}>How Would You Like to Compare?</h2>
          <p style={{ fontSize: "15px", color: "var(--text-medium)", maxWidth: "480px", margin: "0 auto" }}>Already have colleges in mind, or want AI to suggest the best fit for you?</p>
        </div>

        {/* Mode selector */}
        {!mode && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="mode-grid">
            {[
              { key: "specific", icon: GitCompareArrows, title: "I Know My Colleges", subtitle: "Enter 2–4 specific colleges and compare them head-to-head", tag: "Direct Compare", color: "var(--primary)", bg: "var(--primary-light)" },
              { key: "suggest", icon: Wand2, title: "Suggest Colleges For Me", subtitle: "Tell us your field & priorities — AI picks the top 4 matches", tag: "AI Suggested", color: "var(--extra-indigo)", bg: "rgba(88,102,235,0.08)" },
            ].map(({ key, icon: Icon, title, subtitle, tag, color, bg }) => (
              <button key={key} type="button" onClick={() => setMode(key)}
                style={{ background: "#fff", border: "2px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px 26px", textAlign: "left", cursor: "pointer", transition: "var(--transition)", fontFamily: "var(--font-main)", display: "flex", flexDirection: "column", gap: "14px" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div style={{ width: "50px", height: "50px", borderRadius: "var(--radius-sm)", background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={22} color={color} />
                  </div>
                  <span style={{ background: bg, color, borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{tag}</span>
                </div>
                <div>
                  <div style={{ fontSize: "17px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "6px" }}>{title}</div>
                  <div style={{ fontSize: "13px", color: "var(--text-medium)", lineHeight: 1.6 }}>{subtitle}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color, fontWeight: 700, fontSize: "13px" }}>Select →</div>
              </button>
            ))}
          </div>
        )}

        {/* SPECIFIC MODE */}
        {mode === "specific" && (
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "clamp(28px,5vw,44px)", boxShadow: "var(--shadow-md)" }}>
            <button type="button" onClick={() => setMode(null)} style={{ background: "none", border: "none", color: "var(--text-light)", fontSize: "13px", fontWeight: 600, cursor: "pointer", marginBottom: "20px", fontFamily: "var(--font-main)", padding: 0 }}>← Change mode</button>

            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "6px" }}>Enter Colleges to Compare</h3>
            <p style={{ fontSize: "13px", color: "var(--text-light)", marginBottom: "24px" }}>Type a name and pick from suggestions, or type any college freely.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "16px" }}>
              {collegeNames.map((name, i) => (
                <CollegeInput key={i} value={name} onChange={(v) => updateCollegeName(i, v)} onRemove={collegeNames.length > 2 ? () => removeCollegeSlot(i) : null} placeholder={`College ${i + 1} — e.g. IIT Madras`} index={i} />
              ))}
            </div>

            {collegeNames.length < 4 && (
              <button type="button" onClick={addCollegeSlot} style={{ background: "none", border: "1.5px dashed var(--border)", borderRadius: "var(--radius-sm)", padding: "10px 16px", color: "var(--primary)", fontSize: "13px", fontWeight: 600, fontFamily: "var(--font-main)", cursor: "pointer", marginBottom: "28px", width: "100%" }}>
                + Add another college
              </button>
            )}

            {/* Optional context */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "10px" }}>What matters most to you? (pick up to 4)</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {PRIORITY_OPTIONS.map((p) => <Chip key={p} label={p} selected={priorities.includes(p)} onClick={() => togglePriority(p)} />)}
              </div>
            </div>

            <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} placeholder="Anything else — e.g. I prefer smaller class sizes, I have a GATE score of 650…"
              style={{ width: "100%", minHeight: "80px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "12px 16px", fontSize: "14px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", resize: "vertical", marginBottom: "20px" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />

            {error && <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--danger)", fontSize: "13px", marginBottom: "16px" }}><AlertCircle size={15} />{error}</div>}

            <button type="button" onClick={handleSubmitSpecific}
              style={{ width: "100%", padding: "15px 24px", borderRadius: "var(--radius-md)", border: "none", background: "var(--gradient-primary)", color: "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxShadow: "0 8px 24px rgba(49,185,120,0.25)" }}>
              <Sparkles size={17} /> Compare These Colleges <ArrowRight size={17} />
            </button>
          </div>
        )}

        {/* SUGGEST MODE */}
        {mode === "suggest" && (
          <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "clamp(28px,5vw,44px)", boxShadow: "var(--shadow-md)" }}>
            <button type="button" onClick={() => setMode(null)} style={{ background: "none", border: "none", color: "var(--text-light)", fontSize: "13px", fontWeight: 600, cursor: "pointer", marginBottom: "20px", fontFamily: "var(--font-main)", padding: 0 }}>← Change mode</button>

            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "6px" }}>Let AI Suggest the Best Colleges</h3>
            <p style={{ fontSize: "13px", color: "var(--text-light)", marginBottom: "24px" }}>Tell us about yourself and we'll find the top 4 matches.</p>

            <div style={{ marginBottom: "22px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "10px" }}>Field of interest <span style={{ color: "var(--danger)" }}>*</span></label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {FIELD_OPTIONS.map((f) => <Chip key={f} label={f} selected={studentField === f} onClick={() => setStudentField(f)} />)}
              </div>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "10px" }}>Study level</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Undergraduate", "Postgraduate", "PhD"].map((l) => <Chip key={l} label={l} selected={studentLevel === l} onClick={() => setStudentLevel(l)} />)}
              </div>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "10px" }}>Preferred countries (optional — leave blank for any)</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {COUNTRY_OPTIONS.map((c) => <Chip key={c.value} label={c.label} selected={countries.includes(c.value)} onClick={() => toggleCountry(c.value)} />)}
              </div>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "10px" }}>Budget sensitivity</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Very budget-conscious", "Moderate budget", "Budget is not a constraint"].map((b) => <Chip key={b} label={b} selected={budgetSensitivity === b} onClick={() => setBudgetSensitivity(b)} />)}
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-medium)", display: "block", marginBottom: "10px" }}>What matters most? (pick up to 4) <span style={{ color: "var(--danger)" }}>*</span></label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {PRIORITY_OPTIONS.map((p) => <Chip key={p} label={p} selected={priorities.includes(p)} onClick={() => togglePriority(p)} />)}
              </div>
            </div>

            <textarea value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} placeholder="Anything else — e.g. I want a college with strong AI research, I prefer warmer climates…"
              style={{ width: "100%", minHeight: "80px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)", padding: "12px 16px", fontSize: "14px", fontFamily: "var(--font-main)", color: "var(--text-dark)", outline: "none", resize: "vertical", marginBottom: "20px" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--extra-indigo)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />

            {error && <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--danger)", fontSize: "13px", marginBottom: "16px" }}><AlertCircle size={15} />{error}</div>}

            <button type="button" onClick={handleSubmitSuggest}
              style={{ width: "100%", padding: "15px 24px", borderRadius: "var(--radius-md)", border: "none", background: "linear-gradient(90deg, var(--extra-indigo) 0%, var(--primary) 100%)", color: "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxShadow: "0 8px 24px rgba(88,102,235,0.25)" }}>
              <Wand2 size={17} /> Find My Best-Fit Colleges <ArrowRight size={17} />
            </button>
          </div>
        )}
      </div>

      <style>{`@media(max-width:600px){ .mode-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}