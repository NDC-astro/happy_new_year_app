'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create a simple celebratory audio context
    // Note: This uses the Web Audio API to generate tones
    // In production, you'd want to use an actual audio file
    
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    
    if (!AudioContext) return;

    const audioContext = new AudioContext();
    
    const playTone = (frequency: number, duration: number, delay: number) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime + delay);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + delay + 0.01);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + delay + duration);
      
      oscillator.start(audioContext.currentTime + delay);
      oscillator.stop(audioContext.currentTime + delay + duration);
    };

    if (isPlaying) {
      // Play a simple celebratory melody loop
      const melody = [
        { freq: 523.25, duration: 0.2, delay: 0 },    // C5
        { freq: 659.25, duration: 0.2, delay: 0.2 },  // E5
        { freq: 783.99, duration: 0.2, delay: 0.4 },  // G5
        { freq: 1046.50, duration: 0.4, delay: 0.6 }, // C6
      ];

      const playMelody = () => {
        melody.forEach(note => {
          playTone(note.freq, note.duration, note.delay);
        });
      };

      playMelody();
      const interval = setInterval(playMelody, 2000);

      return () => {
        clearInterval(interval);
        audioContext.close();
      };
    }

    return () => {
      audioContext.close();
    };
  }, [isPlaying]);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={() => setIsPlaying(!isPlaying)}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        className="relative p-4 glass-effect rounded-full hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
            >
              <Volume2 className="w-6 h-6 text-gold-400" />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
            >
              <VolumeX className="w-6 h-6 text-silver-400" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-2 glass-effect rounded-lg text-sm text-white"
            >
              {isPlaying ? 'Music On' : 'Turn on music'}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse animation when playing */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gold-400"
            animate={{
              scale: [1, 1.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}
      </motion.button>
    </div>
  );
}