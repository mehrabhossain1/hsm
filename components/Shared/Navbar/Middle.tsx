import Image from "next/image";
import Logo from "@/public/logo3.png";

const Middle = () => {
  return (
    <div className="relative">
      <Image className="" src={Logo} width={400} alt="hsm logo" />
      <div className="text-[#FEC53F] text-right absolute text-xs top-10 right-6">
        Becoming a better global health leader
      </div>
    </div>
  );
};

export default Middle;
