import React from "react";

type BlogPost = {
  id: number;
  image: string;
  category: string;
  title: string;
};

const posts: BlogPost[] = [
  {
    id: 1,
    image: "/images/blog-1.jpg",
    category: "Social Impact",
    title: "Where Do Hungry Stomachs Relieve, Humanity Finds Its True Meaning",
  },
  {
    id: 2,
    image: "/images/blog-2.jpg",
    category: "Social Impact",
    title: "Every Meal is a Ray of Hope",
  },
  {
    id: 3,
    image: "/images/blog-3.jpg",
    category: "Devotion",
    title: "Serving Humanity: The Truest Worship",
  },
];

const LatestPosts: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-slate-500">
            Blogs
          </p>
          <p className="mt-1 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-slate-700">
            Latest <span className="text-amber-600">Posts</span>
          </p>
          <div className="mt-3 flex justify-center">
            <span className="h-[2px] w-14 rounded-full bg-amber-500" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_20px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-48 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-5 pb-5 pt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                  {item.category}
                </p>
                <h3 className="mt-2 line-clamp-3 text-sm font-semibold leading-snug text-slate-900">
                  {item.title}
                </h3>

                <button className="mt-4 inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600 hover:text-amber-700">
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

export default LatestPosts;
