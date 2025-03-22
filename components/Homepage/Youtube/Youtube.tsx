import Image from "next/image";
import bg from "@/public/youtube/youtube.webp";
import { Separator } from "@/components/ui/separator";

const Youtube = () => {
    return (
        <section
            className="bg-[#beceeb]  min-h-[720px] flex items-center justify-center"
            id="youtube"
        >
            {/* <div className="flex flex-col gap-10 min-h-dvh px-8 items-center justify-center max-w-screen-xl mx-auto overflow-x-hidden lg:flex-row">
      
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

        
      </div> */}

            <div className="max-w-screen-xl mx-auto px-16 py-16">
                <div className="flex justify-between mb-8">
                    <div className="flex gap-5 items-center w-full">
                        <h1 className="text-4xl font-[1000] text-[#001844]">
                            YOUTUBE
                        </h1>
                        <Separator
                            orientation="vertical"
                            className="h-[96px] w-1 bg-[#FFCE00]"
                        />

                        <p className="text-lg text-[#001844] font-semibold text-justify">
                            Health Systems Matter plans to launch a YouTube
                            channel dedicated to exploring global health system
                            issues and documenting expert knowledge through
                            interviews. This initiative is currently in the
                            planning phase and is scheduled for implementation
                            next year. To stay informed about the channel&apos;s
                            launch, please remain engaged with the site.
                            Subscribe to our newsletter and follow our social
                            media pages to receive updates.
                        </p>
                    </div>
                </div>
                {/* Image Section */}
                <div className="flex justify-center items-center max-w-2xl mx-auto">
                    <Image
                        src={bg}
                        alt="YouTube Channel"
                        className="w-full h-96 rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Youtube;
