"use client";

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import Link from "next/link";
import Image from "next/image";
import ShahPoran from "@/public/blogs/ShahParan.jpg";

const OvercomingBudgetBottleNeckPage = () => {
  return (
    <div>
      <div className="">
        {/* <div className="">
          <Breadcrumb className="py-4 px-8 max-w-screen-xl mx-auto">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/" className="text-gray-700">
                  HOME
                </Link>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-gray-900" />
              <BreadcrumbItem>
                <Link href="/blog-and-interview" className="text-gray-700">
                  BLOG & INTERVIEW
                </Link>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-gray-900" />
              <BreadcrumbItem>
                <Link href="/blog-and-interview/blog" className="text-gray-700">
                  BLOG
                </Link>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-gray-900" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#001844] ">
                  Overcoming Budget Bottlenecks by Md. Shah Paran
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div> */}

        <div className="text-center py-5 px-8 max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-[#001844] leading-snug ">
            Overcoming Budget Bottlenecks: Ensuring Effective Health Financing
            for Universal Health Coverage in Bangladesh
          </h1>

          {/* Author Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-5">
            {/* Author Image - Force Square Aspect Ratio */}
            <div className="relative w-24 h-24 overflow-hidden rounded-full border-4 border-[#001844] shadow-lg">
              <Image
                src={ShahPoran} // Replace with actual image URL
                alt="Dr. Shah Poran"
                fill // Fills the container while maintaining aspect ratio
                className="object-cover" // Ensures correct cropping
              />
            </div>

            {/* Author Details */}
            <div className="text-center sm:text-left">
              <p className="text-lg text-gray-800 font-semibold">
                Md. Shah Paran
              </p>
              {/* <p className="text-md text-gray-600 max-w-md">
                Digital Mental Health Researcher, Action Lab, Faculty of
                Information Technology, Monash University, Melbourne, Australia
              </p> */}

              {/* Published Date */}

              <p className="text-sm text-gray-500 mt-2">
                Published on:{" "}
                <span className="font-medium">February 16, 2025</span>
              </p>
            </div>
          </div>
        </div>
        <Image
          src="https://media.istockphoto.com/id/1252684502/photo/professional-blogger-working-on-his-new-post-for-social-media-at-home-closeup-creative.jpg?s=612x612&w=0&k=20&c=VR7V3Hn1HKjMQdykk2zjQ-2Xjsiw3tewZFZMp6swpog="
          alt="blog"
          width={600}
          height={400}
          className="max-w-screen-lg mx-auto h-96 object-cover"
        />

        {/* Content Section */}
        <div className="max-w-4xl mx-auto p-6 space-y-6 mt-8">
          {/* Introduction */}
          {/* <p className="text-lg text-gray-700 leading-relaxed">
          Mental health remains a critical yet often neglected aspect of
          Bangladesh’s healthcare system. The country faces significant
          challenges in addressing mental health issues, exacerbated by systemic
          gaps in healthcare delivery, societal stigma, and recent
          socio-political unrest.
        </p> */}

          {/* Key Issue Section */}
          <div className="bg-white p-8 text-justify ">
            <h2 className="text-2xl font-semibold text-[#001844] text-left">
              The Double-Edged Challenge: Low Health Budget Allocation and
              Underutilization
            </h2>
            <p className="text-gray-700 mt-4">
              To achieve Universal Health Coverage and the Sustainable
              Development Goals, at least 15% of total budget and 4-5% of gross
              domestic product (GDP) should be invested in healthcare in
              Bangladesh. However, the allocation for health sector has remained
              less than 1% of GDP for last couple of years. A significant amount
              of allocated budget remains unspent each year and returns to the
              Ministry of Finance (MOF). The health budget in Bangladesh has
              been riddled with the double-edged challenge of lower allocation
              and underutilization of the allocated budget over the years. This
              trend is heightening the precarity of people inducing higher
              out-of-pocket expenditure (OOP). According to the sixth Bangladesh
              National Health Accounts, people are paying over twothirds of
              their treatment costs from their pocket. The share of OOP in the
              country stands above 68%, which is higher than neighboring
              countries. Higher OOP on health is exacerbating the greater risk
              of incurring catastrophic health expenditure (CHE) and plunging
              people into poverty. This write-up briefly explores the key
              challenges of health budget in Bangladesh and proposes few ways
              out.
            </p>
          </div>

          {/* Call to Action Section */}
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#001844]">
              Barriers to Effective Health Budget Utilization
            </h2>
            <p className="text-gray-700 mt-4 text-justify">
              One of the main reasons of low health budget utilization rate is
              related to procurement related complications in health sector,
              which involves number of processes including timely preparation of
              annual work plan and annual procurement plan, as well as fast
              approval of the plans from higher authority. Health managers at
              different layers of the health sector lack adequate skills on
              procurement, audit, and public financial management since they are
              not primarily trained on these technical issues, which make them
              comparatively less efficient for proper planning and utilization
              of health budget. Besides, health managers often fear to spend the
              maximum budget due to procurement related complexities, and
              absence of risk protection system from the audit. The planning and
              budget from health facilities is an incremental one, where they
              increase 5-10% in all line items from their previous years’
              budget. The centralized health financing system allows limited
              scope to local level health managers to adjust the budget if
              required.
            </p>
            <p className="text-gray-700 mt-4 text-justify">
              The failure of prompt disbursement of allocated money from the MOF
              exacerbates the problem. Additionally, high health budget
              utilization rate does not necessarily indicate better access to
              and provision of high-quality health services. A reasonable and
              pragmatic approach on health budget does not merely focuses on
              optimum execution, but on areas of priorities, timely
              disbursement, and flexible financial management maintaining public
              procurement and finance rules.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#001844]">
              Potential Solutions for Better Health Financing
            </h2>
            <p className="text-gray-700 mt-4 text-justify">
              To overcome the above challenges, first, adequate training of
              health managers on public procurement system, public financial
              management, audit, planning and budgeting is a must. Keeping
              record of trained health managers and ensuring their placement in
              befitting places is also required. Second, the issue of timely
              disbursement of allocated money should be addressed by moving away
              from the centralized system and giving sufficient flexibility to
              the MOHFW and local level health managers in the Delegation of
              Financial Power so that they can adjust budgets as needed.
              However, such flexibility requires a comprehensive mechanism that
              ensures accountability as well as provides risk protection
              provision in procurement. Third, strengthening governance to
              address political interference and irregularities in procurement
              should be prioritized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OvercomingBudgetBottleNeckPage;
