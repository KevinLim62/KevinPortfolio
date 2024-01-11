import { useState, useRef, useEffect } from 'react';

export function useScrollDirection() {
  const THRESHOLD = 0;
  const [scrollDirection, setScrollDirection] = useState<string>('up');

  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.scrollY;

    // function to run on scroll
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up';
        setScrollDirection(newScrollDirection);
        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]); // run when scroll direction changes

  return scrollDirection;
}
