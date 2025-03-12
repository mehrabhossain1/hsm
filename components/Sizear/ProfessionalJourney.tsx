import PersonalJourney from "./PersonalJourney";
import QuickFacts from "./PersonalLife";
import TravelTrajectory from "./TravelTrajectory";

const ProfessionalJourney = () => {
  return (
    <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 pt-32 pb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
        Personal Journey/ Life Beyond Profession
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      {/* content */}
      <div>
        <p className="text-gray-700 leading-relaxed text-justify pt-4">
          Today, I am proud to embrace multiple roles in my life: Public Health
          Activist, Researcher, Writer, Organizer, Explorer, Son, Husband, and
          Father. Each of these roles shapes me better. And I am grateful and
          happy to carry them all.
        </p>
      </div>

      <PersonalJourney />

      <QuickFacts />

      <TravelTrajectory />
    </div>
  );
};

export default ProfessionalJourney;
