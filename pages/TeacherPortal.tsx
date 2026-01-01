import React, { useState } from 'react';

const TeacherPortal: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'dashboard' | 'attendance' | 'uploads' | 'notices' | 'assessment'>('dashboard');

    const renderDashboard = () => (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Stat Cards */}
                <div className="bg-blue-50 p-6 rounded-3xl border-2 border-blue-100">
                    <div className="text-4xl mb-2">👶</div>
                    <h3 className="text-xl font-bold text-blue-600 mb-1">Total Students</h3>
                    <p className="text-3xl font-bold text-gray-700">24 <span className="text-sm font-normal text-gray-500">Active</span></p>
                </div>
                <div className="bg-pink-50 p-6 rounded-3xl border-2 border-pink-100">
                    <div className="text-4xl mb-2">✅</div>
                    <h3 className="text-xl font-bold text-pink-600 mb-1">Attendance</h3>
                    <p className="text-3xl font-bold text-gray-700">22/24 <span className="text-sm font-normal text-gray-500">Present</span></p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-3xl border-2 border-yellow-100">
                    <div className="text-4xl mb-2">📝</div>
                    <h3 className="text-xl font-bold text-yellow-600 mb-1">Pending Reports</h3>
                    <p className="text-3xl font-bold text-gray-700">03 <span className="text-sm font-normal text-gray-500">To Review</span></p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-2">
                        <span className="bg-green-100 p-2 rounded-lg">✨</span> Quick Actions
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={() => setActiveTab('uploads')}
                            className="p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg border-2 border-transparent hover:border-green-200 transition-all text-left group active:scale-95"
                        >
                            <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">📸</span>
                            <span className="font-bold text-gray-600 group-hover:text-green-600">Upload Photos</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('notices')}
                            className="p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg border-2 border-transparent hover:border-blue-200 transition-all text-left group active:scale-95"
                        >
                            <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">📢</span>
                            <span className="font-bold text-gray-600 group-hover:text-blue-600">Send Notice</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('attendance')}
                            className="p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg border-2 border-transparent hover:border-purple-200 transition-all text-left group active:scale-95"
                        >
                            <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">📅</span>
                            <span className="font-bold text-gray-600 group-hover:text-purple-600">Attendance</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('assessment')}
                            className="p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg border-2 border-transparent hover:border-pink-200 transition-all text-left group active:scale-95"
                        >
                            <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">⭐</span>
                            <span className="font-bold text-gray-600 group-hover:text-pink-600">Assessment</span>
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-2">
                        <span className="bg-orange-100 p-2 rounded-lg">🗓️</span> Upcoming Schedule
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50/50 border border-orange-100">
                            <div className="text-center bg-white p-2 rounded-xl shadow-sm min-w-[60px]">
                                <p className="text-xs font-bold text-orange-400">09:00</p>
                                <p className="text-xl font-bold text-gray-700">AM</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Morning Circle Time</h4>
                                <p className="text-sm text-gray-500">Theme: Jungle Animals 🦁</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                            <div className="text-center bg-white p-2 rounded-xl shadow-sm min-w-[60px]">
                                <p className="text-xs font-bold text-blue-400">11:30</p>
                                <p className="text-xl font-bold text-gray-700">AM</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">Art & Craft</h4>
                                <p className="text-sm text-gray-500">Paper Origami Session ✂️</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const renderBackBtn = () => (
        <button
            onClick={() => setActiveTab('dashboard')}
            className="mb-8 flex items-center gap-2 text-gray-600 font-bold hover:text-purple-600 transition-colors"
        >
            ⬅️ Back to Dashboard
        </button>
    );

    const renderAttendance = () => (
        <div className="animate-fade-in">
            {renderBackBtn()}
            <h2 className="text-3xl font-bold text-purple-600 font-bubble mb-6">Daily Attendance 📅</h2>
            <div className="bg-white rounded-3xl shadow-sm border border-purple-100 overflow-hidden">
                <div className="grid grid-cols-12 bg-purple-50 p-4 font-bold text-purple-800 text-sm md:text-base">
                    <div className="col-span-2 md:col-span-1">Roll No</div>
                    <div className="col-span-6 md:col-span-5">Student Name</div>
                    <div className="col-span-4 md:col-span-6 text-center">Status</div>
                </div>
                {[1, 2, 3, 4, 5].map((id) => (
                    <div key={id} className="grid grid-cols-12 p-4 border-b border-gray-50 items-center hover:bg-gray-50">
                        <div className="col-span-2 md:col-span-1 font-bold text-gray-500">#{100 + id}</div>
                        <div className="col-span-6 md:col-span-5 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                            <span className="font-bold text-gray-700">Student Name {id}</span>
                        </div>
                        <div className="col-span-4 md:col-span-6 flex justify-center gap-2">
                            <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold hover:bg-green-200 border border-green-200">P</button>
                            <button className="px-3 py-1 bg-red-50 text-red-400 rounded-lg text-xs font-bold hover:bg-red-100 border border-transparent">A</button>
                        </div>
                    </div>
                ))}
                <div className="p-6 bg-gray-50 text-right">
                    <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:bg-purple-700 transition-colors">
                        Save Attendance
                    </button>
                </div>
            </div>
        </div>
    );

    const renderUploads = () => (
        <div className="animate-fade-in">
            {renderBackBtn()}
            <h2 className="text-3xl font-bold text-green-600 font-bubble mb-6">Upload Highlights 📸</h2>
            <div className="bg-green-50 rounded-3xl p-8 border-2 border-dashed border-green-300 text-center cursor-pointer hover:bg-green-100 transition-colors mb-8">
                <div className="text-6xl mb-4">☁️</div>
                <p className="text-xl font-bold text-green-700 mb-2">Drag & Drop photos here</p>
                <p className="text-gray-500">or click to browse from device</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Select Activity Tag</label>
                    <select className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 outline-none font-medium text-gray-600">
                        <option>Art Class 🎨</option>
                        <option>Sports Day 🏅</option>
                        <option>Music Time 🎵</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Add a Caption</label>
                    <input type="text" placeholder="e.g. Fun with colors!" className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-green-400 outline-none font-medium" />
                </div>
            </div>
            <button className="mt-8 w-full py-4 bg-green-500 text-white font-bold rounded-xl shadow-lg hover:bg-green-600">Upload Now</button>
        </div>
    );

    const renderNotices = () => (
        <div className="animate-fade-in">
            {renderBackBtn()}
            <h2 className="text-3xl font-bold text-blue-600 font-bubble mb-6">Send Notice 📢</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Notice Title</label>
                    <input type="text" placeholder="e.g. Picnic Tomorrow" className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-400 outline-none font-medium" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea rows={5} placeholder="Type your message here..." className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-400 outline-none font-medium"></textarea>
                </div>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-gray-200">
                        <input type="checkbox" className="w-5 h-5 accent-blue-500" defaultChecked />
                        <span className="font-bold text-gray-600">Parents</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-gray-200">
                        <input type="checkbox" className="w-5 h-5 accent-blue-500" />
                        <span className="font-bold text-gray-600">Public Website</span>
                    </label>
                </div>
                <button className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg hover:bg-blue-600">
                    Broadcast Message 🚀
                </button>
            </div>
        </div>
    );

    const renderAssessment = () => (
        <div className="animate-fade-in">
            {renderBackBtn()}
            <h2 className="text-3xl font-bold text-pink-600 font-bubble mb-6">Student Assessment ⭐</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(id => (
                    <div key={id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-lg">🎓</div>
                            <div>
                                <p className="font-bold text-gray-700">Student Name {id}</p>
                                <p className="text-xs text-gray-400">Junior KG - A</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-pink-50 text-pink-500 font-bold rounded-lg text-sm hover:bg-pink-100">
                            Grade
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
            <div className="bg-white rounded-[3rem] p-6 md:p-12 shadow-2xl border-8 border-purple-100 min-h-[80vh]">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 font-bubble mb-2">Teacher Dashboard 👩‍🏫</h1>
                        <p className="text-gray-500 text-lg">Good Morning, Ms. Sarah!</p>
                    </div>
                    <div className="bg-purple-50 px-6 py-3 rounded-2xl border-2 border-purple-100 flex items-center gap-3">
                        <span className="text-2xl">📅</span>
                        <div>
                            <p className="text-xs text-purple-400 font-bold uppercase">Today</p>
                            <p className="text-purple-700 font-bold">Mon, 12 Oct</p>
                        </div>
                    </div>
                </div>

                {activeTab === 'dashboard' && renderDashboard()}
                {activeTab === 'attendance' && renderAttendance()}
                {activeTab === 'uploads' && renderUploads()}
                {activeTab === 'notices' && renderNotices()}
                {activeTab === 'assessment' && renderAssessment()}

            </div>
        </div>
    );
};

export default TeacherPortal;
