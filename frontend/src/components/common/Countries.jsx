import React from 'react';
import { countries } from '../../data/Home';
import CountryCard from '../ui/CountryCard';

const Countries = () => {
  return (
    <section id="country" className="bg-slate-50 py-8 md:py-12 lg:py-16 px-6 font-poppins">
      <div className="max-w-7xl mx-auto ">
        <div className='text-center mb-8'>
          <h1 className="text-4xl font-serif md:text-5xl font-extrabold text-[#D32F2F] tracking-tight uppercase">
            Trusted Destinations</h1>
          <p className='text-lg text-slate-700 mt-1'>Your journey to global excellence starts with personalized support and expert academic placement</p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-6">
          {countries.map((country, index) => {
            return <CountryCard key={index} to={country.to} country={country.name} url={country.img} index={index} />
          })}
        </div> 
      </div>
    </section>
  );
};

export default Countries;