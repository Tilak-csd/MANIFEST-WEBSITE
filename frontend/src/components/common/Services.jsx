import React from 'react'
import { servicesData } from '../../data/Home'
import ServiceCard from '../ui/ServiceCard'

export default function Services() {
    return (
        <section className="bg-slate-50 py-20 px-6 font-sans">
            <div className='text-center'>
                <h1 className="text-4xl font-inter md:text-5xl font-extrabold text-[#D32F2F] tracking-tight uppercase">
                    OUR SERVICES</h1>
                <p className='text-lg text-slate-700 mt-1'>Empowering Your Study Abroad Dreams with Expert Guidance and Proven Visa Support</p>
            </div>

            {/* Our Services Cards */}
            <div className='flex justify-center items-center flex-wrap gap-6 max-w-7xl mx-auto mt-10'>
                {servicesData.map((service, index)=>{
                    return <ServiceCard key={index} index={index} url={service.img} title={service.title} description={service.description} />
                })}

            </div>

        </section>
    )
}
