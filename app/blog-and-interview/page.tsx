import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import { BlogCard } from "@/components/ui/BlogCard";

const BlogAndInterviewPage = () => {
  return (
    <div className="">
      {/* className="min-h-[calc(100vh-118px)] max-w-screen-xl mx-auto" */}
      <div>
        {/* Breadcrumb */}
        <div className="bg-[#E0F2FF]">
          <Breadcrumb className="py-4 px-8 max-w-screen-xl mx-auto">
            <BreadcrumbList>
              <BreadcrumbItem>
                {/* <BreadcrumbLink> */}
                <Link href="/">HOME</Link>
                {/* </BreadcrumbLink> */}
              </BreadcrumbItem>

              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>BLOG & INTERVIEW</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Section title */}
        <div className=" bg-[#E0F2FF] rounded-b-2xl">
          <div className="min-h-[calc(100vh-168px)] px-8 flex flex-col justify-center max-w-screen-xl mx-auto">
            <h1 className="text-5xl font-[1000] text-[#001844] mb-5">
              BLOG & INTERVIEW
            </h1>
            <p className="max-w-3xl text-xl text-gray-600">
              The blog covers diverse global health topics, offering thoughtful
              analysis from public health professionals through a health systems
              perspective. The interview section showcases the journeys and
              insights of global health advocates, highlighting their impactful
              experiences and perspectives.
            </p>
          </div>
        </div>
        {/* Blog */}
        <div className="py-20">
          <div className="max-w-screen-xl mx-auto px-8 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-[1000] text-[#001844] mb-2">
              Recent Blogs
            </h2>
            <p className="text-lg text-gray-600 flex flex-col items-center font-semibold">
              “I write to discover what I know.”{" "}
              <span>– Flannery O’Connor</span>
            </p>
            {/* <HoverEffect items={projects} /> */}
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-5 py-10">
              <BlogCard
                item={{
                  title:
                    "Bridging the Gaps: Strengthening Mental Healthcare to Build a Resilient Health System in Bangladesh",
                  description:
                    "Mental health remains a critical yet often neglected aspect of Bangladesh’s healthcare system. The country faces significant challenges in addressing mental health issues, exacerbated by systemic gaps in healthcare delivery, societal stigma, and recent socio-political unrest. The tragic events of July 2024, d",
                  date: "February 8, 2025",
                  type: "blog",
                  thumbnail:
                    "https://media.istockphoto.com/id/1252684502/photo/professional-blogger-working-on-his-new-post-for-social-media-at-home-closeup-creative.jpg?s=612x612&w=0&k=20&c=VR7V3Hn1HKjMQdykk2zjQ-2Xjsiw3tewZFZMp6swpog=",
                }}
              />

              <BlogCard
                item={{
                  title:
                    "Overcoming Budget Bottlenecks: Ensuring Effective Health Financing for Universal Health Coverage in Bangladesh",
                  description:
                    "To achieve Universal Health Coverage and the Sustainable Development Goals, at least 15% of total budget and 4-5% of gross domestic product (GDP) should be invested in healthcare in Bangladesh. However, t",
                  date: "February 8, 2025",
                  type: "blog",
                  thumbnail:
                    "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg",
                }}
              />
            </div>
            <Link href="/blog-and-interview/blog">
              <Button className="bg-[#156DF9] text-base text-white py-6 px-5 hover:bg-[#0660EF]">
                All Blogs{" "}
                <ArrowRightCircle className=" size-4 bg-[#156DF9] rounded-full text-white" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Interview */}
        <div className="bg-[#F0F8FF] rounded-2xl py-20">
          <div className="max-w-screen-xl mx-auto px-8 flex flex-col justify-center items-center">
            <SectionTitle
              title="Recent Interviews"
              subTitle="“An effective interview is a collaborative intellectual adventure”– Shahaduz Zaman"
              href="/blog-and-interview/interview"
            />

            {/* <HoverEffect items={projects} /> */}

            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 py-10">
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
                  title: "My Interview Experience",
                  description:
                    "I recently had an interview at XYZ company. Here’s what happened...",
                  date: "February 8, 2025",
                  type: "interview",
                  thumbnail:
                    "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg",
                }}
              />
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
                  title: "My Interview Experience",
                  description:
                    "I recently had an interview at XYZ company. Here’s what happened...",
                  date: "February 8, 2025",
                  type: "interview",
                  thumbnail:
                    "https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg",
                }}
              />
            </div>

            <Link href="/blog-and-interview/interview">
              <Button className="bg-[#156DF9] text-base text-white py-6 px-5 hover:bg-[#0660EF]">
                All Interviews{" "}
                <ArrowRightCircle className=" size-4 bg-[#156DF9] rounded-full text-white" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAndInterviewPage;
