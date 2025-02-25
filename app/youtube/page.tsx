/* eslint-disable react/no-unescaped-entities */
const YoutubePage = () => {
  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[150px]  border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-16 flex-wrap gap-6">
            <h1 className="text-5xl font-[1000] text-white">Youtube</h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-16 px-16">
        <p>
          Health Systems Matter plans to launch a YouTube channel dedicated to
          exploring global health system issues and documenting expert knowledge
          through interviews. This initiative is currently in the planning phase
          and is scheduled for implementation next year.
        </p>

        <p>
          To stay informed about the channel's launch, please remain engaged
          with the site. Subscribe to our newsletter and follow our social media
          pages to receive updates.
        </p>
      </div>
    </div>
  );
};

export default YoutubePage;
