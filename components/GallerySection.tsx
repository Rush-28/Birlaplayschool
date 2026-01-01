
import React from 'react';
import { useLocation } from 'react-router-dom';
import { GALLERY } from '../constants';

const GallerySection: React.FC = () => {
  const location = useLocation();
  const isPage = location.pathname === '/gallery';

  return (
    <section className={`px-6 relative z-10 ${isPage ? 'pt-36 pb-20 min-h-screen' : 'py-20'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4 font-bubble">Our Happy Moments 📸</h2>
          <p className="text-xl text-gray-600">Snapshots of growth, laughter, and discovery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {GALLERY.map((item, index) => (
            <div
              key={item.id}
              className={`relative bg-white p-4 shadow-2xl transition-all transform hover:scale-105 hover:z-20 cursor-pointer ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'
                }`}
            >
              {/* Sticker tape look */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-pink-100/80 backdrop-blur-sm -rotate-1 shadow-sm border border-white/50"></div>

              <div className="overflow-hidden bg-gray-100 aspect-square">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover grayscale-0 hover:grayscale-[0.2] transition-all"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-bubble text-pink-500 text-lg">✨ Sparkles ✨</p>
              </div>

              {/* Corner sparkles */}
              <div className="absolute -bottom-2 -right-2 text-2xl">💖</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
