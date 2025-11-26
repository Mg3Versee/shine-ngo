"use client";

import Image from "next/image";
import Link from "next/link";

const SuccessStory =() => {
  const stories = [
    {
      name: "Saritha",
      desc: "Saritha’s Journey of Empowerment through the Hope Project",
      image: "/stories/saritha.jpg",
      link: "/success-stories/saritha",
    },
    {
      name: "Naveena",
      desc: "Naveena's Triumph: From Postal Department to Entrepreneurial Success",
      image: "/stories/naveena.jpg",
      link: "/success-stories/naveena",
    },
    {
      name: "Durga",
      desc: "Durga's Journey: From Teacher to Entrepreneur",
      image: "/stories/durga.jpg",
      link: "/success-stories/durga",
    },
  {
    name: "Joshna",
    desc: "Joshna's Journey: From Car Driver to Beauty Entrepreneur",
    image: "/stories/placeholder.jpg",
    link: "/success-stories/joshna",
  
  },
  {
    name: "Sri Devi",
    desc: "Sri Devi Triumph: From Tailor to Business Owner",
    image:"/stories/Sridevi.jpg",
    link: "/success-stories/sridevi",
  
  },

  ];

  return (
    <div className="w-full bg-[#F5F9F8] pb-20 pt-10 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-[#0D2A1B] mb-10">
        Success Stories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {stories.map((story, index) => (
          <Link key={index} href={story.link}>
            <div className="relative group cursor-pointer shadow-lg rounded-lg overflow-hidden">
              <Image
                src={story.image}
                alt={story.name}
                width={500}
                height={500}
                className="w-full h-80 object-cover group-hover:scale-105 duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/10 opacity-100 p-5 flex flex-col justify-end text-white">
                <h2 className="text-xl font-bold">{story.name}</h2>
                <p className="text-sm mb-2 opacity-90">{story.desc}</p>
                <span className="text-orange-400 font-semibold flex items-center gap-1">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Button */}
      {/* <div className="text-center mt-12">
        <Link href="/success-stories/all">
          <button className="bg-[#FF7E47] text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-[#ff945f] duration-300">
            View More
          </button>
        </Link>
      </div> */}
    </div>
  );
}


export default SuccessStory;