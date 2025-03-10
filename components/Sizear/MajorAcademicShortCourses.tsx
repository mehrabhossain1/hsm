"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const MajorAcademicShortCourses = () => {
  const trainings = [
    {
      title: "Systems Thinking in Public Health",
      organization: "Johns Hopkins University",
      year: "2024",
    },
    {
      title: "Human-Centered Design and System Thinking",
      organization: "IDEO (Five-week course)",
      year: "2024",
    },
    {
      title: "Global Health Policy",
      organization: "The University of Tokyo",
      year: "2022",
    },
    {
      title: "Global Health Diplomacy",
      organization: "State University of New York",
      year: "2020",
    },
    {
      title: "Public Policy Challenges of the 21st Century",
      organization: "University of Virginia",
      year: "2020",
    },
    {
      title: "Public Health in Humanitarian Crisis",
      organization: "Johns Hopkins University",
      year: "2020",
    },
    {
      title: "Studying Cities: Social Science Methods for Urban Research",
      organization: "Erasmus University",
      year: "2020",
    },
    {
      title: "Global Health: An Interdisciplinary Overview",
      organization: "University of Geneva",
      year: "2019",
    },
  ];

  return (
    <div className="pt-16">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-600  underline underline-offset-4 mb-8">
        Major Academic Short Courses
      </h3>

      {/* Content */}
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
  );
};

export default MajorAcademicShortCourses;
