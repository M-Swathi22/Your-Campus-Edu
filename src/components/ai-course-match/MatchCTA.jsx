import { ArrowRight, MessageCircle, GraduationCap } from "lucide-react";

export default function MatchCTA() {
  return (
    <section
      className="py-24 bg-white"
      style={{ fontFamily: "var(--font-main)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--primary)] p-10 md:p-14">

          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/15 flex items-center justify-center">
              <GraduationCap size={36} className="text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Need Expert Guidance After Your AI Match?
            </h2>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed mb-10">
              Our experienced counselors can help you shortlist universities,
              compare study destinations, understand admission requirements,
              explore scholarships, and build a complete study plan.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[var(--primary)] font-semibold transition-all duration-300 hover:translate-y-[-2px]"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </a>

              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold transition-all duration-300 hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Explore Courses
              </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-white/20">
              
              <div>
                <h3 className="text-2xl font-bold text-white">
                  100+
                </h3>
                <p className="text-white/80">
                  Course Options
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  25+
                </h3>
                <p className="text-white/80">
                  Study Destinations
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  AI
                </h3>
                <p className="text-white/80">
                  Smart Matching
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}