"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    index: number;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    image,
    link,
    index,
}) => {
    return (
        <motion.div
            className="relative w-full flex flex-col md:flex-row bg-white shadow-lg overflow-hidden transition-transform transform border hover:scale-105 hover:border-r-4 hover:border-b-4 border-[#2D8CBB] hover:shadow-md duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            {/* Image Section (Left) */}
            <Link
                href={link}
                className="w-full md:w-1/3 relative hover:scale-110 transition-all duration-300 ease-in-out"
            >
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className=""
                />
            </Link>

            {/* Content Section (Right) */}
            <Link
                href={link}
                className="w-full md:w-2/3 p-6 flex flex-col justify-center text-gray-800"
            >
                <h2 className="text-2xl font-semibold mb-2 hover:underline">
                    {title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 text-justify">
                    {description}
                </p>

                {/* Explore Button */}
                <div className="inline-flex justify-end items-center text-blue-600 hover:text-blue-500">
                    <Button className="text-base flex bg-[#FFCE00] text-black hover:bg-[#2D8CBB] hover:text-white">
                        Explore
                        <ArrowRight className="ml-2 size-5" />
                    </Button>
                </div>
            </Link>
        </motion.div>
    );
};

const NewsAndNewsletterPage = () => {
    const resources = [
        {
            title: "Interview",
            description:
                "The interview section showcases the journeys and insights of global health advocates, highlighting their impactful experiences and perspectives.",
            image: "https://img.freepik.com/free-photo/close-up-interviewee-taking-notes_23-2149037867.jpg?t=st=1742322872~exp=1742326472~hmac=a5db8ba5ecb40a2b8702b9df9313be9d979ad9699ec4a29823e25457f3132a6b&w=996",
            link: "/interview",
        },
        {
            title: "Blog",
            description:
                "The blog covers diverse global health topics, offering thoughtful analysis from public health professionals through a health systems perspective.",
            image: "https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg?t=st=1742322970~exp=1742326570~hmac=cd90bb87bdfec31328054855b6a71c3c317922f795439c67377973bb71683225&w=900",
            link: "/blog",
        },
    ];

    return (
        <div>
            <div className="relative w-full h-[120px] border-t-2 border-[#FFCE00]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB] to-[#2D8CBB]/30 flex items-center ">
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16">
                        <h1 className="text-4xl font-bold text-white">
                            Interview & Blog
                        </h1>
                        <p className="text-base max-w-xl text-[#001844] font-semibold my-8 text-justify w-full md:w-auto">
                            The interview section showcases the journeys and
                            insights of global health advocates, highlighting
                            their impactful experiences and perspectives. The
                            blog covers diverse global health topics, offering
                            thoughtful analysis from public health professionals
                            through a health systems perspective.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col max-w-screen-xl mx-auto">
                {/* Title Section (30% Height) */}
                {/* Page Title Section */}

                {/* Cards Section */}

                {/* New Left Image - Right Content Layout */}
                <div className="max-w-screen-xl mx-auto px-16 min-h-[calc(100vh-230px)] flex items-center justify-center ">
                    <motion.div
                        className="flex gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 },
                            },
                        }}
                    >
                        {resources.map((resource, index) => (
                            <Card
                                key={index}
                                title={resource.title}
                                description={resource.description}
                                image={resource.image}
                                link={resource.link}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default NewsAndNewsletterPage;

// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// // import {
// //     Breadcrumb,
// //     BreadcrumbItem,
// //     BreadcrumbList,
// //     BreadcrumbPage,
// //     BreadcrumbSeparator,
// // } from "@/components/ui/breadcrumb";
// // import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

// // import { Button } from "@/components/ui/button";
// // import { ArrowRightCircle } from "lucide-react";
// import { BlogCard } from "@/components/ui/BlogCard";
// import Image from "next/image";

// import OConnorImage from "@/public/interview-and-blogs/oconnor_flannery.jpg";
// import Shahiduz from "@/public/interview-and-blogs/shahidul.jpg";
// // import blog1 from "@/public/interview-and-blogs/blog1.jpg";
// // import blog2 from "@/public/interview-and-blogs/blog2.jpg";

// import author1 from "@/public/interview-and-blogs/TasdikDip.jpg";
// import author2 from "@/public/interview-and-blogs/ShahParan.jpg";

// // import interviewImage from "@/public/interview-and-blogs/interview.jpeg";
// // import blogImage from "@/public/interview-and-blogs/blog.jpeg";

// const BlogAndInterviewPage = () => {
//     const interviews = [
//         {
//             id: 1,
//             title: "Public Health Insights with Dr. Madhukar Pai: A Global Leader",
//             description:
//                 "Dr. Madhukar Pai shares his journey, inspiration, and thoughts on the biggest global health challenges.",
//             image: "/interview/madhukar.jpg", // Ensure you have this image in the public folder
//             slug: "public-health-insights",
//         },
//         {
//             id: 2,
//             title: "Development Perspective with Dr. Zarif Rasul: Insights from A Global Water Specialist",
//             description:
//                 "Dr. Zarif shares insights from his inspiring academic and professional journey toward becoming a global development expert.",
//             image: "/interview/Zarif-Rasul.jpg", // Ensure you have this image in the public folder
//             slug: "development-perspective",
//         },
//         // {
//         //   id: 2,
//         //   title: "The Future of Global Health with Dr. XYZ",
//         //   description:
//         //     "A discussion on emerging trends in public health and how young professionals can contribute.",
//         //   image: "/images/interview-global-health.jpg",
//         //   slug: "global-health",
//         // },
//     ];

//     return (
//         <div className="">
//             {/* className="min-h-[calc(100vh-118px)] max-w-screen-xl mx-auto" */}
//             <div>
//                 {/* Section title */}
//                 <div className="relative bg-[#E0F2FF] overflow-hidden min-h-[calc(100vh-90px)]">
//                     {/* Background Images Wrapper */}
//                     <div className="absolute inset-0 z-0 flex h-full">
//                         {/* First background image - Left */}
//                         <div className="w-1/2 h-full relative">
//                             <Image
//                                 src="https://img.freepik.com/free-photo/close-up-interviewee-taking-notes_23-2149037867.jpg?t=st=1742322872~exp=1742326472~hmac=a5db8ba5ecb40a2b8702b9df9313be9d979ad9699ec4a29823e25457f3132a6b&w=996"
//                                 alt="Background Interview"
//                                 fill
//                                 className="object-cover w-full h-full hover:scale-110 hover:opacity-75 transition-transform duration-300 ease-in-out"
//                                 priority
//                             />
//                         </div>

//                         {/* Second background image - Right */}
//                         <div className="w-1/2 h-full relative">
//                             <Image
//                                 src="https://img.freepik.com/free-photo/information-articles-blogging-device-screen_53876-124046.jpg?t=st=1742322970~exp=1742326570~hmac=cd90bb87bdfec31328054855b6a71c3c317922f795439c67377973bb71683225&w=900"
//                                 alt="Background Blog"
//                                 fill
//                                 className="object-cover w-full h-full hover:scale-110 hover:opacity-75 transition-transform duration-300 ease-in-out"
//                                 priority
//                             />
//                         </div>
//                     </div>

//                     {/* Overlay for Better Readability */}
//                     <div className="absolute inset-0 bg-[#E0F2FF] opacity-85"></div>

//                     {/* Content Section */}
//                     <div className="relative z-10 min-h-[calc(100vh-115px)]  py-12 flex items-center justify-start max-w-screen-xl mx-auto">
//                         <div className="max-w-3xl">
//                             <h1 className="text-4xl md:text-5xl font-[1000] text-[#001844] mb-5 text-center md:px-20 md:text-left">
//                                 INTERVIEW & BLOG
//                             </h1>
//                             <p className="text-lg md:text-xl text-slate-600 font-medium shadow-xl rounded-xl px-20 py-4 text-justify">
//                                 The interview section showcases the journeys and
//                                 insights of global health advocates,
//                                 highlighting their impactful experiences and
//                                 perspectives. The blog covers diverse global
//                                 health topics, offering thoughtful analysis from
//                                 public health professionals through a health
//                                 systems perspective.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Breadcrumb */}
//                 {/* <div className="bg-[#E0F2FF]">
//                     <Breadcrumb className="py-4 px-8 max-w-screen-xl mx-auto">
//                         <BreadcrumbList>
//                             <BreadcrumbItem>
//                                 <Link href="/">HOME</Link>
//                             </BreadcrumbItem>

//                             <BreadcrumbSeparator />
//                             <BreadcrumbItem>
//                                 <BreadcrumbPage>
//                                     INTERVIEW & BLOG
//                                 </BreadcrumbPage>
//                             </BreadcrumbItem>
//                         </BreadcrumbList>
//                     </Breadcrumb>
//                 </div> */}

//                 {/* Blog */}

//                 {/* Interview */}
//                 <div className="py-20 bg-[#2D8CBB]/5">
//                     <div className="max-w-screen-xl mx-auto px-8 flex flex-col justify-center items-center">
//                         {/* Section Title */}
//                         <h2 className="text-5xl font-bold text-[#001844] pb-8 bg-gradient-to-r from-[#001844] to-gray-700 text-transparent bg-clip-text">
//                             Global Health System Interviews
//                         </h2>

//                         {/* Quote & Author Section */}
//                         {/* <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-10 space-y-6 md:space-y-0 text-center md:text-left">
//                             <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#2D8CBB] shadow-md">
//                                 <Image
//                                     src={Shahiduz}
//                                     alt="Flannery O’Connor"
//                                     width={128}
//                                     height={128}
//                                     className="object-cover w-full h-full"
//                                 />
//                             </div>

//                             <div>
//                                 <p className="text-xl font-semibold text-gray-700 italic font-serif leading-relaxed">
//                                     “An effective interview is a collaborative
//                                     intellectual adventure”
//                                 </p>
//                                 <span className="text-lg font-bold text-[#2D8CBB] tracking-wide">
//                                     — DR. SHAHADUZ ZAMAN{" "}
//                                     <span className="text-sm text-gray-600 font-normal">
//                                         | Medical Anthropologist and Bangladeshi
//                                         Writer
//                                     </span>
//                                 </span>
//                             </div>
//                         </div> */}

//                         <section className="relative w-full bg-white">
//                             <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
//                                 <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
//                                     {/* Circular Image */}
//                                     <div className="w-44 h-44 shrink-0 rounded-full overflow-hidden ">
//                                         <Image
//                                             src={Shahiduz}
//                                             alt="Flannery O’Connor"
//                                             width={128}
//                                             height={128}
//                                             className="object-cover w-full h-full"
//                                         />
//                                     </div>

//                                     <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-3xl">
//                                         <div className="text-center sm:text-left">
//                                             <span className="text-lg font-bold text-[#2D8CBB] tracking-wide text-justify">
//                                                 — DR. SHAHADUZ ZAMAN{" "}
//                                                 <span className="text-sm text-gray-600 font-normal">
//                                                     | Medical Anthropologist and
//                                                     Bangladeshi Writer
//                                                 </span>
//                                             </span>
//                                             <p className="text-xl font-semibold text-gray-700 leading-relaxed text-justify pt-2">
//                                                 “An effective interview is a
//                                                 collaborative intellectual
//                                                 adventure”
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>

//                         {/* Blog Cards */}
//                         <div className="max-w-screen-xl mx-auto px-16 py-12">
//                             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                 {interviews.map((interview) => (
//                                     <div
//                                         key={interview.id}
//                                         className="bg-white border overflow-hidden transition-transform duration-300 hover:border-r-4 hover:border-b-4 border-[#2D8CBB] hover:shadow-md"
//                                     >
//                                         <Link
//                                             href={`/interview/${interview.slug}`}
//                                         >
//                                             <Image
//                                                 src={interview.image}
//                                                 alt={interview.title}
//                                                 width={500}
//                                                 height={300}
//                                                 className="w-full h-56 object-cover hover:scale-105 hover:opacity-90 transition-transform duration-300"
//                                             />
//                                         </Link>
//                                         <div className="p-6">
//                                             <Link
//                                                 href={`/interview/${interview.slug}`}
//                                                 className="text-xl font-bold text-gray-800 hover:underline"
//                                             >
//                                                 {interview.title}
//                                             </Link>
//                                             <p className="text-gray-600 mt-2 text-justify">
//                                                 {interview.description}
//                                             </p>
//                                             <Link
//                                                 href={`/interview/${interview.slug}`}
//                                             >
//                                                 <button className="mt-4 bg-[#2D8CBB] text-white px-4 py-2 rounded-md hover:bg-[#1B6E99] transition">
//                                                     Explore
//                                                 </button>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <Link href="/interview">
//                             <motion.div
//                                 className="border border-[#2D8CBB] hover:border-b-4 hover:border-r-4 px-4 py-2 rounded-lg flex items-center gap-2"
//                                 // animate={{ x: isHovered ? 0 : 5 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 400,
//                                     damping: 17,
//                                 }}
//                             >
//                                 <span className="text-[#2D8CBB] font-bold uppercase text-2xl">
//                                     Explore All Interviews
//                                 </span>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="text-[#2D8CBB]"
//                                 >
//                                     <path d="M5 12h14"></path>
//                                     <path d="m12 5 7 7-7 7"></path>
//                                 </svg>
//                             </motion.div>
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="py-20 bg-[#01748D]/5">
//                     <div className="max-w-screen-xl mx-auto px-8 flex flex-col justify-center items-center">
//                         {/* Section Title */}
//                         <h2 className="text-5xl font-bold text-[#001844] pb-8 bg-gradient-to-r from-[#001844] to-gray-700 text-transparent bg-clip-text">
//                             Global Health System Blogs
//                         </h2>

//                         {/* Quote & Author Section */}
//                         {/* <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-10 space-y-6 md:space-y-0 text-center md:text-left">

//                             <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#01748D] shadow-md">
//                                 <Image
//                                     src={OConnorImage}
//                                     alt="Flannery O’Connor"
//                                     width={128}
//                                     height={128}
//                                     className="object-cover w-full h-full"
//                                 />
//                             </div>

//                             <div>
//                                 <p className="text-xl font-semibold text-gray-700 italic font-serif leading-relaxed">
//                                     “I write to discover what I know.”
//                                 </p>
//                                 <span className="text-lg font-bold text-[#01748D] uppercase tracking-wide">
//                                     — Flannery O’Connor
//                                 </span>
//                             </div>
//                         </div> */}

//                         <section className="relative w-full bg-white">
//                             <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
//                                 <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
//                                     {/* Circular Image */}
//                                     <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden ">
//                                         <Image
//                                             src={OConnorImage}
//                                             alt="Flannery O’Connor"
//                                             width={128}
//                                             height={128}
//                                             className="object-cover w-full h-full object-top"
//                                         />
//                                     </div>

//                                     <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-3xl">
//                                         <div className="text-center sm:text-left">
//                                             <span className="text-lg font-bold text-[#01748D] uppercase tracking-wide">
//                                                 — Flannery O’Connor{" "}
//                                                 <span className="text-sm text-gray-600 font-normal">
//                                                     | American Writer
//                                                 </span>
//                                             </span>
//                                             <p className="text-xl font-semibold text-gray-700 leading-relaxed pt-2">
//                                                 “I write to discover what I
//                                                 know.”
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>

//                         {/* Blog Cards */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-16">
//                             <BlogCard
//                                 item={{
//                                     title: "Bridging the Gaps: Strengthening Mental Healthcare to Build a Resilient Health System in Bangladesh",
//                                     description:
//                                         "Mental health remains a critical yet often neglected aspect of Bangladesh’s healthcare system. The country faces significant challenges in addressing mental health issues, exacerbated by systemic gaps in healthcare delivery, societal stigma, and recent socio-political unrest...",
//                                     date: "February 8, 2025",
//                                     type: "blog",
//                                     // thumbnail: blog1,
//                                     thumbnail: author1,
//                                 }}
//                             />

//                             <BlogCard
//                                 item={{
//                                     title: "Overcoming Budget Bottlenecks: Ensuring Effective Health Financing for Universal Health Coverage in Bangladesh",
//                                     description:
//                                         "To achieve Universal Health Coverage and the Sustainable Development Goals, at least 15% of the total budget and 4-5% of gross domestic product (GDP) should be invested in healthcare in Bangladesh. However...",
//                                     date: "February 8, 2025",
//                                     type: "blog",
//                                     // thumbnail: blog2,
//                                     thumbnail: author2,
//                                 }}
//                             />
//                         </div>

//                         {/* View All Blogs Button */}
//                         <Link href="/blog">
//                             <motion.div
//                                 className="border border-[#01748D] hover:border-b-4 hover:border-r-4 px-4 py-2 rounded-lg flex items-center gap-2"
//                                 // animate={{ x: isHovered ? 0 : 5 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 400,
//                                     damping: 17,
//                                 }}
//                             >
//                                 <span className="text-[#01748D] font-bold uppercase text-2xl">
//                                     Explore All Blogs
//                                 </span>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="24"
//                                     height="24"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     className="text-[#01748D]"
//                                 >
//                                     <path d="M5 12h14"></path>
//                                     <path d="m12 5 7 7-7 7"></path>
//                                 </svg>
//                             </motion.div>
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Interview */}
//             </div>
//         </div>
//     );
// };

// export default BlogAndInterviewPage;
