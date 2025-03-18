"use client";

import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "@/public/logo3.png";
import Image from "next/image";
// import { LinkPreview } from "@/components/ui/link-preview";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-10 bg-[#001844] text-white">
            <div className="max-w-[1200px] mx-auto">
                {/* Horizontal line with Back to Top button aligned right */}
                <div className="flex items-center justify-center gap-5 pb-6">
                    <div className="flex-1 border-t border-gray-400">
                        {/* Placeholder to push button to the right */}
                    </div>
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center space-x-2 text-lg font-semibold text-white hover:text-[#FFCE00] transition duration-300"
                        aria-label="Back to Top"
                    >
                        <span className="tracking-[3px]">BACK TO TOP</span>
                        <FaArrowUp className="text-2xl" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-3 ">
                    {/* First Grid */}
                    <div className="flex flex-col items-center justify-center">
                        <Image src={logo} alt="Logo" className="mb-6 w-80" />
                        <p className="pb-10  text-xs text-center">
                            Founded in 2024, HSM is a career development
                            platform for public health professionals around the
                            world.
                        </p>
                        <p className="font-bold  text-xs text-center">
                            Health Systems Matter
                        </p>
                        <p className="text-center  text-xs ">Bangladesh</p>
                    </div>

                    {/* Second Grid */}
                    <div className="flex flex-col text-xs">
                        <ul className="space-y-2 md:ps-28">
                            <li>
                                <Link href="/about" className="hover:underline">
                                    ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resources"
                                    className="hover:underline"
                                >
                                    RESOURCES
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/bookmarks"
                                    className="hover:underline"
                                >
                                    BOOKMARKS
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="hover:underline">
                                    NEWS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/newsletter"
                                    className="hover:underline"
                                >
                                    NEWSLETTER
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:underline">
                                    BLOG
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/interview"
                                    className="hover:underline"
                                >
                                    INTERVIEW
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/youtube"
                                    className="hover:underline"
                                >
                                    YOUTUBE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/testimonials"
                                    className="hover:underline"
                                >
                                    TESTIMONIAL
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:underline"
                                >
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Last Grid */}
                    <div className="flex flex-col items-center justify-center">
                        <blockquote className="mb-6 italic text-[#FFCE00] text-center">
                            “Believe work can be better. <br /> Know deeper. Do
                            Better.”
                        </blockquote>
                        <p className="font-semibold text-center">
                            Scope of Collaboration and Support
                        </p>

                        <div className="flex space-x-2">
                            <div className="flex gap-2 mt-3 w-[100px]">
                                <Button
                                    size="sm"
                                    variant="secondary"
                                    className="bg-[#FFCE00] w-[100px] font-bold hover:bg-[#e6b00e]"
                                >
                                    Support HSM
                                </Button>
                            </div>
                            <div>
                                <Button
                                    className="mt-3 px-4 font-bold w-[100px]"
                                    variant="destructive"
                                    size="sm"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Improved Copyright Section */}
                <div className="pt-6 mt-10 text- border-t border-gray-400">
                    <p className="text-sm tracking-wide text-center flex items-center justify-center gap-2">
                        &copy; {new Date().getFullYear()} Monaemul Islam Sizear.
                        All rights reserved.{" "}
                        <Link
                            href="/privacy-policy-and-terms-of-use"
                            className="font-bold underline text-blue-500"
                        >
                            Privacy Policy and Terms of use.
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
