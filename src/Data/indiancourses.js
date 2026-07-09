import medicalImg from "../assets/images/courses/medical.jpg";
import nursingImg from "../assets/images/courses/nursing.png";
import pharmaImg from "../assets/images/courses/paramedical.jpg";
import alliedImg from "../assets/images/courses/alliedhealth.jpg";
import engineeringImg from "../assets/images/courses/engineering.jpg";
import artsAdvancedImg from "../assets/images/courses/architecture.jpg";
import artsScienceImg from "../assets/images/courses/arts-science.jpg";
import lawImg from "../assets/images/courses/law.jpg";
import managementImg from "../assets/images/courses/management.jpg";

// `icon` maps to a lucide-react icon name (resolved dynamically in PopularCourses.jsx)
export const courseCategories = [
  {
    id: "medical",
    category: "Medical",
    image: medicalImg,
    courseCount: 8,
    icon: "Stethoscope",
  },
  {
    id: "paramedical-nursing",
    category: "Paramedical & Nursing",
    image: nursingImg,
    courseCount: 7,
    icon: "HeartPulse",
  },
  {
    id: "pharmaceutical",
    category: "Pharmaceutical",
    image: pharmaImg,
    courseCount: 4,
    icon: "Pill",
  },
  {
    id: "allied-health-science",
    category: "Allied Health Science",
    image: alliedImg,
    courseCount: 15,
    icon: "Activity",
  },
  {
    id: "engineering",
    category: "Engineering",
    image: engineeringImg,
    courseCount: 14,
    icon: "Cpu",
  },
  {
    id: "arts-science-advanced",
    category: "Arts & Science Advanced",
    image: artsAdvancedImg,
    courseCount: 16,
    icon: "Landmark",
  },
  {
    id: "arts-science",
    category: "Arts & Science",
    image: artsScienceImg,
    courseCount: 14,
    icon: "FlaskConical",
  },
  {
    id: "law",
    category: "Law",
    image: lawImg,
    courseCount: 5,
    icon: "Scale",
  },
  {
    id: "management",
    category: "Management",
    image: managementImg,
    courseCount: 14,
    icon: "Briefcase",
  },
];