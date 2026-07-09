// src/data/indianStates.js
//
// Full list of Indian states. Each entry expects a matching image at
// src/assets/states/<id>.jpg — rename the import paths below if your
// filenames differ. Only 4 of these (tamil-nadu, kerala, andhra-pradesh,
// karnataka) are rendered by TopStates.jsx today; the rest exist here so
// a future "all states" directory page can reuse the same data.

import andhraPradeshImg from  "../assets/images/ai-tool.png";
import karnatakaImg from "../assets/images/ai-tool.png";
import keralaImg from "../assets/images/ai-tool.png";
import tamilNaduImg from "../assets/images/ai-tool.png";
/*import arunachalPradeshImg from "../assets/states/arunachal-pradesh.jpg";
import assamImg from "../assets/states/assam.jpg";
import biharImg from "../assets/states/bihar.jpg";
import chhattisgarhImg from "../assets/states/chhattisgarh.jpg";
import goaImg from "../assets/states/goa.jpg";
import gujaratImg from "../assets/states/gujarat.jpg";
import haryanaImg from "../assets/states/haryana.jpg";
import himachalPradeshImg from "../assets/states/himachal-pradesh.jpg";
import jharkhandImg from "../assets/states/jharkhand.jpg";
import karnatakaImg from "../assets/images/ai-tool.png";
import keralaImg from "../assets/images/ai-tool.png";
import madhyaPradeshImg from "../assets/states/madhya-pradesh.jpg";
import maharashtraImg from "../assets/states/maharashtra.jpg";
import manipurImg from "../assets/states/manipur.jpg";
import meghalayaImg from "../assets/states/meghalaya.jpg";
import mizoramImg from "../assets/states/mizoram.jpg";
import nagalandImg from "../assets/states/nagaland.jpg";
import odishaImg from "../assets/states/odisha.jpg";
import punjabImg from "../assets/states/punjab.jpg";
import rajasthanImg from "../assets/states/rajasthan.jpg";
import sikkimImg from "../assets/states/sikkim.jpg";
import tamilNaduImg from "../assets/images/ai-tool.png";
import telanganaImg from "../assets/states/telangana.jpg";
import tripuraImg from "../assets/states/tripura.jpg";
import uttarPradeshImg from "../assets/states/uttar-pradesh.jpg";
import uttarakhandImg from "../assets/states/uttarakhand.jpg";
import westBengalImg from "../assets/states/west-bengal.jpg";*/

