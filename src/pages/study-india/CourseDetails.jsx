// src/pages/study-india/CourseDetails.jsx
import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import { courseCategories, getCategoryMeta } from "../../data/indianCourses";
import { getCategoryData } from "../../data/categoryData";
import { indianStates } from "../../data/indianStates";

import CourseHero from "../../components/study-india/course-details/CourseHero";
/*import AboutCourse from "../../components/study-india/course-details/AboutCourse";*/
import StateSelector from "../../components/study-india/course-details/StateSelector";
import CourseCTA from "../../components/study-india/course-details/CourseCTA";

const slugify = (str = "") =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function CourseDetails() {
  const { categoryId, courseSlug } = useParams();

  const category = useMemo(() => getCategoryMeta(categoryId), [categoryId]);
  const categoryDetail = useMemo(() => getCategoryData(categoryId), [categoryId]);

  const course = useMemo(() => {
    if (!categoryDetail?.courses) return null;
    return categoryDetail.courses.find((c) => slugify(c.name) === courseSlug) || null;
  }, [categoryDetail, courseSlug]);

  if (!category || !categoryDetail || !course) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-32 text-center">
        <h1
          className="font-semibold"
          style={{ color: "var(--text-dark)", fontFamily: "var(--font-main)", fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}
        >
          This route doesn't exist
        </h1>
        <p
          className="mt-2"
          style={{ color: "var(--text-medium)", fontFamily: "var(--font-main)", fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
        >
          The course you're looking for may have moved or the link is incorrect.
        </p>
        <Link
          to="/study-india/courses"
          className="mt-6 inline-flex items-center gap-1 rounded-full px-5 py-2.5"
          style={{ background: "var(--primary)", color: "var(--white)", fontFamily: "var(--font-main)", fontSize: "0.9rem" }}
        >
          <ChevronLeft size={16} /> Back to Courses
        </Link>
      </div>
    );
  }

  const accent = category.accent ? `var(${category.accent})` : "var(--primary)";

  return (
    <main style={{ background: "var(--bg-main)" }}>
      <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-8">
        <Link
           to={`/study-india/${categoryId}`}
          className="inline-flex items-center gap-1 relative z-10"
          style={{ color: "var(--text-white, var(--text-light))", fontFamily: "var(--font-main)", fontSize: "0.85rem" }}
        >
          <ChevronLeft size={15} /> Back to {category.category}
        </Link>
      </div>

      <CourseHero course={course} category={category}  categoryId={categoryId} />

      {/*<AboutCourse about={categoryDetail.about} stats={categoryDetail.stats} accent={accent} />*/}

     <StateSelector states={indianStates} categoryId={categoryId} courseSlug={courseSlug}/>

      <CourseCTA courseName={course.name} accent={accent} />
    </main>
  );
}