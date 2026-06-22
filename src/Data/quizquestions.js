/**
 * quizQuestions.js
 * Question bank for the Education Fit Quiz.
 * Each question has options mapped to a descriptive trait value.
 * The AI uses the student's answers holistically (not rigid scoring)
 * to generate a genuinely personalised destination recommendation.
 */

/* ─── Quiz Questions ─── */
export const QUIZ_QUESTIONS = [
  {
    id: "pace",
    question: "How do you like your daily life to feel?",
    subtitle: "Think about your ideal everyday rhythm.",
    options: [
      { emoji: "🏙️", label: "Fast-paced & always something happening", value: "Fast-paced, energetic city life" },
      { emoji: "📋", label: "Calm, structured, and predictable", value: "Calm and structured routine" },
      { emoji: "⚖️", label: "Balanced — busy but not chaotic", value: "Balanced pace of life" },
      { emoji: "🌿", label: "Slow, scenic, and laid-back", value: "Slow-paced, nature-oriented life" },
    ],
  },
  {
    id: "climate",
    question: "What climate do you thrive in?",
    subtitle: "Weather affects daily mood more than people expect.",
    options: [
      { emoji: "☀️", label: "Warm & sunny most of the year", value: "Warm, sunny climate" },
      { emoji: "❄️", label: "Four distinct seasons, including snow", value: "Four seasons with snow" },
      { emoji: "🌤️", label: "Mild and temperate year-round", value: "Mild, temperate climate" },
      { emoji: "🌧️", label: "I don't mind cold or rain", value: "Cold and rainy is fine" },
    ],
  },
  {
    id: "socialStyle",
    question: "How do you prefer to socialise?",
    subtitle: "This shapes how easily you'll settle in.",
    options: [
      { emoji: "🎉", label: "Large diverse friend groups, always meeting new people", value: "Large diverse social circles" },
      { emoji: "👥", label: "A small, close-knit circle of friends", value: "Small close-knit friend groups" },
      { emoji: "🔄", label: "Mix of campus events and quiet time", value: "Mix of social and solo time" },
      { emoji: "📚", label: "I prefer focusing on studies over socialising", value: "Study-focused, minimal socialising" },
    ],
  },
  {
    id: "careerPriority",
    question: "What matters most for your career after graduation?",
    subtitle: "Be honest about your top priority.",
    options: [
      { emoji: "🛂", label: "Staying in the country & building a career there", value: "Strong PR / immigration pathway" },
      { emoji: "🏆", label: "Getting the best-ranked degree, regardless of location after", value: "Prestige and academic ranking" },
      { emoji: "🇮🇳", label: "Returning to India with a strong international resume", value: "Return to India with global experience" },
      { emoji: "💰", label: "Maximum earning potential as fast as possible", value: "Highest earning potential" },
    ],
  },
  {
    id: "budgetComfort",
    question: "How would you describe your budget comfort?",
    subtitle: "This affects which countries are realistic.",
    options: [
      { emoji: "🪙", label: "Very budget-conscious — need affordable options", value: "Very budget-conscious" },
      { emoji: "🏦", label: "Moderate — willing to take a loan if needed", value: "Moderate budget with loan option" },
      { emoji: "💳", label: "Comfortable — budget is not the main constraint", value: "Comfortable, budget flexible" },
      { emoji: "🆓", label: "Looking for free or near-free tuition options", value: "Seeking free/low-cost tuition" },
    ],
  },
  {
    id: "workStyle",
    question: "How important is working part-time during studies?",
    subtitle: "Some countries allow more work hours than others.",
    options: [
      { emoji: "💼", label: "Very important — I plan to work to support myself", value: "Must work part-time to fund studies" },
      { emoji: "✨", label: "Nice to have, not essential", value: "Part-time work is a bonus" },
      { emoji: "🎓", label: "Not interested — fully funded or family-supported", value: "No need to work part-time" },
      { emoji: "📅", label: "I want strong post-study work rights", value: "Post-study work visa is the priority" },
    ],
  },
  {
    id: "fieldType",
    question: "What type of field are you most drawn to?",
    subtitle: "Different countries excel in different industries.",
    options: [
      { emoji: "💻", label: "Technology, engineering, or data science", value: "Technology and engineering" },
      { emoji: "📊", label: "Business, finance, or management", value: "Business and finance" },
      { emoji: "🩺", label: "Healthcare, medicine, or life sciences", value: "Healthcare and life sciences" },
      { emoji: "🎨", label: "Creative fields, design, or humanities", value: "Creative and humanities fields" },
    ],
  },
  {
    id: "riskComfort",
    question: "How do you feel about uncertainty and new environments?",
    subtitle: "Some destinations require more adaptability than others.",
    options: [
      { emoji: "🚀", label: "I love new challenges and figuring things out myself", value: "High adaptability, embraces challenges" },
      { emoji: "🛟", label: "I prefer some structure and support systems in place", value: "Prefers structured support systems" },
      { emoji: "🧭", label: "Somewhere in between — open but cautious", value: "Moderate adaptability" },
      { emoji: "🤝", label: "I'd like a place with a large Indian community already", value: "Wants existing Indian community support" },
    ],
  },
  {
    id: "duration",
    question: "How long are you willing to commit to studying abroad?",
    subtitle: "This affects which course and country combos make sense.",
    options: [
      { emoji: "⚡", label: "Short — 1 year intensive program", value: "1-year intensive program" },
      { emoji: "📘", label: "Standard — 2 year Master's", value: "2-year Master's program" },
      { emoji: "📗", label: "Long — 3-4 year Bachelor's", value: "3-4 year Bachelor's program" },
      { emoji: "🔬", label: "Very long — PhD / Research track", value: "PhD or long-term research track" },
    ],
  },
  {
    id: "lifestylePriority",
    question: "Which lifestyle factor matters most to you?",
    subtitle: "Pick the one you'd be least willing to compromise on.",
    options: [
      { emoji: "🛡️", label: "Safety and low crime rates", value: "Safety and security" },
      { emoji: "🌍", label: "Diversity and multiculturalism", value: "Cultural diversity" },
      { emoji: "🏞️", label: "Outdoor activities and nature access", value: "Nature and outdoor access" },
      { emoji: "🎊", label: "Vibrant nightlife and entertainment", value: "Nightlife and entertainment" },
    ],
  },
];

