"use client";
import Image from "next/image";
import SizearImage from "@/public/sizearImage.webp";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Left = () => {
  const pathname = usePathname();

  // Define different background & text colors for specific routes
  const routeStyles: Record<string, { bg: string; text: string }> = {
    "/": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/about/about-hsm": { bg: "bg-[#00DFC0]", text: "text-gray-600" },
    "/contact": { bg: "bg-red-600", text: "text-white" },
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
    <div className="relative flex items-center h-30 ps-4">
      {/* Left section with two background colors */}
      <div className="absolute left-0 top-0 h-full w-full">
        {/* Top color */}
        <div className="absolute top-0 left-0 w-full h-[59%] bg-[#001844]"></div>
        {/* Bottom color */}
        <div className={`absolute bottom-0 left-0 w-full h-[41%] ${bg}`}></div>
      </div>

      {/* Profile Image */}
      <Link href="/sizear">
        <Image
          src={SizearImage}
          alt="sizear"
          className="relative z-10 rounded-full size-20 border-2 border-[#FFCE00]"
        />
      </Link>
    </div>
  );
};

export default Left;
