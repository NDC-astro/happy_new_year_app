'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Quote } from 'lucide-react';
import { getRandomQuote } from '@/lib/quotes';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [isRotating, setIsRotating] = useState(false);

  const generateNewQuote = () => {
    setIsRotating(true);
    setTimeout(() => {
      setQuote(getRandomQuote());
      setIsRotating(false);
    }, 300);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        className="glass-effect rounded-2xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Quote className="w-8 h-8 text-gold-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">
            Inspirational Quotes
          </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={quote.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-4 italic">
              "{quote.text}"
            </blockquote>
            <p className="text-silver-400 text-lg">— {quote.author}</p>
          </motion.div>
        </AnimatePresence>

        <motion.button
          onClick={generateNewQuote}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-yellow-400 rounded-full font-semibold text-slate-950 hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RefreshCw
            className={`w-5 h-5 ${isRotating ? 'animate-spin' : ''}`}
          />
          Generate New Quote
        </motion.button>
      </motion.div>
    </div>
  );
}