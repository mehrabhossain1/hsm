"use client";

// import { motion } from "framer-motion";

// import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    //   BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { FaFilePdf, FaDownload, FaBookOpen } from "react-icons/fa";

const pdfs = [
    {
        title: "Bangladesh Health Financing Context Analysis revised October 2019 (clean)",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Bangladesh Health Financing Context Analysis revised October 2019 (clean).docx",
    },
    {
        title: "Budget Matters for Health 2018_WHO",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Budget Matters for Health 2018_WHO.pdf",
    },
    {
        title: "Costing of Covid-19 Vaccine in bangladesh - TW_2024",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Costing of Covid-19 Vaccine in bangladesh - TW_2024.pdf",
    },
    {
        title: "Crowd Funding in Health Research 2021_WHO",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Crowd Funding in Health Research 2021_WHO.pdf",
    },
    {
        title: "Domestic Co-financing policy in Global health 2024_CGD",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Domestic Co-financing policy in Global health 2024_CGD.pdf",
    },
    {
        title: "Financing Global Health 2021",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Financing Global Health 2021.pdf",
    },
    {
        title: "Financing TB -USAID 2022",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Financing TB -USAID 2022.pdf",
    },
    {
        title: "Financing the Future- 2024_IDA",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Financing the Future- 2024_IDA.pdf",
    },
    {
        title: "Global Expenditure on Health 2021_WHO",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Global Expenditure on Health 2021_WHO.pdf",
    },
    {
        title: "Health care Financing in LMICs",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health care Financing in LMICs.pdf",
    },
    {
        title: "Health Financing Challenges for NCDs 2024",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health Financing Challenges for NCDs 2024.pdf",
    },
    {
        title: "Health Financing in a Time of Global Shock 2023-WB",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health Financing in a Time of Global Shock 2023-WB.pdf",
    },
    {
        title: "Health Financing in Times of Uncertainty 2021_WHO",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health Financing in Times of Uncertainty 2021_WHO.pdf",
    },
    {
        title: "Health Financing Policy 2016_WB",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health Financing Policy 2016_WB.pdf",
    },
    {
        title: "Health Financing Policy Guidance 2008_WHO",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health Financing Policy Guidance 2008_WHO.pdf",
    },
    {
        title: "Health Financing Practitionars' Guide 2006_WB",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health Financing Practitionars' Guide 2006_WB.pdf",
    },
    {
        title: "Health Financing Progress Matrix of Bangladesh 2021_WHO",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health Financing Progress Matrix of Bangladesh 2021_WHO.pdf",
    },
    {
        title: "Health-Financing Designing 2001_DFID",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health-Financing Designing 2001_DFID.pdf",
    },
    {
        title: "Health-Financing Trends in Sub-Saharan Africa 2012_OPM",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Health-Financing Trends in Sub-Saharan Africa 2012_OPM.pdf",
    },
    {
        title: "National Health Financing Strategy 2017_WHO",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/National Health Financing Strategy 2017_WHO.pdf",
    },
    {
        title: "Political Economy Analysis for Health Financing - 2024_WHO",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Political Economy Analysis for Health Financing - 2024_WHO.pdf",
    },
    {
        title: "Public health Expenditure Review of Bangladesh- HEU_2021",
        filePath:
            "/resources/TopicWiseReports/Health-Financing/Public health Expenditure Review of Bangladesh- HEU_2021.pdf",
    },
];

const HealthFincancing = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Title Section */}
            <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/40 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                            Health Financing
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
                        <Link
                            href="/resources-and-bookmarks"
                            className="text-gray-500"
                        >
                            RESOURCES & BOOKMARKS
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator className="text-gray-600" />
                    <BreadcrumbItem>
                        <Link href="/resources" className="text-gray-500">
                            Resources
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-600" />
                    <BreadcrumbItem>
                        <Link
                            href="/resources/reports"
                            className="text-gray-500 "
                        >
                            Reports
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-600" />
                    <BreadcrumbItem>
                        <Link
                            href="/resources/reports/topic-wise-reports"
                            className="text-gray-500 "
                        >
                            Topic Wise Reports
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-600" />
                    <BreadcrumbItem>
                        <Link
                            href="/resources/reports/topic-wise-reports/health-financing"
                            className="text-gray-800 underline"
                        >
                            Health Financing
                        </Link>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Content Section with Sidebar */}
            <div className="max-w-screen-xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-8 mt-8">
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

export default HealthFincancing;
