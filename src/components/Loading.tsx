import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-700 flex items-center justify-center z-50"
    >
      {/* Background pattern matching hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
      
      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with professional animations */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: 1,
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="mb-8"
        >
          <motion.img 
            src="/logo.png" 
            alt="Glowsite Agency Logo" 
            className="h-24 w-auto brightness-0 invert"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white text-2xl font-bold mb-4 text-logo"
        >
          Glowsite Agency
        </motion.h2>

        {/* Loading dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Loading progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 w-64 h-1 bg-white/20 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-white to-blue-200 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 2
          }}
          className="text-white/70 text-sm mt-4 font-medium"
        >
          Chargement en cours...
        </motion.p>
      </div>

      {/* Floating sparkles */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full opacity-60"
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${30 + (index * 10)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loading;
