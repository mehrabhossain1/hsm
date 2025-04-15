import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const AboutSizear = () => {
  return (
    <section className="relative w-full px-6 md:px-16 py-10 md:py-16 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden text-justify">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-200 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-green-200 opacity-10 rounded-full blur-2xl -translate-x-1/2"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-10 z-10">
        {/* Left content */}
        <div className="w-full md:w-1/2 text-gray-800">
          {/* Name */}
          <h1 className="text-[26px] font-bold text-gray-900">
            Monaemul Islam Sizear{" "}
            <span className="text-sm font-medium text-gray-600">
              (MSS, MPH, MSc)
            </span>
          </h1>

          {/* Titles */}
          <p className="mt-2 text-base">
            <span className="text-blue-600 font-medium">
              Founder of Health Systems Matter
            </span>
            <br />
            <span className="text-green-600 font-medium">
              Urban Public Health Anthropologist
            </span>{" "}
            |{" "}
            <span className="text-orange-600 font-medium">
              Health System Activist
            </span>{" "}
            |{" "}
            <span className="text-purple-600 font-medium">Aspiring Writer</span>
          </p>

          {/* Paragraphs */}
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-gray-700">
            <p>
              I am Monaemul Islam Sizear, widely known as Sizear. Public health
              is my profession, passion, and purpose by choice. My mission is to
              advance public health through evidence-based approaches and
              stronger health systems. To support this commitment, I initiated
              the Health Systems Matter platform, leveraging a website and
              social media to promote and disseminate critical public health
              issues. I also contribute public health columns to national
              newspapers and blogs, and have published research in peer-reviewed
              journals.
            </p>

            <p>
              I firmly realize that poor health outcomes are deeply rooted in
              low education levels, socio-economic disparities, structural
              inequalities, and weak governance. To address these complexities,
              I have pursued a multidisciplinary academic journey, combining
              studies in Anthropology, Public Health, and Urban Development
              Policy across institutions in Bangladesh and the Netherlands. This
              diverse expertise equips me to design holistic, innovative
              solutions to tackle global health challenges.
            </p>

            <p>
              Sizear is a health systems advocate who aspires to be a global
              health champion, committed to transforming lives.
            </p>

            <p className="font-semibold text-blue-700">
              Let’s build a healthier future together!
            </p>
          </div>

          {/* Contact Row */}
          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <a
              href="mailto:sizear.publichealth@gmail.com"
              className="text-sm text-gray-600 hover:text-blue-600 transition"
            >
              sizear.publichealth@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/monaemul-islam-sizear"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="flex justify-center md:justify-end items-start">
          <Image
            src="/sizearImage.webp"
            alt="Monaemul Islam Sizear"
            width={500}
            height={200}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSizear;
