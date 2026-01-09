"use client";

import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";
import Razorpay from "../razorpay/Razorpay";
import Image from "next/image";

const idliImages =[
  {src: "/service/IdlyHub/idli.jpg"},
  {src: "/service/IdlyHub/idli1.jpg"},
  {src: "/service/IdlyHub/idli2.jpg"},
  {src: "/service/IdlyHub/idli3.jpg"},
  {src: "/service/IdlyHub/idli4.jpg"},
  {src: "/service/IdlyHub/idli5.jpg"},
  {src: "/service/IdlyHub/idli6.jpg"},
]

const IdliHub = () => {
  return (
    <div>
      <PageBanner title="Rs5-Idli-Hub" image="/service/servicebg.png" />

      <div className="w-full mt-12 mb-20 px-20  flex gap-10">
        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-bold mb-4">Shine NGO starts Idli Hub</h2>
          {/* ₹5 Meals Section */}
          <section className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg my-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Nutritious Meals at Just ₹5 – Serving Humanity with Dignity
            </h2>
            <p className="mt-5 text-lg text-gray-600">
              Shine NGO proudly presents <strong>Idli Hub</strong>, a
              compassionate food initiative ensuring that no one goes hungry.
            </p>
          </section>
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto text-gray-700 space-y-4 leading-relaxed">
              <p>
                In collaboration with <strong>ICC Academy</strong>, this program
                provides a full plate of{" "}
                <strong>4 hot, freshly prepared idlis</strong> for just{" "}
                <strong>₹5</strong>, making nutritious food accessible to the
                poorest sections of society.
              </p>
              <p>
                Idli Hub is more than a meal—it is a promise of care, dignity,
                and hope for daily wage workers, homeless individuals, elderly
                people, and those struggling to afford basic nutrition.
              </p>
            </div>
          </section>

          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                The Vision Behind Idli Hub
              </h2>

              <p className="text-gray-700 mb-4">
                Hunger remains one of the biggest challenges faced by
                underprivileged communities. Shine NGO recognized the urgent
                need for affordable, hygienic, and nutritious food and launched
                Idli Hub with a simple yet powerful idea:
              </p>

              <p className="italic font-semibold text-gray-800 mb-6">
                “Good food should never be a luxury.”
              </p>

              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Fighting hunger in urban and semi-urban areas</li>
                <li>Providing clean, healthy meals at a minimal cost</li>
                <li>Ensuring dignity by offering food, not charity</li>
              </ul>
            </div>
          </section>
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                What We Offer
              </h2>

              <ul className="space-y-4 list-disc list-inside text-gray-700">
                <li>
                  <strong>₹5 Idli Plate:</strong> 4 soft, steamed idlis at just
                  ₹5
                </li>
                <li>
                  <strong>Clean & Hygienic Preparation:</strong> Prepared under
                  strict cleanliness standards
                </li>
                <li>
                  <strong>Nutritious & Filling:</strong> A balanced meal
                  suitable for all age groups
                </li>
                <li>
                  <strong>Daily Accessibility:</strong> Available regularly to
                  support daily food needs
                </li>
              </ul>

              <p className="mt-6 text-gray-700">
                Thousands of individuals benefit from this initiative every
                month, making Idli Hub a reliable source of nourishment for
                those in need.
              </p>
            </div>
          </section>

          {/* Beneficiaries */}
          <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Who Benefits from Idli Hub
              </h2>

              <ul className="space-y-3 list-disc list-inside text-gray-700">
                <li>Daily wage workers</li>
                <li>Elderly individuals without family support</li>
                <li>Homeless and destitute persons</li>
                <li>Low-income families</li>
              </ul>

              <p className="mt-6 text-gray-700 font-medium">
                For many, this ₹5 meal is often the only guaranteed food of the
                day.
              </p>
            </div>
          </section>

          {/* Hope Section */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto text-gray-700 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                More Than Food – A Step Toward Hope
              </h2>
              <p>
                Idli Hub reflects Shine NGO’s belief that no one should sleep
                hungry. Every plate served carries compassion, respect, and the
                belief that humanity thrives when we care for one another.
              </p>
            </div>
          </section>
             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  my-5">
                                  {idliImages.map((img, index) => (
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

        <ServicesSidebar active="Rs5-Idli-Hub" />
      </div>
    </div>
  );
};

export default IdliHub;
