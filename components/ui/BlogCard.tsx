"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// import { ArrowRightCircle } from "lucide-react";

export const BlogCard = ({
    item,
}: {
    item: {
        title: string;
        description: string;
        date: string;
        type: "blog" | "interview"; // Determines the navigation path
        thumbnail: string | StaticImageData;
    };
}) => {
    // Determine the correct page link based on type
    const pageLink =
        item.type === "blog"
            ? `/blog-and-interview/blog/${item.title
                  .replace(/[:\s]+/g, "-")
                  .toLowerCase()}`
            : `/interviews/${item.title.replace(/\s+/g, "-").toLowerCase()}`;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative max-w-lg group"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background shape */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#01748D] to-[#01748D]/70 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

            <Link href={pageLink} className=" relative">
                <div className="relative bg-white/95 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-300">
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#01748D] transform rotate-45 translate-x-10 -translate-y-10 z-10"></div>

                    {/* Date pill */}
                    <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-medium text-[#01748D] shadow-md backdrop-blur-sm">
                        {item.date}
                    </div>

                    {/* Image container with overlay */}
                    <div className=" overflow-hidden">
                        <div className=" inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <Image
                            src={item.thumbnail || "/placeholder.svg"}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110 brightness-75"
                        />

                        {/* Title overlay on image */}
                        {/* <h3 className="absolute bottom-4 hover:underline left-4 right-4 z-20 text-xl font-bold text-white transition-transform duration-300 group-hover:translate-y-1">
                            {item.title}
                        </h3> */}
                    </div>

                    {/* Content area */}
                    <div className="p-6 pt-5 relative">
                        {/* Description */}
                        <p className="text-2xl pb-4 transition-transform duration-300 group-hover:translate-y-1 text-[#01748D] mb-12 hover:underline text-justify">
                            {item.title}
                        </p>

                        {/* Read more button */}
                        <motion.div
                            className="absolute bottom-6 right-6 border px-4 py-2 bg-[#01748D] rounded-md text-white flex items-center gap-2 hover:bg-[#FFCE00] hover:text-[#01748D] transition-all duration-300"
                            animate={{ x: isHovered ? 0 : 5 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                        >
                            <span className=" font-bold">Explore</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                // className="text-[#01748D]"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
