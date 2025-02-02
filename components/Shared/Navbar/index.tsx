import LeftSide from "./LeftSide";
import Middle from "./Middle";
import { NavbarDemo } from "./NavLinks/NavLinks";
import RightSide from "./RightSide";

const Navbar = () => {
  return (
    <div className="bg-[#001844]">
      <div className="flex justify-between px-4 mx-auto py-2">
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
