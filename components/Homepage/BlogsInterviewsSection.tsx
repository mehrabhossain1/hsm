"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
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
            className="relative w-full h-96 overflow-hidden cursor-pointer rounded-md"
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
                className="absolute bottom-0 p-6 bg-[#001844]/90 text-white transition-all duration-500"
                style={{ height: hovered ? "100%" : "10rem" }}
            >
                <h2 className="text-3xl font-semibold">{title}</h2>
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
                        // onClick={(e) => {
                        //   e.stopPropagation();
                        //   router.push(`/about/${card.route}`);
                        // }}
                        className="mt-auto text-base flex bg-[#FFCE00] text-black hover:text-white hover:bg-[#001844] hover:border hover:border-[#FFCE00]"
                    >
                        Explore
                        <ArrowRight className="size-4 hover:text-white" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
};

export default function BlogsInterviewsSection() {
    const resources = [
        {
            title: "Interview",
            description:
                "The interview section showcases the journeys and insights of global health advocates, highlighting their impactful experiences and perspectives.",
            image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/interview",
        },
        {
            title: "Blog",
            description:
                "The blog covers diverse global health topics, offering thoughtful analysis from public health professionals through a health systems perspective.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "/blog",
        },
    ];

    return (
        <section className="bg-[#CDEDEC] to-white py-16 px-8 min-h-[720px] flex items-center justify-center">
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
                        INTERVIEW & BLOG
                    </h1>
                    <Separator
                        orientation="vertical"
                        className="h-10 w-1 bg-[#FFCE00]"
                    />

                    <p className="text-lg text-[#001844] font-semibold text-justify">
                        The Interview and Blog section is an exciting section of
                        the Health Systems Matter platform, offering original
                        content and insights from public health professionals
                        worldwide.
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
