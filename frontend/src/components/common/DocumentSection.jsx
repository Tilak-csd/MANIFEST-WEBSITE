import React from 'react'
import DocumentsCard from '../ui/DocumentsCard'
import Buttons from '../ui/Buttons'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function DocumentSection({ countryName = "" }) {
    const country = countryName

    return (
        <section className="bg-slate-50 py-5 px-5 h-atuo md:px-20 font-poppins text-center">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: .6, delay: .2 }}
                className='font-serif text-2xl md:text-4xl font-semibold mb-2 text-slate-800'>
                Required Documents to Apply for {countryName}
            </motion.h1>

            <DocumentsCard country={`${country}`} />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true}}
                transition={{ duration: .6, delay: .2 }}
            >
                <NavLink to='/contact' className='inline-block px-5 my-5 py-3 font-poppins  bg-red-500 transform transition-all text-white hover:scale-105 hover:bg-black hover:text-white'>
                    Start Your Application
                </NavLink>
            </motion.div>
        </section>
    )
}
