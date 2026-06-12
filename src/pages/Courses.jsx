import { useState } from "react";

import CoursesHero from "../components/courses/CoursesHero";
import CourseFinder from "../components/courses/CourseFinder";
import CourseResults from "../components/courses/CourseResults";
import CoursesCTA from "../components/courses/CourseCTA";

import { courseCategories } from "../data/courses";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCategories = courseCategories
    .map((item) => ({
      ...item,
      courses: item.courses.filter((course) => {
        const categoryMatch =
          category === "All" ||
          item.category === category;

        const searchMatch =
          search.trim() === ""
            ? true
            : course.name.toLowerCase()  // ← only change: course → course.name
                .includes(search.toLowerCase());

        return categoryMatch && searchMatch;
      }),
    }))
    .filter((item) => item.courses.length > 0);

  return (
    <>
      <CoursesHero />

      <CourseFinder
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

   <CourseResults
     categories={filteredCategories}
     category={category}
     search={search}
     setCategory={setCategory}
   />

      <CoursesCTA />
    </>
  );
}