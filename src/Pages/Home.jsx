import React from 'react'
import HeroSection from '../Components/HeroSection'
import AfterAbout from '../Components/AfterAbout'
import VisionMissionModern from '../Components/VisionMissionModern'
import WhoWeAre from '../Components/WhoWeAre'
import CTASection from '../Components/CTASection'
import Testimonials from '../Components/Testimonials'
import WhyChooseUs from '../Components/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AfterAbout/>
      <VisionMissionModern/>
      <WhyChooseUs/>
      <WhoWeAre/>
      <CTASection/>
      <Testimonials/>
    </div>
  )
}

export default Home
