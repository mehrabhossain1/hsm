/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Facebook, Linkedin, Link, Mails } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebookF, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialShare = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      //   alert("URL copied to clipboard!");
    } catch (error) {
      alert("Failed to copy URL!");
    }
  };

  return (
    <div className="fixed z-50 top-1/2 right-0 transform -translate-y-1/2 flex flex-col">
      {/* LinkedIn Share */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white border border-black hover:bg-[#FFCE00] transition"
      >
        <FaLinkedinIn size={16} />
      </a>
      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white border-x border-b border-black  hover:bg-[#FFCE00] transition"
      >
        <Facebook size={16} />
      </a>
      <a
        href={`mailto:?subject=Check%20this%20out!&body=${encodeURIComponent(
          currentUrl
        )}`}
        className="p-2 bg-white border-x border-b border-black   hover:bg-[#FFCE00]  transition"
      >
        <Mails size={16} />
      </a>
      {/* Copy URL */}
      <button
        onClick={copyToClipboard}
        className="p-2 bg-white border-x border-b border-black  hover:bg-[#FFCE00] transition"
      >
        <Link size={16} className="transform -rotate-45 " />
      </button>
    </div>
  );
};

export default SocialShare;
