"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

export const BlogCard = ({
  item,
}: {
  item: {
    title: string;
    description: string;
    date: string;
    type: "blog" | "interview"; // Determines the navigation path
    thumbnail: string;
  };
}) => {
  // Determine the correct page link based on type
  const pageLink =
    item.type === "blog"
      ? `/blog-and-interview/blog/${item.title
          .replace(/[:\s]+/g, "-")
          .toLowerCase()}`
      : `/interviews/${item.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <motion.div className="max-w-lg overflow-hidden border rounded-sm hover:border-[#156DF9] transition-all duration-300">
      <Link href={pageLink} className="block">
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white hover:underline hover:text-[#156DF9]">
            {item.title}
          </h3>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
            {item.date}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
            {item.description}
          </p>

          <button className="mt-5 text-sm text-black font-bold flex items-center text-left hover:text-[#156DF9] hover:underline">
            Read More{" "}
            <ArrowRightCircle className="ml-2 size-4 bg-[#156DF9] rounded-full text-white" />
          </button>
        </div>
      </Link>
    </motion.div>
  );
};
