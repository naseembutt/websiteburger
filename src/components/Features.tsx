import { useEffect, useRef, useState } from 'react';
import { 
  UtensilsCrossed, 
  Smartphone, 
  Truck, 
  PartyPopper, 
  Shield, 
  Clock, 
  CreditCard,
  Heart
} from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    number: '01',
    title: 'Browse & Choose',
    description: 'Explore our mouth-watering menu of bergers, pizzas, and sandwiches. Filter by your cravings.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: UtensilsCrossed,
    number: '02',
    title: 'Customize Your Order',
    description: 'Add extra toppings, choose your sides, and make it exactly how you love it.',
    color: 'from-primary to-accent',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Easy Checkout',
    description: 'Pay securely with multiple options. Apple Pay, cards, or cash on delivery.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Fast Delivery',
    description: 'Track your order in real-time. Average delivery time is just 30 minutes!',
    color: 'from-emerald-500 to-teal-500',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Premium ingredients sourced daily from local farms.',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Craving at midnight? We\'ve got you covered anytime.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish is crafted with passion by expert chefs.',
  },
  {
    icon: PartyPopper,
    title: 'Party Orders',
    description: 'Special deals for large orders. Feed the whole crew!',
  },
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-dark to-secondary/50 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Truck className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-semibold">How It Works</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            From Click to{' '}
            <span className="gradient-text">Bite</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Getting your favorite food delivered is as easy as 1, 2, 3, 4. 
            Here's how we bring happiness to your doorstep.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-white/10 to-white/5 z-0" />
              )}
              
              <div className="relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/[0.06] p-8 text-center hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-primary/5">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <span className="text-white/60 text-xs font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-white text-xl font-bold font-display mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
