// src/data/countryDetails.js
// Extended per-country data for the Country Details page.
// Keyed by the same `id` used in src/data/studyDestination.js -> destinations[]
// Icon names map to lucide-react components (resolved in the component layer).

export const countryDetails = {
  usa: {
    overview:
      "The US remains the deepest bench of programs on earth — from research-heavy state schools to specialised private colleges. Optional Practical Training (OPT) gives STEM graduates up to three years of work authorization straight after the degree, making it the strongest launchpad for a US-based tech or research career.",
    heroStamp: "F-1 VISA",
    highlights: [
      { icon: "GraduationCap", title: "4,000+ accredited campuses", text: "More program combinations than any other country — double majors, research tracks, co-ops." },
      { icon: "Briefcase", title: "3-year STEM OPT", text: "Work authorization straight after graduation for STEM majors, no separate visa needed." },
      { icon: "FlaskConical", title: "Research funding", text: "The largest university research budgets globally, with assistantships that offset tuition." },
      { icon: "Building2", title: "Direct recruiter access", text: "On-campus recruiting pipelines into FAANG, Wall Street and Fortune 500 firms." },
    ],
    costBreakdown: { tuition: "₹22–38L / yr", living: "₹8–14L / yr", total: "₹35–55L total" },
    visaRate: "82%",
    workRights: "20 hrs/week on-campus; full-time on approved CPT/OPT",
    prPathway: "H-1B lottery post-OPT; employer-sponsored green card track",
    popularCities: ["Boston", "San Francisco", "New York", "Chicago", "Austin"],
    visaSteps: [
      { step: "01", title: "I-20 issued", desc: "University confirms admission and issues your I-20 after tuition deposit." },
      { step: "02", title: "SEVIS + DS-160", desc: "Pay the SEVIS fee, complete the DS-160 form online." },
      { step: "03", title: "Visa interview", desc: "In-person interview at the US consulate; carry financial + academic proof." },
      { step: "04", title: "F-1 stamped", desc: "Visa issued 3–5 working days after a successful interview." },
    ],
    eligibility: [
      "IELTS 6.5+ / TOEFL 90+ (varies by university)",
      "SAT/ACT for undergrad, GRE/GMAT for most grad programs",
      "Statement of Purpose + 2–3 LORs",
      "Proof of funds covering year one",
    ],
  },

  uk: {
    overview:
      "A one-year Master's compresses cost and time-to-return without diluting the credential — UK degrees carry weight with employers across the Commonwealth and beyond. The Graduate Route gives every graduate two years to work, no sponsor required.",
    heroStamp: "TIER 4 / STUDENT",
    highlights: [
      { icon: "Clock3", title: "1-year Master's", text: "Finish and re-enter the job market a full year ahead of most other destinations." },
      { icon: "Landmark", title: "Centuries of pedigree", text: "Oxbridge, Russell Group weight that employers recognise on sight." },
      { icon: "Briefcase", title: "2-year Graduate Route", text: "Work in the UK for two years post-graduation with no employer sponsorship needed." },
      { icon: "Globe2", title: "Gateway to Europe", text: "Short-haul access to the rest of the continent for internships and travel." },
    ],
    costBreakdown: { tuition: "₹18–30L total", living: "₹9–12L / yr", total: "₹28–42L total" },
    visaRate: "88%",
    workRights: "20 hrs/week during term, full-time in vacations",
    prPathway: "Graduate Route (2 yrs) → Skilled Worker visa sponsorship",
    popularCities: ["London", "Manchester", "Edinburgh", "Birmingham", "Glasgow"],
    visaSteps: [
      { step: "01", title: "CAS issued", desc: "University issues a Confirmation of Acceptance for Studies after deposit." },
      { step: "02", title: "Online application", desc: "Submit the Student Route visa application and pay the IHS health surcharge." },
      { step: "03", title: "Biometrics", desc: "Book an appointment at your nearest VFS centre." },
      { step: "04", title: "Decision", desc: "Most decisions arrive within 3 weeks of biometrics." },
    ],
    eligibility: [
      "IELTS UKVI 6.0–6.5+ depending on course",
      "Academic transcripts + a tightly-scoped SOP",
      "One academic LOR (two for research programs)",
      "CAS + proof of maintenance funds for 28 consecutive days",
    ],
  },

  canada: {
    overview:
      "Canada pairs affordable public tuition with one of the clearest study-to-PR pipelines anywhere — a Post-Graduation Work Permit that can match the length of your program, feeding directly into Express Entry.",
    heroStamp: "STUDY PERMIT",
    highlights: [
      { icon: "Briefcase", title: "Up to 3-year PGWP", text: "Work permit length mirrors your program duration — no employer sponsor required." },
      { icon: "IndianRupee", title: "Lower cost of entry", text: "Public tuition and living costs undercut the US and UK by a wide margin." },
      { icon: "ShieldCheck", title: "Express Entry pipeline", text: "Canadian education and work experience score heavily toward permanent residency." },
      { icon: "Users", title: "High-diaspora comfort", text: "Established Indian communities across Toronto, Vancouver and Brampton." },
    ],
    costBreakdown: { tuition: "₹14–24L / yr", living: "₹7–10L / yr", total: "₹22–35L total" },
    visaRate: "79%",
    workRights: "20 hrs/week during term, full-time in scheduled breaks",
    prPathway: "PGWP → Canadian Experience Class (Express Entry)",
    popularCities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    visaSteps: [
      { step: "01", title: "Letter of Acceptance", desc: "Designated Learning Institution (DLI) confirms your seat." },
      { step: "02", title: "GIC + tuition proof", desc: "Open a Guaranteed Investment Certificate (for SDS route) and pay first-year fees." },
      { step: "03", title: "Study permit application", desc: "Apply online via IRCC with biometrics." },
      { step: "04", title: "Permit approved", desc: "SDS-stream decisions typically land in 2–4 weeks." },
    ],
    eligibility: [
      "IELTS 6.0–6.5 overall (SDS route needs 6.0 in each band)",
      "GIC of CAD 10,000+ for the Student Direct Stream",
      "Statement of Purpose focused on intent to return / PR pathway",
      "Medical exam for programs over 6 months",
    ],
  },

  australia: {
    overview:
      "Australia's university rankings punch well above its population size, and post-study work rights now stretch up to six years for select regional and STEM programs — one of the most generous windows on offer.",
    heroStamp: "SUBCLASS 500",
    highlights: [
      { icon: "GraduationCap", title: "7 of the world's top 100", text: "A dense cluster of Group of Eight universities across a handful of cities." },
      { icon: "Briefcase", title: "2–6 year work rights", text: "Post-Study Work visa length scales with degree level and regional study." },
      { icon: "Sun", title: "Lifestyle premium", text: "Beach-city campuses with a genuinely liveable cost-to-quality ratio." },
      { icon: "ShieldCheck", title: "Points-tested PR", text: "Skilled migration points system rewards Australian qualifications directly." },
    ],
    costBreakdown: { tuition: "₹18–28L / yr", living: "₹9–13L / yr", total: "₹25–38L total" },
    visaRate: "85%",
    workRights: "48 hrs/fortnight during term, unlimited in breaks",
    prPathway: "Post-Study Work visa → Skilled Independent visa (points test)",
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Adelaide", "Perth"],
    visaSteps: [
      { step: "01", title: "CoE issued", desc: "University issues a Confirmation of Enrolment after deposit." },
      { step: "02", title: "GTE statement", desc: "Write a Genuine Temporary Entrant statement — the crux of the application." },
      { step: "03", title: "Apply online", desc: "Lodge Subclass 500 via ImmiAccount with biometrics and health checks." },
      { step: "04", title: "Grant", desc: "Most straightforward files clear in 4–6 weeks." },
    ],
    eligibility: [
      "IELTS 6.0–6.5 overall depending on course level",
      "Genuine Temporary Entrant (GTE) statement",
      "Overseas Student Health Cover (OSHC) for the full duration",
      "Proof of funds for tuition + 12 months living cost",
    ],
  },

  germany: {
    overview:
      "Public German universities charge little to no tuition even for international students — the trade-off is a language and paperwork curve. In return you get an engineering pedigree that anchors half of Europe's industrial base.",
    heroStamp: "NATIONAL VISA",
    highlights: [
      { icon: "IndianRupee", title: "Near-zero tuition", text: "Public universities charge only a small semester fee, no matter your nationality." },
      { icon: "Cog", title: "Engineering royalty", text: "Direct pipeline into automotive, robotics and precision-manufacturing employers." },
      { icon: "Briefcase", title: "18-month job search", text: "A dedicated visa lets graduates search for a role after the degree ends." },
      { icon: "Globe2", title: "Schengen mobility", text: "Visa-free travel and internship access across 26 European countries." },
    ],
    costBreakdown: { tuition: "₹1–4L / yr", living: "₹7–11L / yr", total: "₹8–18L total" },
    visaRate: "91%",
    workRights: "120 full days or 240 half days per year",
    prPathway: "18-month job-seeker visa → EU Blue Card → settlement permit",
    popularCities: ["Munich", "Berlin", "Stuttgart", "Frankfurt", "Hamburg"],
    visaSteps: [
      { step: "01", title: "Uni-Assist / admission", desc: "Secure an admission letter from the university or Uni-Assist." },
      { step: "02", title: "Blocked account", desc: "Fund a blocked account (Sperrkonto) covering roughly one year of living costs." },
      { step: "03", title: "APS certificate", desc: "Get your academic documents verified by APS (mandatory for Indian applicants)." },
      { step: "04", title: "Consulate interview", desc: "Apply for the national (D) visa at the German consulate." },
    ],
    eligibility: [
      "IELTS 6.5+ for English-taught programs; German A1–B1 for some",
      "APS certificate (mandatory for Indian nationals)",
      "Blocked account with ~€11,904 for one year",
      "Letter of Motivation tailored to the specific program",
    ],
  },

  ireland: {
    overview:
      "Ireland's low corporate tax has pulled Google, Meta, Stripe and most of Big Pharma's European HQs into Dublin — placing internships and graduate roles a short commute from campus, inside a small, English-speaking system.",
    heroStamp: "STAMP 2",
    highlights: [
      { icon: "Building2", title: "Tech HQ density", text: "Europe's regional headquarters for Google, Meta, LinkedIn and Stripe sit in Dublin." },
      { icon: "FlaskConical", title: "Pharma & biotech base", text: "Nine of the world's top ten pharma companies operate Irish manufacturing hubs." },
      { icon: "Briefcase", title: "2-year stay-back", text: "Third Level Graduate Programme gives Master's grads two years to find work." },
      { icon: "Users", title: "Small, English-taught", text: "Compact class sizes with zero language barrier for coursework or daily life." },
    ],
    costBreakdown: { tuition: "₹13–22L total", living: "₹8–11L / yr", total: "₹20–30L total" },
    visaRate: "80%",
    workRights: "20 hrs/week during term, 40 hrs/week in official breaks",
    prPathway: "Stamp 1G stay-back → Critical Skills Employment Permit",
    popularCities: ["Dublin", "Cork", "Galway", "Limerick"],
    visaSteps: [
      { step: "01", title: "Offer + deposit", desc: "Accept your offer and pay the required tuition deposit." },
      { step: "02", title: "Online application", desc: "Apply through the AVATS portal with supporting documents." },
      { step: "03", title: "Proof of funds", desc: "Show ~€10,000+ in personal funds beyond tuition." },
      { step: "04", title: "Visa decision", desc: "Typical turnaround is 4–8 weeks." },
    ],
    eligibility: [
      "IELTS 6.0–6.5 overall depending on course",
      "Letter of offer from a recognised Irish institution",
      "Evidence of funds (~€10,000) plus paid tuition",
      "Private medical insurance for the visa duration",
    ],
  },

  newzealand: {
    overview:
      "Small cohorts, direct faculty access, and a calmer visa process than most competing destinations — New Zealand trades scale for a genuinely relaxed pace, with real strength in agritech and environmental science.",
    heroStamp: "STUDENT VISA",
    highlights: [
      { icon: "Users", title: "Low student-faculty ratio", text: "Smaller cohorts mean direct access to professors, not teaching assistants." },
      { icon: "Leaf", title: "Agritech leadership", text: "World-leading research in agriculture, food science and environmental management." },
      { icon: "Briefcase", title: "Up to 3-year work visa", text: "Post-study work rights scale with qualification level and study location." },
      { icon: "ShieldCheck", title: "Straightforward process", text: "Comparatively predictable visa timelines with fewer bureaucratic layers." },
    ],
    costBreakdown: { tuition: "₹14–22L / yr", living: "₹8–10L / yr", total: "₹20–30L total" },
    visaRate: "83%",
    workRights: "20 hrs/week during term, full-time in scheduled breaks",
    prPathway: "Post-Study Work visa → Skilled Migrant Category",
    popularCities: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
    visaSteps: [
      { step: "01", title: "Offer of Place", desc: "Institution confirms your seat and issues the Offer of Place." },
      { step: "02", title: "Pay fees", desc: "Pay at least first-year tuition to receive the Receipt of Fees." },
      { step: "03", title: "Apply online", desc: "Submit the student visa application through Immigration New Zealand." },
      { step: "04", title: "Decision", desc: "Most applications are decided within 4–6 weeks." },
    ],
    eligibility: [
      "IELTS 6.0–6.5 overall depending on programme",
      "Offer of Place from an NZQA-accredited institution",
      "Evidence of funds (~NZD 20,000/year) or a scholarship",
      "Medical and police clearance certificates",
    ],
  },

  singapore: {
    overview:
      "Four hours from home, Singapore runs some of Asia's highest-ranked campuses inside one of the world's most efficient economies — a low-drama entry point into finance, logistics and AI hiring pipelines across the region.",
    heroStamp: "STUDENT PASS",
    highlights: [
      { icon: "PlaneTakeoff", title: "4-hour flight home", text: "The shortest haul of any major destination — cheaper, easier visits both ways." },
      { icon: "Landmark", title: "NUS & NTU pedigree", text: "Two of Asia's top-ranked universities, both globally recognised." },
      { icon: "Building2", title: "Finance + logistics hub", text: "Regional HQs for banks, shipping majors and Southeast Asian trading firms." },
      { icon: "Cpu", title: "AI & computing strength", text: "Heavy government investment in AI research translates into strong hiring demand." },
    ],
    costBreakdown: { tuition: "₹12–20L / yr", living: "₹6–8L / yr", total: "₹18–28L total" },
    visaRate: "89%",
    workRights: "16 hrs/week during term for approved programs",
    prPathway: "Employment Pass sponsorship → Permanent Residence application",
    popularCities: ["Singapore"],
    visaSteps: [
      { step: "01", title: "Offer letter", desc: "University confirms admission and provides the documents needed for IPA." },
      { step: "02", title: "In-Principle Approval", desc: "Apply for the Student's Pass IPA through the SOLAR system." },
      { step: "03", title: "Enter Singapore", desc: "Travel using the IPA letter and complete the formalities on arrival." },
      { step: "04", title: "Pass issued", desc: "Collect the actual Student's Pass card after a medical check if required." },
    ],
    eligibility: [
      "IELTS 6.0–6.5 overall depending on programme",
      "Strong academic transcripts — admission is competitive",
      "Proof of funds covering tuition and living costs",
      "Valid passport with 6+ months validity",
    ],
  },
};

export default countryDetails;