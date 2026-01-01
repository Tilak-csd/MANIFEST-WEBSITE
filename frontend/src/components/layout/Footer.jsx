import React from 'react';
import { footerData } from '../../data/FooterData';
import Buttons from '../ui/Buttons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const { about, destinations, services, contact } = footerData;

  return (
    <footer className="bg-[#D32F2F] text-white py-8 px-6 font-poppins">
      <div className=" w-full">
        {/* Changed to a 12-column grid for finer width control */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-14 gap-6 mb-8">
          
          {/* About Section - Occupies 4 out of 12 columns */}
          <div className="lg:col-span-5">
            <h3 className="text-[1.3rem] font-serif font-semibold mb-2">{about.title}</h3>
            <p className="text-md leading-relaxed mb-6 text-[#ccc] max-w-md font-poppins">
              {about.description}
            </p>
            <div className="flex space-x-5">
              {about.socials.map((social) => (
                <a key={social.name} href={social.href} className="hover:opacity-70 transition-opacity">
                   <div className="w-8 h-8 border border-white rounded-md flex items-center justify-center">
                     {/* Replace letters with Icon components as needed */}
                     <span className="text-xs">{social.name[0]}</span>
                   </div>
                </a>
              ))}
            </div>
          </div>

          {/* Destinations - Occupies 2 out of 12 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-[1.3rem] font-semibold mb-2 font-serif">Study Destination</h3>
            <ul className="space-y-1 text-md text-[#ccc] font-poppins">
              {destinations.map((item) => (
                <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Services - Occupies 2 out of 12 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-[1.3rem] font-semibold mb-2 font-serif">Services</h3>
            <ul className="text-md text-[#ccc] font-poppins">
              {services.map((item) => (
                <li key={item} className='my-1'><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
 
          {/* Contact - Occupies 4 out of 12 columns to fit the button and long address */}
          <div className="lg:col-span-4">
            <h3 className="text-[1.3rem] font-semibold mb-2 font-serif ">Contact</h3>
            <div className="text-md space-y-1 text-[#ccc] mb-8 font-poppins">
              <p><span>Phone :</span> {contact.phones.join(', ')}</p>
              <p><span>Email :</span> {contact.email}</p>
              <p><span>Address :</span> {contact.address}</p>
            </div>

            <NavLink to='/contact' className="bg-white text-black px-6 py-3 rounded-md hover:bg-black hover:text-white hover:scale-105 transform transition-all" >
            Book a Free Consultant
              
            </NavLink>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center  text-center text-md text-[#ccc]">
          <p>© {new Date().getFullYear()} MANIFEST EDU. CONSULTANCY | All Right Reserved</p>
          <p className="mt-4 md:mt-0">Designed And Developed By <a href='https://www.instagram.com/its_zorotz/' target='_blank'>Tilak Gubhaju</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;