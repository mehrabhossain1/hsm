"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ActivitiesAndApproachPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start max-w-screen-xl mx-auto p-6">
      {/* Title Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Activities and Approach
        </h1>
      </div>

      {/* Icon Section */}
      <div className="flex justify-center items-center mb-8">
        <BookOpen size={60} className="text-yellow-500" />
      </div>

      {/* Content Section */}
      <div className="space-y-8 text-xl/9 text-gray-700 max-w-4xl mx-auto">
        <p>
          In order to be aligned with the vision and mission of Health Systems
          Matter, the specific activities are as follows:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>Showcasing health systems and global health documents daily.</li>
          <li>Generating and regenerating demand for impactful documents.</li>
          <li>Disseminating major public health events and milestones.</li>
          <li>
            Promoting pages and events focused on health systems and global
            health.
          </li>
          <li>
            Introducing individuals in the health systems field dedicated to
            enhancing global health.
          </li>
          <li>Highlighting organizations working on public health agendas.</li>
        </ul>

        <p>
          To carry out these activities, the site systematically documents and
          showcases resources, creatively posts on social media to reach users,
          ensuring proper credit to organizations. The focus is on topics rather
          than organizations, promoting news without bias or political agenda.
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

export default ActivitiesAndApproachPage;
