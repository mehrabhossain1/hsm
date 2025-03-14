import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
// import { FaBook, FaFileAlt, FaClipboardList } from "react-icons/fa";
import {
    BookOpen,
    FileText,
    Bookmark,
    Scroll,
    BarChart,
    Globe,
    Database,
    Users,
    Activity,
    GraduationCap,
    Briefcase,
    Search,
    Newspaper,
    Youtube,
    Mic,
} from "lucide-react";

const bookmarks = [
    {
        href: "/bookmarks/essential-reading-list",
        icon: <BookOpen />,
        text: "Key Public Health Organizations",
    },
    {
        href: "/bookmarks/reports",
        icon: <FileText />,
        text: "Reports and Publications",
    },
    { href: "/bookmarks/books", icon: <Bookmark />, text: "Journals" },
    {
        href: "/bookmarks/policy-briefs",
        icon: <Scroll />,
        text: "Commentaries and Blogs",
    },
    {
        href: "/bookmarks/presentations",
        icon: <BarChart />,
        text: "Interviews & Insights on Global Health",
    },
    {
        href: "/bookmarks/tools",
        icon: <Globe />,
        text: "Useful Platforms and Tools",
    },
    {
        href: "/bookmarks/data-facts",
        icon: <Database />,
        text: "Data and Facts",
    },
    {
        href: "/bookmarks/organizations",
        icon: <Users />,
        text: "Data Repository of Organizations",
    },
    {
        href: "/bookmarks/data-centric",
        icon: <Activity />,
        text: "Data-Centric Organizations and Platforms",
    },
    {
        href: "/bookmarks/public-health-data",
        icon: <Globe />,
        text: "Data on Public Health Issues",
    },
    {
        href: "/bookmarks/training",
        icon: <GraduationCap />,
        text: "Training and Courses",
    },
    {
        href: "/bookmarks/career-scope",
        icon: <Briefcase />,
        text: "Career Scope",
    },
    { href: "/bookmarks/jobs", icon: <Search />, text: "Job Sites" },
    {
        href: "/bookmarks/scholarships",
        icon: <GraduationCap />,
        text: "Scholarship and Fellowship Opportunities",
    },
    { href: "/bookmarks/newsletter", icon: <Newspaper />, text: "Newsletter" },
    { href: "/bookmarks/youtube", icon: <Youtube />, text: "YouTube" },
    { href: "/bookmarks/podcast", icon: <Mic />, text: "Podcast" },
];
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
                        <Link
                            href="/resources-and-bookmarks"
                            className="text-gray-500"
                        >
                            RESOURCES & BOOKMARKS
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator className="text-gray-600" />
                    <BreadcrumbItem>
                        <Link href="/bookmarks" className="text-gray-600 ">
                            Bookmarks
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-600" />
                    <BreadcrumbItem>
                        <Link
                            href="/bookmarks/overview"
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
                                    The Global Health Bookmarks section
                                    indicates the resources either document,
                                    entities, courses, career, podcast and so on
                                    pertained with the global health and health
                                    systems are covered. The section offers a
                                    comprehensive list of resources that may
                                    enrich one global health professionals’
                                    career. If these given resources are well
                                    utilized, anyone can attain the knowledge of
                                    the contemporary trend of the global health
                                    and health systems challenges.
                                </p>
                            </div>
                        </div>

                        {/* Right Featured Resources Section */}
                        <div className="bg-gray-100 p-6 border border-gray-200 shadow-sm self-start">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Featured Bookmarks
                            </h2>
                            <ul className="space-y-4">
                                {bookmarks.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="flex items-center space-x-2 text-blue-800 hover:text-[#F18A00] transition"
                                        >
                                            {item.icon}
                                            <span className="hover:underline">
                                                {item.text}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesOverview;
