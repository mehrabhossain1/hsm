import { Carousel } from "@/components/ui/carousel";

const NewsNewsletter = () => {
  const slideData = [
    {
      title: "News",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Newsletter",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="max-w-screen-xl min-h-dvh mx-auto px-4 relative overflow-hidden w-full h-full py-20">
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
