/* ================================================================== */
/*  DOMESTIC (INDIA) COLLEGE DIRECTORY — powers /study-india/colleges */
/*  Anchored to stateId + cityId from indianStates.js so a college    */
/*  list always resolves through State → City → Colleges.             */
/* ================================================================== */
import { getStateById, getCityById } from "./indianStates";
import { destinations, origin } from "../Data/countrydetails"; // ← study-abroad country list

export const COLLEGE_TYPES = ["Government", "Private", "Autonomous", "Deemed", ];

export const curatedColleges = [
  // ---------------- TAMIL NADU ----------------
  {
    id: "iit-madras", name: "IIT Madras", stateId: "tamil-nadu", cityId: "chennai",
    type: "Government", established: 1959, affiliation: "Institute of National Importance",
    courses: ["Engineering & Technology", "Computer Science & IT", "Pure Sciences"],
    feesPerYearINR: 200000, nirfRank: 1, rating: 4.8, placementRate: "98%",
    hostelAvailable: true, tags: ["Top Ranked", "Research Excellence"],
  },
  {
    id: "anna-university", name: "Anna University", stateId: "tamil-nadu", cityId: "chennai",
    type: "Government", established: 1978, affiliation: "State University",
    courses: ["Engineering & Technology", "Computer Science & IT"],
    feesPerYearINR: 65000, nirfRank: 9, rating: 4.4, placementRate: "91%",
    hostelAvailable: true, tags: ["Affordable", "Strong Alumni Network"],
  },
  {
    id: "loyola-college", name: "Loyola College", stateId: "tamil-nadu", cityId: "chennai",
    type: "Autonomous", established: 1925, affiliation: "University of Madras",
    courses: ["Arts & Humanities", "Pure Sciences", "Business & Management"],
    feesPerYearINR: 45000, nirfRank: 18, rating: 4.6, placementRate: "88%",
    hostelAvailable: true, tags: ["Heritage Institute", "NAAC A++"],
  },
  {
    id: "psg-tech", name: "PSG College of Technology", stateId: "tamil-nadu", cityId: "coimbatore",
    type: "Autonomous", established: 1951, affiliation: "Anna University",
    courses: ["Engineering & Technology", "Textile & Design"],
    feesPerYearINR: 130000, nirfRank: 32, rating: 4.6, placementRate: "94%",
    hostelAvailable: true, tags: ["Industry-Linked", "NAAC A++"],
  },
  {
    id: "coimbatore-institute-of-technology", name: "Coimbatore Institute of Technology",
    stateId: "tamil-nadu", cityId: "coimbatore", type: "Autonomous", established: 1956,
    affiliation: "Anna University", courses: ["Engineering & Technology", "Pure Sciences"],
    feesPerYearINR: 95000, nirfRank: 78, rating: 4.3, placementRate: "87%",
    hostelAvailable: true, tags: ["Legacy Institute"],
  },
  {
    id: "grd-college", name: "GRD College of Science", stateId: "tamil-nadu", cityId: "coimbatore",
    type: "Private", established: 1984, affiliation: "Bharathiar University",
    courses: ["Textile & Design", "Pure Sciences"],
    feesPerYearINR: 58000, nirfRank: null, rating: 4.1, placementRate: "80%",
    hostelAvailable: true, tags: ["Women's College"],
  },
  {
    id: "madurai-kamaraj-university", name: "Madurai Kamaraj University",
    stateId: "tamil-nadu", cityId: "madurai", type: "Government", established: 1966,
    affiliation: "State University", courses: ["Medical & Health Sciences", "Arts & Humanities"],
    feesPerYearINR: 38000, nirfRank: 61, rating: 4.2, placementRate: "82%",
    hostelAvailable: true, tags: ["Affordable"],
  },
  {
    id: "thiagarajar-college-of-engineering", name: "Thiagarajar College of Engineering",
    stateId: "tamil-nadu", cityId: "madurai", type: "Autonomous", established: 1957,
    affiliation: "Anna University", courses: ["Engineering & Technology"],
    feesPerYearINR: 88000, nirfRank: 65, rating: 4.4, placementRate: "89%",
    hostelAvailable: true, tags: ["NAAC A++"],
  },
  {
    id: "nit-trichy", name: "NIT Tiruchirappalli", stateId: "tamil-nadu", cityId: "tiruchirappalli",
    type: "Government", established: 1964, affiliation: "Institute of National Importance",
    courses: ["Engineering & Technology", "Pure Sciences"],
    feesPerYearINR: 160000, nirfRank: 9, rating: 4.7, placementRate: "96%",
    hostelAvailable: true, tags: ["Top Ranked", "Research Excellence"],
  },
  {
    id: "bishop-heber-college", name: "Bishop Heber College", stateId: "tamil-nadu",
    cityId: "tiruchirappalli", type: "Autonomous", established: 1886,
    affiliation: "Bharathidasan University", courses: ["Arts & Humanities", "Pure Sciences"],
    feesPerYearINR: 42000, nirfRank: 45, rating: 4.5, placementRate: "84%",
    hostelAvailable: true, tags: ["Heritage Institute"],
  },

  // ---------------- KERALA ----------------
  {
    id: "iist-thiruvananthapuram", name: "Indian Institute of Space Science & Technology",
    stateId: "kerala", cityId: "thiruvananthapuram", type: "Government", established: 2007,
    affiliation: "Institute of National Importance",
    courses: ["Engineering & Technology", "Computer Science & IT"],
    feesPerYearINR: 105000, nirfRank: 27, rating: 4.6, placementRate: "93%",
    hostelAvailable: true, tags: ["Research Excellence"],
  },
  {
    id: "university-college-tvm", name: "University College Thiruvananthapuram",
    stateId: "kerala", cityId: "thiruvananthapuram", type: "Government", established: 1834,
    affiliation: "University of Kerala", courses: ["Pure Sciences", "Arts & Humanities"],
    feesPerYearINR: 22000, nirfRank: null, rating: 4.3, placementRate: "78%",
    hostelAvailable: true, tags: ["Heritage Institute", "Affordable"],
  },
  {
    id: "cusat", name: "Cochin University of Science & Technology", stateId: "kerala", cityId: "kochi",
    type: "Government", established: 1971, affiliation: "State University",
    courses: ["Engineering & Technology", "Business & Management"],
    feesPerYearINR: 68000, nirfRank: 71, rating: 4.4, placementRate: "88%",
    hostelAvailable: true, tags: ["NAAC A++"],
  },
  {
    id: "rajagiri-business-school", name: "Rajagiri Business School", stateId: "kerala", cityId: "kochi",
    type: "Private", established: 2004, affiliation: "Autonomous",
    courses: ["Business & Management"], feesPerYearINR: 380000, nirfRank: null,
    rating: 4.3, placementRate: "90%", hostelAvailable: true, tags: ["Industry-Linked"],
  },
  {
    id: "govt-medical-college-kozhikode", name: "Government Medical College, Kozhikode",
    stateId: "kerala", cityId: "kozhikode", type: "Government", established: 1957,
    affiliation: "Kerala University of Health Sciences", courses: ["Medical & Health Sciences"],
    feesPerYearINR: 32000, nirfRank: 44, rating: 4.5, placementRate: "95%",
    hostelAvailable: true, tags: ["Top Ranked", "Affordable"],
  },

  // ---------------- KARNATAKA ----------------
  {
    id: "iisc-bengaluru", name: "Indian Institute of Science", stateId: "karnataka", cityId: "bengaluru",
    type: "Government", established: 1909, affiliation: "Institute of National Importance",
    courses: ["Engineering & Technology", "Pure Sciences"],
    feesPerYearINR: 30000, nirfRank: 2, rating: 4.9, placementRate: "97%",
    hostelAvailable: true, tags: ["Top Ranked", "Research Excellence"],
  },
  {
    id: "rv-college-of-engineering", name: "RV College of Engineering", stateId: "karnataka",
    cityId: "bengaluru", type: "Private", established: 1963, affiliation: "VTU",
    courses: ["Engineering & Technology", "Computer Science & IT"],
    feesPerYearINR: 220000, nirfRank: 87, rating: 4.5, placementRate: "92%",
    hostelAvailable: true, tags: ["Industry-Linked"],
  },
  {
    id: "christ-university", name: "Christ University", stateId: "karnataka", cityId: "bengaluru",
    type: "Deemed", established: 1969, affiliation: "Deemed University",
    courses: ["Business & Management", "Arts & Humanities"],
    feesPerYearINR: 210000, nirfRank: 34, rating: 4.5, placementRate: "89%",
    hostelAvailable: true, tags: ["NAAC A++"],
  },
  {
    id: "university-of-mysore", name: "University of Mysore", stateId: "karnataka", cityId: "mysuru",
    type: "Government", established: 1916, affiliation: "State University",
    courses: ["Arts & Humanities", "Pure Sciences"],
    feesPerYearINR: 24000, nirfRank: 54, rating: 4.3, placementRate: "80%",
    hostelAvailable: true, tags: ["Heritage Institute", "Affordable"],
  },
  {
    id: "kasturba-medical-college-mangaluru", name: "Kasturba Medical College", stateId: "karnataka",
    cityId: "mangaluru", type: "Private", established: 1953,
    affiliation: "Manipal Academy of Higher Education", courses: ["Medical & Health Sciences"],
    feesPerYearINR: 1250000, nirfRank: 6, rating: 4.7, placementRate: "97%",
    hostelAvailable: true, tags: ["Top Ranked"],
  },

  // ---------------- ANDHRA PRADESH ----------------
  {
    id: "iit-tirupati", name: "IIT Tirupati", stateId: "andhra-pradesh", cityId: "tirupati",
    type: "Government", established: 2015, affiliation: "Institute of National Importance",
    courses: ["Engineering & Technology", "Pure Sciences"],
    feesPerYearINR: 200000, nirfRank: 40, rating: 4.5, placementRate: "91%",
    hostelAvailable: true, tags: ["Research Excellence"],
  },
  {
    id: "svu-tirupati", name: "Sri Venkateswara University", stateId: "andhra-pradesh",
    cityId: "tirupati", type: "Government", established: 1954, affiliation: "State University",
    courses: ["Arts & Humanities", "Pure Sciences"],
    feesPerYearINR: 26000, nirfRank: 89, rating: 4.1, placementRate: "76%",
    hostelAvailable: true, tags: ["Affordable"],
  },
  {
    id: "andhra-university-vizag", name: "Andhra University", stateId: "andhra-pradesh",
    cityId: "visakhapatnam", type: "Government", established: 1926, affiliation: "State University",
    courses: ["Engineering & Technology", "Pure Sciences"],
    feesPerYearINR: 34000, nirfRank: 47, rating: 4.3, placementRate: "83%",
    hostelAvailable: true, tags: ["Heritage Institute"],
  },
  {
    id: "gitam-vizag", name: "GITAM University", stateId: "andhra-pradesh", cityId: "visakhapatnam",
    type: "Deemed", established: 1980, affiliation: "Deemed University",
    courses: ["Engineering & Technology", "Business & Management"],
    feesPerYearINR: 195000, nirfRank: 63, rating: 4.3, placementRate: "86%",
    hostelAvailable: true, tags: ["Industry-Linked"],
  },
  {
    id: "krishna-university", name: "Krishna University", stateId: "andhra-pradesh",
    cityId: "vijayawada", type: "Government", established: 2008, affiliation: "State University",
    courses: ["Business & Management", "Medical & Health Sciences"],
    feesPerYearINR: 30000, nirfRank: null, rating: 4.0, placementRate: "74%",
    hostelAvailable: true, tags: ["Affordable"],
  },
];

