"use client";
import React, { useState } from "react";

type Testimonial = {
  id: number;
  title: string;
  body: string;
  author: string;
  location?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "A Heartfelt Contribution for a Noble Cause",
    body: "Mrs. Bandi Sunanda from Hyderabad has donated 12,00,000/- towards the construction of the ground floor of the new building in memory of Bandi Reddy Garu. This generous contribution is paving the way for a safe and secure shelter for many children.",
    author: "Mrs. Bandi Sunanda",
    location: "Hyderabad",
  },
  {
    id: 2,
    title: "A Beacon of Generosity – Spreading Hope",
    body: "Sri Aravapalli Koteswara Rao Garu and Smt. Aravapalli Satyavathi Garu have donated 13,11,116/- towards the construction of the new building, extending compassionate support to countless orphans.",
    author: "Sri Aravapalli Koteswara Rao & Smt. Aravapalli Satyavathi",
    location: "Prakasam District",
  },
  {
    id: 3,
    title: "A Generous Act of Kindness – Lifting Lives",
    body: "Sri P. Jaya Prakash Reddy and Late Smt. Girija have contributed 21,00,000/- towards the new building lift, ensuring accessibility and safety for over 600 children at the ashram.",
    author: "Sri P. Jaya Prakash Reddy & Late Smt. Girija",
    location: "Ameerpet, Hyderabad",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const len = testimonials.length;
    const left = (currentIndex - 1 + len) % len;
    const center = currentIndex;
    const right = (currentIndex + 1) % len;
    return [testimonials[left], testimonials[center], testimonials[right]];
  };

  return (
    <section className="bg-linear-to-b from-orange-50/40 via-white to-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-slate-600 uppercase">
            Together, we heal
          </p>
          <h2 className="mt-3 text-xl md:text-3xl font-extrabold tracking-wide text-amber-600 uppercase">
           A Testimonial on Supporting Our Shine ngo old age home

          </h2>
          <div className="mt-4 flex justify-center">
            <span className="h-0.5 w-16 rounded-full bg-amber-500"></span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/80 shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all"
          >
            <span className="text-xl leading-none text-slate-500">&lsaquo;</span>
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white/80 shadow-sm hover:bg-amber-50 hover:border-amber-300 transition-all"
          >
            <span className="text-xl leading-none text-slate-500">&rsaquo;</span>
          </button>

          {/* Cards */}
          <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-stretch md:justify-center">
            {getVisibleTestimonials().map((item, idx) => {
              const isCenter = idx === 1;

              return (
                <article
                  key={item.id}
                  className={[
                    "group relative flex flex-col overflow-hidden rounded-2xl border bg-white/90 shadow-md transition-all duration-200",
                    "border-slate-100 hover:-translate-y-1 hover:shadow-xl",
                    "md:w-[32%]",
                    "px-5 pb-6 pt-5",
                    isCenter ? "md:scale-[1.02]" : "md:opacity-90",
                  ].join(" ")}
                >
                 

                  {/* Content */}
                  <div className="mt-4 flex flex-1 flex-col">
                    <h3 className="text-sm md:text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="inline-block h-0.5 w-10 rounded-full bg-amber-500" />
                      <span className="text-[11px] uppercase tracking-[0.18em] text-amber-700">
                        Donor Story
                      </span>
                    </div>

                    <p className="mt-3 text-xs md:text-[13px] leading-relaxed text-slate-600">
                      {item.body}
                    </p>

                    <div className="mt-5 flex flex-col items-end text-right">
                      <p className="text-xs font-semibold text-slate-800">
                        {item.author}
                      </p>
                      {item.location && (
                        <p className="text-[11px] text-slate-500">
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Soft glow accent */}
                  <div className="pointer-events-none absolute inset-x-10 -bottom-10 h-10 rounded-full bg-amber-200/20 blur-xl" />
                </article>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={[
                "h-1.5 rounded-full transition-all",
                index === currentIndex
                  ? "w-8 bg-amber-500"
                  : "w-4 bg-slate-300 hover:bg-slate-400",
              ].join(" ")}
            />
          ))}
        </div>

        {/* Mobile nav buttons */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          <button
            onClick={prev}
            className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:bg-amber-50 hover:border-amber-300"
          >
            &lsaquo;
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:bg-amber-50 hover:border-amber-300"
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
