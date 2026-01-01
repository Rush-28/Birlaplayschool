
import React from 'react';
import { Link } from 'react-router-dom';
import MascotMessage from './MascotMessage';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-10 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
      <div className="bg-white/30 backdrop-blur-sm p-8 rounded-[4rem] border-4 border-white/50 shadow-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-pink-600 mb-6 leading-tight drop-shadow-sm">
          Welcome to Our <br />
          <span className="text-yellow-500">Happy Learning</span> World!
        </h1>
        <p className="text-xl md:text-2xl text-blue-800 font-medium max-w-2xl mx-auto mb-8">
          Where every child's imagination takes flight on the wings of friendship and wonder! 🦋
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-10 py-4 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95 font-bubble">
            Explore Magic ✨
          </button>
          <Link to="/enroll" className="bg-white hover:bg-gray-50 text-pink-500 text-xl px-10 py-4 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95 border-2 border-pink-200 font-bubble">
            Enrol Now 🍎
          </Link>
        </div>
      </div>

      <MascotMessage />

      <div className="mt-12 flex justify-center gap-8 md:gap-16">
        <div className="text-center">
          <div className="text-5xl md:text-6xl animate-bounce">🐘</div>
          <p className="font-bold text-gray-700 mt-2">Kindness</p>
        </div>
        <div className="text-center">
          <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🦒</div>
          <p className="font-bold text-gray-700 mt-2">Growth</p>
        </div>
        <div className="text-center">
          <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.4s' }}>🐼</div>
          <p className="font-bold text-gray-700 mt-2">Creativity</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
