import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/layout/Hero'
import AboutSection from '../components/common/About'
import Countries from '../components/common/Countries'
import Services from '../components/common/Services'
import TrustedSection from '../components/common/Trusted'
import BlogSection from '../components/common/BlogSection'
import Footer from '../components/layout/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <Countries />
            <Services />
            <TrustedSection />
            <BlogSection />
            <Footer />
        </>
    )
}
