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
        title: "Climate Afflictions 2021_WB",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Afflictions 2021_WB.pdf",
    },
    {
        title: "Climate Change Impacts on Human Health and the Health Sector 2022_USAID",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Change Impacts on Human Health and the Health Sector 2022_USAID.pdf",
    },
    {
        title: "Climate Finance Guide 2020",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Finance Guide 2020.pdf",
    },
    {
        title: "Climate Finance in Bangladesh 2017_USAID",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Finance in Bangladesh 2017_USAID.pdf",
    },
    {
        title: "Climate Financing for Sustainable Development of Bangladesh 2023_MOF",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Climate Financing for Sustainable Development of Bangladesh 2023_MOF.pdf",
    },
    {
        title: "Estimates of the Impact of Climate Change on Extreme Poverty 2020_WB",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Estimates of the Impact of Climate Change on Extreme Poverty 2020_WB.pdf",
    },
    {
        title: "Handbook on Climate Chnage Impact 2024",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Handbook on Climate Chnage Impact 2024.pdf",
    },
    {
        title: "Health and Climate Change_Lancet Countdown 2022",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Health and Climate Change_Lancet Countdown 2022.pdf",
    },
    {
        title: "IDU08d9e0a9203ad50400d09a6e078489562e7e8",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/IDU08d9e0a9203ad50400d09a6e078489562e7e8.pdf",
    },
    {
        title: "Impacts of climate change on health in Bangladesh Policy brief 2023",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Impacts of climate change on health in Bangladesh Policy brief 2023.pdf",
    },
    {
        title: "People in a Changing Climate 2024_WB",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/People in a Changing Climate 2024_WB.pdf",
    },
    {
        title: "Quantifying the Impact of Climate Change 2024_WB",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Quantifying the Impact of Climate Change 2024_WB.pdf",
    },
    {
        title: "Socioeconomic Impact on Climate Change Developing-Countries Next Decades 2024_CGD",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/Socioeconomic Impact on Climate Change Developing-Countries Next Decades 2024_CGD.pdf",
    },
    {
        title: "The Impact of Heat on Health and the Economy of Bangladesh 2024_WB",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/The Impact of Heat on Health and the Economy of Bangladesh 2024_WB.pdf",
    },
    {
        title: "What Can I Do about the Climate Emergency",
        filePath:
            "/resources/TopicWiseReports/Climate-change-and-public-health/What Can I Do about the Climate Emergency.pdf",
    },
];

const ClimateChangeAndPublicHealth = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Title Section */}
            <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 to-blue-500/40 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 gap-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                            Climate Change And Public Health
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
                            href="/resources/reports/topic-wise-reports/climate-change-and-public-health"
                            className="text-gray-800 underline"
                        >
                            Climate Change And Public Health
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

export default ClimateChangeAndPublicHealth;
