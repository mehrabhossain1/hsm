import Image from "next/image";
import SizearImage from "@/public/sizearImage.jpg";

const LeftSide = () => {
  return (
    <div className="flex gap-2 items-center justify-center pt-2 cursor-pointer">
      <Image src={SizearImage} alt="sizear" className="rounded-full size-12" />
      <div className="text-white  text-2xl">sizear</div>
    </div>
  );
};

export default LeftSide;
