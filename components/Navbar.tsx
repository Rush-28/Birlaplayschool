
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

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
      <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg p-2 flex items-center justify-between pointer-events-auto border-4 border-pink-50">
        <Link to="/" className="flex items-center gap-2 px-4 py-1 flex-shrink-0">
          <img src="/birla_logo.jpg" alt="Logo" className="h-12 w-auto object-contain" />
          <span className="text-xl font-bubble font-bold text-pink-500 hidden sm:inline">B. K Birla Play School</span>
        </Link>

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

        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            to="/login"
            className="bg-pink-400 hover:bg-pink-500 text-white px-4 md:px-6 py-2 rounded-full font-bold shadow-md transition-all active:scale-95 text-sm md:text-base"
          >
            Login 🔑
          </Link>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="xl:hidden mt-4 flex overflow-x-auto gap-2 pb-2 pointer-events-auto no-scrollbar">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex-shrink-0 px-4 py-3 bg-white rounded-full shadow-sm text-sm font-bold border-2 border-transparent transition-all ${location.pathname === item.path ? 'border-pink-300 bg-pink-50 scale-105 z-10' : ''
              }`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
