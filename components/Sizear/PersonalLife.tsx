"use client";
import {
  FaGlobe,
  FaBook,
  FaCoffee,
  FaUserMd,
  FaAward,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const quickFacts = [
  {
    icon: <FaUserMd />,
    text: "I am 38 years old, born and raised in Bangladesh.",
  },
  {
    icon: <FaGlobe />,
    text: "I hold three master’s degrees in Anthropology, Public Health, and Urban Development Policy, earned in Bangladesh and the Netherlands.",
  },
  {
    icon: <FaUsers />,
    text: "I am the founder of Health Systems Matter, a global health knowledge platform.",
  },
  {
    icon: <FaAward />,
    text: "I was a national-level debater, winning several debate competitions.",
  },
  {
    icon: <FaAward />,
    text: "I am an award-winning organizer, passionate about and skilled in event coordination.",
  },
  { icon: <FaBook />, text: "I enjoy reading, writing, and publishing." },
  {
    icon: <FaGlobe />,
    text: "I am a globetrotter and a keen observer of life.",
  },
  { icon: <FaUserMd />, text: "I am a blood donor." },
  { icon: <FaCoffee />, text: "I am a coffee enthusiast." },
  {
    icon: <FaUsers />,
    text: "My family includes my wife, two daughters, and my father.",
  },
];

export default function QuickFacts() {
  return (
    <div className=" py-16 p-6 bg-slate-100 rounded-lg shadow-sm">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-700  mb-8">
        <span className="underline underline-offset-4">
          Personal Life at a Glance
        </span>
      </h3>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {quickFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-4 bg-white p-4 rounded-md shadow-sm"
            >
              <span className="text-blue-500 text-2xl">{fact.icon}</span>
              <p className="text-gray-700 text-lg">{fact.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
