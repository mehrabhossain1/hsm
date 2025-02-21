"use client";

import Link from "next/link";
import ResourcesHero from "@/public/resources-hero.jpg";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResourcesPage() {
  const categories = [
    {
      title: "Essential Reading List",
      description:
        "Reading preferences and needs vary widely yet certain resources are considered essential for global health professionals. Explore this curated reading list to discover materials that can enrich your knowledge and support your professional growth.",
      link: "/resources/reading-list",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSS9pxbVREqw9ulp_8RWfV1M57A-QjX904g&s",
    },
    {
      title: "Reports",
      description:
        "Reports are a fundamental output of interventions and initiatives, serving as a cornerstone for organizations in the global development sector. Given the mandatory and periodic nature of these publications, the volume of reports continues to grow rapidly. This section organizes reports by topic, including organizational reports, key policy briefs, and presentations, providing users with a systematic and accessible resource.",
      link: "/resources/reports",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSS9pxbVREqw9ulp_8RWfV1M57A-QjX904g&s",
    },
    {
      title: "General Reports",
      description: "",
      link: "/resources/reports",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSS9pxbVREqw9ulp_8RWfV1M57A-QjX904g&s",
    },
    {
      title: "Topic wise reports",
      description: "",
      link: "/resources/reports",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSS9pxbVREqw9ulp_8RWfV1M57A-QjX904g&s",
    },
    {
      title: "Books",
      description:
        "The PDF books provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems.",
      link: "/resources/books",
      img: "/images/books.jpg",
    },
    {
      title: "Policy Briefs",
      description:
        "The section provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems. ",
      link: "/resources/policy-briefs",
      img: "/images/policy.jpg",
    },
    {
      title: "Presentations",
      description:
        "The section provided are significant works by renowned public health professionals, offering valuable insights into global health and health systems.",
      link: "/resources/presentations",
      img: "/images/presentations.jpg",
    },
    {
      title: "Interviews & Insights",
      description:
        "This section features insightful interviews with global health and development professionals, covering critical issues, scholarly work, leadership, career development, and more. Explore and gain inspiration from their experiences and perspectives. ",
      link: "/resources/interviews",
      img: "/images/interviews.jpg",
    },
    {
      title: "Recorded Interviews",
      description: "",
      link: "/resources/interviews",
      img: "/images/interviews.jpg",
    },
    {
      title: "Written Interviews",
      description: "",
      link: "/resources/interviews",
      img: "/images/interviews.jpg",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerView = 4;
  const totalItems = categories.length;

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 1 < totalItems - itemsPerView + 1 ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-80">
        <Image
          src={ResourcesHero}
          alt="Resources Hero"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-100 text-center px-4">
          <h1 className="text-6xl font-bold">RESOURCES</h1>
          {/* <p className="mt-4 max-w-2xl text-xl">
            THE TOOLS YOU NEED TO SUCCEED AT EVERY LEVEL
          </p> */}
        </div>
      </div>
      {/* <p className="m-6 max-w-5xl mx-auto text-2xl bg-[#FFCE00] rounded-2xl text-gray-700 py-4 px-6 text-center">
        The Resources section aspire to be a repository of essential resources
        on health systems and global health. By compiling major reports, books,
        groundbreaking publications, significant policy briefs and
        presentations, thought-provoking interviews, and insightful analyses, it
        supports public health professionals and beyond in their pursuit of
        knowledge and professional development. Resources are organized by topic
        to facilitate systematic access. Each resource is sourced from esteemed
        organizations, with due credit given to acknowledge their invaluable
        contributions.
      </p> */}
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
          {categories
            .slice(startIndex, startIndex + itemsPerView)
            .map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border"
              >
                <Image
                  src={category.img}
                  width={500}
                  height={300}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-6 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h2>
                  {/* <p className="text-gray-600 mt-2 flex-grow">
                    {category.description}
                  </p> */}
                  <Link href={category.link}>
                    <button className="mt-4 px-5 py-2 w-full bg-blue-600 text-white rounded-md font-medium shadow-md hover:bg-blue-700 transition duration-300">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="absolute bottom-4 right-6 flex gap-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
