import { useParams, Link } from "react-router-dom";
import { getStateById, getCityById } from "../../Data/indianStates";
import { getCollegesByCity } from "../../Data/collegesData";
import CollegeHero from "../../components/study-india/college-list/CollegeHero";
import CollegeGrid from "../../components/study-india/college-list/CollegeGrid";
import CollegeCTA from "../../components/study-india/college-list/CollegeCTA";

const CollegeList = () => {
  const { categoryId, courseSlug, stateId, cityId } = useParams();
  const state = getStateById(stateId);
  const city = state ? getCityById(stateId, cityId) : null;

  if (!state || !city) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p style={{ fontFamily: "var(--font-main)", color: "var(--primary-dark, #24144f)", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 600 }}>
          We couldn't find that destination.
        </p>
        <Link to="/study-india" className="underline" style={{ color: "var(--primary, #6d53a3)" }}>
          Back to Study India
        </Link>
      </div>
    );
  }

  const colleges = getCollegesByCity(stateId, cityId);

  return (
    <main>
      <CollegeHero
        state={state}
        city={city}
        collegeCount={colleges.length}
        categoryId={categoryId}
        courseSlug={courseSlug}
      />
      <CollegeGrid state={state} city={city} colleges={colleges}/>
      <CollegeCTA state={state} city={city} />
    </main>
  );
};

export default CollegeList;