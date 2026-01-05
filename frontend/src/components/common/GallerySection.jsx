import React, { useState, useMemo } from 'react';
import { galleryData } from '../../data/GalleryData';

const ITEMS_PER_PAGE = 6; // You can change this to 8 or 12

const MultiPageGallery = () => {
  const [activeTab, setActiveTab] = useState('congratulation');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['congratulation', 'program', "flights", "celeberation", "team", 'interview', 'events'];

  // 1. Filter data by category
  const filteredData = useMemo(() => {
    return galleryData.filter(item => item.category === activeTab);
  }, [activeTab]);

  // 2. Calculate Pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 when category changes
  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setCurrentPage(1);
  };

  return (
    <div className="w-full bg-slate-100 mx-auto px-4 py-12 font-sans">
      <header className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-red-500 font-serif sm:text-4xl uppercase">Manifest Gallery</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleTabChange(cat)}
              className={`px-5 py-2 rounded-md cursor-pointer text-sm font-medium font-poppins transition-colors ${
                activeTab === cat 
                ? 'bg-indigo-700 text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </header>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[4/3]">
              <img
                src={item.src}
                alt={item.title}
                loading='lazy'
                className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="p-2 rounded border cursor-pointer hover:bg-gray-50 disabled:opacity-30"
          >
            Previous
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded border ${
                currentPage === i + 1 ? 'bg-indigo-600 cursor-pointer text-white' : 'hover:bg-gray-50'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="p-2 rounded border cursor-pointer hover:bg-gray-50 disabled:opacity-30"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiPageGallery;