"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGooglescholar, SiResearchgate, SiOrcid } from "react-icons/si";

const AreaOfFocus = () => {
  return (
    <div className="bg-[#6ACBD4]/10">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 py-16">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-600  underline underline-offset-4">
          Area of Focus and Research
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 bg-transparent  rounded-lg p-8 border-l-4 border-[#6ACBD4]"
        >
          <div className="flex items-center justify-center mb-4 gap-5 flex-row-reverse ">
            {/* <FaUniversity className="text-green-800 text-8xl" /> */}
            <Image
              src="https://img.freepik.com/free-vector/editorial-commission-concept-illustration_114360-7751.jpg"
              alt="research"
              width={500}
              height={500}
              className="mix-blend-darken"
            />
            {/* <h3 className="text-xl font-semibold text-gray-900">
            Evidence-Based Research & Advocacy
          </h3> */}
            <p className="text-gray-500 leading-relaxed text-justify max-w-3xl mx-auto text-lg">
              My research and professional interests encompass health systems
              and financing, environmental health, and health-seeking behavior.
              In the context of growing urbanization and increasingly complex
              health service delivery, my work emphasizes public financial
              management, the role of the private sector, and human-centered
              design. These elements are critical for rethinking and formulating
              comprehensive urban health policies aimed at building sustainable
              and resilient health systems. I also engage in research to
              understand complex health sector challenges and generate evidence
              to support government initiatives through targeted advocacy.&quot;
            </p>
          </div>
        </motion.div>

        {/* Research Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Connect with My Research
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://scholar.google.com/citations?user=D34eyg4AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              <SiGooglescholar className="text-xl" />
              <span>Google Scholar</span>
            </a>
            <a
              href="https://www.researchgate.net/profile/Monaemul-Sizear"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
            >
              <SiResearchgate className="text-xl" />
              <span>ResearchGate</span>
            </a>
            <a
              href="https://orcid.org/0000-0001-6478-9512"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
            >
              <SiOrcid className="text-xl" />
              <span>ORCID</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AreaOfFocus;
