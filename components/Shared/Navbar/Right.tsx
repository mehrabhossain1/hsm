import { Button } from "@/components/ui/button";

const Right = () => {
  return (
    <div className="relative flex items-center justify-center h-30 pe-4">
      {/* Background Colors */}
      <div className="absolute right-0 top-0 h-full w-full">
        {/* Top Background Color */}
        <div className="absolute top-0 right-0 w-full h-[60%] bg-[#060B4D] border-b-2 border-[#FFBF00]"></div>
        {/* Bottom Background Color */}
        <div className="absolute bottom-0 right-0 w-full h-[40%] bg-[#186076]"></div>
      </div>

      {/* Centered Buttons */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2">
        <div className="flex gap-2 mt-3">
          <Button size="sm" variant="secondary" className="bg-[#FFBF00]">
            Gift
          </Button>
          <Button size="sm" variant="outline">
            Get Involved
          </Button>
        </div>
        <div>
          <Button className="mt-3 px-4" variant="destructive" size="sm">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Right;
