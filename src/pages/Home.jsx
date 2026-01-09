import React from 'react'
import Hero from '../components/layout/Hero'
import AboutSection from '../components/common/About'
import Countries from '../components/common/Countries'
import Services from '../components/common/Services'
import TrustedSection from '../components/common/Trusted'
import BlogSection from '../components/common/BlogSection'
import PromoPopup from '../components/common/PromoPopup'


export default function Home() {
    return (
        <>

            <PromoPopup />
            <Hero />
            <AboutSection />
            <Countries />
            <Services />
            <TrustedSection />
            <BlogSection title={"NEWS AND BLOGS"} />

        </>
    )
}
