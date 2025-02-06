"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HeroSection = () => {
  const words = `Knowledge for Solutions!
  Don’t settle.
  Better public health starts with knowledge.
  HSM offers evidence and news within your reach.`;

  return (
    <div className="grid grid-cols-2 min-h-[calc(100vh-120px)] items-center px-4 bg-[#E0F2FF]">
      <div>left</div>
      <div>
        <TextGenerateEffect duration={2} filter={false} words={words} />
      </div>
    </div>
  );
};

export default HeroSection;
