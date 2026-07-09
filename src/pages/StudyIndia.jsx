import React from "react";
import StudyIndiaHero from "../components/study-india/StudyIndiaHero";
import WhyStudyIndia from "../components/study-india/WhyStudyIndia";
import PopularCourses from "../components/study-india/PopularCourses";
import TopStates from "../components/study-india/TopStates";
/*import TopColleges from "../components/study-india/TopColleges";*/
import AdmissionJourney from "../components/study-india/AdmissionJourney";
import StudyIndiaCTA from "../components/study-india/StudyIndiaCTA";
import StudyIndiafaq from "../components/study-india/StudyIndiafaq";

export default function StudyIndia() {
  return (
    <main>
      <StudyIndiaHero />
      <WhyStudyIndia />
      <PopularCourses />
      <TopStates />
      {/*<TopColleges />*/}
      <AdmissionJourney />
      <StudyIndiafaq/>
      <StudyIndiaCTA />
    </main>
  );
}