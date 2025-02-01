import LeftSide from "./LeftSide";
import Middle from "./Middle";
import { NavbarDemo } from "./NavLinks/NavLinks";
import RightSide from "./RightSide";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between px-4 max-w-screen-xl mx-auto border-2 border-b-[#FEC53F]">
        <LeftSide />
        <Middle />
        <RightSide />
      </div>

      <div>
        <NavbarDemo />
      </div>
    </div>
  );
};

export default Navbar;
