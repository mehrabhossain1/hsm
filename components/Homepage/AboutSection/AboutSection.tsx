import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export const projects = [
  {
    title: "About HSM",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    image: "https://via.placeholder.com/150",
    link: "https://stripe.com",
  },
  {
    title: "Vision & Mission",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Activities & Approach",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Why Health Systems Matter",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
];

const AboutSection = () => {
  return (
    <div className="rounded-2xl mt-5 bg-[url('/aboutbg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-screen-xl min-h-dvh mx-auto px-8 flex flex-col justify-center items-center">
        <SectionTitle
          title="About"
          subTitle="HSM is a resource hub, offering evidence-based insights, expert knowledge, global events and career opportunities."
        />
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default AboutSection;

<div className="flex justify-between items-center w-full mb-8">
  <h2 className="text-4xl font-semibold text-left">About</h2>{" "}
  {/* Section Title */}
  <p className="text-sm text-right text-gray-600">
    HSM is a resource hub, offering evidence-based insights, expert knowledge,
    global events, and career opportunities.
  </p>{" "}
  {/* Pitch Line */}
</div>;
