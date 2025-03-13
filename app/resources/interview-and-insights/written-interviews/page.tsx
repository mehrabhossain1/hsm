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
import { FileText } from "lucide-react";

const writtenInterviews = [
  {
    title: "Paul Farmer’s Interview",
    url: "https://news.harvard.edu/gazette/story/2018/05/harvards-paul-farmer-on-traveling-the-world-tofight-inequality-in-health/",
  },
  {
    title: "Madhukar Pai on how the 'know-do' gap undermines health goals",
    url: "https://www.exemplars.health/stories/madhukar-pai-on-how-the-know-do-gap-undermineshealth-goals",
  },
  {
    title:
      "“Major Reforms Have Been Driven by Crisis” By Jeremy Farrar, Molly Galvin",
    url: "https://issues.org/jeremy-farrar-interview-wellcome-covid/?utm_source=chatgpt.com",
  },
  {
    title:
      "Interview with WHO Chief Scientist Dr. Soumya Swaminathan: Mobilizing Evidence in Health Emergencies",
    url: "https://www.who.int/news/item/07-11-2021-interview-with-who-chief-scientist-dr-soumyaswaminathan-on-mobilizing-evidence-in-health-emergencies?utm_source=chatgpt.com",
  },
  {
    title: "The Do’s and Don’ts of a Global Health Experience",
    url: "https://students-residents.aamc.org/getting-experience/do-s-and-don-ts-global-healthexperience-interview-jessica-evert-md?utm_source=chatgpt.com",
  },
  {
    title:
      "How the fight for global health lost steam — and how to get it back.",
    url: "https://www.vox.com/future-perfect/372672/bill-gates-interview-child-hunger-globalhealth?utm_source=chatgpt.com",
  },
  {
    title: "Bill Gates – The Vaccine Interview",
    url: "https://www.gavi.org/vaccineswork/bill-gates-vaccineinterview?gad_source=1&gclid=CjwKCAiAtNK8BhBBEiwA8wVt97_-FolI09hdiydsSdzJtRlOfYz0B8fEG8zQONlX86Gs16LvHx_xKBoCTccQAvD_BwE",
  },
  {
    title: "Designing A New National Center for Disease Control",
    url: "https://www.thinkglobalhealth.org/article/designing-new-national-center-disease-control",
  },
  {
    title: "Interview with Dr. Madhukar Pai",
    url: "https://healthenews.mcgill.ca/a-face-to-face-with-our-research-leaders-interview-with-drmadhukar-pai/",
  },
  {
    title: "Should We Be Panicked About Bird Flu?",
    url: "https://news.harvard.edu/gazette/story/2025/01/should-we-be-panicked-about-bird-flu-williambill-hanage/",
  },
  {
    title:
      "Harnessing Private Sector Collaboration for Universal Health Coverage",
    url: "https://www.ifc.org/en/interviews/2024/interview-with-david-clarke",
  },
  {
    title:
      "Q&A with Dean Andrea Baccarelli on His Deanship and Vision for Harvard Chan School",
    url: "https://hsph.harvard.edu/news/dean-andrea-baccarell",
  },
];

const WrittenInterviews = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 to-blue-500/40 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              📝 Written Interviews
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
              Written Interviews
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4 py-6 px-6 md:px-16 max-w-screen-xl mx-auto">
        {writtenInterviews.map((interview, index) => (
          <motion.a
            key={index}
            href={interview.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-50"
          >
            <FileText className="text-blue-500 w-6 h-6" />
            <span className="text-lg font-semibold text-blue-600 hover:underline">
              {interview.title}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default WrittenInterviews;
