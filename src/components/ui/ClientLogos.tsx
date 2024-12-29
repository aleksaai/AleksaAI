import React from 'react';

export function ClientLogos() {
  return (
    <div className="relative mt-4 lg:mt-12"> {/* Reduced top margin on mobile */}
      {/* Desktop version with fade effect */}
      <div className="hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
        <div className="relative z-0 flex items-center justify-center gap-12 py-8 px-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          <img src="https://i.postimg.cc/QCNRgB1h/5.png" alt="Client Logo" className="h-12 object-contain" />
          <img src="https://i.postimg.cc/gjM1gYHR/6.png" alt="Client Logo" className="h-12 object-contain" />
          <img src="https://i.postimg.cc/hPjkfdK0/7.png" alt="Client Logo" className="h-12 object-contain" />
          <img src="https://i.postimg.cc/qM59nvRH/8.png" alt="Client Logo" className="h-12 object-contain" />
        </div>
      </div>

      {/* Mobile version - smaller and without fade effect */}
      <div className="lg:hidden">
        <div className="flex items-center justify-center gap-4 py-2"> {/* Reduced gap and padding */}
          <img src="https://i.postimg.cc/QCNRgB1h/5.png" alt="Client Logo" className="h-6 object-contain" /> {/* Smaller height */}
          <img src="https://i.postimg.cc/gjM1gYHR/6.png" alt="Client Logo" className="h-6 object-contain" />
          <img src="https://i.postimg.cc/hPjkfdK0/7.png" alt="Client Logo" className="h-6 object-contain" />
          <img src="https://i.postimg.cc/qM59nvRH/8.png" alt="Client Logo" className="h-6 object-contain" />
        </div>
      </div>
    </div>
  );
}