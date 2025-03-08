"use client";

import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const VisionAndMissionPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Page Title Section */}
      <div className="relative w-full h-[150px] border-t-2 border-[#FFCE00] ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#01CAC2]/90 to-[#01CAC2]/30 flex items-center px-16">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center w-full px-8 flex-wrap gap-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Vision and Mission
            </h1>
            <p className="text-2xl max-w-3xl text-gray-800 font-semibold my-8 text-justify w-full md:w-auto"></p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <Breadcrumb className="py-4 px-16 max-w-screen-xl mx-auto">
          <BreadcrumbList>
            <BreadcrumbItem>
              {/* <BreadcrumbLink> */}
              <Link href="/" className="hover:underline ">
                HOME
              </Link>
              {/* </BreadcrumbLink> */}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {/* <BreadcrumbLink> */}
              <Link href="/about" className="hover:underline ">
                ABOUT
              </Link>
              {/* </BreadcrumbLink> */}
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="underline cursor-pointer">
                Vision and Mission
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="min-h-screen max-w-screen-xl mx-auto px-16 flex flex-col items-center justify-start ">
        {/* Vision Section */}
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-4">
          {/* Vision Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-business-strategy-concept_52683-75726.jpg?t=st=1741462040~exp=1741465640~hmac=89953c04640531a7d2fc98e95e016ef5f83f0b77545ea41b3d17140d5e43ed83&w=740"
              alt="Vision"
              width={1000}
              height={500}
              className="mix-blend-darken object-cover w-full"
            />
          </div>

          {/* Vision Content */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-700 text-justify">
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            <p>
              The vision of Health Systems Matter is to create an{" "}
              <strong>evidence-based platform</strong> that empowers emerging
              public health professionals to become{" "}
              <strong>informed and confident global health advocates,</strong>{" "}
              dedicated to promoting public health issues and contributing to
              global health.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Mission Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://img.freepik.com/free-vector/illustration-business-graph-analysis_53876-36925.jpg?t=st=1741461927~exp=1741465527~hmac=5932983634d764f40b05748cfd6b11f69cc9ff977c3a46a6dbb02c46dbb14d81&w=740"
              alt="Mission"
              width={1000}
              height={500}
              className="mix-blend-darken object-cover w-full "
            />
          </div>

          {/* Mission Content */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-700 text-justify">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p>
              Health Systems Matter’s mission is to provide{" "}
              <strong>comprehensive, health system-focused resources</strong>{" "}
              from diverse organizations to{" "}
              <strong>enhance the capabilities</strong> of public health
              professionals and promote public health issues. The platform
              offers significant news, publications, and insights, both
              historical and contemporary, covering a broad spectrum of topics
              relevant to all public health enthusiasts.
            </p>
          </div>
        </div>

        {/* Goal Section */}
        <div className="max-w-screen-xl mx-auto flex flex-col  items-center gap-4">
          {/* Goal Content */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-700 text-justify">
            <h2 className="text-2xl font-semibold text-gray-800">Our Goal</h2>
            <p>
              The goal of this initiative is to cultivate passionate and
              confident health systems advocates who recognize the importance of
              robust health systems and are committed to advancing global health
              outcomes
            </p>
          </div>

          {/* Goal Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://img.freepik.com/premium-vector/businessman-running-more-achievement-reward_7534-300.jpg?w=1060"
              alt="Goal"
              width={1000}
              height={500}
              className="mix-blend-darken object-cover w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMissionPage;
