import React from 'react'
import PageBanner from '../PageBanner'
import ServicesSidebar from '../ServicesSidebar'

const ProjectRaksha = () => {
  return (
     <div>
         <PageBanner title="Project Raksha" image="/service/servicebg.png" />
   
         <section className="w-full max-w-7xl mx-auto py-16 px-52 md:flex gap-10">
           {/* LEFT CONTENT */}
           <div className="flex-1 text-gray-700 leading-7 text-justify">
             <p>
               SHINE believes that every child has a right to dream...
             </p>
   
             <p className="mt-4">
               Youth empowerment has grown over the years...
             </p>
   
             <ul className="mt-4 list-disc pl-6">
               <li>Transportation</li>
               <li>Childcare</li>
               <li>Nutrition</li>
               <li>School Services</li>
               <li>Daily Living</li>
               <li>Financial Management</li>
               <li>Housing</li>
             </ul>
           </div>
   
           <ServicesSidebar active="Project Raksha" />
         </section>
       </div>
  )
}

export default ProjectRaksha