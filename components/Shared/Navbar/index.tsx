// import LeftSide from "./LeftSide";
// import Middle from "./Middle";
// import { NavbarDemo } from "./NavLinks/NavLinks";
// import RightSide from "./RightSide";

import Left from "./Left";
import { NavbarDemo } from "./NavLinks/NavLinks";
import Right from "./Right";
import Top from "./Top";

const Navbar = () => {
  return (
    // <div className="bg-[#001844]">
    //   <div className="flex justify-between px-4 mx-auto py-2">
    //     <LeftSide />
    //     <Middle />
    //     <RightSide />
    //   </div>

    //   <div>
    //     <NavbarDemo />
    //   </div>
    // </div>

    <div className="flex">
      <Left />
      <div className="flex-1">
        <Top />
        <NavbarDemo />
      </div>
      <Right />
    </div>
  );
};

export default Navbar;
