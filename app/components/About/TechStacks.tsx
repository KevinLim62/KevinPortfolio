'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { InfiniteMovingElement } from '@/components/ui/Animation/InfiniteMovingElement';

export const techStacks = [
  {
    id: '1',
    title: 'React',
    icon: '/techstack/React.png',
    customStyle: 'lg:rotate-[20deg] lg:-translate-x-10 lg:translate-y-0',
  },
  {
    id: '2',
    title: 'Next',
    icon: '/techstack/Nextjs.png',
    customStyle: 'lg:rotate-[90deg] lg:translate-x-10 lg:translate-y-10',
  },
  {
    id: '9',
    title: 'Tailwind',
    icon: '/techstack/Tailwind.png',
    customStyle: 'lg:rotate-[45deg] lg:translate-x-30 lg:-translate-y-10',
  },
  {
    id: '3',
    title: 'Typescript',
    icon: '/techstack/Typescript.png',
    customStyle: 'lg:rotate-[30deg] lg:translate-x-0 lg:translate-y-10',
  },
  {
    id: '4',
    title: 'Nodejs',
    icon: '/techstack/Nodejs.png',
    customStyle: 'lg:rotate-[65deg] lg:translate-x-0 lg:translate-y-0',
  },
  {
    id: '5',
    title: 'Express',
    icon: '/techstack/Expressjs.png',
    customStyle: 'lg:rotate-[70deg] lg:translate-x-0 lg:translate-y-10',
  },
  {
    id: '6',
    title: 'Nestjs',
    icon: '/techstack/Nestjs.png',
    customStyle: 'lg:rotate-[35deg] lg:translate-x-0 lg:translate-y-0',
  },
  {
    id: '7',
    title: 'MongoDB',
    icon: '/techstack/MongoDB.png',
    customStyle: 'lg:rotate-[15deg] lg:translate-x-10 lg:translate-y-10',
  },
  {
    id: '8',
    title: 'PostgreSQL',
    icon: '/techstack/PostgreSQL.png',
    customStyle: 'lg:rotate-[0deg] lg:translate-x-20 lg:translate-y-10',
  },
];

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const selectedStackVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};

const TechStacks = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedStack, setSelectedStack] = useState({
    id: '',
    icon: '',
    title: '',
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div>
      <motion.div className='text-xl lg:text-2xl 2xl:text-4xl font-bold text-center lg:text-left' ref={ref} variants={variants} initial={false} animate={isInView ? 'animate' : 'initial'} transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}>
        <div>My</div>
        <div>Tech Stacks</div>
      </motion.div>
      {windowWidth > 1024 ? (
        // Browser view: Scatter grid
        <motion.div
          className='grid grid-cols-4 grid-rows-3 w-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] 2xl:w-[450px] 2xl:h-[450px] relative'
          ref={ref}
          variants={variants}
          initial={false}
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className='col-span-2 relative'>
            <div className='flex flex-col h-full justify-center text-sm lg:text-md 2xl:text-lg font-bold'>
              <AnimatePresence mode='wait'>
                {selectedStack.icon && (
                  <motion.div className='flex items-center gap-2' variants={selectedStackVariants} initial='initial' animate='animate' exit='exit'>
                    <Image alt='selectedStack' width={50} height={50} sizes='100vw' className='' src={selectedStack.icon} />
                    {selectedStack.title}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {techStacks.map((el, index) => (
            <HoverCard key={el.id}>
              <HoverCardTrigger className='flex items-center'>
                <Image
                  alt={el.title}
                  width={50}
                  height={50}
                  sizes='100vw'
                  className={`mx-auto cursor-pointer ${el.customStyle}`}
                  onMouseOut={() =>
                    setSelectedStack({
                      id: '',
                      icon: '',
                      title: '',
                    })
                  }
                  onMouseOver={() => setSelectedStack({ icon: el.icon, title: el.title, id: el.id })}
                  src={el.icon}
                />
              </HoverCardTrigger>
            </HoverCard>
          ))}
        </motion.div>
      ) : (
        //Browser view: Infinite moving element
        <div className='w-screen rounded-md flex flex-col antialiased items-center justify-center relative overflow-x-hidden'>
          <InfiniteMovingElement items={techStacks} direction='right' speed='fast' />
        </div>
      )}
    </div>
  );
};

export default TechStacks;
