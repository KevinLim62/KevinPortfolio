'use client';

import { motion } from 'framer-motion';

type AnimatedTextProps = {
  title: string;
  className?: string;
};

const textParent = {
  animate: {
    transition: {
      delay: 3,
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const textChildren = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ title, className }) => {
  return (
    <motion.span className={className} variants={textParent}>
      {title.split(' ').map((char, index) => (
        <div key={index} className='inline-block overflow-hidden'>
          <motion.span className='inline-block overflow-hidden' variants={textChildren}>
            {char}&nbsp;
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
