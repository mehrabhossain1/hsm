/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { Facebook, Gift } from "lucide-react";

export default function KnowledgeGiftSection() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email) {
            setSubscribed(true);
            setTimeout(
                () =>
                    alert(
                        "🎁 Your Knowledge Gift has been sent to your email!"
                    ),
                1000
            );
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-115px)] bg-gradient-to-r from-red-50 via-white to-red-50 p-6">
            <div className="max-w-screen-md w-full p-8  text-center">
                {/* Title */}
                <motion.h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    🎁 <span>Gift 4 U / Knowledge Gift</span>
                </motion.h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    "Knowledge is power." Subscribe now to receive valuable
                    insights and resources that will enrich your career!
                </p>

                {/* Subscription Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 items-center justify-center"
                >
                    <input
                        type="email"
                        placeholder="Enter your email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-4 py-2 w-full sm:w-auto rounded-md border border-red-300 focus:ring-2 outline-none focus:ring-red-500"
                        required
                    />
                    <button
                        onClick={handleSubscribe}
                        className="bg-red-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-sm"
                    >
                        Subscribe Now
                    </button>
                </motion.div>

                {subscribed && (
                    <p className="mt-4 text-green-600 font-semibold">
                        ✅ Thank you for subscribing! Your Knowledge Gift has
                        been sent.
                    </p>
                )}

                {/* Social Media Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-6"
                >
                    <p className="text-gray-700 font-medium mb-3">
                        Stay updated by following us:
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/monaemulsizear/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-lg font-medium text-blue-700 hover:text-blue-900 transition-all duration-300"
                        >
                            <FaLinkedinIn size={24} className="text-blue-600" />{" "}
                            LinkedIn
                        </a>
                        <a
                            href="https://www.facebook.com/monaemul.sizear"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-lg font-medium text-blue-700 hover:text-blue-900 transition-all duration-300"
                        >
                            <Facebook size={24} className="text-blue-600" />{" "}
                            Facebook
                        </a>
                    </div>
                </motion.div>

                {/* Knowledge Gift Download */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="mt-8"
                >
                    <a
                        href="/knowledge-gift/Knowledge_Gift_HSM_2025.pdf"
                        download="Knowledge_Gift.pdf"
                        className="inline-flex items-center gap-3 bg-red-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-sm"
                    >
                        <Gift size={24} /> Download Knowledge Gift
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
