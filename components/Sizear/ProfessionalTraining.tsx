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
    <div className=" bg-slate-100 py-16">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16">
        <h3 className="text-2xl md:text-2xl font-bold text-gray-600  underline underline-offset-4 mb-8">
          Professional Training & Certifications
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          {trainings.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ borderColor: "#FFCE00" }}
              className="flex items-start space-x-4 bg-white shadow-sm rounded-md p-4 border-l-4 border-green-500"
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
    </div>
  );
}
