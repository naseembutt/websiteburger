import { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Star, Plus, Flame, ChevronRight } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  tag?: string;
  spicy?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Smash Berger',
    description: 'Double smashed patty, cheddar, pickles, special sauce',
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.9,
    reviews: 342,
    image: '🍔',
    category: 'bergers',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'BBQ Bacon Beast',
    description: 'Crispy bacon, smoked BBQ, onion rings, pepper jack',
    price: 14.99,
    rating: 4.8,
    reviews: 287,
    image: '🍔',
    category: 'bergers',
    spicy: true,
  },
  {
    id: 3,
    name: 'Margherita Supreme',
    description: 'Fresh mozzarella, basil, San Marzano tomatoes',
    price: 16.99,
    rating: 4.9,
    reviews: 415,
    image: '🍕',
    category: 'pizza',
    tag: 'Popular',
  },
  {
    id: 4,
    name: 'Pepperoni Overload',
    description: 'Double pepperoni, mozzarella, marinara, oregano',
    price: 18.99,
    originalPrice: 22.99,
    rating: 4.7,
    reviews: 198,
    image: '🍕',
    category: 'pizza',
    tag: 'Hot Deal',
  },
  {
    id: 5,
    name: 'Club Sandwich Deluxe',
    description: 'Turkey, bacon, avocado, swiss, honey mustard',
    price: 11.99,
    rating: 4.8,
    reviews: 156,
    image: '🥪',
    category: 'sandwiches',
  },
  {
    id: 6,
    name: 'Spicy Chicken Crunch',
    description: 'Crispy chicken, jalapeños, slaw, chipotle mayo',
    price: 13.49,
    rating: 4.9,
    reviews: 234,
    image: '🥪',
    category: 'sandwiches',
    spicy: true,
    tag: 'New',
  },
];

const categories = [
  { id: 'all', label: 'All Items', icon: '🍽️' },
  { id: 'bergers', label: 'Bergers', icon: '🍔' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'sandwiches', label: 'Sandwiches', icon: '🥪' },
];

const MenuHighlights = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setVisibleItems((prev) => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.menu-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section id="menu" className="relative py-24 bg-gradient-to-b from-dark via-[#0a0a1a] to-dark overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Our Menu</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Taste the{' '}
            <span className="gradient-text">Legend</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From flame-grilled bergers to wood-fired pizzas, every item is crafted 
            with premium ingredients and endless passion.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setVisibleItems([]);
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`menu-card group relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/[0.06] overflow-hidden transition-all duration-700 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 ${
                visibleItems.includes(item.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Tag Badge */}
              {item.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${
                      item.tag === 'Hot Deal'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : item.tag === 'New'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-primary/20 text-primary border border-primary/30'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
              )}

              {/* Image Area */}
              <div className="relative h-48 flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-transparent">
                <div className="text-8xl select-none group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 drop-shadow-lg">
                  {item.image}
                </div>
                {item.spicy && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🌶️</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-white text-sm font-bold">{item.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm">({item.reviews} reviews)</span>
                </div>

                {/* Name & Description */}
                <div>
                  <h3 className="text-white text-xl font-bold font-display group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="w-11 h-11 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary/40 hover:scale-110 active:scale-95 transition-all">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/10 text-white hover:border-primary/50 hover:bg-primary/5 font-semibold text-lg transition-all group"
          >
            <ShoppingBag className="w-5 h-5" />
            View Full Menu
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
