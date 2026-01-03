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
        <Navbar />

        <HeroSection to='/country/australia' pageName='Australia' description='World Class Education, Countless Opportunities' Heading='Study In Australia' url='../images/country/header_banner.webp' />

        <WhySection country={'australia'} title='Why Choose The Australia For Higher Education?' description='The UK offers world-renowned universities, diverse programs, and unmatched career opportunities. With a flexible education system, cutting-edge research, and global exposure, it’s the top choice for students aiming for academic and professional success.'/>

        <Course />
        <DocumentSection countryName='Australia' />

        <Footer />
    </>
  )
}
