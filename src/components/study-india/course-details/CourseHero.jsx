// src/components/study-india/course-details/CourseHero.jsx
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

// Swap this for your actual hero image. Keep it in /src/assets (or wherever
// your other images live) and import it like this — Vite/CRA will bundle it
// and give you back the correct built URL automatically.
import courseHeroBg from "../../../assets/images/course-hero-bg.png";

export default function CourseHero({ course, category, categoryId }) {
  const reduceMotion = useReducedMotion();

  const categoryLabel = category?.category || "Courses";

  // CategoryPage lives at /study-india/courses/:categoryId — so the
  // breadcrumb needs the actual id, not a static "/courses" path.
  const resolvedCategoryId = categoryId || category?.id || category?.slug;
 const categoryHref = resolvedCategoryId
  ? `/study-india/${resolvedCategoryId}`
  : "/study-india";

  return (
    <section className="relative w-full overflow-hidden">
      <style>{`
        .course-hero__bg {
          background-image: url(${courseHeroBg});
          background-size: cover;
          background-position: center;
        }
        .course-hero__overlay {
          background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--primary-dark) 82%, transparent) 0%,
            color-mix(in srgb, var(--primary) 72%, transparent) 100%
          );
        }
        .course-hero__crumb-link {
          color: var(--accent-green);
          transition: var(--transition);
          white-space: nowrap;
        }
        .course-hero__crumb-link:hover {
          color: var(--text-white);
        }
        .course-hero__crumb-sep {
          color: color-mix(in srgb, var(--white) 45%, transparent);
        }
        .course-hero__crumb-current {
          color: var(--text-white);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 55vw;
        }
        @media (min-width: 640px) {
          .course-hero__crumb-current {
            max-width: none;
          }
        }
      `}</style>

      {/* background image + brand-tint overlay */}
      <div className="course-hero__bg absolute inset-0" aria-hidden="true" />
      <div className="course-hero__overlay absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-20 md:py-28">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold leading-tight"
          style={{
            color: "var(--text-white)",
            fontFamily: "var(--font-main)",
            fontSize: "clamp(1.85rem, 7vw, 3.75rem)",
          }}
        >
          {course?.name || categoryLabel}
        </motion.h1>

        <motion.nav
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          aria-label="Breadcrumb"
          className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2 sm:mt-4"
          style={{ fontFamily: "var(--font-main)", fontSize: "clamp(0.78rem, 2.6vw, 0.95rem)" }}
        >
          <Link to="/study-india" className="course-hero__crumb-link">
            Study India
          </Link>
          <span className="course-hero__crumb-sep">/</span>
          <Link to={categoryHref} className="course-hero__crumb-link">
            {categoryLabel}
          </Link>
          {course?.name && (
            <>
              <span className="course-hero__crumb-sep">/</span>
              <span className="course-hero__crumb-current">{course.name}</span>
            </>
          )}
        </motion.nav>
      </div>
    </section>
  );
}