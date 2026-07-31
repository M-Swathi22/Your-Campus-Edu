// src/data/accommodationData.js
// Data layer for the Accommodation page.
// Country identity (flag, code, name, image, gate, tagline) now lives in a
// single place: countryDetails.js. This file only holds accommodation-
// specific numbers, keyed by the same country id, plus the hostel/feature
// data that isn't duplicated anywhere else.

export const accommodationStats = {
  usa: {
    city: "New York",
    avgRent: "₹65,000 – 95,000",
    properties: 420,
  },
  uk: {
    city: "London",
    avgRent: "₹58,000 – 82,000",
    properties: 365,
  },
  canada: {
    city: "Toronto",
    avgRent: "₹48,000 – 70,000",
    properties: 310,
  },
  australia: {
    city: "Melbourne",
    avgRent: "₹42,000 – 65,000",
    properties: 288,
  },
  germany: {
    city: "Berlin",
    avgRent: "₹28,000 – 45,000",
    properties: 205,
  },
  ireland: {
    city: "Dublin",
    avgRent: "₹52,000 – 74,000",
    properties: 142,
  },
  newzealand: {
    city: "Auckland",
    avgRent: "₹40,000 – 60,000",
    properties: 96,
  },
  singapore: {
    city: "Singapore City",
    avgRent: "₹55,000 – 80,000",
    properties: 118,
  },
};

export const whyChooseFeatures = [
  {
    icon: "ShieldCheck",
    title: "Verified stays only",
    description:
      "Every listing is physically inspected or agent-verified before it goes live — no ghost listings, no surprises at check-in.",
  },
  {
    icon: "Wallet",
    title: "Zero brokerage",
    description:
      "You deal with the property or landlord directly through us — no hidden finder's fee added on top of your rent.",
  },
  {
    icon: "Video",
    title: "Live virtual tours",
    description:
      "Walk through a room over video call before you book, with a counselor on the line to point out what photos don't show.",
  },
  {
    icon: "MapPin",
    title: "Campus-distance mapped",
    description:
      "Every result shows walk and transit time to your actual university building, not just the city center.",
  },
  {
    icon: "Headphones",
    title: "24/7 on-ground support",
    description:
      "A local support number in every city for lockouts, deposit disputes, or move-in issues — day one through move-out.",
  },
  {
    icon: "FileCheck2",
    title: "Visa-ready paperwork",
    description:
      "Rental agreements and proof-of-address letters formatted to match what your visa office actually asks for.",
  },
];

export const featuredHostels = [
  {
    id: "h1",
    slug: "maple-house-toronto",
    name: "Maple House Residence",
    city: "Toronto",
    country: "Canada",
    type: "Student Residence",
    price: "₹52,000",
    priceUnit: "/mo",
    rating: 4.7,
    reviews: 214,
    amenities: ["Wi-Fi", "Meals", "Laundry", "Study Lounge"],
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "h2",
    slug: "the-student-hub-london",
    name: "The Student Hub",
    city: "London",
    country: "United Kingdom",
    type: "PG / Shared Flat",
    price: "₹64,000",
    priceUnit: "/mo",
    rating: 4.5,
    reviews: 178,
    amenities: ["Wi-Fi", "Gym", "Bills Included", "24/7 Security"],
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "h3",
    slug: "harbourview-studios-melbourne",
    name: "Harbourview Studios",
    city: "Melbourne",
    country: "Australia",
    type: "Studio Apartment",
    price: "₹47,000",
    priceUnit: "/mo",
    rating: 4.8,
    reviews: 132,
    amenities: ["Wi-Fi", "Kitchenette", "Pool", "Parking"],
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "h4",
    slug: "campus-nest-berlin",
    name: "Campus Nest",
    city: "Berlin",
    country: "Germany",
    type: "Shared Apartment",
    price: "₹31,000",
    priceUnit: "/mo",
    rating: 4.4,
    reviews: 96,
    amenities: ["Wi-Fi", "Bike Storage", "Laundry", "Common Kitchen"],
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
  },
];