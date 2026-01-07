import React from 'react';
import BlogContent from '../components/ui/BlogContent';
import Tags from '../components/ui/Tags';
import { Download } from 'lucide-react';
// import Sample_PDF from '../../public/download/Sample_SOP.pdf'

const SOP_Writing_Blog = () => {
    

    return (
        <div className="flex justify-between items-start bg-[#f0f7ff] p-6 md:p-12 text-slate-800">

            <BlogContent heading='“How to write a Powerful SOP (Statement of Purpose)”' description='A strong SOP highlights your goals, reasons for choosing the course, and what drives you. It should be clear, personal, and show how the program fits your future plans—making your application memorable and impactful.' url='https://ik.imagekit.io/fsso0s4pw/Blog/sop_writing.webp'>
                {/* Details Section */}
                <div className='mb-6'>
                    <h2 className="text-3xl font-bold font-serif text-blue-900 mb-4">What is SOP?</h2>
                    <p className="text-md font-poppins">
                        A Statement of Purpose (SOP) is a formal essay that explains your motivation for
                        applying to a particular course or university. It outlines your academic background,
                        career goals, achievements, and why you are a good fit for the program.
                    </p>
                </div>

                <div className='mb-6'>
                    <h2 className="text-3xl font-bold font-serif text-blue-900 mb-4">Why is an SOP Important?</h2>
                    <p className="text-md font-poppins">
                        Universities and visa officers use your SOP to understand your goals and determine
                        if you're a strong candidate. A well-written SOP can set you apart from other
                        applicants with similar academic records.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-bold font-serif text-blue-900 mb-4">Structure of a Strong SOP</h2>
                    <ul className="space-y-3 text-md font-poppins list-disc pl-4">
                        <li>
                            <span className="font-bold">Introduction:</span> Start with a strong hook and clearly state your intention to apply.
                        </li>
                        <li>
                            <span className="font-bold">Academic Background:</span> Highlight your educational history and relevant projects or achievements.
                        </li>
                        <li>
                            <span className="font-bold">Career Goals:</span> Clearly define your short- and long-term objectives.
                        </li>
                        <li>
                            <span className="font-bold">Why This Course/University:</span> Explain why you chose this specific institution and program.
                        </li>
                        <li>
                            <span className="font-bold">Conclusion:</span> Summarize your motivation and express gratitude for the opportunity.
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-blue-900 font-serif mb-4">Tips to Make Your SOP Stand Out</h2>
                    <ol className="list-decimal list-inside space-y-3 text-md font-poppins ">
                        <li>Keep it personal and honest – avoid generic statements.</li>
                        <li>Stick to the word limit (usually 800–1000 words).</li>
                        <li>Proofread for grammar, clarity, and flow.</li>
                        <li>Avoid plagiarism – write in your own words.</li>
                        <li>Tailor each SOP for the specific program or university.</li>
                    </ol>
                </div>


                {/* Mistakes Section */}
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4 font-serif">Common Mistakes to Avoid</h2>
                    <ul className="list-disc list-inside space-y-3 text-md font-poppins">
                        <li>Overloading with technical terms or jargon</li>
                        <li>Repeating your resume</li>
                        <li>Too many clichés (e.g., "Since childhood I have...")</li>
                        <li>Neglecting to explain gaps in education or work</li>
                    </ul>
                </div>

                {/* Download Section */}
                <section className="mb-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4 font-serif">Sample SOP Download</h2>
                    <p className="text-md font-poppins mb-2">
                        You can download a sample SOP below to use as a reference.
                    </p>
                    <a href='/download/Sample_SOP.pdf?url' download="Sample_SOP.pdf" className="flex items-center gap-2 w-80 bg-[#e53e3e] hover:scale-105 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md">
                        <Download size={20} />
                        Download Sample SOP (PDF)
                    </a>
                </section>

                <div className="border-l-4 border-blue-500 bg-white p-6 shadow-sm">
                    <p className="text-lg font-serif italic text-slate-800 leading-relaxed mb-2">
                        "A great SOP is more than words – it's your story, your ambition, and your future in one document."
                    </p>
                    <cite className="block text-md font-serif text-slate-700 not-italic">
                        — CEO, Anju Rayamajhi
                    </cite>
                </div>


            </BlogContent>
            <Tags />

        </div>
    );
};

export default SOP_Writing_Blog;