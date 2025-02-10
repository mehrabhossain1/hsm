import Link from "next/link";
import ResourcesHero from "@/public/resources-hero.jpg";
import Image from "next/image";

export default function ResourcesPage() {
  const categories = [
    {
      title: "Essential Reading List",
      description:
        "Curated books & reports to deepen your understanding of global health.",
      link: "/resources/reading-list",
      img: "/images/reading-list.jpg",
    },
    {
      title: "Reports",
      description: "Access research papers, policy briefs, and case studies.",
      link: "/resources/reports",
      img: "/images/reports.jpg",
    },
    {
      title: "Books",
      description:
        "A collection of essential readings for health professionals.",
      link: "/resources/books",
      img: "/images/books.jpg",
    },
    {
      title: "Policy Briefs",
      description: "Summarized insights on major health policies.",
      link: "/resources/policy-briefs",
      img: "/images/policy.jpg",
    },
    {
      title: "Presentations",
      description: "Download expert presentations on key health topics.",
      link: "/resources/presentations",
      img: "/images/presentations.jpg",
    },
    {
      title: "Interviews & Insights",
      description: "Exclusive discussions with public health experts.",
      link: "/resources/interviews",
      img: "/images/interviews.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-80">
        <Image
          src={ResourcesHero}
          alt="Resources Hero"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-6xl font-bold">RESOURCES</h1>
          <p className="mt-4 max-w-2xl text-xl">
            THE TOOLS YOU NEED TO SUCCEED AT EVERY LEVEL
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category, index) => (
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
              <p className="text-gray-600 mt-2 flex-grow">
                {category.description}
              </p>
              <Link href={category.link}>
                <button className="mt-4 px-5 py-2 w-full bg-blue-600 text-white rounded-md font-medium shadow-md hover:bg-blue-700 transition duration-300">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
