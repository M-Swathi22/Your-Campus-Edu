export default function CourseGuide() {
  const guides = [
    {
      title: "Medical",
      desc: "Ideal for healthcare and patient care careers.",
    },
    {
      title: "Engineering",
      desc: "Best for innovation and technology fields.",
    },
    {
      title: "Management",
      desc: "Focused on business and leadership skills.",
    },
  ];

  return (
    <section
      className="py-24"
      style={{
        background: "var(--bg-light)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Not Sure Which Course
            Is Right For You?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {guides.map((guide) => (
            <div
              key={guide.title}
              className="bg-white p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-4">
                {guide.title}
              </h3>

              <p>{guide.desc}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}