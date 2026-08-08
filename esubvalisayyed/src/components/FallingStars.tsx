import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  xDrift: number;
  opacity: number;
}

export const FallingStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle density: ~50 particles per viewport
    const particleCount = Math.floor((width * height) / 25000) || 50;
    const particles: Particle[] = [];

    const createParticle = (initialY?: number): Particle => ({
      x: Math.random() * width,
      y: initialY !== undefined ? initialY : Math.random() * height,
      radius: Math.random() * 1.5 + 1, // 1 to 2.5px radius
      speed: Math.random() * 0.8 + 0.5, // 0.5 to 1.3 speed
      xDrift: (Math.random() - 0.5) * 0.3, // Subtle horizontal sway
      opacity: Math.random() * 0.35 + 0.25, // 0.25 to 0.6 opacity
    });

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speed;
        p.x += p.xDrift;

        // Reset particle when it falls off screen
        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.shadowBlur = p.radius * 2;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
};
