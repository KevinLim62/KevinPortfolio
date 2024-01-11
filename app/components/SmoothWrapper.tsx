'use client';

import { NavigationMenu } from '@/components/ui/navigation-menu';
import { useScrollDirection } from '@/lib/CustomHook';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { menuItem } from './Navigation/Navbar';
import SectionIcon from '@/components/ui/Animation/SectionIcon';
import { useMenuStore } from '@/lib/store/menuStore';
import FloatingNavbar from './Navigation/FloatingNavbar';

const variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 100,
  },
};

const SmoothWrapper = ({ children }: { children: React.ReactNode }) => {
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
        <>{children}</>
      )}
    </>
  );
};

export default SmoothWrapper;
