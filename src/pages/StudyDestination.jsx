// src/pages/StudyDestination.jsx
import React from "react";
import Hero from "../components/study-destination/Hero";
import WhyStudyAbroad from "../components/study-destination/WhyStudyAbroad";
import WorldMap from "../components/study-destination/WorldMap";
import FAQ from "../components/study-destination/FAQ";
import CTA from "../components/study-destination/CTA";

const StudyDestination = () => {
  return (
    <main className="sd-page">
      <Hero />
      <WhyStudyAbroad />
      <WorldMap />
      <FAQ />
      <CTA />
    </main>
  );
};

export default StudyDestination;