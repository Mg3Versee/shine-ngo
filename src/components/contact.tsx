import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us | Shine NGO",
  description:
    "Get in touch with Shine NGO for support, volunteering, or donations.",
};

const Contact =() =>{
  return (
    <main className="w-full bg-gray-50">

      {/* Breadcrumb */}
      <section
        className="relative h-[260px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/breadcrumb-bg.png)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-4xl md:text-5xl font-bold text-white">
          Get In Touch
        </h1>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left Info */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <span className="text-orange-500 font-semibold tracking-wide">
              GET IN TOUCH
            </span>

            <h2 className="text-3xl font-bold mt-3 mb-8 text-gray-800">
              Just have a quick <br /> any questions?
            </h2>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <Phone className="text-orange-500 mt-1" />
                <a
                  href="https://wa.me/918099990221"
                  className="hover:text-orange-500 transition"
                >
                  +91 80999 90221
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-orange-500 mt-1" />
                <a
                  href="mailto:info@shinengo.org"
                  className="hover:text-orange-500 transition"
                >
                  info@shinengo.org
                </a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1" />
                <span>
                  82, Garib Thota, DWCRA Building,
                  <br />
                  A.V. Extension II, Hayathnagar,
                  <br />
                  Turkayamjal, Hyderabad, Telangana
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-xl p-10">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />

              <textarea
                placeholder="Write Your Message"
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition"
              >
                Send Your Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}


export default Contact;