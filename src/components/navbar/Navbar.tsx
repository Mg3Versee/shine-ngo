"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar =() =>{
  const [openMenu, setOpenMenu] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={200}
            className="h-14 w-auto cursor-pointer"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10 font-raleway font-bold text-md">
          <Link href="/" className="text-[#fe7f4c]">
            HOME
          </Link>

          <Link href="/about" className="text-[#fe7f4c]">
            About Us
          </Link>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`
                relative flex items-center gap-1 pb-1 text-[#fe7f4c]
                after:content-[''] after:absolute after:left-0 after:w-full
                after:-bottom-[2px] after:h-[3px] after:bg-[#c08b0d]
                after:scale-x-0 after:origin-center after:transition-transform after:duration-300
                ${servicesOpen ? "after:scale-x-100" : ""}
              `}
            >
              Services
              <FaChevronDown
                size={12}
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full min-w-[260px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] rounded-md py-3 z-50">
                <div className="flex flex-col font-medium">
                  {[
                    { href: "/services/old-age-home", label: "Old Age Home" },
                    { href: "/services/rs5-idli-hub", label: "Rs.5 Idli Hub" },
                    { href: "/services/child-education", label: "Child Education" },
                    { href: "/services/covid-widow-women", label: "Covid Widow Women" },
                    { href: "/services/project-raksha", label: "Project Raksha" },
                    { href: "/services/women-empowerment", label: "Women Empowerment" },
                    { href: "/services/youth-empowerment", label: "Youth’s Empowerment" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="px-5 py-2 text-gray-700 hover:text-[#fe7f4c] hover:bg-[#fff3eb] transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/success-stories" className="text-[#fe7f4c]">
            Success Stories
          </Link>

          <Link href="/updates" className="text-[#fe7f4c]">
            Latest Updates
          </Link>

          <Link href="/gallery" className="text-[#fe7f4c]">
            Gallery
          </Link>

          <Link href="/contact" className="text-[#fe7f4c] px-2">
            CONTACT US
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/donate"
            className="bg-[#FF7518] text-white md:px-2 text-center px-2 py-4 rounded-xl font-bold text-sm font-raleway"
          >
            DONATE NOW!
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="lg:hidden  flex flex-col bg-white text-black cursor-pointer border-t p-4 space-y-4 font-raleway font-bold text-md">
          <Link href="/" >HOME</Link>
          <Link href="/about">About Us</Link>
          <Link href="/success-stories">Success Stories</Link>
          <Link href="/updates">Latest Updates</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">CONTACT US</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;