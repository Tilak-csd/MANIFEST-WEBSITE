import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated 404 Header */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-9xl font-extrabold text-slate-200 tracking-widest relative"
        >
          404
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-red-500 bg-white px-2 rounded rotate-12 border border-red-200">
            Page Not Found
          </span>
        </motion.h1>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="mt-8 text-3xl font-bold text-slate-800 tracking-tight sm:text-4xl">
            Lost in space?
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved, 
            deleted, or perhaps it never existed in the first place.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg shadow-red-200 hover:bg-red-600 hover:-translate-y-1 transition-all duration-200"
          >
            Go back home
          </Link>
          
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-all duration-200"
          >
            Contact support
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;