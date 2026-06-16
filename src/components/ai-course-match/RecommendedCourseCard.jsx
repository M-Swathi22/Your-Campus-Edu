import { GraduationCap, Clock } from "lucide-react";

export default function RecommendedCourseCard({ course }) {
  return (
    <div className="bg-white border border-[var(--border)] rounded-3xl p-6 shadow-sm">

      <div className="flex justify-between items-center mb-5">
        <GraduationCap className="text-[var(--primary)]" />

        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
          {course.matchPercentage}% Match
        </span>
      </div>

      <span className="inline-flex px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-xs font-semibold mb-3">
        {course.category}
      </span>

      <h3 className="text-xl font-bold text-[var(--text-dark)] mb-4">
        {course.name}
      </h3>

      <div className="flex items-center gap-2 text-[var(--text-medium)]">
        <Clock size={16} />
        {course.duration}
      </div>
    </div>
  );
}