"use client";

import Link from "next/link";
import React from "react";

const  HeroSupportSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Support us to feed the needy with our Idli Hub program plate Idli
              for just @5Rs.
            </h2>
          </div>

          {/* Button */}
          <Link href="/donate" className="bg-[#FF7A3E] text-white px-8 py-3 rounded-md font-semibold shadow-lg hover:opacity-90">
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSupportSection;