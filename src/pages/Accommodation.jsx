// src/pages/Accommodation.jsx
import React from "react";
import AccommodationHero from "../components/accommodation/AccommodationHero";
import WhyChooseAccommodation from "../components/accommodation/WhyChooseAccommodation";
import PopularDestinations from "../components/accommodation/PopularDestinations";
/*import FeaturedHostels from "../components/accommodation/FeaturedHostels";*/
import AccommodationFAQ from "../components/accommodation/AccommodationFAQ";
import AccommodationCTA from "../components/accommodation/AccommodationCTA";

export default function Accommodation() {
  return (
    <main className="accommodation-page">
      <AccommodationHero />
      <WhyChooseAccommodation />
      <PopularDestinations />
      {/* <FeaturedHostels /> */}
      <AccommodationFAQ />
      <AccommodationCTA />
    </main>
  );
}