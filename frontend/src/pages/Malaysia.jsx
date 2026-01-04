import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/layout/HeroSection'
import WhySection from '../components/common/WhySection'
import Course from '../components/common/Course'
import DocumentSection from '../components/common/DocumentSection'

export default function Malaysia() {
  return (
    <>

        <HeroSection to='/country/malaysia' pageName='Malaysia' description='Quality Education, Affordable Living in Asia’s Heart' Heading='Study In Malaysia' url='../images/country/header_banner.webp' />

        <WhySection country={'malaysia'} title='Why Choose The Malaysia For Higher Education?' description='Malaysia combines affordable education, cultural diversity, and academic excellence. With top-ranked local and international branch campuses, students enjoy globally recognized degrees and a welcoming environment at a lower cost.'/>

        <Course />
        <DocumentSection countryName='Malaysia' />

    </>
  )
}
