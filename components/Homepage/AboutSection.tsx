"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

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
        className="absolute inset-0"
      />
      <div className="absolute inset-0 transition-opacity duration-300" />
      <div
        className="absolute bottom-0 p-6 bg-[#001844] text-white transition-all duration-300 mr-10"
        style={{ height: hovered ? "16rem" : "10rem" }}
      >
        <h2 className="text-xl ">{title}</h2>
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

export default function AboutSection() {
  const resources = [
    {
      title: "About HSM",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      image:
        "https://images.unsplash.com/photo-1607004468138-e7e23ea26947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://stripe.com",
    },
    {
      title: "Vision & Mission",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Activities & Approach",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Why HSM",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <>
      <section className="bg-[url('/aboutbg.jpg')] bg-cover bg-center bg-no-repeat py-16 mt-5 px-8 min-h-dvh">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex justify-between mb-8">
            {/* <h2 className="text-3xl text-gray-600 underline underline-offset-8 border-gray-400 inline-block">
              ABOUT
            </h2>
            <h3 className="text-xl max-w-xl text-gray-800 mb-8">
              HSM is a resource hub, offering evidence-based insights, expert
              knowledge, global events and career opportunities.
            </h3> */}

            <SectionTitle
              title="About"
              subTitle="HSM is a resource hub, offering evidence-based insights, expert knowledge, global events and career opportunities."
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

      {/* <div className="rounded-2xl mt-5 bg-[url('/aboutbg.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-screen-xl min-h-dvh mx-auto px-8 flex flex-col justify-center items-center">
          <SectionTitle
            title="About"
            subTitle="HSM is a resource hub, offering evidence-based insights, expert knowledge, global events and career opportunities."
          />

          <div className="grid md:grid-cols-4 gap-6">
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
      </div> */}
    </>
  );
}
