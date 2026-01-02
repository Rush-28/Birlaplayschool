
import React from 'react';
import { Link } from 'react-router-dom';

const StoryAdventure: React.FC = () => {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-[3rem] p-10 shadow-2xl border-8 border-yellow-200 text-center relative overflow-hidden">

                    <Link to="/activities" className="absolute top-8 left-8 bg-pink-400 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-pink-500 transition-all">
                        ← Back
                    </Link>

                    <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8 font-bubble mt-12">
                        Story Adventure 🏰
                    </h1>

                    <div className="bg-orange-50 p-8 rounded-3xl border-4 border-orange-100 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-bubble">The Brave Little Bunny</h2>
                        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                            Once upon a time, there was a bunny who wanted to touch the moon.
                            He hopped higher and higher, past the butterflies, past the birds...
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-green-400 text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-transform">
                                Read More 📖
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {['🐉', '🤴', '🧚'].map((emoji, i) => (
                            <div key={i} className="text-8xl animate-bounce hover:scale-125 transition-transform cursor-pointer" style={{ animationDelay: `${i * 0.2}s` }}>
                                {emoji}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StoryAdventure;
