
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';

const CraftingPage: React.FC = () => {
    const [selectedCraft, setSelectedCraft] = useState<any>(null);

    const handleCelebration = () => {
        // Fire a single, big confetti burst
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Close modal shortly after
        setTimeout(() => setSelectedCraft(null), 100);
    };

    const crafts = [
        {
            id: 1,
            title: 'Paper Airplane',
            icon: '✈️',
            color: 'bg-blue-100',
            difficulty: 'Easy',
            steps: [
                'Take a rectangular piece of paper.',
                'Fold it in half lengthwise.',
                'Fold the top corners down to the center line.',
                'Fold the angled edges down to the center line again.',
                'Fold in half along the original center line.',
                'Fold the wings down.',
                'Ready to fly!'
            ]
        },
        {
            id: 2,
            title: 'Origami Dog',
            icon: '🐶',
            color: 'bg-orange-100',
            difficulty: 'Easy',
            steps: [
                'Start with a square piece of paper.',
                'Fold it in half diagonally to make a triangle.',
                'Fold the top two corners down to make ears.',
                'Fold the bottom corner up slightly for the nose.',
                'Draw eyes and a nose with a marker!',
                'Woof woof!'
            ]
        },
        {
            id: 3,
            title: 'Paper Boat',
            icon: '⛵',
            color: 'bg-yellow-100',
            difficulty: 'Medium',
            steps: [
                'Fold a rectangular paper in half.',
                'Fold the top corners to the center.',
                'Fold the bottom strips up on both sides.',
                'Pull the sides out and flatten into a square.',
                'Fold the bottom points up to form a triangle.',
                'Pull the sides out again to pop it into a boat!',
                'Set sail!'
            ]
        },
        {
            id: 4,
            title: 'Butterfly',
            icon: '🦋',
            color: 'bg-pink-100',
            difficulty: 'Easy',
            steps: [
                'Cut a square paper.',
                'Fold accordion style (back and forth).',
                'Pinch the center and tie with a pipe cleaner.',
                'Fan out the wings.',
                'Curl the pipe cleaner ends for antennae.',
                'Beautiful butterfly!'
            ]
        },
        {
            id: 5,
            title: 'Paper Flower',
            icon: '🌸',
            color: 'bg-red-100',
            difficulty: 'Medium',
            steps: [
                'Cut several circles of different sizes.',
                'Stack them from largest to smallest.',
                'Glue them together at the center.',
                'Add a button or bead in the middle.',
                'Add a green stick for a stem.',
                'A lovely bloom!'
            ]
        },
        {
            id: 6,
            title: 'Paper Fan',
            icon: '🪭',
            color: 'bg-purple-100',
            difficulty: 'Super Easy',
            steps: [
                'Take a long strip of paper.',
                'Decorate it with crayons.',
                'Fold it back and forth like an accordion.',
                'Pinch one end and tape it.',
                'Spread the other end.',
                'Cool breeze!'
            ]
        }
    ];

    React.useEffect(() => {
        if (selectedCraft) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCraft]);

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
                        <button className="bg-white hover:bg-pink-50 text-pink-500 font-bold py-2 px-6 rounded-full shadow-md border-2 border-pink-100 transition-all flex items-center gap-2">
                            ⬅ Back
                        </button>
                    </Link>
                </div>
                {/* Mobile Back Button */}
                <div className="md:hidden mb-6 flex justify-start">
                    <Link to="/activities">
                        <button className="bg-white hover:bg-pink-50 text-pink-500 font-bold py-2 px-6 rounded-full shadow-md border-2 border-pink-100 transition-all flex items-center gap-2">
                            ⬅ Back
                        </button>
                    </Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-pink-500 mb-4 font-bubble animate-bounce">
                    Creative Crafting ✂️
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Grab some paper, safety scissors, and glue! Let's make something amazing together.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
                {crafts.map((craft) => (
                    <div
                        key={craft.id}
                        className={`${craft.color} rounded-[2rem] p-8 border-4 border-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer relative overflow-hidden group`}
                        onClick={() => setSelectedCraft(craft)}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 font-bold text-gray-500 text-sm">
                            {craft.difficulty}
                        </div>
                        <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            {craft.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 font-bubble">{craft.title}</h3>
                        <div className="mt-4 bg-white/50 backdrop-blur-sm rounded-xl py-2 px-4 inline-block text-gray-700 font-bold text-sm">
                            Click to Make! 🔨
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Backdrop and Modal */}
            {selectedCraft && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedCraft(null)}
                >
                    {/* Modal Content */}
                    <div
                        className="bg-white rounded-[3rem] p-8 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl border-[6px] border-yellow-300 animate-slide-up custom-scrollbar pr-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Prominent Close Button */}
                        <button
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-14 h-14 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center text-red-500 text-2xl font-bold transition-all shadow-md z-50 border-2 border-red-200"
                            onClick={() => setSelectedCraft(null)}
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        <div className="text-center mb-8 pt-4">
                            <div className="text-7xl mb-4 animate-bounce hover:scale-110 transition-transform cursor-default">{selectedCraft.icon}</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 font-bubble mb-3">{selectedCraft.title}</h2>
                            <span className="inline-block px-5 py-2 bg-green-100 text-green-700 rounded-full text-sm md:text-base font-bold shadow-sm">
                                Difficulty: {selectedCraft.difficulty}
                            </span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl">📝</span>
                                <h3 className="text-2xl font-bold text-pink-500">Steps to Create:</h3>
                            </div>

                            <ol className="list-none space-y-4">
                                {selectedCraft.steps.map((step: string, index: number) => (
                                    <li key={index} className="flex items-start gap-4 p-4 bg-blue-50/50 rounded-2xl hover:bg-blue-50 transition-colors border border-blue-100">
                                        <span className="flex-shrink-0 w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md transform -rotate-6">
                                            {index + 1}
                                        </span>
                                        <p className="text-gray-700 font-medium text-lg leading-snug pt-1">{step}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="mt-10 text-center pb-4">
                            <button
                                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 font-bubble border-4 border-pink-200"
                                onClick={handleCelebration}
                            >
                                I Did It! 🎉
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default CraftingPage;
