import React from 'react'
import BlogContent from '../components/ui/BlogContent';
import Tags from '../components/ui/Tags';
import Buttons from '../components/ui/Buttons';

export default function Free_Barista_Blog() {
  return (
    <div className="flex justify-between items-start flex-col lg:flex-row bg-[#f0f7ff] p-6 md:p-12 text-slate-800">
      <BlogContent heading='“Master the Art of Coffee: Free Barista Training at Manifest”' url='https://ik.imagekit.io/fsso0s4pw/Gallery/Programs/Free%20Barista%20Class.jpeg' description='Master coffee making from basic theory to advanced latte art with our expert-led course. Perfect for students heading abroad, this free program offers hands-on training and a professional internship certificate to kickstart your global career.'>

        {/* Why Learn Barista Skill */}
        <div className='mb-6'>
          <h2 className="text-3xl font-bold font-serif text-blue-900 mb-4">Why Learn Barista Skills?</h2>
          <p className="text-md font-poppins">
            Being a barista is more than just making coffee; it’s an art form and a highly respected technical skill. Whether you are looking for a part-time job while studying or aiming to start a career in the hospitality industry, professional barista training opens doors to global opportunities.
          </p>
        </div>

        {/*  What you will Learn */}

        <div className='mb-6'>
          <h2 className="text-3xl font-bold font-serif text-blue-900 mb-4">What You Will Learn</h2>
          <p className="text-md font-poppins">
            Our comprehensive course takes you from the history of the bean to the final pour. Here is a sneak peek at the curriculum:
          </p>
          <ul className="space-y-3 text-md font-poppins list-disc mt-4 pl-4">
            <li>
              <span className="font-bold">The Foundation:</span> Basic Theory of Coffee and the "Beans to Cup" process.
            </li>
            <li>
              <span className="font-bold">The Technique:</span> Mastering the Art of Milk Frothing and Alternative Brewing Methods.
            </li>
            <li>
              <span className="font-bold">The Artistry:</span> Latte Art Techniques and Basic Latte Art.
            </li>
            <li>
              <span className="font-bold">The Menu:</span> Learning to craft Basic International Beverages.
            </li>
            <li>
              <span className="font-bold">The Profession:</span> Customer Service Skills and a Roasting Demonstration.
            </li>
            <li>
              <span className="font-bold">The Experience:</span> Hands-on training with Expert Baristas and an Internship Certificate upon completion.
            </li>
          </ul>
          <div className="border-l-4 border-blue-500 bg-white p-4 mt-4 shadow-sm">
            <p className="text-lg font-serif italic text-slate-800 leading-relaxed mb-2">
              "Learn until you become the perfect coffee maker."
            </p>
          </div>
        </div>

        {/* Enrollment Details */}
        <div className='mb-6'>
          <h2 className="text-3xl font-bold font-serif text-blue-900 mb-4">Enrollment Details</h2>
          <p className="text-md font-poppins">
            This is a golden opportunity to add a professional certification to your CV for free. We invite all aspiring coffee enthusiasts to visit us and "Clear Your Vision" for a brighter future.
          </p>
          <ul className="space-y-3 text-md font-poppins list-disc mt-4 pl-4">
            <li>
              <span className="font-bold">Location:</span> Putalisadak (Opposite to Star Mall), Kathmandu, Nepal
            </li>
            <li>
              <span className="font-bold">Contact:</span> 01-5922253 | 9851363253
            </li>
            <li>
              <span className="font-bold">Email:</span> manifestedu11@gmail.com
            </li>
            <li>
              <span className="font-bold">Website:</span> <a href="https://manifestconsultancy.vercel.app" className='underline'>www.manifestedu.com.np</a>
            </li>
          </ul>
        </div>

        {/* Quotes */}
        <div
          className="bg-[#f0f7ff] border-l-4 border-[#005bb7] p-4 shadow-sm rounded-sm transition-all hover:shadow-md mb-4">
          <h3 className="text-xl font-bold text-blue-900 mb-2 font-serif">
            Ready to brew your future?
          </h3>
          <p className="text-slate-800 text-md font-poppins">
            Don't miss out on this chance to learn a craft that stays with you for life. Seats for our free sessions fill up quickly!
          </p>
        </div>

        <Buttons to={'/contact'} label={'Start You Application'} classname='mt-6' />

      </BlogContent>

      <Tags />
    </div>
  )
}
