import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import AITools from "./pages/AITools";
import AICourseMatch from "./pages/AICourseMatch";
import EligibilityChecker from "./pages/EligibilityChecker";
import BudgetCalculator from "./pages/BudgetCalculator";
import CompareColleges from "./pages/CompareColleges";
import CountryFitQuiz from "./pages/CountryFitQuiz";


function App() {
  const location = useLocation();

  // ✅ FIX: scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/ai-tools" element={<AITools />} />
        <Route path="/ai-course-match" element={<AICourseMatch />}/>
        <Route path="/eligibility-checker" element={<EligibilityChecker />}/>
        <Route path="/budget-calculator" element={<BudgetCalculator />} />
        <Route path="/compare-colleges" element={<CompareColleges />} />
        <Route path="/country-fit-quiz" element={<CountryFitQuiz />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