/* Fallback generator — guarantees every city in indianStates.js resolves
   to a plausible, non-empty result set even without curated data. Seeded
   off that city's own collegeCount/topCourses so numbers stay coherent. */
const INSTITUTE_SUFFIXES = ["Institute of Technology", "College", "University", "College of Arts & Science"];

const generateCollegesForCity = (state, city) => {
  const count = Math.min(6, Math.max(3, Math.round((city.collegeCount || 12) / 8)));
  return Array.from({ length: count }).map((_, i) => {
    const course = city.topCourses?.[i % (city.topCourses?.length || 1)] ?? "General Studies";
    const suffix = INSTITUTE_SUFFIXES[i % INSTITUTE_SUFFIXES.length];
    return {
      id: `${city.id}-generated-${i}`,
      name: `${city.name} ${suffix}`,
      stateId: state.id,
      cityId: city.id,
      type: i % 3 === 0 ? "Government" : i % 3 === 1 ? "Private" : "Autonomous",
      established: 1970 + ((i * 7) % 45),
      affiliation: `${state.name} State University`,
      courses: [course],
      feesPerYearINR: 45000 + i * 18000,
      nirfRank: null,
      rating: 3.8 + (i % 5) * 0.15,
      placementRate: `${75 + (i % 4) * 4}%`,
      hostelAvailable: i % 2 === 0,
      tags: i === 0 ? ["Popular Choice"] : [],
      isGenerated: true,
    };
  });
};

