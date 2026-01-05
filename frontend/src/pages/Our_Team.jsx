import React from 'react';
import { motion } from 'framer-motion'

const teamMembers = [
    {
        name: "Alex Rivera",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Visionary leader with 15 years of experience in tech innovation."
    },
    {
        name: "Sarah Chen",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        bio: "Expert in scalable architecture and distributed systems."
    },
    {
        name: "Marcus Jordan",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        bio: "Crafting beautiful, user-centric digital experiences."
    },
    {
        name: "Elena Rodriguez",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
        bio: "Bridging the gap between user needs and technical execution."
    },
    {
        name: "David Park",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        bio: "Full-stack wizard with a passion for clean, maintainable code."
    },
    {
        name: "Maya Patel",
        role: "Marketing Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        bio: "Strategic storyteller building global brand awareness."
    },
    {
        name: "James Wilson",
        role: "UX Researcher",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        bio: "Deep diving into user behavior to drive product decisions."
    },
    {
        name: "Sophie Bennett",
        role: "Customer Success",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        bio: "Dedicated to ensuring every client achieves their goals."
    }
];

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
                    viewport={{ once: true, amount:.3}}
                    transition={{ duration: .6, delay:.3}}
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