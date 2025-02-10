import Link from "next/link";

const ResourcesAndBookmarksPage = () => {
  return (
    <div className="min-h-[calc(100vh-115px)] flex flex-col pb-10 max-w-screen-xl mx-auto">
      {/* Title Section (30% Height) */}
      <div className="h-[40%] pt-4 py-2 rounded-b-2xl flex flex-col justify-between px-8 items-center text-center ">
        <h1 className="text-4xl font-bold text-gray-800">
          RESOURCES & BOOKMARKS
        </h1>

        <p className="mt-4 text-lg max-w-4xl text-gray-700">
          Explore the comprehensive resource hub to supercharge your knowledge
          and complement your rewarding career journey. The{" "}
          <span className="font-bold">Resource</span> section lets you download
          valuable materials with a single click, while the{" "}
          <span className="font-bold">Bookmarks</span> section connects you to
          useful contents and tools crucial for professional success.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 px-6">
        {/* Resources Card */}
        <div
          className="group relative bg-white shadow-lg border border-gray-200 rounded-2xl p-8 w-1/2 text-center 
        hover:shadow-2xl transition duration-300 ease-in-out"
        >
          <div
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 text-white flex 
          items-center justify-center rounded-full shadow-lg"
          >
            📘
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-gray-800">
            Resources
          </h2>
          <p className="mt-3 text-gray-600">
            The Resources section aspire to be a repository of essential
            resources on health systems and global health. By compiling major
            reports, books, groundbreaking publications, significant policy
            briefs and presentations, thought-provoking interviews, and
            insightful analyses, it supports public health professionals and
            beyond in their pursuit of knowledge and professional development.
            Resources are organized by topic to facilitate systematic access.
            Each resource is sourced from esteemed organizations, with due
            credit given to acknowledge their invaluable contributions.
          </p>
          <Link href="/resources-and-bookmarks/resources">
            <button
              className="mt-5 px-5 py-2.5 w-full bg-blue-600 text-white rounded-lg font-medium shadow-md 
          hover:bg-blue-700 hover:shadow-lg transition duration-300"
            >
              Explore Resources
            </button>
          </Link>
        </div>

        {/* Bookmarks Card */}
        <div
          className="group relative bg-white shadow-lg border border-gray-200 rounded-2xl p-8 w-96 text-center 
        hover:shadow-2xl transition duration-300 ease-in-out"
        >
          <div
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 text-white flex 
          items-center justify-center rounded-full shadow-lg"
          >
            🔖
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-gray-800">
            Bookmarks
          </h2>
          <p className="mt-3 text-gray-600">
            The Global Health Bookmarks section indicates the resources either
            document, entities, courses, career, podcast and so on pertained
            with the global health and health systems are covered. The section
            offers a comprehensive list of resources that may enrich one global
            health professionals’ career. If these given resources are well
            utilized, anyone can attain the knowledge of the contemporary trend
            of the global health and health systems challenges.
          </p>
          <Link href="/resources-and-bookmarks/bookmarks">
            <button
              className="mt-5 px-5 py-2.5 w-full bg-green-600 text-white rounded-lg font-medium shadow-md 
          hover:bg-green-700 hover:shadow-lg transition duration-300"
            >
              View Bookmarks
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesAndBookmarksPage;
