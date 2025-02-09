"use client";

import { Users } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const VisionAndMissionPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start max-w-screen-xl mx-auto p-6">
      {/* Title Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Vision and Mission</h1>
      </div>

      {/* Icon Section */}
      <div className="flex justify-center items-center mb-8">
        <Users size={60} className="text-green-500" />
      </div>

      {/* Content Section */}
      <div className="space-y-8 text-xl/9 text-gray-700 max-w-4xl mx-auto ">
        <p>
          The vision of Health Systems Matter is to create an evidence-based
          platform that empowers emerging public health professionals to become
          informed and confident global health advocates, dedicated to promoting
          public health issues and contributing to global health.
        </p>

        <p>
          Health Systems Matter’s mission is to provide comprehensive, health
          system-focused resources from diverse organizations to enhance the
          capabilities of public health professionals and promote public health
          issues. The platform offers significant news, publications, and
          insights, both historical and contemporary, covering a broad spectrum
          of topics relevant to all public health enthusiasts.
        </p>

        <p>
          The goal of this initiative is to cultivate passionate and confident
          health systems advocates who recognize the importance of robust health
          systems and are committed to advancing global health outcomes.
        </p>
      </div>

      {/* Back Button Section */}
      <div className="mt-8 text-center">
        <motion.button
          className="px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          onClick={() => router.push("/about")}
        >
          Back to About Page
        </motion.button>
      </div>
    </div>
  );
};

export default VisionAndMissionPage;
