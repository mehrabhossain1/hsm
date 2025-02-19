import Image from "next/image";
import Logo from "@/public/logo3.png";

const Top = () => {
  return (
    <div className="bg-[#001844] relative flex items-center p-4 h-16">
      {/* Left-aligned SIZEAR */}
      <div className="text-[#FFBF00] font-bold text-base absolute left-2">
        SIZEAR
      </div>

      {/* Centered Logo and Slogan */}
      <div className="absolute top-0 left-[54%] transform -translate-x-1/2 flex flex-col items-center">
        <Image className="" src={Logo} width={400} alt="hsm logo" />

        <div className="text-[#FFBF00] text-right absolute text-xs top-10 right-6 tracking-wider">
          Becoming a better global health leader
        </div>
      </div>
    </div>
  );
};

export default Top;
