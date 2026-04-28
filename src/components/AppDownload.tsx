import { useEffect, useRef, useState } from 'react';
import { Smartphone, CheckCircle2, Bell, MapPin, CreditCard, Zap } from 'lucide-react';

const AppDownload = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Bell, text: 'Real-time order tracking' },
    { icon: MapPin, text: 'Find nearest locations' },
    { icon: CreditCard, text: 'One-tap reordering' },
    { icon: Zap, text: 'Exclusive app-only deals' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-dark to-secondary overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">Download The App</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Get the Berger Life
              <br />
              <span className="gradient-text">Experience</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Download our app for a faster, smoother ordering experience. 
              Track your delivery in real-time and unlock exclusive deals only for app users.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="shrink-0 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl px-6 py-4 transition-all group hover:-translate-y-1">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Download on the</div>
                  <div className="text-white text-lg font-semibold -mt-0.5">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl px-6 py-4 transition-all group hover:-translate-y-1">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.302-8.636-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Get it on</div>
                  <div className="text-white text-lg font-semibold -mt-0.5">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className={`relative flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-primary/20 border border-gray-700">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="bg-gradient-to-b from-dark to-secondary rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-8 pt-8 pb-4">
                    <span className="text-white text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2.5 border border-white/60 rounded-sm">
                        <div className="w-3/4 h-full bg-white/60 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App Content Preview */}
                  <div className="px-5 pb-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-[10px]">Good Morning 👋</p>
                        <h4 className="text-white font-bold text-sm">What would you like?</h4>
                      </div>
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm">
                        👤
                      </div>
                    </div>

                    {/* Search */}
                    <div className="bg-white/5 rounded-xl px-3 py-2 flex items-center gap-2">
                      <span className="text-gray-500 text-xs">🔍</span>
                      <span className="text-gray-500 text-[10px]">Search for food...</span>
                    </div>

                    {/* Category pills */}
                    <div className="flex gap-2">
                      {['🍔', '🍕', '🥪', '🍟'].map((emoji, i) => (
                        <div
                          key={i}
                          className={`flex-1 py-2 rounded-xl text-center text-lg ${
                            i === 0 ? 'bg-primary/20 border border-primary/30' : 'bg-white/5'
                          }`}
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>

                    {/* Featured Item */}
                    <div className="bg-gradient-to-r from-primary/20 to-accent/10 rounded-2xl p-4 border border-primary/20">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-primary text-[10px] font-bold uppercase">Featured</p>
                          <h5 className="text-white text-sm font-bold mt-1">Smash Berger</h5>
                          <p className="text-gray-400 text-[10px] mt-0.5">Double patty, cheese...</p>
                          <p className="text-white font-bold mt-2">$12.99</p>
                        </div>
                        <div className="text-4xl">🍔</div>
                      </div>
                    </div>

                    {/* Order Button */}
                    <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl py-2.5 text-center">
                      <span className="text-white text-xs font-bold">Order Now</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-8 bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/10 animate-float">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-white text-xs font-bold">Order Confirmed!</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/10 animate-float-delay">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-white text-xs font-bold">25 min away</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
