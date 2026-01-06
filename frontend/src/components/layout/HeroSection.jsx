import React from 'react';
import { ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Buttons from '../ui/Buttons';
import { motion } from 'framer-motion'

const HeroSection = ({ pageName = "", to = "", Heading = "", description = "", url = "" }) => {
    return (
        <section className="relative w-full md:px-8 py-4 overflow-hidden bg-slate-100 font-poppins">
            <div>
                <div className='flex px-3 md:px-0 items-center text-md'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <ChevronRight size={'20px'}/>
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
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: .6 }}
                            transition={{ duration: .6, delay: .2 }}
                            className="text-white text-center text-3xl md:text-5xl font-bold">

                            {Heading}

                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: .6 }}
                            transition={{ duration: .6, delay: .3 }}
                            className='text-white text-md md:text-lg text-center font-medium'>

                            {description}

                        </motion.p>
                        <motion.div
                        initial={{opacity:0, y:40}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true, amount:.6}}
                        transition={{duration:.6, delay:.4}}>
                        <Buttons label={'Apply Now'} to={'/contact'} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; ``