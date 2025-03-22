"use client";
import img1 from "@/public/resources/overview.jpeg";
import img3 from "@/public/resources/reports.jpeg";

import ResourcesSectionCard from "@/components/ui/ResourcesSectionCard";

const resourcesSubLinks = [
    //     {
    //         title: "Overview",
    //         href: "/news/overview",
    //         description:
    //             "This section features Upcoming Events, which covers key global health conferences,
    // symposiums, webinars, campaigns, and health days. On the other hand, Headline News cover
    // current major global health issues demanding global attention. Meanwhile, the Do You Know
    // highlights significant public health milestones and fascinating facts. Explore a curated list of
    // notable health days and activities focused on global health.",
    //         img: img1,
    //     },
    {
        title: "Upcoming Event",
        href: "/news/upcoming-event",
        description: "",
        img: img3,
    },

    {
        title: "Headline News ",
        href: "/news/headline-news",
        description: "",
        img: img3,
    },

    {
        title: "Data in Global Health",
        href: "/news/do-you-know",
        description: "",
        img: img1,
    },
    {
        title: "Do You Know",
        href: "/news/do-you-know",
        description: "",
        img: img1,
    },
];

const NewsPage = () => {
    return (
        <div>
            {/* Page Title Section */}
            <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16 flex-wrap gap-6">
                        <h1 className="text-5xl font-[1000] text-white">
                            News
                        </h1>
                        <p className="text-base max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto">
                            This section features Upcoming Events, which covers
                            key global health conferences, symposiums, webinars,
                            campaigns, and health days. On the other hand,
                            Headline News cover current major global health
                            issues demanding global attention. Meanwhile, the Do
                            You Know highlights significant public health
                            milestones and fascinating facts. Explore a curated
                            list of notable health days and activities focused
                            on global health.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-screen-xl mx-auto py-16 px-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {resourcesSubLinks.map((link, index) => (
                    <ResourcesSectionCard
                        key={index}
                        title={link.title}
                        description={link.description}
                        imageUrl={link.img}
                        href={link.href}
                        // Add two buttons to the "Reports" card only
                        hasTwoButtons={link.title === "Reports"} // Only the Reports card gets two buttons
                        buttonLabels={
                            link.title === "Reports"
                                ? ["Major Reports", "Topic Wise Reports"]
                                : ["Explore"] // Other cards get only one button
                        }
                        buttonLinks={
                            link.title === "Reports"
                                ? [
                                      "/resources/reports/major-reports", // Major Reports link
                                      "/resources/reports/topic-wise-reports", // Topic Wise Reports link
                                  ]
                                : [link.href] // Other cards get their default href
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
