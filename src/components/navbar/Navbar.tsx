"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [open, setOpen] = useState(false);

  const closeDropdown = () => setOpen(false);

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
            className="h-14 cursor-pointer"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          <Link
            href="/"
            className="text-[#fe7f4c] cursor-pointer font-raleway font-bold text-md"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-[#fe7f4c] cursor-pointer font-raleway font-bold text-md"
          >
            About Us
          </Link>

          <div className="relative group cursor-pointer font-raleway font-bold text-md">
<div
  className="relative cursor-pointer group"
  onMouseEnter={() => setOpen(true)}
  onMouseLeave={() => setOpen(false)}
>
  {/* SERVICES BUTTON */}
  <h1
    className={`
      relative flex items-center gap-1 pb-1 font-bold text-md text-[#fe7f4c]
      after:content-[''] after:absolute after:left-0 after:w-full 
      after:-bottom-[2px] after:h-[3px] after:bg-[#c08b0d]
      after:scale-x-0 after:origin-center after:transition-transform after:duration-300
      ${open ? "after:scale-x-100" : ""}
    `}
  >
    Services
    <FaChevronDown
      size={12}
      className={`mt-0.5 transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      }`}
    />
  </h1>

  {/* DROPDOWN BELOW SERVICES */}
  {open && (
    <div className="absolute left-0 top-[100%] mt-2 min-w-[260px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] rounded-md py-3 z-50 animate-fadeIn">
      <div className="flex flex-col font-medium leading-[130%]">
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
            className="px-5 py-2 text-gray-700 hover:text-[#fe7f4c] hover:bg-[#fff3eb] transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )}
</div>




          </div>

          <Link
            href="/success-stories"
            className="text-[#fe7f4c] cursor-pointer font-raleway font-bold text-md"
          >
            Success Stories
          </Link>

          <Link
            href="/updates"
            className="text-[#fe7f4c] cursor-pointer font-raleway font-bold text-md"
          >
            Latest Updates
          </Link>

          <Link
            href="/gallery"
            className="text-[#fe7f4c] cursor-pointer font-raleway font-bold text-md"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="text-[#fe7f4c] cursor-pointer font-raleway font-bold text-md"
          >
            CONTACT US
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#FF7518] text-white px-4 py-4 rounded-xl font-bold text-[10px] leading-[100%] font-raleway">
            DONATE NOW!
          </button>

          {/* Mobile Menu button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            ☰
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="lg:hidden bg-white border-t p-4 space-y-4 font-medium">
          <Link href="/">HOME</Link>
          <Link href="/about">About Us</Link>

          {/* Mobile Services dropdown */}
          <button
            className="flex items-center justify-between w-full"
            onClick={() => setOpenServices(!openServices)}
          >
            Services <FaChevronDown />
          </button>

          {openServices && (
            <div className="ml-4 mt-2 space-y-2 text-sm">
              <Link href="/services/education">Education Support</Link>
              <Link href="/services/medical">Medical Assistance</Link>
              <Link href="/services/welfare">Welfare Programs</Link>
              <Link href="/services/training">Skill Training</Link>
            </div>
          )}

          <Link href="/success">Success Stories</Link>
          <Link href="/updates">Latest Updates</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">CONTACT US</Link>
        </div>
      )}
    </nav>
  );
}
