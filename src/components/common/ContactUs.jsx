import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Instagram, Facebook, 
  MessageCircle, Linkedin, CheckCircle2, XCircle, Loader2 
} from 'lucide-react';
import axios from 'axios';

const ContactUs = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modal, setModal] = useState({ show: false, success: false, text: "" });

  // API Logic

  const API_URL = "https://manifestedu.vercel.app/api/v1/contactForm";

  const submitEvent = async (e) => {
    e.preventDefault();

    if (!username || !email || !phone || !message) {
      setModal({ show: true, success: false, text: "All fields are required." });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(API_URL, {
        name: username,
        email: email,
        phone: phone,
        message: message
      });

      setModal({ show: true, success: true, text: response.data.message });
      setUsername(""); setEmail(""); setPhone(""); setMessage("");
    } catch (error) {
      setModal({
        show: true,
        success: false,
        text: error.response?.data?.message || "Server error. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 font-sans ">

      {/* Feedback Modal */}
      {modal.show && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center animate-in zoom-in duration-200">
            {modal.success ? (
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            ) : (
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            )}
            <h3 className="text-2xl font-bold mb-2">{modal.success ? "Sent!" : "Failed"}</h3>
            <p className="text-slate-600 mb-6">{modal.text}</p>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex justify-center items-center flex-col">
        {/* Header Section */}
        <header className="text-center mb-8">
          <p className="tracking-widest text-sm font-medium uppercase font-serif mb-2">Manifest Edu. Consultancy</p>
          <h1 className="text-2xl md:text-4xl font-serif text-black tracking-[.3em] uppercase">Contact Us</h1>
        </header>

        {/* Main Flex Container */}
        <div className="flex flex-col md:flex-row justify-around gap-12 lg:gap-24 px-4">

          {/* Left Column: Online Inquiry */}
          <div className="w-full md:w-[40%]">
            <h2 className="tracking-[0.6em] uppercase text-sm  text-center font-serif mb-8">Online Inquiry</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
                className="w-full p-3 border border-red-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                className="w-full p-3 border border-red-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => { setPhone(e.target.value) }}
                className="w-full p-3 border border-red-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-gray-400"
              />
              <textarea
                placeholder="Message / Query"
                rows="1"
                value={message}
                onChange={(e) => { setMessage(e.target.value) }}
                className="w-full p-3 border border-red-400 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 placeholder-gray-400"
              ></textarea>
              <button
                onClick={submitEvent}
                disabled={isSubmitting}
                className={`group relative w-full py-4 rounded-md uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-lg cursor-pointer
                  ${isSubmitting 
                    ? 'bg-slate-400 scale-[0.98]' 
                    : 'bg-red-600 text-white hover:bg-black hover:shadow-red-200 active:scale-95'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Submit</span>
                )} 
              </button>
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="w-full  md:w-[40%]">
            <h2 className="tracking-[0.6em] uppercase text-sm mb-8 text-center font-serif">Contact Details</h2>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 text-sm md:text-[1.1rem]">
                <Mail className="text-red-500 w-6 h-6" />
                <span>
                  manifestedu11@gmail.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 text-sm md:text-[1.1rem]">
                <Phone className="text-red-500 w-6 h-6" />
                <span>01-5922253, 9851363253</span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 text-sm md:text-[1.1rem]">
                <MapPin className="text-red-500 w-7 h-7" />
                <span>Putalisadak (Opposite to Star Mall), Kathmandu</span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 pt-4">
                <a
                  href="https://www.instagram.com/manifest_edu_consultancy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Instagram className="w-7 h-7 text-red-500" />
                </a>

                <a
                  href="https://www.facebook.com/nzouconsultingcentre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Facebook className="w-7 h-7 text-red-500" />
                </a>

                <a
                  href="https://wa.me/9851363253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <MessageCircle className="w-7 h-7 text-red-500" />
                </a>

                <a
                  href="https://www.linkedin.com/company/journey-international-education/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Linkedin className="w-7 h-7 text-red-500" />
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