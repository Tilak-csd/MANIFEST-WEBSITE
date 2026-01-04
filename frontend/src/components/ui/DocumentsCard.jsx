import React from 'react';
import { RequiredDocument } from '../../data/AboutCountry_Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion'

const DocumentsCard = ({ country }) => {
  let countryKey = country?.toLowerCase().replace(" ", "_");

  // 2. Fallback check for "south korea" specifically if needed
  if (countryKey === "south korea") {
    countryKey = "south_korea";
  }

  // 3. Get the documents from your data file
  const docs = RequiredDocument[countryKey] || [];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:true, amount: 0.4 }}
      transition={{ duration: .4, delay: .3 }}
      className="py-8 px-4 h-auto">
      <div className="max-w-6xl mx-auto">

        {/* Grid Layout */}
        <div className="flex justify-center items-center flex-wrap gap-6">
          {docs.map((item) => (
            <motion.div
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 100, damping: 20 }
              }}
              // This ensures it returns to position smoothly too
              initial={{ y: 0 }}
              key={item.id}
              className="bg-white p-4 w-70 rounded-xl shadow-sm flex flex-col items-center justify-center text-center border border-transparent hover:border-blue-100"
            >
              {/* Icon Container */}
              <FontAwesomeIcon icon={item.icon} size='2xl' color='#ef4444' />

              {/* Title */}
              <h3 className="text-md font-semibold text-slate-800 my-2">
                {item.topic}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default DocumentsCard;