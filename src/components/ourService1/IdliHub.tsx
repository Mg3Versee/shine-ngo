"use client";

import Link from "next/link";
import PageBanner from "../PageBanner";
import ServicesSidebar from "../ServicesSidebar";

const IdliHub =() =>{
  return (
    <div >
         <PageBanner title="Rs5-Idli-Hub" image="/service/servicebg.png" />

      <div className="w-full max-w-7xl mx-auto mt-12 mb-20 px-52 md:px-0 flex gap-10">
        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-bold mb-4">Shine NGO starts Idli Hub</h2>

          <p className="text-gray-600 leading-7 mb-4">
            Shine NGO has started a unique Rs.5 Idli initiative in collaboration with the ICC Academy...
            {/* Put your full paragraph here exactly same */}
          </p>

          <p className="text-gray-600 leading-7 mb-4">
            The visionary approach aims to reach the poor, provide clean & hygienic nutritious meals...
          </p>

          <p className="text-gray-600 leading-7">
            The initiative has been a huge support to the needy with thousands benefiting every month...
          </p>
        </div>

  <ServicesSidebar active="Rs5-Idli-Hub" />
      </div>

    </div>
  );
}


export default IdliHub;