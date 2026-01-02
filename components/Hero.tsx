'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react'; // Add this import

export default function Hero() {
    const [sparklePositions, setSparklePositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Only runs in the browser
    const positions = [...Array(20)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setSparklePositions(positions);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Animated Sparkles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          > */}

          {sparklePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: pos.x, top: pos.y }} // Use style for dynamic positioning
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="text-gold-400" size={24} />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Year Label */}
        <motion.div
          className="mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-gold-500 to-yellow-400 rounded-full text-slate-950 font-bold text-lg">
            Welcome to
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
        >
          <span className="block text-gradient animate-glow">
            Happy New Year
          </span>
          <motion.span
            className="block text-gradient-silver mt-2"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            2026!
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-silver-400 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          May this year bring you joy, success, and endless opportunities! 🎊
        </motion.p>

        {/* Floating Emojis */}
        <motion.div
          className="flex justify-center gap-6 text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {['🎉', '🎊', '🥳', '✨', '🍾'].map((emoji, i) => (
            <motion.span
              key={i}
              className="inline-block"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gold-400 rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}