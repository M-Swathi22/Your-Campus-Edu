import medicalImg from "../assets/images/courses/medical.jpg";
import nursingImg from "../assets/images/courses/nursing.png";
import pharmaImg from "../assets/images/courses/paramedical.jpg";
import alliedImg from "../assets/images/courses/alliedhealth.jpg";
import engineeringImg from "../assets/images/courses/engineering.jpg";
import artsAdvancedImg from "../assets/images/courses/architecture.jpg";
import artsScienceImg from "../assets/images/courses/arts-science.jpg";
import lawImg from "../assets/images/courses/law.jpg";
import managementImg from "../assets/images/courses/management.jpg";

// `icon` maps to a lucide-react icon name (resolved dynamically at render time)
// `accent` maps to a CSS custom property defined in theme.css — used to tint
// each category page's hero, badges and highlight cards without hardcoding hex values.
export const courseCategories = [
  {
    id: "medical",
    category: "Medical",
    tagline: "Heal, diagnose, and care for life",
    image: medicalImg,
    courseCount: 8,
    icon: "Stethoscope",
    accent: "--secondary",
  },
  {
    id: "paramedical-nursing",
    category: "Paramedical & Nursing",
    tagline: "The frontline of every patient's recovery",
    image: nursingImg,
    courseCount: 7,
    icon: "HeartPulse",
    accent: "--accent-pink",
  },
  {
    id: "pharmaceutical",
    category: "Pharmaceutical",
    tagline: "From molecule to medicine",
    image: pharmaImg,
    courseCount: 4,
    icon: "Pill",
    accent: "--accent-blue",
  },
  {
    id: "allied-health-science",
    category: "Allied Health Science",
    tagline: "The specialists behind every diagnosis",
    image: alliedImg,
    courseCount: 15,
    icon: "Activity",
    accent: "--info",
  },
  {
    id: "engineering",
    category: "Engineering",
    tagline: "Build the systems the world runs on",
    image: engineeringImg,
    courseCount: 14,
    icon: "Cpu",
    accent: "--primary",
  },
  {
    id: "arts-science-advanced",
    category: "Arts & Science Advanced",
    tagline: "Business, aviation and global commerce",
    image: artsAdvancedImg,
    courseCount: 16,
    icon: "Landmark",
    accent: "--extra-indigo",
  },
  {
    id: "arts-science",
    category: "Arts & Science",
    tagline: "Foundational science, limitless direction",
    image: artsScienceImg,
    courseCount: 14,
    icon: "FlaskConical",
    accent: "--accent-green",
  },
  {
    id: "law",
    category: "Law",
    tagline: "Argue, advise, and uphold justice",
    image: lawImg,
    courseCount: 5,
    icon: "Scale",
    accent: "--primary-dark",
  },
  {
    id: "management",
    category: "Management",
    tagline: "Lead teams, brands and businesses",
    image: managementImg,
    courseCount: 14,
    icon: "Briefcase",
    accent: "--extra-orange",
  },
];

export const getCategoryMeta = (id) =>
  courseCategories.find((c) => c.id === id);