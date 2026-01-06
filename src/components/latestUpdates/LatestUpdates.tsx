"use client";
import Image from "next/image";
import React, { useState } from "react";

type UpdateItem = {
  id: number;
  image: string;
  date: string;
  title: string;
};

const updates: UpdateItem[] = [
  {
    id: 1,
    image: "/latestupdates/update1.jpg",
    date: "January 25, 2025",
    title: "Health Awarness Event",
  },
  {
    id: 2,
    image: "/latestupdates/update2.jpg",
    date: "January 21, 2025",
    title: "Distribution of Health Kits to the Needy",
  },
  {
    id: 3,
    image: "/latestupdates/update3.jpg",
    date: "January 10, 2025",
    title:
      "IDLI HUB wishes Happy Birthday to Ogili Laxminarasimha Reddy garu",
  },
  {
    id: 4,
    image: "/latestupdates/update4.jpg",
    date: "January 05, 2025",
    title: "Community event program",
  },
];

const LatestUpdates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(
      (i) => (i - 1 + updates.length) % updates.length
    );
  };

  const next = () => {
    setCurrentIndex((i) => (i + 1) % updates.length);
  };

  const getVisibleUpdates = () => {
    const len = updates.length;
    const left = (currentIndex - 1 + len) % len;
    const center = currentIndex;
    const right = (currentIndex + 1) % len;
    return [updates[left], updates[center], updates[right]];
  };

  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-4 text-center">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-black">
            Latest <span className="text-amber-600">Updates</span>
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
            {getVisibleUpdates().map((item, idx) => {
              const isCenter = idx === 1;

              return (
                <article
                  key={item.id}
                  className={[
                    "overflow-hidden rounded-2xl bg-slate-900/5 shadow transition-all",
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
                  <div className="px-4 pt-3 pb-2 text-black leading-tight">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-amber-300">
                      {item.date}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold line-clamp-2">
                      {item.title}
                    </h3>
                    <span className="mt-2 inline-flex text-[11px] uppercase tracking-[0.18em] text-amber-300">
                      Read More ›
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {updates.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={
                i === currentIndex
                  ? "h-1.5 w-8 rounded-full bg-amber-500"
                  : "h-1.5 w-4 rounded-full"
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

export default LatestUpdates;
