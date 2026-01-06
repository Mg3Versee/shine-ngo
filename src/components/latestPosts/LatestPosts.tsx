"use client";
import Image from "next/image";
import React, { useState } from "react";

type BlogPost = {
  id: number;
  image: string;
  category: string;
  title: string;
};

const posts: BlogPost[] = [
  {
    id: 1,
    image: "/latestpost/impact1.jpg",
    category: "Social Impact",
    title: "Sanitation and Cleanliness Drives",
  },
  {
    id: 2,
    image: "/latestpost/impact2.jpg",
    category: "Social Impact",
    title: "Every Tree is a Ray of Hope",
  },
  {
    id: 3,
    image: "/latestpost/impact3.jpg",
    category: "Devotion",
    title: "Community Startup",
  },
  {
    id: 4,
    image: "/latestpost/impact4.jpg",
    category: "Social Impact",
    title: "Skill Enhancement Workshops",
  },
];

const LatestPosts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + posts.length) % posts.length);
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % posts.length);
  };

  const getVisiblePosts = () => {
    const len = posts.length;
    const left = (currentIndex - 1 + len) % len;
    const center = currentIndex;
    const right = (currentIndex + 1) % len;
    return [posts[left], posts[center], posts[right]];
  };

  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-4 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            Blogs
          </p>
          <h2 className="mt-1 text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-slate-800">
            Latest <span className="text-amber-600">Posts</span>
          </h2>
          <div className="mt-2 flex justify-center">
            <span className="h-0.5 w-12 bg-amber-500" />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop arrows */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border bg-white shadow hover:bg-amber-50"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border bg-white shadow hover:bg-amber-50"
          >
            ›
          </button>

          {/* Cards */}
          <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:justify-center">
            {getVisiblePosts().map((item, idx) => {
              const isCenter = idx === 1;

              return (
                <article
                  key={item.id}
                  className={[
                    "overflow-hidden rounded-2xl bg-white shadow-[0_6px_20px_rgba(15,23,42,0.12)] transition-all",
                    "md:w-[32%]",
                    isCenter
                      ? "md:scale-[1.03]"
                      : "md:opacity-80",
                  ].join(" ")}
                >
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="px-5 pt-4 pb-3 leading-tight">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600 leading-none">
                      {item.category}
                    </p>

                    <h3 className="mt-2 line-clamp-2 text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <span className="mt-2 inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                      Read More <span className="ml-1 text-xs">›</span>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={
                i === currentIndex
                  ? "h-1.5 w-8 rounded-full bg-amber-500"
                  : "h-1.5 w-4 rounded-full bg-slate-300"
              }
            />
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="mt-5 flex justify-center gap-4 md:hidden">
          <button
            onClick={prev}
            className="h-9 w-9 rounded-full border bg-white shadow"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="h-9 w-9 rounded-full border bg-white shadow"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
