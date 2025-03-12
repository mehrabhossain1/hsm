"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import img1 from "@/public/Country-visited-photos/173490625_10217992407392085_8301433800423198769_n.jpg";
import img2 from "@/public/Country-visited-photos/194870951_10218283637792663_3258085881188811509_n.jpg";
import img3 from "@/public/Country-visited-photos/IMG_20240522_214428.jpg";
import img4 from "@/public/Country-visited-photos/IMG_20240524_183248.jpg";
import img5 from "@/public/Country-visited-photos/IMG_20240525_104912.jpg";
import img6 from "@/public/Country-visited-photos/IMG_20240525_111557.jpg";
import img7 from "@/public/Country-visited-photos/173490625_10217992407392085_8301433800423198769_n.jpg";

const travelPhotos = [
  {
    src: img1,
    alt: "The Netherlands",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    src: img2,
    alt: "Sweden",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    src: img3,
    alt: "Germany",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    src: img4,
    alt: "Denmark",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    src: img5,
    alt: "France",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: img6,
    alt: "Belgium",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: img7,
    alt: "Luxembourg",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: img1,
    alt: "India",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    src: img2,
    alt: "Cambodia",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
];

export default function TravelTrajectory() {
  return (
    <div className="max-w-5xl mx-auto p-6 py-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🌍
        <span className="underline underline-offset-4">Travel Trajectory</span>
      </h3>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Exploring new places and cultures is a central aspect of my life. I have
        had the privilege of visiting over
        <span className="font-semibold text-blue-600">
          {" "}
          100 cities across 11 countries.
        </span>
        Here are a few snapshots of my journey.
      </p>

      <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
        {travelPhotos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${photo.colSpan} ${photo.rowSpan} relative overflow-hidden rounded-lg shadow-sm`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
              className="hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
