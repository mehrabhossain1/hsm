"use client";

import { Globe, Users, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  const router = useRouter();

  const cards = [
    {
      icon: <Globe size={40} className="text-blue-500" />,
      title: "About HSM",
      description: `“Information is power” and “Evidence lies at the heart of public health policy.”`,
      bg: "bg-blue-100",
      route: "about-hsm",
    },
    {
      icon: <Users size={40} className="text-green-500" />,
      title: "Vision and Mission",
      description: `The vision of Health Systems Matter is to create an evidence-based platform that empowers emerging public health professionals to become informed and confident global health advocates.`,
      bg: "bg-green-100",
      route: "vision-and-mission",
    },
    {
      icon: <BookOpen size={40} className="text-yellow-500" />,
      title: "Activities and Approach",
      description: `In order to be aligned with the vision and mission of Health Systems Matter, the specific activities are as follows:`,
      bg: "bg-yellow-100",
      route: "activities-and-approach",
    },
    {
      icon: <TrendingUp size={40} className="text-red-500" />,
      title: "Why HSM ?",
      description:
        "Q1: What inspired the establishment of Health Systems Matter, and what is its foundational background? Sizear: Two key factors inspired me to create the HSM knowledge platform.",
      bg: "bg-red-100",
      route: "why-health-systems-matter",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-115px)] flex flex-col pb-10 max-w-screen-xl mx-auto">
      {/* Title Section (40% Height) */}
      <div className="h-[40%] py-4 rounded-b-2xl flex justify-center gap-8 px-8 items-center text-center ">
        <h1 className="text-4xl font-bold text-gray-800">ABOUT</h1>
        <Separator orientation="vertical" className="h-10 w-1 bg-[#FEC53F]" />
        <p className="text-lg  text-gray-700">
          HSM is a resource hub, offering evidence-based insights, expert
          knowledge, global events, and career opportunities.
        </p>
      </div>

      {/* Cards Section (60% Height) */}
      <div className="h-[60%] pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 px-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`p-6 py-6 rounded-xl shadow-lg ${card.bg} flex flex-col items-center text-center cursor-pointer`}
            onClick={() => router.push(`/about/${card.route}`)}
          >
            {card.icon}
            <h3 className="text-xl font-semibold pt-4">{card.title}</h3>
            <p className="text-gray-700 pt-2 pb-5">{card.description}</p>

            <Button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the card click
                router.push(`/about/${card.route}`);
              }}
              className="mt-auto flex bg-[#FEC53F] text-black hover:text-white hover:bg-[#001844]"
            >
              Read More
              <ArrowRight className="size-4 hover:text-white" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
