"use client";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

const Report = () => {
  const reports = [
    {
      title:
        "Risk and Vulnerability of Waste Workers During COVID-19 Pandemic in Five Major Cities of Bangladesh",
      year: "2020",
      link: "https://www.wateraid.org/bd/sites/g/files/jkxoof236/files/2020-09/Risk%20and%20vulnerability%20of%20waste%20workers%20during%20%20COVID-19%20pandemic%20in%20five%20major%20cities%20of%20Bangladesh_V4_16.08.2020%20%281%29%20%281%29%20%281%29.pdf",
    },
  ];

  return (
    <div className="pt-16">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-600 underline underline-offset-4 mb-8">
        Report
      </h3>

      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl mx-auto"
      >
        {reports.map((report, index) => (
          <motion.div
            key={index}
            whileHover={{ borderColor: "#FFCE00" }}
            className="flex items-center space-x-8 bg-white shadow-sm rounded-md p-4 border-l-4 border-red-500"
          >
            <FaFilePdf className="text-red-500 text-5xl flex-shrink-0" />
            <div className="w-full">
              {/* Clickable Title */}
              <a
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 hover:underline transition duration-200"
              >
                {report.title}
              </a>
              <p className="text-sm text-gray-600">Published: {report.year}</p>
              <a
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                View Report
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Report;
