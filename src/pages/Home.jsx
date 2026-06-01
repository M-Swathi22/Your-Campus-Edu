import Hero from "../components/home/Hero";
import StatsSection from "../components/home/StatsSection";
import HowItWorks from "../components/home/HowItWorks";
import CountriesSection from "../components/home/CountriesSection";
import CoursesSection from "../components/home/CoursesSection";
import Testimonials from "../components/home/Testimonials";
import FAQSection from "../components/home/FAQSection";
import Contact from "../components/home/Contact";


function Home() {
  return (
    <>
      <Hero /> 
      <StatsSection />
      <HowItWorks />
      <CountriesSection />
      <CoursesSection />
      <Testimonials />
      <FAQSection />
      <Contact />
    </>
  );
}

export default Home;