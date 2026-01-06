import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/layout/HeroSection'
import WhySection from '../components/common/WhySection'
import Course from '../components/common/Course'
import DocumentSection from '../components/common/DocumentSection'

export default function France() {
  return (
    <>


        <HeroSection to='/country/france' pageName='France' description='Prestige, Culture & Academic Excellence' Heading='Study In Francce' url='https://ik.imagekit.io/fsso0s4pw/Header/header_banner.webp' />

        <WhySection country={'france'} title='Why Choose The France For Higher Education?' description="France is a global leader in education, art, fashion, and innovation. With affordable tuition, world-class institutions, and rich cultural heritage, it's a favorite destination for students seeking quality education in the heart of Europe."/>

        <Course />
        <DocumentSection countryName='France' />

    </>
  )
}
