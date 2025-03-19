"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Right = () => {
    const pathname = usePathname();

    // Define different background & text colors for specific routes
    const routeStyles: Record<string, { bg: string; text: string }> = {
        "/": { bg: "bg-[#2D8CBB]", text: "text-white" },
        "/about/about-hsm": { bg: "bg-[#00DFC0]", text: "text-gray-600" },
        "/about/vision-and-mission": {
            bg: "bg-[#01CAC2]",
            text: "text-gray-800",
        },
        "/about/activities-and-approach": {
            bg: "bg-[#8EDBED]",
            text: "text-gray-800",
        },
        "/about/why-health-systems-matter": {
            bg: "bg-[#6ACBD4]",
            text: "text-gray-800",
        },

        // resources-and-bookmarks
        "/resources-and-bookmarks": { bg: "bg-[#2D8CBB]", text: "text-white" },
        // resources-and-bookmarks

        // resources
        "/resources": { bg: "bg-[#01748D]", text: "text-white" },
        "/resources/overview": { bg: "bg-blue-800", text: "text-white" },

        // resources

        "/contact": { bg: "bg-[#CDEDEC]", text: "text-gray-900" },

        "/dashboard": { bg: "bg-gray-900", text: "text-gray-300" },
        // "/sizear": { bg: "bg-[#6ACBD4]", text: "text-gray-500" },
        "/resources/essential-reading-list": {
            bg: "bg-blue-700/90",
            text: "text-gray-500",
        },
    };

    // Default colors if route not specified
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { bg, text } = routeStyles[pathname] || {
        bg: "bg-[#2D8CBB]", // Default background
        text: "text-white", // Default text color
    };

    return (
        <div className="relative flex items-center justify-center h-30 pe-4">
            {/* Background Colors */}
            <div className="absolute right-0 top-0 h-full w-full">
                {/* Top Background Color */}
                <div className="absolute top-0 right-0 w-full h-[60%] bg-[#001844] border-b-2 border-[#FFCE00]"></div>
                {/* Bottom Background Color */}

                {/* #186076 */}
                <div
                    className={`absolute bottom-0 right-0 w-full h-[40%] ${bg}`}
                ></div>
            </div>

            {/* Centered Buttons */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-2">
                <Link href="/support-hsm" className="flex gap-2 mt-3 w-[100px]">
                    <Button
                        size="sm"
                        variant="secondary"
                        className="bg-[#FFCE00] w-[100px] font-bold hover:bg-[#e6b00e]"
                    >
                        Support HSM
                    </Button>
                </Link>
                <div>
                    <Link href="/subscribe">
                        <Button
                            className="mt-3 px-4 font-bold w-[100px]"
                            variant="destructive"
                            size="sm"
                        >
                            Subscribe
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Right;
