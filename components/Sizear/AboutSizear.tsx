import Image from "next/image";

const AboutSizear = () => {
  return (
    <div className="max-w-screen-xl  mx-auto flex items-center px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-4 lg:gap-6">
        {/* Text Section - Left Side (55%) */}
        <div className="space-y-6 order-2 lg:order-1 text-justify px-8">
          <header className="space-y-2">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
              Monaemul Islam Sizear
            </h2>
            <p className="text-lg text-gray-600">
              Founder of Health Systems Matter
            </p>
            <p className="text-md text-gray-500 italic">
              Urban Public Health Anthropologist | Health System Activist
            </p>
          </header>

          <div className="text-gray-700 leading-relaxed">
            <p>
              I’m Monaemul Islam Sizear, widely known as Sizear. Public health
              is my profession and passion, pursued by choice. I currently serve
              as a Technical Advisor for the{" "}
              <a
                href="https://www.usaid.gov/global-health/health-areas/tuberculosis/resources/news-and-updates/global-accelerator-end-tb/health-systems-tb-hs4tb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                USAID Health System for TB project
              </a>
              , employed by{" "}
              <a
                href="https://www.opendevelopment.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Open Development
              </a>
              . I also volunteer as the Organizing Secretary for the{" "}
              <a
                href="https://publichealthfoundation.org.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Public Health Foundation of Bangladesh
              </a>
              , one of the country’s largest civil society organizations.
            </p>
            <p className="mt-4">
              My mission is to advance public health through evidence-based
              approaches and stronger health systems. To support this, I founded{" "}
              <span className="font-semibold">Health Systems Matter</span>, a
              platform leveraging a website and social media (
              <a
                href="https://www.linkedin.com/company/health-systems-matter/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://www.facebook.com/people/Health-Systems-Matter/61564171250656/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
              ) to promote and disseminate critical public health issues. I also
              write public health columns for national newspapers, blogs, and
              have published research in peer-reviewed journals.
              <span className="block mt-2 font-semibold italic">
                Sizear is pure health system.
              </span>
            </p>
          </div>
        </div>

        {/* Image Section - Right Side (45%) */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-full lg:h-auto lg:max-w-full group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            <Image
              src="/sizearImage.webp"
              alt="Monaemul Islam Sizear"
              // fill
              className="object-cover shadow-xl border-8 border-white transform z-10  hover:border-[#FFCE00]"
              // sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              priority
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSizear;
