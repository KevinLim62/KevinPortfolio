'use client';

import { useScrollDirection } from '@/lib/CustomHook';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useMenuStore } from '@/lib/store/menuStore';

const SmoothWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { menuSection, scrollPosition, setMenuSection, setScrollPosition } = useMenuStore();
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        // setContentHeight(contentRef.current.scrollHeight);
        setContentHeight(window.innerHeight * 4);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [contentRef]);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      let updatedScrollYPosition = 0;
      switch (scrollDirection) {
        case 'up':
          updatedScrollYPosition = scrollPosition + windowHeight;
          break;
        case 'down':
          updatedScrollYPosition = scrollPosition - windowHeight;
          break;
        default:
          break;
      }
      if (Math.abs(updatedScrollYPosition) < contentHeight && updatedScrollYPosition <= 1) {
        setMenuSection(Math.abs(updatedScrollYPosition / windowHeight) + 1);
        setScrollPosition(-updatedScrollYPosition);
      }
    };

    window.addEventListener('scrollend', handleScroll);

    return () => {
      window.removeEventListener('scrollend', handleScroll);
    };
  });

  useEffect(() => {
    setScrollPosition(-scrollPosition);
  }, [menuSection]);

  // Intercept normal scroll
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (latest === 0) {
      setIsLoading(false);
    }
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  return (
    <>
      {typeof window !== 'undefined' && window.innerWidth >= 1024 ? (
        <>
          <div id='scroll-container' style={{ height: contentHeight }} />
          <motion.div className='w-screen fixed top-0 flex flex-col' ref={contentRef} animate={{ y: scrollPosition }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
            {children}
          </motion.div>
        </>
      ) : (
        <>
          {/* <div id='smooth-scroll' style={{ height: contentHeight }} />
          <motion.div className='w-screen fixed top-0 flex flex-col' ref={contentRef} style={{ y: isLoading ? 0 : y }}> */}
          {children}
          {/* </motion.div> */}
        </>
      )}
    </>
  );
};

export default SmoothWrapper;
