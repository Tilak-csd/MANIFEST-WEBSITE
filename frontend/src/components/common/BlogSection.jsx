import React from 'react';
import BlogCard from '../ui/BlogCard';
import { blogs } from '../../data/Home';

const BlogSection = ({title=""}) => {
    return <section className="bg-slate-50 py-20 px-6 font-poppins">
        <div className='text-center'>
            <h1 className="text-4xl font-serif md:text-5xl font-extrabold text-[#D32F2F] tracking-tight uppercase">
                {title}</h1>
        </div>
         <div className="flex justify-center items-center font-poppins flex-wrap gap-6 mt-8">
            {blogs.map((blog, index)=>{
                return <BlogCard key={index} index={index} title={blog.title} description={blog.description} url={blog.img} to={blog.to} />
            })}
        </div>
    </section>
};

export default BlogSection;