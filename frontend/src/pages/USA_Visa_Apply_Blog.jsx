import React from 'react'
import Tags from '../components/ui/Tags'
import BlogContent from '../components/ui/BlogContent'
import { usaVisaSteps } from '../data/BlogData'
import Buttons from '../components/ui/Buttons'

export default function USA_Visa_Apply_Blog() {
    return (
        <div className="flex justify-between items-start bg-[#f0f7ff] p-6 md:p-12 text-slate-800">
            <BlogContent description='Get admitted to a SEVP-approved school, pay the SEVIS fee, complete the DS-160 form, attend your visa interview, and if approved, receive your visa and prepare to travel to the USA.'
                heading='“5 Steps to Apply for a Student Visa to USA - 2025 Guide”'
                url='https://ik.imagekit.io/fsso0s4pw/Blog/visa.webp'>

                {/* 5 Steps to Apply visa For USA */}
                <div className='mt-6'>
                    {usaVisaSteps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#f0f7ff] border-l-4 border-[#005bb7] p-6 shadow-sm rounded-sm transition-all hover:shadow-md mb-4"
                        >
                            <h3 className="text-xl font-bold text-blue-900 mb-2 font-serif">
                                {step.title}
                            </h3>
                            <p className="text-slate-800 text-md font-poppins">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <Buttons to={'/contact'} label={'Start You Application'} classname='mt-6' />



            </BlogContent >
            <Tags />

        </div >
    )
}
