import React from 'react'
import { tags } from '../../data/BlogData'
import { NavLink } from 'react-router-dom'

export default function Tags() {
    return (
        <aside className="w-full lg:w-[25%]">
            <div className="bg-[#eef8ff] border border-red-400 rounded-2xl w-full p-12 sticky top-8 shadow-sm">
                <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900 border-b-2 border-slate-200 pb-2">
                    Our Tags
                </h2>
                <ul className="space-y-1">
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <NavLink
                                to={tag.to}
                                className="text-[#334e68] font-poppins hover:text-[#005bb7] transition-colors text-lg block"
                            >
                                {tag.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}
