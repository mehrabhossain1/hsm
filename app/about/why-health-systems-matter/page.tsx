/* eslint-disable react/no-unescaped-entities */
"use client";

// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
// import whyHsmImg from "@/public/about/why-hsm.jpg";

const WhyHealthSystemsMatterPage = () => {
    const [openItems, setOpenItems] = useState<string[]>([""]);

    const questions = [
        {
            id: "item-1",
            question:
                "What inspired the establishment of Health Systems Matter, and what is its foundational background?",
            answer: (
                <>
                    <p className="mb-2">
                        <span className="font-bold">HSM:</span> Two key factors
                        inspired me to create the HSM knowledge platform.
                    </p>
                    <p className="mb-2">
                        <span className="">First,</span> early in my career in
                        public health, I faced significant challenges in
                        accessing relevant documents on the Bangladesh health
                        system. Understanding its complexities and gaining a
                        comprehensive overview was difficult due to the absence
                        of a centralized resource. This experience underscored
                        the need for a dedicated platform that systematically
                        compiles both local and global health system insights.
                        Recognizing this gap, I envisioned HSM as a continuously
                        updated resource hub, ensuring professionals have easy
                        access to the latest records in a well-documented
                        manner.
                    </p>
                    <p className="mb-2">
                        <span className="">Second,</span> over time, I gained
                        access to a wealth of resources, empirical experiences,
                        expert interactions, and participation in conferences
                        and seminars. This exposure enriched my understanding
                        and made me resourceful. I realized that developing a
                        knowledge platform could benefit both emerging and
                        established professionals by addressing their
                        information needs.
                    </p>
                    <p>
                        This realization led to the creation of HSM, with the
                        goal of making health system knowledge more accessible
                        and actionable.
                    </p>
                </>
            ),
            bgColor: "bg-blue-50",
        },
        {
            id: "item-2",
            question:
                "What is the primary mission and long-term vision of the platform?",
            answer: (
                <p>
                    <span className="font-bold">HSM:</span> My primary goal is
                    to help public health and development professionals become
                    more knowledgeable and confident. I want this platform to be
                    a reliable source of information. In the long run, I aim to
                    sustain HSM and make it a widely recognized knowledge hub.
                    My vision is for HSM to be a trusted resource for
                    evidence-based insights and expertise in public health and
                    development.
                </p>
            ),
            bgColor: "bg-green-50",
        },
        {
            id: "item-3",
            question:
                "How is this initiative funded, and what are its key financial resources?",
            answer: (
                <>
                    <p className="mb-2">
                        <span className="font-bold">HSM:</span> Funding is
                        always a challenge. So far, we have not received
                        external funding, nor have we actively pursued it. My
                        priority has been to first assess the platform's impact
                        and usability. For now, HSM operates entirely through
                        volunteer support of mine.
                    </p>
                    <p>
                        There is an opportunity for individuals or organizations
                        to{" "}
                        <a
                            className="underline text-blue-500 font-semibold"
                            href="/support-hsm"
                        >
                            support
                        </a>{" "}
                        if they find this initiative valuable. We have ambitious
                        plans and will explore funding opportunities in the
                        future. However, we remain committed to continuing this
                        work, regardless of financial constraints. That said,
                        securing funding would enable us to scale and enhance
                        the platform's reach and impact.
                    </p>
                </>
            ),
            bgColor: "bg-purple-50",
        },
        {
            id: "item-4",
            question:
                "What are the strategic goals and future development plans for Health Systems Matter?",
            answer: (
                <p>
                    <span className="font-bold">HSM:</span> I aim to make HSM a
                    valuable and reliable platform for global health
                    professionals. To achieve this, we continuously adapt to
                    user needs by providing top public health resources, event
                    updates, and career opportunities. Regular updates ensure
                    HSM remains relevant and impactful. Additionally, we seek to
                    build a network of advocates of HSM who can help expand its
                    reach and influence.
                </p>
            ),
            bgColor: "bg-amber-50",
        },
        {
            id: "item-5",
            question:
                "What have been your most significant experiences and insights gained through this initiative so far?",
            answer: (
                <>
                    <p className="mb-2">
                        <span className="font-bold">HSM:</span> This is a tricky
                        and tough question to answer, as my experience has been
                        mixed—mostly positive, with a few less encouraging
                        moments. However, I see value in all responses, as they
                        offer valuable insights and appreciation. When I reach
                        out to experts for technical contributions to HSM, they
                        are generally welcoming and supportive, not just of me
                        but of the platform's purpose. Many, even those I have
                        never met personally, have responded positively,
                        offering their commitment and expertise.
                    </p>
                    <p>
                        My key takeaway is that meaningful initiatives attract
                        strong support, even if some remain skeptical. I believe
                        that, over time, they too will recognize the value of
                        this work. I still believe, knowledge remains a powerful
                        tool, and the world needs informed professionals to
                        tackle complex public health challenges.
                    </p>
                </>
            ),
            bgColor: "bg-rose-50",
        },
    ];

    return (
        // <div className="bg-gradient-to-r from-[#6ACBD4]/10 via-white to-[#6ACBD4]/10">
        <div className="bg-white">
            {/* Page Title Section */}
            <div className="relative w-full border-t-2  bg-gradient-to-b from-[#6ACBD4]/90 to-[#6ACBD4]/30 py-8">
                <div className="max-w-screen-lg mx-auto px-10 ">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="w-full  text-left">
                            <h1 className="text-4xl font-bold text-gray-800">
                                Why Health Systems Matter?
                            </h1>
                            {/* <p className="mt-4 text-lg text-gray-700">
                                Understanding the importance of health systems
                                in global public health
                            </p> */}
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            {/* <Image
                                src={whyHsmImg || "/placeholder.svg"}
                                alt="Why Health Systems Matter"
                                width={200}
                                height={350}
                                className="max-w-full h-auto object-contain"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="bg-gradient-to-r from-[#6ACBD4]/10 via-white to-[#6ACBD4]/10"> */}
            <div className="bg-white">
                <Breadcrumb className="py-4 px-4 md:px-16 max-w-screen-xl mx-auto">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link href="/" className="hover:underline">
                                HOME
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <Link href="/about" className="hover:underline">
                                ABOUT
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="underline cursor-pointer">
                                Why HSM ?
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="max-w-screen-lg flex flex-col items-center justify-start mx-auto px-4 md:px-8 pb-8">
                <Accordion
                    type="multiple"
                    value={openItems}
                    onValueChange={(value) => setOpenItems(value)}
                >
                    {questions.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className={`mb-4 overflow-hidden shadow-none border-none ${item.bgColor} `}
                        >
                            <AccordionTrigger className="px-8 hover:no-underline hover:bg-opacity-80 text-left">
                                <div className="flex items-start">
                                    <span className="text-xl font-semibold pr-8 text-[#001844] text-justify">
                                        {item.question}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8  text-gray-700 text-base text-justify">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default WhyHealthSystemsMatterPage;
