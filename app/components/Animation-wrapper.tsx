'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <motion.div variants={variants} initial='hidden' animate='visible' transition={{ duration: 0.5 }}>
        {children}
        {/* <motion.div className='absolute top-0 left-0 w-full h-screen bg-white origin-bottom z-10' initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div>
        <motion.div className='absolute top-0 left-0 w-full h-screen bg-white origin-top z-10' initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
