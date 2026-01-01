
import React, { useState } from 'react';

const EnrollPage: React.FC = () => {
    const [formData, setFormData] = useState({
        childName: '',
        childDob: '',
        parentName: '',
        phoneNumber: '',
        email: '',
        program: 'playgroup'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, send to backend
        alert(`Thank you for enrolling ${formData.childName}! We will contact you soon. 🎈`);
    };

    const programs = [
        { value: 'playgroup', label: 'Playgroup (2-3 yrs) 🧸' },
        { value: 'nursery', label: 'Nursery (3-4 yrs) 🎨' },
        { value: 'junior', label: 'Junior KG (4-5 yrs) ✏️' },
        { value: 'senior', label: 'Senior KG (5-6 yrs) 🎓' },
    ];

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center relative z-10 overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-20 left-10 text-8xl opacity-20 animate-bounce delay-1000">🎈</div>
            <div className="absolute bottom-20 right-10 text-8xl opacity-20 animate-pulse delay-500">🪁</div>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl w-full max-w-2xl border-8 border-pink-100 relative">
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-4">
                        <span className="text-6xl animate-bounce">📝</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-pink-500 font-bubble">Join the Fun!</h1>
                    <p className="text-gray-500 mt-3 text-lg">Start your child's magical journey with us today.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-2">Child's Name</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">👶</span>
                                <input
                                    type="text"
                                    required
                                    value={formData.childName}
                                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl bg-pink-50 border-2 border-transparent focus:border-pink-300 outline-none transition-all placeholder-pink-200"
                                    placeholder="Little Superstar"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-2">Date of Birth</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🎂</span>
                                <input
                                    type="date"
                                    required
                                    value={formData.childDob}
                                    onChange={(e) => setFormData({ ...formData, childDob: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl bg-pink-50 border-2 border-transparent focus:border-pink-300 outline-none transition-all text-gray-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-2">Parent's Name</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">👨‍👩‍👧</span>
                                <input
                                    type="text"
                                    required
                                    value={formData.parentName}
                                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl bg-blue-50 border-2 border-transparent focus:border-blue-300 outline-none transition-all placeholder-blue-200"
                                    placeholder="Guardian Angel"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-600 mb-2">Phone Number</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">📱</span>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 rounded-2xl bg-blue-50 border-2 border-transparent focus:border-blue-300 outline-none transition-all placeholder-blue-200"
                                    placeholder="123-456-7890"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-2">Email Address</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">📧</span>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-yellow-50 border-2 border-transparent focus:border-yellow-300 outline-none transition-all placeholder-yellow-300"
                                placeholder="hello@family.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-600 mb-2">Interested Program</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {programs.map((prog) => (
                                <button
                                    key={prog.value}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, program: prog.value })}
                                    className={`py-3 px-4 rounded-xl border-2 font-medium transition-all text-left flex items-center gap-2 ${formData.program === prog.value
                                            ? 'border-pink-400 bg-pink-100 text-pink-700 shadow-md transform scale-102'
                                            : 'border-gray-100 bg-white text-gray-500 hover:border-pink-200'
                                        }`}
                                >
                                    {prog.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-5 rounded-2xl shadow-xl transition-all active:scale-95 text-xl mt-4 flex items-center justify-center gap-3">
                        <span>🚀</span> Submit Application
                    </button>

                    <p className="text-center text-gray-400 text-sm mt-4">
                        We respect your privacy. All information is kept safe! 🔒
                    </p>
                </form>
            </div>
        </div>
    );
};

export default EnrollPage;