export const indianStates = [
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    code: "AP",
    image: andhraPradeshImg,
    topCities: ["Vijayawada", "Visakhapatnam"],
    collegeCount: 138,
    color: "var(--accent-blue)",
  },
 /* {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    code: "AR",
    image: arunachalPradeshImg,
    topCities: ["Itanagar"],
    collegeCount: 18,
    color: "var(--accent-green)",
  },
  {
    id: "assam",
    name: "Assam",
    code: "AS",
    image: assamImg,
    topCities: ["Guwahati"],
    collegeCount: 64,
    color: "var(--extra-indigo)",
  },
  {
    id: "bihar",
    name: "Bihar",
    code: "BR",
    image: biharImg,
    topCities: ["Patna"],
    collegeCount: 72,
    color: "var(--secondary)",
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    code: "CG",
    image: chhattisgarhImg,
    topCities: ["Raipur"],
    collegeCount: 46,
    color: "var(--accent-pink)",
  },
  {
    id: "goa",
    name: "Goa",
    code: "GA",
    image: goaImg,
    topCities: ["Panaji"],
    collegeCount: 22,
    color: "var(--extra-orange)",
  },
  {
    id: "gujarat",
    name: "Gujarat",
    code: "GJ",
    image: gujaratImg,
    topCities: ["Ahmedabad", "Vadodara"],
    collegeCount: 150,
    color: "var(--extra-orange)",
  },
  {
    id: "haryana",
    name: "Haryana",
    code: "HR",
    image: haryanaImg,
    topCities: ["Gurugram"],
    collegeCount: 88,
    color: "var(--primary)",
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    code: "HP",
    image: himachalPradeshImg,
    topCities: ["Shimla"],
    collegeCount: 34,
    color: "var(--accent-blue)",
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    code: "JH",
    image: jharkhandImg,
    topCities: ["Ranchi"],
    collegeCount: 41,
    color: "var(--extra-purple)",
  },*/
  {
    id: "karnataka",
    name: "Karnataka",
    code: "KA",
    image: karnatakaImg,
    topCities: ["Bengaluru", "Mysuru"],
    collegeCount: 210,
    color: "var(--primary)",
  },
  {
    id: "kerala",
    name: "Kerala",
    code: "KL",
    image: keralaImg,
    topCities: ["Kochi", "Thiruvananthapuram"],
    collegeCount: 118,
    color: "var(--accent-green)",
  },
 /* {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    code: "MP",
    image: madhyaPradeshImg,
    topCities: ["Indore", "Bhopal"],
    collegeCount: 96,
    color: "var(--secondary)",
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    code: "MH",
    image: maharashtraImg,
    topCities: ["Mumbai", "Pune"],
    collegeCount: 265,
    color: "var(--secondary)",
  },
  {
    id: "manipur",
    name: "Manipur",
    code: "MN",
    image: manipurImg,
    topCities: ["Imphal"],
    collegeCount: 15,
    color: "var(--accent-pink)",
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    code: "ML",
    image: meghalayaImg,
    topCities: ["Shillong"],
    collegeCount: 14,
    color: "var(--accent-green)",
  },
  {
    id: "mizoram",
    name: "Mizoram",
    code: "MZ",
    image: mizoramImg,
    topCities: ["Aizawl"],
    collegeCount: 9,
    color: "var(--accent-blue)",
  },
  {
    id: "nagaland",
    name: "Nagaland",
    code: "NL",
    image: nagalandImg,
    topCities: ["Kohima"],
    collegeCount: 10,
    color: "var(--extra-indigo)",
  },
  {
    id: "odisha",
    name: "Odisha",
    code: "OD",
    image: odishaImg,
    topCities: ["Bhubaneswar"],
    collegeCount: 58,
    color: "var(--extra-purple)",
  },
  {
    id: "punjab",
    name: "Punjab",
    code: "PB",
    image: punjabImg,
    topCities: ["Chandigarh", "Mohali"],
    collegeCount: 95,
    color: "var(--extra-indigo)",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    code: "RJ",
    image: rajasthanImg,
    topCities: ["Jaipur", "Kota"],
    collegeCount: 112,
    color: "var(--extra-orange)",
  },
  {
    id: "sikkim",
    name: "Sikkim",
    code: "SK",
    image: sikkimImg,
    topCities: ["Gangtok"],
    collegeCount: 8,
    color: "var(--accent-green)",
  },*/
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    code: "TN",
    image: tamilNaduImg,
    topCities: ["Chennai", "Coimbatore"],
    collegeCount: 230,
    color: "var(--accent-green)",
  },
/*  {
    id: "telangana",
    name: "Telangana",
    code: "TS",
    image: telanganaImg,
    topCities: ["Hyderabad"],
    collegeCount: 165,
    color: "var(--extra-purple)",
  },
  {
    id: "tripura",
    name: "Tripura",
    code: "TR",
    image: tripuraImg,
    topCities: ["Agartala"],
    collegeCount: 11,
    color: "var(--secondary)",
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    code: "UP",
    image: uttarPradeshImg,
    topCities: ["Lucknow", "Noida"],
    collegeCount: 240,
    color: "var(--primary)",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    code: "UK",
    image: uttarakhandImg,
    topCities: ["Dehradun"],
    collegeCount: 39,
    color: "var(--accent-blue)",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    code: "WB",
    image: westBengalImg,
    topCities: ["Kolkata", "Kharagpur"],
    collegeCount: 140,
    color: "var(--accent-pink)",
  },*/
];

// States shown on the StudyIndia "Top States" section, in display order.
export const featuredStateIds = ["tamil-nadu", "kerala", "andhra-pradesh", "karnataka"];