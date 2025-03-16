const UpcomingEvent = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#2D8CBB] text-center mb-8">
                🗓️ Upcoming Events
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Global Health Days */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#FFCE00]">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        🌍 Global Health Days
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://www.who.int/campaigns"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                WHO Campaigns
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.pacehospital.com/world-healthdays"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                World Health Days - PACE
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://journal.paho.org/en/international-health-days"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                PAHO Health Days
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.cdc.gov/global-health/observances/index.html"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                CDC Health Observances
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Conferences */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#2D8CBB]">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        🎤 Conferences
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://publichealthconference.co/"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                Public Health Conference
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ephconference.eu/"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                European Public Health Conference
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.aphl.org/conferences/annualmeeting/Pages/default.aspx"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                APHL Annual Meeting
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Webinars */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#F18A00]">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        📺 Webinars
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://www.globalscientificguild.com/public-health/"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                Global Scientific Guild
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://eupha.org/eupha-webinars"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                EUPHA Webinars
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Events */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#34A853]">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        🎟️ Events
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://live.worldbank.org/en/home"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                World Bank Live
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.paho.org/en/events/international-health-days-events"
                                target="_blank"
                                className="text-blue-600 hover:text-[#F18A00]"
                            >
                                PAHO International Events
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;
