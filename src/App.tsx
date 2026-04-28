import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import Features from './components/Features';
import SpecialOffers from './components/SpecialOffers';
import Testimonials from './components/Testimonials';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-dark flex items-center justify-center z-[100]">
        <div className="text-center space-y-6">
          {/* Animated Logo */}
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto animate-pulse">
              <span className="text-4xl">🍔</span>
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl mx-auto animate-ping opacity-30" />
          </div>
          
          {/* Brand Name */}
          <div>
            <h1 className="text-3xl font-display font-bold text-white">
              Berger<span className="text-primary">Life</span>
            </h1>
            <p className="text-gray-500 text-sm mt-2">Loading deliciousness...</p>
          </div>
          
          {/* Progress Bar */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-[loading_0.8s_ease-in-out]" 
                 style={{
                   animation: 'loading 0.8s ease-in-out forwards',
                 }} />
          </div>
        </div>
        
        <style>{`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <MenuHighlights />
        <Features />
        <SpecialOffers />
        <Testimonials />
        <AppDownload />
      </main>
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 active:scale-95 transition-all z-40 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export default App;
