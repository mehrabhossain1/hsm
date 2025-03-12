/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Mail, Send } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(
        () => alert("✅ You've successfully subscribed to our Newsletter!"),
        1000
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-115px)] bg-gradient-to-r from-sky-50 via-white to-sky-50 p-6">
      <div className="max-w-2xl w-full  p-8  text-center">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          📩 Stay Informed – Subscribe Now!
        </motion.h3>
        <p className="text-gray-600 mt-2">
          Get the latest health system news delivered straight to your inbox.
        </p>

        {/* Subscription Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 flex flex-col sm:flex-row gap-4 items-center"
        >
          <input
            type="email"
            placeholder="Enter your email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-full rounded-md border border-gray-300 focus:ring-2 outline-none focus:ring-sky-500"
            required
          />
          <button
            onClick={handleSubscribe}
            className="bg-sky-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-sky-700 transition-all duration-300 shadow-sm flex items-center gap-2"
          >
            <Send size={18} /> Subscribe
          </button>
        </motion.div>

        {subscribed && (
          <p className="mt-4 text-green-600 font-semibold">
            ✅ Thank you for subscribing! You'll receive updates soon.
          </p>
        )}

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <p className="text-gray-700 font-medium">
            Follow us on social media:
          </p>
          <div className="flex gap-6 justify-center mt-3">
            <a
              href="https://www.linkedin.com/in/monaemulsizear/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-medium text-sky-700 hover:text-sky-900 transition-all duration-300"
            >
              <FaLinkedinIn size={22} className="text-blue-600" /> LinkedIn
            </a>
            <a
              href="https://www.facebook.com/monaemul.sizear"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-medium text-blue-700 hover:text-sky-900 transition-all duration-300"
            >
              <Facebook size={22} className="text-blue-600" /> Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
