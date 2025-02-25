import { FaFilePdf, FaDownload, FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const EssentialReadingList = () => {
  // Sample PDF data
  const pdfs = [
    {
      title: "Public Health Guide",
      description:
        "An essential guide covering the basics of public health policies.",
      link: "/pdfs/public-health-guide.pdf",
    },
    {
      title: "Epidemiology Insights",
      description: "A comprehensive overview of epidemiology and its impact.",
      link: "/pdfs/epidemiology-insights.pdf",
    },
    {
      title: "Healthcare Systems Report",
      description: "An in-depth analysis of global healthcare systems.",
      link: "/pdfs/healthcare-systems-report.pdf",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 to-blue-500/40 flex items-center">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Essential Reading List
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
              Essential Reading
            </BreadcrumbPage>
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
              className="bg-white shadow-lg rounded-lg p-6 mb-6 flex items-center gap-4 border border-gray-200"
            >
              <FaFilePdf className="text-red-500 text-4xl" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {pdf.title}
                </h2>
                <p className="text-gray-700 text-sm">{pdf.description}</p>
              </div>
              <a
                href={pdf.link}
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-md transition duration-300"
              >
                <FaDownload /> Download
              </a>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Recommended Reads
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaBookOpen className="text-blue-600" />
              <Link
                href="/resources/reports/healthcare-trends"
                className="text-blue-700 hover:underline"
              >
                Healthcare Trends 2024
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaBookOpen className="text-blue-600" />
              <Link
                href="/resources/reports/global-research"
                className="text-blue-700 hover:underline"
              >
                Global Research Compilation
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <FaBookOpen className="text-blue-600" />
              <Link
                href="/resources/reports/medical-advancements"
                className="text-blue-700 hover:underline"
              >
                Medical Advancements Overview
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default EssentialReadingList;
