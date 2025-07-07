import { useEffect } from 'react';

export const useScrollBoundary = () => {
  useEffect(() => {
    let lastTouchY = 0;

    const handleWheel = (e: WheelEvent) => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      // Check if we're at the bottom of the page and trying to scroll down
      if (scrollTop + windowHeight >= documentHeight && e.deltaY > 0) {
        e.preventDefault();
      }
      
      // Check if we're at the top of the page and trying to scroll up
      if (scrollTop <= 0 && e.deltaY < 0) {
        e.preventDefault();
      }
    };

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

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      // Remove event listeners
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
}; 