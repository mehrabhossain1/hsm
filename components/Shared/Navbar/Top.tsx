import Image from "next/image";
import Logo from "@/public/logo3.png";
import Link from "next/link";

const Top = () => {
  return (
    <div className="bg-[#001844] relative flex items-center p-4 h-16">
      {/* Left-aligned SIZEAR */}
      <Link
        href="/sizear"
        className="text-[#FFCE00] font-bold text-base absolute left-2 bottom-2"
      >
        SIZEAR
      </Link>

      {/* Centered Logo and Slogan */}
      <Link
        href="/"
        className="absolute top-0 left-[51%] transform -translate-x-1/2 flex flex-col items-center"
      >
        <Image className="" src={Logo} width={400} alt="hsm logo" />

        <div className="text-[#FFCE00] text-right absolute text-xs top-10 right-6 tracking-wider">
          Becoming a better global health leader
        </div>
      </Link>
    </div>
  );
};

export default Top;
