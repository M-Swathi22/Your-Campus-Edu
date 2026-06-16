import { useState } from "react";
import { User, BookOpen, Target, Globe, Sparkles } from "lucide-react";

export default function MatchForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    academicLevel: "",
    stream: "",
    subject: "",
    interest: "",
    careerGoal: "",
    destination: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "Required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  const inputClass = (field) =>
    `w-full h-14 px-4 rounded-xl bg-white outline-none transition-all
     ${
       errors[field]
         ? "border-2 border-red-500"
         : "border border-[var(--border)] focus:border-[var(--primary)]"
     }`;

  return (
    <section
      id="course-match-form"
      className="py-24 bg-white"
      style={{ fontFamily: "var(--font-main)" }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-sm font-semibold mb-5">
            <Sparkles size={16} />
            AI Matching Form
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Tell Us About Yourself
          </h2>

          <p className="text-lg text-[var(--text-medium)]">
            Complete all fields to receive personalized course recommendations.
          </p>
        </div>

        <div className="bg-[var(--bg-light)] border border-[var(--border)] rounded-3xl p-8 lg:p-12 shadow-sm">

          <form
            className="grid md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >

            {/* Academic Level */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[var(--text-dark)] mb-2">
                <User size={16} />
                Academic Level
              </label>

              <select
                value={formData.academicLevel}
                onChange={(e) =>
                  handleChange("academicLevel", e.target.value)
                }
                className={inputClass("academicLevel")}
              >
                <option value="">Select Academic Level</option>
                <option>High School</option>
                <option>Diploma</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
              </select>

              {errors.academicLevel && (
                <p className="text-red-500 text-sm mt-1">
                  Academic Level is required
                </p>
              )}
            </div>

            {/* Stream */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[var(--text-dark)] mb-2">
                <BookOpen size={16} />
                Study Stream
              </label>

              <select
                value={formData.stream}
                onChange={(e) =>
                  handleChange("stream", e.target.value)
                }
                className={inputClass("stream")}
              >
                <option value="">Select Stream</option>
                <option>Science</option>
                <option>Commerce</option>
                <option>Arts</option>
                <option>Engineering</option>
                <option>Medical</option>
              </select>

              {errors.stream && (
                <p className="text-red-500 text-sm mt-1">
                  Stream is required
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm font-semibold text-[var(--text-dark)] mb-2 block">
                Favorite Subject
              </label>

              <select
                value={formData.subject}
                onChange={(e) =>
                  handleChange("subject", e.target.value)
                }
                className={inputClass("subject")}
              >
                <option value="">Select Subject</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>Computer Science</option>
                <option>Business Studies</option>
                <option>Psychology</option>
              </select>

              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  Subject is required
                </p>
              )}
            </div>

            {/* Interest */}
            <div>
              <label className="text-sm font-semibold text-[var(--text-dark)] mb-2 block">
                Interest Area
              </label>

              <select
                value={formData.interest}
                onChange={(e) =>
                  handleChange("interest", e.target.value)
                }
                className={inputClass("interest")}
              >
                <option value="">Select Interest</option>
                <option>Technology</option>
                <option>Healthcare</option>
                <option>Business</option>
                <option>Finance</option>
                <option>Design</option>
                <option>Law</option>
                <option>Research</option>
              </select>

              {errors.interest && (
                <p className="text-red-500 text-sm mt-1">
                  Interest Area is required
                </p>
              )}
            </div>

            {/* Career Goal */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[var(--text-dark)] mb-2">
                <Target size={16} />
                Career Goal
              </label>

              <select
                value={formData.careerGoal}
                onChange={(e) =>
                  handleChange("careerGoal", e.target.value)
                }
                className={inputClass("careerGoal")}
              >
                <option value="">Select Career Goal</option>
                <option>Engineer</option>
                <option>Doctor</option>
                <option>Data Scientist</option>
                <option>Entrepreneur</option>
                <option>Lawyer</option>
                <option>Researcher</option>
                <option>Manager</option>
                <option>Undecided</option>
              </select>

              {errors.careerGoal && (
                <p className="text-red-500 text-sm mt-1">
                  Career Goal is required
                </p>
              )}
            </div>

            {/* Destination */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-[var(--text-dark)] mb-2">
                <Globe size={16} />
                Preferred Destination
              </label>

              <select
                value={formData.destination}
                onChange={(e) =>
                  handleChange("destination", e.target.value)
                }
                className={inputClass("destination")}
              >
                <option value="">Select Destination</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>Ireland</option>
                <option>Open to Suggestions</option>
              </select>

              {errors.destination && (
                <p className="text-red-500 text-sm mt-1">
                  Destination is required
                </p>
              )}
            </div>

            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-[var(--primary)] text-white font-semibold"
              >
                Generate AI Recommendations
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}