"use client";
import {
  FaBook,
  FaHeartbeat,
  FaUniversity,
  FaInfoCircle,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";

const bookmarksData = [
  {
    title: "Overview",
    href: "/bookmarks/overview",
    description:
      "The Resources section aspire to be a repository of essential resources on health systems and global health.",
    Icon: FaBook,
  },
  {
    title: "Essential Reading List",
    href: "/bookmarks/essential-reading-list",
    description:
      "Reading preferences and needs vary widely yet certain resources are considered essential for global health professionals.",
    Icon: FaHeartbeat,
  },
  {
    title: "Reports",
    href: "/bookmarks/reports",
    description:
      "Reports are a fundamental output of interventions and initiatives, serving as a cornerstone for organizations in the global development sector.",
    Icon: FaUniversity,
  },
  {
    title: "General Reports",
    href: "/bookmarks/general-reports",
    description: "",
    Icon: FaInfoCircle,
  },
  {
    title: "Topic wise reports",
    href: "/bookmarks/topic-wise-reports",
    description: "",
    Icon: FaBook,
  },
  {
    title: "Books",
    href: "/bookmarks/books",
    description:
      "The PDF books provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems.",
    Icon: FaInfoCircle,
  },

  {
    title: "Policy Briefs",
    href: "/bookmarks/policy-briefs",
    description:
      "The section provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems. ",
    Icon: FaBook,
  },
  {
    title: "Presentations",
    href: "/bookmarks/presentations",
    description:
      "The section provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems. ",
    Icon: FaYoutube,
  },

  {
    title: "Interview and Insights",
    href: "/bookmarks/interview-and-insights",
    description:
      "This section features insightful interviews with global health and development professionals, covering critical issues, scholarly work, leadership, career development, and more. Explore and gain inspiration from their experiences and perspectives.",
    Icon: FaBook,
  },
  {
    title: "Recorded Interviews",
    href: "/bookmarks/recorded-interviews",
    description: "",
    Icon: FaInfoCircle,
  },
  {
    title: "Written Interviews ",
    href: "/bookmarks/written-interviews",
    description: "",
    Icon: FaUniversity,
  },
];

// Define animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const BookmarksPage = () => {
  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-5xl font-[1000] text-white">Bookmarks</h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto">
              The Global Health Bookmarks section indicates the resources either
              document, entities, courses, career, podcast and so on pertained
              with the global health and health systems are covered.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto py-16 px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bookmarksData.map((bookmark, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Adjusts when animation triggers
            transition={{ duration: 0.2, delay: index * 0.1 }} // Staggered effect
          >
            <BookMarksSectionCard
              title={bookmark.title}
              description={bookmark.description}
              href={bookmark.href}
              Icon={bookmark.Icon}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookmarksPage;
