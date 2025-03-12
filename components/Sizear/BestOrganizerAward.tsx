"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import Img1 from "@/public/best-organizer-award/3.jpg";
import Img2 from "@/public/best-organizer-award/4.jpg";

const organizerAwards = [
  {
    title: "Best Organizer Award",
    year: "2023",
    event: "10th International Public Health Conference",
    organizer: "Public Health Foundation Bangladesh & TMSS Medical College",
    image: Img1, // Replace with actual image paths
  },
  {
    title: "Best Organizer Award",
    year: "2009",
    event: "National Debate Festival",
    organizer: "National Debate Federation of Bangladesh",
    image: Img2,
  },
];

const BestOrganizer = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-cyan-50 via-white to-cyan-50 p-8 rounded-md shadow-sm">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-700  mb-8 ">
        🏆{" "}
        <span className="underline underline-offset-4">
          Best Organizer Award
        </span>
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {organizerAwards.map((award, index) => (
          <motion.div
            key={index}
            // whileHover={{ scale: 1.03 }}
            className="bg-white shadow-sm rounded-sm overflow-hidden border-l-4 border-cyan-500 transition-all duration-300"
          >
            <Image
              src={award.image}
              alt={award.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover brightness-90 hover:scale-105 hover:brightness-100 transition-transform transform duration-300 ease-in-out cursor-pointer"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FaAward className="text-cyan-500 mr-2" /> {award.title}
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

export default BestOrganizer;
