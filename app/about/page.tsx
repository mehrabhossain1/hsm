"use client";

import { Globe, Users, BookOpen, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();

  const cards = [
    {
      icon: <Globe size={40} className="text-blue-500" />,
      title: "About Health Systems Matter (HSM)",
      description: `“Information is power” and “Evidence lies at the heart of public health policy.”`,
      bg: "bg-blue-100",
      route: "about-hsm",
    },
    {
      icon: <Users size={40} className="text-green-500" />,
      title: "Vision and Mission",
      description: `The vision of Health Systems Matter is to create an evidence-based platform that empowers
emerging public health professionals to become informed and confident global health
advocates, dedicated to promoting public health issues and contributing to global health.`,
      bg: "bg-green-100",
      route: "vision-and-mission",
    },
    {
      icon: <BookOpen size={40} className="text-yellow-500" />,
      title: "Activities and Approach",
      description:
        "Curating essential health documents, research, and reports.",
      bg: "bg-yellow-100",
      route: "knowledge-hub",
    },
    {
      icon: <TrendingUp size={40} className="text-red-500" />,
      title: "Why Health Systems Matter ?",
      description: "Elevating key health messages through strategic advocacy.",
      bg: "bg-red-100",
      route: "amplification",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-115px)] flex flex-col  pb-10">
      {/* Title Section (30% Height) */}
      <div className="h-[40%] py-10 bg-[#001844] rounded-b-2xl flex flex-col justify-center text-white items-center text-center px-6">
        <h1 className="text-4xl font-bold">ABOUT</h1>
        <p className="mt-4 text-lg max-w-2xl text-gray-300">
          HSM is a resource hub, offering evidence-based insights, expert
          knowledge, global events, and career opportunities.
        </p>
      </div>

      {/* Cards Section (70% Height) */}
      <div className="h-[60%] pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 px-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`p-6  py-6 rounded-xl shadow-lg ${card.bg} flex flex-col items-center text-center cursor-pointer`}
            onClick={() => router.push(`/about/${card.route}`)}
          >
            {card.icon}
            <h3 className="text-xl font-semibold pt-4">{card.title}</h3>
            <p className="text-gray-700 pt-2 ">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
