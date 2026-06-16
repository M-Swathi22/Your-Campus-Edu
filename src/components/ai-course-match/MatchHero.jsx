import { Sparkles, ArrowRight, GraduationCap } from "lucide-react";

export default function MatchHero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--bg-light)] py-24 lg:py-32"
      style={{ fontFamily: "var(--font-main)" }}
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--primary-light)] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--secondary)] rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--white)] border border-[var(--border)] shadow-sm mb-6">
              <Sparkles
                size={16}
                className="text-[var(--primary)]"
              />
              <span className="text-sm font-semibold text-[var(--text-dark)]">
                AI-Powered Career Guidance
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[var(--text-dark)]">
              Find the Right Course
              <br />
              for Your Future with{" "}
              <span className="text-[var(--primary)]">
                AI Course Match
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-medium)] max-w-2xl">
              Discover courses that align with your interests,
              academic strengths, career goals, and study destination
              preferences. Get personalized recommendations in
              just a few minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#course-match-form"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[var(--primary)] text-white font-semibold transition-all duration-300 hover:translate-y-[-2px]"
              >
                Start Matching
                <ArrowRight size={18} />
              </a>

              <a
                href="/courses"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-[var(--border)] bg-white text-[var(--text-dark)] font-semibold transition-all duration-300 hover:border-[var(--primary)]"
              >
                Explore Courses
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl">
              <div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">
                  100+
                </h3>
                <p className="text-sm text-[var(--text-medium)]">
                  Course Options
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">
                  25+
                </h3>
                <p className="text-sm text-[var(--text-medium)]">
                  Study Destinations
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">
                  AI
                </h3>
                <p className="text-sm text-[var(--text-medium)]">
                  Smart Matching
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[var(--border)]">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] flex items-center justify-center">
                  <GraduationCap
                    className="text-[var(--primary)]"
                    size={24}
                  />
                </div>

                <div>
                  <h3 className="font-bold text-[var(--text-dark)]">
                    AI Match Result
                  </h3>
                  <p className="text-sm text-[var(--text-medium)]">
                    Personalized Recommendations
                  </p>
                </div>
              </div>

              {/* Mock Results */}
              <div className="space-y-4">
                
                <div className="p-4 rounded-2xl border border-[var(--border)]">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-[var(--text-dark)]">
                      Computer Science & AI
                    </h4>

                    <span className="text-[var(--primary)] font-bold">
                      95%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)] rounded-full"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-[var(--border)]">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-[var(--text-dark)]">
                      Data Science
                    </h4>

                    <span className="text-[var(--primary)] font-bold">
                      92%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)] rounded-full"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-[var(--border)]">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-[var(--text-dark)]">
                      Cyber Security
                    </h4>

                    <span className="text-[var(--primary)] font-bold">
                      89%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)] rounded-full"
                      style={{ width: "89%" }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}