"use client";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const ConferenceAwards = () => {
  const awards = [
    {
      title: "Best Oral Presenter Award",
      year: "2024",
      event: "International Public Health Conference",
      organizer: "Public Health Association of Bangladesh",
    },
    {
      title: "Best Oral Presenter Award",
      year: "2023",
      event: "10th International Public Health Conference",
      organizer: "Public Health Foundation Bangladesh & TMSS Medical College",
    },
    {
      title: "Best Oral Presenter Award",
      year: "2023",
      event: "9th International Public Health Conference",
      organizer: "Public Health Foundation Bangladesh",
    },
    {
      title: "Best Oral Presenter Award",
      year: "2022",
      event: "9th Regional Public Health Conference",
      organizer: "Bangladesh University of Health Professionals",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-green-50 via-white to-green-50 p-8 rounded-md shadow-sm">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-700 mb-8">
        🎤{" "}
        <span className="underline underline-offset-4 ">
          Conference Presentation and
        </span>{" "}
        🏆 <span className="underline underline-offset-4 ">Awards</span>
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {awards.map((award, index) => (
          <motion.div
            key={index}
            // whileHover={{ scale: 1.02 }}
            className="flex items-start space-x-6 bg-white shadow-sm rounded-lg p-5 border-l-4 border-green-500 transition-all duration-300"
          >
            <FaTrophy className="text-green-500 text-4xl flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {award.title}
              </h3>
              <p className="text-sm text-gray-600">🗓 Year: {award.year}</p>
              <p className="text-sm text-gray-700 font-medium">
                📢 {award.event}
              </p>
              <p className="text-sm text-gray-600">
                🎓 Organized by: {award.organizer}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ConferenceAwards;
