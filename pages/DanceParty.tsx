
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DanceParty: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen relative z-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className={`bg-white rounded-[3rem] p-10 shadow-2xl border-8 border-purple-200 text-center relative transition-colors duration-500 ${isPlaying ? 'bg-purple-900 border-purple-500' : ''}`}>

                    <Link to="/" className="absolute top-8 left-8 bg-pink-400 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-pink-500 transition-all z-20">
                        ← Back
                    </Link>

                    <h1 className={`text-5xl md:text-6xl font-bold mb-8 font-bubble mt-12 transition-colors ${isPlaying ? 'text-yellow-300 animate-pulse' : 'text-purple-500'}`}>
                        Dance Party! 🕺💃
                    </h1>

                    <div className="relative h-96 bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center mb-10 shadow-inner">
                        {/* Disco Ball */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2">
                            <div className={`text-6xl transition-all duration-1000 ${isPlaying ? 'animate-[spin_4s_linear_infinite] scale-150' : ''}`}>🪩</div>
                        </div>

                        {/* Floor */}
                        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent opacity-50"></div>

                        {/* Dancers */}
                        <div className="flex gap-8 items-end h-full pb-10">
                            {['🐻', '🦊', '🦁', '🐰'].map((dancer, i) => (
                                <div
                                    key={i}
                                    className={`text-8xl transition-transform duration-300 ${isPlaying ? 'animate-bounce' : ''}`}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    {dancer}
                                </div>
                            ))}
                        </div>

                        {/* Lights */}
                        {isPlaying && (
                            <>
                                <div className="absolute inset-0 bg-mix-blend-overlay animate-pulse bg-red-500/20"></div>
                            </>
                        )}
                    </div>

                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`px-12 py-4 rounded-full font-bold text-2xl shadow-xl transition-all hover:scale-105 ${isPlaying ? 'bg-red-500 text-white animate-pulse' : 'bg-green-500 text-white'}`}
                    >
                        {isPlaying ? 'Stop Music ⏹️' : 'Start Music ▶️'}
                    </button>

                    <p className={`mt-6 text-lg font-medium transition-colors ${isPlaying ? 'text-purple-200' : 'text-gray-500'}`}>
                        * Imagine the coolest song playing right now! *
                    </p>

                </div>
            </div>
        </div>
    );
};

export default DanceParty;
