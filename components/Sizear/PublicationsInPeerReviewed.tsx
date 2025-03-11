"use client";
import { motion } from "framer-motion";

const PublicationsInPeerReviewed = () => {
  const publications = [
    {
      year: "2023",
      title:
        "Effect of leisure-time physical activity on blood pressure in people with hypertension: a systematic review and meta-analysis",
      journal: "Nature: Sci Rep 13, 10639",
      link: "https://doi.org/10.1038/s41598-023-37149-2",
    },
    {
      year: "2023",
      title:
        "Coping with COVID-19 Pandemic and Sustained Health Behavior: A Cross-Sectional Study in Bangladesh",
      journal: "Epidemiologia 2023, 4, 85-93",
      link: "https://doi.org/10.3390/epidemiologia4010009",
    },
    {
      year: "2022",
      title:
        "Cigarette smoking and associated factors among men in five South Asian countries: A pooled analysis of nationally representative surveys",
      journal: "PLOS ONE, 17(11), e0277758",
      link: "https://doi.org/10.1371/journal.pone.0277758",
    },
    {
      year: "2021",
      title:
        "Effect of leisure-time physical activity in controlling hypertension: a systematic review and meta-analysis protocol",
      journal: "BMJ Open Vol 11, Issue 12",
      link: "https://doi.org/10.1136/bmjopen-2021-056270",
    },
    {
      year: "2019",
      title:
        "Perceptions of appropriate treatment among the informal allopathic providers in two peri-urban areas in Bangladesh",
      journal: "BMC Health Serv Res 19, 424",
      link: "https://doi.org/10.1186/s12913-019-4254-3",
    },
  ];

  return (
    <div className="pt-16">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-600  underline underline-offset-4 mb-8">
        Publications in Peer Reviewed Journals
      </h3>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-5xl mx-auto"
      >
        {publications.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ borderColor: "#FFCE00" }}
            className="bg-white border shadow-sm rounded-md p-6 border-l-4 border-blue-500 flex items-center space-x-6"
          >
            {/* Left Side: Year */}
            <div className="w-1/4">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.year}
              </h3>
            </div>

            {/* Right Side: Title & Journal */}
            <div className="w-3/4">
              <p className="text-md font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="text-gray-600 text-sm">{item.journal}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm mt-1 hover:underline"
              >
                {item.link}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PublicationsInPeerReviewed;
