import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SectionTitle = ({
  title,
  subTitle,
  href,
}: {
  title: string;
  subTitle: string;
  href?: string;
}) => {
  return (
    <div className="flex gap-5 items-center w-full">
      <Link href={href || "#"} className="text-4xl font-[1000] text-[#001844]">
        {title}
      </Link>
      <Separator orientation="vertical" className="h-10 w-1 bg-[#FFCE00]" />

      <p className="text-lg text-gray-600 font-semibold text-justify">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
