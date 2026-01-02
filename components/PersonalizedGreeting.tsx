'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Copy, Share2, Check } from 'lucide-react';
import { copyToClipboard, shareContent } from '@/lib/utils';

export default function PersonalizedGreeting() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const generateGreeting = () => {
    if (!name.trim()) return;
    
    const greetings = [
      `🎉 Happy New Year 2026, ${name}! May this year bring you endless joy and success!`,
      `✨ Wishing you an amazing 2026, ${name}! Let's make it unforgettable!`,
      `🥳 ${name}, here's to a fantastic 2026 filled with dreams come true!`,
      `🎊 Cheers to you, ${name}! May 2026 be your best year yet!`,
      `🌟 ${name}, welcome to 2026! May every day be filled with happiness and adventure!`,
      `🍾 Happy New Year, ${name}! May 2026 overflow with blessings and opportunities!`,
    ];
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting);
    setCopied(false);
    setShared(false);
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(greeting);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const result = await shareContent('New Year 2026 Greeting', greeting);
    if (result.success) {
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    } else {
      // Fallback to copy
      handleCopy();
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="glass-effect rounded-2xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <User className="w-8 h-8 text-gold-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">
            Personalized Greeting
          </h2>
        </div>

        <p className="text-silver-400 mb-6">
          Create a custom New Year message for yourself or someone special!
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-2 font-semibold">
              Enter a name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && generateGreeting()}
              placeholder="e.g., Sarah"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-silver-400 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all"
            />
          </div>

          <motion.button
            onClick={generateGreeting}
            disabled={!name.trim()}
            className="w-full px-6 py-3 bg-gradient-to-r from-gold-500 to-yellow-400 rounded-full font-semibold text-slate-950 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
            whileHover={{ scale: name.trim() ? 1.02 : 1 }}
            whileTap={{ scale: name.trim() ? 0.98 : 1 }}
          >
            Generate Greeting
          </motion.button>

          <AnimatePresence>
            {greeting && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <div className="p-6 bg-gradient-to-br from-gold-500/20 to-yellow-400/20 border border-gold-400/30 rounded-lg">
                  <p className="text-xl md:text-2xl text-white font-medium">
                    {greeting}
                  </p>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copy
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    onClick={handleShare}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {shared ? (
                      <>
                        <Check className="w-5 h-5" />
                        Shared!
                      </>
                    ) : (
                      <>
                        <Share2 className="w-5 h-5" />
                        Share
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}