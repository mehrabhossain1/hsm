"use client";

import { motion } from "framer-motion";
// import { FaBriefcase } from "react-icons/fa";

const CareerTrajectory = () => {
  const experiences = [
    {
      title: "Technical Advisor",
      company: "Open Development",
      date: "January 2023 – March 2025",
    },
    {
      title: "Senior Program Analyst",
      company: "ThinkWell Global",
      date: "November 2021 – December 2022",
    },
    {
      title: "Program Officer",
      company: "WaterAid",
      date: "August 2018 – September 2020",
    },
    {
      title: "Senior Program Coordinator",
      company: "Sajida Foundation",
      date: "February 2017 – July 2018",
    },
    {
      title: "Project Coordinator",
      company: "Sajida Foundation",
      date: "March 2015 – January 2017",
    },
    {
      title: "Research Officer",
      company: "icddr,b",
      date: "January 2015 – February 2015",
    },
    {
      title: "District Coordinator",
      company: "NGO Forum for Public Health",
      date: "November 2012 – July 2013",
    },
    {
      title: "Research Assistant",
      company:
        "Bangladesh Agricultural Resource Center for Indigenous Knowledge (BARCIK)",
      date: "February 2011 – January 2012",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-800 to-gray-900 py-20 px-6 sm:px-10 lg:px-20 text-white">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold">Career Trajectory</h3>
        <div className="mt-3 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm font-semibold shadow-md">
          12+ Years of Experience
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-6 relative border border-teal-600 bg-slate-800/50 hover:bg-slate-700 transition-all duration-300 rounded-lg shadow-lg overflow-hidden"
          >
            {/* <div className="absolute -left-[36px] z-10 top-3 bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full shadow-md border-4 border-slate-900">
              <FaBriefcase className="text-white text-xl" />
            </div> */}
            <div className="p-6 pl-16">
              <h4 className="text-lg md:text-xl font-semibold text-white">
                {exp.title},{" "}
                <span className="text-teal-300">{exp.company}</span>
              </h4>
              <p className="text-sm text-gray-300 mt-1">{exp.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerTrajectory;
