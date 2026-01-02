import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Linkedin } from 'lucide-react';

const ContactUs = () => {





  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 font-sans ">
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-col">
        {/* Header Section */}
        <header className="text-center mb-8">
          <p className="tracking-widest text-sm font-medium uppercase font-serif mb-2">Manifest Edu. Consultancy</p>
          <h1 className="text-4xl md:text-5xl font-serif text-black tracking-[.3em] uppercase">Contact Us</h1>
        </header>

        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row justify-around gap-12 lg:gap-24 px-4">

          {/* Left Column: Online Inquiry */}
          <div className="w-[40%]">
            <h2 className="tracking-[0.6em] uppercase text-sm  text-center font-serif mb-8">Online Inquiry</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-red-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-red-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 border border-red-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-gray-400"
              />
              <textarea
                placeholder="Message / Query"
                rows="1"
                className="w-full p-3 border border-red-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-gray-400"
              ></textarea>
              <button
                // add the functionality for the contact page.
                className="bg-red-500 cursor-pointer text-white px-8 py-2 rounded-md hover:bg-black transition-colors uppercase text-sm"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="width-[40%]">
            <h2 className="tracking-[0.6em] uppercase text-sm mb-8 text-center font-serif">Contact Details</h2>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 text-md">
                <Mail className="text-red-500 w-6 h-6" />
                <span>
                  journeyinteducation@gmail.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 text-md">
                <Phone className="text-red-500 w-6 h-6" />
                <span>01-5922253, 9851363253</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 text-md">
                <MapPin className="text-red-500 w-6 h-6" />
                <span>Putalisadak (Opposite to Star Mall), Kathmandu</span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 pt-4">
                <a
                  href="https://instagram.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Instagram className="w-6 h-6 text-red-500" />
                </a>

                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Facebook className="w-6 h-6 text-red-500" />
                </a>

                <a
                  href="https://wa.me/9851363253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <MessageCircle className="w-6 h-6 text-red-500" />
                </a>

                <a
                  href="https://linkedin.com/company/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-6 h-6 text-red-500" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Google Maps Iframe Section */}
        <div className="w-[90%] my-8 rounded-xl overflow-hidden shadow-lg border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3373267804377!2d85.32004347458219!3d27.706869325514145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190026593157%3A0xa96bf6a3ae564d25!2sManifest%20Education%20Consultancy!5e0!3m2!1sen!2snp!4v1767372905965!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;