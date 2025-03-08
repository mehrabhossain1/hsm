"use client";

import { motion } from "framer-motion";

const steps = [
  //   { text: "HSM Offers", bg: "bg-blue-800", clip: "clip-right" },
  { text: "Resources", bg: "bg-[#1E60AC]", clip: "clip-left" },
  { text: "Insights", bg: "bg-[#208BD1]", clip: "clip-middle" },
  { text: "Events", bg: "bg-[#2E8ED2]", clip: "clip-middle" },
  { text: "Career", bg: "bg-[#35A6EA]", clip: "clip-middle" },
];

export default function StepArrows() {
  return (
    <div className="flex items-center overflow-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#48AFDF] text-white font-semibold px-6 py-6 clip-right mx-5"
      >
        HSM Offers
      </motion.div>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className={`${step.bg} text-white font-semibold px-8 py-3 ${
            step.clip
          } ${index !== steps.length - 1 ? "mr-[-15px]" : ""}`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5 + index * 0.3,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {step.text}
        </motion.div>
      ))}
    </div>
  );
}
