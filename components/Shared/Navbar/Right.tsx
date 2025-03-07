"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Right = () => {
  const pathname = usePathname();

  // Define different background & text colors for specific routes
  const routeStyles: Record<string, { bg: string; text: string }> = {
    "/": { bg: "bg-[#2D8CBB]", text: "text-white" },
    "/about": { bg: "bg-green-600", text: "text-gray-100" },
    "/contact": { bg: "bg-red-600", text: "text-white" },
    "/dashboard": { bg: "bg-gray-900", text: "text-gray-300" },
    "/sizear": { bg: "bg-[#6ACBD4]", text: "text-gray-500" },
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
        <div className={`absolute bottom-0 right-0 w-full h-[40%] ${bg}`}></div>
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
  );
};

export default Right;
