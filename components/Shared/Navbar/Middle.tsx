import Image from "next/image";
import Logo from "@/public/logo3.png";
import Link from "next/link";

const Middle = () => {
  return (
    <Link href="/" className="relative">
      <Image className="" src={Logo} width={400} alt="hsm logo" />
      <div className="text-[#FFCE00] text-right absolute text-xs top-10 right-6">
        Becoming a better global health leader
      </div>
    </Link>
  );
};

export default Middle;
