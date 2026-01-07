import React from 'react'

export default function BlogContent({ children, heading = "", url = "", description = "" }) {
    return (
        <div className='flex justify-center items-center flex-col lg:w-[70%]'>
            {/* Main Header */}
            <main className='flex justify-between items-end w-full gap-2'>
                <div>
                    <h1 className="text-2xl md:text-3xl text-blue-600 font-serif font-semibold mb-4">
                        "How to write a Powerful SOP (Statement of Purpose)"
                    </h1>
                    <p className="text-md font-poppins">
                        A strong SOP highlights your goals, reasons for choosing the course, and what drives you.
                        It should be clear, personal, and show how the program fits your future plans—making
                        your application memorable and impactful.
                    </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl w-400">
                    <img
                        src="https://ik.imagekit.io/fsso0s4pw/Blog/sop_writing.webp"
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
