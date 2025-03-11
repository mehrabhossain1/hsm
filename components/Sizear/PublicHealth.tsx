"use client";
import { motion } from "framer-motion";

const PublicHealth = () => {
  const articles = [
    {
      title:
        "How government can utilise the private sector to improve Bangladesh’s health",
      year: "2024",
      link: "https://www.tbsnews.net/thoughts/how-government-can-utilise-private-sector-improve-bangladeshs-health-824686", // Replace with the correct link
      source: "The Business Standard (TBS)",
    },
    {
      title:
        "Resource Allocation Formula could address our poor health budget utilisation",
      year: "2023",
      link: "https://www.tbsnews.net/thoughts/resource-allocation-formula-could-address-our-poor-health-budget-utilisation-756218", // Replace with the correct link
      source: "TBS",
    },
    {
      title:
        "Why health budget remains underutilised and how it can be remedied",
      year: "2023",
      link: "https://www.tbsnews.net/thoughts/why-health-budget-remains-underutilised-and-how-it-can-be-remedied-641414", // Replace with the correct link
      source: "TBS",
    },
    {
      title: "Public health literacy: The key to a healthier society",
      year: "2023",
      link: "https://www.tbsnews.net/thoughts/public-health-literacy-key-healthier-society-697074", // Replace with the correct link
      source: "TBS",
    },
    {
      title:
        "Breastfeeding: How dubious advertising tricked us into thinking formula is better",
      year: "2023",
      link: "https://www.tbsnews.net/thoughts/breastfeeding-how-dubious-advertising-tricked-us-thinking-formula-better-676906", // Replace with the correct link
      source: "TBS",
    },
    {
      title:
        "Health for all: An overarching but ultimate goal for World Health Day 2023",
      year: "2023",
      link: "https://www.tbsnews.net/thoughts/health-all-overarching-ultimate-goal-world-health-day-2023-612630", // Replace with the correct link
      source: "TBS",
    },
    {
      title:
        "Triumphs and challenges of the tuberculosis programme in Bangladesh",
      year: "2023",
      link: "https://www.tbsnews.net/thoughts/triumphs-and-challenges-tuberculosis-programme-bangladesh-604754", // Replace with the correct link
      source: "TBS",
    },
    {
      title:
        "Learning from Sweden: A contextualised approach to deal with an unprecedented situation",
      year: "2020",
      link: "https://www.tbsnews.net/thoughts/learning-sweden-contextualised-approach-deal-unprecedented-situation-91294", // Replace with the correct link
      source: "TBS",
    },
  ];

  return (
    <div className="pt-16">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-600  underline underline-offset-4 mb-8">
        Public Health
      </h3>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {articles.map((article, index) => (
          <motion.div
            key={index}
            whileHover={{ borderColor: "#2196F3" }}
            className="bg-white border shadow-sm rounded-md p-6 border-l-4 border-green-500 flex items-start space-x-6"
          >
            {/* Left Side: Year */}
            <div className="w-1/4">
              <h3 className="text-lg font-semibold text-gray-900">
                {article.year}
              </h3>
            </div>

            {/* Right Side: Title & Source */}
            <div className="w-3/4">
              <p className="text-md font-semibold text-gray-800">
                {/* Clickable Title */}
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 hover:underline text-md transition duration-200"
                >
                  {article.title}
                </a>
              </p>
              <p className="text-gray-600 text-sm">{article.source}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PublicHealth;
