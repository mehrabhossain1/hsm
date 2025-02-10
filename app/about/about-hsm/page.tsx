/* eslint-disable react/no-unescaped-entities */
"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const AboutHSM = () => {
  const router = useRouter();

  return (
    <div className="max-w-screen-xl mx-auto px-8 min-h-dvh">
      <div className="min-h-screen flex flex-col items-center justify-start max-w-screen-xl mx-auto p-6">
        {/* Title Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800">About HSM</h1>
        </div>

        {/* Icon Section */}
        <div className="flex justify-center items-center mb-8">
          <Globe size={60} className="text-blue-500" />
        </div>

        {/* Content Section */}
        <div className="space-y-8 text-xl/9 text-gray-700 max-w-4xl mx-auto">
          <p>
            "Information is power" and "Evidence lies at the heart of public
            health policy."
          </p>
          <p>
            Inspired by the principles of valuing information and evidence,
            Health Systems Matter (HSM) offers essential resources on health
            systems, public health events, and career opportunities. HSM serves
            as an independent, comprehensive global health resource, providing
            updates on public health issues and career opportunities. The site
            hunts crucial reports, current information, and scholarly articles
            from global entities, ensuring proper referencing.
          </p>

          <p>
            By subscribing or visiting regularly, users can stay informed about
            a wide range of documents and news related to global health issues
            from various organizations and life-changing career opportunities.
          </p>

          <div className="space-y-4">
            <p>The HSM site is useful for two primary reasons:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Comprehensive Content:</strong> The site offers
                extensive coverage of impactful global health issues,
                incorporating information from various organizations and
                platforms, as well as career opportunities worldwide.
              </li>
              <li>
                <strong>Consistent Updates:</strong> HSM ensures everyday social
                media updates, adhering to a committed agenda to keep its
                audience well-informed and engaged.
              </li>
            </ul>
          </div>

          <p>
            Health Systems Matter, launched on social media (LinkedIn, and
            Facebook use hyperlink) on August 09, 2024, whereas this website was
            launched on February 20, 2025, to systematically preserve all the
            posted resources of the initiative for its users.
          </p>

          <p>
            The site, passionately maintained by a passionate health system
            professional{" "}
            <a
              href="https://example.com/about-sizear"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monaemul Islam Sizear
            </a>
            , hopes to enlighten many and foster impactful careers.
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
    </div>
  );
};

export default AboutHSM;
