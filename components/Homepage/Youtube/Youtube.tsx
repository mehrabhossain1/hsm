import Image from "next/image";
import bg from "@/public/bg.jpeg";

const Youtube = () => {
  return (
    <section className="bg-[#001844]" id="youtube">
      <div className="flex flex-col gap-10 min-h-dvh px-8 items-center justify-center max-w-screen-xl mx-auto overflow-x-hidden lg:flex-row">
        {/* Text Section */}
        <div className="mb-8 lg:w-1/2 lg:mb-0 lg:pr-8">
          <div className="flex flex-row items-center gap-10 pb-10">
            <h1 className="text-4xl font-[1000] text-white whitespace-nowrap">
              YOUTUBE
            </h1>
            <div className="flex-1 ml-4 border-t border-white"></div>
          </div>
          <p className="text-lg text-slate-300">
            Health Systems Matter plans to launch a YouTube channel dedicated to
            exploring global health system issues and documenting expert
            knowledge through interviews. This initiative is currently in the
            planning phase and is scheduled for implementation next year. To
            stay informed about the channel&apos;s launch, please remain engaged
            with the site. Subscribe to our newsletter and follow our social
            media pages to receive updates.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <Image
            src={bg}
            alt="YouTube Channel"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Youtube;
