import React from "react";
import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";
import Razorpay from "../razorpay/Razorpay";
import Image from "next/image";

const childImages = [
  { src: "/service/CHILDDevolopmet/1.jpg" },
  { src: "/service/CHILDDevolopmet/11.jpg" },
  { src: "/service/CHILDDevolopmet/12.jpg" },
  { src: "/service/CHILDDevolopmet/4.jpg" },
  { src: "/service/CHILDDevolopmet/5.jpg" },
  { src: "/service/CHILDDevolopmet/6.jpg" },
  { src: "/service/CHILDDevolopmet/7.jpg" },
  { src: "/service/CHILDDevolopmet/8.jpg" },
  { src: "/service/CHILDDevolopmet/9.jpg" },
  { src: "/service/CHILDDevolopmet/14.jpg" },
];

const ChildEducation = () => {
  return (
    <div>
      <PageBanner title="Child Education" image="/service/servicebg.png" />

      <div className="w-full max-w-7xl mx-auto py-16 px-52 md:flex gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-700 leading-7 text-justify">
          <p>SHINE believes that every child has a right to dream...</p>

          <p className="mt-4">Child Education has grown over the years...</p>

          <ul className="mt-4 list-disc pl-6">
            <li>Transportation</li>
            <li>Childcare</li>
            <li>Nutrition</li>
            <li>School Services</li>
            <li>Daily Living</li>
            <li>Financial Management</li>
            <li>Housing</li>
          </ul>
          <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {childImages.map((img, index) => (
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
          <Razorpay />
        </div>

        <ServicesSidebar active="Child Education" />
      </div>
    </div>
  );
};

export default ChildEducation;
