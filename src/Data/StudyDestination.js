// src/data/studyDestination.js
// Central data source for the Study Destinations page.
// Swap `heroImage` / `image` URLs for local ES-module imports from
// src/assets/images/study-destination/ once final photography is ready.

// Fixed departure point for every flight-path animation on the world map.
export const origin = {
  id: "india",
  code: "IND",
  flag: "🇮🇳",
  name: "India",
  city: "Coimbatore",
  geoName: "India", // must match the `name` property in the topojson map data
  coords: { lon: 76.9558, lat: 11.0168 },
};

export const destinations = [
  {
    id: "usa",
    code: "USA",
    flag: "🇺🇸",
    name: "United States",
    geoName: "United States of America",
    gate: "GATE 01",
    tagline: "The widest runway for ambition — 4,000+ campuses, every field.",
    duration: "2–4 yrs",
    intake: "Fall / Spring",
    avgCost: "₹35–55L",
    visaRate: "82%",
    topFields: ["Computer Science", "Business", "Engineering"],
    coords: { lon: -98.35, lat: 39.5 },
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "uk",
    code: "UK",
    flag: "🇬🇧",
    name: "United Kingdom",
    geoName: "United Kingdom",
    gate: "GATE 02",
    tagline: "One-year Master's, centuries of academic weight behind it.",
    duration: "1–3 yrs",
    intake: "Sept / Jan",
    avgCost: "₹28–42L",
    visaRate: "88%",
    topFields: ["Finance", "Law", "Data Science"],
    coords: { lon: -1.4, lat: 52.35 },
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "canada",
    code: "CAN",
    flag: "🇨🇦",
    name: "Canada",
    geoName: "Canada",
    gate: "GATE 03",
    tagline: "Study now, work-permit runway straight after graduation.",
    duration: "1–2 yrs",
    intake: "Fall / Winter",
    avgCost: "₹22–35L",
    visaRate: "79%",
    topFields: ["IT", "Healthcare", "Business Analytics"],
    coords: { lon: -85, lat: 56 },
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "australia",
    code: "AUS",
    flag: "🇦🇺",
    name: "Australia",
    geoName: "Australia",
    gate: "GATE 04",
    tagline: "Ranked campuses, generous post-study work visas, warm welcome.",
    duration: "1.5–3 yrs",
    intake: "Feb / July",
    avgCost: "₹25–38L",
    visaRate: "85%",
    topFields: ["Engineering", "Public Health", "Hospitality"],
    coords: { lon: 134, lat: -25.5 },
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "germany",
    code: "GER",
    flag: "🇩🇪",
    name: "Germany",
    geoName: "Germany",
    gate: "GATE 05",
    tagline: "Tuition-free public universities, engineering royalty.",
    duration: "2 yrs",
    intake: "Oct / April",
    avgCost: "₹8–18L",
    visaRate: "91%",
    topFields: ["Mechanical Eng.", "Automotive", "Robotics"],
    coords: { lon: 10.45, lat: 51.16 },
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ireland",
    code: "IRL",
    flag: "🇮🇪",
    name: "Ireland",
    geoName: "Ireland",
    gate: "GATE 06",
    tagline: "Europe's tech hub — Google, Meta, and Stripe's home turf.",
    duration: "1–2 yrs",
    intake: "Sept / Jan",
    avgCost: "₹20–30L",
    visaRate: "80%",
    topFields: ["Pharma", "Fintech", "Data Analytics"],
    coords: { lon: -8, lat: 53.4 },
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "newzealand",
    code: "NZ",
    flag: "🇳🇿",
    name: "New Zealand",
    geoName: "New Zealand",
    gate: "GATE 07",
    tagline: "Small class sizes, big landscapes, calm visa pathways.",
    duration: "1–3 yrs",
    intake: "Feb / July",
    avgCost: "₹20–30L",
    visaRate: "83%",
    topFields: ["Agritech", "Environmental Sci.", "Tourism"],
    coords: { lon: 172.5, lat: -41.5 },
    image:
      "https://images.unsplash.com/photo-1469521669194-babb45599def?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "singapore",
    code: "SGP",
    flag: "🇸🇬",
    name: "Singapore",
    geoName: "Singapore",
    gate: "GATE 08",
    tagline: "Four hours from home, Asia's highest-ranked campuses.",
    duration: "1–2 yrs",
    intake: "Jan / Aug",
    avgCost: "₹18–28L",
    visaRate: "89%",
    topFields: ["Finance", "Logistics", "AI & Computing"],
    coords: { lon: 103.8198, lat: 1.3521 },
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
  },
];

export const whyStudyAbroad = [
  {
    id: "01",
    stub: "BOARD",
    title: "Degrees the world recognizes",
    copy:
      "QS and THE top-ranked institutions that open doors at multinational recruiters, not just local ones.",
    stat: "500+",
    statLabel: "partner universities",
  },
  {
    id: "02",
    stub: "SEAT",
    title: "Earn while you learn",
    copy:
      "Work-integrated visas across the UK, Canada and Australia let you offset living costs from year one.",
    stat: "20 hrs",
    statLabel: "avg. weekly work rights",
  },
  {
    id: "03",
    stub: "CLASS",
    title: "A passport-sized network",
    copy:
      "Classrooms of 40+ nationalities build the kind of global contact list a local degree can't replicate.",
    stat: "90+",
    statLabel: "nationalities on campus",
  },
  {
    id: "04",
    stub: "ZONE",
    title: "A real shot at settling",
    copy:
      "Post-study work permits and PR pathways we map out before you even apply — not after you land.",
    stat: "83%",
    statLabel: "avg. visa success rate",
  },
];

export const destinationFaqs = [
  {
    q: "How do I choose the right country for my course?",
    a: "It comes down to three things: your budget, your field of study, and how fast you want a post-study work visa. Run the Course Match or Country Fit Quiz first — we'll shortlist countries where your profile actually clears the bar, instead of guessing off rankings alone.",
  },
  {
    q: "Can I apply to more than one country at once?",
    a: "Yes, and we recommend it. Most students file 2–3 parallel applications (a reach, a match, and a safety) across different countries so you're never boxed into one visa timeline.",
  },
  {
    q: "How far in advance should I start the process?",
    a: "For Fall intakes, start 10–12 months ahead — that covers standardized tests, SOPs, and visa slot availability. Spring intakes need a 6–8 month runway. Later than that, and we shift you into an expedited track.",
  },
  {
    q: "Does the cost estimate include living expenses?",
    a: "Yes. The figures shown per country combine tuition and realistic on-ground living costs (housing, food, transit) based on the city we shortlist for you, not just national averages.",
  },
  {
    q: "What happens after I pick a destination?",
    a: "You move into document prep — SOP, LORs, financials — while we run parallel university shortlisting through the Compare Colleges tool. Everything funnels into one applicant dossier we track with you end to end.",
  },
];