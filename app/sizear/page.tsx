import AboutSizear from "@/components/Sizear/AboutSizear";
import AreaOfFocus from "@/components/Sizear/AreaOfFocus";
import CareerTrajectory from "@/components/Sizear/CareerTrajectory";
import MoreAboutMe from "@/components/Sizear/MoreAboutMe";

const Sizear = () => {
  return (
    // min-h-[calc(100vh-115px)]
    // <section className="bg-gradient-to-b from-[#F9F6F3] to-white py-16 px-12">
    <section className=" py-16 px-12">
      {/* Top section */}
      <AboutSizear />
      {/* Top section */}

      {/* More About Me */}
      <MoreAboutMe />
      {/* More About Me */}

      {/* Career Trajectory / Employment Journey  */}
      <CareerTrajectory />
      {/* Career Trajectory / Employment Journey  */}

      {/* Area of Focus and Research */}
      <AreaOfFocus />
      {/* Area of Focus and Research */}
    </section>
  );
};

export default Sizear;
