import React from 'react'
import { useState } from 'react';
import { MdEventNote } from 'react-icons/md';
function Test() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function
    const toggleContent = () => setIsOpen(!isOpen);
  
  return ( <div className="service-card shadow-lg rounded-lg p-5 bg-white transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
    <div className="ser-card">
      <MdEventNote className="text-blue-500 text-6xl mb-2" />
      
      {/* Title - Clickable */}
      <h1 
        className="text-xl font-bold cursor-pointer text-blue-600 hover:underline"
        onClick={toggleContent}
      >
        Digital Experience
      </h1>
      
      {/* Paragraph - Show/Hide based on isOpen */}
      {isOpen && (
        <p className="mt-2 text-gray-600">
          Enhance your digital presence with our Digital Experience solutions. We create engaging, user-centric digital experiences that optimize customer interactions, drive engagement, and deliver measurable business impact across multiple platforms.
        </p>
      )}
    </div>
  </div>
);
}







export default Test