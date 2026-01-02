
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/', icon: '🏠', color: 'hover:bg-pink-100' },
    { label: 'About', path: '/about', icon: '👶', color: 'hover:bg-yellow-100' },
    { label: 'Learning', path: '/curriculum', icon: '📚', color: 'hover:bg-blue-100' },
    { label: 'Activities', path: '/activities', icon: '🧸', color: 'hover:bg-green-100' },
    { label: 'Gallery', path: '/gallery', icon: '🖼️', color: 'hover:bg-purple-100' },
    { label: 'Parents', path: '/parents', icon: '👨‍👩‍👧', color: 'hover:bg-orange-100' },
  ];


  return (
    <nav className="sticky top-4 z-50 mx-auto max-w-7xl px-4 pointer-events-none">
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg p-2 pl-3 flex items-center justify-between pointer-events-auto border-4 border-pink-50 relative">
        <Link to="/" className="flex items-center gap-1 flex-shrink-0">
          <img src="/birla_logo.jpg" alt="Logo" className="h-10 w-auto object-contain md:h-12" />
          <span className="text-xl sm:text-2xl font-bubble font-bold text-pink-500 leading-none ml-3 tracking-tighter">B. K Birla Play School</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 font-medium whitespace-nowrap ${item.color} ${location.pathname === item.path ? 'bg-pink-50 text-pink-600 shadow-sm' : 'text-gray-600'
                }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-xs sm:gap-2 flex-shrink-0">
          <Link
            to="/login"
            className="bg-pink-400 hover:bg-pink-500 text-white px-1.5 py-1.5 md:px-6 md:py-2 rounded-full font-bold shadow-md transition-all active:scale-95 md:text-base whitespace-nowrap flex items-center gap-1 text-[0.7rem] md:text-sm"
          >
            <span>Login</span> <span className="">🔑</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border-4 border-pink-50 p-4 pointer-events-auto flex flex-col gap-2 animate-fade-in-down">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-xl transition-all flex items-center gap-3 font-bold text-lg ${location.pathname === item.path
                ? 'bg-pink-50 text-pink-600 border-2 border-pink-100'
                : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <span className="text-2xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
