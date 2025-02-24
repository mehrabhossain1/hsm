"use client";

import { Card } from "@/components/Homepage/AboutSection";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  const resources = [
    {
      title: "About HSM",
      description:
        "“Information is power” and “Evidence lies at the heart of public health policy.”",
      image:
        "https://images.unsplash.com/photo-1607004468138-e7e23ea26947?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://stripe.com",
    },
    {
      title: "Vision & Mission",
      description:
        "The vision of Health Systems Matter is to create an evidence-based platform that empowers emerging public health professionals to become informed and confident global health advocates, dedicated to promoting public health issues and contributing to global health.",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Activities & Approach",
      description:
        "In order to be aligned with the vision and mission of Health Systems Matter, the specific activities are as follows",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Why HSM",
      description:
        "Q1: What inspired the establishment of Health Systems Matter, and what is its foundational background?",
      image:
        "https://images.unsplash.com/photo-1581447109081-3656e3f87cbf?q=80&w=1552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Page Title with Full-Width Background Image */}
      <div className="relative w-full h-[180px] border-t-2 border-[#FFCE00]">
        <Image
          // src="https://images.pexels.com/photos/2330507/pexels-photo-2330507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image path
          alt="About Page"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30  flex items-center ">
          <div className="max-w-screen-xl mx-auto w-full px-8">
            <h1 className="text-5xl font-[1000] text-white ">About</h1>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-screen-xl mx-auto px-8">
        <p className="text-2xl max-w-2xl mx-auto text-gray-600 font-semibold my-8">
          HSM is a resource hub, offering evidence-based insights, expert
          knowledge, global events and career opportunities.
        </p>
        <div className="pb-20 mx-auto">
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
    </div>
  );
};

export default AboutPage;
