'use client';

import { motion, useAnimate } from 'framer-motion';

const PreLoading = ({ handleLoading }: { handleLoading: (loadingDone: boolean) => void }) => {
  const [scope, animate] = useAnimate();

  const textParent = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const textChildren = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: 1,
      },
    },
  };

  const containerVariants = {
    animate: {
      x: '-100%',
    },
    transition: {
      ease: 'easeInOut',
      duration: 2,
    },
  };

  const exitAnimation = async () => {
    await animate('div', { x: '-100%' }, { ease: 'easeInOut', duration: 1 });
    handleLoading(true);
  };

  return (
    <section ref={scope}>
      <div className='z-50 w-screen h-screen bg-primary'>
        <div className='flex w-full h-full justify-center items-center'>
          <motion.span variants={textParent} initial='initial' animate='animate' className='text-4xl font-bold text-center' onAnimationComplete={exitAnimation}>
            {'Welcome to my portfolio'.split(' ').map((char, index) => (
              <div key={index} className='inline-block overflow-hidden'>
                <motion.span className='inline-block overflow-hidden' variants={textChildren}>
                  {char}&nbsp;
                </motion.span>
              </div>
            ))}
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default PreLoading;
