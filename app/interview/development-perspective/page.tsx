/* eslint-disable react/no-unescaped-entities */
// import TedrosQuote from "@/components/Shared/SectionTitle/TedrosQuote";
// import DrMadhukarPaiBio from "../public-health-insights/DrMadhukarPaiBio";
import Image from "next/image";
import BioOfZarif from "./BiofOfZarifRasul";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
// import Image from "next/image";
// import DrMadhukarPaiBio from "./DrMadhukarPaiBio";

const DevelopmentPerspective = () => {
  return (
    <div className="bg-gradient-to-r from-[#2D8CBB]/10 via-white to-[#2D8CBB]/10">
      {/* Page Title Section */}
      <div className="relative w-full h-[120px] border-t-2">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 px-8 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-16 flex-wrap">
            <h1 className="text-2xl font-bold text-center text-white">
              Development Perspective with{" "}
              <a
                href="https://www.linkedin.com/in/zarifrasul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001844] underline font-extrabold bg-[#FFCE00] px-2 rounded-md"
              >
                Dr. Zarif Rasul:
              </a>{" "}
              Insights from A Global Water Specialist
            </h1>
          </div>
        </div>
      </div>

      {/* Hero Section with Image */}
      {/* <div className="max-w-3xl mx-auto  h-[300px] relative">
                <Image
                    src="/interview/madhukar.jpg"
                    alt="Interview Section"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75"
                />
            </div> */}

      {/* <TedrosQuote /> */}
      <section className="relative w-full bg-white">
        <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
            {/* Circular Image */}
            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
              <Image
                src="/interview/Zarif-Rasul.jpg" // Replace with your actual image path
                alt="Zarif-Rasul.jpg"
                width={500}
                height={500}
                className="object-cover w-full h-full object-right scale-150"
              />
            </div>

            <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-3xl">
              <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                — Dr. Zarif Rasul, Water Specialist, World Bank
                <a
                  href="https://www.linkedin.com/in/zarifrasul" // Replace with the correct URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </p>
              {/* comment */}
              <p className="text-[30px]  font-base leading-relaxed text-justify">
                “Perseverance, adaptability, and cultural sensitivity are
                essential skills for success in global development.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Content */}
      <div className="max-w-screen-md mx-auto px-8 py-8 bg-white ">
        {/* Question 1 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Can you share key highlights from your academic and professional
            journey before joining the World Bank as a Water Specialist under
            the Young Professionals Program?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            <span className="font-bold">Zarif Rasul:</span> Before joining the
            World Bank, I spent several years in the development space in
            Bangladesh, which laid the foundation for pursuing a PhD in
            environmental economics in the US. A key highlight of my career was
            contributing to national-level economic policies.
          </p>
        </div>

        {/* Add more questions here as needed */}
        {/* Question 2 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Pursuing a PhD requires strong commitment. In your experience,
            when is a PhD most valuable, and how has it influenced your career?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            <span className="font-bold">Zarif Rasul:</span> A PhD is best
            pursued by those with a deep interest in a topic and a desire to
            understand some of its intricacies. While the pursuit of knowledge
            is valuable in itself, a PhD also fosters qualities that spill over
            into other areas of life. For me, it was about developing the grit
            to tackle complex challenges and find solutions, even when they
            initially seemed impossible.
          </p>
        </div>

        {/* Question 3 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. How has your experience at the World Bank been so far? What
            advice would you give to those aspiring to work in multilateral
            organizations like the World Bank or Asian Development Bank?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            <span className="font-bold">Zarif Rasul:</span> It’s been a steep
            learning curve! The World Bank, like other multilateral
            organizations, is vast, with intricate internal operations and
            policies. However, a major advantage is the wealth of expertise
            available across nearly every aspect of development. The Bank offers
            regular webinars on diverse topics that staff can attend.
            Personally, beyond water, I’m also interested in energy and the
            renewable transition, and I’ve found the Bank’s extensive learning
            resources to be incredibly valuable. For those in the early stages
            of their careers and aspiring to work at the World Bank, my advice
            would be to find your niche and get actively involved in it. Whether
            it's through internships, volunteering for projects, or networking
            within your area of interest, the key is to immerse yourself in your
            chosen field. This will not only make you competitive, but also help
            you build meaningful connections and establish a strong foundation.
          </p>
        </div>

        {/* Question 4 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What career opportunities exist for emerging professionals
            focused on water issues? Could you share insights from a global
            perspective?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            <span className="font-bold">Zarif Rasul:</span> The water sector
            offers a wide range of opportunities for emerging professionals,
            from technical roles in private water companies to consultancies
            focused on policy development, environmental sustainability, and
            water infrastructure. There are also opportunities in public
            utilities for water and sanitation service delivery, while NGOs play
            a vital role in water advocacy and technical assistance. These
            entities require a diverse skill set beyond engineering expertise.
            For instance, public utilities in large cities need professionals
            with forecasting and demand management skills for effective
            infrastructure planning. Additionally, professionals with social
            studies backgrounds can address the human aspects of interventions.
            This highlights the broad skill set needed in the water sector.
          </p>
        </div>

        {/* Question 5 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Innovation is key to addressing the water and climate crisis. How
            does the World Bank ensure that innovative solutions reach the most
            vulnerable communities, particularly in low-income and
            climate-affected regions?
          </h2>

          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            <span className="font-bold">Zarif Rasul:</span> Innovation is one of
            the five core values of the World Bank, and it is something we
            inculcate into our operations. For instance, the World Bank supports
            utilities through the Utility of the Future program to identify,
            test and deploy innovative solutions towards achieving SDG 6. The
            World Bank also emphasizes the use of indigenous knowledge and helps
            local young entrepreneurs scale up their innovative and
            cost-effective solutions.
          </p>
        </div>

        {/* Question 6 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Based on your experience in Bangladesh’s water and sanitation
            sector, what do you see as the country’s biggest challenge in
            securing safe drinking water, and what are the best strategies to
            address it?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            <span className="font-bold">Zarif Rasul:</span> Bangladesh has made
            great strides in expanding access to drinking water. However, water
            contamination from arsenic, salinity, and heavy metals remain a
            major threat to public health. Large numbers of people are consuming
            water with unsafe levels of these contaminants, which then has a
            knock on impact on their economic productivity. The best strategies
            to tackle this crisis is to adopt a systems approach acknowledging
            the interconnected nature of this problem. It can involve
            technological solutions such as rainwater harvesting systems where
            appropriate. It can also include rethinking current agricultural
            practices which exacerbate water contamination.
          </p>
        </div>

        {/* 7 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. Reflecting on your career, what has brought you the most
            satisfaction, and who has been your biggest inspiration in the
            development sector and why?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            <span className="font-bold">Zarif Rasul:</span> Throughout my
            career, I’ve been fortunate to work in environments that encouraged
            initiative and valued hard work. What I find most fulfilling,
            however, is the opportunity to learn under the tutelage of some of
            the leading experts in Bangladesh. My biggest inspiration has been
            Dr. Khairul Islam, who encouraged me to tap into my potential and
            take on greater responsibilities. I was also inspired by his ability
            to seamlessly navigate the fields of public health and economic
            policy formulation.
          </p>
        </div>

        {/* 8 */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#2D8CBB] text-justify">
            Q. What are the top three skills essential for success as a global
            development professional?
          </h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-justify">
            <span className="font-bold">Zarif Rasul:</span> I would say that
            perseverance, adaptability, and cultural sensitivity are essential
            skills for success in global development. The work can often be
            demanding, requiring the ability to power through tough challenges.
            Additionally, encountering diverse perspectives and approaches is
            inevitable, so being open to change and having the humility to
            reconsider one’s own ideas are crucial for success.
          </p>
        </div>

        <p className="text-[#001844] text-2xl mt-4 leading-relaxed text-center font-semibold bg-yellow-200 p-2 rounded-md">
          Interview conducted by{" "}
          <Link
            href="/sizear"
            className="text-blue-700 font-bold hover:underline"
          >
            Monaemul Islam Sizear
          </Link>
        </p>
      </div>

      {/* Footer */}
      {/* Bio of Dr. Madhukar pai */}
      {/* <DrMadhukarPaiBio /> */}
      <BioOfZarif />
    </div>
  );
};

export default DevelopmentPerspective;
