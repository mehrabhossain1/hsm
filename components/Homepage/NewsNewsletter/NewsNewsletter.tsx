import { BlogCard } from "@/components/ui/BlogCard";
// import { Carousel } from "@/components/ui/carousel";

const NewsNewsletter = () => {
  // const slideData = [
  //   {
  //     title: "News",
  //     button: "Explore News",
  //     src: "https://cdn-icons-png.flaticon.com/512/3067/3067523.png",
  //   },
  //   {
  //     title: "Newsletter",
  //     button: "Explore Newsletter",
  //     src: "https://cdn-icons-png.flaticon.com/512/5893/5893924.png",
  //   },
  // ];

  return (
    <div className=" min-h-dvh mx-auto px-8 relative overflow-hidden w-full h-full py-20 bg-[#FFCE00] rounded-2xl">
      <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center w-full">
        <h2 className="text-4xl font-semibold text-left">News & Newsletter</h2>{" "}
        {/* Section Title */}
        <p className="text-sm text-right text-gray-600">
          HSM is a resource hub, offering evidence-based insights, expert
          knowledge, global events, and career opportunities.
        </p>{" "}
        {/* Pitch Line */}
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BlogCard
            item={{
              title: "React Best Practices",
              description:
                "Learn the top best practices for building scalable React apps...",
              date: "February 8, 2025",
              type: "blog",
              thumbnail:
                "https://media.istockphoto.com/id/1252684502/photo/professional-blogger-working-on-his-new-post-for-social-media-at-home-closeup-creative.jpg?s=612x612&w=0&k=20&c=VR7V3Hn1HKjMQdykk2zjQ-2Xjsiw3tewZFZMp6swpog=",
            }}
          />

          <BlogCard
            item={{
              title: "My Interview Experience at XYZ",
              description:
                "I recently had an interview at XYZ company. Here’s what happened...",
              date: "February 8, 2025",
              type: "interview",
              thumbnail:
                "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsNewsletter;
