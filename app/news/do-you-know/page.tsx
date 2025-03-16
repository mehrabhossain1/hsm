const DoYouKnow = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-12">
            {/* Title Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#2D8CBB]">
                    🤔 Do You Know?
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mt-4">
                    Discover fascinating public health milestones, historical
                    breakthroughs, and eye-opening facts.
                </p>
            </div>

            {/* Information Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1 - Public Health Milestones */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-600">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        📅 Public Health Milestones Through the Years
                    </h2>
                    <p className="text-gray-600">
                        A journey through the key public health achievements
                        that have shaped the world.
                    </p>
                    <a
                        href="https://www.who.int/campaigns/75-years-of-improving-public-health/milestones#year-2015"
                        className="mt-3 inline-block text-blue-600 hover:text-[#F18A00] font-semibold"
                    >
                        Explore More →
                    </a>
                </div>

                {/* Card 2 - World Bank Funding */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-600">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        💰 World Bank Funding in Health Sector
                    </h2>
                    <p className="text-gray-600">
                        A look at how the World Bank is investing in global
                        health, nutrition, and population.
                    </p>
                    <a
                        href="https://www.bmj.com/world-bank"
                        className="mt-3 inline-block text-blue-600 hover:text-[#F18A00] font-semibold"
                    >
                        Learn More →
                    </a>
                </div>

                {/* Card 3 - History of Vaccination */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-orange-600">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        💉 History of Vaccination
                    </h2>
                    <p className="text-gray-600">
                        Explore how vaccines have transformed public health and
                        eradicated deadly diseases.
                    </p>
                    <a
                        href="https://historyofvaccines.org/"
                        className="mt-3 inline-block text-blue-600 hover:text-[#F18A00] font-semibold"
                    >
                        Read More →
                    </a>
                </div>

                {/* Card 4 - Global Health Facts */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-600">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        🌍 13 Eye-Opening Global Health Facts
                    </h2>
                    <p className="text-gray-600">
                        Discover crucial statistics on the state of health
                        worldwide.
                    </p>
                    <a
                        href="https://www.weforum.org/stories/2020/09/global-health-facts-un-sdgs/"
                        className="mt-3 inline-block text-blue-600 hover:text-[#F18A00] font-semibold"
                    >
                        Find Out More →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DoYouKnow;
