"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Facebook, FileText } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="py-16 bg-gradient-to-r from-fuchsia-50 via-white to-fuchsia-50 p-8 rounded-md shadow-sm">
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8">
          📞 <span>Connect and Contact</span>
          <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          You can connect with me on LinkedIn or Facebook. Feel free to reach
          out via email or phone.
        </p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 items-center"
        >
          <a
            href="https://www.linkedin.com/in/monaemulsizear/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg font-medium text-blue-700 hover:text-blue-900 transition-all duration-300"
          >
            <FaLinkedinIn size={24} className="text-blue-600" /> LinkedIn
          </a>
          <a
            href="https://www.facebook.com/monaemul.sizear"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg font-medium text-blue-700 hover:text-blue-900 transition-all duration-300"
          >
            <Facebook size={24} className="text-blue-600" /> Facebook
          </a>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-col gap-4 items-center"
        >
          <p className="flex items-center gap-3 text-lg text-gray-700">
            <Mail size={24} className="text-red-500" />{" "}
            sizear.monaemul@gmail.com
          </p>
          <p className="flex items-center gap-3 text-lg text-gray-700">
            <Phone size={24} className="text-green-500" /> +8801717143949
          </p>
        </motion.div>

        {/* CV Download */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-8"
        >
          <a
            href="/CV_Monaemul_Islam_Sizear.pdf"
            download="CV_Monaemul_Islam_Sizear.pdf"
            className="inline-flex items-center gap-3 bg-fuchsia-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-fuchsia-700 transition-all duration-300 shadow-sm"
          >
            <FileText size={24} /> Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
}
