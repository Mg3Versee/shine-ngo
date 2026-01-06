"use client";

import Image from "next/image";

const AboutUs =() => {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      
      {/* Background Shape */}
      <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-orange-100 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-orange-500 font-semibold tracking-wider uppercase text-sm flex items-center gap-2">
            Welcome To 
            <span className="block w-8 h-[3px] bg-orange-500"></span>
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug mt-3">
            Shine NGO in Hyderabad for <br />
            Women Empowerment, <br />
            Oldage Home
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            Empowering women through sustainable livelihoods and education,
            SHINE is committed to fostering socio-economic independence within 
            communities. Our mission is to respect and uplift the cultural identity 
            of urban illiterate women in Hyderabad and nearby rural areas, while also
            supporting them in educating the next generation for a brighter and more
            inclusive future.
          </p>

          <button className="mt-8 px-8 py-3 bg-orange-500 text-white rounded-md font-semibold shadow-md hover:bg-orange-600 transition">
            Read More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative">
          <div className="absolute -z-10 w-[300px] h-[300px] bg-orange-200 rounded-3xl rotate-6 opacity-40 blur-xl"></div>

          <Image
            src="/about/about-1.png"
            alt="Children"
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;