/** Colleges for a given state + city — curated data first, generated fallback. */
export const getCollegesByCity = (stateId, cityId) => {
  const curated = curatedColleges.filter((c) => c.stateId === stateId && c.cityId === cityId);
  if (curated.length > 0) return curated;

  const state = getStateById(stateId);
  const city = getCityById(stateId, cityId);
  if (!state || !city) return [];
  return generateCollegesForCity(state, city);
};

/** All colleges (curated + generated) across every city of a state. */
export const getCollegesByState = (stateId) => {
  const state = getStateById(stateId);
  if (!state) return [];
  return state.cities.flatMap((city) => getCollegesByCity(stateId, city.id));
};

export const formatFeesINR = (amountPerYear) => {
  if (!amountPerYear) return "N/A";
  if (amountPerYear >= 100000) return `₹${(amountPerYear / 100000).toFixed(1)}L / yr`;
  return `₹${Math.round(amountPerYear / 1000)}K / yr`;
};

/* ================================================================== */
/*  COMPARISON-TOOL COMPATIBILITY LAYER                                */
/*  compareCalculator.js expects COMPARISON_PARAMS + COLLEGES in the   */
/*  "abroad" comparison shape. We derive both from curatedColleges so  */
/*  there's a single source of truth — no separate data file needed.   */
/* ================================================================== */

