import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const cards = [
  {
    number: "01",
    icon: Eye,
    label: "Our Vision",
    title: "Empowering Every Student To Dream Bigger",
    description:
      "To become the most trusted education and career guidance platform that helps students discover opportunities, unlock their potential, and build successful futures through informed academic decisions.",
  },
  {
    number: "02",
    icon: Target,
    label: "Our Mission",
    title: "Guiding Students Towards The Right Path",
    description:
      "To provide personalized counseling, expert mentorship, and technology-driven guidance that enables students to confidently choose courses, colleges, and career pathways aligned with their goals and aspirations.",
  },
];

export default function MissionVision() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "var(--bg-main)",
        fontFamily: "var(--font-main)",
      }}
    >
      {/* Background Decoration */}

      <div
        className="absolute -left-32 top-0 h-96 w-96 rounded-full blur-[120px]"
        style={{
          background: "rgba(109,83,163,0.08)",
        }}
      />

      <div
        className="absolute -right-32 bottom-0 h-96 w-96 rounded-full blur-[120px]"
        style={{
          background: "rgba(49,185,120,0.06)",
        }}
      />

      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span
            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold"
            style={{
              background: "var(--primary-light)",
              color: "var(--primary)",
            }}
          >
            OUR PURPOSE
          </span>

          <h2
            className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl"
            style={{
              color: "var(--text-dark)",
            }}
          >
            Vision &
            <span
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}
              Mission
            </span>
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8"
            style={{
              color: "var(--text-medium)",
            }}
          >
            The principles that guide our commitment to helping
            students make confident educational and career
            decisions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[32px] border p-10 lg:p-12"
                style={{
                  background: "var(--white)",
                  borderColor: "rgba(109,83,163,0.12)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                {/* Card Top Gradient */}

                <div
                  className="absolute left-0 top-0 h-2 w-full"
                  style={{
                    background: "var(--gradient-primary)",
                  }}
                />

                {/* Number */}

                <div
                  className="absolute right-8 top-8 text-7xl font-black"
                  style={{
                    color: "rgba(109,83,163,0.06)",
                  }}
                >
                  {card.number}
                </div>

                {/* Icon */}

                <div
                  className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl"
                  style={{
                    background: "var(--primary-light)",
                  }}
                >
                  <Icon
                    size={38}
                    style={{
                      color: "var(--primary)",
                    }}
                  />
                </div>

                {/* Label */}

                <span
                  className="text-sm font-bold uppercase tracking-[0.25em]"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  {card.label}
                </span>

                {/* Title */}

                <h3
                  className="mt-4 text-3xl font-bold leading-tight"
                  style={{
                    color: "var(--text-dark)",
                  }}
                >
                  {card.title}
                </h3>

                {/* Divider */}

                <div
                  className="mt-6 h-1 w-16 rounded-full"
                  style={{
                    background: "var(--gradient-primary)",
                  }}
                />

                {/* Description */}

                <p
                  className="mt-6 text-lg leading-8"
                  style={{
                    color: "var(--text-medium)",
                  }}
                >
                  {card.description}
                </p>

                {/* Hover Accent */}

                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    background: "var(--gradient-primary)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}