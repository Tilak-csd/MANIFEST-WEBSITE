import React from 'react'
import { motion } from 'motion/react'

export default function ServiceCard({ index, url, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -10,
            }}
            viewport={{ once: true, amount: .4 }}
            transition={{ duration: 0.6, delay: index * .1 }}
            className='w-80 flex justify-center font-poppins items-center flex-col text-center h-80 px-6 py-8 rounded-md shadow-md'>
            {/* our service icon */}
            <img src={url} alt={title} className='w-18' />

            {/* our service Titles */}
            <h4 className='text-slate-600 font-semibold text-xl'>{title}</h4>

            {/* Our Service  */}
            <p className='text-center mt-3'>{description}</p>

        </motion.div>
    )
}
