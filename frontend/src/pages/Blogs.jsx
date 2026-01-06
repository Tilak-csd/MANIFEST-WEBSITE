import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/layout/HeroSection'
import BlogSection from '../components/common/BlogSection'
import FAQSection from '../components/ui/FAQSection'

export default function Blogs() {
  return (
    <>
    <HeroSection description='See the Latest Blogs and FAQs from our Team.' to={'/blog'} Heading={'Blogs & FAQs'} pageName='Blogs & FAQs' url='https://ik.imagekit.io/fsso0s4pw/Header/BANNER.webp' />
    <BlogSection />
    <FAQSection />

    </>
  )
}
