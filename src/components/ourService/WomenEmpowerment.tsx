import React from "react";
import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";
import Razorpay from "../razorpay/Razorpay";
import Image from "next/image";
const WomenEmpowermentImages = [
  { src: "/service/WomenEmpowerment/IMG_8341.JPG" },
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

      <section className="w-full px-20 md:flex gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-700 leading-7">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Women Empowerment Program
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Free Skill Training for a Self-Reliant Future
          </p>
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto text-gray-700 space-y-4 leading-relaxed">
              <p>
                At <strong>Shine NGO</strong>, we believe that empowering a
                woman empowers an entire family. Under our{" "}
                <strong>Women Empowerment Scheme</strong>, we provide{" "}
                <strong>free tailoring courses</strong> and{" "}
                <strong>free beautician courses</strong> to help women gain
                practical skills, earn a stable income, and support their
                families with dignity.
              </p>

              <p>
                Our program focuses on transforming women from dependents into
                confident income earners.
              </p>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-4 text-gray-700">
              <h2 className="text-2xl font-bold text-gray-800">
                Why Women Empowerment Matters
              </h2>

              <p>
                Many women face financial challenges due to unemployment, lack
                of education, or family responsibilities. Without access to
                skill training, earning opportunities remain limited.
              </p>

              <p>
                Shine NGO addresses this gap by offering job-oriented, practical
                skill development programs that allow women to work from home or
                start small businesses, ensuring long-term financial
                independence.
              </p>
            </div>
          </section>

          {/* Free Courses */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Free Courses Offered by Shine NGO
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
                {/* Tailoring */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    🧵 Free Tailoring Course
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Stitching and garment-making skills</li>
                    <li>Hands-on practical training</li>
                    <li>Opportunity to start home-based tailoring work</li>
                    <li>Ability to take local orders and earn regularly</li>
                  </ul>
                  <p className="mt-4">
                    Tailoring is an ideal skill for women who wish to balance
                    family responsibilities while generating income.
                  </p>
                </div>

                {/* Beautician */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    💄 Free Beautician Course
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Beauty and personal care techniques</li>
                    <li>Basic professional grooming skills</li>
                    <li>Home-service and salon-ready expertise</li>
                    <li>
                      Entrepreneurial confidence to start small beauty services
                    </li>
                  </ul>
                  <p className="mt-4">
                    This course enables women to become self-employed and
                    financially independent.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who Can Join */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Who Can Join
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Women from economically weaker sections</li>
                <li>Housewives seeking income opportunities</li>
                <li>Widows and single women</li>
                <li>Women willing to learn and become self-reliant</li>
              </ul>

              <p className="mt-4 font-medium text-gray-800">
                No prior experience is required—only the willingness to learn.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Impact of the Program
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Sustainable income generation</li>
                <li>Improved family financial stability</li>
                <li>Increased self-confidence and independence</li>
                <li>Skill-based employment opportunities</li>
                <li>Empowered women contributing to society</li>
              </ul>
            </div>
          </section>

          {/* How to Support */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                How You Can Support This Initiative
              </h2>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Sponsor a woman’s skill training</li>
                <li>Donate equipment or training materials</li>
                <li>Support training center operations</li>
                <li>Volunteer as a trainer or mentor</li>
                <li>Partner with Shine NGO for women empowerment programs</li>
              </ul>
            </div>
          </section>

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
  );
};

export default WomenEmpowerment;
