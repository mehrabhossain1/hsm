"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
// import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Separator } from "../ui/separator";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
// const contactSubLinks: {
//   title: string;
//   href: string;
//   description: string;
//   icon: React.ReactNode;
// }[] = [
//   {
//     title: "Stay Connected",
//     href: "/contact/stay-connected",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//     icon: <FaEnvelope className="w-16 h-16" />,
//   },
//   {
//     title: "Subscribe",
//     href: "/contact/subscribe",
//     description:
//       "For sighted users to preview content available behind a link.",
//     icon: <FaBell className="w-16 h-16" />,
//   },
//   {
//     title: "Support",
//     href: "/contact/support",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     icon: <FaQuestionCircle className="w-16 h-16" />,
//   },
// ];

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
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p
          className={`text-base mt-4 text-gray-300 transition-opacity duration-300 text-justify ${
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
            className="mt-auto text-base flex bg-[#FEC53F] text-black hover:text-white hover:bg-[#001844] hover:border hover:border-[#FEC53F]"
          >
            Explore
            <ArrowRight className="size-4 hover:text-white" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const resources = [
    {
      title: "Stay Connected",
      description:
        "The Resources section aspire to be a repository of essential resources on health systems and global health.",
      image:
        "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },

    {
      title: "Support and Collaborate",
      description:
        "The Global Health Bookmarks section indicates the resources either document, entities, courses, career, podcast and so on pertained with the global health and health systems are covered.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Subscribe",
      description:
        "The Global Health Bookmarks section indicates the resources either document, entities, courses, career, podcast and so on pertained with the global health and health systems are covered.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#CDEDEC] to-white py-16 px-8 min-h-[720px] flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex gap-5 items-center w-full mb-8">
          <h1 className="text-4xl font-[1000] text-[#001844] whitespace-nowrap">
            CONTACT
          </h1>
          <Separator orientation="vertical" className="h-12 w-1 bg-[#FFCE00]" />

          <p className="text-lg text-gray-600 font-semibold text-justify">
            The Blog and Interview section is an exciting section of the Health
            Systems Matter platform, offering original content and insights from
            public health professionals worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
};

export default ContactSection;
