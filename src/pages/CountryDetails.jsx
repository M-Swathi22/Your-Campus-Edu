import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Compass } from "lucide-react";

import { destinations } from "../data/studyDestination";
import { countryDetails } from "../data/countryDetails";
import { universitiesData } from "../data/universitiesData";

import CountryHero from "../components/study-destination/country-details/CountryHero";
import WhyChooseCountry from "../components/study-destination/country-details/WhyChooseCountry";
import UniversitySection from "../components/study-destination/country-details/UniversitySection";
import CountryCTA from "../components/study-destination/country-details/CountryCTA";

export default function CountryDetails() {
  const { countryId } = useParams();

  const destination = destinations.find((d) => d.id === countryId);
  const details = countryDetails[countryId];
  const universities = universitiesData[countryId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    if (destination) {
      document.title = `Study in ${destination.name} | YourCampus`;
    }
  }, [countryId, destination]);

  if (!destination || !details) {
    return (
      <div className="cd-notfound">
        <Compass size={40} />
        <h1>We haven't mapped this destination yet</h1>
        <p>Check back soon, or explore the destinations we've already covered.</p>
        <Link to="/study-destination" className="cd-notfound__link">
          Back to all destinations
        </Link>

        <style>{`
          .cd-notfound {
            min-height: 60vh; display: flex; flex-direction: column; align-items: center;
            justify-content: center; text-align: center; gap: 14px; padding: 60px 24px;
            font-family: var(--font-main); color: var(--text-dark);
          }
          .cd-notfound svg { color: var(--primary); margin-bottom: 6px; }
          .cd-notfound h1 { font-size: 1.5rem; font-weight: 800; margin: 0; }
          .cd-notfound p { color: var(--text-medium); margin: 0; max-width: 420px; }
          .cd-notfound__link {
            margin-top: 12px; font-weight: 600; color: var(--text-white);
            background: var(--gradient-secondary); padding: 12px 24px;
            border-radius: var(--radius-lg); text-decoration: none;
          }
        `}</style>
      </div>
    );
  }

  return (
    <main className="cd-page">
      <CountryHero destination={destination} details={details} />
      <WhyChooseCountry destination={destination} details={details} />
      <UniversitySection destination={destination} universities={universities} />
      <CountryCTA destination={destination} details={details} />

      <style>{`
        .cd-page { background: var(--bg-main); }
      `}</style>
    </main>
  );
}