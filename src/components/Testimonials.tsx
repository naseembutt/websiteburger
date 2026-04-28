import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  order: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Food Blogger',
    avatar: '👩‍🦰',
    rating: 5,
    text: "The best berger I've ever had, hands down! The patty is juicy, the buns are perfectly toasted, and the special sauce is absolutely addictive. I order from Berger Life at least twice a week now.",
    order: 'Classic Smash Berger',
    date: '2 days ago',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Regular Customer',
    avatar: '👨',
    rating: 5,
    text: "Fast delivery, amazing food, and the portions are generous! The Pepperoni Overload pizza was insane - perfectly crispy crust with so much cheese. My go-to for game nights.",
    order: 'Pepperoni Overload',
    date: '1 week ago',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Busy Professional',
    avatar: '👩',
    rating: 5,
    text: "As someone who works late, Berger Life is a lifesaver. The midnight deals are incredible, and the food always arrives hot. The Spicy Chicken Crunch sandwich is my comfort food!",
    order: 'Spicy Chicken Crunch',
    date: '3 days ago',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    role: 'Party Host',
    avatar: '👨‍🦱',
    rating: 5,
    text: "Ordered the Party Pack for my birthday and it was a massive hit! Everyone loved the variety. The ordering process was smooth and delivery was right on time. Highly recommend!",
    order: 'Pizza Party Pack',
    date: '5 days ago',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Health Conscious',
    avatar: '👩‍💼',
    rating: 4,
    text: "Love that I can customize my orders. Fresh ingredients, quality you can taste. The Club Sandwich Deluxe with extra avocado is perfection. Great value for premium quality.",
    order: 'Club Sandwich Deluxe',
    date: '1 week ago',
  },
  {
    id: 6,
    name: 'David Park',
    role: 'College Student',
    avatar: '🧑',
    rating: 5,
    text: "Best deals in town! The student discounts combined with the already great prices make this unbeatable. The BBQ Bacon Beast is my absolute favorite. A must try!",
    order: 'BBQ Bacon Beast',
    date: '4 days ago',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-dark via-[#0a0a1a] to-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            What Our{' '}
            <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of happy customers who've made Berger Life their favorite food destination.
          </p>
        </div>

        {/* Overall Rating */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="text-6xl font-display font-bold text-white">4.9</div>
            <div className="flex items-center gap-1 mt-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-2">Based on 2,500+ reviews</p>
          </div>
          <div className="hidden sm:block w-px h-20 bg-white/10" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {[
              { label: 'Food Quality', value: '98%' },
              { label: 'Delivery Speed', value: '95%' },
              { label: 'Customer Service', value: '97%' },
              { label: 'Value for Money', value: '96%' },
            ].map((stat) => (
              <div key={stat.label} className="text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">{stat.label}</span>
                  <span className="text-white font-bold">{stat.value}</span>
                </div>
                <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    style={{ width: stat.value }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="h-full bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/[0.06] p-8 hover:border-primary/20 transition-all duration-500 group">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Quote className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'text-accent fill-accent'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>

                    {/* Order Tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 mb-6">
                      <span className="text-xs text-gray-400">Ordered:</span>
                      <span className="text-xs text-primary font-semibold">{testimonial.order}</span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs">{testimonial.role} · {testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute top-1/2 -translate-y-1/2 -left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-all disabled:opacity-30 disabled:cursor-not-allowed border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute top-1/2 -translate-y-1/2 -right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-all disabled:opacity-30 disabled:cursor-not-allowed border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-8 bg-gradient-to-r from-primary to-accent'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
