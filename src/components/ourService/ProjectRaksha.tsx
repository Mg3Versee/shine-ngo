import React from "react";
import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";
import Razorpay from "../razorpay/Razorpay";
const ProjectRakshaImages = [
  { src: "/service/ProjectRaksha/IMG_2630.JPG" }, 
  { src: "/service/ProjectRaksha/1.jpg" },
  { src: "/service/ProjectRaksha/2.jpg" },
  { src: "/service/ProjectRaksha/3.jpg" },
  { src: "/service/ProjectRaksha/4.jpeg" },
  { src: "/service/ProjectRaksha/5.jpeg" },
];
import Image from "next/image";
const ProjectRaksha = () => {
  return (
    <div>
      <PageBanner title="Project Raksha" image="/service/servicebg.png" />

      <section className="w-full px-20 md:flex gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-700 leading-7 ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Project Raksha
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Dignity, Awareness, and Care for Young Girls
          </p>
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto text-gray-700 space-y-4 leading-relaxed">
              <p>
                <strong>Project Raksha</strong> is a compassionate initiative by{" "}
                <strong>Shine NGO</strong> dedicated to supporting minor
                school-going girls through{" "}
                <strong>free sanitary pad distribution</strong> and{" "}
                <strong>menstrual health awareness programs</strong>. The
                project aims to break taboos, promote hygiene, and ensure that
                no girl misses school due to lack of menstrual resources or
                knowledge.
              </p>

              <p>
                <strong>Raksha</strong> means protection—and this program
                protects the health, dignity, and future of young girls.
              </p>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Why Project Raksha Matters
              </h2>

              <p className="text-gray-700 mb-6">
                Many school-going girls face challenges during menstruation due
                to:
              </p>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Lack of access to sanitary products</li>
                <li>Limited awareness about menstrual hygiene</li>
                <li>Social stigma and embarrassment</li>
                <li>School absenteeism and health risks</li>
              </ul>

              <p className="mt-6 text-gray-700">
                Without proper guidance and resources, menstruation can become a
                barrier to education and well-being. Project Raksha addresses
                these issues with care, education, and dignity.
              </p>
            </div>
          </section>

          {/* What We Provide */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-10">
              <h2 className="text-2xl font-bold text-gray-800">
                What Project Raksha Provides
              </h2>

              {/* Sanitary Pads */}
              <div className="bg-white p-6 rounded-xl shadow-sm text-gray-700">
                <h3 className="text-xl font-semibold mb-3">
                  Free Sanitary Pad Distribution
                </h3>
                <p>
                  Shine NGO distributes quality sanitary pads free of cost to
                  minor school girls, ensuring safe and hygienic menstrual care.
                </p>
              </div>

              {/* Awareness Sessions */}
              <div className="bg-white p-6 rounded-xl shadow-sm text-gray-700">
                <h3 className="text-xl font-semibold mb-3">
                  Menstrual Health Awareness Sessions
                </h3>
                <p className="mb-4">
                  We conduct age-appropriate awareness programs covering:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Understanding menstruation</li>
                  <li>Importance of hygiene and cleanliness</li>
                  <li>Safe usage and disposal of sanitary pads</li>
                  <li>Common myths and facts</li>
                  <li>Physical and emotional changes during adolescence</li>
                </ul>
              </div>

              {/* Supportive Environment */}
              <div className="bg-white p-6 rounded-xl shadow-sm text-gray-700">
                <h3 className="text-xl font-semibold mb-3">
                  Open & Supportive Learning Environment
                </h3>
                <p>
                  Our sessions encourage girls to ask questions freely and learn
                  without fear or shame, helping them build confidence and
                  self-awareness.
                </p>
              </div>
            </div>
          </section>

          {/* Beyond Menstruation */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto text-gray-700 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Creating Awareness Beyond Menstruation
              </h2>

              <p>Project Raksha also educates girls about:</p>

              <ul className="list-disc list-inside space-y-2">
                <li>Body awareness and self-care</li>
                <li>Nutrition during adolescence</li>
                <li>Health do’s and don’ts</li>
                <li>Respect for one’s body and well-being</li>
              </ul>

              <p>
                This holistic approach empowers girls with knowledge that
                supports their overall growth.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Impact of Project Raksha
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Improved school attendance</li>
                <li>Better menstrual hygiene practices</li>
                <li>Reduced fear and stigma</li>
                <li>Increased confidence among young girls</li>
                <li>Healthier, informed future generations</li>
              </ul>
            </div>
          </section>

          {/* Who We Reach */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Who We Reach
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Minor school-going girls</li>
                <li>Government and low-income schools</li>
                <li>Underserved and rural communities</li>
              </ul>
            </div>
          </section>

          {/* How to Support */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                How You Can Support Project Raksha
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Sponsor sanitary pad kits</li>
                <li>Support awareness programs in schools</li>
                <li>Donate for menstrual hygiene resources</li>
                <li>Volunteer in education sessions</li>
                <li>Partner with Shine NGO for school programs</li>
              </ul>

              <p className="mt-6 font-medium text-gray-800">
                A small contribution can protect a girl’s health and education.
              </p>
            </div>
          </section>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {ProjectRakshaImages.map((img, index) => (
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

        <ServicesSidebar active="Project Raksha" />
      </section>
    </div>
  );
};

export default ProjectRaksha;
