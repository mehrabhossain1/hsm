// "use client";

import Image from "next/image";
import HeroSectionImage from "@/public/heroSection.png";

// import { Separator } from "@/components/ui/separator";
// import HeroImage from "@/public/HeroLeft.jpg";
// import Image from "next/image";

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
    //       <Separator orientation="vertical" className="h-28 w-1 bg-[#FEC53F]" />
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
    //           <span className="bg-[#FEC53F] font-semibold ">HSM</span> offers
    //           evidence and news withing your reach.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="bg-[#001844] rounded-2xl mt-10 text-center text-2xl py-5 text-[#FEC53F] max-w-3xl mr-3">
    //       Resources <span className="px-5">|</span> Insights{" "}
    //       <span className="px-5">|</span> Events <span className="px-5">|</span>{" "}
    //       Career
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-full h-[520px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroSectionImage}
          alt="hero"
          layout="fill" // Makes it cover the entire container
          objectFit="cover" // Ensures it scales properly
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
