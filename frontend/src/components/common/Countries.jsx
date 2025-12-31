import React from 'react';
import { countries } from '../../data/Home';
import CountryCard from '../ui/CountryCard';

const Countries = () => {
  return (
    <section className="bg-slate-50 py-8 md:py-12 lg:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className='text-center text-3xl mb-6 font-inter md:text-5xl font-semibold text-[#D32F2F]'>Trusted Guidance for These Destinations</h1>
        <div className="flex justify-center items-center flex-wrap gap-6">
          {countries.map((country, index) => {
            return <CountryCard  key={index} to={country.to} country={country.name} url={country.img} index={index} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Countries;