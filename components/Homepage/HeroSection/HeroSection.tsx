import { Separator } from "@/components/ui/separator";
import HSMOffers from "./HSMOffers";

import HeroImg from "@/public/hero/Hero_Right side.png";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="">
            <div className="max-w-screen-2xl mx-auto px-8 pb-20 ">
                <div className="flex items-center h-[380px] px-4 gap-12">
                    <div className="w-[65%]">
                        <div className="flex items-center justify-center ps-12">
                            <h2 className="text-3xl font-bold text-center mr-4 text-[#001844]">
                                Health <br /> System{" "}
                            </h2>{" "}
                            <Separator
                                orientation="vertical"
                                className="h-20 w-1 bg-red-500"
                            />{" "}
                            <h1 className="transform -rotate-90 text-3xl mr-5 font-semibold text-[#2D8CBB]">
                                {" "}
                                HUB{" "}
                            </h1>
                            {/* comment */}
                            {/* comment */}
                            <div>
                                <h2 className="text-[26px] font-bold text-[#35A6EA] text-center mb-4">
                                    Knowledge for Solutions
                                </h2>
                                <p className="text-justify text-base font-medium text-gray-600">
                                    <span className="font-bold">
                                        Health Systems Matter (HSM)
                                    </span>{" "}
                                    is a knowledge platform that covers global
                                    health issues. HSM empowers professionals by
                                    providing resources, insights, career
                                    opportunities, and news. It serves as a hub
                                    for staying informed and confident in the
                                    ever eveloving global health industry, where
                                    knowledge matters.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <HSMOffers />
                        </div>
                    </div>

                    <div className="w-72 h-72 overflow-hidden">
                        <Image
                            src={HeroImg}
                            alt="Hero Image"
                            className="w-full h-full"
                            priority
                            quality={100}
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>

                <div className="bg-[#001844] max-w-3xl mx-auto text-white text-center font-semibold text-lg py-4">
                    Do not settle.{" "}
                    <span className="text-[#FFCE00]">
                        Better public health starts with knowledge.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
