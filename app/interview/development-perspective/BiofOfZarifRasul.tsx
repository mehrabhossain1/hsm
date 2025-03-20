"use client";

import { useState } from "react";
// import { motion } from "framer-motion";
import Link from "next/link";
// import Image from "next/image";

const BioOfZarif = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="max-w-screen-lg mx-auto pt-16 py-12 relative bg-teal-50">
            {/* Title */}
            <h2
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer text-3xl md:text-4xl font-extrabold text-gray-800 text-center "
            >
                Bio of Dr. Zarif Rasul
                <span className="block w-24 h-1 bg-[#FFCE00] mx-auto mt-2 rounded-full"></span>
            </h2>

            {/* Clickable Image */}
            {/* <div
        className="max-w-xl mx-auto my-4 h-[400px] relative cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Image
          src="/interview/madhukar.jpg"
          alt="Dr. Madhukar Pai"
          layout="fill"
          objectFit="cover"
          className={`transition-all duration-500 ${
            isExpanded ? "brightness-100" : "brightness-75"
          }`}
        />
      </div> */}

            {/* Collapsible Bio Content */}
            {/* <motion.div
                initial={false}
                animate={{
                    height: isExpanded ? "auto" : "150px",
                    opacity: isExpanded ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden relative max-w-screen-md mx-auto"
            >
                <div className="py-6 font-medium">
                    <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
                        An environmental economist by training, Zarif Rasul is a
                        Water Specialist at the World Bank. He previously worked
                        in the domains of public infrastructure finance,
                        economic consulting, and water and sanitation policies
                        in Bangladesh. His interests lie in the sustainable use
                        of limited resources to enhance human well-being. 
                    </p>
                </div>

       
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent"></div>
                )}
            </motion.div> */}
            <div className="overflow-hidden relative max-w-screen-md mx-auto">
                <div className="py-6 font-medium">
                    <p className=" text-gray-700 mt-2 leading-relaxed text-justify">
                        An environmental economist by training, Zarif Rasul is a
                        Water Specialist at the World Bank. He previously worked
                        in the domains of public infrastructure finance,
                        economic consulting, and water and sanitation policies
                        in Bangladesh. His interests lie in the sustainable use
                        of limited resources to enhance human well-being. 
                    </p>
                </div>
            </div>
            {/* Toggle Button */}
            <div className="flex justify-center my-4 ">
                <Link
                    href="/interview/public-health-insights"
                    // onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 font-bold text-xl bg-[#FFCE00] text-black px-4 py-2 hover:text-white hover:bg-[#2D8CBB]   transition ease-in-out duration-200"
                >
                    {isExpanded ? "Next Interview" : "Next Interview"}
                </Link>
            </div>
        </div>
    );
};

export default BioOfZarif;
