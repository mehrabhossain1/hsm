"use client";

// import { motion } from "framer-motion";

// import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { FaFilePdf, FaDownload, FaBookOpen } from "react-icons/fa";

const pdfs = [
  {
    title: "Asian Development Outlook-2024",
    filePath: "/resources/GeneralReports/Asian Development Outlook-2024.pdf",
  },
  {
    title: "Child, Food and Nutrition",
    filePath: "/resources/GeneralReports/Child, Food and Nutrition.pdf",
  },
  {
    title: "Cost Effectiveness of Health Aid 2024",
    filePath:
      "/resources/GeneralReports/Cost Effectiveness of Health Aid 2024.pdf",
  },
  {
    title: "Finance and Prosperity 2024",
    filePath: "/resources/GeneralReports/Finance and Prosperity 2024.pdf",
  },
  {
    title: "Global Tuberculosis Report 2024",
    filePath: "/resources/GeneralReports/Global Tuberculosis Report 2024.pdf",
  },
  {
    title: "Health & Climate Change_Lancet Countdown 2024",
    filePath:
      "/resources/GeneralReports/Health & Climate Change_Lancet Countdown 2024.pdf",
  },
  {
    title: "Humanitarian Action Overview 2024",
    filePath: "/resources/GeneralReports/Humanitarian Action Overview 2024.pdf",
  },
  {
    title: "Impact of Climate Change on Human Health_2024",
    filePath:
      "/resources/GeneralReports/Impact of Climate Change on Human Health_2024.pdf",
  },
  {
    title: "International Debt Report 2024",
    filePath: "/resources/GeneralReports/International Debt Report 2024.pdf",
  },
  {
    title: "Pathways out of the Polycrisis",
    filePath: "/resources/GeneralReports/Pathways out of the Polycrisis.pdf",
  },
  {
    title: "Sustainable Development Report 2024",
    filePath:
      "/resources/GeneralReports/Sustainable Development Report 2024.pdf",
  },
  {
    title: "The Global Risks Report 2024",
    filePath: "/resources/GeneralReports/The Global Risks Report 2024.pdf",
  },
  {
    title: "World Bank in Bangladesh 2024",
    filePath: "/resources/GeneralReports/World Bank in Bangladesh 2024.pdf",
  },
  {
    title: "World Development Report 2024",
    filePath: "/resources/GeneralReports/World Development Report 2024.pdf",
  },
  {
    title: "World Hapiness Report 2024",
    filePath: "/resources/GeneralReports/World Hapiness Report 2024.pdf",
  },
  {
    title: "World Health Statistics 2024",
    filePath: "/resources/GeneralReports/World Health Statistics 2024.pdf",
  },
];

const GeneralReports = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 to-blue-500/40 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              General Reports
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
              href="/resources/reports"
              className="text-gray-700 hover:underline hover:text-blue-700"
            >
              Reports
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-600" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-blue-800 font-semibold">
              General Reports
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light mb-6 text-justify">
            Reports are a fundamental output of interventions and initiatives,
            serving as a cornerstone for organizations in the global development
            sector. Given the mandatory and periodic nature of these
            publications, the volume of reports continues to grow rapidly. This
            section organizes reports by topic, including organizational
            reports, key policy briefs, and presentations, providing users with
            a systematic and accessible resource.
          </p> */}

          {/* general and topic wise reports */}

          <div className="max-w-screen-xl mx-auto px-6 md:px-16 pb-16 flex flex-col md:flex-row gap-8">
            {/* Main Content */}

            <div className="flex-1">
              {pdfs.map((pdf, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm p-6 mb-2 flex items-center gap-4 border border-gray-200"
                >
                  <p>{index + 1}.</p>{" "}
                  <FaFilePdf className="text-red-500 text-4xl" />
                  <div className="flex-1">
                    {/* Clickable Title with Hover Underline */}
                    <a
                      href={pdf.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-base font-semibold text-gray-900 hover:underline">
                        {pdf.title}
                      </p>
                    </a>
                    {/* <p className="text-gray-700 text-sm">{pdf.description}</p> */}
                  </div>
                  {/*  */}
                  {/* Read Button */}
                  <a
                    href={pdf.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium text-sm px-4 py-2 rounded-md transition duration-300"
                  >
                    <FaBookOpen /> Read
                  </a>
                  {/* Download Button */}
                  <a
                    href={pdf.filePath}
                    download
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-md transition duration-300"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralReports;
