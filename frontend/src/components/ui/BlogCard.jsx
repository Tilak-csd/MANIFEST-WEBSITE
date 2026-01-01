import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogCard = ({index, url, title, description, to}) => {
    return (
        <div className='w-80 h-100 shadow rounded-md overflow-hidden'>
            {/* Blue Header Section */}
            <div className="bg-[#1e2a78] h-24 w-full relative">
                {/* Floating Thumbnail Image */}
                <div className="absolute -bottom-10 left-6 w-24 h-24 rounded-xl overflow-hidden border-4 border-white shadow-md">
                    <img
                        src={url}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="pt-14 px-6 pb-8 ">
                <h2 className="text-[#1e2a78] text-xl font-bold leading-tight mb-4">
                    {title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                    {description}
                </p>

                {/* Action Link with Arrow Animation */}
                <NavLink
                    to={to}
                    className="text-red-500 font-semibold flex items-center justify-start hover:text-red-600 transition-colors group-hover:underline"
                >
                    Read More
                    <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                        &gt;&gt;
                    </span>
                </NavLink>
            </div>
        </div>

    );
};

export default BlogCard;