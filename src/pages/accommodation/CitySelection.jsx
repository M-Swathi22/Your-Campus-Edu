// src/pages/accommodation/CitySelection.jsx
import { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import countryDetails from "../../data/countryDetails";
import citiesByCountry from "../../data/citiesByCountry";
import CityHero from "../../components/accommodation/city-selection/CityHero";
import CityGrid from "../../components/accommodation/city-selection/CityGrid";
import CityCTA from "../../components/accommodation/city-selection/CityCTA";

// Parses a rent string like "₹42K–65K /mo" into comparable min/max lakhs-free numbers.
const parseRentBound = (rent, pick) => {
  const matches = rent.match(/[\d.]+[KL]/g);
  if (!matches || !matches.length) return null;
  const raw = pick === "min" ? matches[0] : matches[matches.length - 1];
  const value = parseFloat(raw);
  return raw.includes("L") ? value * 100000 : value * 1000;
};

const CitySelection = () => {
  const { countryId } = useParams();
  const country = countryDetails[countryId];
  const cities = citiesByCountry[countryId] || [];

  const { listingCount, rentRange } = useMemo(() => {
    if (!cities.length) return { listingCount: 0, rentRange: "—" };

    const totalListings = cities.reduce((sum, c) => sum + c.listingsCount, 0);

    const mins = cities.map((c) => parseRentBound(c.avgRent, "min")).filter(Boolean);
    const maxs = cities.map((c) => parseRentBound(c.avgRent, "max")).filter(Boolean);
    const lowest = mins.length ? Math.min(...mins) : null;
    const highest = maxs.length ? Math.max(...maxs) : null;

    const format = (n) =>
      n >= 100000 ? `₹${(n / 100000).toFixed(1)}L` : `₹${Math.round(n / 1000)}K`;

    const range =
      lowest && highest ? `${format(lowest)}–${format(highest)} /mo` : "—";

    return { listingCount: totalListings, rentRange: range };
  }, [cities]);

  if (!country) {
    return <Navigate to="/accommodation" replace />;
  }

  return (
    <main className="city-selection-page">
      <CityHero
        country={country}
        cityCount={cities.length}
        listingCount={listingCount}
        rentRange={rentRange}
      />

      {cities.length > 0 ? (
        <CityGrid country={country} cities={cities} />
      ) : (
        <div className="city-selection-page__empty">
          <p>
            We're still onboarding cities for {country.name}.{" "}
            <Link to="/accommodation">Explore other destinations</Link> in the
            meantime.
          </p>
        </div>
      )}

      <CityCTA countryName={country.name} />

      <style>{`
        .city-selection-page {
          font-family: var(--font-main);
        }

        .city-selection-page__empty {
          max-width: 640px;
          margin: 0 auto;
          padding: 40px 24px;
          text-align: center;
          color: var(--text-medium);
          font-size: 15px;
        }

        .city-selection-page__empty a {
          color: var(--primary);
          font-weight: 600;
          text-decoration: none;
        }

        .city-selection-page__empty a:hover {
          color: var(--primary-dark);
        }
      `}</style>
    </main>
  );
};

export default CitySelection;