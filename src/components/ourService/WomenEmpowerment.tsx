import React from 'react'
import PageBanner from '../PageBanner'
import ServicesSidebar from '../ServicesSidebar'
import Razorpay from '../razorpay/Razorpay'
import Image from 'next/image'
const WomenEmpowermentImages = [
  { src: "/service/WomenEmpowerment/1.JPG" },
  { src: "/service/WomenEmpowerment/2.JPG" },
  { src: "/service/WomenEmpowerment/3.JPG" },
  { src: "/service/WomenEmpowerment/4.JPG" },
  { src: "/service/WomenEmpowerment/5.JPG" },
];
const WomenEmpowerment = () => {
  return (
     <div>
         <PageBanner title="Women Empowerment" image="/service/servicebg.png" />
   
         <section className="w-full max-w-7xl mx-auto py-16 px-52 md:flex gap-10">
           {/* LEFT CONTENT */}
           <div className="flex-1 text-gray-700 leading-7 text-justify">
             <p>
               SHINE believes that every child has a right to dream...
             </p>
   
             <p className="mt-4">
               Youth empowerment has grown over the years...
             </p>
   
             <ul className="mt-4 list-disc pl-6">
               <li>Transportation</li>
               <li>Childcare</li>
               <li>Nutrition</li>
               <li>School Services</li>
               <li>Daily Living</li>
               <li>Financial Management</li>
               <li>Housing</li>
             </ul>
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                                        {WomenEmpowermentImages.map((img, index) => (
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
             <Razorpay />
           </div>
   
           {/* RIGHT SIDEBAR */}
           <ServicesSidebar active="Women Empowerment" />
         </section>
       </div>
  )
}

export default WomenEmpowerment