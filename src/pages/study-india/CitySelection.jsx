// src/pages/study-india/CitySelection.jsx
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getStateById } from "../../Data/indianStates";
import CityHero from "../../components/study-india/city-selection/CityHero";
import CityGrid from "../../components/study-india/city-selection/CityGrid";
import CityCTA from "../../components/study-india/city-selection/CityCTA";

const CitySelection = () => {
  const { stateId } = useParams();
  const state = getStateById(stateId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [stateId]);

  if (!state) {
    return (
      <main className="city-selection-fallback">
        <p className="city-selection-fallback__eyebrow">Route Not Found</p>
        <h1 className="city-selection-fallback__heading">We couldn't find that state</h1>
        <p className="city-selection-fallback__text">
          Double-check the link, or head back to Study in India to pick a state from the board.
        </p>
        <Link to="/study-india" className="city-selection-fallback__link">
          Back to Study in India
        </Link>

        <style>{`
          .city-selection-fallback {
            font-family: var(--font-main);
            min-height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 0.6rem;
            padding: 4rem 1.5rem;
            background: var(--bg-light);
          }
          .city-selection-fallback__eyebrow {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--secondary);
          }
          .city-selection-fallback__heading { font-size: 1.6rem; font-weight: 700; color: var(--primary-dark); }
          .city-selection-fallback__text { color: var(--text-medium); max-width: 40ch; }
          .city-selection-fallback__link {
            margin-top: 1rem;
            font-weight: 700;
            color: var(--white);
            background: var(--primary);
            padding: 0.7rem 1.4rem;
            border-radius: var(--radius-md);
            text-decoration: none;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="city-selection-page">
      <CityHero state={state} />
      <CityGrid state={state} cities={state?.cities || []}/>
      <CityCTA state={state} />
    </main>
  );
};

export default CitySelection;