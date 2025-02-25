/* eslint-disable react/no-unescaped-entities */
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
import TasdikDip from "@/public/TasdikDip.jpg";

const BridgingTheGapsBlogPage = () => {
  return (
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
                Bridging the Gaps by Dr. M Tasdik Hasan
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div> */}

      <div className="text-center py-5 px-8 max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-[#001844] leading-snug ">
          Bridging the Gaps: Strengthening Mental Healthcare to Build a
          Resilient Health System in Bangladesh
        </h1>

        {/* Author Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-5">
          {/* Author Image - Force Square Aspect Ratio */}
          <div className="relative w-24 h-24 overflow-hidden rounded-full border-4 border-[#001844] shadow-lg">
            <Image
              src={TasdikDip} // Replace with actual image URL
              alt="Dr. M Tasdik Hasan"
              fill // Fills the container while maintaining aspect ratio
              className="object-cover object-top" // Ensures correct cropping
            />
          </div>

          {/* Author Details */}
          <div className="text-center sm:text-left">
            <p className="text-lg text-gray-800 font-semibold">
              Dr. M Tasdik Hasan
            </p>
            <p className="text-md text-gray-600 max-w-md">
              Digital Mental Health Researcher, Action Lab, Faculty of
              Information Technology, Monash University, Melbourne, Australia
            </p>
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
            Unseen Wounds: The Mental Health Crisis Bangladesh
          </h2>
          <p className="text-gray-700 mt-4">
            Mental health remains a critical yet often neglected aspect of
            Bangladesh’s healthcare system. The country faces significant
            challenges in addressing mental health issues, exacerbated by
            systemic gaps in healthcare delivery, societal stigma, and recent
            socio-political unrest. The tragic events of July 2024, during which
            numerous innocent lives were lost in a student-led protest, have
            underscored the urgent need for a robust mental health framework.
            The brutal crackdown by the former government, marked by systematic
            torture, arbitrary arrests, and excessive use of force, has left
            deep psychological scars on the youth, who are now more vulnerable
            than ever to mental health challenges.
          </p>

          <p className="text-gray-700 mt-4">
            The mental healthcare system in Bangladesh is characterized by a
            lack of integration within the broader health services, leading to
            fragmented care pathways. Current mental health services are not
            adequately incorporated into the universal health coverage
            framework, disproportionately affecting rural populations, who often
            face high out-of-pocket expenses for private care (Koly, 2024). This
            issue is further compounded by a shortage of qualified mental health
            professionals and an insufficient number of public mental health
            facilities. According to recent research, Bangladesh has only four
            hospital beds per 10,000 people available for mental health
            patients, highlighting a severe gap in service provision (Hasan et
            al., 2021).
          </p>
          <p className="text-gray-700 mt-4">
            Additionally, the absence of a structured referral system
            complicates access to care, as patients often seek services based on
            convenience rather than clinical need (Nuri et al., 2018). Societal
            stigma surrounding mental health remains a formidable barrier,
            preventing individuals from seeking help. This stigma is deeply
            ingrained in cultural perceptions that frame mental illness as a
            personal failing rather than a medical condition. As a result, many
            individuals, particularly young people, suffer in silence, leading
            to the worsening of their mental health conditions. The
            psychological impact of these challenges is profound, often
            manifesting as heightened anxiety, depression, and post-traumatic
            stress disorder among affected individuals (Islam & Biswas, 2015).
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="bg-white p-6 rounded-lg text-justify">
          <h2 className="text-2xl font-bold text-[#001844]">
            Addressing the Gaps: A Call for Systemic Change
          </h2>
          <p className="text-gray-700 mt-4">
            A multifaceted approach is required to address these persistent
            challenges. Firstly, there is an urgent need for policy reforms that
            elevate mental health as a national priority. Integrating mental
            health services into primary healthcare settings can enhance
            accessibility and affordability, especially for rural populations
            (Koly, 2024). Additionally, investing in training programs for
            healthcare providers is crucial to equipping them with the skills
            necessary to recognize and effectively treat mental health
            conditions (Hasan et al., 2021).
          </p>
          <p className="text-gray-700 mt-4">
            Beyond clinical care, community-based mental health initiatives can
            play a pivotal role in reducing stigma and increasing awareness.
            Engaging local leaders, influencers, and educators in mental health
            advocacy can help shift public perceptions and encourage individuals
            to seek support without fear of discrimination (Islam & Biswas,
            2015). Leveraging digital technologies, including telemedicine,
            innovative social media campaigns, and co-designed digital support
            tools, can also broaden mental health outreach and education.
          </p>
          <p className="text-gray-700 mt-4">
            Collaboration between the government, non-governmental
            organizations, and international partners is essential to creating
            supportive environments that foster mental well-being. This is
            particularly crucial in the aftermath of traumatic events, such as
            the July protests, where mental health support systems must be
            readily available for affected individuals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg text-justify">
          <h2 className="text-2xl font-bold text-[#001844]">
            The Urgency of Reform
          </h2>
          <p className="text-gray-700 mt-4">
            The mental health landscape in Bangladesh is fraught with challenges
            that demand immediate and systemic intervention. The tragic loss of
            young lives, unprecedented systemic violence, and the countless
            injuries sustained during the recent protests highlight the pressing
            need to strengthen mental health services. Policy reforms—such as
            amending the recent Mental Health Act and refining the National
            Mental Health Strategic Plan 2020–2030—are critical steps toward
            achieving a more inclusive and responsive mental healthcare system.
          </p>
          <p className="text-gray-700 mt-4">
            By strengthening professional training, expanding community-based
            mental health initiatives, integrating digital mental health
            solutions, and fostering cross-sector collaborations, Bangladesh can
            build a more inclusive and resilient mental healthcare system.
            Addressing these critical gaps will not only support the mental
            well-being of its youth but also contribute to a stronger, more
            equitable health system. The time for action is now.
          </p>
        </div>

        {/* References Section */}

        <div className="bg-gray-200 p-4 rounded-md text-sm text-justify">
          <h2 className="text-xl font-bold text-[#001844]">References</h2>
          <p className="text-sm text-gray-700 mt-2">
            Hasan, M., Anwar, T., Christopher, E., Hossain, S., Hossain, M.,
            Koly, K., … & Hossain, S. (2021). The current state of mental
            healthcare in bangladesh: part 1 – an updated country profile.
            Bjpsych International, 18(4), 78-82.{" "}
            <a
              href="https://doi.org/10.1192/bji.2021.41"
              target="_blank"
              className="text-blue-600 underline"
            >
              Read more
            </a>
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Islam, A. and Biswas, T. (2015). Mental health and the health system
            in bangladesh: situation analysis of a neglected domain. American
            Journal of Psychiatry and Neuroscience, 3(4), 57.{" "}
            <a
              href="https://doi.org/10.11648/j.ajpn.20150304.11"
              className="text-blue-600 underline"
            >
              Read more
            </a>
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Koly, K. (2024). Stakeholder perspectives of mental healthcare
            services in bangladesh, its challenges and opportunities: a
            qualitative study. Cambridge Prisms Global Mental Health, 11.{" "}
            <a
              href="https://doi.org/10.1017/gmh.2024.30"
              className="text-blue-600 underline"
            >
              Read more
            </a>
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Nuri, N., Sarker, M., Ahmed, H., Hossain, M., Beiersmann, C., &
            Jahn, A. (2018). Pathways to care of patients with mental health
            problems in bangladesh. International Journal of Mental Health
            Systems, 12(1).{" "}
            <a
              href="https://doi.org/10.1186/s13033-018-0218-y"
              className="text-blue-600 underline"
            >
              Read more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BridgingTheGapsBlogPage;
