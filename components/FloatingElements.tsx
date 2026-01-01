
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Clouds */}
      <div className="absolute top-10 left-[10%] opacity-60 floating" style={{ animationDelay: '0s' }}>
        <span className="text-6xl text-white">☁️</span>
      </div>
      <div className="absolute top-40 right-[15%] opacity-50 floating" style={{ animationDelay: '1.5s' }}>
        <span className="text-7xl text-white">☁️</span>
      </div>
      <div className="absolute bottom-20 left-[5%] opacity-40 floating" style={{ animationDelay: '0.8s' }}>
        <span className="text-5xl text-white">☁️</span>
      </div>

      {/* Stars */}
      <div className="absolute top-1/4 left-1/3 text-yellow-300 animate-pulse text-2xl">⭐</div>
      <div className="absolute top-1/2 right-1/4 text-yellow-300 animate-pulse text-3xl">🌟</div>
      <div className="absolute bottom-1/4 left-1/2 text-yellow-300 animate-pulse text-2xl">✨</div>
      
      {/* Balloons */}
      <div className="absolute bottom-[-100px] left-[20%] animate-bounce text-6xl" style={{ animationDuration: '4s' }}>🎈</div>
      <div className="absolute bottom-[-100px] right-[25%] animate-bounce text-6xl" style={{ animationDuration: '6s', animationDelay: '1s' }}>🎈</div>
    </div>
  );
};

export default FloatingElements;