/* ─── Destination archetypes — context grounding for the AI, not a rigid lookup ─── */
export const DESTINATION_ARCHETYPES = {
  USA: {
    flag: "🇺🇸",
    label: "United States",
    bestFor: "Tech/business focus, prestige-driven, comfortable budget, fast-paced city life",
    strengths: ["World's top-ranked universities", "Strong tech & startup ecosystem", "OPT work authorization 1-3 years", "Huge alumni networks"],
    considerations: ["High tuition costs", "Competitive visa process (H-1B lottery)", "Healthcare costs are high"],
  },
  UK: {
    flag: "🇬🇧",
    label: "United Kingdom",
    bestFor: "Shorter programs, prestige-driven, balanced lifestyle, strong academic tradition",
    strengths: ["1-year Master's programs", "Historic, prestigious institutions", "2-year Graduate Route visa", "Easy access to Europe"],
    considerations: ["High cost of living in London", "Weather can be a drawback", "Limited part-time work hours"],
  },
  Canada: {
    flag: "🇨🇦",
    label: "Canada",
    bestFor: "PR-focused, work-while-studying, safety priority, moderate budget, large Indian community",
    strengths: ["Strong PR pathway (PGWP)", "Welcoming to international students", "Large Indian diaspora", "Safe, high quality of life"],
    considerations: ["Cold winters in most regions", "Processing times can be long", "Job market saturation in some cities"],
  },
  Australia: {
    flag: "🇦🇺",
    label: "Australia",
    bestFor: "Outdoor lifestyle, healthcare/nursing focus, work rights priority, warm climate",
    strengths: ["485 Graduate visa (2-4 years)", "High quality of life", "Strong healthcare & mining sectors", "Outdoor, relaxed lifestyle"],
    considerations: ["Far from India (long flights)", "High cost of living in Sydney/Melbourne", "Time zone difference"],
  },
  Germany: {
    flag: "🇩🇪",
    label: "Germany",
    bestFor: "Free/low tuition seekers, engineering focus, structured systems, research-oriented",
    strengths: ["Free tuition at public universities", "World-class engineering education", "Strong job market in EU", "18-month post-study job search visa"],
    considerations: ["Language barrier for daily life", "APS certificate requirement", "Bureaucracy can be slow"],
  },
  Ireland: {
    flag: "🇮🇪",
    label: "Ireland",
    bestFor: "Tech focus (EU tech hub), English-speaking, moderate budget, post-study work rights",
    strengths: ["Major tech hub (Google, Meta, etc.)", "English-speaking, easy transition", "2-year stay-back option", "EU access"],
    considerations: ["High Dublin living costs", "Limited university choices outside Dublin", "Smaller alumni network"],
  },
  NewZealand: {
    flag: "🇳🇿",
    label: "New Zealand",
    bestFor: "Nature priority, relaxed pace, agriculture/IT focus, safety-conscious",
    strengths: ["3-year open work visa", "Extremely safe and scenic", "Welcoming immigration policies", "Good work-life balance"],
    considerations: ["Limited university options", "Remote location", "Smaller job market"],
  },
  India: {
    flag: "🇮🇳",
    label: "India (Domestic)",
    bestFor: "Budget-conscious, family-close, structured exam-based admission, return-focused career goals",
    strengths: ["Most affordable option", "Close to family and support systems", "Strong IITs/IIMs/NLUs for top performers", "No visa hassles"],
    considerations: ["Highly competitive entrance exams", "Fewer global networking opportunities", "Limited international exposure"],
  },
};

/* ─── Match strength tiers ─── */
export const MATCH_TIERS = {
  EXCELLENT: { key: "EXCELLENT", label: "Excellent Match", color: "var(--accent-green)", bg: "rgba(49,185,120,0.08)",  border: "rgba(49,185,120,0.25)" },
  GOOD:      { key: "GOOD",      label: "Good Match",       color: "var(--primary)",      bg: "var(--primary-light)",  border: "rgba(109,83,163,0.2)"  },
  FAIR:      { key: "FAIR",      label: "Fair Match",       color: "var(--warning)",      bg: "rgba(248,148,31,0.08)", border: "rgba(248,148,31,0.25)" },
};