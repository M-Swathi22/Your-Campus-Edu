export default function MatchLoading() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-xl mx-auto">
        <div className="w-16 h-16 border-4 border-[var(--primary-light)] border-t-[var(--primary)] rounded-full animate-spin mx-auto mb-6" />

        <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
          Analyzing Your Profile
        </h3>

        <p className="text-[var(--text-medium)]">
          Evaluating interests, career goals, academic background,
          and finding the best matching courses...
        </p>
      </div>
    </section>
  );
}