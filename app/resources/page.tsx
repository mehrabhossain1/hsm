"use client";
// import {
//   FaBook,
//   FaHeartbeat,
//   FaUniversity,
//   FaInfoCircle,
//   FaYoutube,
// } from "react-icons/fa";
// import { GrOverview } from "react-icons/gr";
import { motion } from "framer-motion";
import BookMarksSectionCard from "@/components/ui/BookMarksSectionCard";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

// import OverviewImg from "@/public/resources/overviewicon.png";

const bookmarksData = [
    {
        title: "Overview",
        href: "/resources/overview",
        description:
            "The Resources section aspire to be a repository of essential resources on health systems and global health. ",
        Icon: "https://img.freepik.com/free-photo/business-work-concept_1388-69.jpg?t=st=1741539768~exp=1741543368~hmac=f9cfaefc1f6459c616b427197be993fbb23876f5cdaa641d7fe9f50ab34a8335&w=1060",
    },
    {
        title: "Essential Reading List",
        href: "/resources/essential-reading-list",
        description:
            "Reading preferences and needs vary widely yet certain resources are considered essential for global health professionals. ",
        Icon: "https://australiainstitute.org.au/wp-content/uploads/2021/11/0_-P20RegfYHGeARz5.jpg",
    },
    {
        title: "Reports",
        href: "/resources/reports",
        description:
            "Reports are a fundamental output of interventions and initiatives, serving as a cornerstone for organizations in the global development sector.",
        Icon: "https://img.freepik.com/free-photo/business-leader-trader-searching-new-investment-solution_482257-116895.jpg?t=st=1741540814~exp=1741544414~hmac=00e99ff43576506148314d093bc85b7a592b6e0b4b18d00a2a9aad1ffba7795e&w=1060",
    },
    // {
    //   title: "General Reports",
    //   href: "/resources/general-reports",
    //   description: "",
    //   Icon: FaInfoCircle,
    // },
    // {
    //   title: "Topic wise reports",
    //   href: "/resources/topic-wise-reports",
    //   description: "",
    //   Icon: FaBook,
    // },
    {
        title: "Books",
        href: "/resources/books",
        description:
            "The PDF books provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems.",
        Icon: "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?t=st=1741542459~exp=1741546059~hmac=065a1337b7ed63131b7e4b32ade319b8ed9291b1347a1b1dca3d5d5eed9f25b5&w=1060",
    },

    {
        title: "Policy Briefs",
        href: "/resources/policy-briefs",
        description:
            "The section provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems. ",
        Icon: "https://img.freepik.com/free-photo/cropped-view-businesswomen-reading-document_74855-4169.jpg?t=st=1741542642~exp=1741546242~hmac=40d95cb4c5a2187fcd5400a6fa2230b51dfc0ee15f0ff5054998ca790ecaa561&w=1060",
    },
    {
        title: "Presentations",
        href: "/resources/presentations",
        description:
            "The section provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems. ",
        Icon: "https://img.freepik.com/premium-photo/effective-team-collaboration-leadership-strategies-successful-business-presentations-discussions_209190-259778.jpg?w=1380",
    },

    {
        title: "Interview and Insights",
        href: "/resources/interview-and-insights",
        description:
            "This section features insightful interviews with global health and development professionals, covering critical issues, scholarly work, leadership, career development, and more. Explore and gain inspiration from their experiences and perspectives.",
        Icon: "https://img.freepik.com/premium-photo/female-broadcaster-interviewing-her-guest-studio_53876-149537.jpg?w=1060",
    },
    // {
    //   title: "Recorded Interviews",
    //   href: "/resources/recorded-interviews",
    //   description: "",
    //   Icon: FaInfoCircle,
    // },
    // {
    //   title: "Written Interviews ",
    //   href: "/resources/written-interviews",
    //   description: "",
    //   Icon: FaUniversity,
    // },
];

// Define animation variants
// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
// };

const BookmarksPage = () => {
    return (
        <div className="bg-gradient-to-r from-[#01748D]/10 via-white to-[#01748D]/10">
            {/* Page Title Section */}
            <div className="relative w-full h-[120px] border-t-2 border-[#FFCE00]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#01748D]/90  to-[#01748D]/30 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16 flex-wrap gap-6">
                        <h1 className=" md:text-4xl font-bold text-white">
                            Resources
                        </h1>
                        <p className="text-xl max-w-3xl text-gray-100 font-semibold my-8 text-justify w-full md:w-auto">
                            The Resources section aspire to be a repository of
                            essential resources on health systems and global
                            health.
                        </p>
                    </div>
                </div>
            </div>

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
                        <Link
                            href="/resources"
                            className="bg-[#FFCE00] text-black px-2 rounded-sm py-1"
                        >
                            Resources
                        </Link>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Content */}
            <div className="max-w-screen-xl mx-auto pt-8 pb-16 px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {bookmarksData.map((bookmark, index) => (
                    <motion.div
                        key={index}
                        // variants={itemVariants}
                        // initial="hidden"
                        // whileInView="visible"
                        // viewport={{ once: true, amount: 0.2 }}
                        // transition={{ duration: 0.2, delay: index * 0.1 }}
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
    );
};

export default BookmarksPage;
