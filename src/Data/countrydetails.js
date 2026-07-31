// src/data/countryDetails.js
// Single source of truth for all 8 study-destination countries.
// - `countryDetails` (default export, keyed by id) powers the Country
//   Details page (/study-destination/:countryId).
// - `destinations` (array, same objects as countryDetails values, in
//   display order) and `origin` power the WorldMap flight-path section.

export const origin = {
  id: "india",
  code: "IND",
  flag: "🇮🇳",
  name: "India",
  city: "Coimbatore",
  geoName: "India", // must match the `name` property in the topojson map data
  coords: { lon: 76.9558, lat: 11.0168 },
};

const countryDetails = {
  usa: {
    id: "usa",
    code: "USA",
    flag: "🇺🇸",
    name: "United States",
    geoName: "United States of America",
    gate: "GATE 01",
    heroImage:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1920&auto=format&fit=crop",
    description:
      "Home to over 4,000 accredited campuses, the US offers the widest range of majors on earth — from Ivy League research labs to specialist STEM schools. Optional Practical Training extends every degree into real work experience.",
    tagline: "The widest runway for ambition — 4,000+ campuses, every field.",
    quickStats: {
      topUniversities: "150+",
      internationalStudents: "1M+",
      avgTuition: "₹35–55L /yr",
      popularIntake: "Fall (Aug–Sep)",
    },
    duration: "2–4 yrs",
    intake: "Fall / Spring",
    avgCost: "₹35–55L",
    visaRate: "82%",
    topFields: ["Computer Science", "Business", "Engineering"],
    coords: { lon: -98.35, lat: 39.5 },
  },
  uk: {
    id: "uk",
    code: "UK",
    flag: "🇬🇧",
    name: "United Kingdom",
    geoName: "United Kingdom",
    gate: "GATE 02",
    heroImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1920&auto=format&fit=crop",
    description:
      "One-year Master's programmes mean less time out of the workforce and lower total spend, without trading down on prestige — centuries-old institutions sit alongside modern research powerhouses across every major city.",
    tagline: "One-year Master's, centuries of academic weight behind it.",
    quickStats: {
      topUniversities: "130+",
      internationalStudents: "600K+",
      avgTuition: "₹28–42L /yr",
      popularIntake: "Sept / Jan",
    },
    duration: "1–3 yrs",
    intake: "Sept / Jan",
    avgCost: "₹28–42L",
    visaRate: "88%",
    topFields: ["Finance", "Law", "Data Science"],
    coords: { lon: -1.4, lat: 52.35 },
  },
  canada: {
    id: "canada",
    code: "CAN",
    flag: "🇨🇦",
    name: "Canada",
    geoName: "Canada",
    gate: "GATE 03",
    heroImage:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1920&auto=format&fit=crop",
    description:
      "Post-Graduation Work Permits of up to three years and a clear route to PR make Canada the most settle-friendly gate on this board — paired with tuition well below US and UK equivalents.",
    tagline: "Study now, work-permit runway straight after graduation.",
    quickStats: {
      topUniversities: "100+",
      internationalStudents: "800K+",
      avgTuition: "₹22–35L /yr",
      popularIntake: "Fall / Winter",
    },
    duration: "1–2 yrs",
    intake: "Fall / Winter",
    avgCost: "₹22–35L",
    visaRate: "79%",
    topFields: ["IT", "Healthcare", "Business Analytics"],
    coords: { lon: -85, lat: 56 },
  },
  australia: {
    id: "australia",
    code: "AUS",
    flag: "🇦🇺",
    name: "Australia",
    geoName: "Australia",
    gate: "GATE 04",
    heroImage:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1920&auto=format&fit=crop",
    description:
      "Ranked campuses in Sydney, Melbourne and Brisbane pair with a two-to-four-year post-study work visa — one of the most generous on offer — and a student community that already runs 700,000 strong.",
    tagline: "Ranked campuses, generous post-study work visas, warm welcome.",
    quickStats: {
      topUniversities: "90+",
      internationalStudents: "700K+",
      avgTuition: "₹25–38L /yr",
      popularIntake: "Feb / July",
    },
    duration: "1.5–3 yrs",
    intake: "Feb / July",
    avgCost: "₹25–38L",
    visaRate: "85%",
    topFields: ["Engineering", "Public Health", "Hospitality"],
    coords: { lon: 134, lat: -25.5 },
  },
  germany: {
    id: "germany",
    code: "GER",
    flag: "🇩🇪",
    name: "Germany",
    geoName: "Germany",
    gate: "GATE 05",
    heroImage:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1920&auto=format&fit=crop",
    description:
      "Public universities charge little to no tuition even for international students, and engineering degrees here carry weight at Bosch, Siemens and every automotive floor in Europe.",
    tagline: "Tuition-free public universities, engineering royalty.",
    quickStats: {
      topUniversities: "120+",
      internationalStudents: "400K+",
      avgTuition: "₹8–18L /yr",
      popularIntake: "Oct / April",
    },
    duration: "2 yrs",
    intake: "Oct / April",
    avgCost: "₹8–18L",
    visaRate: "91%",
    topFields: ["Mechanical Eng.", "Automotive", "Robotics"],
    coords: { lon: 10.45, lat: 51.16 },
  },
  ireland: {
    id: "ireland",
    code: "IRL",
    flag: "🇮🇪",
    name: "Ireland",
    geoName: "Ireland",
    gate: "GATE 06",
    heroImage:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1920&auto=format&fit=crop",
    description:
      "Europe's tech capital — Google, Meta and Stripe all run their EU headquarters from Dublin, putting graduates a short commute from the campuses that feed them.",
    tagline: "Europe's tech hub — Google, Meta, and Stripe's home turf.",
    quickStats: {
      topUniversities: "40+",
      internationalStudents: "35K+",
      avgTuition: "₹20–30L /yr",
      popularIntake: "Sept / Jan",
    },
    duration: "1–2 yrs",
    intake: "Sept / Jan",
    avgCost: "₹20–30L",
    visaRate: "80%",
    topFields: ["Pharma", "Fintech", "Data Analytics"],
    coords: { lon: -8, lat: 53.4 },
  },
  newzealand: {
    id: "newzealand",
    code: "NZ",
    flag: "🇳🇿",
    name: "New Zealand",
    geoName: "New Zealand",
    gate: "GATE 07",
    heroImage:
      "https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=1920&auto=format&fit=crop",
    description:
      "Small class sizes and a calm, predictable visa process make New Zealand a low-stress route into a Western degree — with post-study work rights attached to almost every qualification.",
    tagline: "Small class sizes, big landscapes, calm visa pathways.",
    quickStats: {
      topUniversities: "25+",
      internationalStudents: "80K+",
      avgTuition: "₹20–30L /yr",
      popularIntake: "Feb / July",
    },
    duration: "1–3 yrs",
    intake: "Feb / July",
    avgCost: "₹20–30L",
    visaRate: "83%",
    topFields: ["Agritech", "Environmental Sci.", "Tourism"],
    coords: { lon: 172.5, lat: -41.5 },
  },
  singapore: {
    id: "singapore",
    code: "SGP",
    flag: "🇸🇬",
    name: "Singapore",
    geoName: "Singapore",
    gate: "GATE 08",
    heroImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1920&auto=format&fit=crop",
    description:
      "Four hours from Coimbatore and home to Asia's highest-ranked campuses, Singapore puts a globally respected degree within a short flight and a familiar time zone.",
    tagline: "Four hours from home, Asia's highest-ranked campuses.",
    quickStats: {
      topUniversities: "30+",
      internationalStudents: "50K+",
      avgTuition: "₹18–28L /yr",
      popularIntake: "Jan / Aug",
    },
    duration: "1–2 yrs",
    intake: "Jan / Aug",
    avgCost: "₹18–28L",
    visaRate: "89%",
    topFields: ["Finance", "Logistics", "AI & Computing"],
    coords: { lon: 103.8198, lat: 1.3521 },
  },
};

// Array form, same objects, display order preserved — for WorldMap.jsx
export const destinations = Object.values(countryDetails);

export default countryDetails;