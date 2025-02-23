"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

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
        className="absolute bottom-0 p-6 bg-[#001844] text-white transition-all duration-300 mr-10"
        style={{ height: hovered ? "16rem" : "10rem" }}
      >
        <h2 className="text-5xl ">{title}</h2>
        <p
          className={`text-base mt-4 text-gray-300 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {description}
        </p>
        <a
          href={link}
          className="absolute bottom-4 right-4 flex items-center text-blue-400 hover:text-blue-300"
        >
          <Button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card click
              // router.push(`/about/${card.route}`);
            }}
            className="mt-auto flex bg-[#FFCE00] text-black hover:text-white hover:bg-[#001844] hover:border hover:border-[#FFCE00]"
          >
            Read More
            <ArrowRight className="size-4 hover:text-white" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default function BlogsInterviewsSection() {
  const resources = [
    {
      title: "Blog",
      description:
        "This section features original blogs and insights from public health professionals while providing an opportunity for you to share your stories and ideas. Feel free to contribute—just reach out to us via email!",
      image:
        "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Interview",
      description:
        "“An effective interview is a collaborative intellectual adventure” – Shahaduz Zaman",
      image:
        "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-8 min-h-[720px] flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* <div className="flex justify-between ">
          <h2 className="text-3xl text-gray-600 underline underline-offset-8 border-gray-400 inline-block">
            BLOG & INTERVIEW
          </h2>
          <h3 className="text-xl max-w-xl text-gray-800 mb-8">
            The blog covers diverse global health topics, offering thoughtful
            analysis from public health professionals through a health systems
            perspective. The interview section showcases the journeys and
            insights of global health advocates, highlighting their impactful
            experiences and perspectives.
          </h3>
        </div> */}

        <div className="flex gap-5 items-center w-full mb-8">
          <h1 className="text-4xl font-[1000] text-[#001844] whitespace-nowrap">
            BLOG & INTERVIEW
          </h1>
          <Separator orientation="vertical" className="h-24 w-1 bg-[#FFCE00]" />

          <p className="text-lg text-gray-600 font-semibold">
            The <span className="font-bold">blog</span> covers diverse global
            health topics, offering thoughtful analysis from public health
            professionals through a health systems perspective. The{" "}
            <span className="font-bold">interview</span> section showcases the
            journeys and insights of global health advocates, highlighting their
            impactful experiences and perspectives.
          </p>
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
