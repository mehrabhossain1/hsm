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
        title: "Controlling NCD in Bangladesh_2017",
        filePath:
            "/resources/TopicWiseReports/NCDs/Controlling NCD in Bangladesh_2017.pdf",
    },
    {
        title: "Global Agenda of NCD 2023_WHO",
        filePath:
            "/resources/TopicWiseReports/NCDs/Global Agenda of NCD 2023_WHO.pdf",
    },
    {
        title: "Global Status Report of NCDs 2014_WHO",
        filePath:
            "/resources/TopicWiseReports/NCDs/Global Status Report of NCDs 2014_WHO.pdf",
    },
    {
        title: "Multisectoral Action Plan for NCD in Bangladesh 2018-2025-MOHFW",
        filePath:
            "/resources/TopicWiseReports/NCDs/Multisectoral Action Plan for NCD in Bangladesh 2018-2025-MOHFW.pdf",
    },
    {
        title: "NCD Prevention Framework of Malta_2024",
        filePath:
            "/resources/TopicWiseReports/NCDs/NCD Prevention Framework of Malta_2024.pdf",
    },
    {
        title: "NCD Scenarios in Bangladesh 2016_BHW",
        filePath:
            "/resources/TopicWiseReports/NCDs/NCD Scenarios in Bangladesh 2016_BHW.pdf",
    },
    {
        title: "Package of Essential NCD 2020_WHO",
        filePath:
            "/resources/TopicWiseReports/NCDs/Package of Essential NCD 2020_WHO.pdf",
    },
];

const NCDs = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Title Section */}
            <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/40 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center w-full px-6 md:px-16 gap-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                            NCDs
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
                            href="/resources/reports/topic-wise-reports/ncds"
                            className="text-gray-800 underline"
                        >
                            NCDs
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

export default NCDs;
