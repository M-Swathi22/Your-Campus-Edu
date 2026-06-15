import React from "react";
import {
  Brain,
  Zap,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description:
      "Receive personalized course, college, and country suggestions based on your academic profile, interests, and career goals.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get insights in seconds instead of spending hours researching universities, fees, and eligibility requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Guidance",
    description:
      "Make informed decisions with structured data, eligibility checks, and intelligent comparisons.",
  },
  {
    icon: BarChart3,
    title: "Smart Decision Making",
    description:
      "Compare colleges, estimate budgets, and explore study opportunities through interactive tools.",
  },
];

function AIToolsOverview () {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#6d53a3]">
            AI Student Success Platform
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Smarter Guidance for
            <span className="text-[#6d53a3]"> Modern Students</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Our AI-powered tools help students discover the right course,
            evaluate eligibility, compare universities, estimate budgets,
            and find the best study destination with confidence.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#6d53a3]/20 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3eeff] text-[#6d53a3] transition group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#24144f] via-[#3d2b73] to-[#6d53a3] p-10 text-white">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="mt-2 text-purple-200">
                Students Guided
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className="mt-2 text-purple-200">
                Partner Colleges
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="mt-2 text-purple-200">
                Study Destinations
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="mt-2 text-purple-200">
                Recommendation Accuracy
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIToolsOverview;