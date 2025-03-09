import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
// import { FaBook, FaFileAlt, FaClipboardList } from "react-icons/fa";

const ResourcesOverview = () => {
  return (
    <div className="">
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800/90 to-blue-500/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex  justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl text-center font-bold text-white ">
              Overview
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumb className="py-4 px-16 max-w-screen-xl mx-auto border-b">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/" className="text-gray-500">
              HOME
            </Link>
          </BreadcrumbItem>

          <BreadcrumbSeparator className="text-gray-600" />
          <BreadcrumbItem>
            <Link href="/resources-and-bookmarks" className="text-gray-500">
              RESOURCES & BOOKMARKS
            </Link>
          </BreadcrumbItem>

          <BreadcrumbSeparator className="text-gray-600" />
          <BreadcrumbItem>
            <Link href="/resources" className="text-gray-600 ">
              Resources
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-600" />
          <BreadcrumbItem>
            <Link
              href="/resources/overview"
              className="text-gray-800 underline"
            >
              Overview
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Content Section with Sidebar */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-16 pt-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Content Section */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Image Section */}
              <div className="w-full">
                <Image
                  src="https://img.freepik.com/free-photo/business-work-concept_1388-69.jpg?t=st=1741539768~exp=1741543368~hmac=f9cfaefc1f6459c616b427197be993fbb23876f5cdaa641d7fe9f50ab34a8335&w=1060"
                  alt="Overview"
                  width={1000}
                  height={300}
                  className="w-full h-64 brightness-75 object-cover mix-blend-darken"
                />
              </div>

              {/* Description Section */}
              <div className="w-full text-gray-700 text-justify">
                <p className="text-base leading-7">
                  The Resources section aspires to be a repository of essential
                  resources on health systems and global health. By compiling
                  major reports, books, groundbreaking publications, significant
                  policy briefs and presentations, thought-provoking interviews,
                  and insightful analyses, it supports public health
                  professionals and beyond in their pursuit of knowledge and
                  professional development. Resources are organized by topic to
                  facilitate systematic access. Each resource is sourced from
                  esteemed organizations, with due credit given to acknowledge
                  their invaluable contributions.
                </p>
              </div>
            </div>

            {/* Right Featured Resources Section */}
            <div className="bg-gray-100 p-6 border border-gray-200 shadow-sm self-start">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Featured Resources
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/resources/essential-reading-list"
                    className="text-blue-800 hover:text-[#F18A00] transition"
                  >
                    📖 Essential Reading List
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resource/reports"
                    className="text-blue-800 hover:text-[#F18A00] transition"
                  >
                    📑 Reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/books"
                    className="text-blue-800 hover:text-[#F18A00] transition"
                  >
                    📚 Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/policy-briefs"
                    className="text-blue-800 hover:text-[#F18A00] transition"
                  >
                    📜 Policy Briefs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/presentations"
                    className="text-blue-800 hover:text-[#F18A00] transition"
                  >
                    📊 Presentations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/interview-and-insights"
                    className="text-blue-800 hover:text-[#F18A00] transition"
                  >
                    🎙️ Interview and Insights
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesOverview;
