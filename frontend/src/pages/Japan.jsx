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
        <Navbar />

        <HeroSection to='/country/japan' pageName='Japan' description='World Class Education, Countless Opportunities' Heading='Study In Japan' url='../images/country/header_banner.webp' />

        <WhySection country={'japan'} title='Why Choose The Japan For Higher Education?' description='The UK offers world-renowned universities, diverse programs, and unmatched career opportunities. With a flexible education system, cutting-edge research, and global exposure, it’s the top choice for students aiming for academic and professional success.'/>

        <Course />
        <DocumentSection countryName='Japan' />

        <Footer />
    </>
  )
}
