'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

type TypewriterProps = {
  title: string;
  className?: string;
};

const Typewriter: React.FC<TypewriterProps> = ({ title, className }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => title.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, title.length, {
      type: 'tween',
      duration: 2.5,
      delay: 3,
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 5,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, []);

  return (
    <span className={className}>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
};

export default Typewriter;

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      delay: 1.5,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const CursorBlinker = () => {
  return <motion.div variants={cursorVariants} animate='blinking' className='inline-block ml-1 h-[26px] lg:h-[30px] 2xl:h-[38px] w-1 translate-y-1 bg-foreground' />;
};
