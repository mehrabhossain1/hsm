"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResourcesPage() {
  const categories = [
    {
      title: "Essential Reading List",
      link: "/resources/reading-list",
      img: "/images/reading-list.jpg",
    },
    {
      title: "Reports",
      link: "/resources/reports",
      img: "/images/reports.jpg",
    },
    { title: "Books", link: "/resources/books", img: "/images/books.jpg" },
    {
      title: "Policy Briefs",
      link: "/resources/policy-briefs",
      img: "/images/policy.jpg",
    },
    {
      title: "Presentations",
      link: "/resources/presentations",
      img: "/images/presentations.jpg",
    },
    {
      title: "Interviews & Insights",
      link: "/resources/interviews",
      img: "/images/interviews.jpg",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = categories.filter(
    (category) =>
      (selectedCategory === "All" || category.title === selectedCategory) &&
      category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-4">Filter Resources</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category List */}
        <div className="mt-6">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`block w-full text-left px-4 py-2 rounded-lg mb-2 ${
              selectedCategory === "All"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            All Resources
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.title)}
              className={`block w-full text-left px-4 py-2 rounded-lg mb-2 ${
                selectedCategory === category.title
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Resources & Knowledge Hub
        </h1>
        <p className="text-gray-600 mt-2">
          Explore books, reports, policy briefs, and expert insights.
        </p>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border"
              >
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-6 flex flex-col">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {category.title}
                  </h2>
                  <Link href={category.link}>
                    <button className="mt-4 px-5 py-2 w-full bg-blue-600 text-white rounded-md font-medium shadow-md hover:bg-blue-700 transition duration-300">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg mt-4">No resources found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
