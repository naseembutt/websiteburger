import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Flame } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-white leading-tight tracking-tight">
                Berger<span className="text-primary">Life</span>
              </span>
              <span className="text-[10px] uppercase tracking-[3px] text-gray-400 font-medium">
                Premium Fast Food
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-5 py-2.5 text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="relative p-3 text-gray-300 hover:text-white transition-colors group">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-white text-xs flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                3
              </span>
            </button>
            <a
              href="#menu"
              className="btn-primary text-sm !py-3 !px-6"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-dark/98 backdrop-blur-xl border-b border-white/5 transition-all duration-500 overflow-hidden ${
          isMobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block px-4 py-3.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="#menu"
              onClick={() => setIsMobileOpen(false)}
              className="btn-primary text-center justify-center"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
