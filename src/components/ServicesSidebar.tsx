"use client";

import Link from "next/link";

interface SidebarProps {
  active: string;
}

const ServicesSidebar =({ active }: SidebarProps) =>{
  const items = [
    { label: "Old Age Home", href: "/services/old-age-home" },
    { label: "Rs. 5 Idli Hub", href: "/services/rs5-idli-hub" },
    { label: "Child Education", href: "/services/child-education" },
    { label: "Covid Widow Women", href: "/services/covid-widow-women" },
    { label: "Project Raksha", href: "/services/project-raksha" },
    { label: "Women Empowerment", href: "/services/women-empowerment" },
    { label: "Youth’s Empowerment", href: "/services/youth-empowerment" },
  ];

  return (
    <>
      {/* Disable text selection background ONLY for this sidebar */}
      <style>{`
        .service-sidebar ::selection {
          background: transparent !important;
          color: inherit !important;
        }
        .service-sidebar ::-moz-selection {
          background: transparent !important;
          color: inherit !important;
        }
      `}</style>

      <div className="service-sidebar w-full md:w-64 bg-[#F4F8F9] p-6 rounded">
        <h2 className="text-lg font-semibold mb-4">OUR SERVICES</h2>

        <div className="space-y-2">
          {items.map((item) => (
            <Link key={item.label} href={item.href}>
              <div
                className={` py-2 px-4 text-sm font-medium rounded cursor-pointer transition
                ${
                  active === item.label
                    ? " text-black hover:bg-[#07847f]"
                    : " text-gray-700 hover:bg-[#07847f]"
                }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default ServicesSidebar;