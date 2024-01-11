'use client';

import { motion } from 'framer-motion';

const variants = {
  normal: {
    animate: {
      width: '10px',
      height: '10px',
      rotate: '45deg',
      backgroundColor: 'transparent',
      borderColor: '#FFF6E0',
      borderRadius: '0%',
    },
  },
  active: {
    animate: {
      width: '10px',
      height: '10px',
      rotate: '180deg',
      backgroundColor: '#FFF6E0',
      borderColor: 'transparent',
      borderRadius: '0%',
    },
  },
};

const SectionIcon = ({ isActive = 'normal' }: { isActive?: 'normal' | 'active' }) => {
  return <motion.div className='border-2' variants={variants[isActive]} initial={false} animate='animate'></motion.div>;
};

export default SectionIcon;
