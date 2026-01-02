
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';

const PuzzlesPage: React.FC = () => {
    const [selectedPuzzle, setSelectedPuzzle] = useState<any>(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleCelebration = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(() => {
            setSelectedPuzzle(null);
            setShowAnswer(false);
        }, 100);
    };

    const openPuzzle = (puzzle: any) => {
        setSelectedPuzzle(puzzle);
        setShowAnswer(false);
    }

    const puzzles = [
        {
            id: 1,
            title: 'Color Match',
            icon: '🎨',
            color: 'bg-indigo-100',
            difficulty: 'Easy',
            question: 'I have keys but no locks. I have a space but no room. You can enter, but never go outside. What am I?',
            answer: 'A Keyboard! 🎹',
            hint: 'You use me to type...'
        },
        {
            id: 2,
            title: 'Animal Sound',
            icon: '🦁',
            color: 'bg-yellow-100',
            difficulty: 'Easy',
            question: 'I have a mane but I am not a horse. I roar but I am not a car. Who am I?',
            answer: 'A Lion! 🦁',
            hint: 'King of the jungle.'
        },
        {
            id: 3,
            title: 'Counting Fun',
            icon: '🔢',
            color: 'bg-blue-100',
            difficulty: 'Medium',
            question: 'If you have 3 apples and you take away 2, how many do you have?',
            answer: 'You have 2 apples! (You took them!) 🍎🍎',
            hint: 'Think about what you are holding.'
        },
        {
            id: 4,
            title: 'Sky Mystery',
            icon: '☀️',
            color: 'bg-orange-100',
            difficulty: 'Easy',
            question: 'I come out at night but hide in the day. I change my shape but always stay round. What am I?',
            answer: 'The Moon! 🌙',
            hint: 'Look up at night.'
        },
        {
            id: 5,
            title: 'Shape Sorter',
            icon: '🔺',
            color: 'bg-red-100',
            difficulty: 'Medium',
            question: 'I have three sides and three corners. What shape am I?',
            answer: 'A Triangle! 📐',
            hint: 'Like a slice of pizza.'
        },
        {
            id: 6,
            title: 'Water Friend',
            icon: '🦆',
            color: 'bg-teal-100',
            difficulty: 'Easy',
            question: 'I can swim and fly. I say "Quack". Who am I?',
            answer: 'A Duck! 🦆',
            hint: 'I like ponds.'
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
                        <button className="bg-white hover:bg-pink-50 text-indigo-500 font-bold py-2 px-6 rounded-full shadow-md border-2 border-indigo-100 transition-all flex items-center gap-2">
                            ⬅ Back
                        </button>
                    </Link>
                </div>
                {/* Mobile Back Button */}
                <div className="md:hidden mb-6 flex justify-start">
                    <Link to="/activities">
                        <button className="bg-white hover:bg-pink-50 text-indigo-500 font-bold py-2 px-6 rounded-full shadow-md border-2 border-indigo-100 transition-all flex items-center gap-2">
                            ⬅ Back
                        </button>
                    </Link>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-indigo-500 mb-4 font-bubble animate-bounce">
                    Puzzle Master 🧩
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Tickle your brain with fun riddles and questions! accurate
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
                {puzzles.map((puzzle) => (
                    <div
                        key={puzzle.id}
                        className={`${puzzle.color} rounded-[2rem] p-8 border-4 border-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer relative overflow-hidden group`}
                        onClick={() => openPuzzle(puzzle)}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 font-bold text-gray-500 text-sm">
                            {puzzle.difficulty}
                        </div>
                        <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                            {puzzle.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 font-bubble">{puzzle.title}</h3>
                        <div className="mt-4 bg-white/50 backdrop-blur-sm rounded-xl py-2 px-4 inline-block text-gray-700 font-bold text-sm">
                            Solve Me! 🧠
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPuzzle && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
                    onClick={() => setSelectedPuzzle(null)}
                >
                    <div
                        className="bg-white rounded-[3rem] p-8 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl border-[6px] border-indigo-300 animate-slide-up custom-scrollbar pr-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-6 md:right-6 w-14 h-14 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center text-red-500 text-2xl font-bold transition-all shadow-md z-50 border-2 border-red-200"
                            onClick={() => setSelectedPuzzle(null)}
                        >
                            ✕
                        </button>

                        <div className="text-center mb-8 pt-4">
                            <div className="text-7xl mb-4 animate-bounce hover:scale-110 transition-transform cursor-default">{selectedPuzzle.icon}</div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 font-bubble mb-3">{selectedPuzzle.title}</h2>
                            <span className="inline-block px-5 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm md:text-base font-bold shadow-sm">
                                Level: {selectedPuzzle.difficulty}
                            </span>
                        </div>

                        <div className="space-y-8 text-center max-w-lg mx-auto">
                            <div className="bg-indigo-50 p-6 rounded-3xl border-2 border-indigo-100">
                                <p className="text-2xl text-gray-700 font-bold leading-relaxed">
                                    "{selectedPuzzle.question}"
                                </p>
                            </div>

                            {!showAnswer ? (
                                <div className="space-y-4">
                                    <p className="text-gray-500 italic text-sm">Need a hint? {selectedPuzzle.hint}</p>
                                    <button
                                        onClick={() => setShowAnswer(true)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform active:scale-95 transition-all text-xl"
                                    >
                                        Reveal Answer 👀
                                    </button>
                                </div>
                            ) : (
                                <div className="animate-fade-in">
                                    <div className="bg-green-100 p-6 rounded-3xl border-2 border-green-200 mb-6">
                                        <p className="text-3xl text-green-700 font-bold font-bubble">
                                            {selectedPuzzle.answer}
                                        </p>
                                    </div>
                                    <button
                                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 font-bubble border-4 border-indigo-200"
                                        onClick={handleCelebration}
                                    >
                                        I Knew It! 🎉
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default PuzzlesPage;
