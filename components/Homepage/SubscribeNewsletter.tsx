"use client";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function SubscribeNewsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    // Simulate API call (Replace with actual API call)
    setTimeout(() => {
      setMessage("Thank you for subscribing! 🎉");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated!</h2>
      <p className="text-gray-600 mb-4">
        Subscribe to our newsletter and never miss an update.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row gap-3"
      >
        <div className="relative w-full">
          <Mail className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>

      {message && <p className="mt-3 text-green-600">{message}</p>}
    </section>
  );
}
