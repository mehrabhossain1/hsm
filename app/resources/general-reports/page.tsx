import { FaFilePdf, FaDownload } from "react-icons/fa";
import Link from "next/link";

const GeneralReports = () => {
  const reports = [
    {
      title: "Asian Development Outlook-2024",
      // description:
      //   "A comprehensive review of this year's key developmental progress.",
      link: "/public/resources/GeneralReports/Asian Development Outlook-2024.pdf",
    },
    {
      title: "Global Impact Report",
      // description:
      //   "An analysis of global trends and their impact on various sectors.",
      link: "/public/resources/GeneralReports/Child, Food and Nutrition.pdf",
    },
    {
      title: "Policy Trends and Analysis",
      // description: "Insights into emerging policy trends shaping the future.",
      link: "/public/resources/GeneralReports/Cost Effectiveness of Health Aid 2024.pdf",
    },
  ];

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

      {/* Content Section with Sidebar */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 py-10">
        {/* Main Content */}
        <div className="flex-1">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md mb-6 flex items-center gap-4 border border-gray-200"
            >
              <FaFilePdf className="text-red-600 text-3xl" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {report.title}
                </h3>
                {/* <p className="text-sm text-gray-600">{report.description}</p> */}
              </div>
              <Link
                href={report.link}
                download
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
              >
                <FaDownload /> Download
              </Link>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Recommended Reports
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/resources/reports/sustainability"
                className="text-blue-700 hover:underline"
              >
                Sustainability Report 2024
              </Link>
            </li>
            <li>
              <Link
                href="/resources/reports/economic-trends"
                className="text-blue-700 hover:underline"
              >
                Economic Trends and Forecasts
              </Link>
            </li>
            <li>
              <Link
                href="/resources/reports/healthcare-insights"
                className="text-blue-700 hover:underline"
              >
                Healthcare Insights & Analysis
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default GeneralReports;
