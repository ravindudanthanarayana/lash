import React, { useEffect, useRef, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export const AnimatedCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const target = useRef<CursorPosition>({ x: 0, y: 0 });
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateTarget = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateTarget);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateTarget);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const animate = () => {
      setPosition(prev => {
        const next = {
          x: lerp(prev.x, target.current.x, 0.18),
          y: lerp(prev.y, target.current.y, 0.18),
        };
        return next;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="relative">
        {/* Simple circle cursor */}
        <div className="w-6 h-6 bg-white/50 rounded-full border-2 border-blue-400/50"></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-30 animate-ping"></div>
      </div>
    </div>
  );
}; 