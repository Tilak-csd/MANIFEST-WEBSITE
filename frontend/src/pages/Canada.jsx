import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/layout/HeroSection'
import WhySection from '../components/common/WhySection'
import Course from '../components/common/Course'
import DocumentSection from '../components/common/DocumentSection'

export default function Canada() {
  return (
   <>


        <HeroSection to='/country/canada' pageName='Canada' description='Quality Education, Welcoming Culture' Heading='Study In Canada' url='../images/country/header_banner.webp' />

        <WhySection country={'canada'} title='Why Choose The USA For Higher Education?' description="Canada is known for its high-quality education, affordable tuition, and safe, inclusive society. With globally respected universities, post-graduation work opportunities, and stunning natural surroundings, it's a top choice for students worldwide."/>

        <Course />
        <DocumentSection countryName='USA' />

    </>
  )
}
