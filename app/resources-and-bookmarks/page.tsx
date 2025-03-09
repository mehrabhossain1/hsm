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

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
  index,
}) => {
  return (
    <motion.div
      className="relative w-full flex flex-col md:flex-row bg-white shadow-lg overflow-hidden transition-transform transform border hover:scale-105 hover:border-r-4 hover:border-b-4 border-[#2D8CBB] hover:shadow-md duration-300"
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
        <h2 className="text-2xl font-semibold mb-2 hover:underline">{title}</h2>
        <p className="text-base text-gray-600 mb-4 line-clamp-4 text-justify">
          {description}
        </p>

        {/* Explore Button */}
        <div className="inline-flex justify-end items-center text-blue-600 hover:text-blue-500">
          <Button className="text-base flex bg-[#FFCE00] text-black hover:bg-[#2D8CBB] hover:text-white">
            Explore
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </Link>
    </motion.div>
  );
};

const ResourcesAndBookmarksPage = () => {
  const resources = [
    {
      title: "Resources",
      description:
        "Information is power and evidence lies at the heart of public health policy. Inspired by the principles of valuing information and evidence, Health Systems Matter (HSM) offers essential resources on health systems, public health events, and career opportunities. HSM serves as an independent, comprehensive global health resource, providing updates on public health issues and career opportunities. The site hunts crucial reports, current information, and scholarly articles from global entities, ensuring proper referencing. ",
      image:
        "https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?t=st=1741458983~exp=1741462583~hmac=b3e2408e08a16945b7b4c73f6b7107ed7ed245ab86ac724907dd0b62f99806a2&w=740",
      link: "/resources",
    },
    {
      title: "Bookmarks",
      description:
        "The vision of Health Systems Matter is to create an evidence-based platform that empowers emerging public health professionals to become informed and confident global health advocates.",
      image:
        "https://img.freepik.com/free-vector/hand-drawn-business-strategy-concept_52683-75726.jpg?t=st=1741462040~exp=1741465640~hmac=89953c04640531a7d2fc98e95e016ef5f83f0b77545ea41b3d17140d5e43ed83&w=740",
      link: "bookmarks",
    },
  ];

  return (
    <div>
      <div className="relative w-full h-[150px] border-t-2 ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDEBDF] to-[#FDEBDF]/30 flex items-center px-16">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-4xl font-bold text-gray-700">
              Resources & Bookmarks
            </h1>
            <p className="text-xl  text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>
      <div className="min-h-[calc(100vh-115px)] flex flex-col pb-10 max-w-screen-xl mx-auto">
        {/* Title Section (30% Height) */}
        {/* Page Title Section */}

        {/* Cards Section */}

        {/* New Left Image - Right Content Layout */}
        <div className="max-w-screen-md py-16 mx-auto px-8">
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
    </div>
  );
};

export default ResourcesAndBookmarksPage;
