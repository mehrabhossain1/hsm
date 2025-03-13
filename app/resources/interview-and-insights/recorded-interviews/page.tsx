"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

import { motion } from "framer-motion";

const interviews = [
  {
    title: "A Global Health Conversation With Dr. Paul Farmer",
    url: "https://www.youtube.com/watch?v=tzYRXlSNWGk",
  },
  {
    title: "Dr. Anthony Fauci on Pandemics and Partisan Attacks",
    url: "https://www.youtube.com/watch?v=ny3rMwmp1kA",
  },
  {
    title: "Dr. Tedros Adhanom Ghebreyesus | TIME100 Talks",
    url: "https://www.youtube.com/watch?v=zMUh0ti5EzI",
  },
  {
    title: "Exclusive Interview with Dr. Margaret Chan",
    url: "https://www.youtube.com/watch?v=0qyt25k7Vd0",
  },
  {
    title: "Bloomberg Big Decisions: Dr. Paul Farmer",
    url: "https://www.youtube.com/watch?v=4-7P0_8WMAQ",
  },
  {
    title: "Dr. Richard Cash on Epidemics",
    url: "https://www.youtube.com/watch?v=YL7OUoJlNBw",
  },
  {
    title: "Interview with Tim Evans",
    url: "https://www.youtube.com/watch?v=XtnktEItFPA",
  },
  {
    title: "An Interview with Madhukar Pai",
    url: "https://www.youtube.com/watch?v=SkfIqKcpxxI",
  },
  {
    title:
      "Global Leader Interview: Richard Horton, Editor-in-Chief of The Lancet",
    url: "https://www.youtube.com/watch?v=FoWY1-BtcAQ",
  },
  {
    title:
      'Prof Devi Sridhar: "For the world the pandemic is going to go on for several years"',
    url: "https://www.youtube.com/watch?v=ZXP7WwXW5KA",
  },
  {
    title:
      "Health is Improving Worldwide, but We Need More Focus on the Ones Left Behind – with Peter Piot",
    url: "https://www.youtube.com/watch?v=dZftFN4Oi_Y",
  },
  {
    title: "Ending Polio for Good by Bill Gates",
    url: "https://www.youtube.com/playlist?list=PLxf-CDjxvNVqTTC53pTBsrNMFSykXiAS2",
  },
  {
    title: "Paul Farmer: Taking up the Challenge of Poverty",
    url: "https://www.youtube.com/watch?v=JwWT2WylbP8",
  },
  {
    title:
      "The Power of Partnership: A Discussion with Dr. Paul Farmer and John Green",
    url: "https://www.youtube.com/watch?v=V4gvZ5RdHso",
  },
  {
    title: "Dr. Gro Harlem Brundtland on Global Health Successes",
    url: "https://www.youtube.com/watch?v=dTXyZU_S_-w",
  },
  {
    title: "Who's Suffering the Most? | Dr. Paul Farmer |",
    url: "https://www.youtube.com/watch?v=JletQj_LT7g",
  },
  {
    title: "Global Health Diplomacy and Partnerships for Health",
    url: "https://www.youtube.com/watch?v=wnw5bIOmtLY",
  },
  {
    title: "Conversation Between Dr. Tahmeed Ahmed from icddr,b",
    url: "https://www.youtube.com/watch?v=He7bPbgAHUQ",
  },
  {
    title: "Repairing the World: A Conversation with Paul Farmer",
    url: "https://www.youtube.com/watch?v=uI5mouRRaEw",
  },
];

const RecordedInterviews = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 to-blue-500/40 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              🎥 Recorded Interviews
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb className="py-6 px-6 md:px-16 max-w-screen-xl mx-auto text-sm md:text-base">
        <BreadcrumbList className="flex flex-wrap gap-2">
          <BreadcrumbItem>
            <Link
              href="/"
              className="text-gray-700 hover:underline hover:text-blue-700"
            >
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-600" />
          <BreadcrumbItem>
            <Link
              href="/resources"
              className="text-gray-700 hover:underline hover:text-blue-700"
            >
              Resources
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-600" />
          <BreadcrumbItem>
            <Link
              href="/resources/interview-and-insights"
              className="text-gray-700 hover:underline hover:text-blue-700"
            >
              Interview and Insights
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-600" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-blue-800 font-semibold">
              Recorded Interviews
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 px-6 md:px-16 max-w-screen-xl mx-auto">
        {interviews.map((interview, index) => {
          const videoId = new URL(interview.url).searchParams.get("v");
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <a
                href={interview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline block mb-3"
              >
                {interview.title}
              </a>
              {videoId && (
                <iframe
                  className="w-full h-80 rounded-md"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={interview.title}
                  allowFullScreen
                ></iframe>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RecordedInterviews;
