import React from 'react';
import { FacilitiesData } from '../../data/AboutCountry_Data';

const CountryFacilities = ({country}) => {
    console.log(country)
    const countrykey = country?.toLowerCase();
    const countryFacilitiesData = FacilitiesData[countrykey]
    console.log(countryFacilitiesData);
    

    return (
        <div className="p-8 h-auto">
            <div className="w-full md:max-w-5xl mx-auto">
                <div className="flex justify-center items-center flex-wrap gap-6">
                    {countryFacilitiesData.map((card, index) => (
                        <div
                            key={card.id}
                            className={`bg-white p-6 rounded-xl shadow-sm w-full md:w-120 border border-slate-100 flex flex-col gap-3 `}
                        >
                            <div className="flex items-center gap-3">
                                <card.icon className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
                                <h3 className="text-xl text-left font-semibold text-[#1e3a8a] font-serif">
                                    {card.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-base text-left">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountryFacilities;