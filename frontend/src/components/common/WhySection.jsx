import React from 'react'
import CountryFacilities from '../ui/CountryFacilitiesCard'

export default function WhySection({title="", description="", country}) {
  return (
   <section className="bg-slate-50 py-5 px-5 md:px-20 font-poppins text-center">
    <div>
        <h1 className='font-serif text-4xl font-meidum mb-2 text-slate-800'>{title}</h1>
        <p className='font-poppins text-md md:text-lg max-w-6xl mt-2 text-center'>{description}</p>
    </div>

    {/* facilities card */}
    <CountryFacilities country={country} />
    
    </section>
  )
}
