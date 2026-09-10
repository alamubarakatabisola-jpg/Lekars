import React from 'react';

export const WaveformBg: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden opacity-20 ${className}`}>
      <svg
        className="w-full h-full text-blue-500"
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 200 C 150 120, 300 280, 450 200 C 600 120, 750 280, 900 200 C 1050 120, 1200 280, 1350 200"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M0 220 C 200 300, 400 100, 600 220 C 800 340, 1000 100, 1200 220"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M0 180 C 100 100, 350 300, 650 150 C 950 300, 1100 100, 1200 180"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};
