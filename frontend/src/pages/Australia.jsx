import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/layout/HeroSection'
import WhySection from '../components/common/WhySection'
import Course from '../components/common/Course'
import DocumentSection from '../components/common/DocumentSection'

export default function Australia() {
  return (
    <>


        <HeroSection to='/country/australia' pageName='Australia' description='Globally Recognized Degrees, Laid-Back Lifestyle' Heading='Study In Australia' url='https://ik.imagekit.io/fsso0s4pw/Header/header_banner.webp' />

        <WhySection country={'australia'} title='Why Choose The Australia For Higher Education?' description="Australia is home to top-ranked universities, industry-relevant education, and a high quality of life. With strong post-study work rights and a diverse student community, it's an ideal destination for academic and career success."/>

        <Course />
        <DocumentSection countryName='Australia' />

 
    </>
  )
}
