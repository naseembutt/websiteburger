import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Star, Clock, Truck } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark via-secondary to-dark"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating food emojis */}
        <div className="absolute top-20 right-[15%] text-6xl opacity-20 animate-float select-none">🍔</div>
        <div className="absolute bottom-32 left-[10%] text-5xl opacity-15 animate-float-delay select-none">🍕</div>
        <div className="absolute top-1/3 right-[8%] text-4xl opacity-15 animate-float select-none">🍟</div>
        <div className="absolute bottom-1/4 right-[25%] text-5xl opacity-10 animate-float-delay select-none">🥤</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold tracking-wide">
                #1 Fast Food Delivery in Town
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Life is Too Short
                <br />
                <span className="relative">
                  for{' '}
                  <span className="gradient-text">Boring</span>
                  <br />
                  <span className="gradient-text">Bergers</span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg sm:text-xl max-w-lg leading-relaxed">
              Handcrafted gourmet bergers, crispy pizzas, and loaded sandwiches 
              delivered to your door in 30 minutes. Taste the difference with 
              <span className="text-accent font-semibold"> Berger Life</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="btn-primary text-lg !py-4 !px-8 group">
                Explore Our Menu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-secondary text-lg !py-4 !px-8">
                Our Story
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { icon: Star, value: '4.9', label: 'Customer Rating' },
                { icon: Clock, value: '30min', label: 'Avg Delivery' },
                { icon: Truck, value: 'Free', label: 'Delivery Over $25' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{stat.value}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero Image */}
          <div
            className={`relative flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              {/* Main berger image placeholder - using CSS illustration */}
              <div className="relative w-[380px] h-[380px] sm:w-[450px] sm:h-[450px]">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-glow" />
                
                {/* Inner circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-secondary to-dark flex items-center justify-center overflow-hidden">
                  {/* Berger emoji as hero illustration */}
                  <div className="text-[180px] sm:text-[220px] select-none hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                    🍔
                  </div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-4 py-3 flex items-center gap-2 animate-float">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <div className="text-white text-sm font-bold">Hot & Fresh</div>
                    <div className="text-gray-400 text-xs">Made to order</div>
                  </div>
                </div>

                <div className="absolute -bottom-2 left-4 glass rounded-2xl px-4 py-3 animate-float-delay">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <div className="text-white text-xs font-semibold mt-1">2,500+ Reviews</div>
                </div>

                <div className="absolute top-1/2 -right-8 -translate-y-1/2 glass rounded-2xl px-4 py-3 animate-float">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-white text-sm font-bold">30 Min</div>
                  <div className="text-gray-400 text-xs">Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
