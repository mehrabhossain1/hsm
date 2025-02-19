import Image from "next/image";
import SizearImage from "@/public/sizearImage.webp";

const Left = () => {
  return (
    <div className="relative flex items-center h-30 ps-4">
      {/* Left section with two background colors */}
      <div className="absolute left-0 top-0 h-full w-full">
        {/* Top color */}
        <div className="absolute top-0 left-0 w-full h-[59%] bg-[#001844]"></div>
        {/* Bottom color */}
        <div className="absolute bottom-0 left-0 w-full h-[41%] bg-[#186076]"></div>
      </div>

      {/* Profile Image */}
      <Image
        src={SizearImage}
        alt="sizear"
        className="relative z-10 rounded-full size-20 border-2 border-[#FFCE00]"
      />
    </div>
  );
};

export default Left;
