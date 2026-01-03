import React from 'react';
import { requirementsData } from '../../data/AboutCountry_Data';

const DocumentsCard = () => {
  return (
    <div className="py-8 px-4 h-auto">
      <div className="max-w-6xl mx-auto">

        {/* Grid Layout */}
        <div className="flex justify-center items-center flex-wrap gap-6">
          {requirementsData.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-4 w-70 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center text-center border border-transparent hover:border-blue-100"
            >
              {/* Icon Container */}
              <div className="mb-4 p-3 bg-red-50 rounded-full text-[#e11d48]">
                <item.icon size={32} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-md font-semibold text-slate-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DocumentsCard;