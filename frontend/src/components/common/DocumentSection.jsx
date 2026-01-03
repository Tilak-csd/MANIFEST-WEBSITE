import React from 'react'
import DocumentsCard from '../ui/DocumentsCard'
import Buttons from '../ui/Buttons'
import { NavLink } from 'react-router-dom'

export default function DocumentSection({ countryName = "" }) {
    console.log(countryName);
    const country = countryName
    console.log(country);
    
    
    return (
        <section className="bg-slate-50 py-5 px-5 h-atuo md:px-20 font-poppins text-center">
            <h1 className='font-serif text-4xl font-meidum mb-2 text-slate-800'>Required Documents to Apply for {countryName}</h1>

            <DocumentsCard country={`${country}`} />

            <NavLink to='/contact' className='inline-block px-5 my-5 py-3 font-poppins  bg-red-500 transform transition-all text-white hover:scale-105 hover:bg-black hover:text-white'>
                Start Your Application
            </NavLink>
        </section>
    )
}
