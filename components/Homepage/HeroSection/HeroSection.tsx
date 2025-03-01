// "use client";

// import Image from "next/image";
// import HeroSectionImage from "@/public/heroSection.png";

import { Separator } from "@/components/ui/separator";
import HSMOffers from "./HSMOffers";
// import HeroImage from "@/public/HeroLeft.jpg";
// import Image from "next/image";
import HeroImg from "@/public/hero/Hero_Right side.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    // bg-[#F9F6F3]
    // <div className="grid grid-cols-5 min-h-[calc(100vh-115px)] items-center px-8  rounded-2xl">
    //   <div className="col-span-2">
    //     {/* <Image src={HeroImage} alt="Hero Image" /> */}
    //   </div>
    //   <div className="col-span-3">
    //     <div className="flex items-center">
    //       <h2 className="text-3xl font-bold text-center mr-7 text-[#001844]">
    //         Health <br /> System
    //       </h2>
    //       <Separator orientation="vertical" className="h-28 w-1 bg-[#FFCE00]" />
    //       <h1 className="transform -rotate-90 text-5xl mr-5 font-semibold text-green-500">
    //         HUB
    //       </h1>

    //       <div className="space-y-2">
    //         <h2 className="text-3xl font-bold text-red-600">
    //           Knowledge for Solutions!
    //         </h2>
    //         <p className="text-lg text-sky-500">
    //           Don&apos;t settle. Better public health starts with knowledge.
    //         </p>
    //         <p className="text-lg text-[#001844]">
    //           <span className="bg-[#FFCE00] font-semibold ">HSM</span> offers
    //           evidence and news withing your reach.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="bg-[#001844] rounded-2xl mt-10 text-center text-2xl py-5 text-[#FFCE00] max-w-3xl mr-3">
    //       Resources <span className="px-5">|</span> Insights{" "}
    //       <span className="px-5">|</span> Events <span className="px-5">|</span>{" "}
    //       Career
    //     </div>
    //   </div>
    // </div>

    <div className="max-w-screen-2xl mx-auto px-8 min-h-[calc(100vh-115px)] mb-10">
      <div className="flex items-center h-[400px] px-4">
        <div className="w-[65%]">
          <div className="flex items-center">
            <h2 className="text-4xl font-bold text-center mr-7 text-orange-500">
              Health <br /> System{" "}
            </h2>{" "}
            <Separator
              orientation="vertical"
              className="h-20 w-1 bg-green-500"
            />{" "}
            <h1 className="transform -rotate-90 text-4xl mr-5 font-semibold text-[#2D8CBB]">
              {" "}
              HUB{" "}
            </h1>
            <div>
              <h2 className="text-3xl font-bold text-[#001844] text-center mb-4">
                Knowledge for Solutions
              </h2>
              <p className="text-justify text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis aspernatur ipsa neque nisi in consectetur! Optio
                magni perspiciatis hic animi est nobis, nihil laboriosam ut
                beatae ratione iste atque cumque?
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            {/* <div className="bg-[#001844] rounded-2xl mt-10 text-center text-2xl py-5 text-[#FFCE00] max-w-3xl mr-3">
            Resources <span className="px-5">|</span> Insights{" "}
            <span className="px-5">|</span> Events{" "}
            <span className="px-5">|</span> Career
          </div> */}
            <HSMOffers />
          </div>
        </div>

        <div className="w-[35%] h-full overflow-hidden">
          <Image
            src={HeroImg}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#001844] mt-2 text-white text-center font-semibold  text-2xl py-4  max-w-4xl mx-auto">
        Do not settle.{" "}
        <span className="text-[#FFCE00]">
          Better public health starts with knowledge.
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
