"use client";

import { motion } from "framer-motion";

// import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    // BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
// import { FaFilePdf, FaDownload, FaBookOpen } from "react-icons/fa";

const bookmarksData = [
    {
        title: "Climate change and public health",
        href: "/resources/reports/topic-wise-reports/climate-change-and-public-health",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "Health Financing",
        href: "/resources/reports/topic-wise-reports/health-financing",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "Health Policy & Analysis",
        href: "/resources/reports/topic-wise-reports/health-policy-and-analysis",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "Health workers & human resources",
        href: "/resources/reports/topic-wise-reports/health-workers-and-human-resources",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "Maternal and child health",
        href: "/resources/reports/topic-wise-reports/maternal-and-child-health",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "Mental Health",
        href: "/resources/reports/topic-wise-reports/mental-health",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "NCDs",
        href: "/resources/reports/topic-wise-reports/ncds",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "Nutrition",
        href: "/resources/reports/topic-wise-reports/nutrition",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "Primary health care",
        href: "/resources/reports/topic-wise-reports/primary-health-care",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "Strategic Purchasing in Health",
        href: "/resources/reports/topic-wise-reports/strategic-purchasing-in-health",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    {
        title: "Universal Health Coverage",
        href: "/resources/reports/topic-wise-reports/universal-health-coverage",
        description: "",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
];

// const pdfs = [
//   {
//     title: "A System of Health Accounts 2011",
//     filePath:
//       "/resources/Essential-Reading-List/A-System-of-Health-Accounts-2011.pdf",
//   },
//   {
//     title: "Alma Ata Conference Report on PHC_WHO 1978",
//     filePath:
//       "/resources/Essential-Reading-List/Alma-Ata-Conference-Report-on-PHC_WHO-1978.pdf",
//   },
//   {
//     title: "Basic Epidemiology_WHO 2006",
//     filePath:
//       "/resources/Essential-Reading-List/Basic Epidemiology_WHO 2006.pdf",
//   },
//   {
//     title: "Delivering Quality Health Services_WHO 2018",
//     filePath:
//       "/resources/Essential-Reading-List/Delivering Quality Health Services_WHO 2018.pdf",
//   },
//   {
//     title: "Everybody's Business- Strengthening Health Systems_WHo 2007",
//     filePath:
//       "/resources/Essential-Reading-List/Everybody's Business- Strengthening Health Systems_WHo 2007.pdf",
//   },
//   {
//     title: "Guns, Germs and Steel - Jared Diamond_1997",
//     filePath:
//       "/resources/Essential-Reading-List/Guns, Germs and Steel - Jared Diamond_1997.pdf",
//   },
//   {
//     title: "Health Systems - Improving Performance_WHO_2000",
//     filePath:
//       "/resources/Essential-Reading-List/Health Systems - Improving Performance_WHO_2000.pdf",
//   },
//   {
//     title: "Health Systems Building Blocks_WHO 2010",
//     filePath:
//       "/resources/Essential-Reading-List/Health Systems Building Blocks_WHO 2010.pdf",
//   },
//   {
//     title: "Health Systems Financing_WHO 2010",
//     filePath:
//       "/resources/Essential-Reading-List/Health Systems Financing_WHO 2010.pdf",
//   },
//   {
//     title: "International Profiles of Health Care Systems_2020",
//     filePath:
//       "/resources/Essential-Reading-List/International Profiles of Health Care Systems_2020.pdf",
//   },
//   {
//     title: "Investing in Health_WDR 1993",
//     filePath:
//       "/resources/Essential-Reading-List/Investing in Health_WDR 1993.pdf",
//   },
//   {
//     title: "Now More Than Ever-PHC_WHO 2008",
//     filePath:
//       "/resources/Essential-Reading-List/Now More Than Ever-PHC_WHO 2008.pdf",
//   },
//   {
//     title: "Tracking Universal health Coverage_WHO 2015",
//     filePath:
//       "/resources/Essential-Reading-List/Tracking Universal health Coverage_WHO 2015.pdf",
//   },
// ];

const TopicWiseReports = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Page Title Section */}
            <div className="relative w-full h-[150px] border-t-2 border-yellow-400">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-700/90 to-blue-500/40 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-16 gap-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                            Topic wise Reports
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
                            className="text-gray-500"
                        >
                            Reports
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-600" />
                    <BreadcrumbItem>
                        <Link
                            href="/resources/topic-wise-reports"
                            className="text-gray-800 underline"
                        >
                            Topic Wise Reports
                        </Link>
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

                    <div className="max-w-screen-xl mx-auto pt-8 pb-16 px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {bookmarksData.map((bookmark, index) => (
                            <motion.div
                                key={index}
                                // variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }} // Adjusts when animation triggers
                                transition={{
                                    duration: 0.2,
                                    delay: index * 0.1,
                                }} // Staggered effect
                            >
                                <BookMarksSectionCard
                                    title={bookmark.title}
                                    description={bookmark.description}
                                    href={bookmark.href}
                                    Icon={bookmark.Icon}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicWiseReports;
