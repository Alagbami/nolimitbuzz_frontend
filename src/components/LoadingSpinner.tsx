import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    // Container to center the loading message and apply background gradient
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-lg text-white font-semibold">
      {/* Text element displaying the loading message with a pulsing animation */}
      <span className="animate-pulse">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;

