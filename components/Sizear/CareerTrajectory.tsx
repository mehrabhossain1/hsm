"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const CareerTrajectory = () => {
  //   const data = [
  //     {
  //       title: "January 2023 – Present",
  //       content: (
  //         <div>
  //           <p className="text-neutral-600  text-xl font-medium mb-8">
  //             Technical Advisor, Open Development
  //           </p>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: "November 2021 – December 2022 ",
  //       content: (
  //         <div>
  //           <p className="text-neutral-600  text-xl font-medium mb-8">
  //             Senior Program Analyst, ThinkWell Global
  //           </p>
  //         </div>
  //       ),
  //     },
  //   ];

  const experiences = [
    {
      title: "Technical Advisor",
      company: "Open Development",
      date: "January 2023 – Present",
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
      company: "BARCIK",
      date: "February 2011 – January 2012",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 pb-16">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-600  underline underline-offset-4 mb-4">
        Career Trajectory / Employment Journey
      </h3>

      <div className="relative max-w-3xl mx-auto pt-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-6 relative border border-blue-500 hover:border-b-2 hover:border-r-2 shadow-sm rounded-md"
          >
            <div className="absolute -left-[37px] top-2 bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full">
              <FaBriefcase className="text-white text-xl" />
            </div>
            <div className="bg-slate-50 p-8 shadow-sm rounded-md flex justify-between">
              <h3 className="text-lg font-semibold text-gray-600">
                {exp.title}, {exp.company}
              </h3>
              {/* <p className="text-gray-700 text-xl">{exp.company}</p> */}
              <p className=" text-gray-500 text-lg">{exp.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerTrajectory;
