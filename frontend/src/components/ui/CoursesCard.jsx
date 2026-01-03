import React from 'react';
import { SubjectData } from '../../data/AboutCountry_Data';

const CourseCards = () => {
  return (
    <div className="p-8 h-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center flex-wrap gap-6">
          {SubjectData.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative w-100 md:w-80 h-50 overflow-hidden rounded-2xl cursor-pointer shadow-lg`}
            >
              {/* Background Image with Zoom Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/40"></div>

              {/* Text Content */}
              <div className="relative h-full flex items-center justify-center p-6 text-center">
                <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCards;