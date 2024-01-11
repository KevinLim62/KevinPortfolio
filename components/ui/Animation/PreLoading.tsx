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
    animate: {
      y: [100, 0, 100],
      transition: {
        times: [0, 0.5, 1],
        ease: 'easeInOut',
        duration: 2.5,
      },
    },
  };

  const containerVariants = {
    animate: {
      opacity: 0,
      y: '-100%',
    },
    transition: {
      delay: 3,
      ease: 'easeInOut',
      duration: 1,
    },
  };

  const exitAnimation = async () => {
    await animate('div', containerVariants.animate);
    handleLoading(true);
  };

  return (
    <section ref={scope}>
      <div className='z-50 w-screen h-screen bg-primary'>
        <div className='flex w-full h-full justify-center items-center'>
          <motion.span variants={textParent} initial='initial' animate='animate' className='text-4xl font-bold text-center'>
            {'Welcome to my portfolio'.split(' ').map((char, index) => (
              <div key={index} className='inline-block overflow-hidden'>
                <motion.span className='inline-block overflow-hidden' onAnimationComplete={exitAnimation} variants={textChildren}>
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
