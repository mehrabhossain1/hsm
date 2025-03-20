"use client";

import Image from "next/image";
import { ArrowRight, BookText, BookOpen } from "lucide-react";
import TasdikDip from "@/public/interview-and-blogs/TasdikDip.jpg";
import blog1 from "@/public/interview-and-blogs/blog1.jpg";
import { FaLinkedin } from "react-icons/fa";

const BridgingTheGapsBlogPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="">
                {/* Title */}
                <h1 className="max-w-4xl text-center mx-auto py-5 text-3xl font-semibold text-[#001844] leading-snug">
                    Bridging the Gaps: Strengthening Mental Healthcare to Build
                    a Resilient Health System in Bangladesh
                </h1>

                {/* Author Section - Improved */}
                {/* <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-5">
                    <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-gray-700 shadow-md">
                        <Image
                            src={TasdikDip || "/placeholder.svg"}
                            alt="Dr. M Tasdik Hasan"
                            width={1000}
                            height={1000}
                            quality={100}
                            priority
                            className="object-cover"
                        />
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg text-gray-800 font-semibold">
                            Dr. M Tasdik Hasan
                        </p>
                        <p className="text-md text-gray-600 max-w-md">
                            Digital Mental Health Researcher, Action Lab,
                            Faculty of Information Technology, Monash
                            University, Melbourne, Australia
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Published on:{" "}
                            <span className="font-medium">
                                February 16, 2025
                            </span>
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                            <a
                                href="mailto:mtasdik.hasan@monash.edu"
                                className="text-gray-700 hover:text-[#001844] transition-colors"
                                aria-label="Email Dr. M Tasdik Hasan"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tasdikdip"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-[#0077b5] transition-colors"
                                aria-label="LinkedIn profile of Dr. M Tasdik Hasan"
                            >
                                <FaLinkedinIn className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div> */}

                <section className="relative w-full bg-white">
                    <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
                        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
                            {/* Circular Image */}
                            <div className="w-52 h-52 shrink-0 rounded-full overflow-hidden ">
                                <Image
                                    src={TasdikDip || "/placeholder.svg"}
                                    alt="Dr. M Tasdik Hasan"
                                    width={500}
                                    height={500}
                                    quality={100}
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-4xl">
                                <div className="text-center sm:text-left">
                                    <p className="text-xl text-gray-800 font-semibold">
                                        Dr. M Tasdik Hasan
                                    </p>
                                    <p className="text-md text-gray-800 max-w-md">
                                        Digital Mental Health Researcher, Action
                                        Lab, Faculty of Information Technology,
                                        Monash University, Melbourne, Australia
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Published on:{" "}
                                        <span className="font-medium">
                                            February 16, 2025
                                        </span>
                                    </p>
                                    <div className="flex items-center gap-3 mt-2">
                                        {/* <a
                                            href="mailto:mtasdik.hasan@monash.edu"
                                            className="text-gray-700 hover:text-[#001844] transition-colors"
                                            aria-label="Email Dr. M Tasdik Hasan"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a> */}
                                        <a
                                            href="https://www.linkedin.com/in/tasdikdip"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-[#001844] transition-colors"
                                            aria-label="LinkedIn profile of Dr. M Tasdik Hasan"
                                        >
                                            <FaLinkedin className="w-8 h-8" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Content Section - Reduced paragraph spacing */}
            <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm text-justify">
                {/* Key Issue Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#001844]">
                    <div className="flex items-center mb-4">
                        <BookOpen className="text-[#001844] w-5 h-5 mr-2" />
                        <h2 className="text-2xl font-semibold text-[#001844]">
                            Unseen Wounds: The Mental Health Crisis Bangladesh
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Mental health remains a critical yet often neglected
                            aspect of Bangladesh’s healthcare system. The
                            country faces significant challenges in addressing
                            mental health issues, exacerbated by systemic gaps
                            in healthcare delivery, societal stigma, and recent
                            socio-political unrest. The tragic events of July
                            2024, during which numerous innocent lives were lost
                            in a student-led protest, have underscored the
                            urgent need for a robust mental health framework.
                            The brutal crackdown by the former government,
                            marked by systematic torture, arbitrary arrests, and
                            excessive use of force, has left deep psychological
                            scars on the youth, who are now more vulnerable than
                            ever to mental health challenges.
                        </p>

                        {/* <blockquote className="pl-4 border-l-2 border-[#001844]/50 italic text-gray-600 my-4">
                            "The mental healthcare system in Bangladesh is
                            characterized by a lack of integration within the
                            broader health services, leading to fragmented care
                            pathways."
                        </blockquote> */}

                        <p>
                            The mental healthcare system in Bangladesh is
                            characterized by a lack of integration within the
                            broader health services, leading to fragmented care
                            pathways. Current mental health services are not
                            adequately incorporated into the universal health
                            coverage framework, disproportionately affecting
                            rural populations, who often face high out-of-pocket
                            expenses for private care{" "}
                            <span className="text-[#001844] font-medium">
                                (Koly, 2024)
                            </span>
                            . This issue is further compounded by a shortage of
                            qualified mental health professionals and an
                            insufficient number of public mental health
                            facilities. According to recent research, Bangladesh
                            has only four hospital beds per 10,000 people
                            available for mental health patients, highlighting a
                            severe gap in service provision{" "}
                            <span className="text-[#001844] font-medium">
                                (Hasan et al., 2021)
                            </span>
                            .
                        </p>

                        {/* <div className="bg-gray-50 p-4 rounded-md my-4">
                            <div className="font-semibold text-[#001844] mb-2">
                                Key Challenge:
                            </div>
                        </div> */}
                        <p>
                            Additionally, the absence of a structured referral
                            system complicates access to care, as patients often
                            seek services based on convenience rather than
                            clinical need{" "}
                            <span className="text-[#001844] font-medium">
                                (Nuri et al., 2018)
                            </span>
                            . Societal stigma surrounding mental health remains
                            a formidable barrier, preventing individuals from
                            seeking help.
                        </p>

                        <p>
                            This stigma is deeply ingrained in cultural
                            perceptions that frame mental illness as a personal
                            failing rather than a medical condition. As a
                            result, many individuals, particularly young people,
                            suffer in silence, leading to the worsening of their
                            mental health conditions. The psychological impact
                            of these challenges is profound, often manifesting
                            as heightened anxiety, depression, and
                            post-traumatic stress disorder among affected
                            individuals{" "}
                            <span className="text-[#001844] font-medium">
                                (Islam & Biswas, 2015)
                            </span>
                            .
                        </p>
                    </div>
                </div>

                <Image
                    src={blog1 || "/placeholder.svg"}
                    alt="blog"
                    width={800}
                    height={400}
                    quality={100}
                    className="max-w-screen-lg mx-auto h-96 object-cover"
                />

                {/* Call to Action Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#3B82F6]">
                    <div className="flex items-center mb-4">
                        <ArrowRight className="text-[#3B82F6] w-5 h-5 mr-2" />
                        <h2 className="text-2xl font-bold text-[#001844]">
                            Addressing the Gaps: A Call for Systemic Change
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            A multifaceted approach is required to address these
                            persistent challenges. Firstly, there is an urgent
                            need for policy reforms that elevate mental health
                            as a national priority. Integrating mental health
                            services into primary healthcare settings can
                            enhance accessibility and affordability, especially
                            for rural populations{" "}
                            <span className="text-[#001844] font-medium">
                                (Koly, 2024)
                            </span>
                            . Additionally, investing in training programs for
                            healthcare providers is crucial to equipping them
                            with the skills necessary to recognize and
                            effectively treat mental health conditions{" "}
                            <span className="text-[#001844] font-medium">
                                (Hasan et al., 2021)
                            </span>
                            .
                        </p>

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                            <div className="bg-blue-50 p-4 rounded-md">
                                <h3 className="font-semibold text-[#001844] mb-2">
                                    Community Initiatives
                                </h3>
                                <p className="text-sm">
                                    Community-based mental health initiatives
                                    can play a pivotal role in reducing stigma
                                    and increasing awareness.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-md">
                                <h3 className="font-semibold text-[#001844] mb-2">
                                    Digital Solutions
                                </h3>
                                <p className="text-sm">
                                    Leveraging digital technologies can broaden
                                    mental health outreach and education.
                                </p>
                            </div>
                        </div> */}

                        <p>
                            Beyond clinical care, community-based mental health
                            initiatives can play a pivotal role in reducing
                            stigma and increasing awareness. Engaging local
                            leaders, influencers, and educators in mental health
                            advocacy can help shift public perceptions and
                            encourage individuals to seek support without fear
                            of discrimination{" "}
                            <span className="text-[#001844] font-medium">
                                (Islam & Biswas, 2015)
                            </span>
                            . Leveraging digital technologies, including
                            telemedicine, innovative social media campaigns, and
                            co-designed digital support tools, can also broaden
                            mental health outreach and education.
                        </p>

                        <p>
                            Collaboration between the government,
                            non-governmental organizations, and international
                            partners is essential to creating supportive
                            environments that foster mental well-being. This is
                            particularly crucial in the aftermath of traumatic
                            events, such as the July protests, where mental
                            health support systems must be readily available for
                            affected individuals.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#F59E0B]">
                    <div className="flex items-center mb-4">
                        <BookText className="text-[#F59E0B] w-5 h-5 mr-2" />
                        <h2 className="text-2xl font-bold text-[#001844]">
                            The Urgency of Reform
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            The mental health landscape in Bangladesh is fraught
                            with challenges that demand immediate and systemic
                            intervention. The tragic loss of young lives,
                            unprecedented systemic violence, and the countless
                            injuries sustained during the recent protests
                            highlight the pressing need to strengthen mental
                            health services. Policy reforms—such as amending the
                            recent Mental Health Act and refining the National
                            Mental Health Strategic Plan 2020–2030—are critical
                            steps toward achieving a more inclusive and
                            responsive mental healthcare system.
                        </p>

                        {/* <div className="bg-amber-50 p-4 rounded-md my-4 border-l-2 border-[#F59E0B]">
                            <p className="font-medium text-gray-800">
                                "By strengthening professional training,
                                expanding community-based mental health
                                initiatives, integrating digital mental health
                                solutions, and fostering cross-sector
                                collaborations, Bangladesh can build a more
                                inclusive and resilient mental healthcare
                                system."
                            </p>
                        </div> */}

                        <p>
                            By strengthening professional training, expanding
                            community-based mental health initiatives,
                            integrating digital mental health solutions, and
                            fostering cross-sector collaborations, Bangladesh
                            can build a more inclusive and resilient mental
                            healthcare system. Addressing these critical gaps
                            will not only support the mental well-being of its
                            youth but also contribute to a stronger, more
                            equitable health system. The time for action is now.
                        </p>
                    </div>
                </div>

                {/* References Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-sm">
                    <h2 className="text-xl font-bold text-[#001844] mb-4 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                        References
                    </h2>

                    <div className="space-y-3 text-gray-700">
                        <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
                            <p>
                                Hasan, M., Anwar, T., Christopher, E., Hossain,
                                S., Hossain, M., Koly, K., … & Hossain, S.
                                (2021). The current state of mental healthcare
                                in bangladesh: part 1 – an updated country
                                profile. Bjpsych International, 18(4), 78-82.{" "}
                                <a
                                    href="https://doi.org/10.1192/bji.2021.41"
                                    target="_blank"
                                    className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                                    rel="noreferrer"
                                >
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </p>
                        </div>

                        <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
                            <p>
                                Islam, A. and Biswas, T. (2015). Mental health
                                and the health system in bangladesh: situation
                                analysis of a neglected domain. American Journal
                                of Psychiatry and Neuroscience, 3(4), 57.{" "}
                                <a
                                    href="https://doi.org/10.11648/j.ajpn.20150304.11"
                                    className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                                >
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </p>
                        </div>

                        <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
                            <p>
                                Koly, K. (2024). Stakeholder perspectives of
                                mental healthcare services in bangladesh, its
                                challenges and opportunities: a qualitative
                                study. Cambridge Prisms Global Mental Health,
                                11.{" "}
                                <a
                                    href="https://doi.org/10.1017/gmh.2024.30"
                                    className="text-blue-600 hover:text-blue-800 underline inline-flex items-centers"
                                >
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </p>
                        </div>

                        <div className="p-3 bg-white rounded border-l-2 border-gray-300 hover:border-[#001844] transition-colors">
                            <p>
                                Nuri, N., Sarker, M., Ahmed, H., Hossain, M.,
                                Beiersmann, C., & Jahn, A. (2018). Pathways to
                                care of patients with mental health problems in
                                bangladesh. International Journal of Mental
                                Health Systems, 12(1).{" "}
                                <a
                                    href="https://doi.org/10.1186/s13033-018-0218-y"
                                    className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
                                >
                                    Read more
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reading time and share options */}
                <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                    <div>
                        <span className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            3 min read
                        </span>
                    </div>
                    <div className="flex space-x-2">
                        <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BridgingTheGapsBlogPage;
