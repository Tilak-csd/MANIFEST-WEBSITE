import React from 'react';
import { ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Buttons from '../ui/Buttons';

const HeroSection = ({pageName="", to="", Heading="", description="", url=""}) => {
    return (
        <section className="relative w-full px-8 py-4 overflow-hidden bg-slate-100 font-poppins">
            <div>
                <div className='flex items-center text-lg'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <ChevronRight />
                    <NavLink to={to} className='text-red-500'>
                        {pageName}</NavLink>
                </div>
                <div
                    className="relative w-full h-80 my-2 bg-cover bg-fixed bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${url}")` }}
                >
                    {/* Overlay Layer */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Content (Optional) */}
                    <div className="relative h-full flex items-center justify-center flex-col gap-4">
                        <h2 className="text-white text-5xl font-bold">{Heading}</h2>
                        <p className='text-white text-lg text-center font-medium'>{description}</p>
                        <Buttons label={'Apply Now'} to={'/contact'} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; ``