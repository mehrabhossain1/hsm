import { Carousel } from "@/components/ui/carousel";

const NewsNewsletter = () => {
  const slideData = [
    {
      title: "News",
      button: "Explore News",
      src: "https://cdn-icons-png.flaticon.com/512/3067/3067523.png",
    },
    {
      title: "Newsletter",
      button: "Explore Newsletter",
      src: "https://cdn-icons-png.flaticon.com/512/5893/5893924.png",
    },
  ];

  return (
    <div className="max-w-screen-xl min-h-dvh mx-auto px-8 relative overflow-hidden w-full h-full py-20 bg-[#FEC53F] rounded-2xl">
      <div className="flex justify-between items-center w-full mb-16">
        <h2 className="text-4xl font-semibold text-left">News & Newsletter</h2>{" "}
        {/* Section Title */}
        <p className="text-sm text-right text-gray-600">
          HSM is a resource hub, offering evidence-based insights, expert
          knowledge, global events, and career opportunities.
        </p>{" "}
        {/* Pitch Line */}
      </div>
      <Carousel slides={slideData} />
    </div>
  );
};

export default NewsNewsletter;
