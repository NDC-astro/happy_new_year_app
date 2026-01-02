'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731', '#5f27cd', '#00d2d3'];

  const createFirework = (x: number, y: number) => {
    const newParticles: Particle[] = [];
    const particleCount = 80;
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 2 + Math.random() * 4;
      
      newParticles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 1,
        maxLife: 60 + Math.random() * 30,
        color,
        size: 2 + Math.random() * 2,
      });
    }

    setParticles(prev => [...prev, ...newParticles]);
  };

  const autoFirework = () => {
    if (!canvasRef.current) return;
    
    const x = Math.random() * canvasRef.current.width;
    const y = Math.random() * (canvasRef.current.height * 0.6);
    createFirework(x, y);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Click handler for manual fireworks
    const handleClick = (e: MouseEvent) => {
      createFirework(e.clientX, e.clientY);
    };
    canvas.addEventListener('click', handleClick);

    // Auto-launch fireworks
    const autoInterval = setInterval(autoFirework, 2000);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles(prev => {
        const updated = prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1, // Gravity
            vx: p.vx * 0.99, // Air resistance
            life: p.life + 1,
          }))
          .filter(p => p.life < p.maxLife);

        // Draw particles
        updated.forEach(p => {
          const alpha = 1 - (p.life / p.maxLife);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.globalAlpha = 1;
        return updated;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Initial burst
    setTimeout(() => {
      createFirework(canvas.width / 2, canvas.height / 3);
    }, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', handleClick);
      clearInterval(autoInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto cursor-pointer z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}