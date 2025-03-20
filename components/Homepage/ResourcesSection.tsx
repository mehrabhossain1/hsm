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
                    <Button className="mt-auto text-base flex bg-[#FFCE00] text-black hover:text-white hover:bg-[#001844] hover:border hover:border-[#FEC53F]">
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
            image: "https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?t=st=1741538159~exp=1741541759~hmac=b3ffe57c1f19b6cb99789c3cb587844550a0c0f4b393408d93cbfca4f95f2021&w=1060",
            link: "/resources",
        },
        {
            title: "Bookmarks",
            description:
                "The Global Health Bookmarks section indicates the resources either document, entities, courses, career, podcast and so on pertained with the global health and health systems are covered.",
            image: "https://img.freepik.com/free-photo/high-angle-bookmark-book-arrangement_23-2149894430.jpg?t=st=1741538268~exp=1741541868~hmac=708a478df8a3365c52765b4d69b8ede7e3df58021777326bed961629431e1027&w=1060",
            link: "/bookmarks",
        },
    ];

    return (
        <section className="bg-[#E1F0DB] to-white py-16  min-h-[720px] flex items-center justify-center">
            {/* <section className="bg-gradient-to-t from-gray-50 to-white py-16 px-8 min-h-[720px] flex items-center justify-center"> */}
            <div className="max-w-screen-xl mx-auto px-16 ">
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
                        <Link
                            href="/resources-and-bookmarks"
                            className="text-4xl font-[1000] text-[#001844] whitespace-nowrap"
                        >
                            <h2>RESOURCES & BOOKMARKS</h2>
                        </Link>
                        <Separator
                            orientation="vertical"
                            className="h-24 w-1 bg-[#FFCE00]"
                        />

                        <p className="text-lg text-[#001844] font-semibold text-justify">
                            Explore the comprehensive resource hub to
                            supercharge your knowledge and complement your
                            rewarding career journey. The{" "}
                            <strong>Resource</strong> section lets you download
                            valuable materials with a single click, while the{" "}
                            <strong>Bookmarks</strong> section connects you to
                            useful contents and tools crucial for professional
                            success.
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
