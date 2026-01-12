import React from 'react';
import { motion } from 'framer-motion';
import Buttons from '../ui/Buttons';
import {NavLink} from 'react-router-dom'

const TrustedSection = () => {
    return (
        <section
            className="relative h-80 w-full flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover font-poppins"
            style={{
                // Replace with your actual image URL
                backgroundImage: `url('./trusted_bg1.webp')`
            }}
        >
            {/* Dark Overlay to make text readable */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-4 w-full md:max-w-5xl mx-auto text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl font-bold mb-4 font-serif drop-shadow-lg">
                    Trusted by More Than 5000 Students
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-sm md:text-lg font-light mb-8 opacity-90 leading-relaxed">
                    We offer expert teaching from highly qualified professionals, continuous
                    personalized guidance, and a dedicated support team focused on helping
                    every student thrive.
                </motion.p>

                {/* Hover Animation Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true}}
                    transition={{duration: 0.8, delay:.4}}
                    >
                    <NavLink to="/contact"
                        className='py-3 px-6 rounded-md cursor-pointer font-semibold bg-red-500 hover:bg-white hover:text-red-500 text-white hover:scale-105'>
                        Learn More
                    </NavLink>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedSection;