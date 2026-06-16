import { courseCategories } from "../data/courses";

export function rankAllCategories(formData) {
  const { stream, careerGoal, favoriteSubject } = formData;

  let recommendations = [];

  courseCategories.forEach((category) => {
    category.courses.forEach((course) => {
      let score = 60;

      // Biology students
      if (
        stream?.toLowerCase().includes("biology") &&
        ["Medical", "Paramedical & Nursing", "Allied Health Science"].includes(
          category.category
        )
      ) {
        score += 25;
      }

      // Computer students
      if (
        stream?.toLowerCase().includes("computer") &&
        (course.name.includes("Computer") ||
          course.name.includes("BCA") ||
          course.name.includes("IT"))
      ) {
        score += 25;
      }

      // Commerce students
      if (
        stream?.toLowerCase().includes("commerce") &&
        ["Management", "Arts & Science Advanced"].includes(category.category)
      ) {
        score += 25;
      }

      // Favorite subject boost
      if (
        favoriteSubject &&
        course.name
          .toLowerCase()
          .includes(favoriteSubject.toLowerCase())
      ) {
        score += 10;
      }

      recommendations.push({
        name: course.name,
        category: category.category,
        duration: course.duration,
        fit_score: Math.min(score, 99),
        reason: `Recommended based on your ${stream} background and career interests.`,
        career_outcome: careerGoal || "Career Growth",
      });
    });
  });

  recommendations.sort((a, b) => b.fit_score - a.fit_score);

  return {
    primary_category: recommendations[0].category,
    confidence: recommendations[0].fit_score,
    summary: `Based on your ${stream} background and career goal, these are the best course matches.`,
    recommendations: recommendations.slice(0, 6),
  };
}