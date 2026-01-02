
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';

const YogaPage: React.FC = () => {
    const [selectedPose, setSelectedPose] = useState<any>(null);

    const handleCelebration = () => {
        // Fire confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(() => setSelectedPose(null), 100);
    };

    const poses = [
        {
            id: 1,
            title: 'Tree Pose',
            icon: '🌳',
            color: 'bg-green-100',
            difficulty: 'Easy',
            benefits: 'Balance & Focus',
            steps: [
                'Stand tall with feet together.',
                'Lift one foot and place it on your other leg.',
                'Bring your hands together at your heart.',
                'Grow your branches by lifting hands up!',
                'Breathe deeply like a tree in the wind.'
            ]
        },
        {
            id: 2,
            title: 'Cat-Cow',
            icon: '🐈',
            color: 'bg-orange-100',
            difficulty: 'Easy',
            benefits: 'Spine Flexibility',
            steps: [
                'Start on your hands and knees.',
                'Inhale and look up, dropping your belly (Cow).',
                'Exhale and round your back like a scary cat!',
                'Meow and Moo as you move!',
                'Repeat 5 times.'
            ]
        },
        {
            id: 3,
            title: 'Butterfly',
            icon: '🦋',
            color: 'bg-pink-100',
            difficulty: 'Easy',
            benefits: 'Relaxation',
            steps: [
                'Sit down and bring your feet together.',
                'Hold your feet with your hands.',
                'Gently flap your knees like butterfly wings.',
                'Fly to a magical garden in your mind!',
                'Sit tall and smile.'
            ]
        },
        {
            id: 4,
            title: 'Cobra',
            icon: '🐍',
            color: 'bg-yellow-100',
            difficulty: 'Medium',
            benefits: 'Strong Back',
            steps: [
                'Lie on your tummy.',
                'Place hands under your shoulders.',
                'Lift your chest up like a snake.',
                'Hiss gently: Ssssss!',
                'Lower back down slowly.'
            ]
        },
        {
            id: 5,
            title: 'Downward Dog',
            icon: '🐕',
            color: 'bg-blue-100',
            difficulty: 'Medium',
            benefits: 'Energy',
            steps: [
                'Start on hands and knees.',
                'Lift your hips high to the sky.',
                'Make an upside-down V shape.',
                'Pedal your feet like exploring doggie paws.',
                'Wag your imaginary tail!'
            ]
        },
        {
            id: 6,
            title: 'Lion Pose',
            icon: '🦁',
            color: 'bg-red-100',
            difficulty: 'Fun',
            benefits: 'Stress Relief',
            steps: [
                'Sit on your heels.',
                'Place hands on knees, fingers spread wide.',
                'Take a deep breath in.',
                'Stick out your tongue and ROAR!',
                'Feel brave like a lion.'
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
                        <button className="bg-white hover:bg-green-50 text-green-600 font-bold py-2 px-6 rounded-full shadow-md border-2 border-green-100 transition-all flex items-center gap-2">
                            ⬅ Back
                        </button>
                    </Link>
                </div>
                {/* Mobile Back Button */}
                <div className="md:hidden mb-6 flex justify-start">
                    <Link to="/activities">
                        <button className="bg-white hover:bg-green-50 text-green-600 font-bold py-2 px-6 rounded-full shadow-md border-2 border-green-100 transition-all flex items-center gap-2">
                            ⬅ Back
                        </button>
                    </Link>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-green-500 mb-4 font-bubble animate-bounce">
                    Little Yogis 🧘
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Stretch, breathe, and play! Let's move our bodies with fun animal poses.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
                {poses.map((pose) => (
                    <div
                        key={pose.id}
                        className={`${pose.color} rounded-[2rem] p-8 border-4 border-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer relative overflow-hidden group`}
                        onClick={() => setSelectedPose(pose)}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-70 font-bold text-gray-500 text-sm">
                            {pose.difficulty}
                        </div>
                        <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            {pose.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 font-bubble">{pose.title}</h3>
                        <div className="text-sm font-bold text-gray-600 mb-4">Benefit: {pose.benefits}</div>
                        <div className="mt-2 bg-white/50 backdrop-blur-sm rounded-xl py-2 px-4 inline-block text-gray-700 font-bold text-sm">
                            Start Pose! 🧘
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPose && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedPose(null)}
                >
                    <div
                        className="bg-white rounded-[3rem] p-8 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl border-[6px] border-green-300 animate-slide-up custom-scrollbar pr-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-14 h-14 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center text-red-500 text-2xl font-bold transition-all shadow-md z-50 border-2 border-red-200"
                            onClick={() => setSelectedPose(null)}
                        >
                            ✕
                        </button>

                        <div className="text-center mb-8 pt-4">
                            <div className="text-7xl mb-4 animate-bounce hover:scale-110 transition-transform cursor-default">{selectedPose.icon}</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 font-bubble mb-3">{selectedPose.title}</h2>
                            <span className="inline-block px-5 py-2 bg-green-100 text-green-700 rounded-full text-sm md:text-base font-bold shadow-sm">
                                {selectedPose.benefits}
                            </span>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl">⚡</span>
                                <h3 className="text-2xl font-bold text-green-600">How to do it:</h3>
                            </div>

                            <ol className="list-none space-y-4">
                                {selectedPose.steps.map((step: string, index: number) => (
                                    <li key={index} className="flex items-start gap-4 p-4 bg-green-50/50 rounded-2xl hover:bg-green-50 transition-colors border border-green-100">
                                        <span className="flex-shrink-0 w-10 h-10 bg-green-400 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md transform -rotate-6">
                                            {index + 1}
                                        </span>
                                        <p className="text-gray-700 font-medium text-lg leading-snug pt-1">{step}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="mt-10 text-center pb-4">
                            <button
                                className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 font-bubble border-4 border-green-200"
                                onClick={handleCelebration}
                            >
                                Namaste! 🙏
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default YogaPage;
