import { useState, useEffect, useRef } from 'react';
import { Clock, Zap, ArrowRight, Tag, Gift } from 'lucide-react';

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 32,
    seconds: 18,
  });
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const offers = [
    {
      title: 'Berger Combo Deal',
      description: 'Get a Classic Smash Berger + Fries + Drink at an unbeatable price!',
      originalPrice: '$24.99',
      salePrice: '$16.99',
      discount: '32%',
      emoji: '🍔',
      gradient: 'from-primary/20 via-primary/5 to-transparent',
      borderColor: 'border-primary/20',
      tagColor: 'bg-primary text-white',
    },
    {
      title: 'Pizza Party Pack',
      description: '2 Large Pizzas + Garlic Bread + 2 Drinks. Perfect for sharing!',
      originalPrice: '$42.99',
      salePrice: '$29.99',
      discount: '30%',
      emoji: '🍕',
      gradient: 'from-accent/20 via-accent/5 to-transparent',
      borderColor: 'border-accent/20',
      tagColor: 'bg-accent text-dark',
    },
    {
      title: 'Midnight Munchies',
      description: 'Order after 10PM and get 20% off your entire order. Night owls welcome!',
      originalPrice: '20% OFF',
      salePrice: 'All Items',
      discount: '20%',
      emoji: '🌙',
      gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
      borderColor: 'border-purple-500/20',
      tagColor: 'bg-purple-500 text-white',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-secondary/50 via-dark to-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header with Timer */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
              <Zap className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-semibold">Limited Time Offers</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Today's{' '}
              <span className="gradient-text">Hot Deals</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Don't miss out on these incredible deals! Grab them before they're gone.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-primary" />
            <div className="flex items-center gap-2">
              {[
                { value: pad(timeLeft.hours), label: 'HRS' },
                { value: pad(timeLeft.minutes), label: 'MIN' },
                { value: pad(timeLeft.seconds), label: 'SEC' },
              ].map((unit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
                      <span className="text-3xl font-display font-bold text-white">
                        {unit.value}
                      </span>
                    </div>
                    <span className="text-gray-500 text-[10px] font-bold tracking-wider mt-1 block">
                      {unit.label}
                    </span>
                  </div>
                  {i < 2 && (
                    <span className="text-primary text-2xl font-bold mb-5">:</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${offer.gradient} backdrop-blur-sm rounded-3xl border ${offer.borderColor} overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`${offer.tagColor} px-3 py-1.5 rounded-full text-xs font-bold`}>
                  -{offer.discount} OFF
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Emoji */}
                <div className="text-6xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 select-none">
                  {offer.emoji}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 line-through text-sm">
                    {offer.originalPrice}
                  </span>
                  <span className="text-2xl font-bold text-white">
                    {offer.salePrice}
                  </span>
                </div>

                {/* CTA */}
                <button className="w-full py-3.5 bg-white/10 hover:bg-primary text-white font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <Tag className="w-4 h-4" />
                  Claim Offer
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Banner */}
        <div className={`mt-16 relative rounded-3xl overflow-hidden transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-accent opacity-90" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  First Order? Get 40% OFF!
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Use code <span className="font-bold bg-white/20 px-2 py-0.5 rounded">BERGER40</span> at checkout
                </p>
              </div>
            </div>
            <a
              href="#menu"
              className="shrink-0 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
