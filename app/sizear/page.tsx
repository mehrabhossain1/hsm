import AboutSizear from "@/components/Sizear/AboutSizear";
import AreaOfFocus from "@/components/Sizear/AreaOfFocus";
import BookSection from "@/components/Sizear/Book";
import CareerTrajectory from "@/components/Sizear/CareerTrajectory";
import EducationalBackground from "@/components/Sizear/EducationalBackground";
import MoreAboutMe from "@/components/Sizear/MoreAboutMe";
import NewspaperColumns from "@/components/Sizear/NewspaperColumns";
import ProfessionalMembership from "@/components/Sizear/ProfessionalMembership";
import ProfessionalTraining from "@/components/Sizear/ProfessionalTraining";
import WritingsAndPublications from "@/components/Sizear/WritingsAndPublications";

const Sizear = () => {
  return (
    // min-h-[calc(100vh-115px)]
    // <section className="bg-gradient-to-b from-[#F9F6F3] to-white py-16 px-12">
    <section className="">
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

      {/* Professional Membership and Engagement  */}
      <ProfessionalMembership />
      {/* Professional Membership and Engagement  */}

      {/* Professional Training / Job-related Training Received */}
      <ProfessionalTraining />
      {/* Professional Training / Job-related Training Received */}

      {/* Educational Background / Academic Training  */}
      {/* Educational Background / Academic Training  */}
      <EducationalBackground />
      {/* Educational Background / Academic Training  */}

      {/* Writings and Publications */}
      <WritingsAndPublications />
      {/* Writings and Publications */}

      {/* Newspaper Columns */}
      <NewspaperColumns />
      {/* Newspaper Columns */}

      {/* Book */}
      <BookSection />
      {/* Book */}
    </section>
  );
};

export default Sizear;
