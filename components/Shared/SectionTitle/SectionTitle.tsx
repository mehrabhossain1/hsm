import { Separator } from "@/components/ui/separator";

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="flex gap-5 justify-between items-center w-full">
      <div className="flex gap-6">
        <h1 className="text-4xl font-[1000] text-[#001844]">{title}</h1>
        <Separator orientation="vertical" className="h-10 w-1 bg-[#FFCE00]" />
      </div>
      <p className="text-lg text-gray-600 font-semibold  max-w-3xl">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionTitle;
