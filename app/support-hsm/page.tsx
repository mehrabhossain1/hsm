/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { Heart, Gift } from "lucide-react";

export default function SupportHSM() {
  return (
    <div className="min-h-[calc(100vh-115px)] flex flex-col items-center justify-center bg-gradient-to-r from-pink-50 via-white to-pink-50 p-8 text-center">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
      >
        ❤️ Support{" "}
        <span className="text-pink-600">Health Systems Matter (HSM)</span>
      </motion.h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        We deeply value your support for Health Systems Matter—an impact-driven
        knowledge platform dedicated to advancing public health. Your
        contribution helps us spread valuable insights that strengthen global
        health systems and improve public health outcomes.
      </p>

      {/* Donation Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center justify-center gap-2">
          <Gift size={24} className="text-blue-600" /> Make a Gift
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Your generosity contributes directly to the growth of this platform,
          empowering us to continue promoting knowledge on critical global
          health issues.
        </p>
        <a
          href="https://www.bkash.com/send-money"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-pink-600 transition-all duration-300 shadow-sm"
        >
          Donate via Bkash
        </a>
      </motion.div>

      {/* Appreciation */}
      <p className="mt-6 text-gray-700 font-medium">
        We sincerely appreciate your support in driving positive change. 🙏
      </p>
    </div>
  );
}
