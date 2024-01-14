'use client';

import Lotties from 'react-lottie';
import animationData from '@/components/lotties/scroll-arrow.json';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useMenuStore } from '@/lib/store/menuStore';

const MouseScroll = () => {
  const { menuSection } = useMenuStore();
  const ref = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const variants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <AnimatePresence>
      {menuSection === 1 && (
        <motion.div className='cursor-none' ref={ref} variants={variants} initial='initial' animate='animate' exit='exit' transition={{ delay: 3.5, duration: 2.5, ease: [0.6, 0.01, 0.05, 0.95] }}>
          <Lotties options={defaultOptions} width={45} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MouseScroll;
