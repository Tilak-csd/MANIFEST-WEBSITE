import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/layout/HeroSection'
import WhySection from '../components/common/WhySection'
import Course from '../components/common/Course'
import DocumentSection from '../components/common/DocumentSection'

export default function SouthKorea() {
  return (
    <>

        <HeroSection to='/country/southkorea' pageName='South Korea' description='Innovative Education, Global Edge' Heading='Study In South Korea' url='../images/country/header_banner.webp' />

        <WhySection country={'southkorea'} title='Why Choose The South Korea For Higher Education?' description="South Korea offers cutting-edge education, global-standard universities, and a dynamic culture. With growing numbers of English-taught programs, strong tech industries, and low tuition fees, it's a smart destination for ambitious students."/>

        <Course />
        <DocumentSection countryName='South Korea' />

    </>
  )
}
