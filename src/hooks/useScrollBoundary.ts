import { useEffect } from 'react';

export const useScrollBoundary = () => {
  useEffect(() => {
    let lastTouchY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Scrolling up
      if (touchY > lastTouchY && scrollTop <= 0) {
        e.preventDefault();
      }
      
      // Scrolling down
      if (touchY < lastTouchY && scrollTop + windowHeight >= documentHeight) {
        e.preventDefault();
      }

      lastTouchY = touchY;
    };

    // Only add touch event listeners for mobile devices
    if ('ontouchstart' in window) {
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      // Remove event listeners
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
}; 