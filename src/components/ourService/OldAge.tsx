import React from "react";
import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";
import Image from "next/image";
import Razorpay from "../razorpay/Razorpay";
const oldAgeImages = [
  { src: "/service/Oldagehome/IMG-20250815-WA0019.jpg" },
  { src: "/service/Oldagehome/oldage.jpg" },
{ src: "/service/Oldagehome/oldage1.jpg" },
{ src: "/service/Oldagehome/oldage2.jpg" },
{ src: "/service/Oldagehome/oldage3.jpg" },
{ src: "/service/Oldagehome/oldage4.jpg" },
{ src: "/service/Oldagehome/oldage5.jpg" },
];
const OldAge = () => {
  return (
    <div>
      <PageBanner title="Old Age Women" image="/service/servicebg.png" />

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10  px-20">

        {/* ================= LEFT CONTENT ================= */}
        <div className="md:col-span-2 space-y-14">

          {/* Header */}
          <section>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Welcome to Shine Old Age Home
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              A Safe Haven for Elderly Women in Need
            </p>
          </section>

          {/* Introduction */}
          <section className="text-gray-700 leading-relaxed">
            <p>
              At <strong>Shine Old Age Home</strong>, we offer a secure, loving,
              and supportive environment for elderly women who lack family
              support or are living alone. Our mission is to provide
              compassionate care and ensure that every resident experiences
              dignity, respect, and comfort during their golden years.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Services – All Free of Charge
            </h2>

            <p className="text-gray-700 mb-6">
              We believe that every elderly woman deserves the opportunity to
              live with peace, health, and joy.
            </p>
            <ul className="space-y-4 list-disc list-inside text-gray-700">
              <li>
                <strong>Safe & Clean Accommodation:</strong> Comfortable,
                well-maintained living spaces.
              </li>
              <li>
                <strong>Nutritious Meals:</strong> Fresh, balanced food for a
                healthy lifestyle.
              </li>
              <li>
                <strong>Regular Health Check-ups & Medical Care:</strong>
                Continuous medical support.
              </li>
              <li>
                <strong>Cultural & Recreational Activities:</strong> Programs
                that promote joy and togetherness.
              </li>
              <li>
                <strong>Personal Care with Respect & Love:</strong> Individual
                attention with dignity.
              </li>
            </ul>
          </section>

          {/* Why It Matters */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Shine Old Age Home Matters
            </h2>
            <p className="text-gray-700">
              In today’s world, many elderly women face loneliness, neglect, and
              health challenges. Shine Old Age Home offers them companionship,
              respect, and a caring environment where they truly belong.
            </p>
          </section>

          {/* How You Can Help */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How You Can Help
            </h2>

            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Donate Food & Groceries</li>
              <li>Sponsor Medicines</li>
              <li>Support Monthly Expenses</li>
              <li>Volunteer Your Time</li>
              <li>Visit and Motivate the Elderly</li>
            </ul>
          </section>

          {/* Visit Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Your Visit, Their Greatest Happiness
            </h2>
            <p className="text-gray-700">
              Sometimes, all it takes is a visit to make a huge difference.
              Spending time with our elderly residents brings joy, emotional
              support, and hope into their lives.
            </p>
          </section>

          {/* Who Can Join */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Who Can Join?
            </h2>
            <p className="text-gray-700">
              We welcome elderly women facing abandonment, living alone, or
              without family support. Shine Old Age Home is a safe place to call
              home.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              About Shine NGO
            </h2>
            <p className="text-gray-700">
              Shine NGO is committed to serving communities in need through free
              initiatives such as old age care, orphan support, education, and
              women empowerment programs.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3">Contact Information</h2>
            <p>
              <strong>Location:</strong> H.No: 2, 86/3/P/78, Opp. Line Deccan
              Bawarchi, Raganna Guda, Turkayamjal, Hyderabad – 501510
            </p>
            <p><strong>Phone:</strong> +91 80999 90221</p>
            <p><strong>Email:</strong> info@shinengo.org</p>
          </section>
           <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  my-5">
                        {oldAgeImages.map((img, index) => (
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

          {/* Donate */}
          <Razorpay />
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="md:col-span-1 sticky top-24 h-fit">
          <ServicesSidebar active="Old Age Women" />
        </aside>

      </div>
    </div>
  );
};

export default OldAge;
