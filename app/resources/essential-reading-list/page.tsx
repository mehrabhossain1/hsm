import { FaFilePdf, FaDownload, FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const EssentialReadingList = () => {
  // Sample PDF data
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
    // {
    //   title: "Epidemiology Insights",
    //   description: "A comprehensive overview of epidemiology and its impact.",
    //   link: "/pdfs/epidemiology-insights.pdf",
    // },
    // {
    //   title: "Healthcare Systems Report",
    //   description: "An in-depth analysis of global healthcare systems.",
    //   link: "/pdfs/healthcare-systems-report.pdf",
    // },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 to-blue-500/40 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-4xl font-bold text-white">
              Essential Reading List
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      {/* Breadcrumbs */}
      <Breadcrumb className="py-4 px-16 max-w-screen-xl mx-auto">
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
              href="/resources/essential-reading-list"
              className="text-gray-800 underline"
            >
              Essential Reading List
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {pdfs.map((pdf, index) => (
            <div
              key={index}
              className="bg-white  p-6 mb-2 flex items-center gap-4 border border-gray-200"
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
                  <p className="text-xl font-semibold text-gray-900 hover:underline">
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

        {/* Sidebar Section */}
        <aside className="w-full md:w-1/4 bg-white shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Featured Resources
          </h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="/resources/overview"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                🌎 Overview
              </Link>
            </li>
            <li>
              <Link
                href="/resource-2"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                📑 Reports
              </Link>
            </li>
            <li>
              <Link
                href="/resource-3"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                📚 Books
              </Link>
            </li>
            <li>
              <Link
                href="/resource-4"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                📜 Policy Briefs
              </Link>
            </li>
            <li>
              <Link
                href="/resource-5"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                📊 Presentations
              </Link>
            </li>
            <li>
              <Link
                href="/resource-5"
                className="text-blue-700 hover:text-[#F18A00] transition"
              >
                🎙️ Interview and Insights
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default EssentialReadingList;