export const COMPARISON_PARAMS = [
  { key: "ranking", label: "Ranking (NIRF)" },
  { key: "fees", label: "Total Program Fees" },
  { key: "placementRate", label: "Placement Rate" },
  { key: "avgPackageLPA", label: "Average Package" },
  { key: "acceptanceRate", label: "Acceptance Rate" },
  { key: "facultyRatio", label: "Student:Faculty Ratio" },
  { key: "scholarships", label: "Scholarships" },
  { key: "campusLife", label: "Campus Life" },
];

/* Rough, clearly-labelled estimates for fields curatedColleges doesn't
   track (acceptance rate, faculty ratio, package figures, entrance exam).
   Derived from rating/placementRate/nirfRank so numbers stay internally
   consistent — swap in real figures per-college whenever you have them. */
function estimateAcceptanceRate(c) {
  if (c.nirfRank && c.nirfRank <= 10) return "10-20%";
  if (c.nirfRank && c.nirfRank <= 50) return "25-40%";
  return "45-65%";
}
function estimateFacultyRatio(c) {
  return c.type === "Government" ? "10:1" : "14:1";
}
function estimatePackages(c) {
  const base = c.rating >= 4.6 ? 12 : c.rating >= 4.3 ? 8 : 5;
  return { avgPackageLPA: base, highestPackageLPA: base * 3 };
}

/* Maps a curatedColleges entry -> the shape compareCalculator.js needs */
function toCompareShape(c) {
  const state = getStateById(c.stateId);
  const city = getCityById(c.stateId, c.cityId);
  const { avgPackageLPA, highestPackageLPA } = estimatePackages(c);

  return {
    name: c.name,
    flag: "🇮🇳",
    country: "India",
    city: city?.name || "",
    type: c.type,
    establishedYear: c.established,
    courses: c.courses,
    avgFeesINR: c.feesPerYearINR * 4, // approx 4-yr program total
    avgFeesPerYearINR: c.feesPerYearINR,
    ranking: { nirf: c.nirfRank, qsWorld: null },
    acceptanceRate: estimateAcceptanceRate(c),
    studentFacultyRatio: estimateFacultyRatio(c),
    placementRate: c.placementRate,
    avgPackageLPA,
    highestPackageLPA,
    entranceExam: c.courses.includes("Engineering & Technology") ? "JEE / State CET" : "State CET / Merit-based",
    scholarship: c.tags?.includes("Affordable") ? "Government + merit scholarships available" : "Merit-based scholarships available",
    campusSize: `${state?.name || ""} campus`,
    hostelAvailable: c.hostelAvailable,
  };
}

export const COLLEGES = curatedColleges.map(toCompareShape);

/* Country picker for the "AI Discovery" compare-form mode.
   Sourced from countryDetails.js (single source of truth for every study
   destination) instead of a separate hardcoded list, so adding/removing a
   destination country there automatically updates this dropdown too.
   India (the `origin`) is pinned first, the rest are alphabetical. */
export const COUNTRY_OPTIONS = [
  { label: `${origin.flag} ${origin.name}`, value: origin.name },
  ...destinations
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((c) => ({ label: `${c.flag} ${c.name}`, value: c.name })),
];

export const FIELD_OPTIONS = [
  "Engineering & Technology",
  "Computer Science & IT",
  "Business & Management",
  "Medical & Health Sciences",
  "Arts & Humanities",
  "Pure Sciences",
  "Textile & Design",
];

export const PRIORITY_OPTIONS = [
  "Low Fees",
  "High Placement",
  "Top Ranking",
  "Scholarships",
  "Research",
  "Campus Life",
  "Industry Connections",
  "Affordable",
];