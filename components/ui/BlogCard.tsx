"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      ? `/blogs/${item.title.replace(/\s+/g, "-").toLowerCase()}`
      : `/interviews/${item.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="max-w-lg bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition duration-300"
    >
      <Link href={pageLink} className="block">
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
          {item.description}
        </p>

        <Link
          href={pageLink}
          className="inline-block mt-4 px-4 py-2 text-black bg-[#FEC53F] hover:bg-[#001844] hover:text-white rounded-lg font-medium transition duration-300"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};
