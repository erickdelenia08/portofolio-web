import React from 'react';

const WarningModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-scnd-col bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm font-montserrat">
      <div className="bg-gray-col p-6 rounded-lg shadow-lg max-w-sm w-full text-center select-none">
        <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
        <p className="mb-4">This website is stll on <span className='font-semibold'>the development process</span>. Perhaps, there're some features that're  <span className=' font-semibold'>not available</span> right now</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white-col px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default WarningModal;
