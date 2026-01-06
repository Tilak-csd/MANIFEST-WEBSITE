import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/layout/HeroSection'
import WhySection from '../components/common/WhySection'
import Course from '../components/common/Course'
import DocumentSection from '../components/common/DocumentSection'

export default function UK() {
  return (
    <>

        <HeroSection to='/country/uk' pageName='UK' description='Prestigious Education, Global Recognition' Heading='Study In UK' url='https://ik.imagekit.io/fsso0s4pw/Header/header_banner.webp' />

        <WhySection country={'uk'} title='Why Choose The Uk For Higher Education?' description='The UK combines historic academic excellence with modern, flexible learning. With globally recognized universities, shorter course durations, and post-study work options, it’s a smart choice for international students.'/>

        <Course />
        <DocumentSection countryName='UK' />

    </>
  )
}
