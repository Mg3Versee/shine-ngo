import React from "react";

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravi P",
    rating: 5,
    text: "This place is a sanctuary for people who are struggling in life, who are either physically or mentally ill. The ashram supports them with love and compassion.",
  },
  {
    id: 2,
    name: "Shravan Varala",
    rating: 5,
    text: "Temple and complete place! Staff, service, care taken for the ashramites is commendable. Great work by the founder and team. Service to mankind is service to God.",
  },
  {
    id: 3,
    name: "Vinod Kumar Voruganti",
    rating: 5,
    text: "Cannot express in words about the great service and care towards the mentally sick and destitute. Hats off to the team for this noble work.",
  },
];

const TrustedTestimonials: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.25em] text-slate-700 uppercase">
            Trusted By Hundreds{" "}
            <span className="text-amber-600">Here&apos;s What They Say!</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <span className="h-[2px] w-14 rounded-full bg-amber-500" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="relative flex flex-col rounded-2xl bg-white px-5 pb-5 pt-4 shadow-[0_6px_16px_rgba(15,23,42,0.08)]"
            >
              {/* Top bar */}
              <div className="absolute inset-x-0 top-0 h-2 rounded-t-2xl bg-rose-500" />

              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-[13px] font-semibold uppercase tracking-wide text-slate-800">
                  {item.name}
                </h3>
                {/* Rating */}
                <div className="flex gap-0.5 text-[11px] text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>

              <p className="mt-3 line-clamp-4 text-[12px] leading-relaxed text-slate-600">
                {item.text}
              </p>

              <button className="mt-4 self-start text-[12px] font-semibold uppercase tracking-[0.18em] text-amber-600 hover:text-amber-700">
                Read More
              </button>

              {/* Small bottom shadow card feel */}
              <div className="pointer-events-none absolute inset-x-3 bottom-[-10px] h-3 rounded-b-2xl bg-slate-200/60 blur-[2px]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedTestimonials;
