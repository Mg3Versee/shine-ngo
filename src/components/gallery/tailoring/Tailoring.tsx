"use client";

import Image from "next/image";
import React from "react";

const TailoringImages = [
  {src :"/gallery/tailoring/tailoring.jpg"},
  {src :"/gallery/tailoring/tailoring1.jpg"},
  {src :"/gallery/tailoring/tailoring2.jpg"},
  {src :"/gallery/tailoring/tailoring3.jpg"},
];

const Tailoring = () => {
  return (
       <div className="w-full bg-[#F5F9F8] min-h-screen pb-20">
      <h1 className="text-center text-4xl font-bold text-[#1C3C35] py-16">
        Tailoring Gallery
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {TailoringImages.map((img, index) => (
          <div
            key={index}
            className="w-full overflow-hidden rounded-xl shadow-md"
          >
                    <Image
              alt={`Tailoring ${index + 1}`}
              src={img.src}
              width={400}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tailoring;
