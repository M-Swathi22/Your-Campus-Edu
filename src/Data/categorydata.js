// Deep content for each Study India course category page.
// Keyed by the same `id` used in courseCategories.js so CategoryPage.jsx
// can merge the two: light meta (image, icon, accent) + this heavy detail data.

export const categoryData = {
  medical: {
    about: {
      heading: "Where healing becomes a lifelong profession",
      paragraphs: [
        "Medicine remains India's most trusted and rigorously regulated career path, opening doors to hospitals, research institutions, and clinics across the country and abroad.",
        "From MBBS to specialised streams like Ayurveda, Homeopathy and Veterinary Science, India offers NMC / respective-council recognised degrees at a fraction of international tuition costs.",
      ],
      highlights: [
        { icon: "ShieldCheck", title: "NMC Recognised", description: "Every listed degree is approved by the National Medical Commission or its equivalent statutory council." },
        { icon: "Building2", title: "Clinical Exposure", description: "Attached teaching hospitals give hands-on patient exposure from the early years." },
        { icon: "Globe2", title: "Global Mobility", description: "Graduates are eligible to sit licensing exams (FMGE, USMLE, PLAB) for practice abroad." },
      ],
    },
    stats: [
      { label: "Courses", value: "8" },
      { label: "Avg. Duration", value: "5.4 Yrs" },
      { label: "Career Paths", value: "20+" },
    ],
    courses: [
      { name: "MBBS", full: "Bachelor of Medicine, Bachelor of Surgery", duration: "5.5 Yrs", level: "Undergraduate" },
      { name: "BDS", full: "Bachelor of Dental Surgery", duration: "5 Yrs", level: "Undergraduate" },
      { name: "BUMS", full: "Bachelor of Unani Medicine and Surgery", duration: "5.5 Yrs", level: "Undergraduate" },
      { name: "BAMS", full: "Bachelor of Ayurvedic Medicine and Surgery", duration: "5.5 Yrs", level: "Undergraduate" },
      { name: "BHMS", full: "Bachelor of Homeopathic Medicine and Surgery", duration: "5.5 Yrs", level: "Undergraduate" },
      { name: "BVSc", full: "Bachelor of Veterinary Science", duration: "5 Yrs", level: "Undergraduate" },
      { name: "BNYS", full: "Bachelor of Naturopathy and Yogic Sciences", duration: "5.5 Yrs", level: "Undergraduate" },
      { name: "BSMS", full: "Bachelor of Siddha Medicine and Surgery", duration: "5.5 Yrs", level: "Undergraduate" },
    ],
    careers: [
      { icon: "Stethoscope", title: "General Physician", description: "Diagnose and treat patients across primary and family care settings." },
      { icon: "Syringe", title: "Surgeon", description: "Specialise further into surgical streams after postgraduate training." },
      { icon: "FlaskConical", title: "Medical Researcher", description: "Contribute to clinical trials, drug development and public health studies." },
      { icon: "HeartPulse", title: "Consultant Specialist", description: "Practice in cardiology, dermatology, orthopaedics and other specialisations." },
    ],
    whyChoose: [
      { icon: "Award", title: "Trusted Degree", description: "A medical degree carries lifelong social and professional credibility." },
      { icon: "TrendingUp", title: "Stable Demand", description: "India faces a consistent doctor shortage, keeping employability high." },
      { icon: "Landmark", title: "Govt. & Private Roles", description: "Pathways into government hospitals, private practice or academia." },
    ],
  },

  "paramedical-nursing": {
    about: {
      heading: "The backbone of every healthcare team",
      paragraphs: [
        "Nursing and paramedical professionals are the first and most constant point of patient care — a field with acute global demand and near-guaranteed placement.",
        "Programs blend classroom learning with supervised clinical postings, preparing graduates for hospitals, rehabilitation centres and international nursing registries.",
      ],
      highlights: [
        { icon: "HeartHandshake", title: "Patient-Centred", description: "Training emphasises direct, hands-on patient care from year one." },
        { icon: "PlaneTakeoff", title: "High Overseas Demand", description: "Nursing graduates are actively recruited by the UK, Gulf and Australia." },
        { icon: "GraduationCap", title: "Clear PG Pathway", description: "GNM and B.Sc holders can progress into M.Sc specialisations." },
      ],
    },
    stats: [
      { label: "Courses", value: "7" },
      { label: "Avg. Duration", value: "3.6 Yrs" },
      { label: "Career Paths", value: "15+" },
    ],
    courses: [
      { name: "B.Sc Nursing", full: "Bachelor of Science in Nursing", duration: "4 Yrs", level: "Undergraduate" },
      { name: "M.Sc Nursing", full: "Master of Science in Nursing", duration: "2 Yrs", level: "Postgraduate" },
      { name: "GNM", full: "General Nursing and Midwifery", duration: "3.5 Yrs", level: "Diploma" },
      { name: "BPT", full: "Bachelor of Physiotherapy", duration: "4.5 Yrs", level: "Undergraduate" },
      { name: "MPT", full: "Master of Physiotherapy", duration: "2 Yrs", level: "Postgraduate" },
      { name: "BOT", full: "Bachelor of Occupational Therapy", duration: "4.5 Yrs", level: "Undergraduate" },
      { name: "MOT", full: "Master of Occupational Therapy", duration: "2 Yrs", level: "Postgraduate" },
    ],
    careers: [
      { icon: "HeartPulse", title: "Staff Nurse", description: "Deliver direct patient care in hospitals, ICUs and clinics." },
      { icon: "Activity", title: "Physiotherapist", description: "Rehabilitate patients recovering from injury, surgery or illness." },
      { icon: "Users", title: "Occupational Therapist", description: "Help patients regain independence in daily activities." },
      { icon: "PlaneTakeoff", title: "International Nurse", description: "Register with overseas nursing councils for global postings." },
    ],
    whyChoose: [
      { icon: "TrendingUp", title: "Near-Zero Unemployment", description: "One of the highest placement rates of any healthcare stream." },
      { icon: "Globe2", title: "Portable Qualification", description: "Recognised across most international nursing registries." },
      { icon: "Clock", title: "Fast Entry to Work", description: "Diploma routes like GNM get you into paid work sooner." },
    ],
  },

  pharmaceutical: {
    about: {
      heading: "From the lab bench to the pharmacy counter",
      paragraphs: [
        "Pharmaceutical education spans drug formulation, clinical pharmacy and regulatory affairs — powering one of India's largest export industries.",
        "Graduates find roles in manufacturing, hospital pharmacies, regulatory bodies and pharma R&D, with Pharm.D holders qualifying as clinical pharmacists.",
      ],
      highlights: [
        { icon: "FlaskConical", title: "Industry-Aligned", description: "Curriculum mirrors real GMP manufacturing and QA practices." },
        { icon: "Pill", title: "Clinical Track", description: "Pharm.D includes a full year of hospital residency." },
        { icon: "TrendingUp", title: "Export Powerhouse", description: "India supplies over 20% of the world's generic medicines." },
      ],
    },
    stats: [
      { label: "Courses", value: "4" },
      { label: "Avg. Duration", value: "3.5 Yrs" },
      { label: "Career Paths", value: "12+" },
    ],
    courses: [
      { name: "D.Pharm", full: "Diploma in Pharmacy", duration: "2 Yrs", level: "Diploma" },
      { name: "B.Pharm", full: "Bachelor of Pharmacy", duration: "4 Yrs", level: "Undergraduate" },
      { name: "M.Pharm", full: "Master of Pharmacy", duration: "2 Yrs", level: "Postgraduate" },
      { name: "Pharm.D", full: "Doctor of Pharmacy", duration: "6 Yrs", level: "Doctoral" },
    ],
    careers: [
      { icon: "Pill", title: "Clinical Pharmacist", description: "Work alongside doctors in hospitals to manage medication therapy." },
      { icon: "Factory", title: "Production Chemist", description: "Oversee drug manufacturing and quality control processes." },
      { icon: "ClipboardCheck", title: "Regulatory Affairs", description: "Manage drug approvals and compliance documentation." },
      { icon: "FlaskConical", title: "R&D Scientist", description: "Develop and test new drug formulations." },
    ],
    whyChoose: [
      { icon: "Building2", title: "Huge Industry Base", description: "India is home to thousands of pharma manufacturing units." },
      { icon: "Award", title: "Licensed Profession", description: "Pharmacists are registered and legally recognised practitioners." },
      { icon: "Globe2", title: "Export-Led Growth", description: "Strong demand from a globally exporting pharma sector." },
    ],
  },

  "allied-health-science": {
    about: {
      heading: "The specialists behind every diagnosis",
      paragraphs: [
        "Allied health professionals run the scans, labs and life-support technology that modern medicine depends on — a fast-growing, technology-driven field.",
        "With 15 specialisations from cardiac technology to optometry, students can pick a focused technical niche with strong hospital demand.",
      ],
      highlights: [
        { icon: "Activity", title: "Tech-Driven Care", description: "Hands-on training with diagnostic and life-support equipment." },
        { icon: "Building2", title: "Hospital Embedded", description: "Every specialisation trains directly inside working hospital departments." },
        { icon: "TrendingUp", title: "Fastest Growing", description: "One of the highest-growth segments in India's healthcare workforce." },
      ],
    },
    stats: [
      { label: "Courses", value: "15" },
      { label: "Avg. Duration", value: "3.5 Yrs" },
      { label: "Career Paths", value: "18+" },
    ],
    courses: [
      { name: "B.Sc Audiology & Speech Language Pathology", full: "B.Sc Audiology & Speech Language Pathology", duration: "4 Yrs", level: "Undergraduate" },
      { name: "B.Sc Cardiac Technology", full: "B.Sc Cardiac Technology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Cardiac Pulmonary Perfusion Care Technology", full: "B.Sc Cardiac Pulmonary Perfusion Care Technology", duration: "4 Yrs", level: "Undergraduate" },
      { name: "B.Sc Critical Care Technology", full: "B.Sc Critical Care Technology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Dialysis Technology", full: "B.Sc Dialysis Technology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Nuclear Medicine Technology", full: "B.Sc Nuclear Medicine Technology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Medical Laboratory Technology", full: "B.Sc Medical Laboratory Technology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Operation Theatre & Anaesthesia Technology", full: "B.Sc Operation Theatre & Anaesthesia Technology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Optometry", full: "B.Sc Optometry", duration: "4 Yrs", level: "Undergraduate" },
      { name: "B.Sc Physician Assistant", full: "B.Sc Physician Assistant", duration: "3.5 Yrs", level: "Undergraduate" },
      { name: "B.Sc Radiography & Imaging Technology", full: "B.Sc Radiography & Imaging Technology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Radiotherapy Technology", full: "B.Sc Radiotherapy Technology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Respiratory Therapy", full: "B.Sc Respiratory Therapy", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Medical Microbiology", full: "B.Sc Medical Microbiology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Sc Medical Microbiology (Advanced)", full: "B.Sc Medical Microbiology (Advanced)", duration: "3 Yrs", level: "Undergraduate" },
    ],
    careers: [
      { icon: "Activity", title: "Cardiac Technologist", description: "Operate ECG, echo and cath-lab equipment in cardiology units." },
      { icon: "Radiation", title: "Radiographer", description: "Capture and process diagnostic imaging scans." },
      { icon: "Eye", title: "Optometrist", description: "Test vision and prescribe corrective eyewear or therapy." },
      { icon: "Microscope", title: "Lab Technologist", description: "Run diagnostic tests across pathology and microbiology labs." },
    ],
    whyChoose: [
      { icon: "TrendingUp", title: "High Placement Rate", description: "Hospitals hire allied health techs as fast as they graduate." },
      { icon: "Layers", title: "Wide Specialisation Choice", description: "15 focused streams so you can match a specific interest." },
      { icon: "Clock", title: "Shorter Duration", description: "Most programs are 3 years — quicker entry into paid work." },
    ],
  },

  engineering: {
    about: {
      heading: "Build the systems the world runs on",
      paragraphs: [
        "Engineering remains India's largest and most versatile degree stream, with specialisations spanning core infrastructure, computing, and emerging technology.",
        "Graduates move into core industry, IT services, product companies, higher studies abroad, or entrepreneurship — one of the broadest career fans of any field.",
      ],
      highlights: [
        { icon: "Cpu", title: "14 Specialisations", description: "From Computer Science to Biomedical and Petroleum Engineering." },
        { icon: "Building2", title: "Industry Placements", description: "Campus placement drives connect students directly to core and IT recruiters." },
        { icon: "Globe2", title: "MS-Ready", description: "A strong foundation for graduate study at universities abroad." },
      ],
    },
    stats: [
      { label: "Courses", value: "14" },
      { label: "Avg. Duration", value: "4 Yrs" },
      { label: "Career Paths", value: "30+" },
    ],
    courses: [
      { name: "Mechanical Engineering", full: "Mechanical Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Civil Engineering", full: "Civil Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Computer Science Engineering", full: "Computer Science Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Electrical & Electronics Engineering", full: "Electrical & Electronics Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Electronics & Communication Engineering", full: "Electronics & Communication Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Information Technology", full: "Information Technology", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Chemical Engineering", full: "Chemical Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Food Technology Engineering", full: "Food Technology Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Petroleum Engineering", full: "Petroleum Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Aeronautical Engineering", full: "Aeronautical Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Automobile Engineering", full: "Automobile Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Agricultural Engineering", full: "Agricultural Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Biomedical Engineering", full: "Biomedical Engineering", duration: "4 Yrs", level: "Undergraduate" },
      { name: "Biotechnology Engineering", full: "Biotechnology Engineering", duration: "4 Yrs", level: "Undergraduate" },
    ],
    careers: [
      { icon: "Code2", title: "Software Engineer", description: "Design and build applications across product and services companies." },
      { icon: "HardHat", title: "Site / Structural Engineer", description: "Plan and execute infrastructure and construction projects." },
      { icon: "Cog", title: "Design Engineer", description: "Work on mechanical, automotive or aerospace product design." },
      { icon: "Zap", title: "Power & Electronics Engineer", description: "Build systems for energy, telecom and embedded devices." },
    ],
    whyChoose: [
      { icon: "Layers", title: "Widest Specialisation Range", description: "14 branches covering almost every core and emerging industry." },
      { icon: "Building2", title: "Strongest Placement Ecosystem", description: "The most mature campus recruitment network in India." },
      { icon: "Globe2", title: "Best MS/Study-Abroad Base", description: "A degree structure widely recognised by global universities." },
    ],
  },

  "arts-science-advanced": {
    about: {
      heading: "Business, aviation and global commerce",
      paragraphs: [
        "This stream blends business fundamentals with specialised commerce tracks — aviation, shipping, taxation and professional accountancy — built for a globalised economy.",
        "It suits students aiming for corporate roles, professional certifications (CA/CS/CMA), or niche industries like logistics and travel.",
      ],
      highlights: [
        { icon: "Landmark", title: "Professional Pathways", description: "Direct routes into CA, CS and CMA alongside the degree." },
        { icon: "PlaneTakeoff", title: "Niche Industries", description: "Dedicated tracks for aviation, shipping and travel management." },
        { icon: "Briefcase", title: "Corporate-Ready", description: "Curriculum built around real business and finance operations." },
      ],
    },
    stats: [
      { label: "Courses", value: "16" },
      { label: "Avg. Duration", value: "3.2 Yrs" },
      { label: "Career Paths", value: "25+" },
    ],
    courses: [
      { name: "BBA", full: "Bachelor of Business Administration", duration: "3 Yrs", level: "Undergraduate" },
      { name: "BBM", full: "Bachelor of Business Management", duration: "3 Yrs", level: "Undergraduate" },
      { name: "BCA Cloud Computing", full: "BCA Cloud Computing", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Com Port Management", full: "B.Com Port Management", duration: "3 Yrs", level: "Undergraduate" },
      { name: "BBA Aviation Management", full: "BBA Aviation Management", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Com Shipping & Logistics", full: "B.Com Shipping & Logistics", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Com Travel & Tourism", full: "B.Com Travel & Tourism", duration: "3 Yrs", level: "Undergraduate" },
      { name: "CA", full: "Chartered Accountancy", duration: "4-5 Yrs", level: "Professional" },
      { name: "CMA", full: "Cost & Management Accountancy", duration: "3-4 Yrs", level: "Professional" },
      { name: "CS", full: "Company Secretary", duration: "3-4 Yrs", level: "Professional" },
      { name: "B.Com Taxation", full: "B.Com Taxation", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Com Bank Management", full: "B.Com Bank Management", duration: "3 Yrs", level: "Undergraduate" },
      { name: "B.Com Professional", full: "B.Com Professional", duration: "3 Yrs", level: "Undergraduate" },
      { name: "BHM", full: "Bachelor of Hotel Management", duration: "4 Yrs", level: "Undergraduate" },
      { name: "BMS", full: "Bachelor of Management Studies", duration: "3 Yrs", level: "Undergraduate" },
      { name: "BAF", full: "Bachelor of Accounting & Finance", duration: "3 Yrs", level: "Undergraduate" },
    ],
    careers: [
      { icon: "Landmark", title: "Chartered Accountant", description: "Audit, tax and financial advisory practice." },
      { icon: "PlaneTakeoff", title: "Aviation Manager", description: "Manage airline, airport and ground operations." },
      { icon: "Ship", title: "Logistics & Shipping Manager", description: "Coordinate cargo, freight and supply chain operations." },
      { icon: "Hotel", title: "Hospitality Manager", description: "Run operations across hotels, resorts and travel businesses." },
    ],
    whyChoose: [
      { icon: "Layers", title: "Widest Commerce Range", description: "16 specialised tracks spanning finance, aviation and hospitality." },
      { icon: "Award", title: "Professional Certification Route", description: "Combine a degree with CA / CS / CMA credentials." },
      { icon: "Globe2", title: "Global Industries", description: "Aviation, shipping and travel are inherently international sectors." },
    ],
  },

  "arts-science": {
    about: {
      heading: "Foundational science, limitless direction",
      paragraphs: [
        "Pure and applied science degrees build the analytical foundation for careers in research, IT, forensics, healthcare sciences and postgraduate specialisation.",
        "With streams from core sciences to computer applications, this category is the most flexible launchpad for students still deciding their long-term direction.",
      ],
      highlights: [
        { icon: "FlaskConical", title: "Strong Fundamentals", description: "Deep grounding in core science before you specialise further." },
        { icon: "Code2", title: "IT-Ready Tracks", description: "BCA and MCA open direct routes into software careers." },
        { icon: "Search", title: "Research & Forensics", description: "Pathways into forensic science, biotech and microbiology labs." },
      ],
    },
    stats: [
      { label: "Courses", value: "14" },
      { label: "Avg. Duration", value: "3.2 Yrs" },
      { label: "Career Paths", value: "22+" },
    ],
    courses: [
      { name: "Physics", full: "B.Sc Physics", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Chemistry", full: "B.Sc Chemistry", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Botany", full: "B.Sc Botany", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Zoology", full: "B.Sc Zoology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Nutrition & Dietetics", full: "B.Sc Nutrition & Dietetics", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Visual Communication", full: "B.Sc Visual Communication", duration: "3 Yrs", level: "Undergraduate" },
      { name: "CDF", full: "Costume Design & Fashion", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Forensic Science", full: "B.Sc Forensic Science", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Multimedia & Animation", full: "B.Sc Multimedia & Animation", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Microbiology", full: "B.Sc Microbiology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Biotechnology", full: "B.Sc Biotechnology", duration: "3 Yrs", level: "Undergraduate" },
      { name: "Biochemistry", full: "B.Sc Biochemistry", duration: "3 Yrs", level: "Undergraduate" },
      { name: "BCA", full: "Bachelor of Computer Applications", duration: "3 Yrs", level: "Undergraduate" },
      { name: "MCA", full: "Master of Computer Applications", duration: "2 Yrs", level: "Postgraduate" },
    ],
    careers: [
      { icon: "Microscope", title: "Research Scientist", description: "Work in academic, government or private research labs." },
      { icon: "Code2", title: "Software Developer", description: "Build applications after BCA/MCA specialisation." },
      { icon: "Search", title: "Forensic Analyst", description: "Support criminal investigations with lab-based evidence analysis." },
      { icon: "Apple", title: "Clinical Nutritionist", description: "Design diet and wellness plans in clinical or corporate settings." },
    ],
    whyChoose: [
      { icon: "Layers", title: "Most Flexible Stream", description: "Keeps postgraduate and career options wide open." },
      { icon: "GraduationCap", title: "Strong PG Pipeline", description: "Direct progression into M.Sc, MCA and research programs." },
      { icon: "TrendingUp", title: "Emerging Fields", description: "Biotech, forensics and animation are fast-growing niches." },
    ],
  },

  law: {
    about: {
      heading: "Argue, advise, and uphold justice",
      paragraphs: [
        "Law remains one of India's most respected professional degrees, with integrated 5-year programs letting students combine another discipline with legal training.",
        "Graduates move into litigation, corporate legal teams, judiciary services, or specialise further through an LLM.",
      ],
      highlights: [
        { icon: "Scale", title: "Bar Council Approved", description: "All programs are recognised by the Bar Council of India." },
        { icon: "Landmark", title: "Integrated Degrees", description: "Combine law with commerce or management in a single 5-year program." },
        { icon: "Briefcase", title: "Corporate Demand", description: "Growing in-house legal teams across every major industry." },
      ],
    },
    stats: [
      { label: "Courses", value: "5" },
      { label: "Avg. Duration", value: "4.4 Yrs" },
      { label: "Career Paths", value: "16+" },
    ],
    courses: [
      { name: "LLB", full: "Bachelor of Legislative Law", duration: "3 Yrs", level: "Undergraduate" },
      { name: "BA LLB", full: "BA + Bachelor of Legislative Law", duration: "5 Yrs", level: "Integrated" },
      { name: "B.Com LLB", full: "B.Com + Bachelor of Legislative Law", duration: "5 Yrs", level: "Integrated" },
      { name: "BBM LLB", full: "BBM + Bachelor of Legislative Law", duration: "5 Yrs", level: "Integrated" },
      { name: "BBA LLB", full: "BBA + Bachelor of Legislative Law", duration: "5 Yrs", level: "Integrated" },
    ],
    careers: [
      { icon: "Gavel", title: "Litigation Lawyer", description: "Represent clients in court across civil and criminal matters." },
      { icon: "Briefcase", title: "Corporate Counsel", description: "Manage contracts, compliance and legal risk in-house." },
      { icon: "Landmark", title: "Judiciary", description: "Prepare for judicial services exams after practice experience." },
      { icon: "FileText", title: "Legal Consultant", description: "Advise businesses on regulatory and legal strategy." },
    ],
    whyChoose: [
      { icon: "Award", title: "Prestige Profession", description: "One of the most respected and stable career tracks in India." },
      { icon: "Layers", title: "Integrated Options", description: "Pair law with commerce or management for a dual advantage." },
      { icon: "TrendingUp", title: "Rising Corporate Demand", description: "Companies are building larger in-house legal teams every year." },
    ],
  },

  management: {
    about: {
      heading: "Lead teams, brands and businesses",
      paragraphs: [
        "MBA specialisations sharpen a bachelor's degree into a focused leadership track — from HR and finance to aviation, healthcare and supply chain management.",
        "Designed for students who want to move quickly into managerial and strategic roles across any industry they choose.",
      ],
      highlights: [
        { icon: "Briefcase", title: "14 Specialisations", description: "From Marketing to Aviation and Hospital Management." },
        { icon: "Users", title: "Leadership Focus", description: "Case studies, internships and live projects build people-management skills." },
        { icon: "TrendingUp", title: "Fast Career Growth", description: "MBA graduates typically see accelerated movement into leadership roles." },
      ],
    },
    stats: [
      { label: "Courses", value: "14" },
      { label: "Avg. Duration", value: "2 Yrs" },
      { label: "Career Paths", value: "28+" },
    ],
    courses: [
      { name: "MBA Human Resource Management", full: "MBA Human Resource Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Marketing Management", full: "MBA Marketing Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Finance Management", full: "MBA Finance Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Operation Management", full: "MBA Operation Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Aviation Management", full: "MBA Aviation Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Logistic Management", full: "MBA Logistic Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Travel & Tourism Management", full: "MBA Travel & Tourism Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Hospital & Healthcare Management", full: "MBA Hospital & Healthcare Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Business Analytics Management", full: "MBA Business Analytics Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA International Business Management", full: "MBA International Business Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Supply Chain Management", full: "MBA Supply Chain Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA Airport Management", full: "MBA Airport Management", duration: "2 Yrs", level: "Postgraduate" },
      { name: "MBA System Management", full: "MBA System Management", duration: "2 Yrs", level: "Postgraduate" },
    ],
    careers: [
      { icon: "Users", title: "HR Manager", description: "Lead recruitment, culture and workforce strategy." },
      { icon: "BarChart3", title: "Business Analyst", description: "Turn data into strategic decisions across departments." },
      { icon: "Landmark", title: "Finance Manager", description: "Oversee budgeting, investment and financial planning." },
      { icon: "PlaneTakeoff", title: "Aviation / Airport Manager", description: "Manage operations across airline and airport businesses." },
    ],
    whyChoose: [
      { icon: "Layers", title: "Deep Specialisation Choice", description: "13 focused MBA tracks matched to specific industries." },
      { icon: "TrendingUp", title: "Fastest Path to Leadership", description: "Structured for quick movement into management roles." },
      { icon: "Globe2", title: "Cross-Industry Value", description: "An MBA is portable across sectors and geographies." },
    ],
  },
};

export const getCategoryData = (id) => categoryData[id];