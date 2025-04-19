"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const MoreAboutMe = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16">
        <div className="relative text-center py-10">
          {/* Decorative curved background */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-60 h-20 bg-gradient-to-r from-blue-100 via-sky-100 to-teal-100 rounded-full blur-xl opacity-70 scale-125"></div>
          </div>

          {/* Gradient Title Text */}
          <h2 className="relative text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 drop-shadow-sm">
            More About Me
          </h2>

          {/* Bouncing Arrow */}
          <motion.div
            className="mt-4 flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6 text-blue-500" />
          </motion.div>
        </div>

        <div className="mt-12 bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-10 text-gray-700 space-y-6">
          <h3 className="text-2xl font-bold text-blue-800 underline underline-offset-4">
            Career Profile
          </h3>

          <p className="text-justify">
            I am a{" "}
            <span className="font-semibold text-blue-800">
              public health policy and system strengthening professional
            </span>{" "}
            with over 12 years of progressive experience in program design,
            management, and implementation research across both national and
            international platforms. Most recently, I served as a{" "}
            <span className="font-medium text-green-700">
              Technical Advisor at Open Development
            </span>
            , a U.S.-based international organization, where I contributed to a
            global initiative. This project focuses on enhancing health systems
            through strategic policy reforms and regulatory innovations.
          </p>

          <p className="text-justify">
            My professional interests lie at the intersection of{" "}
            <span className="text-purple-700 font-medium">health systems</span>,{" "}
            <span className="text-orange-600 font-medium">
              public financial management
            </span>
            , <span className="text-teal-700 font-medium">policy analysis</span>
            ,{" "}
            <span className="text-blue-700 font-medium">
              public-private partnerships
            </span>
            ,{" "}
            <span className="text-indigo-600 font-medium">
              health-seeking behavior
            </span>
            ,{" "}
            <span className="text-green-700 font-medium">systems thinking</span>
            , and{" "}
            <span className="text-pink-700 font-medium">
              human-centered design
            </span>
            . I am particularly focused on leveraging these disciplines to
            inform and shape effective health policies that address the needs of
            populations in complex and rapidly urbanizing settings.
          </p>

          <p className="text-justify">
            I firmly believe that{" "}
            <span className="text-red-700 font-semibold">
              health interventions, in isolation, are insufficient
            </span>{" "}
            to achieve lasting transformation. As an advocate for holistic,
            system-based approaches, I actively engage in public health
            activism. My initiative,{" "}
            <span className="text-blue-700 font-semibold">
              Health Systems Matter
            </span>
            , reflects my commitment to contributing as a confident global
            health system professional while also supporting and complementing
            the growth of emerging professionals in the field. In parallel, I
            serve as the{" "}
            <span className="text-purple-700 font-semibold">
              Organizing Secretary
            </span>{" "}
            of the{" "}
            <span className="text-green-800 font-medium">
              Public Health Foundation of Bangladesh (PHFBD)
            </span>
            , a leading institution dedicated to advancing evidence-informed
            public health practices and fostering national dialogue on emerging
            health issues.
          </p>

          <p className="text-justify">
            Through my multi-faceted roles, I strive to leverage{" "}
            <span className="text-teal-700 font-semibold">evidence</span>,{" "}
            <span className="text-indigo-700 font-semibold">
              systems thinking
            </span>
            , and{" "}
            <span className="text-blue-600 font-semibold">
              cross-sectoral collaboration
            </span>{" "}
            to address pressing health challenges and co-create sustainable,{" "}
            <span className="text-green-700 font-semibold">
              people-centered solutions
            </span>{" "}
            that leave a lasting societal impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
