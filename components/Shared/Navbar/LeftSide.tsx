import Image from "next/image";
import SizearImage from "@/public/sizearImage.jpg";
import Link from "next/link";
// import { Button } from "@/components/ui/moving-border";

const LeftSide = () => {
  return (
    <div className="flex gap-2 items-center justify-center py-1 cursor-pointer">
      <Image
        src={SizearImage}
        alt="sizear"
        className="rounded-full size-12 border-2 border-[#FEC53F]"
      />
      <Link href="/" className="text-xs">
        {/* <Button
          borderRadius="1.75rem"
          className="text-[#FEC53F]"
          borderClassName=""
        >
          SIZEAR
        </Button> */}
      </Link>
    </div>
  );
};

export default LeftSide;
