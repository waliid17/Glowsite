import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20); // More sensitive to scroll
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out w-full ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 transition-all duration-300"
          >
            {/* Show logo on desktop, show name on mobile */}
            <div className="hidden md:block">
              <motion.img 
                src="/logo.png" 
                alt="GS Logo" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-16' : 'h-20'
                } ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`}
                style={isScrolled ? { filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)' } : {}}
                animate={{
                  scale: isScrolled ? 0.9 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
            
            {/* Show name on mobile */}
            <div className="md:hidden">
              <h1 className={`text-xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}>
                GlowSite
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`font-medium transition-all duration-300 ease-in-out focus:outline-none ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center px-6 py-2 btn-primary text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none"
          >
            Démo Gratuite
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Smooth Dropdown */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="md:hidden overflow-hidden absolute left-0 right-0 top-full"
        >
          {/* Fade overlay underneath */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
          />
          <motion.div 
            initial={{ y: -20 }}
            animate={{ y: isMobileMenuOpen ? 0 : -20 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut",
              delay: isMobileMenuOpen ? 0.1 : 0
            }}
            className={`px-4 pt-2 pb-3 space-y-0 w-full ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-xl shadow-xl' 
                : 'backdrop-blur-xl shadow-xl'
            }`}
            style={!isScrolled ? { backgroundColor: '#2867ec' } : {}}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ 
                  duration: 0.2,
                  delay: isMobileMenuOpen ? 0.2 + index * 0.1 : 0
                }}
                className={`flex items-center justify-center px-4 py-4 font-medium transition-all duration-200 w-full border-b last:border-b-0 focus:outline-none ${
                  isScrolled 
                    ? 'text-gray-700 border-gray-200' 
                    : 'text-white border-white/20'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  
                  // Délai pour permettre au menu de se fermer
                  setTimeout(() => {
                    const targetId = item.href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      // Scroll avec offset pour le header fixe
                      const headerHeight = 80;
                      const elementPosition = targetElement.offsetTop - headerHeight;
                      
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }, 300);
                }}
              >
                <span className="text-center">{item.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
