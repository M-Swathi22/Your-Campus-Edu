import { Clock, ArrowRight, BookOpen, Sparkles, LayoutGrid } from "lucide-react";

/**
 * CourseResults
 * Props:
 *  - categories: Array<{ category, image, courses: Array<{ name, duration }> }>
 *  - category: string
 *  - search: string
 *  - setCategory: (cat: string) => void
 */
export default function CourseResults({ categories, category, search, setCategory }) {
  const showCategoryCards = category === "All" && search.trim() === "";

  /* ── Category Grid View ── */
  if (showCategoryCards) {
    return (
      <section className="cr-section">
        <div className="cr-blob cr-blob-1" />
        <div className="cr-blob cr-blob-2" />

        <div className="cr-container">

          {/* Header */}
          <div className="cr-header">
            <div className="cr-header-left">
              <div className="cr-eyebrow">
                <LayoutGrid size={12} />
                <span>Browse Categories</span>
              </div>
              <h2 className="cr-heading">
                Explore by{" "}
                <span className="cr-heading-accent">Category</span>
              </h2>
            </div>
            <div className="cr-header-right">
              <div className="cr-count-block">
                <span className="cr-count-num">{categories.length}</span>
                <span className="cr-count-label">
                  {categories.length === 1 ? "Category" : "Categories"}
                </span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="cr-grid">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="cr-card"
                onClick={() => setCategory(cat.category)}
              >
                <div className="cr-card-corner" />

                {/* Image */}
                <div className="cr-img-wrap">
                  <img src={cat.image} alt={cat.category} className="cr-img" />
                  <div className="cr-img-overlay" />

                  {/* Course count pill */}
                  <div className="cr-dur-pill">
                    <BookOpen size={11} />
                    <span>{cat.courses.length} {cat.courses.length === 1 ? "Course" : "Courses"}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="cr-body">
                  <div className="cr-bar" />
                  <h3 className="cr-name">{cat.category}</h3>
                  <div className="cr-cta-row">
                    <button className="cr-cta">
                      <span>View Courses</span>
                      <span className="cr-cta-icon">
                        <ArrowRight size={14} />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="cr-bottom-line" />
              </div>
            ))}
          </div>

        </div>
        <style>{crStyles}</style>
      </section>
    );
  }

  /* ── Course List View ── */
  const allCourses = categories.flatMap((cat) =>
    cat.courses.map((course) => ({
      name: course.name,
      duration: course.duration,
      image: cat.image,
      category: cat.category,
    }))
  );

  const headingAccent =
    category ||
    (categories.length === 1 ? categories[0].category : null) ||
    "Courses";

  /* Empty state */
  if (allCourses.length === 0) {
    return (
      <section className="cr-section">
        <div className="cr-container">
          <div className="cr-empty">
            <div className="cr-empty-icon-wrap">
              <BookOpen size={28} />
            </div>
            <h2 className="cr-empty-title">No Courses Found</h2>
            <p className="cr-empty-sub">
              Try another keyword or category to discover your path.
            </p>
          </div>
        </div>
        <style>{crStyles}</style>
      </section>
    );
  }

  return (
    <section className="cr-section">
      <div className="cr-blob cr-blob-1" />
      <div className="cr-blob cr-blob-2" />

      <div className="cr-container">

        {/* Back button */}
        {category !== "All" && (
          <button className="cr-back-btn" onClick={() => setCategory("All")}>
            ← Back to Categories
          </button>
        )}

        {/* Header */}
        <div className="cr-header">
          <div className="cr-header-left">
            <div className="cr-eyebrow">
              <Sparkles size={12} />
              <span>Explore Programs</span>
            </div>
            <h2 className="cr-heading">
              Find Your Perfect{" "}
              <span className="cr-heading-accent">{headingAccent}</span>
            </h2>
          </div>
          <div className="cr-header-right">
            <div className="cr-count-block">
              <span className="cr-count-num">{allCourses.length}</span>
              <span className="cr-count-label">
                {allCourses.length === 1 ? "Program" : "Programs"} Available
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="cr-grid">
          {allCourses.map((course, index) => (
            <div key={index} className="cr-card">
              <div className="cr-card-corner" />

              {/* Image */}
              <div className="cr-img-wrap">
                <img src={course.image} alt={course.name} className="cr-img" />
                <div className="cr-img-overlay" />

                <div className="cr-dur-pill">
                  <Clock size={11} />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* Body */}
              <div className="cr-body">
                <div className="cr-bar" />
                <h3 className="cr-name">{course.name}</h3>
                <div className="cr-cta-row">
                  <button className="cr-cta">
                    <span>Explore Course</span>
                    <span className="cr-cta-icon">
                      <ArrowRight size={14} />
                    </span>
                  </button>
                </div>
              </div>

              <div className="cr-bottom-line" />
            </div>
          ))}
        </div>

      </div>
      <style>{crStyles}</style>
    </section>
  );
}

