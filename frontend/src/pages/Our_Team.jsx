import React from 'react';
import { motion } from 'framer-motion'
import { teamMembers } from '../data/TeamMember_Data';


const OurTeamSection = () => {
    return (
        <section className="bg-white py-8 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header Section */}
                <div className="w-full mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6 }}
                        className="text-3xl font-bold tracking-tight text-red-500 font-serif uppercase sm:text-4xl ">
                        Meet Our Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .6, delay: .2 }}
                        className="mt-4 text-lg leading-8 text-gray-600">
                        A diverse group of experts working together to solve complex problems and deliver exceptional value.
                    </motion.p>
                </div>

                {/* Team Grid */}
                <motion.ul
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true}}
                    transition={{ duration: .4, delay:.3}}
                    role="list"
                    className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {teamMembers.map((member) => (
                        <li key={member.name} className="flex flex-col items-start">
                            {/* Image with gray background container to match UI reference */}
                            <div className="w-full aspect-square rounded-2xl bg-gray-100 overflow-hidden">
                                <img
                                    className="h-full w-full object-cover mix-blend-multiply transition duration-300 hover:scale-105"
                                    src={member.image}
                                    alt={member.name}
                                />
                            </div>

                            <div className="mt-6 text-left">
                                <h3 className="text-lg font-bold leading-7 tracking-tight text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium leading-6 text-gray-700">
                                    {member.role}
                                </p>
                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {member.bio}
                                </p>
                            </div>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
};

export default OurTeamSection;