
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto relative z-10">
      <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border-8 border-yellow-100 relative overflow-hidden">
        {/* Storybook bookmark */}
        <div className="absolute top-0 right-8 md:right-16 w-8 h-12 md:w-10 md:h-14 bg-pink-400 rounded-b-lg shadow-md flex items-end justify-center pb-1.5 transition-all">
          <span className="text-white text-sm md:text-lg">🏷️</span>
        </div>

        <h1 className="flex items-center justify-center gap-3 text-3xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-10 text-center font-bubble whitespace-nowrap">
          Once Upon a Learning Adventure... <span className="text-4xl md:text-6xl">📖</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
            <p>
              Welcome to <strong>B. K Birla Play School</strong>, a place where curiosity is our compass and laughter is our favorite language!
            </p>
            <p>
              Our journey started with a simple dream: to create a space that feels like a big, warm hug for every child. We believe that
              little hands do big things when they're given the freedom to explore.
            </p>
            <p>
              With our team of "Adventure Guides" (the teachers!) and a world full of blocks, paint, and music, we make every day
              a masterpiece of discovery.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600&h=800"
              alt="Teachers and Kids"
              className="rounded-[2.5rem] shadow-xl border-4 border-white transform -rotate-2 w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-300 p-6 rounded-3xl shadow-lg border-4 border-white rotate-3">
              <p className="font-bold text-gray-800 text-center">Our Caring <br /> Family 🏠</p>
            </div>
          </div>
        </div>


        <div className="mt-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2.5rem] p-6 md:p-8 border-2 border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-50 -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-100 rounded-full opacity-50 -ml-24 -mb-24 blur-3xl"></div>

            <div className="text-center mb-6 relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-green-100 text-green-600 font-bold mb-3 shadow-none text-xs">
                Safety First, Always 🛡️
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 font-bubble">
                Uncompromising Safety & Hygiene
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto leading-snug">
                We know that for you, safety is number one. That's why we've built a fortress of care around our little explorers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
              <div className="bg-white p-4 rounded-2xl shadow-sm border-b-2 border-green-400 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3">
                  💳
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">RFID Smart Access</h3>
                <p className="text-gray-500 text-xs">
                  Advanced digital check-in system ensuring only authorized family members can pick up your little one.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border-b-2 border-blue-400 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3">
                  📹
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Live CCTV Monitoring</h3>
                <p className="text-gray-500 text-xs">
                  Comprehensive camera coverage across all classrooms and play zones, monitored constantly.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border-b-2 border-yellow-400 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="bg-yellow-100 w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3">
                  ⛑️
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Certified Safety Gear</h3>
                <p className="text-gray-500 text-xs">
                  All play equipment is safety-tested annually and certified to meet the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-orange-50 p-8 rounded-3xl text-center border-2 border-orange-100 hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">🥗</div>
            <h3 className="text-2xl font-bold text-orange-500 mb-2 font-bubble">Healthy Bites</h3>
            <p className="text-gray-600">Nutritious, balanced meals to fuel growing bodies and minds.</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-3xl text-center border-2 border-blue-100 hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-blue-500 mb-2 font-bubble">Smart Hearts</h3>
            <p className="text-gray-600">Fostering emotional intelligence alongside creative thinking.</p>
          </div>
          <div className="bg-pink-50 p-8 rounded-3xl text-center border-2 border-pink-100 hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">🎈</div>
            <h3 className="text-2xl font-bold text-pink-500 mb-2 font-bubble">Play First</h3>
            <p className="text-gray-600">Because playing is the most serious form of research!</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default AboutPage;
