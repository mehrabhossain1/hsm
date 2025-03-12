/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";

const PersonalJourney = () => {
  const personalJourneyData = [
    {
      year: "1986 – 2006",
      description:
        "I was born in Rajshahi, a small city in Bangladesh, as the only child in my family. My early years were spent there, where I created cherished memories. Though I was introverted and less mature at the time, these years laid the foundation for my journey ahead.",
    },
    {
      year: "2006 – 2011",
      description:
        "In 2006, I entered a transformative phase of life, marked by newfound mental freedom. University life was a turning point that shaped my aspirations and broadened my horizons. During this time, I began writing, debating, traveling, and dreaming. I completed my Bachelor’s and first Master’s degrees in 2011, setting the stage for future pursuits.",
    },

    {
      year: "2012 – 2020",
      description:
        "After university, I began my professional career, a period marked by significant growth and milestones. I completed my second Master’s degree, a defining achievement in my life. I worked with various national and international organizations in public health sector, gaining valuable experience, promotions, and opportunities for international travel and recognition. On a personal note, I married the love of my life, welcomed our first daughter, and endured the profound loss of my mother, whose absence I deeply feel to this day.",
    },
    {
      year: "2020 – 2025",
      description:
        "In 2020, I relocated to the Netherlands to pursue my third Master’s degree during the challenging COVID-19 period. Living apart from my family, I developed resilience and selfreliance. This journey inspired me to write and publish a book. Upon returning to Bangladesh, I joined an international organization as a health systems researcher and later transitioned to another global entity, where I’ve worked with pride for over 26 months as a health systems expert. In 2022, the birth of my second daughter brought immense joy to our family. In 2024, I founded Health Systems Matter, a platform to advance my vision for impactful contributions in the health sector.",
    },
  ];

  return (
    <div className="py-16 mt-8 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-8 rounded-md shadow-sm">
      <h3 className="text-2xl md:text-2xl font-bold text-gray-700  mb-8">
        <span className="underline underline-offset-4">
          My Personal Journey So Far/ My Journey from A Guideless Someone to A
          Dreamer
        </span>
      </h3>

      {/* content */}
      <div>
        <p className="text-gray-700 leading-relaxed text-justify pt-4">
          I was born into a typical Bangladeshi family, where high expectations
          shaped my childhood as an only child. Without strong guidance or role
          models in my broader family, I learned to dream and build a meaningful
          life on my own.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify pt-4">
          My perspective shifted during my undergraduate years, largely
          influenced by books. Hillary Clinton's autobiography, particularly her
          statement, "Learn from the world what you cannot learn from your
          parents," inspired my journey of self-discovery and lifelong learning.
          Since then, I have drawn knowledge and inspiration from books,
          relationships, nature, personal experiences, and formal education.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify pt-4">
          Academically, I earned three Master's degrees from international
          universities on scholarships. Yet, my most valuable lessons stem from
          practical experiences and observations. My transformation—from a
          guideless child to a public health professional—is also the story of
          becoming an organizer, builder, and writer.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify pt-4">
          This journey has been filled with challenges and broken dreams, but my
          determination and resilience keep me moving forward. Two traits have
          defined my path. Patience during times of struggle, when I have little
          or nothing. Second, Attitude during times of abundance when life is
          generous.
        </p>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto p-6 mt-8 bg-yellow-50 rounded-lg shadow-sm">
        {personalJourneyData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border-l-4 border-yellow-500 pl-4"
          >
            <h3 className="text-xl font-semibold text-gray-900">{item.year}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalJourney;
