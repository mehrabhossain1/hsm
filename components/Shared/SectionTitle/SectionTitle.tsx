import { Separator } from "@/components/ui/separator";

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="flex justify-between items-center w-full mb-8">
      <h1 className="text-4xl font-bold text-gray-800 roboto-slab">{title}</h1>
      <Separator orientation="vertical" className="h-10 w-1 bg-[#FEC53F]" />
      <p className="text-lg  text-gray-700">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
