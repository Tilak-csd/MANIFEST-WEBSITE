import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/layout/HeroSection'
import WhySection from '../components/common/WhySection'
import Course from '../components/common/Course'
import DocumentSection from '../components/common/DocumentSection'

export default function Japan() {
  return (
    <>

        <HeroSection to='/country/japan' pageName='Japan' description='Innovation Meets Tradition in World-Class Education' Heading='Study In Japan' url='../images/country/header_banner.webp' />

        <WhySection country={'japan'} title='Why Choose The Japan For Higher Education?' description='Japan offers a unique blend of technological advancement and cultural depth. Its universities are globally ranked, tuition is affordable, and scholarships are widely available. Students gain access to innovation, research, and a peaceful, safe environment.'/>

        <Course />
        <DocumentSection countryName='Japan' />

    </>
  )
}
