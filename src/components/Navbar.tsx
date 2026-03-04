import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-black/90 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Palm Construction Logo" className="h-12 object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors hover:text-[#2E7D32] ${location.pathname === link.href ? 'text-[#2E7D32]' : 'text-white/60'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-8 py-3 bg-[#2E7D32] text-white text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all">
            Get a Free Quote
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-40 lg:hidden flex flex-col items-center justify-center gap-10"
          >
            <div className="absolute top-10 left-6">
              <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <img src="/logo.png" alt="Palm Construction Logo" className="h-12 object-contain" />
              </Link>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-4xl font-bold uppercase tracking-tighter hover:text-[#2E7D32] transition-colors ${location.pathname === link.href ? 'text-[#2E7D32]' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-8 px-12 py-5 bg-[#2E7D32] text-white text-sm font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
              Get a Free Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
