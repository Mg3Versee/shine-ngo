import React from "react";
import ServicesSidebar from "../ServicesSidebar";
import PageBanner from "../PageBanner";

const OldAge =() =>{
  return (
 <div >
       <PageBanner title="Old Age Women" image="/service/servicebg.png" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-4">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-6 text-[#333] text-sm leading-relaxed">
          <h2 className="text-xl font-bold">Shine Old Age Home (FREE)</h2>

          <p>Welcome to Shine Old Age Home (FREE)</p>

          <h3 className="font-semibold mt-4">Our Services (All Free of Charge)</h3>
          <ul className="list-disc ml-6">
            <li>Safe & Clean Accommodation</li>
            <li>Nutritious Meals</li>
            <li>Regular Health Check-ups & Medical Care</li>
            <li>Cultural / Recreational Activities</li>
            <li>Personal Care with Respect & Love</li>
          </ul>

          <h3 className="font-semibold">Address of Shine Old Age Home</h3>
          <p>
            Hyderabad, Telangana<br />
            Near XYZ Road, ABC Colony<br />
            Contact: 98765 43210
          </p>

          <h3 className="font-semibold">Why Shine Old Age Home Matters</h3>
          <p>
            Many elderly individuals face loneliness, illness, and lack of
            support. Shine NGO provides a safe environment filled with care and
            dignity.
          </p>

          <h3 className="font-semibold">How You Can Help</h3>
          <ul className="list-disc ml-6">
            <li>Donate food / groceries</li>
            <li>Sponsor medicines</li>
            <li>Support monthly expenses</li>
            <li>Volunteer your time</li>
            <li>Visit and motivate the elderly</li>
          </ul>

          <h3 className="font-semibold">See Their Smiles</h3>
          <p>Visit us and spend time with the residents. Your presence means a lot.</p>

          <h3 className="font-semibold">Who Can Join</h3>
          <p>
            Elderly citizens with no family support, those abandoned or living
            alone, and senior citizens needing assistance.
          </p>

          <h3 className="font-semibold">About Shine NGO</h3>
          <p>
            Shine NGO runs multiple free services including old age homes,
            orphan support, and education programs.
          </p>

          <h3 className="font-semibold">Together, Let’s Make Aging Beautiful</h3>
          <p>For service, donations or visits, contact Shine NGO.</p>
        </div>
 <ServicesSidebar active="Old Age Women" />
      </div>

    </div>
  );
}


export default OldAge;