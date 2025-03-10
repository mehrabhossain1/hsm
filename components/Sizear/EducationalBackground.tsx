import EducationalJourney from "./EducationalJourney";
import MajorAcademicShortCourses from "./MajorAcademicShortCourses";

/* eslint-disable react/no-unescaped-entities */
const EducationalBackground = () => {
  return (
    <div className=" ">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 py-16 my-16 ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          Educational Background / Academic Training
          <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </h2>

        {/* Content  */}
        <div>
          <p className="text-gray-700 leading-relaxed text-justify pt-4">
            My expertise in knowledge generation spans several disciplines,
            starting with a foundation in Anthropology from{" "}
            <a
              href="https://www.ru.ac.bd/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              University of Rajshahi
            </a>
            . I furthered my education with two master's degrees: one in Public
            Health from the{" "}
            <a
              href="https://bracjpgsph.org/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              James P. Grant School of Public Health
            </a>{" "}
            as a USAID Scholar, and another in Urban Policy & Development from{" "}
            <a
              href="https://www.eur.nl/en"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Erasmus University Rotterdam
            </a>{" "}
            in the Netherlands as a World Bank Scholar. As a dedicated knowledge
            seeker and passionate public health professional, I stay current
            with the latest developments in my field. Recently, I completed a
            three-week, 4-credit on-site course in Health Policy and Financing
            at the{" "}
            <a
              href="https://www.kit.nl/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              KIT Royal Tropical Institute
            </a>{" "}
            in the Netherlands. Additionally, I continuously enhance my
            expertise through various online courses.
          </p>
        </div>

        <EducationalJourney />

        {/* Major Academic Short Courses */}
        <MajorAcademicShortCourses />
      </div>
    </div>
  );
};

export default EducationalBackground;
