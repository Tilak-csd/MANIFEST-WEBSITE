import React from 'react';
import { ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative w-full px-8 py-4 overflow-hidden bg-slate-100 font-poppins">
            <div>
                <div className='flex items-center text-lg'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <ChevronRight />
                    <NavLink to='/blog' className='text-red-500'>
                        Blogs & News</NavLink>
                </div>
                <div className='w-full h-60 my-2 object-cover' style={{backgroundImage:'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070")'}}>
                    
                </div>
            </div>
        </section>
    );
};

export default HeroSection;``