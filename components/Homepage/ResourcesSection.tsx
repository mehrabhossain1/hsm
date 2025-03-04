"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
// import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Separator } from "../ui/separator";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-96 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 transition-opacity duration-300" />
      <div
        className="absolute bottom-0 p-6 bg-[#001844]/90 text-white transition-all duration-500 "
        style={{ height: hovered ? "100%" : "10rem" }}
      >
        <h2 className="text-5xl font-semibold">{title}</h2>
        <p
          className={`text-base mt-4 text-gray-300 transition-opacity duration-300 text-justify ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {description}
        </p>
        <Link
          href={link}
          className="absolute bottom-4 right-4 flex items-center text-blue-400 hover:text-blue-300"
        >
          <Button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card click
              // router.push(`/about/${card.route}`);
            }}
            className="mt-auto text-base flex bg-[#FFCE00] text-black hover:text-white hover:bg-[#001844] hover:border hover:border-[#FEC53F]"
          >
            Explore
            <ArrowRight className="size-4 hover:text-white" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default function ResourcesSection() {
  const resources = [
    {
      title: "Resources",
      description:
        "The Resources section aspire to be a repository of essential resources on health systems and global health.",
      image:
        "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/resources",
    },
    {
      title: "Bookmarks",
      description:
        "The Global Health Bookmarks section indicates the resources either document, entities, courses, career, podcast and so on pertained with the global health and health systems are covered.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/bookmarks",
    },
  ];

  return (
    <section className="bg-[#FDEBDF] to-white py-16 px-8 min-h-[720px] flex items-center justify-center">
      {/* <section className="bg-gradient-to-t from-gray-50 to-white py-16 px-8 min-h-[720px] flex items-center justify-center"> */}
      <div className="max-w-screen-xl mx-auto px-8 ">
        {/* <div className="flex justify-between ">
          <h2 className="text-3xl text-gray-600 underline underline-offset-8 border-gray-400 inline-block">
            RESOURCES & BOOKMARKS
          </h2>
          <h3 className="text-xl max-w-xl text-gray-800 mb-8">
            Explore the comprehensive resource hub to supercharge your knowledge
            and complement your rewarding career journey. The Resource section
            lets you download valuable materials with a single click, while the
            Bookmarks section connects you to useful contents and tools crucial
            for professional success.
          </h3>
        </div> */}

        <div className="flex justify-between mb-8">
          {/* <SectionTitle
            title="RESOURCES & BOOKMARKS"
            subTitle="Explore the comprehensive resource hub to supercharge your knowledge
            and complement your rewarding career journey. The Resource section
            lets you download valuable materials with a single click, while the
            Bookmarks section connects you to useful contents and tools crucial
            for professional success."
          /> */}

          <div className="flex gap-5 items-center w-full">
            <h1 className="text-4xl font-[1000] text-[#001844] whitespace-nowrap">
              RESOURCES & BOOKMARKS
            </h1>
            <Separator
              orientation="vertical"
              className="h-24 w-1 bg-[#FFCE00]"
            />

            <p className="text-lg text-gray-600 font-semibold text-justify">
              Explore the comprehensive resource hub to supercharge your
              knowledge and complement your rewarding career journey. The
              Resource section lets you download valuable materials with a
              single click, while the Bookmarks section connects you to useful
              contents and tools crucial for professional success.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                title={resource.title}
                description={resource.description}
                image={resource.image}
                link={resource.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
