import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function TedrosQuote() {
    return (
        <section className="relative w-full bg-white">
            <div className="bg-[#001844] py-10 px-8 sm:px-8 lg:px-16">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
                    {/* Circular Image */}
                    <div className="w-56 h-56 shrink-0 rounded-full overflow-hidden ">
                        <Image
                            src="/interview/madhukar.jpg" // Replace with your actual image path
                            alt="Dr. Tedros"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full object-left"
                        />
                    </div>

                    <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-3xl">
                        <p className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-4">
                            — Prof Madhukar Pai, McGill University{" "}
                            <a
                                href="https://www.linkedin.com/in/zarifrasul" // Replace with the correct URL
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>
                        </p>

                        <p className="text-[30px] font-base leading-relaxed text-justify">
                            “Young people have great moral clarity. In fact,
                            climate activism, gun control, Black Lives Matter,
                            Decolonizing Global Health, and many other social
                            movements today are mostly led by youth.”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
