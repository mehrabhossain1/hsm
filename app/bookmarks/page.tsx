"use client";
import img1 from "@/public/resources/overview.jpeg";
// import img2 from "@/resources/reading-list.jfif";
import img3 from "@/public/resources/reports.jpeg";
// import img4 from "@/resources/articles.jfif";
// import img5 from "@/resources/policies.jfif";
// import img6 from "@/resources/books.jfif";
// import img7 from "@/resources/interviews.jfif";
// import img8 from "@/resources/blogs.jfif";
// import img9 from "@/resources/tools.jfif";
import ResourcesSectionCard from "@/components/ui/ResourcesSectionCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const resourcesSubLinks = [
  {
    title: "Overview",
    href: "/resources/overview",
    description:
      "The Global Health Bookmarks section indicates the resources either document, entities, courses, career, podcast and so on pertained with the global health and health systems are covered.",
    img: img1,
  },
  {
    title: "Key Public Health Organizations ",
    href: "/resources/key-public-health-organizations",
    description:
      "Many organizations, both large and small, have long been dedicated to public health and health systems strengthening.",
    img: img3,
  },
  // {
  //   title: "Reports",
  //   href: "/resources/reports",
  //   img: img3,
  //   nestedLinks: [
  //     { title: "1. Topic Wise Reports", href: "/resources/reports/topic-wise" },
  //     { title: "2. Major Reports", href: "/resources/reports/major" },
  //   ],
  // },
  {
    title: "Reports and Publications ",
    href: "/resources/reports-and-publications",
    description: "",
    img: img3,
  },
  {
    title: "Journals ",
    href: "/resources/journals",
    description:
      "This list offers an overview of reputable and scholarly journals focused on public health and health systems.",
    img: img1,
  },
  {
    title: "Commentaries and Blogs",
    href: "/resources/commentaries-blogs",
    description:
      "A series of blogs and newsletters maintained by organizations and dedicated professionals is available.",
    img: img3,
  },
  {
    title: "Interviews Sites on Global Health and More",
    href: "/resources/interviews-sites",
    description: "",
    img: img1,
  },
  {
    title: "Useful Platforms and Tools ",
    href: "/resources/useful-platforms-and-tools",
    description:
      "This section introduces platforms and tools designed to enhance your professional skills.",
    img: img3,
  },
  {
    title: "Data and Facts",
    href: "/resources/data-and-facts",
    description:
      "In today's data-driven world, information is crucial for professional efforts.",
    img: img1,
  },
  {
    title: "Data and Respiratory of Organizations",
    href: "/resources/data-and-respiratory-of-organizations",
    description: "",
    img: img1,
  },
  {
    title: "Data-Centric Organizations and Platforms",
    href: "/resources/data-centric-organizations-and-platforms",
    description: "",
    img: img1,
  },
  {
    title: "Data on Topic and Public Health Issues",
    href: "/resources/data-on-topic-and-public-health-issues",
    description: "",
    img: img1,
  },
  {
    title: "Training and Courses",
    href: "/resources/training-and-courses",
    description:
      "This list of online training and courses in global health and health systems can help you choose and enroll in programs to enhance your skills and expand your professional network.",
    img: img1,
  },
  {
    title: "Career Scope",
    href: "/resources/career-scope",
    description:
      "This platform offers information on job openings and fellowship opportunities from various organizations. ",
    img: img1,
  },
  {
    title: "Job Sites",
    href: "/resources/job-sites",
    description: "",
    img: img1,
  },
  {
    title: "Scholarship and Fellowship Opportunities",
    href: "/resources/scholarship-and-fellowship-opportunities",
    description:
      "The site offers a comprehensive list of reputed scholarships provided by various countries and authorities for pursuing higher education abroad.",
    img: img1,
  },
  {
    title: "Scholarship ",
    href: "/resources/scholarship",
    description: "",
    img: img1,
  },
  {
    title: "Fellowship and Internship ",
    href: "/resources/fellowship-and-internship",
    description: "",
    img: img1,
  },
  {
    title: "Newsletter ",
    href: "/resources/newsletter",
    description:
      "A series of blogs and newsletters maintained by organizations and dedicated professionals is available.",
    img: img1,
  },
  {
    title: "YouTube",
    href: "/resources/youtube",
    description:
      "In today's digital landscape, visual platforms are highly engaging, and public health professionals are no exception",
    img: img1,
  },
  {
    title: "Podcast",
    href: "/resources/podcast",
    description:
      "The curated list of podcasts offers valuable insights into global health and development issues.",
    img: img1,
  },
];

const ResourcesPage = () => {
  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[150px]  border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16 flex-wrap gap-6">
            <h1 className="text-5xl font-[1000] text-white">Bookmarks</h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto">
              The Global Health Bookmarks section indicates the resources either
              document, entities, courses, career, podcast and so on pertained
              with the global health and health systems are covered.
            </p>
          </div>
        </div>
      </div>

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
            <Link href="/bookmarks" className="text-gray-800 underline">
              Bookmarks
            </Link>
          </BreadcrumbItem>

          <BreadcrumbSeparator className="text-gray-100" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white">BLOG</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Contents */}
      <div className="max-w-screen-xl mx-auto py-16 px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {resourcesSubLinks.map((link, index) => (
          <ResourcesSectionCard
            key={index}
            title={link.title}
            description={link.description}
            imageUrl={link.img}
            href={link.href}
            // Add two buttons to the "Reports" card only
            hasTwoButtons={link.title === "Reports"} // Only the Reports card gets two buttons
            buttonLabels={
              link.title === "Reports"
                ? ["Major Reports", "Topic Wise Reports"]
                : ["Explore"] // Other cards get only one button
            }
            buttonLinks={
              link.title === "Reports"
                ? [
                    "/resources/reports/major-reports", // Major Reports link
                    "/resources/reports/topic-wise-reports", // Topic Wise Reports link
                  ]
                : [link.href] // Other cards get their default href
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
