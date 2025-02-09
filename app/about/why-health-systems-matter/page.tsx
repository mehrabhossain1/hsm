"use client";

import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const WhyHealthSystemsMatterPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start max-w-screen-xl mx-auto p-6">
      {/* Title Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Why Health Systems Matter?
        </h1>
      </div>

      {/* Icon Section */}
      <div className="flex justify-center items-center mb-8">
        <TrendingUp size={60} className="text-red-500" />
      </div>

      {/* Content Section */}
      <div className="space-y-12 text-xl/9 text-gray-700 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Q1: What inspired the establishment of Health Systems Matter, and
            what is its foundational background?
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Sizear:</span> Two key factors
            inspired me to create the HSM knowledge platform.
          </p>
          <p className="mb-2">
            <span className="font-semibold">First,</span> early in my career in
            public health, I faced significant challenges in accessing relevant
            documents on the Bangladesh health system. Understanding its
            complexities and gaining a comprehensive overview was difficult due
            to the absence of a centralized resource. This experience
            underscored the need for a dedicated platform that systematically
            compiles both local and global health system insights. Recognizing
            this gap, I envisioned HSM as a continuously updated resource hub,
            ensuring professionals have easy access to the latest records in a
            well-documented manner.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Second,</span> over time, I gained
            access to a wealth of resources, empirical experiences, expert
            interactions, and participation in conferences and seminars. This
            exposure enriched my understanding and made me resourceful. I
            realized that developing a knowledge platform could benefit both
            emerging and established professionals by addressing their
            information needs.
          </p>
          <p>
            This realization led to the creation of HSM, with the goal of making
            health system knowledge more accessible and actionable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Q2: What is the primary mission and long-term vision of the
            platform?
          </h2>
          <p>
            <span className="font-semibold">Sizear:</span> My primary goal is to
            help public health and development professionals become more
            knowledgeable and confident. I want this platform to be a reliable
            source of information. In the long run, I aim to sustain HSM and
            make it a widely recognized knowledge hub. My vision is for HSM to
            be a trusted resource for evidence-based insights and expertise in
            public health and development.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Q3: How is this initiative funded, and what are its key financial
            resources?
          </h2>
          <p className=" mb-2">
            <span className="font-semibold">Sizear:</span> Funding is always a
            challenge. So far, we have not received external funding, nor have
            we actively pursued it. My priority has been to first assess the
            platform’s impact and usability. For now, HSM operates entirely
            through volunteer support of mine.
          </p>
          <p>
            There is an opportunity for individuals or organizations to{" "}
            <a className="underline text-blue-500" href="">
              support{" "}
            </a>
            if they find this initiative valuable. We have ambitious plans and
            will explore funding opportunities in the future. However, we remain
            committed to continuing this work, regardless of financial
            constraints. That said, securing funding would enable us to scale
            and enhance the platform’s reach and impact.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Q4: What are the strategic goals and future development plans for
            Health Systems Matter?
          </h2>
          <p>
            <span className="font-semibold">Sizear:</span> I aim to make HSM a
            valuable and reliable platform for global health professionals. To
            achieve this, we continuously adapt to user needs by providing top
            public health resources, event updates, and career opportunities.
            Regular updates ensure HSM remains relevant and impactful.
            Additionally, we seek to build a network of advocates of HSM who can
            help expand its reach and influence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Q5: What have been your most significant experiences and insights
            gained through this initiative so far?
          </h2>
          <p className="mb-2">
            <span className="font-semibold">Sizear:</span> This is a tricky and
            tough question to answer, as my experience has been mixed—mostly
            positive, with a few less encouraging moments. However, I see value
            in all responses, as they offer valuable insights and appreciation.
            When I reach out to experts for technical contributions to HSM, they
            are generally welcoming and supportive, not just of me but of the
            platform’s purpose. Many, even those I have never met personally,
            have responded positively, offering their commitment and expertise.
          </p>
          <p>
            My key takeaway is that meaningful initiatives attract strong
            support, even if some remain skeptical. I believe that, over time,
            they too will recognize the value of this work. I still believe,
            knowledge remains a powerful tool, and the world needs informed
            professionals to tackle complex public health challenges.
          </p>
        </div>
      </div>

      {/* Back Button Section */}
      <div className="mt-8 text-center">
        <motion.button
          className="px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
          onClick={() => router.push("/about")}
        >
          Back to About Page
        </motion.button>
      </div>
    </div>
  );
};

export default WhyHealthSystemsMatterPage;
