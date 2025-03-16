const Overview = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-12">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#2D8CBB]">
                    🌍 Public Health Insights
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Stay updated on global health events, major headlines, and
                    fascinating public health milestones.
                </p>
            </div>

            {/* Three Sections in Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Upcoming Events */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#FFCE00]">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        📅 Upcoming Events
                    </h2>
                    <p className="text-gray-600">
                        Explore key health conferences, symposiums, webinars,
                        and campaigns happening worldwide.
                    </p>
                    <a
                        href="#events"
                        className="mt-3 inline-block text-blue-600 hover:text-[#F18A00] font-semibold"
                    >
                        View Events →
                    </a>
                </div>

                {/* Headline News */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#2D8CBB]">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        📰 Headline News
                    </h2>
                    <p className="text-gray-600">
                        Get insights into major public health challenges shaping
                        global policies and responses.
                    </p>
                    <a
                        href="#news"
                        className="mt-3 inline-block text-blue-600 hover:text-[#F18A00] font-semibold"
                    >
                        Read News →
                    </a>
                </div>

                {/* Do You Know? */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#34A853]">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        💡 Do You Know?
                    </h2>
                    <p className="text-gray-600">
                        Discover important public health milestones and
                        fascinating facts that impact lives globally.
                    </p>
                    <a
                        href="#facts"
                        className="mt-3 inline-block text-blue-600 hover:text-[#F18A00] font-semibold"
                    >
                        Learn More →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Overview;
