import { Separator } from "@/components/ui/separator";

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="flex gap-5 items-center w-full">
      <h1 className="text-4xl font-[1000] text-gray-800">{title}</h1>
      <Separator orientation="vertical" className="h-10 w-1 bg-[#FEC53F]" />
      <p className="text-lg text-gray-600 font-semibold">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
