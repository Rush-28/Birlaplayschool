
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [role, setRole] = useState<'parent' | 'teacher'>('parent');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate login for now
        if (role === 'parent') {
            navigate('/parent-portal');
        } else {
            navigate('/teacher-portal');
        }
    };

    return (
        <div className="pt-32 pb-20 px-6 min-h-[80vh] flex items-center justify-center relative z-10">
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl w-full max-w-md border-8 border-sky-100">
                <div className="text-center mb-8">
                    <div className="text-6xl mb-4 animate-bounce">🔑</div>
                    <h1 className="text-4xl font-bold text-blue-600 font-bubble">Hello Friend!</h1>
                    <p className="text-gray-500 mt-2">Welcome back to our digital playroom.</p>
                </div>

                <div className="flex gap-2 p-2 bg-sky-50 rounded-2xl mb-8">
                    <button
                        onClick={() => setRole('parent')}
                        className={`flex-1 py-2 rounded-xl font-bold transition-all ${role === 'parent' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}
                    >
                        👪 Parent
                    </button>
                    <button
                        onClick={() => setRole('teacher')}
                        className={`flex-1 py-2 rounded-xl font-bold transition-all ${role === 'teacher' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}
                    >
                        👩‍🏫 Teacher
                    </button>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-2">Username / Email</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2">👤</span>
                            <input
                                type="text"
                                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-300 outline-none transition-all"
                                placeholder="Type here..."
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-2">Secret Password</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2">🔒</span>
                            <input
                                type="password"
                                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-300 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl transition-all active:scale-95 text-lg">
                        Enter Portal 🌈
                    </button>

                    <div className="text-center">
                        <a href="#" className="text-blue-400 font-medium hover:underline text-sm">Forgot password? Don't worry!</a>
                    </div>
                </form>
            </div>

            {/* Decorative animal in corner */}
            <div className="absolute bottom-10 right-[10%] text-9xl hidden lg:block animate-pulse">🦒</div>
        </div>
    );
};

export default LoginPage;
