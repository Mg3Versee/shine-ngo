"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">

        {/* Services */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
        >
          <button className="flex items-center gap-1 font-semibold text-[#fe7f4c]">
            Services <FaChevronDown size={12} />
          </button>

          {openMenu && (
            <ul className="absolute top-full left-0 mt-3 bg-white shadow-lg rounded-md w-64 border">
              {[
                { name: "Old Age Home", link: "/services/old-age-home" },
                { name: "Child Education", link: "/services/child-education" },
                { name: "Covid Widow Women", link: "/services/covid-widow-women" },
                { name: "Project Raksha", link: "/services/project-raksha" },
                { name: "Women Empowerment", link: "/services/women-empowerment" },
                { name: "Youth’s Empowerment", link: "/services/youth-empowerment" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    onClick={() => setOpenMenu(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </nav>
  );
}
