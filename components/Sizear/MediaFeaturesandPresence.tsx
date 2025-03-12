"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaNewspaper } from "react-icons/fa";

const mediaFeatures = [
  {
    title:
      "স্বাস্থ্য সুরক্ষা ২০২৪: স্বপ্ন, সম্পৃক্ততা ও সম্ভাবনা | PHA সুরক্ষায় প্রতিদিন",
    date: "১৫ ডিসেম্বর ২০২৪",
    platform: "Channel 24",
    videoUrl: "https://www.youtube.com/embed/DTiSnuDqUJY",
  },
  {
    title: "সব মানুষের স্বাস্থ্যসেবা; লক্ষ্যপানে কতদূর? | সুরক্ষায় প্রতিদিন",
    date: "১২ ডিসেম্বর ২০২৪",
    platform: "Channel 24",
    videoUrl: "https://www.youtube.com/embed/4J1QXstO1RI",
  },
  {
    title: "My First Book Experience at Rokomari",
    date: "08 March 2022",
    platform: "YouTube",
    videoUrl: "https://www.youtube.com/embed/lHh4jjgvW3M?si=TCjO3ut1xAirlIid",
  },
];

const articles = [
  {
    title: "Humans of IHS: Monaemul Islam Sizear",
    date: "University Blog | 28 January 2021",
    link: "https://www.ihs.nl/en/news/humans-ihs-monaemul-islam-sizear",
  },
  {
    title: "Studying in a Pandemic",
    date: "University Blog | 28 January 2021",
    link: "https://www.ihs.nl/en/news/studying-pandemic",
  },
  {
    title:
      "The City Seminar of the ITP on Sustainable Urban Water and Sanitation (SUWAS)",
    date: "WaterAid Blog | 08 November 2018",
    link: "https://www.wateraid.org/bd/media/the-city-seminar-of-the-international-training-programme-itpon-sustainable-urban-water-and",
  },
  //   {
  //     title: "My First Book Experience at Rokomari",
  //     date: "YouTube | 08 March 2022",
  //     link: "https://www.youtube.com/watch?v=lHh4jjgvW3M",
  //   },
];

const MediaFeatures = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 rounded-md shadow-sm">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8 mt-8">
        🎥 Media Features and Presence
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      {/* YouTube Videos */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {mediaFeatures.map((media, index) => (
          <motion.div
            key={index}
            // whileHover={{ borderColor: "#FFCE00" }}
            className="bg-white shadow-sm rounded-md overflow-hidden border-l-4 border-blue-500 p-4 transition-all duration-300"
          >
            <iframe
              className="w-full h-56 rounded-md hover:scale-105 transition-all duration-300"
              src={media.videoUrl}
              title={media.title}
              allowFullScreen
            ></iframe>
            <div className="mt-3">
              <h4 className="text-lg font-semibold text-gray-900 hover:underline">
                <a
                  href={media.videoUrl.replace("embed/", "watch?v=")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {media.title}
                </a>
              </h4>

              <p className="text-sm text-gray-600">
                {media.date} | {media.platform}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Blog & News Links */}
      <div className="mt-12">
        <h4 className="text-xl font-bold text-gray-700 mb-4 text-center">
          📰 Featured Articles & Blogs
        </h4>

        <motion.div
          className="space-y-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white p-4 shadow-sm rounded-md border-l-4 border-blue-500 hover:bg-blue-50 transition-all duration-300"
            >
              <FaNewspaper className="text-blue-500 text-xl" />
              <div>
                <h5 className="text-md font-semibold text-gray-900 hover:underline">
                  {article.title}
                </h5>
                <p className="text-sm text-gray-600">{article.date}</p>
              </div>
              <FaExternalLinkAlt className="text-gray-500 ml-auto" />
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MediaFeatures;
