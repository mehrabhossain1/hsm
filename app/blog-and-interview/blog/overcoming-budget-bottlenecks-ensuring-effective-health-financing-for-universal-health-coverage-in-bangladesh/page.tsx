"use client";

import Image from "next/image";
import { DollarSign, BarChart3, LightbulbIcon } from "lucide-react";
import ShahPoran from "@/public/interview-and-blogs/ShahParan.jpg";
import blog2 from "@/public/interview-and-blogs/blog2.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const OvercomingBudgetBottleNeckPage = () => {
    return (
        <div className="bg-gray-50 py-8 min-h-screen">
            <div className="">
                {/* Title */}
                <h1 className="max-w-4xl text-center mx-auto py-5 text-3xl font-semibold text-[#001844] leading-snug">
                    Overcoming Budget Bottlenecks: Ensuring Effective Health
                    Financing for Universal Health Coverage in Bangladesh
                </h1>

                {/* Author Section */}
                {/* <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-5">
                    <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-[#001844] shadow-lg">
                        <Image
                            src={ShahPoran || "/placeholder.svg"}
                            alt="Md. Shah Paran"
                            width={1000}
                            height={1000}
                            quality={100}
                            priority
                            className="object-cover"
                        />
                    </div>

                    <div className="text-center sm:text-left">
                        <p className="text-lg text-gray-800 font-semibold">
                            Md. Shah Paran
                        </p>
                        <p className="text-md text-gray-600 max-w-md">
                            Health Financing Specialist
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Published on:{" "}
                            <span className="font-medium">
                                February 16, 2025
                            </span>
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                            <a
                                href="mailto:shahparan@example.com"
                                className="text-gray-700 hover:text-[#001844] transition-colors"
                                aria-label="Email Md. Shah Paran"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shahparan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-[#0077b5] transition-colors"
                                aria-label="LinkedIn profile of Md. Shah Paran"
                            >
                                <FaLinkedinIn className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div> */}

                <section className="relative w-full bg-white">
                    <div className="bg-[#001844] py-10 px-4 sm:px-8 lg:px-16">
                        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:items-center gap-8">
                            {/* Circular Image */}
                            <div className="w-44 h-44 shrink-0 rounded-full overflow-hidden ">
                                <Image
                                    src={ShahPoran || "/placeholder.svg"}
                                    alt="Md. Shah Paran"
                                    width={500}
                                    height={500}
                                    quality={100}
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="bg-[#FFCE00] text-black p-4 sm:p-6 rounded-md shadow-md max-w-3xl">
                                <div className="text-center sm:text-left">
                                    <p className="text-lg text-gray-800 font-semibold">
                                        Md. Shah Paran
                                    </p>
                                    <p className="text-md text-gray-800 max-w-md">
                                        Health Financing Specialist
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Published on:{" "}
                                        <span className="font-medium">
                                            February 16, 2025
                                        </span>
                                    </p>
                                    <div className="flex items-center gap-3 mt-2">
                                        {/* <a
                                            href="mailto:shahparan@example.com"
                                            className="text-gray-700 hover:text-[#001844] transition-colors"
                                            aria-label="Email Md. Shah Paran"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a> */}
                                        <a
                                            href="https://www.linkedin.com/in/shahparan"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-[#001844] transition-colors"
                                            aria-label="LinkedIn profile of Md. Shah Paran"
                                        >
                                            <FaLinkedinIn className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm my-8">
                {/* Reading progress indicator */}
                {/* <div className="sticky top-0 z-10 bg-gray-50 pt-2 pb-4 mb-6">
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-[#001844]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Introduction</span>
                        <span>Challenges</span>
                        <span>Solutions</span>
                    </div>
                </div> */}

                {/* Key Issue Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#001844]">
                    <div className="flex items-center mb-4">
                        <DollarSign className="text-[#001844] w-5 h-5 mr-2" />
                        <h2 className="text-2xl font-semibold text-[#001844]">
                            The Double-Edged Challenge: Low Health Budget
                            Allocation and Underutilization
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        {/* <blockquote className="pl-4 border-l-2 border-[#001844]/50 italic text-gray-600 my-4">
                            "To achieve Universal Health Coverage and the
                            Sustainable Development Goals, at least 15% of total
                            budget and 4-5% of gross domestic product (GDP)
                            should be invested in healthcare in Bangladesh."
                        </blockquote> */}

                        <p>
                            To achieve Universal Health Coverage and the
                            Sustainable Development Goals, at least 15% of total
                            budget and 4-5% of gross domestic product (GDP)
                            should be invested in healthcare in Bangladesh.
                            However, the allocation for health sector has
                            remained less than 1% of GDP for last couple of
                            years. A significant amount of allocated budget
                            remains unspent each year and returns to the
                            Ministry of Finance (MOF). The health budget in
                            Bangladesh has been riddled with the double-edged
                            challenge of lower allocation and underutilization
                            of the allocated budget over the years. This trend
                            is heightening the precarity of people inducing
                            higher out-of-pocket expenditure (OOP). According to
                            the sixth Bangladesh National Health Accounts,
                            people are paying over twothirds of their treatment
                            costs from their pocket. The share of OOP in the
                            country stands above 68%, which is higher than
                            neighboring countries. Higher OOP on health is
                            exacerbating the greater risk of incurring
                            catastrophic health expenditure (CHE) and plunging
                            people into poverty. This write-up briefly explores
                            the key challenges of health budget in Bangladesh
                            and proposes few ways out.
                        </p>

                        {/* <div className="bg-gray-50 p-4 rounded-md my-4">
                            <div className="font-semibold text-[#001844] mb-2">
                                Key Challenge:
                            </div>
                            <p>
                                The health budget in Bangladesh has been riddled
                                with the double-edged challenge of lower
                                allocation and underutilization of the allocated
                                budget over the years. This trend is heightening
                                the precarity of people inducing higher
                                out-of-pocket expenditure (OOP).
                            </p>
                        </div> */}
                    </div>
                </div>
                <Image
                    src={blog2 || "/placeholder.svg"}
                    alt="Health budget and financing"
                    width={800}
                    height={400}
                    quality={100}
                    className="max-w-screen-lg mx-auto h-96 object-cover"
                />
                {/* Barriers Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#3B82F6]">
                    <div className="flex items-center mb-4">
                        <BarChart3 className="text-[#3B82F6] w-5 h-5 mr-2" />
                        <h2 className="text-2xl font-semibold text-[#001844]">
                            Barriers to Effective Health Budget Utilization
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            One of the main reasons of low health budget
                            utilization rate is related to procurement related
                            complications in health sector, which involves
                            number of processes including timely preparation of
                            annual work plan and annual procurement plan, as
                            well as fast approval of the plans from higher
                            authority. Health managers at different layers of
                            the health sector lack adequate skills on
                            procurement, audit, and public financial management
                            since they are not primarily trained on these
                            technical issues, which make them comparatively less
                            efficient for proper planning and utilization of
                            health budget. Besides, health managers often fear
                            to spend the maximum budget due to procurement
                            related complexities, and absence of risk protection
                            system from the audit. The planning and budget from
                            health facilities is an incremental one, where they
                            increase 5-10% in all line items from their previous
                            years’ budget. The centralized health financing
                            system allows limited scope to local level health
                            managers to adjust the budget if required.
                        </p>

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                            <div className="bg-blue-50 p-4 rounded-md">
                                <h3 className="font-semibold text-[#001844] mb-2">
                                    Skill Gaps
                                </h3>
                                <p className="text-sm">
                                    Health managers lack adequate skills on
                                    procurement, audit, and public financial
                                    management since they are not primarily
                                    trained on these technical issues.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-md">
                                <h3 className="font-semibold text-[#001844] mb-2">
                                    Centralized System
                                </h3>
                                <p className="text-sm">
                                    The centralized health financing system
                                    allows limited scope to local level health
                                    managers to adjust the budget if required.
                                </p>
                            </div>
                        </div> */}

                        <p>
                            The failure of prompt disbursement of allocated
                            money from the MOF exacerbates the problem.
                            Additionally, high health budget utilization rate
                            does not necessarily indicate better access to and
                            provision of high-quality health services. A
                            reasonable and pragmatic approach on health budget
                            does not merely focuses on optimum execution, but on
                            areas of priorities, timely disbursement, and
                            flexible financial management maintaining public
                            procurement and finance rules.
                        </p>

                        {/* <div className="bg-blue-50 p-4 rounded-md border-l-2 border-[#3B82F6] my-4">
                            <p className="font-medium text-gray-800">
                                "The failure of prompt disbursement of allocated
                                money from the MOF exacerbates the problem.
                                Additionally, high health budget utilization
                                rate does not necessarily indicate better access
                                to and provision of high-quality health
                                services."
                            </p>
                        </div> */}
                    </div>
                </div>

                {/* Solutions Section */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6 border-l-4 border-[#F59E0B]">
                    <div className="flex items-center mb-4">
                        <LightbulbIcon className="text-[#F59E0B] w-5 h-5 mr-2" />
                        <h2 className="text-2xl font-semibold text-[#001844]">
                            Potential Solutions for Better Health Financing
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            To overcome the above challenges, first, adequate
                            training of health managers on public procurement
                            system, public financial management, audit, planning
                            and budgeting is a must. Keeping record of trained
                            health managers and ensuring their placement in
                            befitting places is also required. Second, the issue
                            of timely disbursement of allocated money should be
                            addressed by moving away from the centralized system
                            and giving sufficient flexibility to the MOHFW and
                            local level health managers in the Delegation of
                            Financial Power so that they can adjust budgets as
                            needed. However, such flexibility requires a
                            comprehensive mechanism that ensures accountability
                            as well as provides risk protection provision in
                            procurement. Third, strengthening governance to
                            address political interference and irregularities in
                            procurement should be prioritized.
                        </p>

                        {/* <div className="bg-amber-50 p-5 rounded-md my-4">
                            <ol className="list-decimal pl-5 space-y-3">
                                <li>
                                    <span className="font-semibold">
                                        Training and capacity building:
                                    </span>{" "}
                                    Adequate training of health managers on
                                    public procurement system, public financial
                                    management, audit, planning and budgeting is
                                    a must. Keeping record of trained health
                                    managers and ensuring their placement in
                                    befitting places is also required.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Decentralization of financial power:
                                    </span>{" "}
                                    The issue of timely disbursement of
                                    allocated money should be addressed by
                                    moving away from the centralized system and
                                    giving sufficient flexibility to the MOHFW
                                    and local level health managers in the
                                    Delegation of Financial Power so that they
                                    can adjust budgets as needed.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Governance strengthening:
                                    </span>{" "}
                                    Strengthening governance to address
                                    political interference and irregularities in
                                    procurement should be prioritized.
                                </li>
                            </ol>
                        </div> */}

                        {/* <p>
                            Such flexibility requires a comprehensive mechanism
                            that ensures accountability as well as provides risk
                            protection provision in procurement. With these
                            measures in place, Bangladesh can work toward more
                            effective health financing that supports its goal of
                            achieving Universal Health Coverage.
                        </p> */}
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
                            2 min read
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

export default OvercomingBudgetBottleNeckPage;
