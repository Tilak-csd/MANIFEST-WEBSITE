import React from 'react'

export default function ServiceCard({ icon, title, description }) {
    const Icon = icon
    return (
        <div className='w-80 text-center h-70 px-6 py-8 rounded-md shadow-md'>
            {/* our service icon */}
            <Icon className="w-10 h-10 text-red-500 mb-4 text-center" />

            {/* our service Titles */}
            <h4 className='text-slate-600 font-semibold text-xl'>{title}</h4>

            {/* Our Service  */}
            <p className='text-center mt-3'>{description}</p>

        </div>
    )
}
