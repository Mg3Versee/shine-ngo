import React from 'react'
import Slider from '../components/slider/Slider'
import AboutUs from '../components/AboutUs'
import HeroSupportSection from '../components/heroSupportSection/HeroSupportSection'
import FundRaising from '../components/fundRaising/FundRaising'
import Cause from '../components/causes/Cause'
import TestimonialSection from '../components/testimonialSection/TestimonialSection'
import TrustedTestimonials from '../components/testimonialSection/TrustedTestimonials'
import LatestUpdates from '../components/latestUpdates/LatestUpdates'
import LatestPosts from '../components/latestPosts/LatestPosts'

const page = () => {
  return (
    <div>
 <main>
   <Slider />
  <AboutUs />
  <FundRaising />
  <Cause />
  <TestimonialSection />
  <TrustedTestimonials />
  <LatestUpdates />
  <LatestPosts />
<HeroSupportSection />
 </main>
    </div>
  )
}

export default page