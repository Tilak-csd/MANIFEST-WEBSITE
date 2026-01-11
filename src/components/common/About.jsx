import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../../data/Home';

const AboutSection = () => {
    return (
        <section id="aboutus" className="bg-slate-50 py-20 px-6 font-poppins">
            <div className="max-w-6xl mx-auto text-center">

                {/* Header Content */}
                <div

                    className=" mb-20"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-4xl font-serif font-extrabold text-[#D32F2F] tracking-tight uppercase"
                    >
                        Welcome to Manifest
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: .2 }}
                        className="text-lg
                         md:text-2xl font-bold text-slate-800"
                    >
                        The Leading Consultancy In Nepal
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-sm md:text-lg text-slate-600 leading-relaxed mt-6"
                    >
                        Manifest Education Consultancy has built a strong reputation as one of Nepal’s
                        leading educational consultancies for studying abroad. With years of trusted
                        service and student success, we are proud to guide aspiring students toward
                        their global academic dreams.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: .4 }}
                        className="text-sm md:text-lg text-slate-600 pt-4"
                    >
                        Our head office is conveniently located in Putalisadak, opposite Star Mall, Kathmandu.
                    </motion.p>
                </div>

                {/* Feature Icons Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay : index * .2}}
                            className="flex flex-col rounded-md items-center group hover:shadow-2xl py-8 px-4"
                        >
                            {/* Icon Wrapper */}
                            <img src={item.icon} alt={item.title} className='w-16 md:w-20' />
                            <p className="text-slate-900 text-md md:text-md">
                                {item.title}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;