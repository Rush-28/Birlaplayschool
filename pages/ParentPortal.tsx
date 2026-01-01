import React, { useState } from 'react';

const ParentPortal: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'gallery' | 'fees' | 'progress' | 'transport'>('dashboard');

    const renderDashboard = () => (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Daily Update Card */}
                <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-[2.5rem] p-6 md:p-8 border-2 border-yellow-100 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-orange-600 mb-4 font-bubble">Today's Highlights 🌟</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="bg-white p-1 rounded-lg text-xl shadow-sm">🎨</span>
                                <span className="text-gray-700 font-medium">Painted a beautiful sunny garden in Art class.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-white p-1 rounded-lg text-xl shadow-sm">🍲</span>
                                <span className="text-gray-700 font-medium">Finished all the veggies in lunch! (Spinach & Corn)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="bg-white p-1 rounded-lg text-xl shadow-sm">😴</span>
                                <span className="text-gray-700 font-medium">Had a peaceful 45-minute nap.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-10 text-9xl transform translate-x-10 translate-y-10">☀️</div>
                </div>

                {/* Quick Stats or Notices */}
                <div className="bg-blue-50 rounded-[2.5rem] p-6 md:p-8 border-2 border-blue-100 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-blue-600 mb-4">Notice Board 📌</h3>
                        <div className="space-y-3">
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100">
                                <p className="text-xs text-blue-400 font-bold mb-1">12 OCT 2024</p>
                                <p className="text-gray-700 font-bold text-sm">Annual Sports Day confirmed for next Friday!</p>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100 opacity-75">
                                <p className="text-xs text-gray-400 font-bold mb-1">10 OCT 2024</p>
                                <p className="text-gray-700 font-bold text-sm">Diwali vacation dates announced.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Grid */}
            <h3 className="text-2xl font-bold text-gray-700 mb-6 font-bubble">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <button
                    onClick={() => setActiveTab('gallery')}
                    className="flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-pink-200 hover:bg-pink-50 hover:shadow-lg transition-all group active:scale-95"
                >
                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">📸</span>
                    <span className="font-bold text-gray-600 group-hover:text-pink-600">Gallery</span>
                </button>
                <button
                    onClick={() => setActiveTab('fees')}
                    className="flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-green-200 hover:bg-green-50 hover:shadow-lg transition-all group active:scale-95"
                >
                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">💳</span>
                    <span className="font-bold text-gray-600 group-hover:text-green-600">Fee Payment</span>
                </button>
                <button
                    onClick={() => setActiveTab('progress')}
                    className="flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-purple-200 hover:bg-purple-50 hover:shadow-lg transition-all group active:scale-95"
                >
                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">📊</span>
                    <span className="font-bold text-gray-600 group-hover:text-purple-600">Progress</span>
                </button>
                <button
                    onClick={() => setActiveTab('transport')}
                    className="flex flex-col items-center justify-center p-6 bg-white border-2 border-gray-100 rounded-3xl hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg transition-all group active:scale-95"
                >
                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">🚌</span>
                    <span className="font-bold text-gray-600 group-hover:text-blue-600">Transport</span>
                </button>
            </div>
        </>
    );

    const renderBackBtn = () => (
        <button
            onClick={() => setActiveTab('dashboard')}
            className="mb-8 flex items-center gap-2 text-gray-600 font-bold hover:text-pink-50 transition-colors"
        >
            ⬅️ Back to Dashboard
        </button>
    );

    const renderGallery = () => (
        <div className="animate-fade-in">
            {renderBackBtn()}
            <h2 className="text-3xl font-bold text-pink-500 font-bubble mb-6">Classroom Memories 📸</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-white p-3 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md transition-shadow">
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3">
                            <img
                                src={`https://images.unsplash.com/photo-${item === 1 ? '1503454537195-1dcabb73ffb9' : item === 2 ? '1502086223501-8350e33e83c4' : '1488521787991-ed7bbaae773c'}?auto=format&fit=crop&q=80&w=400&h=400`}
                                alt="Class activity"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <p className="text-sm font-bold text-gray-700 text-center">Fun Activity #{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderFees = () => (
        <div className="animate-fade-in">
            {renderBackBtn()}
            <h2 className="text-3xl font-bold text-green-600 font-bubble mb-6">Fee Status 💳</h2>
            <div className="bg-green-50 rounded-3xl p-6 border-2 border-green-100 mb-8">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-green-800 font-bold">Total Pending</span>
                    <span className="text-2xl font-bold text-green-600">₹ 12,000</span>
                </div>
                <button className="w-full py-4 bg-green-500 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-green-600 active:scale-95 transition-all">
                    Pay Now
                </button>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">Payment History</h3>
            <div className="space-y-4">
                {['Term 1', 'Admission Fee', 'Kit Fee'].map((fee, i) => (
                    <div key={i} className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100">
                        <div>
                            <p className="font-bold text-gray-700">{fee}</p>
                            <p className="text-xs text-gray-400">Paid on 12th Aug 2024</p>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold">Paid ✅</span>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderProgress = () => (
        <div className="animate-fade-in">
            {renderBackBtn()}
            <h2 className="text-3xl font-bold text-purple-600 font-bubble mb-6">Aarav's Progress 📊</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-3xl border-2 border-purple-100">
                    <h3 className="font-bold text-purple-800 mb-4">Skill Assessment</h3>
                    <div className="space-y-4">
                        {[{ skill: 'Social Skills', val: 90 }, { skill: 'Creativity', val: 85 }, { skill: 'Motor Skills', val: 75 }].map((s) => (
                            <div key={s.skill}>
                                <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                                    <span>{s.skill}</span>
                                    <span>{s.val}%</span>
                                </div>
                                <div className="h-3 bg-white rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-400 rounded-full" style={{ width: `${s.val}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-3xl border-2 border-blue-100">
                    <h3 className="font-bold text-blue-800 mb-4">Teacher's Note 📝</h3>
                    <p className="text-gray-700 italic leading-relaxed">
                        "Aarav is doing wonderful! He is very sharing with his friends and loves painting. We are working on his counting skills, and he's improving every day!"
                    </p>
                    <p className="text-right text-sm font-bold text-blue-500 mt-4">- Ms. Sarah</p>
                </div>
            </div>
        </div>
    );

    const renderTransport = () => (
        <div className="animate-fade-in">
            {renderBackBtn()}
            <h2 className="text-3xl font-bold text-blue-600 font-bubble mb-6">Transport Tracking 🚌</h2>
            <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-100 overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center relative">
                    <span className="text-gray-400 font-bold text-xl">🗺️ Map View Placeholder</span>
                    <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl shadow-md">
                        <p className="text-xs text-gray-500 font-bold uppercase">Status</p>
                        <p className="text-green-600 font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> On the way
                        </p>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">👮</div>
                        <div>
                            <p className="font-bold text-gray-800">Driver: Rajesh Uncle</p>
                            <p className="text-sm text-gray-500">Bus No: MH-04-1234</p>
                        </div>
                        <button className="ml-auto bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm hover:bg-green-200">
                            Call
                        </button>
                    </div>
                    <div className="flex justify-between text-sm border-t pt-4">
                        <div className="text-center w-1/3">
                            <p className="text-gray-400 font-bold text-xs uppercase">Left School</p>
                            <p className="font-bold text-gray-700">12:30 PM</p>
                        </div>
                        <div className="text-center w-1/3 border-l">
                            <p className="text-gray-400 font-bold text-xs uppercase">ETA Home</p>
                            <p className="font-bold text-blue-600">12:55 PM</p>
                        </div>
                        <div className="text-center w-1/3 border-l">
                            <p className="text-gray-400 font-bold text-xs uppercase">Last Stop</p>
                            <p className="font-bold text-gray-700">Oak Park</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
            <div className="bg-white rounded-[3rem] p-6 md:p-12 shadow-2xl border-8 border-pink-100 min-h-[80vh]">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 border-b-2 border-gray-50 pb-8">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-pink-500 font-bubble mb-2">Parent Portal 🏡</h1>
                        <p className="text-gray-500 text-lg">Welcome, Mr. & Mrs. Sharma!</p>
                    </div>
                    <div className="flex items-center gap-3 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
                        <img
                            src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=150&h=150"
                            alt="Kid"
                            className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                        />
                        <div className="text-left">
                            <p className="font-bold text-gray-700 text-sm">Aarav Sharma</p>
                            <p className="text-[10px] text-pink-500 font-bold uppercase tracking-wider">Junior KG - A</p>
                        </div>
                    </div>
                </div>

                {activeTab === 'dashboard' && renderDashboard()}
                {activeTab === 'gallery' && renderGallery()}
                {activeTab === 'fees' && renderFees()}
                {activeTab === 'progress' && renderProgress()}
                {activeTab === 'transport' && renderTransport()}

            </div>
        </div>
    );
};

export default ParentPortal;
