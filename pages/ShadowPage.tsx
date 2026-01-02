
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';

const ShadowPage: React.FC = () => {
    const [selectedShadow, setSelectedShadow] = useState<any>(null);

    const handleCelebration = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(() => setSelectedShadow(null), 100);
    };

    const shadows = [
        {
            id: 1,
            title: 'Rabbit',
            icon: '🐰',
            color: 'bg-gray-100',
            difficulty: 'Easy',
            image: 'https://images.unsplash.com/photo-1590400958744-b0a331df464c?auto=format&fit=crop&q=80&w=500&h=500', // Placeholder or real shadow image if available
            steps: [
                'Make a fist with one hand.',
                'Stick up your pointer and middle finger like ears.',
                'Use your other hand to make the paws.',
                'Wiggle your fingers!',
                'Hop hop!'
            ]
        },
        {
            id: 2,
            title: 'Barking Dog',
            icon: '🐕',
            color: 'bg-orange-100',
            difficulty: 'Medium',
            image: '',
            steps: [
                'Flat hand, thumb up.',
                'Bend your pointer finger for the eye.',
                'Use your pinky as the moving mouth.',
                'Move your thumb as the ear.',
                'Woof Woof!'
            ]
        },
        {
            id: 3,
            title: 'Flying Bird',
            icon: '🦅',
            color: 'bg-blue-100',
            difficulty: 'Easy',
            image: '',
            steps: [
                'Cross your hands at the wrists.',
                'Hook your thumbs together.',
                'Flap your fingers like wings.',
                'Fly high in the sky!',
                'Tweet Tweet!'
            ]
        },
        {
            id: 4,
            title: 'Snail',
            icon: '🐌',
            color: 'bg-green-100',
            difficulty: 'Hard',
            image: '',
            steps: [
                'Make a fist with one hand (shell).',
                'Put your other hand on top with V-fingers (eyes).',
                'Move slowly across the wall.',
                'Slimey slide!',
                'Blooop!'
            ]
        }
    ];

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10 min-h-screen">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 12px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #fff0f5;
                    border-radius: 20px;
                    margin: 20px 0;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #ffb6c1;
                    border-radius: 20px;
                    border: 3px solid #fff0f5;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #ff69b4;
                }
            `}</style>
            <div className="text-center mb-12 relative">
                <div className="absolute top-0 left-0 hidden md:block z-50">
                    <Link to="/activities">
                        <button className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-6 rounded-full shadow-md border-2 border-gray-200 transition-all flex items-center gap-2">
                            ⬅ Back
                        </button>
                    </Link>
                </div>
                {/* Mobile Back Button */}
                <div className="md:hidden mb-6 flex justify-start">
                    <Link to="/activities">
                        <button className="bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-6 rounded-full shadow-md border-2 border-gray-200 transition-all flex items-center gap-2">
                            ⬅ Back
                        </button>
                    </Link>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-4 font-bubble animate-bounce">
                    Shadow Puppets 🔦
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Turn off the lights, grab a flashlight, and make magic with your hands!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 relative z-20 max-w-4xl mx-auto">
                {shadows.map((shadow) => (
                    <div
                        key={shadow.id}
                        className={`${shadow.color} rounded-[2rem] p-8 border-4 border-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer relative overflow-hidden group`}
                        onClick={() => setSelectedShadow(shadow)}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 font-bold text-gray-500 text-sm">
                            {shadow.difficulty}
                        </div>
                        <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300 text-center">
                            {shadow.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2 font-bubble text-center">{shadow.title}</h3>
                        <div className="mt-4 bg-white/50 backdrop-blur-sm rounded-xl py-2 px-4 block text-center text-gray-700 font-bold text-sm mx-auto w-max">
                            Show me how! ✋
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedShadow && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedShadow(null)}
                >
                    <div
                        className="bg-white rounded-[3rem] p-8 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl border-[6px] border-gray-300 animate-slide-up custom-scrollbar pr-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-14 h-14 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center text-red-500 text-2xl font-bold transition-all shadow-md z-50 border-2 border-red-200"
                            onClick={() => setSelectedShadow(null)}
                        >
                            ✕
                        </button>

                        <div className="text-center mb-8 pt-4">
                            <div className="text-8xl mb-4 animate-pulse shadow-xl inline-block bg-black/10 rounded-full p-4 grayscale blur-[2px]">{selectedShadow.icon}</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 font-bubble mb-3">{selectedShadow.title}</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-4 justify-center">
                                <span className="text-2xl">🔦</span>
                                <h3 className="text-2xl font-bold text-gray-600">Hand Positions:</h3>
                            </div>

                            <ol className="list-none space-y-4">
                                {selectedShadow.steps.map((step: string, index: number) => (
                                    <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-200">
                                        <span className="flex-shrink-0 w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md transform -rotate-6">
                                            {index + 1}
                                        </span>
                                        <p className="text-gray-700 font-medium text-lg leading-snug pt-1">{step}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="mt-10 text-center pb-4">
                            <button
                                className="bg-gradient-to-r from-gray-700 to-black hover:from-gray-800 hover:to-black text-white text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 font-bubble border-4 border-gray-400"
                                onClick={handleCelebration}
                            >
                                I Made a Shadow! 🦇
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default ShadowPage;
