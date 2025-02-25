import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { FaBook, FaFileAlt, FaClipboardList } from "react-icons/fa";

const ResourcesOverview = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800/90 to-blue-500/40 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
              Overview
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
            <BreadcrumbPage className="text-blue-800 font-semibold">
              Overview
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mt-5 mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light mb-6 text-justify">
            The <span className="font-semibold">Resources</span> section aims to
            be a valuable hub for health systems and global health resources. By
            curating essential reports, books, policy briefs, and insightful
            analyses, it supports public health professionals and beyond in
            their pursuit of knowledge and development.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-light mb-6 text-justify">
            Resources are systematically categorized to ensure easy access. Each
            resource is credited to its respective organization, acknowledging
            their valuable contributions to the field.
          </p>

          {/* Call to Action */}
          <div className="text-center mt-10">
            <Link
              href="/resources"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Explore Resources
            </Link>
          </div>
        </div>

        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Featured Resources
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaBook className="text-blue-600" />
              <Link
                href="/resources/report-1"
                className="text-blue-700 hover:underline"
              >
                Global Health Report 2024
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaFileAlt className="text-blue-600" />
              <Link
                href="/resources/ebook"
                className="text-blue-700 hover:underline"
              >
                Essential Public Health eBook
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaClipboardList className="text-blue-600" />
              <Link
                href="/resources/policy-brief"
                className="text-blue-700 hover:underline"
              >
                Policy Brief: Healthcare Access
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default ResourcesOverview;
