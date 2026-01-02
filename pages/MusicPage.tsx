
import React from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import confetti from 'canvas-confetti';

const MusicPage: React.FC = () => {
    // Simple state to simulate "Music Playing" visual 
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FFC0CB', '#FFD700', '#00FFFF']
            });
        }
    };

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10 min-h-screen text-center">
            <div className="absolute top-24 left-6 hidden md:block z-50">
                <Link to="/activities">
                    <button className="bg-white hover:bg-purple-50 text-purple-600 font-bold py-2 px-6 rounded-full shadow-md border-2 border-purple-100 transition-all flex items-center gap-2">
                        ⬅ Back
                    </button>
                </Link>
            </div>
            <div className="md:hidden mb-6 flex justify-start">
                <Link to="/activities">
                    <button className="bg-white hover:bg-purple-50 text-purple-600 font-bold py-2 px-6 rounded-full shadow-md border-2 border-purple-100 transition-all flex items-center gap-2">
                        ⬅ Back
                    </button>
                </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-purple-600 mb-6 font-bubble animate-bounce">
                Musical Chairs 🎵
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Gather your friends, play the music, and walk around! When the music stops, find a seat!
            </p>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-[8px] border-purple-100 max-w-4xl mx-auto relative overflow-hidden">
                {/* Visual Music Note Animations */}
                {isPlaying && (
                    <>
                        <div className="absolute top-10 left-10 text-6xl animate-bounce text-pink-400 opacity-50">🎵</div>
                        <div className="absolute bottom-20 right-20 text-5xl animate-bounce delay-100 text-blue-400 opacity-50">🎶</div>
                        <div className="absolute top-1/2 left-1/4 text-4xl animate-ping delay-200 text-yellow-400 opacity-50">🎼</div>
                        <div className="absolute top-20 right-1/3 text-7xl animate-pulse delay-75 text-purple-300 opacity-30">🎵</div>
                    </>
                )}

                <div className="flex flex-col items-center justify-center gap-8 z-10 relative">
                    <div className={`w-64 h-64 rounded-full flex items-center justify-center border-8 border-purple-200 shadow-inner transition-all duration-500 ${isPlaying ? 'bg-purple-100 scale-110 animate-spin-slow' : 'bg-gray-100'}`}>
                        <span className="text-9xl filter drop-shadow-md">🪑</span>
                    </div>

                    <button
                        onClick={handlePlay}
                        className={`text-2xl px-12 py-6 rounded-full font-bold shadow-xl transition-all transform hover:scale-105 active:scale-95 border-b-8 ${isPlaying
                            ? 'bg-red-500 hover:bg-red-600 border-red-700 text-white'
                            : 'bg-green-500 hover:bg-green-600 border-green-700 text-white'
                            }`}
                    >
                        {isPlaying ? 'STOP MUSIC! 🛑' : 'PLAY MUSIC! ▶️'}
                    </button>

                    <div className="mt-8 text-left max-w-lg bg-yellow-50 p-8 rounded-3xl border-2 border-yellow-200">
                        <h3 className="text-2xl font-bold text-yellow-700 mb-4">How to Play:</h3>
                        <ol className="list-decimal pl-6 space-y-2 text-yellow-800 font-medium">
                            <li>Put chairs in a circle (one less than players).</li>
                            <li>Press <strong>PLAY</strong> and walk around the chairs.</li>
                            <li>Ask a friend to press <strong>STOP</strong> randomly!</li>
                            <li>Everyone sits down quickly!</li>
                            <li>If you don't find a chair, you are out!</li>
                            <li>Remove one chair and play again!</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicPage;