const crStyles = `

/* ════════════════════════════════
   SECTION
════════════════════════════════ */

.cr-section {
  padding: 110px 0 120px;
  background: var(--bg-light);
  font-family: var(--font-main);
  position: relative;
  overflow: hidden;
}

.cr-blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.cr-blob-1 {
  width: 560px;
  height: 560px;
  top: -220px;
  right: -140px;
  background: radial-gradient(circle, rgba(109,83,163,0.08) 0%, transparent 65%);
}

.cr-blob-2 {
  width: 400px;
  height: 400px;
  bottom: -160px;
  left: -100px;
  background: radial-gradient(circle, rgba(49,185,120,0.07) 0%, transparent 65%);
}

.cr-container {
  max-width: 1280px;
  margin: auto;
  padding: 0 28px;
  position: relative;
  z-index: 1;
}

/* ════════════════════════════════
   BACK BUTTON
════════════════════════════════ */

.cr-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  padding: 9px 20px;
  border-radius: var(--radius-md);
  border: 1.5px solid rgba(109,83,163,0.22);
  background: var(--primary-light);
  color: var(--primary);
  font-family: var(--font-main);
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.cr-back-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  box-shadow: 0 6px 20px rgba(109,83,163,0.28);
}

/* ════════════════════════════════
   HEADER
════════════════════════════════ */

.cr-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 60px;
  gap: 24px;
}

.cr-header-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cr-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.cr-heading {
  font-size: clamp(2rem, 3.2vw, 2.8rem);
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin: 0;
}

.cr-heading-accent {
  position: relative;
  color: var(--primary);
  white-space: nowrap;
}

.cr-heading-accent::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: var(--gradient-primary);
  opacity: 0.45;
}

.cr-header-right {
  flex-shrink: 0;
  padding-bottom: 6px;
}

.cr-count-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
}

.cr-count-num {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  color: var(--primary);
  letter-spacing: -0.04em;
}

.cr-count-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-light);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* ════════════════════════════════
   GRID
════════════════════════════════ */

.cr-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* ════════════════════════════════
   CARD  (shared by both views)
════════════════════════════════ */

.cr-card {
  position: relative;
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1.5px solid rgba(109,83,163,0.18);
  box-shadow:
    0 2px 0px rgba(109,83,163,0.08),
    0 4px 16px rgba(36,20,79,0.07);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.4s ease,
    border-color 0.3s ease;
  cursor: pointer;
}

.cr-card-corner {
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: 56px;
  background: var(--gradient-primary);
  opacity: 0.06;
  border-radius: 0 0 var(--radius-lg) 0;
  transition: opacity 0.35s ease, width 0.35s ease, height 0.35s ease;
  z-index: 2;
  pointer-events: none;
}

.cr-card:hover {
  transform: translateY(-14px) scale(1.012);
  border-color: rgba(109,83,163,0.45);
  box-shadow:
    0 0 0 3px rgba(109,83,163,0.08),
    0 24px 50px rgba(36,20,79,0.18);
}

.cr-card:hover .cr-card-corner {
  opacity: 0.14;
  width: 80px;
  height: 80px;
}

.cr-bottom-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 3px;
  background: var(--gradient-primary);
  transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 6;
}

.cr-card:hover .cr-bottom-line {
  width: 100%;
}

/* ════════════════════════════════
   IMAGE
════════════════════════════════ */

.cr-img-wrap {
  position: relative;
  height: 204px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
}

.cr-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cr-card:hover .cr-img {
  transform: scale(1.1);
}

.cr-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    170deg,
    rgba(36,20,79,0.04) 0%,
    rgba(36,20,79,0.52) 100%
  );
  transition: opacity 0.4s ease;
}

.cr-card:hover .cr-img-overlay {
  opacity: 0.88;
}

.cr-dur-pill {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(24,10,60,0.72);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.14);
  letter-spacing: 0.03em;
  font-family: var(--font-main);
}

/* ════════════════════════════════
   CARD BODY
════════════════════════════════ */

.cr-body {
  padding: 20px 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  position: relative;
  z-index: 1;
}

.cr-bar {
  height: 3px;
  width: 32px;
  border-radius: 999px;
  background: var(--gradient-primary);
  transition: width 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  flex-shrink: 0;
}

.cr-card:hover .cr-bar {
  width: 100%;
}

.cr-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.55;
  margin: 0;
  letter-spacing: -0.01em;
  flex: 1;
  transition: color 0.25s ease;
}

.cr-card:hover .cr-name {
  color: var(--primary-dark);
}

.cr-cta-row {
  margin-top: auto;
}

.cr-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px 10px 16px;
  border-radius: var(--radius-md);
  border: 1.5px solid rgba(109,83,163,0.22);
  background: var(--primary-light);
  cursor: pointer;
  font-family: var(--font-main);
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 0.01em;
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
}

.cr-card:hover .cr-cta {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  box-shadow: 0 6px 22px rgba(109,83,163,0.32);
}

.cr-cta-icon {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  background: rgba(109,83,163,0.12);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.35s ease;

  /* Normal state = → */
  transform: rotate(0deg);
}

.cr-card:hover .cr-cta-icon {
  background: rgba(255,255,255,0.2);
  color: #fff;

  /* Hover state = ↑ */
  transform: rotate(-60deg) scale(1.08);
}

/* ════════════════════════════════
   EMPTY STATE
════════════════════════════════ */

.cr-empty {
  text-align: center;
  background: var(--white);
  padding: 100px 20px;
  border-radius: var(--radius-xl);
  border: 1.5px solid rgba(109,83,163,0.15);
  box-shadow: var(--shadow-sm);
}

.cr-empty-icon-wrap {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: 1.5px solid rgba(109,83,163,0.15);
}

.cr-empty-title {
  margin-top: 22px;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-dark);
  letter-spacing: -0.02em;
}

.cr-empty-sub {
  margin-top: 10px;
  color: var(--text-light);
  font-size: 0.94rem;
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

/* ════════════════════════════════
   RESPONSIVE
════════════════════════════════ */

@media (max-width: 1200px) {
  .cr-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 992px) {
  .cr-grid { grid-template-columns: repeat(2, 1fr); }
  .cr-header { flex-direction: column; align-items: flex-start; }
  .cr-header-right { display: none; }
}

@media (max-width: 576px) {
  .cr-section { padding: 72px 0 80px; }
  .cr-grid { grid-template-columns: 1fr; gap: 18px; }
  .cr-heading { font-size: 1.8rem; }
  .cr-blob { display: none; }
}
`;