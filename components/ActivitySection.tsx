
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ACTIVITIES } from '../constants';

const ActivitySection: React.FC = () => {
  const location = useLocation();
  const isPage = location.pathname === '/activities';
  const displayedActivities = isPage ? ACTIVITIES : ACTIVITIES.slice(0, 4);

  return (
    <section className={`px-6 relative z-10 ${isPage ? 'pt-36 pb-20 min-h-screen' : 'py-20 bg-white/40 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-2 font-bubble">Fun & Activities 🧸</h2>
            <p className="text-xl text-gray-700">Explore the wonders of our playground and studios!</p>
          </div>
          {!isPage && (
            <Link to="/activities">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all active:scale-95">
                View All Games 🎮
              </button>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedActivities.map((activity) => {
            const Content = (
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border-8 border-white group h-full">
                <div className="relative aspect-square">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${activity.id === '5' ? 'object-center' : 'object-top'}`}
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                    {activity.category}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 font-bubble">{activity.title}</h3>
                  <span className={`mt-4 block font-bold ${activity.link ? 'text-purple-500 hover:underline' : 'text-gray-400'}`}>
                    {activity.link ? 'Let\'s Play! →' : 'Coming Soon! 🌟'}
                  </span>
                </div>
              </div>
            );

            return activity.link ? (
              <Link key={activity.id} to={activity.link}>
                {Content}
              </Link>
            ) : (
              <div key={activity.id}>{Content}</div>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-[3rem] p-8 md:p-12 border-4 border-white shadow-xl relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full opacity-20 -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 -ml-32 -mb-32 blur-3xl"></div>

            <div className="text-center mb-12 relative z-10">
              <span className="inline-block py-1 px-4 rounded-full bg-white border border-purple-100 text-purple-600 font-bold mb-4 shadow-sm text-sm tracking-wide uppercase">
                Explore Our Space 🚀
              </span>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 font-bubble">
                Activity Room Highlights
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {[
                { title: 'Dramatic Play', icon: '🎭', color: 'bg-red-100', desc: 'Area for pretend plays' },
                { title: 'Sand Play', icon: '🏖️', color: 'bg-yellow-100', desc: 'Tactile sensory fun' },
                { title: 'Creative Station', icon: '🎨', color: 'bg-blue-100', desc: 'Art & imagination' },
                { title: 'Water Play', icon: '💦', color: 'bg-cyan-100', desc: 'Splash & learn' },
                { title: 'Ball Pool', icon: '🥎', color: 'bg-green-100', desc: 'Jump & dive in' },
                { title: 'Block Play', icon: '🧱', color: 'bg-orange-100', desc: 'Build & construct' },
                { title: 'Educational Toys', icon: '🧩', color: 'bg-purple-100', desc: 'Brain boosting fun' },
                { title: 'Soft Gym', icon: '🤸', color: 'bg-pink-100', desc: 'Safe physical play' },
              ].map((item, index) => (
                <div key={index} className={`${item.color} p-6 rounded-3xl text-center border-4 border-white/50 shadow-md hover:transform hover:-translate-y-2 transition-all duration-300`}>
                  <div className="text-4xl md:text-5xl mb-3 drop-shadow-sm">{item.icon}</div>
                  <h4 className="font-bold text-gray-800 text-lg md:text-xl leading-tight mb-1">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
