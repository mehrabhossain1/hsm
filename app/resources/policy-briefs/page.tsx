"use client";

// import { motion } from "framer-motion";

// import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { FaFilePdf, FaDownload, FaBookOpen } from "react-icons/fa";

const pdfs = [
  {
    title: "A System of Health Accounts 2011",
    filePath:
      "/resources/Essential-Reading-List/A-System-of-Health-Accounts-2011.pdf",
  },
  {
    title: "Alma Ata Conference Report on PHC_WHO 1978",
    filePath:
      "/resources/Essential-Reading-List/Alma-Ata-Conference-Report-on-PHC_WHO-1978.pdf",
  },
  {
    title: "Basic Epidemiology_WHO 2006",
    filePath:
      "/resources/Essential-Reading-List/Basic Epidemiology_WHO 2006.pdf",
  },
  {
    title: "Delivering Quality Health Services_WHO 2018",
    filePath:
      "/resources/Essential-Reading-List/Delivering Quality Health Services_WHO 2018.pdf",
  },
  {
    title: "Everybody's Business- Strengthening Health Systems_WHo 2007",
    filePath:
      "/resources/Essential-Reading-List/Everybody's Business- Strengthening Health Systems_WHo 2007.pdf",
  },
  {
    title: "Guns, Germs and Steel - Jared Diamond_1997",
    filePath:
      "/resources/Essential-Reading-List/Guns, Germs and Steel - Jared Diamond_1997.pdf",
  },
  {
    title: "Health Systems - Improving Performance_WHO_2000",
    filePath:
      "/resources/Essential-Reading-List/Health Systems - Improving Performance_WHO_2000.pdf",
  },
  {
    title: "Health Systems Building Blocks_WHO 2010",
    filePath:
      "/resources/Essential-Reading-List/Health Systems Building Blocks_WHO 2010.pdf",
  },
  {
    title: "Health Systems Financing_WHO 2010",
    filePath:
      "/resources/Essential-Reading-List/Health Systems Financing_WHO 2010.pdf",
  },
  {
    title: "International Profiles of Health Care Systems_2020",
    filePath:
      "/resources/Essential-Reading-List/International Profiles of Health Care Systems_2020.pdf",
  },
  {
    title: "Investing in Health_WDR 1993",
    filePath:
      "/resources/Essential-Reading-List/Investing in Health_WDR 1993.pdf",
  },
  {
    title: "Now More Than Ever-PHC_WHO 2008",
    filePath:
      "/resources/Essential-Reading-List/Now More Than Ever-PHC_WHO 2008.pdf",
  },
  {
    title: "Tracking Universal health Coverage_WHO 2015",
    filePath:
      "/resources/Essential-Reading-List/Tracking Universal health Coverage_WHO 2015.pdf",
  },
];

const PolicyBriefs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 to-blue-500/40 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Policy Briefs
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
              href="/resources/policy-briefs"
              className="text-gray-700 hover:underline hover:text-blue-700"
            >
              Policy Briefs
            </Link>
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator className="text-gray-600" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-blue-800 font-semibold">
              General Reports
            </BreadcrumbPage>
          </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light mb-6 text-justify">
            The section provided are significant works by renowned public health
            professionals, offering valuable insights into global health and
            health systems.
          </p>

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

export default PolicyBriefs;
