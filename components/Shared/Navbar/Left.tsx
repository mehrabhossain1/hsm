import Image from "next/image";
import SizearImage from "@/public/sizearImage.webp";
import Link from "next/link";

const Left = () => {
  return (
    <div className="relative flex items-center h-30 ps-4">
      {/* Left section with two background colors */}
      <div className="absolute left-0 top-0 h-full w-full">
        {/* Top color */}
        <div className="absolute top-0 left-0 w-full h-[59%] bg-[#001844]"></div>
        {/* Bottom color */}
        <div className="absolute bottom-0 left-0 w-full h-[41%] bg-[#2D8CBB]"></div>
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
