"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
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
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-96 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 grayscale"
      />
      <div className="absolute inset-0 transition-opacity duration-300" />
      <div
        className="absolute bottom-0 p-6 bg-[#001844]/90 text-white transition-all duration-500 text-justify"
        style={{
          height: hovered ? "100%" : "10rem",
          // clipPath: "polygon(0 19%, 100% 6%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="">
          <h2 className="text-xl font-bold">{title}</h2>
          <p
            className={`text-base mt-4 text-gray-300 transition-opacity duration-300  ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {description}
          </p>
          <Link
            href={link}
            className="absolute bottom-4 right-4 flex items-center text-blue-400 hover:text-blue-300"
          >
            <Button className="mt-auto text-base flex bg-[#FFCE00] text-black hover:text-white hover:bg-[#001844] hover:border hover:border-[#FFCE00]">
              Explore
              <ArrowRight className="size-4 hover:text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutSection() {
  const resources = [
    {
      title: "About HSM",
      description:
        "“Information is power” and “Evidence lies at the heart of public health policy.”",
      image:
        "https://images.unsplash.com/photo-1607004468138-e7e23ea26947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/about/about-hsm",
    },
    {
      title: "Vision & Mission",
      description:
        "The vision of Health Systems Matter is to create an evidence-based platform that empowers emerging public health professionals to become informed and confident global health advocates, dedicated to promoting public health issues and contributing to global health.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/about/vision-and-mission",
    },
    {
      title: "Activities & Approach",
      description:
        "In order to be aligned with the vision and mission of Health Systems Matter, the specific activities are as follows",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/about/activities-and-approach",
    },
    {
      title: "Why HSM",
      description:
        "Q1: What inspired the establishment of Health Systems Matter, and what is its foundational background?",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/about/why-health-systems-matter",
    },
  ];

  return (
    <>
      <section className="relative bg-[#C1E2E5] to-white  bg-cover bg-center bg-no-repeat py-16 px-8 min-h-[680px] flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex justify-between mb-8">
            <SectionTitle
              title="ABOUT"
              subTitle="HSM is a resource hub, offering evidence-based insights, expert knowledge, global events and career opportunities."
              href="/about"
            />
          </div>
          <div className=" mx-auto">
            <motion.div
              className="grid md:grid-cols-4 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }, // Delay each card
                },
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
      </section>
    </>
  );
}
