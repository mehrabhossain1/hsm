"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "@/public/FamilyPhotos/30052123_10210850292403674_3004551872875765441_o.jpg";
import img2 from "@/public/FamilyPhotos/IMG_20240223_182830.jpg";
import img3 from "@/public/FamilyPhotos/IMG_20240224_232506.jpg";
import img4 from "@/public/FamilyPhotos/IMG_20240224_232506.jpg";
import img5 from "@/public/FamilyPhotos/IMG_20240224_232506.jpg";

const familyImages = [
  { src: img1, size: "col-span-2 row-span-2", width: 1000, height: 1000 },
  { src: img2, size: "col-span-1", width: 1000, height: 1000 },
  { src: img3, size: "col-span-1", width: 1000, height: 1000 },
  { src: img4, size: "col-span-1", width: 1000, height: 1000 },
  { src: img5, size: "col-span-1", width: 1000, height: 1000 },
];

export default function FamilySection() {
  return (
    <div className="py-16 bg-gradient-to-r from-cyan-50 via-white to-cyan-50 p-8 rounded-md shadow-sm">
      <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-16">
        <h3 className="text-2xl md:text-2xl font-bold text-gray-700">
          👨‍👩‍👧‍👦 <span className="underline underline-offset-4">Family</span>
        </h3>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 pt-8">
          My family is my greatest source of energy and joy, and they always
          come first in my life. Our family includes my wonderful wife, our two
          super energetic daughters, and my father. My mother passed away in
          2016, and her memory continues to inspire us. ❤️
        </p>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {familyImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg shadow-md ${image.size}`}
            >
              {/* Image Wrapper to ensure correct sizing */}
              <div className="w-full h-full relative">
                <Image
                  src={image.src}
                  alt="Family Photo"
                  width={image.width}
                  height={image.height}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
