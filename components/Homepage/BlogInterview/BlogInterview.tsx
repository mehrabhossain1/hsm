import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

const BlogInterview = () => {
  const tabs = [
    {
      title: "Blogs",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Blogs Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Interviews",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Interviews Tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-dvh my-20">
      <div className="w-full text-center mb-12">
        <h2 className="text-4xl font-semibold my-2">Blogs & Interviews</h2>{" "}
        {/* Section Title */}
        <p className="text-sm  text-gray-600 ">
          HSM is a resource hub, offering evidence-based insights, expert
          knowledge, global events, and career opportunities.
        </p>{" "}
        {/* Pitch Line */}
      </div>
      <div className="md:h-[20rem] [perspective:1000px] relative flex flex-col max-w-xl mx-auto w-full items-start justify-start my-2">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default BlogInterview;

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
