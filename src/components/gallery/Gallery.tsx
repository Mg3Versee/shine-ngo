import Image from "next/image";
import Link from "next/link";

const Gallery =()=> {
  const images = [
    { src: "/gallery/1.jpg", name: "Skill Course", slug: "skill-course" },
    { src: "/gallery/2.jpg", name: "Hope", slug: "hope" },
    { src: "/gallery/3.jpeg", name: "Naa Disha", slug: "naa-disha" },
    { src: "/gallery/4.jpg", name: "Tailoring", slug: "tailoring" },
    { src: "/gallery/5.jpg", name: "Old Age Home", slug: "oldagehome" },
  ];

  return (
    <div className="w-full bg-[#F5F9F8] min-h-screen pb-20">
      <h1 className="text-center text-4xl font-bold text-[#1C3C35] py-16">
        Our Gallery
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {images.map((img, index) => (
          <Link
            key={index}
            href={`/gallery/${img.slug}`}
            className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white block"
          >
            {/* Image */}
            <Image
              src={img.src}
              alt={img.name}
              width={400}
              height={300}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                transition-all duration-300 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">
                {img.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;