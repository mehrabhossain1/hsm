import { Button } from "@/components/ui/button";

const RightSide = () => {
  return (
    <div className="flex gap-1 justify-center items-center">
      <Button
        variant="outline"
        className="bg-transparent text-white border-[#FEC53F]"
      >
        Gift
      </Button>
      <Button className="bg-[#FEC53F] text-black hover:text-white">
        Subscribe
      </Button>
      {/* <Button>Get Involved</Button> */}
    </div>
  );
};

export default RightSide;
