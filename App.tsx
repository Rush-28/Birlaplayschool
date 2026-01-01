
import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingElements from './components/FloatingElements';
import Hero from './components/Hero';
import CurriculumSection from './components/CurriculumSection';
import ActivitySection from './components/ActivitySection';
import GallerySection from './components/GallerySection';
import AboutPage from './pages/AboutPage';
import ParentsPage from './pages/ParentsPage';
import LoginPage from './pages/LoginPage';
import AvatarCustomizer from './components/AvatarCustomizer';
import StoryAdventure from './pages/StoryAdventure';
import MagicDrawing from './pages/MagicDrawing';
import DanceParty from './pages/DanceParty';
import ParentPortal from './pages/ParentPortal';
import TeacherPortal from './pages/TeacherPortal';
import EnrollPage from './pages/EnrollPage';

// Loading Component
const LoadingScreen = () => (
  <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sky-50 overflow-hidden">
    <div className="flex gap-8 mb-12">
      <div className="text-7xl md:text-9xl animate-bounce" style={{ animationDuration: '0.8s' }}>🦒</div>
      <div className="text-7xl md:text-9xl animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.2s' }}>🐘</div>
      <div className="text-7xl md:text-9xl animate-bounce" style={{ animationDuration: '0.9s', animationDelay: '0.4s' }}>🐼</div>
      <div className="text-7xl md:text-9xl animate-bounce" style={{ animationDuration: '1.1s', animationDelay: '0.1s' }}>🐰</div>
    </div>
    <div className="relative">
      <h2 className="text-4xl md:text-6xl font-bubble text-pink-500 animate-pulse text-center">
        B. K Birla Play School <br />
        <span className="text-2xl md:text-3xl text-blue-400">is getting ready...</span>
      </h2>
      <div className="mt-8 w-64 h-3 bg-white rounded-full mx-auto overflow-hidden border-2 border-pink-100">
        <div className="h-full bg-pink-400 animate-[loading_2s_ease-in-out_infinite]" style={{ width: '40%' }}></div>
      </div>
    </div>
    <style>{`
      @keyframes loading {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(250%); }
      }
    `}</style>
  </div>
);

const Footer = () => (
  <footer className="bg-white/90 backdrop-blur-sm py-12 text-center relative z-10 border-t-4 border-pink-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-4xl mb-6 flex justify-center gap-4">
        <span className="animate-bounce" style={{ animationDelay: '0s' }}>🧸</span>
        <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎨</span>
        <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🚂</span>
        <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🍎</span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8">
        <div className="group flex items-center gap-3 bg-pink-50 px-6 py-3 rounded-2xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all cursor-pointer">
          <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
          <div className="text-left">
            <p className="text-xs text-pink-400 font-bold uppercase tracking-wider">Call Us</p>
            <p className="text-gray-700 font-bold text-lg">9594923990 / 9594923991</p>
          </div>
        </div>

        <div className="group flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
          <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
          <div className="text-left">
            <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">Email Us</p>
            <a href="mailto:contact@bkbirlaplayschoolkalyan.com" className="text-gray-700 font-bold text-lg hover:text-blue-600">
              contact@bkbirlaplayschoolkalyan.com
            </a>
          </div>
        </div>
      </div>

      <p className="text-gray-400 font-medium text-sm">
        © 2024 B. K Birla Play School. Made with Love & Sparkles. ✨
      </p>
    </div>
  </footer>
);

const HomePage = () => (
  <main>
    <Hero />
    <CurriculumSection />
    <ActivitySection />
    <GallerySection />
  </main>
);

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen rainbow-gradient relative overflow-x-hidden">
        {isLoading && <LoadingScreen />}
        <FloatingElements />
        <Navbar />

        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/curriculum" element={<CurriculumSection />} />
            <Route path="/activities" element={<ActivitySection />} />
            <Route path="/gallery" element={<GallerySection />} />
            <Route path="/parents" element={<ParentsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/parent-portal" element={<ParentPortal />} />
            <Route path="/teacher-portal" element={<TeacherPortal />} />
            <Route path="/avatar" element={<AvatarCustomizer />} />
            <Route path="/story-adventure" element={<StoryAdventure />} />
            <Route path="/magic-drawing" element={<MagicDrawing />} />
            <Route path="/dance-party" element={<DanceParty />} />
            <Route path="/enroll" element={<EnrollPage />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
