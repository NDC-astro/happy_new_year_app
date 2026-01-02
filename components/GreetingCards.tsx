'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'Golden Dreams',
    message: 'May 2026 bring you golden opportunities and sparkling success!',
    gradient: 'from-yellow-400 via-gold-500 to-yellow-600',
    emoji: '✨',
  },
  {
    id: 2,
    title: 'Silver Wishes',
    message: 'Wishing you a year filled with precious moments and silver linings!',
    gradient: 'from-gray-300 via-silver-400 to-gray-500',
    emoji: '🌙',
  },
  {
    id: 3,
    title: 'Colorful Journey',
    message: 'Here\'s to a vibrant 2026 full of color, joy, and adventure!',
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
    emoji: '🎨',
  },
  {
    id: 4,
    title: 'Fresh Start',
    message: 'New year, fresh beginnings! May 2026 be your best chapter yet!',
    gradient: 'from-green-400 via-teal-500 to-blue-500',
    emoji: '🌱',
  },
  {
    id: 5,
    title: 'Endless Possibilities',
    message: 'The future is bright! Embrace all the possibilities 2026 has to offer!',
    gradient: 'from-orange-400 via-red-500 to-pink-500',
    emoji: '🚀',
  },
  {
    id: 6,
    title: 'Peace & Joy',
    message: 'May your 2026 overflow with peace, love, and boundless joy!',
    gradient: 'from-blue-400 via-cyan-500 to-teal-500',
    emoji: '☮️',
  },
];

export default function GreetingCards() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Mail className="w-8 h-8 text-gold-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">
            Greeting Cards
          </h2>
        </div>

        <p className="text-center text-silver-400 mb-10 max-w-2xl mx-auto">
          Choose your favorite card design to share with friends and family!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group cursor-pointer"
            >
              <div className={`relative h-80 rounded-2xl bg-gradient-to-br ${card.gradient} p-8 shadow-xl overflow-hidden`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {card.emoji}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {card.title}
                    </h3>
                  </div>
                  
                  <div>
                    <p className="text-white/90 text-lg leading-relaxed mb-4">
                      {card.message}
                    </p>
                    <div className="text-white/80 font-semibold">
                      Happy New Year 2026! 🎉
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}