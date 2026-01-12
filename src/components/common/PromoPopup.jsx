import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Import the specific icons from Lucide
import { X, ExternalLink } from 'lucide-react';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Check if the user has seen the popup IN THIS TAB SESSION
    const hasSeenPopup = sessionStorage.getItem('home_popup_seen');

    if (!hasSeenPopup) {
      // 2. Wait 2 seconds then open it
      const timer = setTimeout(() => {
        setIsOpen(true);
        // 3. Mark as seen for this session only
        sessionStorage.setItem('home_popup_seen', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleImageClick = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />

          {/* Popup Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative max-w-md w-full"
          >

            {/* Lucide X Icon for Closing */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-all z-20 border border-slate-100"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Clickable Image Area */}
            <div
              onClick={handleImageClick}
              className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="./images/promo-banner.avif"
                alt="Ad Campaign"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay with Lucide Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-white font-bold text-lg">
                  <span>Get Started Now</span>
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;