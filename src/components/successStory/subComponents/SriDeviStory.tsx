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
    image: "/stories/Sridevi.jpg",
    href: "/success-stories/sridevi",
    disabled: false,
  },

];

const SriDeviStory = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">
          Sri Devi Triumph: From Tailor to Business Owner
        </h1>

        <p className="mb-4">
          Sridevi a young woman from Hyderabad, India, had always faced economic
          challenges. Her family's income was modest, and her limited education
          made it difficult to secure a stable job. Despite these obstacles,
          Misanth was determined to improve her life and contribute to her
          community.{" "}
        </p>

        <p className="mb-4">
          Her journey took a significant turn when she became involved in the
          Hope Project, a community development initiative implemented by the
          SHINE NGO. The project offered various programs, including vocational
          training, skill development, and financial literacy. Sridevi enrolled
          in a tailoring course, hoping to acquire the skills needed to start
          her own business.{" "}
        </p>

        <p className="mb-4">
          With the support of the project's dedicated mentors and instructors,
          Sridevi excelled in her studies. She quickly grasped the technical
          aspects of tailoring and demonstrated a natural talent for design. The
          project also provided her with opportunities to gain practical
          experience through internships and workshops, allowing her to apply
          her newfound knowledge in real-world settings.{" "}
        </p>

        <p className="mb-4">
          After completing the course, Sridevi was inspired to start her own
          tailoring business. With the financial assistance and guidance
          provided by the Hope Project, she opened a small tailoring shop in her
          neighborhood. Her business, initially small, quickly gained popularity
          due to Sridevi exceptional craftsmanship and attention to detail.{" "}
        </p>

        <p className="mb-4">
          As her business grew, Sridevi realized that she needed to expand her
          knowledge and skills. She enrolled in additional courses offered by
          the Hope Project, focusing on marketing, business management, and
          financial planning. These courses equipped her with the tools she
          needed to take her business to the next level.{" "}
        </p>
        <p className="mb-4">
          Sridevi's success story is a testament to the power of education and
          empowerment. The Hope Project played a crucial role in providing her
          with the necessary resources and support to achieve her goals. By
          investing in her future, Sridevi was able to transform her life and
          create opportunities for herself and h er family.
        </p>
        <Image
          src="/stories/Sridevi.jpg"
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

export default SriDeviStory;
