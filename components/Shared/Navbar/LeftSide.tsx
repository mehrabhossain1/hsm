import Image from "next/image";
import SizearImage from "@/public/sizearImage.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/moving-border";

const LeftSide = () => {
  return (
    <div className="flex items-center justify-center py-1 cursor-pointer">
      <Image
        src={SizearImage}
        alt="sizear"
        className="rounded-full size-12 border-2 border-[#FFCE00] hover:border-white"
      />
      <Link href="/" className="">
        <Button
          // borderRadius="1.75rem"
          className="text-[#FFCE00] underline underline-offset-2 text-lg hover:text-white"
          // borderClassName=""
        >
          SIZEAR
        </Button>
      </Link>
    </div>
  );
};

export default LeftSide;
