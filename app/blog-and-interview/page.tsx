import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BlogAndInterviewPage = () => {
  return (
    <div className="bg-[#E0F2FF]">
      <div className="min-h-[calc(100vh-118px)] max-w-screen-xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb className="py-4 px-8 ">
          <BreadcrumbList>
            <BreadcrumbItem>
              {/* <BreadcrumbLink> */}
              <Link href="/">Home</Link>
              {/* </BreadcrumbLink> */}
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blog & Interview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Section title */}
        <div className="h-[60vh] border px-8 flex flex-col justify-center">
          <h1 className="text-5xl font-[1000] text-gray-800 mb-5">
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
    </div>
  );
};

export default BlogAndInterviewPage;
