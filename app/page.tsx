import Hero from '@/components/Hero';
import Fireworks from '@/components/Fireworks';
import ConfettiButton from '@/components/ConfettiButton';
import QuoteGenerator from '@/components/QuoteGenerator';
import GreetingCards from '@/components/GreetingCards';
import PersonalizedGreeting from '@/components/PersonalizedGreeting';
import Snowfall from '@/components/Snowfall';
import MusicToggle from '@/components/MusicToggle';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Effects */}
      <ParticlesBackground />
      <Snowfall />
      
      {/* Fireworks Layer */}
      <Fireworks />
      
      {/* Music Toggle */}
      <MusicToggle />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* Confetti Button Section */}
        <section className="py-12 flex justify-center">
          <ConfettiButton />
        </section>
        
        {/* Quote Generator */}
        <section className="py-12 px-4">
          <QuoteGenerator />
        </section>
        
        {/* Personalized Greeting */}
        <section className="py-12 px-4">
          <PersonalizedGreeting />
        </section>
        
        {/* Greeting Cards */}
        <section className="py-12 px-4">
          <GreetingCards />
        </section>
        
        {/* Footer */}
        <footer className="py-8 text-center text-silver-400">
          <p className="text-sm">
            Made with ❤️ for an amazing 2026 | © 2026 All rights reserved
          </p>
        </footer>
      </div>
    </main>
  );
}