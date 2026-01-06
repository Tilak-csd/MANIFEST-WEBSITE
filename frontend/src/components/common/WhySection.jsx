import React from 'react'
import CountryFacilities from '../ui/CountryFacilitiesCard'
import { motion } from 'framer-motion'

export default function WhySection({ title = "", description = "", country }) {
  return (
    <section className="bg-slate-50 py-5 px-5 md:px-20 font-poppins text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: .6 }}
        transition={{ duration: .6, delay: .4 }}>
        <h1 className='font-serif text-2xl md:text-4xl font-semibold mb-2 text-slate-800'>{title}</h1>
        <p className='font-poppins text-sm md:text-lg max-w-6xl mt-2 text-center'>{description}</p>
      </motion.div>

      {/* facilities card */}
      <CountryFacilities country={country} />

    </section>
  )
}
