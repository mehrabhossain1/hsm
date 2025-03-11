import CareerAndScholarship from "./CareerAndScholarship";
import PublicHealth from "./PublicHealth";

const NewspaperColumns = () => {
  return (
    <div className=" ">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16 py-16 my-16 ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center">
          Newspaper Columns
          <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </h2>

        <PublicHealth />

        <CareerAndScholarship />
      </div>
    </div>
  );
};

export default NewspaperColumns;
