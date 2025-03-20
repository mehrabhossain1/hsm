/* eslint-disable react/no-unescaped-entities */
import knowledgeImage from "@/public/knowledge-gift/knowledgegift.webp";
import GiftForm from "@/components/gift-form";

export const metadata = {
    title: "Gift For U | Health Systems Matter",
    description: "Request your Knowledge Gift Box from Health Systems Matter",
};

export default function GiftForU() {
    return (
        <div>
            <div className="relative w-full h-[120px] border-t-2">
                <div className="absolute inset-0 bg-gradient-to-b from-[#01748D]/90 to-[#01748D]/30 flex items-center">
                    <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-4 md:px-16 flex-wrap gap-6">
                        <h1 className="text-2xl md:text-4xl font-bold text-white">
                            Gift 4 U / Knowledge Gift
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-lg py-8 mx-auto text-justify px-4">
                <h3 className="text-xl">
                    <strong>Health Systems Matter</strong> is a knowledge
                    platform guided by the "Know Deeper, Do Better" approach. In
                    this spirit, we have created a comprehensive{" "}
                    <strong>Knowledge Gift</strong> for our followers. This
                    unique resource provides valuable insights to support your
                    public health and development career.
                </h3>
                <h3 className="text-xl mt-4">
                    Explore and enjoy the Knowledge Gift by putting the
                    information in the box and get it in your email.
                </h3>
            </div>

            <section className="max-w-screen-lg mx-auto w-full px-4">
                <GiftForm image={knowledgeImage} />
            </section>

            <div className="max-w-screen-lg pb-16 text-center mx-auto py-8 px-4">
                <h3 className="text-xl mt-4">
                    Follow <strong>Health Systems Matter</strong> on{" "}
                    <a
                        href="https://www.linkedin.com/company/healthsystemsmatter" // Replace with actual LinkedIn URL
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://www.facebook.com/healthsystemsmatter" // Replace with actual Facebook URL
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>{" "}
                    for the latest resources and updates.
                </h3>
                <h3 className="text-xl mt-4">
                    Subscribe to the Health Systems Matter{" "}
                    <a
                        href="https://newsletter.healthsystemsmatter.com" // Replace with actual Newsletter URL
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Newsletter
                    </a>{" "}
                    for periodic insights and news in your email.
                </h3>
            </div>
        </div>
    );
}
