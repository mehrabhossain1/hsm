import AboutSizear from "@/components/Sizear/AboutSizear";
import AreaOfFocus from "@/components/Sizear/AreaOfFocus";
import AwardsandAchievements from "@/components/Sizear/AwardsandAchievements";
import BookSection from "@/components/Sizear/Book";
import CareerTrajectory from "@/components/Sizear/CareerTrajectory";
import ConnectandContact from "@/components/Sizear/ConnectandContact";
import EducationalBackground from "@/components/Sizear/EducationalBackground";
import Family from "@/components/Sizear/Family";
import Hobby from "@/components/Sizear/Hobby";
import MediaFeaturesandPresence from "@/components/Sizear/MediaFeaturesandPresence";
import MoreAboutMe from "@/components/Sizear/MoreAboutMe";
import NewspaperColumns from "@/components/Sizear/NewspaperColumns";
import ProfessionalJourney from "@/components/Sizear/ProfessionalJourney";
import ProfessionalMembership from "@/components/Sizear/ProfessionalMembership";
import ProfessionalTraining from "@/components/Sizear/ProfessionalTraining";
import WritingsAndPublications from "@/components/Sizear/WritingsAndPublications";

const Sizear = () => {
  return (
    // min-h-[calc(100vh-115px)]
    // <section className="bg-gradient-to-b from-[#F9F6F3] to-white py-16 px-12">
    <section className="">
      <AboutSizear />

      <MoreAboutMe />

      <CareerTrajectory />

      <AreaOfFocus />

      <ProfessionalMembership />

      <ProfessionalTraining />

      <EducationalBackground />

      <WritingsAndPublications />

      <NewspaperColumns />

      <BookSection />

      <AwardsandAchievements />

      <MediaFeaturesandPresence />

      <ProfessionalJourney />

      <Hobby />

      <Family />

      <ConnectandContact />
    </section>
  );
};

export default Sizear;
