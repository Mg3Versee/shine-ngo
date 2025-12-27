import React from "react";

type UpdateItem = {
  id: number;
  image: string;
  date: string;
  title: string;
};

const updates: UpdateItem[] = [
  {
    id: 1,
    image: "/images/update-1.jpg",
    date: "January 25, 2025",
    title: "Homas in Kartika Masam",
  },
  {
    id: 2,
    image: "/images/update-2.jpg",
    date: "January 21, 2025",
    title: "ShineNgo Orphanage Rescues and Rebuilds an Elderly Man’s Life",
  },
  {
    id: 3,
    image: "/images/update-3.jpg",
    date: "January 10, 2025",
    title: "Establishing the Sri Punya Lingeshwara Swami Temple",
  },
];

const LatestUpdates: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-slate-700">
            Latest <span className="text-amber-600">Updates</span>
          </p>
          <div className="mt-3 flex justify-center">
            <span className="h-0.5 w-14 rounded-full bg-amber-500" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {updates.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl bg-slate-900/5 shadow-[0_6px_20px_rgba(15,23,42,0.12)]"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content strip */}
              <div className="bg-slate-900/90 px-5 py-4 text-left text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                  {item.date}
                </p>
                <h3 className="mt-2 text-sm font-semibold leading-snug">
                  {item.title}
                </h3>

                <button className="mt-3 inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 hover:text-amber-200">
                  Read More <span className="ml-1 text-xs">›</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
