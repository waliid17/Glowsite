import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Animated Background - Matching Logo Colors */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-700"
        animate={!isScrolled ? { 
          y: [0, -15, 0] 
        } : { y: 0 }}
        transition={!isScrolled ? { 
          duration: 2.5, 
          repeat: Infinity, 
          ease: [0.25, 0.46, 0.45, 0.94],
          times: [0, 0.3, 1]
        } : { duration: 0.5 }}
      >
        {/* Subtle vertical gradient overlay to match logo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      </motion.div>

      {/* Floating Elements - White Icons - Responsive positioning */}
      <motion.div
        animate={floatingAnimation}
        className="absolute top-24 left-2 sm:top-28 sm:left-4 md:left-10 text-white"
      >
        <Sparkles size={24} className="sm:w-8 sm:h-8" />
      </motion.div>
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        className="absolute top-24 right-2 sm:top-28 sm:right-4 md:right-10 text-white"
      >
        <Sparkles size={24} className="sm:w-8 sm:h-8" />
      </motion.div>
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        className="absolute bottom-32 right-2 sm:bottom-40 sm:right-4 md:right-20 text-white"
      >
        <Sparkles size={22} className="sm:w-7 sm:h-7" />
      </motion.div>
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        className="absolute bottom-32 left-2 sm:bottom-40 sm:left-4 md:left-20 text-white"
      >
        <Sparkles size={22} className="sm:w-7 sm:h-7" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo above "We Create..." - Mobile only with animations */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1,
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="md:hidden mb-6"
          >
            <motion.img 
              src="/logo.png" 
              alt="GS Logo" 
              className="h-32 sm:h-36 w-auto mx-auto brightness-0 invert"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }
              }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 sm:mb-4 md:mb-6 text-logo tracking-tight leading-[1.1] sm:leading-tight"
          >
            We Create
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent relative mt-1"
            >
              Stunning Websites
              {/* Angular accent matching logo */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white transform rotate-45 opacity-80"></div>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-4 sm:mb-6 md:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-3 sm:px-4 md:px-0"
          >
            Transform your digital presence with our professional web development services. 
            Get a <span className="text-yellow-400 font-semibold">FREE DEMO</span> and see the magic happen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-3 sm:px-4 md:px-0"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
            >
              Obtenez Votre Démo Gratuite
              <ArrowRight 
                size={18} 
                className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" 
              />
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white rounded-full font-black text-base sm:text-lg hover:bg-white/10 backdrop-blur-sm transition-all text-logo relative inline-block text-center"
            >
              Voir Nos Réalisations
              {/* Small sparkle accent */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white transform rotate-45 opacity-60"></div>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mt-8 sm:mt-12 md:mt-16 max-w-2xl mx-auto px-2 sm:px-4 md:px-0"
          >
            {[
              { number: '100+', label: 'Sites Web Créés' },
              { number: '98%', label: 'Satisfaction Client' },
              { number: '24/7', label: 'Support Disponible' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-xs sm:text-sm md:text-base leading-tight px-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center"
      >
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 text-xs mb-2 font-medium tracking-wide"
        >
          Scroll Down
        </motion.p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1],
            times: [0, 0.5, 1]
          }}
          whileHover={{ 
            scale: 1.1,
            y: 0,
            transition: { duration: 0.3 }
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: [0.4, 0, 0.6, 1],
              times: [0, 0.5, 1]
            }}
            whileHover={{ 
              y: 0,
              transition: { duration: 0.3 }
            }}
            className="w-1 h-3 bg-white rounded-full mt-2 hover:bg-blue-200 transition-colors duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;