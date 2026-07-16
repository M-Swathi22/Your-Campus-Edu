// src/data/indianStates.js
import andhraPradeshImg from "../assets/images/ai-tool.png";
import karnatakaImg from "../assets/images/ai-tool.png";
import keralaImg from "../assets/images/ai-tool.png";
import tamilNaduImg from "../assets/images/ai-tool.png";

// Full state list — every consumer except TopStates works off this directly.
// Only the 4 states below carry an `image` key.
// Every state now also carries a `cities` array (id, name, isCapital,
// collegeCount, topCourses) used by the City Selection flow.
export const indianStates = [
  {
    id: "andhra-pradesh", name: "Andhra Pradesh", code: "AP", image: andhraPradeshImg,
    topCities: ["Vijayawada", "Visakhapatnam"], collegeCount: 138, color: "var(--accent-blue)",
    cities: [
      { id: "visakhapatnam", name: "Visakhapatnam", isCapital: false, collegeCount: 52, topCourses: ["Engineering & Technology", "Pure Sciences"] },
      { id: "vijayawada", name: "Vijayawada", isCapital: true, collegeCount: 48, topCourses: ["Business & Management", "Medical & Health Sciences"] },
      { id: "tirupati", name: "Tirupati", isCapital: false, collegeCount: 38, topCourses: ["Arts & Humanities", "Pure Sciences"] },
    ],
  },
  {
    id: "arunachal-pradesh", name: "Arunachal Pradesh", code: "AR",
    topCities: ["Itanagar"], collegeCount: 18, color: "var(--accent-green)",
    cities: [
      { id: "itanagar", name: "Itanagar", isCapital: true, collegeCount: 11, topCourses: ["Arts & Humanities", "Pure Sciences"] },
      { id: "naharlagun", name: "Naharlagun", isCapital: false, collegeCount: 7, topCourses: ["Business & Management", "Arts & Humanities"] },
    ],
  },
  {
    id: "assam", name: "Assam", code: "AS",
    topCities: ["Guwahati"], collegeCount: 64, color: "var(--extra-indigo)",
    cities: [
      { id: "guwahati", name: "Guwahati", isCapital: false, collegeCount: 40, topCourses: ["Engineering & Technology", "Medical & Health Sciences"] },
      { id: "dibrugarh", name: "Dibrugarh", isCapital: false, collegeCount: 24, topCourses: ["Pure Sciences", "Agriculture & Life Sciences"] },
    ],
  },
  {
    id: "bihar", name: "Bihar", code: "BR",
    topCities: ["Patna"], collegeCount: 72, color: "var(--secondary)",
    cities: [
      { id: "patna", name: "Patna", isCapital: true, collegeCount: 46, topCourses: ["Engineering & Technology", "Medical & Health Sciences"] },
      { id: "gaya", name: "Gaya", isCapital: false, collegeCount: 26, topCourses: ["Arts & Humanities", "Business & Management"] },
    ],
  },
  {
    id: "chhattisgarh", name: "Chhattisgarh", code: "CG",
    topCities: ["Raipur"], collegeCount: 46, color: "var(--accent-pink)",
    cities: [
      { id: "raipur", name: "Raipur", isCapital: true, collegeCount: 28, topCourses: ["Engineering & Technology", "Business & Management"] },
      { id: "bhilai", name: "Bhilai", isCapital: false, collegeCount: 18, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
  {
    id: "goa", name: "Goa", code: "GA",
    topCities: ["Panaji"], collegeCount: 22, color: "var(--extra-orange)",
    cities: [
      { id: "panaji", name: "Panaji", isCapital: true, collegeCount: 13, topCourses: ["Hospitality & Tourism", "Arts & Humanities"] },
      { id: "margao", name: "Margao", isCapital: false, collegeCount: 9, topCourses: ["Business & Management", "Hospitality & Tourism"] },
    ],
  },
  {
    id: "gujarat", name: "Gujarat", code: "GJ",
    topCities: ["Ahmedabad", "Vadodara"], collegeCount: 150, color: "var(--extra-orange)",
    cities: [
      { id: "ahmedabad", name: "Ahmedabad", isCapital: false, collegeCount: 85, topCourses: ["Business & Management", "Design & Architecture"] },
      { id: "vadodara", name: "Vadodara", isCapital: false, collegeCount: 65, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
  {
    id: "haryana", name: "Haryana", code: "HR",
    topCities: ["Gurugram"], collegeCount: 88, color: "var(--primary)",
    cities: [
      { id: "gurugram", name: "Gurugram", isCapital: false, collegeCount: 52, topCourses: ["Business & Management", "Computer Science & IT"] },
      { id: "faridabad", name: "Faridabad", isCapital: false, collegeCount: 36, topCourses: ["Engineering & Technology", "Business & Management"] },
    ],
  },
  {
    id: "himachal-pradesh", name: "Himachal Pradesh", code: "HP",
    topCities: ["Shimla"], collegeCount: 34, color: "var(--accent-blue)",
    cities: [
      { id: "shimla", name: "Shimla", isCapital: true, collegeCount: 20, topCourses: ["Arts & Humanities", "Pure Sciences"] },
      { id: "solan", name: "Solan", isCapital: false, collegeCount: 14, topCourses: ["Pure Sciences", "Agriculture & Life Sciences"] },
    ],
  },
  {
    id: "jharkhand", name: "Jharkhand", code: "JH",
    topCities: ["Ranchi"], collegeCount: 41, color: "var(--extra-purple)",
    cities: [
      { id: "ranchi", name: "Ranchi", isCapital: true, collegeCount: 25, topCourses: ["Engineering & Technology", "Business & Management"] },
      { id: "jamshedpur", name: "Jamshedpur", isCapital: false, collegeCount: 16, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
  {
    id: "karnataka", name: "Karnataka", code: "KA", image: karnatakaImg,
    topCities: ["Bengaluru", "Mysuru"], collegeCount: 210, color: "var(--primary)",
    cities: [
      { id: "bengaluru", name: "Bengaluru", isCapital: true, collegeCount: 110, topCourses: ["Computer Science & IT", "Engineering & Technology"] },
      { id: "mysuru", name: "Mysuru", isCapital: false, collegeCount: 55, topCourses: ["Arts & Humanities", "Pure Sciences"] },
      { id: "mangaluru", name: "Mangaluru", isCapital: false, collegeCount: 45, topCourses: ["Medical & Health Sciences", "Business & Management"] },
    ],
  },
  {
    id: "kerala", name: "Kerala", code: "KL", image: keralaImg,
    topCities: ["Kochi", "Thiruvananthapuram"], collegeCount: 118, color: "var(--accent-green)",
    cities: [
      { id: "thiruvananthapuram", name: "Thiruvananthapuram", isCapital: true, collegeCount: 45, topCourses: ["Computer Science & IT", "Pure Sciences"] },
      { id: "kochi", name: "Kochi", isCapital: false, collegeCount: 40, topCourses: ["Business & Management", "Medical & Health Sciences"] },
      { id: "kozhikode", name: "Kozhikode", isCapital: false, collegeCount: 33, topCourses: ["Medical & Health Sciences", "Arts & Humanities"] },
    ],
  },
  {
    id: "madhya-pradesh", name: "Madhya Pradesh", code: "MP",
    topCities: ["Indore", "Bhopal"], collegeCount: 96, color: "var(--secondary)",
    cities: [
      { id: "indore", name: "Indore", isCapital: false, collegeCount: 58, topCourses: ["Business & Management", "Engineering & Technology"] },
      { id: "bhopal", name: "Bhopal", isCapital: true, collegeCount: 38, topCourses: ["Medical & Health Sciences", "Pure Sciences"] },
    ],
  },
  {
    id: "maharashtra", name: "Maharashtra", code: "MH",
    topCities: ["Mumbai", "Pune"], collegeCount: 265, color: "var(--secondary)",
    cities: [
      { id: "mumbai", name: "Mumbai", isCapital: true, collegeCount: 145, topCourses: ["Business & Management", "Design & Architecture"] },
      { id: "pune", name: "Pune", isCapital: false, collegeCount: 120, topCourses: ["Engineering & Technology", "Computer Science & IT"] },
    ],
  },
  {
    id: "manipur", name: "Manipur", code: "MN",
    topCities: ["Imphal"], collegeCount: 15, color: "var(--accent-pink)",
    cities: [
      { id: "imphal", name: "Imphal", isCapital: true, collegeCount: 10, topCourses: ["Arts & Humanities", "Pure Sciences"] },
      { id: "thoubal", name: "Thoubal", isCapital: false, collegeCount: 5, topCourses: ["Agriculture & Life Sciences", "Arts & Humanities"] },
    ],
  },
  {
    id: "meghalaya", name: "Meghalaya", code: "ML",
    topCities: ["Shillong"], collegeCount: 14, color: "var(--accent-green)",
    cities: [
      { id: "shillong", name: "Shillong", isCapital: true, collegeCount: 9, topCourses: ["Arts & Humanities", "Pure Sciences"] },
      { id: "tura", name: "Tura", isCapital: false, collegeCount: 5, topCourses: ["Agriculture & Life Sciences", "Business & Management"] },
    ],
  },
  {
    id: "mizoram", name: "Mizoram", code: "MZ",
    topCities: ["Aizawl"], collegeCount: 9, color: "var(--accent-blue)",
    cities: [
      { id: "aizawl", name: "Aizawl", isCapital: true, collegeCount: 6, topCourses: ["Arts & Humanities", "Business & Management"] },
      { id: "lunglei", name: "Lunglei", isCapital: false, collegeCount: 3, topCourses: ["Pure Sciences", "Arts & Humanities"] },
    ],
  },
  {
    id: "nagaland", name: "Nagaland", code: "NL",
    topCities: ["Kohima"], collegeCount: 10, color: "var(--extra-indigo)",
    cities: [
      { id: "kohima", name: "Kohima", isCapital: true, collegeCount: 6, topCourses: ["Arts & Humanities", "Business & Management"] },
      { id: "dimapur", name: "Dimapur", isCapital: false, collegeCount: 4, topCourses: ["Business & Management", "Pure Sciences"] },
    ],
  },
  {
    id: "odisha", name: "Odisha", code: "OD",
    topCities: ["Bhubaneswar"], collegeCount: 58, color: "var(--extra-purple)",
    cities: [
      { id: "bhubaneswar", name: "Bhubaneswar", isCapital: true, collegeCount: 36, topCourses: ["Engineering & Technology", "Computer Science & IT"] },
      { id: "rourkela", name: "Rourkela", isCapital: false, collegeCount: 22, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
  {
    id: "punjab", name: "Punjab", code: "PB",
    topCities: ["Chandigarh", "Mohali"], collegeCount: 95, color: "var(--extra-indigo)",
    cities: [
      { id: "chandigarh", name: "Chandigarh", isCapital: true, collegeCount: 42, topCourses: ["Business & Management", "Design & Architecture"] },
      { id: "mohali", name: "Mohali", isCapital: false, collegeCount: 30, topCourses: ["Computer Science & IT", "Engineering & Technology"] },
      { id: "ludhiana", name: "Ludhiana", isCapital: false, collegeCount: 23, topCourses: ["Engineering & Technology", "Business & Management"] },
    ],
  },
  {
    id: "rajasthan", name: "Rajasthan", code: "RJ",
    topCities: ["Jaipur", "Kota"], collegeCount: 112, color: "var(--extra-orange)",
    cities: [
      { id: "jaipur", name: "Jaipur", isCapital: true, collegeCount: 62, topCourses: ["Business & Management", "Design & Architecture"] },
      { id: "kota", name: "Kota", isCapital: false, collegeCount: 50, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
  {
    id: "sikkim", name: "Sikkim", code: "SK",
    topCities: ["Gangtok"], collegeCount: 8, color: "var(--accent-green)",
    cities: [
      { id: "gangtok", name: "Gangtok", isCapital: true, collegeCount: 5, topCourses: ["Pure Sciences", "Business & Management"] },
      { id: "namchi", name: "Namchi", isCapital: false, collegeCount: 3, topCourses: ["Arts & Humanities", "Agriculture & Life Sciences"] },
    ],
  },
  {
    id: "tamil-nadu", name: "Tamil Nadu", code: "TN", image: tamilNaduImg,
    topCities: ["Chennai", "Coimbatore"], collegeCount: 230, color: "var(--accent-green)",
    cities: [
      { id: "chennai", name: "Chennai", isCapital: true, collegeCount: 95, topCourses: ["Engineering & Technology", "Computer Science & IT"] },
      { id: "coimbatore", name: "Coimbatore", isCapital: false, collegeCount: 58, topCourses: ["Engineering & Technology", "Textile & Design"] },
      { id: "madurai", name: "Madurai", isCapital: false, collegeCount: 42, topCourses: ["Medical & Health Sciences", "Arts & Humanities"] },
      { id: "tiruchirappalli", name: "Tiruchirappalli", isCapital: false, collegeCount: 35, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
  {
    id: "telangana", name: "Telangana", code: "TS",
    topCities: ["Hyderabad"], collegeCount: 165, color: "var(--extra-purple)",
    cities: [
      { id: "hyderabad", name: "Hyderabad", isCapital: true, collegeCount: 130, topCourses: ["Computer Science & IT", "Business & Management"] },
      { id: "warangal", name: "Warangal", isCapital: false, collegeCount: 35, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
  {
    id: "tripura", name: "Tripura", code: "TR",
    topCities: ["Agartala"], collegeCount: 11, color: "var(--secondary)",
    cities: [
      { id: "agartala", name: "Agartala", isCapital: true, collegeCount: 7, topCourses: ["Arts & Humanities", "Business & Management"] },
      { id: "udaipur-tr", name: "Udaipur", isCapital: false, collegeCount: 4, topCourses: ["Pure Sciences", "Arts & Humanities"] },
    ],
  },
  {
    id: "uttar-pradesh", name: "Uttar Pradesh", code: "UP",
    topCities: ["Lucknow", "Noida"], collegeCount: 240, color: "var(--primary)",
    cities: [
      { id: "lucknow", name: "Lucknow", isCapital: true, collegeCount: 90, topCourses: ["Business & Management", "Medical & Health Sciences"] },
      { id: "noida", name: "Noida", isCapital: false, collegeCount: 85, topCourses: ["Computer Science & IT", "Business & Management"] },
      { id: "kanpur", name: "Kanpur", isCapital: false, collegeCount: 65, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
  {
    id: "uttarakhand", name: "Uttarakhand", code: "UK",
    topCities: ["Dehradun"], collegeCount: 39, color: "var(--accent-blue)",
    cities: [
      { id: "dehradun", name: "Dehradun", isCapital: true, collegeCount: 24, topCourses: ["Business & Management", "Design & Architecture"] },
      { id: "roorkee", name: "Roorkee", isCapital: false, collegeCount: 15, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
  {
    id: "west-bengal", name: "West Bengal", code: "WB",
    topCities: ["Kolkata", "Kharagpur"], collegeCount: 140, color: "var(--accent-pink)",
    cities: [
      { id: "kolkata", name: "Kolkata", isCapital: true, collegeCount: 92, topCourses: ["Arts & Humanities", "Business & Management"] },
      { id: "kharagpur", name: "Kharagpur", isCapital: false, collegeCount: 48, topCourses: ["Engineering & Technology", "Pure Sciences"] },
    ],
  },
];

// States shown on the StudyIndia landing page's TopStates section, in order.
export const featuredStateIds = ["tamil-nadu", "kerala", "andhra-pradesh", "karnataka"];

export const getStateById = (id) => indianStates.find((s) => s.id === id);

// City-selection helpers
export const getCitiesByStateId = (stateId) => getStateById(stateId)?.cities ?? [];

export const getCityById = (stateId, cityId) =>
  getCitiesByStateId(stateId).find((c) => c.id === cityId);