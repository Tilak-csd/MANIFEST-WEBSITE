import React from 'react'

export default function BlogContent({ children, heading = "", url = "", description = "" }) {
    return (
        <div className='flex justify-center items-center flex-col lg:w-[70%]'>
            {/* Main Header */}
            <main className='flex justify-between items-end w-full gap-2'>
                <div>
                    <h1 className="text-2xl md:text-3xl text-blue-900 font-serif font-semibold mb-4">
                       {heading}
                    </h1>
                    <p className="text-md font-poppins">
                       {description}
                    </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl w-400">
                    <img
                        src={url}
                        alt="Student studying with laptop"
                        className="w-full h-auto object-cover"
                    />
                </div>

            </main>

            {/* Details Section */}
            <section className='w-full my-6'>
                {children}
            </section>
        </div>
    )
}
