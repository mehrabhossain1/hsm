import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons"; // Import the type for icons
import Link from "next/link";

interface BookMarksSectionCardProps {
  title: string;
  description: string;
  href: string;
  Icon: IconType;
}

const BookMarksSectionCard: React.FC<BookMarksSectionCardProps> = ({
  title,
  description,
  href,
  Icon,
}) => {
  return (
    <Card className="border border-[#01748D] hover:border-[#F18A00] h-full hover:bg-white p-4 transition-transform transform rounded-none shadow-sm bg-[#F4F3F0] hover:shadow-md ">
      <CardHeader className="flex flex-col items-center justify-center space-y-2">
        {/* Icon at the top, smaller size */}
        <Icon className="text-6xl text-[#01748D] mb-4" />

        {/* Title */}
        <CardTitle className="text-xl font-semibold mb-2 text-center text-gray-700 underline-offset-4 hover:decoration-[#F18A00]">
          <Link href={href} className="hover:underline ">
            {title}
          </Link>
        </CardTitle>

        {/* Description */}
        <CardDescription className="mt-1 text-base line-clamp-4 text-justify text-gray-600 ">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Smaller "Read More" Button inside the card */}
      <CardFooter className="flex items-center justify-center mt-4">
        <Link
          href={href}
          className="px-4 py-1 text-base font-medium text-white bg-[#01748D] rounded-md flex justify-center items-center gap-1 transition-all duration-300 transform hover:bg-[#F18A00] hover:scale-105 hover:shadow-sm"
        >
          <span>Explore</span>
          <span className="text-base">→</span> {/* Smaller arrow */}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BookMarksSectionCard;
