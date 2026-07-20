// src/data/universitiesData.js
// Top universities per destination, keyed by the same `id` used in
// src/data/studyDestination.js -> destinations[]

export const universitiesData = {
  usa: [
    { name: "Massachusetts Institute of Technology", short: "MIT", location: "Cambridge, MA", ranking: "#1 QS World", courses: ["Computer Science", "Engineering", "AI/ML"], tuition: "₹42L / yr" },
    { name: "Carnegie Mellon University", short: "CMU", location: "Pittsburgh, PA", ranking: "#24 QS World", courses: ["Computer Science", "Robotics", "Data Science"], tuition: "₹38L / yr" },
    { name: "University of Texas at Austin", short: "UT", location: "Austin, TX", ranking: "#58 QS World", courses: ["Business Analytics", "Engineering", "Computer Science"], tuition: "₹28L / yr" },
    { name: "Arizona State University", short: "ASU", location: "Tempe, AZ", ranking: "#1 US Innovation", courses: ["Business", "Computer Science", "Supply Chain"], tuition: "₹24L / yr" },
    { name: "Northeastern University", short: "NEU", location: "Boston, MA", ranking: "#44 US News", courses: ["Data Science", "Engineering", "Co-op Programs"], tuition: "₹32L / yr" },
  ],
  uk: [
    { name: "Imperial College London", short: "ICL", location: "London", ranking: "#2 QS World", courses: ["Engineering", "Finance", "Data Science"], tuition: "₹30L total" },
    { name: "University of Manchester", short: "UoM", location: "Manchester", ranking: "#34 QS World", courses: ["Business", "Computer Science", "Materials"], tuition: "₹24L total" },
    { name: "University of Edinburgh", short: "UoE", location: "Edinburgh", ranking: "#27 QS World", courses: ["Data Science", "Law", "Public Health"], tuition: "₹26L total" },
    { name: "King's College London", short: "KCL", location: "London", ranking: "#40 QS World", courses: ["Finance", "Law", "International Relations"], tuition: "₹28L total" },
    { name: "University of Birmingham", short: "UoB", location: "Birmingham", ranking: "#84 QS World", courses: ["Business Analytics", "Engineering", "Computer Science"], tuition: "₹22L total" },
  ],
  canada: [
    { name: "University of Toronto", short: "UofT", location: "Toronto, ON", ranking: "#21 QS World", courses: ["Computer Science", "Business", "Engineering"], tuition: "₹26L / yr" },
    { name: "University of British Columbia", short: "UBC", location: "Vancouver, BC", ranking: "#34 QS World", courses: ["Data Science", "Forestry", "Business"], tuition: "₹28L / yr" },
    { name: "University of Waterloo", short: "UW", location: "Waterloo, ON", ranking: "#1 Canada Co-op", courses: ["Computer Science", "Engineering", "Mathematics"], tuition: "₹24L / yr" },
    { name: "McGill University", short: "McGill", location: "Montreal, QC", ranking: "#30 QS World", courses: ["Business", "Medicine", "Engineering"], tuition: "₹22L / yr" },
    { name: "Conestoga College", short: "CC", location: "Kitchener, ON", ranking: "Top applied programs", courses: ["IT", "Business Analytics", "Project Management"], tuition: "₹14L / yr" },
  ],
  australia: [
    { name: "University of Melbourne", short: "UniMelb", location: "Melbourne", ranking: "#13 QS World", courses: ["Engineering", "Public Health", "Business"], tuition: "₹26L / yr" },
    { name: "University of Sydney", short: "USyd", location: "Sydney", ranking: "#19 QS World", courses: ["Business", "Data Science", "Architecture"], tuition: "₹27L / yr" },
    { name: "Monash University", short: "Monash", location: "Melbourne", ranking: "#37 QS World", courses: ["Engineering", "Pharmacy", "IT"], tuition: "₹24L / yr" },
    { name: "University of Queensland", short: "UQ", location: "Brisbane", ranking: "#43 QS World", courses: ["Engineering", "Environmental Science", "Business"], tuition: "₹23L / yr" },
    { name: "UNSW Sydney", short: "UNSW", location: "Sydney", ranking: "#19 QS World", courses: ["Computer Science", "Business", "Engineering"], tuition: "₹25L / yr" },
  ],
  germany: [
    { name: "Technical University of Munich", short: "TUM", location: "Munich", ranking: "#28 QS World", courses: ["Mechanical Eng.", "Robotics", "Computer Science"], tuition: "₹1.5L / yr" },
    { name: "RWTH Aachen University", short: "RWTH", location: "Aachen", ranking: "#87 QS World", courses: ["Automotive Eng.", "Mechanical Eng.", "Data Science"], tuition: "₹1.2L / yr" },
    { name: "Technical University of Berlin", short: "TU Berlin", location: "Berlin", ranking: "#154 QS World", courses: ["Engineering", "Computer Science", "Energy Systems"], tuition: "₹1.5L / yr" },
    { name: "University of Stuttgart", short: "UStuttgart", location: "Stuttgart", ranking: "#286 QS World", courses: ["Automotive Eng.", "Aerospace", "Robotics"], tuition: "₹1.3L / yr" },
    { name: "TU Dresden", short: "TUD", location: "Dresden", ranking: "#173 QS World", courses: ["Mechanical Eng.", "Microelectronics", "Computer Science"], tuition: "₹1.2L / yr" },
  ],
  ireland: [
    { name: "Trinity College Dublin", short: "TCD", location: "Dublin", ranking: "#81 QS World", courses: ["Finance", "Computer Science", "Law"], tuition: "₹20L total" },
    { name: "University College Dublin", short: "UCD", location: "Dublin", ranking: "#126 QS World", courses: ["Business", "Data Analytics", "Engineering"], tuition: "₹19L total" },
    { name: "Dublin City University", short: "DCU", location: "Dublin", ranking: "#421 QS World", courses: ["Fintech", "Computer Science", "Business Analytics"], tuition: "₹16L total" },
    { name: "University College Cork", short: "UCC", location: "Cork", ranking: "#292 QS World", courses: ["Pharma", "Food Science", "Business"], tuition: "₹15L total" },
    { name: "University of Galway", short: "UG", location: "Galway", ranking: "#274 QS World", courses: ["Biomedical Eng.", "Data Science", "Law"], tuition: "₹14L total" },
  ],
  newzealand: [
    { name: "University of Auckland", short: "UoA", location: "Auckland", ranking: "#68 QS World", courses: ["Engineering", "Business", "Environmental Science"], tuition: "₹22L / yr" },
    { name: "University of Otago", short: "Otago", location: "Dunedin", ranking: "#206 QS World", courses: ["Health Sciences", "Agritech", "Tourism"], tuition: "₹19L / yr" },
    { name: "Victoria University of Wellington", short: "VUW", location: "Wellington", ranking: "#241 QS World", courses: ["Public Policy", "Computer Science", "Design"], tuition: "₹18L / yr" },
    { name: "University of Canterbury", short: "UC", location: "Christchurch", ranking: "#256 QS World", courses: ["Engineering", "Environmental Science", "Business"], tuition: "₹18L / yr" },
    { name: "Lincoln University", short: "Lincoln", location: "Christchurch", ranking: "Top Agritech NZ", courses: ["Agritech", "Land Management", "Viticulture"], tuition: "₹16L / yr" },
  ],
  singapore: [
    { name: "National University of Singapore", short: "NUS", location: "Singapore", ranking: "#8 QS World", courses: ["Computer Science", "Finance", "AI & Computing"], tuition: "₹18L / yr" },
    { name: "Nanyang Technological University", short: "NTU", location: "Singapore", ranking: "#12 QS World", courses: ["Engineering", "Data Science", "Logistics"], tuition: "₹17L / yr" },
    { name: "Singapore Management University", short: "SMU", location: "Singapore", ranking: "#1 Asia Business", courses: ["Finance", "Business Analytics", "Law"], tuition: "₹19L / yr" },
    { name: "Singapore University of Tech & Design", short: "SUTD", location: "Singapore", ranking: "Top Design-Tech Asia", courses: ["AI & Computing", "Engineering Systems", "Design"], tuition: "₹16L / yr" },
  ],
};

export default universitiesData;