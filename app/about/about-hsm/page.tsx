/* eslint-disable react/no-unescaped-entities */
"use client";

// import { Globe } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";

const AboutHSM = () => {
    return (
        <div>
            {/* Page Title Section */}
            <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00] ">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00DFC0]/90 to-[#00DFC0]/30 flex items-center px-16">
                    <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-8 flex-wrap gap-6">
                        <h1 className="text-4xl font-bold text-gray-800">
                            About HSM
                        </h1>
                        <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#00DFC0]/10 via-white to-[#00DFC0]/10">
                <Breadcrumb className="py-4 px-16 max-w-screen-xl mx-auto">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            {/* <BreadcrumbLink> */}
                            <Link href="/" className="hover:underline ">
                                HOME
                            </Link>
                            {/* </BreadcrumbLink> */}
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {/* <BreadcrumbLink> */}
                            <Link href="/about" className="hover:underline ">
                                ABOUT
                            </Link>
                            {/* </BreadcrumbLink> */}
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="underline cursor-pointer">
                                About HSM
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="bg-gradient-to-r from-[#00DFC0]/10 via-white to-[#00DFC0]/10">
                <div className="max-w-screen-lg mx-auto px-16 min-h-dvh">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-start gap-8 ">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 self-start pt-16">
                            <Image
                                src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?t=st=1741458983~exp=1741462583~hmac=b3e2408e08a16945b7b4c73f6b7107ed7ed245ab86ac724907dd0b62f99806a2&w=740"
                                alt="About HSM"
                                width={1000}
                                height={300}
                                className="w-80 h-auto object-cover mix-blend-darken"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 space-y-6 text-gray-700 py-16 text-justify">
                            <p>
                                <strong>"Information is power"</strong> and{" "}
                                <strong>
                                    "Evidence lies at the heart of public health
                                    policy."
                                </strong>
                            </p>
                            <p>
                                Inspired by these principles, Health Systems
                                Matter (HSM) offers essential resources on
                                health systems, public health events, and career
                                opportunities. HSM serves as an independent,
                                comprehensive global health resource, providing
                                updates on public health issues and career
                                opportunities.
                            </p>
                            <p>
                                By subscribing or visiting regularly, users can
                                stay informed about a wide range of documents
                                and news related to global health issues from
                                various organizations and life-changing career
                                opportunities.
                            </p>

                            <div className="space-y-4">
                                <p>
                                    <strong>
                                        The HSM site is useful for two primary
                                        reasons:
                                    </strong>
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Comprehensive Content:</strong>{" "}
                                        Covers impactful global health issues
                                        and career opportunities.
                                    </li>
                                    <li>
                                        <strong>Consistent Updates:</strong>{" "}
                                        Provides daily updates via social media,
                                        ensuring timely information.
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Health Systems Matter was launched on social
                                media (
                                <a
                                    href="https://linkedin.com"
                                    className="text-blue-600 underline hover:text-blue-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                                ,{" "}
                                <a
                                    href="https://facebook.com"
                                    className="text-blue-600 underline hover:text-blue-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>
                                ) on August 9, 2024. This website was launched
                                on February 20, 2025, to systematically preserve
                                all posted resources.
                            </p>

                            <p>
                                The site, passionately maintained by{" "}
                                <a
                                    href="https://example.com/about-sizear"
                                    className="text-blue-600 underline hover:text-blue-800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Monaemul Islam Sizear
                                </a>
                                , aims to enlighten many and foster impactful
                                careers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHSM;
