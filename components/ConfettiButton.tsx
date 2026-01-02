'use client';

import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { PartyPopper } from 'lucide-react';

export default function ConfettiButton() {
  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    // Multiple bursts for dramatic effect
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    // Gold and silver confetti
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffd700', '#ffcc00', '#c0c0c0'],
        zIndex: 9999,
      });
      
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffd700', '#ffcc00', '#c0c0c0'],
        zIndex: 9999,
      });
    }, 200);
  };

  return (
    <motion.button
      onClick={triggerConfetti}
      className="relative group px-8 py-4 bg-gradient-to-r from-gold-500 to-yellow-400 rounded-full font-bold text-lg text-slate-950 shadow-2xl overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <span className="relative flex items-center gap-2">
        <PartyPopper className="w-6 h-6" />
        Celebrate with Confetti!
      </span>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            '0 0 20px rgba(255, 215, 0, 0.5)',
            '0 0 40px rgba(255, 215, 0, 0.8)',
            '0 0 20px rgba(255, 215, 0, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  );
}