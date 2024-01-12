'use client';

import Lotties from 'react-lottie';
import animationData from '@/components/lotties/scroll-arrow.json';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const MouseScroll = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const defaultOptions = {
    loop: true,
    autoplay: isInView,
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
  };

  return (
    <motion.div className='cursor-none' ref={ref} variants={variants} initial={false} animate={isInView ? 'animate' : 'initial'} transition={{ delay: 5, duration: 2.5, ease: [0.6, 0.01, 0.05, 0.95] }}>
      <Lotties options={defaultOptions} width={45} />
    </motion.div>
  );
};

export default MouseScroll;
