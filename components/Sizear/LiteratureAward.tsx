"use client";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const LiteratureAward = () => {
  const award = {
    title: "Best Letter Prize",
    year: "2024",
    description:
      "Received in a nationwide competition organized by UNFPA and Prothom Alo.",
  };

  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 rounded-md shadow-sm">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-700  mb-8">
        ✍️{" "}
        <span className="underline underline-offset-4">Literature Award</span>
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div
          //   whileHover={{ scale: 1.02 }}
          className="flex items-center space-x-6 bg-white shadow-sm rounded-lg p-5 border-l-4 border-blue-500 transition-all duration-300"
        >
          <FaMedal className="text-blue-500 text-4xl flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {award.title}
            </h3>
            <p className="text-sm text-gray-600">{award.year}</p>
            <p className="text-sm text-gray-700 italic">{award.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LiteratureAward;
