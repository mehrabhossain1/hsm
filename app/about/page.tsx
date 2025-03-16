"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import whyHsmImg from "@/public/about/why-hsm.jpg";

interface CardProps {
    title: string;
    description: string;
    image: string | StaticImageData;
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
                className="w-full md:w-1/3 relative hover:scale-110 transition-all duration-300 ease-in-out"
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
                className="w-full md:w-2/3 p-6 flex flex-col justify-center text-gray-800"
            >
                <h2 className="text-2xl font-semibold mb-2 hover:underline">
                    {title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 text-justify">
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

const AboutPage = () => {
    const resources = [
        {
            title: "About HSM",
            description:
                "“Information is power” and “Evidence lies at the heart of public health policy.” Inspired by the principles of valuing information and evidence, Health Systems Matter (HSM) offers essential resources on health systems, public health events, and career opportunities. HSM serves as an independent, comprehensive global health resource, providing updates on public health issues and career opportunities. The site hunts crucial reports, current information, and scholarly articles from global entities, ensuring proper referencing. ",
            image: "https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?t=st=1741458983~exp=1741462583~hmac=b3e2408e08a16945b7b4c73f6b7107ed7ed245ab86ac724907dd0b62f99806a2&w=740",
            link: "/about/about-hsm",
        },
        {
            title: "Vision & Mission",
            description:
                "The vision of Health Systems Matter is to create an evidence-based platform that empowers emerging public health professionals to become informed and confident global health advocates, dedicated to promoting public health issues and contributing to global health.",
            image: "https://img.freepik.com/free-vector/hand-drawn-business-strategy-concept_52683-75726.jpg?t=st=1741462040~exp=1741465640~hmac=89953c04640531a7d2fc98e95e016ef5f83f0b77545ea41b3d17140d5e43ed83&w=740",
            link: "/about/vision-and-mission",
        },
        {
            title: "Activities & Approach",
            description:
                "•Showcasing health systems and global health documents daily. •Generating and regenerating demand for impactful documents. •Disseminating major public health events and milestones. •Promoting pages and events focused on health systems and global health. •Introducing individuals in the health systems field dedicated to enhancing global health. •Highlighting organizations working on public health agendas.",
            image: "https://img.freepik.com/free-photo/team-teamwork-collaboration-corporate-concept_53876-15857.jpg?t=st=1741462633~exp=1741466233~hmac=8536886850402ccc626221209dc4e604ff017de5e678a4cf1d4894d446061ba3&w=826",
            link: "/about/activities-and-approach",
        },
        {
            title: "Why HSM",
            description:
                "Q1: What inspired the establishment of Health Systems Matter, and what is its foundational background? Sizear: Two key factors inspired me to create the HSM knowledge platform. First, early in my career in public health, I faced significant challenges in accessing relevant documents on the Bangladesh health system. Understanding its complexities and gaining a comprehensive overview was difficult due to the absence of a centralized resource. This experience underscored the need for a dedicated platform that systematically compiles both local and global health system insights. Recognizing this gap, I envisioned HSM as a continuously updated resource hub, ensuring professionals have easy access to the latest records in a welldocumented manner. ",
            image: whyHsmImg,
            link: "/about/why-health-systems-matter",
        },
    ];

    return (
        <div className=" bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10">
            {/* Page Title Section */}
            <div className="relative w-full h-auto md:h-[120px] border-t-2 border-[#FFCE00]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 py-4 md:py-0 gap-4 md:gap-6">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-white">
                            About
                        </h1>
                        <p className="text-md text-gray-800 font-semibold text-center md:text-left max-w-3xl w-full md:w-auto">
                            HSM is a resource hub, offering evidence-based
                            insights, expert knowledge, global events, and
                            career opportunities.
                        </p>
                    </div>
                </div>
            </div>

            {/* New Left Image - Right Content Layout */}
            <div className="max-w-screen-lg py-8 mx-auto px-16">
                <motion.div
                    className="flex flex-col gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
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
    );
};

export default AboutPage;
