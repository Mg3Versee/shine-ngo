import Image from "next/image";
import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";
          const childwidowImages = [
  { src: "/service/CovidWidowwomen/covid.jpg" },
  { src: "/service/CovidWidowwomen/covid33.jpg" },
  { src: "/service/CovidWidowwomen/covid34.jpg" },
  { src: "/service/CovidWidowwomen/covidreli31.jpg" },
  { src: "/service/CovidWidowwomen/covidreli32.jpg" },
];
const CovidWidowWomen =()=> {
  return (
    <div >
      <PageBanner title="Covid Widow Women" image="/service/servicebg.png" />

      <section className="w-full max-w-7xl mx-auto py-16 px-52 md:flex gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-700 leading-7 text-justify">
          <p>
            Women are strong, resilient, and adaptable. But over the past year...
          </p>

          <p className="mt-4">
            Despite the fact that this epidemic has served as a reminder...
          </p>

          <p className="mt-4">
            Please keep in mind that you are a fighter who is not alone...
          </p>

 <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {childwidowImages.map((img, index) => (
                <div
                  key={index}
                  className="w-full overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    alt={`Tailoring ${index + 1}`}
                    src={img.src}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <ServicesSidebar active="Covid Widow Women" />
      </section>
    </div>
  );
}
export default CovidWidowWomen;