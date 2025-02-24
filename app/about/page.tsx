"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
  index,
}) => {
  return (
    <motion.div
      className="relative w-full flex flex-col md:flex-row bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Image Section (Left) */}
      <Link
        href={link}
        className="w-full md:w-1/3 h-64 relative hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </Link>

      {/* Content Section (Right) */}
      <Link
        href={link}
        className="w-full md:w-2/3 p-6 px-12 flex flex-col justify-center text-gray-800"
      >
        <h2 className="text-4xl font-semibold mb-2">{title}</h2>
        <p className="text-base text-gray-600 mb-4 line-clamp-4 text-justify">
          {description}
        </p>

        {/* Explore Button */}
        <div className="inline-flex justify-end items-center text-blue-600 hover:text-blue-500">
          <Button className="text-xl flex bg-[#FFCE00] text-black hover:bg-[#001844] hover:text-white">
            Explore
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </Link>
    </motion.div>
  );
};

const AboutPage = () => {
  const resources = [
    {
      title: "About HSM",
      description:
        "Information is power and evidence lies at the heart of public health policy. Inspired by the principles of valuing information and evidence, Health Systems Matter (HSM) offers essential resources on health systems, public health events, and career opportunities. HSM serves as an independent, comprehensive global health resource, providing updates on public health issues and career opportunities. The site hunts crucial reports, current information, and scholarly articles from global entities, ensuring proper referencing. ",
      image:
        "https://images.unsplash.com/photo-1607004468138-e7e23ea26947?q=80&w=1470&auto=format&fit=crop",
      link: "/about/about-hsm",
    },
    {
      title: "Vision & Mission",
      description:
        "The vision of Health Systems Matter is to create an evidence-based platform that empowers emerging public health professionals to become informed and confident global health advocates.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Activities & Approach",
      description:
        "In order to be aligned with the vision and mission of Health Systems Matter, the specific activities are as follows.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Why HSM",
      description:
        "Q1: What inspired the establishment of Health Systems Matter, and what is its foundational background?",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-5xl font-[1000] text-white">About</h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto">
              HSM is a resource hub, offering evidence-based insights, expert
              knowledge, global events, and career opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* New Left Image - Right Content Layout */}
      <div className="max-w-screen-xl py-16 mx-auto px-8">
        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {resources.map((resource, index) => (
            <Card
              key={index}
              title={resource.title}
              description={resource.description}
              image={resource.image}
              link={resource.link}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
