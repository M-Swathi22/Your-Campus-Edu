import { Trophy, DollarSign, Briefcase, TrendingUp, UserCheck, Users, Award, Building2, Crown } from "lucide-react";

const ICONS = { Trophy, DollarSign, Briefcase, TrendingUp, UserCheck, Users, Award, Building2 };

function fmtINR(n) {
  if (!n) return "—";
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`;
  return `₹${Number(n).toLocaleString("en-IN")}`;
}

const ROW_DEFS = [
  { key: "ranking",      label: "Global Ranking",        icon: "Trophy",      get: (c) => c.ranking?.label || "—" },
  { key: "fees",         label: "Total Program Fees",    icon: "DollarSign",  get: (c) => c.fees?.label || fmtINR(c.fees?.totalINR) },
  { key: "placement",    label: "Placement Rate",        icon: "Briefcase",   get: (c) => c.placementRate || "—" },
  { key: "avgPackage",   label: "Average Package",       icon: "TrendingUp",  get: (c) => c.avgPackageLPA ? `₹${c.avgPackageLPA} LPA` : "—" },
  { key: "highPackage",  label: "Highest Package",       icon: "TrendingUp",  get: (c) => c.highestPackageLPA ? `₹${c.highestPackageLPA} LPA` : "—" },
  { key: "acceptance",   label: "Acceptance Rate",       icon: "UserCheck",   get: (c) => c.acceptanceRate || "—" },
  { key: "facultyRatio", label: "Student:Faculty Ratio", icon: "Users",       get: (c) => c.facultyRatio || "—" },
  { key: "scholarships", label: "Scholarships",          icon: "Award",       get: (c) => c.scholarships || "—" },
  { key: "campusLife",   label: "Campus & Facilities",   icon: "Building2",   get: (c) => c.campusLife || "—" },
];

export default function ComparisonTable({ colleges = [], parameterWinners = [], recommendedCollege }) {
  if (!colleges.length) return null;

  const winnerFor = (label) => parameterWinners.find((w) => w.parameter?.toLowerCase().includes(label.toLowerCase()) || label.toLowerCase().includes(w.parameter?.toLowerCase()));

  return (
    <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)", marginBottom: "32px" }}>

      {/* Scroll wrapper for mobile */}
      <div style={{ overflowX: "auto" }}>
        <div style={{ minWidth: `${280 + colleges.length * 200}px` }}>

          {/* Header row — college names */}
          <div style={{ display: "grid", gridTemplateColumns: `240px repeat(${colleges.length}, 1fr)`, borderBottom: "2px solid var(--border)" }}>
            <div style={{ padding: "20px 24px", display: "flex", alignItems: "flex-end" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Parameter</span>
            </div>
            {colleges.map((c, i) => {
              const isRecommended = c.name === recommendedCollege;
              return (
                <div key={i} style={{ padding: "20px 16px", textAlign: "center", background: isRecommended ? "var(--primary-light)" : "transparent", position: "relative" }}>
                  {isRecommended && (
                    <div style={{ position: "absolute", top: "8px", right: "8px" }}>
                      <Crown size={16} color="var(--primary)" fill="var(--primary)" />
                    </div>
                  )}
                  <div style={{ fontSize: "22px", marginBottom: "6px" }}>{c.flag}</div>
                  <div style={{ fontSize: "13px", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.3, marginBottom: "4px" }}>{c.name}</div>
                  <div style={{ fontSize: "11px", color: "var(--text-light)" }}>{c.city}</div>
                  {/* Overall score */}
                  <div style={{ marginTop: "10px", display: "inline-flex", alignItems: "center", gap: "4px", background: c.overallScore >= 85 ? "rgba(49,185,120,0.12)" : "var(--primary-light)", color: c.overallScore >= 85 ? "var(--accent-green)" : "var(--primary)", borderRadius: "100px", padding: "4px 12px", fontSize: "12px", fontWeight: 800 }}>
                    {c.overallScore}% fit
                  </div>
                </div>
              );
            })}
          </div>

          {/* Data rows */}
          {ROW_DEFS.map((row, rowIdx) => {
            const Icon = ICONS[row.icon];
            const winner = winnerFor(row.label);
            return (
              <div key={row.key} style={{ display: "grid", gridTemplateColumns: `240px repeat(${colleges.length}, 1fr)`, borderBottom: rowIdx < ROW_DEFS.length - 1 ? "1px solid var(--border)" : "none", background: rowIdx % 2 === 0 ? "#fff" : "var(--bg-light)" }}>
                <div style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: "10px" }}>
                  {Icon && <Icon size={15} color="var(--text-light)" />}
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-dark)" }}>{row.label}</span>
                </div>
                {colleges.map((c, i) => {
                  const value = row.get(c);
                  const isWinner = winner?.winner === c.name;
                  return (
                    <div key={i} style={{ padding: "16px 12px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                      <span style={{ fontSize: "13px", fontWeight: isWinner ? 800 : 500, color: isWinner ? "var(--accent-green)" : "var(--text-medium)", lineHeight: 1.4 }}>
                        {value}
                      </span>
                      {isWinner && (
                        <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--accent-green)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          ✓ Best
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}