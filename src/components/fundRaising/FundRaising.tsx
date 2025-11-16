// app/gallery/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function FundRaising() {
  const images = [
    { src: "/gallery/1.jpg", slug: "image-1" },
    { src: "/gallery/2.jpg", slug: "image-2" },
    { src: "/gallery/3.jpeg", slug: "image-3" },
  ];

  return (
    <div className="w-full bg-[#F5F5F5] pb-20">

      {/* Heading */}
      <div className="text-center pt-16 pb-10">
        <h1 className="text-4xl font-bold text-[#1C3C35]">
          SERVING HUMANITY WITH DEVOTION
        </h1>
        <p className="text-xl text-[#fe7f4c] mt-3">Fundraising & Campaigns</p>
      </div>

      {/* Cards Centered */}
      <div
        className="
          max-w-7xl mx-auto 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 px-4
          justify-center
        "
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden hover:-translate-y-2 hover:rotate-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-full">
              <Image
                src={img.src}
                alt="Gallery Image"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Button on Hover */}
            <div className="p-5 text-center">
              <Link
                href={`/gallery/${img.slug}`}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 inline-block bg-[#FF7A33] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-[#e26a2d]"
              >
                Donate
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
