const ResourcesPage = () => {
  return (
    <div>
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D8CBB]/90 to-[#2D8CBB]/30 flex items-center">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-5xl font-[1000] text-white">Resources</h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto">
              The Resources section aspire to be a repository of essential
              resources on health systems and global health.
            </p>
          </div>
        </div>
      </div>

      {/* Contents */}
    </div>
  );
};

export default ResourcesPage;
