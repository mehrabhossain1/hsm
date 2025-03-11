"use client";

import { motion } from "framer-motion";

const Blog = () => {
  const blogs = [
    {
      year: "2024",
      title: "Building a Sustainable Health Sector Ecosystem",
      organization: "OPEN Development",
      titleLink:
        "https://www.opendevelopment.co/latest/building-a-sustainable-health-sector-ecosystem", // Update this with the actual blog title link
    },
    {
      year: "2024",
      title:
        "Increasing Impact of Climate Change on Tuberculosis in Bangladesh",
      organization: "PHFBD",
      titleLink:
        "https://publichealthfoundation.org.bd/increasing-impact-of-climate-change-on-tuberculosis-in-bangladesh/", // Update this with the actual blog title link
    },
  ];

  return (
    <div className="pt-16">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-600 underline underline-offset-4 mb-8">
        Blog
      </h3>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            whileHover={{ borderColor: "#FFCE00" }}
            className="flex items-start space-x-4 bg-white shadow-sm rounded-md p-4 border-l-4 border-green-500"
          >
            <div className="w-1/4">
              <h3 className="text-lg font-semibold text-gray-900">
                {blog.year}
              </h3>
            </div>
            <div className="w-3/4">
              <a
                href={blog.titleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-semibold text-gray-800 hover:underline hover:bg-green-500 hover:text-white transition duration-200  rounded"
              >
                {blog.title}
              </a>
              <p className="text-gray-600 text-sm">{blog.organization}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;
