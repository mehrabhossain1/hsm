import { Button } from "@/components/ui/button";

const RightSide = () => {
  return (
    <div className="flex gap-1 justify-center items-center">
      <Button
        variant="outline"
        className="bg-transparent text-white border-[#FFCE00]"
      >
        Gift
      </Button>
      <Button className="bg-[#FFCE00] text-black hover:text-white">
        Subscribe
      </Button>
      {/* <Button className="bg-[#FFCE00] text-black hover:text-white">
        Get Involved
      </Button> */}
      {/* <Button>Get Involved</Button> */}
    </div>
  );
};

export default RightSide;
