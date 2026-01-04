import React from 'react';
import { FacilitiesData } from '../../data/AboutCountry_Data';
import { motion } from "framer-motion"

const CountryFacilities = ({ country }) => {
    const countrykey = country?.toLowerCase();
    const countryFacilitiesData = FacilitiesData[countrykey]

    return (
        <motion.div 
        initial={{opacity:0, y:40}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true, amount:.4}}
        transition={{duration:.4, delay:.2}}
        className="p-8 h-auto">
            <div className="w-full md:max-w-5xl mx-auto">
                <div className="flex justify-center items-center flex-wrap gap-6">
                    {countryFacilitiesData.map((card, index) => (
                        <motion.div
                            whileHover={{
                                y: -10,
                                transition: { type: "spring", stiffness: 100, damping: 20 }
                            }}
                            // This ensures it returns to position smoothly too
                            initial={{ y: 0 }}
                            key={card.id}
                            className={`bg-white p-6 rounded-xl shadow-sm w-full md:w-120 border border-slate-100 flex flex-col gap-3 `}
                        >
                            <div className="flex items-center gap-3">
                                <card.icon className="w-8 h-8 text-red-500" strokeWidth={1.5} />
                                <h3 className="text-xl text-left font-semibold text-slate-800 font-serif">
                                    {card.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-base text-left">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CountryFacilities;