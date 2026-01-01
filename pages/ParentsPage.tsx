
import React, { useState } from 'react';

const ParentsPage: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const months = [
    { name: 'June 2025', days: 30, startDay: 0, events: ['15: School Reopens 🎒'] },
    { name: 'July 2025', days: 31, startDay: 2, events: ['21: Rainy Day Fun ☔'] },
    { name: 'August 2025', days: 31, startDay: 5, events: ['15: Independence Day 🇮🇳'] },
    { name: 'September 2025', days: 30, startDay: 1, events: ['05: Teachers Day 👩‍🏫'] },
    { name: 'October 2025', days: 31, startDay: 3, events: ['02: Gandhi Jayanti', '20: Diwali Break Starts 🪔'] },
    { name: 'November 2025', days: 30, startDay: 6, events: ['14: Children\'s Day 🎈'] },
    { name: 'December 2025', days: 31, startDay: 1, events: ['25: Christmas 🎄'] },
    { name: 'January 2026', days: 31, startDay: 4, events: ['26: Republic Day 🇮🇳'] },
    { name: 'February 2026', days: 28, startDay: 0, events: ['14: Love Day ❤️'] },
    { name: 'March 2026', days: 31, startDay: 0, events: ['10: Holi 🎨', '25: Annual Exams'] },
    { name: 'April 2026', days: 30, startDay: 3, events: ['15: New Session Begins'] },
    { name: 'May 2026', days: 31, startDay: 5, events: ['01: Summer Vacations ☀️'] },
  ];

  const handleExportPDF = () => {
    const printContent = document.getElementById('academic-calendar-printable');
    if (printContent) {
      const win = window.open('', '', 'height=700,width=1000');
      if (win) {
        win.document.write('<html><head><title>Academic Calendar 2025-26</title>');
        win.document.write('<style>');
        win.document.write(`
          body { font-family: sans-serif; padding: 20px; text-align: center; }
          .calendar-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .month-card { border: 1px solid #ddd; padding: 15px; border-radius: 10px; page-break-inside: avoid; }
          h1 { color: #d946ef; margin-bottom: 30px; font-size: 24px; }
          h3 { color: #ea580c; margin-bottom: 10px; border-bottom: 2px solid #fed7aa; padding-bottom: 5px; }
          .event-list { text-align: left; font-size: 12px; margin-top: 10px; }
          .event-item { margin-bottom: 4px; }
        `);
        win.document.write('</style></head><body>');
        win.document.write('<h1>🏫 B. K Birla Play School - Academic Calendar 2025-26</h1>');
        win.document.write(printContent.innerHTML);
        win.document.write('</body></html>');
        win.document.close();
        win.print();
      }
    } else {
      // Fallback if modal isn't open: Open modal first then print
      setShowCalendar(true);
      setTimeout(() => handleExportPDF(), 500);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-green-600 mb-4 font-bubble">Parents' Corner 👨‍👩‍👧</h1>
        <p className="text-xl text-gray-700">Everything you need to stay connected with your child's growth.</p>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2rem] w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <div className="sticky top-0 bg-white z-10 p-6 border-b flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-purple-600 font-bubble">Academic Calendar 2025-26 🗓️</h2>
                <p className="text-gray-500">Plan your year with us!</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleExportPDF}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-md transition-all"
                >
                  Download PDF 📥
                </button>
                <button
                  onClick={() => setShowCalendar(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-8" id="academic-calendar-printable">
              <div className="calendar-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {months.map((month, idx) => (
                  <div key={idx} className="month-card bg-orange-50/50 border-2 border-orange-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-orange-600 mb-4 flex justify-between items-center">
                      {month.name}
                      <span className="text-xs bg-white px-2 py-1 rounded-full border border-orange-200 text-gray-500">
                        {month.days} Days
                      </span>
                    </h3>
                    <div className="bg-white rounded-xl p-3 shadow-sm min-h-[100px]">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-2">Key Dates & Holidays</p>
                      <ul className="event-list space-y-2">
                        {month.events.map((evt, i) => (
                          <li key={i} className="event-item text-sm font-medium text-gray-700 flex items-start gap-2">
                            <span className="text-orange-400 mt-0.5">●</span> {evt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Notices */}
        <div className="lg:col-span-2 space-y-8">
          {/* Live Notices */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xl border-l-8 border-purple-400">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-600 flex items-center gap-2 font-bubble">
                Notice Board 📌
              </h2>
              <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full animate-pulse border border-red-200">
                LIVE ●
              </span>
            </div>
            <div className="space-y-4">
              {[
                { date: 'Today', title: 'Winter Break Announcement ❄️', tag: 'Important', important: true },
                { date: 'Yesterday', title: 'Parent-Teacher Meeting Schedule 📝', tag: 'Reminder', important: false },
                { date: 'Dec 28', title: 'New Uniform Guidelines 👕', tag: 'Info', important: false }
              ].map((notice, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-purple-50 rounded-2xl cursor-pointer hover:bg-purple-100 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${notice.important ? 'bg-red-500' : 'bg-purple-300'}`}></div>
                    <div>
                      <h4 className="font-bold text-gray-800 group-hover:text-purple-700 transition-colors">{notice.title}</h4>
                      <span className="text-sm text-purple-500 font-medium">{notice.date}</span>
                    </div>
                  </div>
                  <div className="text-purple-300 group-hover:translate-x-1 transition-transform">
                    ➔
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Calendar */}
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-[2rem] p-8 shadow-xl text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 font-bubble">Academic Calendar 2025-26 🗓️</h2>
                <p className="opacity-90 font-medium">Download the monthly view or full PDF.</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCalendar(true)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-bold transition-all border border-white/30 text-sm"
                >
                  View Monthly
                </button>
                <button
                  onClick={handleExportPDF}
                  className="bg-white text-orange-500 px-6 py-2 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  PDF 📥
                </button>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-xl border-l-8 border-blue-400">
            <h2 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-2 font-bubble">
              Upcoming Events 📅
            </h2>
            <div className="space-y-4">
              {[
                { date: 'Jan 15, 2026', title: 'Annual Sports Day 🏆', desc: 'Ready, Set, Go! A day of fun races and healthy competition.' },
                { date: 'Jan 22, 2026', title: 'Winter Art Festival 🎨', desc: 'Showcasing our little Picassos\' winter creations.' },
                { date: 'Feb 05, 2026', title: 'Family Story Night 🌙', desc: 'Bring a blanket and your favorite storybook.' },
                { date: 'Feb 14, 2026', title: 'Love & Kindness Day ❤️', desc: 'Celebrating friendship and caring for others.' }
              ].map((event, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-blue-50 rounded-2xl">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-xl text-sm font-bold shrink-0">
                    {event.date}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-xl border-l-8 border-pink-400">
            <h2 className="text-2xl font-bold text-pink-600 mb-6 flex items-center gap-2 font-bubble">
              Healthy Menu 🥦
            </h2>
            <p className="text-gray-600 mb-4 italic">Changing weekly to keep little tummies happy and strong!</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-pink-50 rounded-2xl text-center">
                <p className="font-bold text-pink-500">Morning Snack</p>
                <p className="text-sm">Fruit Salad & Yogurt</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-2xl text-center">
                <p className="font-bold text-pink-500">Happy Lunch</p>
                <p className="text-sm">Veggie Pasta & Corn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Admission Inquiry */}
        <div className="bg-white rounded-[2rem] p-8 shadow-2xl border-4 border-yellow-200 h-fit sticky top-32">
          <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center font-bubble">Join the Magic! ✨</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Parent's Name</label>
              <input type="text" className="w-full px-4 py-2 rounded-xl bg-yellow-50 border-2 border-yellow-100 focus:border-yellow-300 outline-none" placeholder="Enter name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Child's Age</label>
              <select className="w-full px-4 py-2 rounded-xl bg-yellow-50 border-2 border-yellow-100 focus:border-yellow-300 outline-none">
                <option>2 Years</option>
                <option>3 Years</option>
                <option>4 Years</option>
                <option>5-6 Years</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-2 rounded-xl bg-yellow-50 border-2 border-yellow-100 focus:border-yellow-300 outline-none" placeholder="Email here" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-600 mb-1">Message</label>
              <textarea className="w-full px-4 py-2 rounded-xl bg-yellow-50 border-2 border-yellow-100 focus:border-yellow-300 outline-none h-24" placeholder="Tell us about your little one!"></textarea>
            </div>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-95">
              Send Inquiry 🚀
            </button>
            <button className="w-full mt-3 bg-white border-2 border-yellow-400 text-yellow-600 font-bold py-3 rounded-xl shadow-sm hover:bg-yellow-50 transition-transform active:scale-95 flex items-center justify-center gap-2 group">
              Check Admission Status
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full group-hover:bg-yellow-200 transition-colors">2025-26</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ParentsPage;
