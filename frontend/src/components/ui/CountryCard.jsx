import React from 'react'
import { NavLink } from 'react-router-dom'
import Buttons from './Buttons'

export default function CountryCard({index, url, country, to}) {
    return (
        <div
            key={index}
            className="group relative h-50 w-80 overflow-hidden rounded-md shadow-lg "
        >
            {/* 2. The Image with scale-110 on group-hover */}
            <img
                src={url}
                alt={`Study in ${country}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            {/* 3. Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50"></div>

            {/* 4. Center Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-white p-4">
                <h3 className="mb-2 text-2xl md:text-3xl font-semibold tracking-tight">
                    Study in {country}
                </h3>

                {/* <Buttons classname={"rounded-none py-1 px-5"} to={to} label={'Learn More'}>
                </Buttons> */}
                <button className='py-2 px-4 rounded-sm cursor-pointer font-semibold bg-red-500 hover:bg-white hover:text-red-500 text-white '>
                    Learn More
                </button>
            </div>
        </div>
    )
}
