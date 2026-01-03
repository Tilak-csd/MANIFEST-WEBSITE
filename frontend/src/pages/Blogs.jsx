import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/layout/HeroSection'
import BlogSection from '../components/common/BlogSection'

export default function Blogs() {
  return (
    <>
    <Navbar />
    <HeroSection description='See the Latest Blogs and FAQs from our Team.' to={'/blog'} Heading={'Blogs & FAQs'} pageName='Blogs & FAQs' url='./images/blog/BANNER.webp' />
    <BlogSection />
    <Footer />

    </>
  )
}
