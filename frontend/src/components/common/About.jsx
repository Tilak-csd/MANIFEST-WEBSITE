import React from 'react';
import { motion } from 'framer-motion';
// Icons: You can use Lucide-React or Heroicons. 
// I'll use placeholders that match the image style.
import { ChartNoAxesCombined, Trophy, BadgeCheck, Users } from 'lucide-react';

const AboutSection = () => {
    // Animation Variants
    const features = [
        { icon: <ChartNoAxesCombined  size={48} />, title: "High Visa Rate" },
        { icon: <Trophy size={48} />, title: "Award-Winning Guidance" },
        { icon: <BadgeCheck size={48} />, title: "Certified & Trusted Counselors" },
        { icon: <Users size={48} />, title: "Personalized Support" },
    ];

    return (
        <section className="bg-slate-50 py-20 px-6 font-poppins">
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
                        className="text-4xl font-serif md:text-5xl font-extrabold text-[#D32F2F] tracking-tight uppercase"
                    >
                        Welcome to the Manifest
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: .2 }}
                        className="text-xl md:text-2xl font-bold text-slate-800"
                    >
                        The Leading Consultancy In Nepal
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-slate-600 leading-relaxed mt-6"
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
                        className="text-lg text-slate-600 pt-4"
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
                            className="flex flex-col items-center group hover:shadow-2xl py-8 px-4"
                        >
                            {/* Icon Wrapper */}
                            <div className="text-[#D32F2F] mb-4 transition-transform duration-300 group-hover:scale-110">
                                {item.icon}
                            </div>
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