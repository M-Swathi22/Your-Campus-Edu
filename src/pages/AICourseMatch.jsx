import { useState, useRef } from "react";

import { courseCategories } from "../data/courses";

import MatchHero from "../components/ai-course-match/MatchHero";
import MatchForm from "../components/ai-course-match/MatchForm";
import MatchResult from "../components/ai-course-match/MatchResult";
import MatchLoading from "../components/ai-course-match/MatchLoading";
import MatchCTA from "../components/ai-course-match/MatchCTA";

function AICourseMatch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] = useState(null);

  const resultRef = useRef(null);

  const handleGenerateResults = (formData) => {
    const {
      careerGoal,
      stream,
      favoriteSubject,
      interestArea,
      workStyle,
    } = formData;

    setLoading(true);

    setTimeout(() => {
      let categoryName = "";

      /* Career Goal */

      switch (careerGoal) {
        case "Doctor":
          categoryName = "Medical";
          break;

        case "Engineer":
        case "Software Developer":
        case "Data Scientist":
          categoryName = "Engineering";
          break;

        case "Lawyer":
          categoryName = "Law";
          break;

        case "Manager":
        case "Business Owner":
        case "Entrepreneur":
          categoryName = "Management";
          break;

        case "Research Scientist":
          categoryName = "Allied Health Science";
          break;

        default:
          break;
      }

      /* Undecided Logic */

      if (
        careerGoal === "Undecided" ||
        !categoryName
      ) {
        if (interestArea === "Healthcare") {
          categoryName = "Medical";
        }

        else if (
          interestArea === "Technology"
        ) {
          categoryName = "Engineering";
        }

        else if (
          interestArea === "Business"
        ) {
          categoryName = "Management";
        }

        else if (
          interestArea === "Law"
        ) {
          categoryName = "Law";
        }

        else {
          categoryName = "Arts & Science";
        }
      }

      const category =
        courseCategories.find(
          (item) =>
            item.category === categoryName
        );

      if (!category) {
        setResults([]);
        setLoading(false);
        return;
      }

      const confidenceScore =
        Math.floor(Math.random() * 10) + 88;

      const courses =
        category.courses.map(
          (course, index) => ({
            ...course,

            category:
              category.category,

            matchPercentage:
              Math.max(
                70,
                confidenceScore -
                  index * 3
              ),

            reasons: [
              careerGoal !==
              "Undecided"
                ? `${careerGoal} Career Goal`
                : `${interestArea} Interest`,

              favoriteSubject,

              workStyle,
            ].filter(Boolean),
          })
        );

      setAnalysis({
        category:
          category.category,

        confidence:
          confidenceScore,

        summary:
          `Based on your academic profile, interests, and career preferences, ${category.category} appears to be the strongest pathway for your future studies.`,
      });

      setResults(courses);

      setLoading(false);

      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    }, 2500);
  };

  return (
    <>
      <MatchHero />

      <MatchForm
        onSubmit={handleGenerateResults}
      />

      {loading && <MatchLoading />}

      <div ref={resultRef}>
        {!loading && (
          <MatchResult
            results={results}
            analysis={analysis}
          />
        )}
      </div>

      <MatchCTA />
    </>
  );
}

export default AICourseMatch;