// pages/success-stories/saritha.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const successStories = [
  {
    name: "Saritha",
    desc: "Saritha’s Journey of Empowerment through the Hope Project",
    image: "/stories/saritha.jpg",
    href: "/success-stories/saritha",
    disabled: false,
  },
  {
    name: "Naveena",
    desc: "Naveena's Triumph: From Postal Department to Entrepreneurial Success",
    image: "/stories/naveena.jpg",
    href: "/success-stories/naveena",
    disabled: false,
  },
  {
    name: "Durga",
    desc: "Durga's Journey: From Teacher to Entrepreneur",
    image: "/stories/durga.jpg",
    href: "/success-stories/durga",
    disabled: false,
  },
  {
    name: "Joshna",
    desc: "Joshna's Journey: From Car Driver to Beauty Entrepreneur",
    image: "/stories/placeholder.jpg",
    href: "/success-stories/joshna",
    disabled: false,
  },
  {
    name: "Sri Devi",
    desc: "Sri Devi Triumph: From Tailor to Business Owner",
    image: "/stories/placeholder.jpg",
    href: "/success-stories/sridevi",
    disabled: false,
  },
  {
    name: "Kavitha",
    desc: "Kavitha's Triumph: From Computer Operator to Entrepreneurial Success",
    image: "/stories/placeholder.jpg",
    href: "/success-stories/kavitha",
    disabled: false,
  },
];

const SarithaStory = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">
          Saritha’s Journey of Empowerment through the Hope Project
        </h1>

        <p className="mb-4">
          Saritha, a young woman from Hyderabad, had always dreamed of making something of herself. Growing up in a modest household with her mother and younger siblings, she knew the importance of hard work and perseverance. However, the path to her dreams was difficult, with limited opportunities and societal constraints holding her back.
        </p>

        <p className="mb-4">
          Saritha had always been fascinated by the world of beauty and fashion. She loved experimenting with different hairstyles and makeup looks for her friends and family, but she never had the chance to pursue formal training. The idea of turning her passion into a profession seemed out of reach—until she heard about the <strong>Hope Project</strong> implemented by Shine NGO.
        </p>

        <p className="mb-4">
          Without hesitation, Saritha enrolled in the beautician course offered by the <strong>Hope Project</strong>. The course provided comprehensive training in skincare, haircare, makeup, and salon management. Saritha’s enthusiasm and dedication shone through in every session. The trainers at Shine NGO recognized her potential and provided her with the support and encouragement she needed to excel.
        </p>

        <p className="mb-4">
          After completing the course, Saritha felt a newfound sense of confidence. With the help of Shine NGO, she secured a small loan to set up her own beauty salon in her neighborhood. It was a modest setup at first, but Saritha’s talent and warm personality quickly attracted clients. Word spread about her skills, and soon her salon was bustling with customers.
        </p>

        <p className="mb-4">
          Today, Saritha’s salon is one of the most popular in her area, and she continues to grow her business, introducing new services and expanding her client base. She remains actively involved with Shine NGO, giving back to the community and inspiring other young women to follow their dreams.
        </p>

        <Image
          src="/stories/saritha.jpg"
          alt="Saritha"
          width={400}
          height={400}
          className="mt-6 rounded-lg object-cover"
        />
      </div>

    <aside className="bg-gray-50 p-4 rounded-lg w-full lg:w-80 shrink-0">
  <h2 className="text-xl font-semibold mb-4">Success Stories</h2>
  <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto">
    {successStories.map((story, idx) =>
      story.disabled ? (
        <div
          key={idx}
          className="flex gap-3 items-center opacity-50 cursor-not-allowed p-2 rounded"
        >
          <div className="w-10 h-10 bg-gray-300 rounded" />
          <div className="text-sm">
            <p className="font-medium">{story.name}</p>
            <p className="truncate text-xs">{story.desc}</p>
          </div>
        </div>
      ) : (
        <Link
          key={idx}
          href={story.href}
          className="flex gap-3 items-center p-2 hover:bg-gray-100 transition rounded"
        >
          <Image
            src={story.image}
            alt={story.name}
            width={40}
            height={40}
            className="rounded object-cover"
          />
          <div className="text-sm">
            <p className="font-medium">{story.name}</p>
            <p className="truncate text-xs">{story.desc}</p>
          </div>
        </Link>
      )
    )}
  </div>
  <Link
    href="/success-stories"
    className="block text-center mt-4 py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition text-sm"
  >
    More Success Stories
  </Link>
</aside>

    </div>
  );
};

export default SarithaStory;
