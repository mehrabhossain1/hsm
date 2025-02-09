"use client";

import { Globe, Users, BookOpen, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();

  const cards = [
    {
      icon: <Globe size={40} className="text-blue-500" />,
      title: "Global Reach",
      description:
        "Providing worldwide health updates and resources to professionals.",
      bg: "bg-blue-100",
      route: "about-hsm",
    },
    {
      icon: <Users size={40} className="text-green-500" />,
      title: "Community Engagement",
      description: "Connecting health advocates and professionals globally.",
      bg: "bg-green-100",
      route: "community-engagement",
    },
    {
      icon: <BookOpen size={40} className="text-yellow-500" />,
      title: "Knowledge Hub",
      description:
        "Curating essential health documents, research, and reports.",
      bg: "bg-yellow-100",
      route: "knowledge-hub",
    },
    {
      icon: <TrendingUp size={40} className="text-red-500" />,
      title: "Amplification",
      description: "Elevating key health messages through strategic advocacy.",
      bg: "bg-red-100",
      route: "amplification",
    },
  ];

  return (
    <div className="min-h-dvh">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl shadow-lg ${card.bg} flex flex-col items-center text-center h-[50vh] cursor-pointer`}
            onClick={() => router.push(`/about/${card.route}`)}
          >
            {card.icon}
            <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
            <p className="text-gray-700 mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
