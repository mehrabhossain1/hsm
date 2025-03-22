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

const NewsAndNewsletterPage = () => {
    const resources = [
        {
            title: "News",
            description:
                "This section features Upcoming Events, which covers key global health conferences, symposiums, webinars, campaigns, and health days. On the other hand, Headline News cover current major global health issues demanding global attention. Meanwhile, the Do You Know highlights significant public health milestones and fascinating facts. Explore a curated list of notable health days and activities focused on global health.",
            image: "https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?t=st=1741538159~exp=1741541759~hmac=b3ffe57c1f19b6cb99789c3cb587844550a0c0f4b393408d93cbfca4f95f2021&w=1060",
            link: "/news",
        },
        {
            title: "Newsletter",
            description:
                "The Health Systems Matter Newsletter provides valuable insights and resources on global health, upcoming events, and career opportunities. Subscribers receive periodic emails, preferably monthly, featuring highlights from our recent social media posts, new blogs, interviews, and more. The newsletter also covers significant global health topics and news from around the world, keeping you updated and informed.",
            image: "https://img.freepik.com/free-photo/high-angle-bookmark-book-arrangement_23-2149894430.jpg?t=st=1741538268~exp=1741541868~hmac=708a478df8a3365c52765b4d69b8ede7e3df58021777326bed961629431e1027&w=1060",
            link: "/newsletter",
        },
    ];

    return (
        <div>
            <div className="relative w-full h-[120px] border-t-2 border-[#FFCE00]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB] to-[#2D8CBB]/30 flex items-center ">
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16">
                        <h1 className="text-4xl font-bold text-white">
                            News & Newsletter
                        </h1>
                        <p className="text-base max-w-xl text-slate-100 font-semibold my-8 text-justify w-full md:w-auto">
                            Visit the news section to stay informed about
                            upcoming global health events and subscribe to our
                            periodic newsletter for regular updates on public
                            health issues
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col max-w-screen-xl mx-auto">
                {/* Title Section (30% Height) */}
                {/* Page Title Section */}

                {/* Cards Section */}

                {/* New Left Image - Right Content Layout */}
                <div className="max-w-screen-xl py-16 mx-auto px-16">
                    <motion.div
                        className="flex gap-8"
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
        </div>
    );
};

export default NewsAndNewsletterPage;
