import React from 'react';
import { footerData } from '../../data/FooterData';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

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
            <div className="flex space-x-4">
              <a href="#" className="hover:bg-black hover:text-white bg-white rounded-full p-2 text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:bg-black hover:text-white bg-white rounded-full p-2 text-black transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:bg-black hover:text-white bg-white rounded-full p-2 text-black transition-colors">
                <Linkedin size={18} />
              </a>
              {/* Corrected WhatsApp SVG Link */}
              <a href="#" className="hover:bg-black hover:text-white bg-white rounded-full p-2 text-black transition-colors flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-[18px] w-[18px]"
                  fill="currentColor"
                >
                  <path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
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
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center  text-center text-sm text-[#ccc]">
          <p>© {new Date().getFullYear()} MANIFEST EDU. CONSULTANCY | All Right Reserved</p>
          <p className="mt-4 md:mt-0">Designed And Developed By <a href='https://www.instagram.com/its_zorotz/' target='_blank'>Tilak Gubhaju</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;