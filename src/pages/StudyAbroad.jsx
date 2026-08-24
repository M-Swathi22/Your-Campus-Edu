// src/pages/StudyAbroad.jsx
import Hero from "../components/study-abroad/Hero";
import WhyStudyAbroad from "../components/study-abroad/WhyStudyAbroad";
import WorldMap from "../components/study-abroad/WorldMap";
import FAQ from "../components/study-abroad/FAQ";
import CTA from "../components/study-abroad/CTA";

const StudyAbroad = () => {
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

export default StudyAbroad;