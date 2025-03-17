/* eslint-disable react/no-unescaped-entities */
// import KnowledgeGiftSection from "@/components/GiftForU/KnowledgeGiftSection";
import React from "react";

const GiftForU = () => {
    return (
        // className="bg-gradient-to-r from-[#01748D]/10 via-white to-[#01748D]/10"
        <div>
            {/* <KnowledgeGiftSection /> */}
            <div className="relative w-full h-[120px] border-t-2">
                <div className="absolute inset-0 bg-gradient-to-b from-[#01748D]/90  to-[#01748D]/30 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-16 flex-wrap gap-6">
                        <h1 className="text-2xl md:text-4xl font-bold text-white">
                            Gift 4 U / Knowledge Gift
                        </h1>
                        {/* <p className="text-xl max-w-3xl text-gray-100 font-semibold my-8 text-justify w-full md:w-auto">
                            The Resources section aspire to be a repository of
                            essential resources on health systems and global
                            health.
                        </p> */}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-screen-lg py-8 mx-auto text-justify">
                <h3 className="text-xl">
                    <strong>Health Systems Matter</strong> is a knowledge
                    platform guided by the "Know Deeper, Do Better" approach. In
                    this spirit, we have created a comprehensive{" "}
                    <strong>Knowledge Gift</strong> for our followers. This
                    unique resource provides valuable insights to support your
                    public health and development career.
                </h3>
                <h3 className="text-xl mt-4">
                    Explore and enjoy the Knowledge Gift by putting the
                    information in the box and get it in your email.
                </h3>
            </div>

            <div className="max-w-screen-lg pb-8 mt-8 mx-auto text-justify flex flex-col md:flex-row items-center gap-6">
                {/* Left: Gift Box Form */}
                <div className="w-full md:w-1/2 bg-white ">
                    <h3 className="text-2xl font-bold text-gray-900">
                        Gift Box
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Fields marked with an{" "}
                        <span className="text-red-500">*</span> are required.
                    </p>

                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            required
                        />
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Submit
                    </button>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/your-image.jpg"
                        alt="Gift Image"
                        className="w-full h-auto "
                    />
                </div>
            </div>
        </div>
    );
};

export default GiftForU;
