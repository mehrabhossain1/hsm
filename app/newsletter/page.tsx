"use client";
import { FaBook, FaHeartbeat, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";
import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";

const bookmarksData = [
  {
    title: "Overview",
    href: "/newsletter/overview",
    description:
      "The Health Systems Matter Newsletter provides valuable insights and resources on global health, upcoming events, and career opportunities.",
    Icon: FaBook,
  },
  {
    title: "Subscribe for newsletter",
    href: "/newsletter/subscribe-for-newsletter",
    description:
      "If you’re interested in receiving updates on public health issues, events, blogs, and interviewsdirectly in your inbox, a single subscription is all you need. ",
    Icon: FaHeartbeat,
  },
  {
    title: "All previous issues",
    href: "/newsletter/all-previous-issues",
    description:
      "Explore our archive below to find all previous newsletters, neatly organized by month.  ",
    Icon: FaUniversity,
  },
];

// Define animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const NewsletterPage = () => {
  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[150px]  border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16 flex-wrap gap-6">
            <h1 className="text-5xl font-[1000] text-white">Newsletter</h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto py-16 px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

export default NewsletterPage;
