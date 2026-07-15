import React from "react";
import { useParams, Link } from "react-router-dom";
import { getCategoryMeta } from "../../data/indiancourses";
import { getCategoryData } from "../../data/categoryData";

import CategoryHero from "../../components/study-india/category-page/CategoryHero";
import AboutCategory from "../../components/study-india/category-page/AboutCategory";
import CourseExplorer from "../../components/study-india/category-page/CourseExplorer";
import CareerOpportunities from "../../components/study-india/category-page/CareerOpportunities";
/*import WhyChooseCategory from "../../components/study-india/category-page/WhyChooseCategory";*/
import CategoryCTA from "../../components/study-india/category-page/CategoryCTA";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = getCategoryMeta(categoryId);
  const data = getCategoryData(categoryId);

  if (!category || !data) {
    return (
      <main
        className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-[var(--bg-main)] px-6 text-center"
        style={{ fontFamily: "var(--font-main)" }}
      >
        <h1 className="text-3xl font-semibold text-[var(--text-dark)]">Category not found</h1>
        <p className="max-w-md text-[15px] text-[var(--text-medium)]">
          We couldn't find the course category you're looking for. It may have been renamed or moved.
        </p>
        <Link
          to="/study-india"
          className="mt-2 rounded-[var(--radius-md)] px-6 py-3 text-sm font-medium text-[var(--white)]"
          style={{ background: "var(--gradient-primary)" }}
        >
          Back to Study India
        </Link>
      </main>
    );
  }

  return (
    <main>
      <CategoryHero category={category} data={data} />
      <AboutCategory category={category} data={data} />
      <CourseExplorer category={category} data={data} />
      <CareerOpportunities category={category} data={data} />
      {/*<WhyChooseCategory category={category} data={data} />*/}
      <CategoryCTA category={category} />
    </main>
  );
}