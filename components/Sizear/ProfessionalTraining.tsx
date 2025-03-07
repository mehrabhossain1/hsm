"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const trainings = [
  {
    title: "Health Economics and Non-Communicable Diseases Policies",
    organization: "James P Grant School of Public Health",
    year: "2023",
  },
  {
    title: "Health Economics Policy Analysis",
    organization: "icddr,b",
    year: "2023",
  },
  {
    title: "Introduction to R Training",
    organization: "CPSD, James P Grant School of Public Health",
    year: "2023",
  },
  {
    title: "Advanced Professional Training in Sustainable Urban Sanitation",
    organization: "NIRAS & WaterAid",
    year: "Sweden (2017) & Cambodia (2018)",
  },
  {
    title: "Training of Trainers (ToT)",
    organization: "WaterAid Bangladesh",
    year: "2018",
  },
  {
    title: "Leadership and People Management",
    organization: "MDF Bangladesh",
    year: "2018",
  },
  {
    title: "Implementing Health Research",
    organization: "WHO, UNICEF & James P Grant School of Public Health",
    year: "2017",
  },
  {
    title: "Mixed Method Technique",
    organization: "James P Grant School of Public Health",
    year: "2014",
  },
];

export default function ProfessionalTraining() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8">
        Professional Training & Certifications
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {trainings.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="flex items-start space-x-4 bg-white shadow-md rounded-lg p-4 border-l-4 border-green-500"
          >
            <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-md text-gray-700">{item.organization}</p>
              <p className="text-sm text-gray-500">{item.year}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
