import Link from "next/link";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#13322B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
          <p className="text-gray-300 leading-relaxed">
            Shine Ngo: Empowering women through sustainable livelihoods and
            education, SHINE is committed to fostering socio-economic
            independence within communities. Our mission is to respect and
            uplift the cultural identity of urban illiterate women in Hyderabad
            and nearby rural areas, while also supporting them in educating the
            next generation for a brighter and more inclusive future.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
          <div className="space-y-2 text-gray-300 flex flex-col">
            <Link href="/" className="hover:text-[#FF7A3E] cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#FF7A3E] cursor-pointer">
              About us
            </Link>
            <Link
              href="/services"
              className="hover:text-[#FF7A3E] cursor-pointer"
            >
              Services
            </Link>
            <Link
              href="/success-stories"
              className="hover:text-[#FF7A3E] cursor-pointer"
            >
              Success Stories
            </Link>
            <Link
              href="/updates"
              className="hover:text-[#FF7A3E] cursor-pointer"
            >
              Latest Updates
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#FF7A3E] cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT DETAILS</h3>

          <Link
            href="tel:+918099990221"
            className="flex items-center gap-3 text-gray-300 mb-3 hover:text-[#FF7A3E] cursor-pointer"
          >
            <FaPhone /> +91 8099990221
          </Link>

          <Link
            href="mailto:info@shinengo.org"
            className="flex items-center gap-3 text-gray-300 mb-3 hover:text-[#FF7A3E] cursor-pointer"
          >
            <FaEnvelope /> info@shinengo.org
          </Link>

          <Link
            href="https://maps.google.com/?q=82, Garib Thota, DWCRA Building, A.V. Extension II, Hayathnagar, Turkayamjal, Hyderabad, Telangana"
            target="_blank"
            className="flex items-start gap-3 text-gray-300 leading-relaxed hover:text-[#FF7A3E] cursor-pointer"
          >
            <FaMapMarkerAlt />
            82, Garib Thota, DWCRA Building, A.V. Extension II, Hayathnagar,
            Turkayamjal, Hyderabad, Telangana
          </Link>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl mt-10">
        <Link href="https://www.facebook.com/shinengoindia" target="_blank">
          <FaFacebook className="hover:text-[#FF7A3E] cursor-pointer" />
        </Link>
        <a href="https://www.threads.com/@shine_ngo_official" target="_blank">
          <FaTwitter className="hover:text-[#FF7A3E] cursor-pointer" />
        </a>
        <Link href="https://www.instagram.com/shine_ngo_official" target="_blank">
          <FaInstagram className="hover:text-[#FF7A3E] cursor-pointer" />
        </Link>
        <Link href="https://www.youtube.com/shinengo" target="_blank">
          <FaYoutube className="hover:text-[#FF7A3E] cursor-pointer" />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 mt-8">© 2025 Shine NGO</p>
      <p className="text-center text-gray-400 mt-8">Design and Developed by 
        <Link href="https://www.mg3verse.com" target="_blank" className="hover:text-[#FF7A3E] ml-1">Mg3Verse</Link>
      </p>
    </div>
  );
};

export default Footer;
