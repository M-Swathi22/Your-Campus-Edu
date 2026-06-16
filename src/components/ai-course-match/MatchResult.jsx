import { GraduationCap, Clock, ArrowRight } from "lucide-react";

export default function MatchResult({ results = [] }) {
  if (!results || results.length === 0) return null;

  return (
    <section
      className="py-24 bg-[var(--bg-light)]"
      style={{ fontFamily: "var(--font-main)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-sm font-semibold mb-5">
            AI Course Match Result
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Courses Recommended For You
          </h2>

          <p className="text-lg text-[var(--text-medium)]">
            Based on your selections, these courses could be a strong fit for your academic journey.
          </p>
        </div>

        {/* Results Count */}
        <div className="mb-10">
          <div className="inline-flex items-center px-5 py-3 rounded-2xl bg-white border border-[var(--border)] shadow-sm">
            <span className="font-semibold text-[var(--text-dark)]">
              {results.length} Courses Found
            </span>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {results.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--border)] rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center mb-6">
                <GraduationCap
                  size={30}
                  className="text-[var(--primary)]"
                />
              </div>

              {/* Category */}
              <span className="inline-flex px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold mb-4">
                {course.category}
              </span>

              {/* Course Name */}
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-4">
                {course.name}
              </h3>

              {/* Duration */}
              <div className="flex items-center gap-2 text-[var(--text-medium)] mb-6">
                <Clock size={18} />
                <span>{course.duration}</span>
              </div>

              {/* CTA */}
              <button
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:opacity-90 transition"
              >
                View Details
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}