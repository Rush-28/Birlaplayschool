
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CURRICULUM } from '../constants';

const CurriculumSection: React.FC = () => {
  const location = useLocation();
  const isPage = location.pathname === '/curriculum';

  return (
    <section className={`px-6 relative z-10 ${isPage ? 'pt-36 pb-20 min-h-screen' : 'py-20'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 font-bubble">The CREATE Learning Framework 🎓</h2>
          <div className="w-24 h-2 bg-pink-300 mx-auto rounded-full mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-3 md:gap-6 max-w-5xl mx-auto">
            {[
              { letter: 'C', word: 'Connectivity', color: 'bg-red-100 text-red-600 border-red-200' },
              { letter: 'R', word: 'Responsibility', color: 'bg-orange-100 text-orange-600 border-orange-200' },
              { letter: 'E', word: 'Engagement', color: 'bg-yellow-100 text-yellow-600 border-yellow-200' },
              { letter: 'A', word: 'Authentic', color: 'bg-green-100 text-green-600 border-green-200' },
              { letter: 'T', word: 'Transformation', color: 'bg-blue-100 text-blue-600 border-blue-200' },
              { letter: 'E', word: 'Evaluation', color: 'bg-purple-100 text-purple-600 border-purple-200' },
            ].map((item) => (
              <div key={item.letter} className={`flex flex-col items-center p-3 md:p-4 rounded-2xl border-2 ${item.color} shadow-sm hover:scale-110 transition-transform cursor-default`}>
                <span className="text-2xl md:text-3xl font-black font-bubble mb-1">{item.letter}</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-wide">{item.word}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Building a foundation of academic trust through our proprietary curriculum, meticulously mapped to <span className="text-blue-600 font-bold">NCERT</span> and <span className="text-pink-500 font-bold">NEP 2020</span> guidelines.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold shadow-sm">
              📘 Mapped to NCERT
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-sm font-bold shadow-sm">
              📜 NEP 2020 Compliant
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {CURRICULUM.map((item) => (
            <div
              key={item.id}
              className={`${item.color} p-8 rounded-[2.5rem] shadow-lg border-4 border-white transition-all transform hover:-translate-y-2 hover:rotate-2 cursor-pointer group`}
            >
              <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-bubble">{item.title}</h3>
              <p className="text-gray-600 font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
