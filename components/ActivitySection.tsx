
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ACTIVITIES } from '../constants';

const ActivitySection: React.FC = () => {
  const location = useLocation();
  const isPage = location.pathname === '/activities';

  return (
    <section className={`px-6 relative z-10 ${isPage ? 'pt-36 pb-20 min-h-screen' : 'py-20 bg-white/40 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-2 font-bubble">Fun & Activities 🧸</h2>
            <p className="text-xl text-gray-700">Explore the wonders of our playground and studios!</p>
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all active:scale-95">
            View All Games 🎮
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACTIVITIES.map((activity) => {
            const Content = (
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border-8 border-white group h-full">
                <div className="relative h-60">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                    {activity.category}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 font-bubble">{activity.title}</h3>
                  <span className="mt-4 block text-purple-500 font-bold hover:underline">
                    Let's Play! →
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
      </div>
    </section>
  );
};

export default ActivitySection;
