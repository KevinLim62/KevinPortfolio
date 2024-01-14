'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const techStacks = [
  {
    id: '1',
    title: 'React',
    icon: '/techstack/React.png',
    hoverContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '2',
    title: 'Next',
    icon: '/techstack/Nextjs.png',
    hoverContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '9',
    title: 'Tailwind',
    icon: '/techstack/Tailwind.png',
    hoverContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '3',
    title: 'Typescript',
    icon: '/techstack/Typescript.png',
    hoverContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '4',
    title: 'Nodejs',
    icon: '/techstack/Nodejs.png',
    hoverContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '5',
    title: 'Express',
    icon: '/techstack/Expressjs.png',
    hoverContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '6',
    title: 'Nestjs',
    icon: '/techstack/Nestjs.png',
    hoverContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '7',
    title: 'MongoDB',
    icon: '/techstack/MongoDB.png',
    hoverContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: '8',
    title: 'PostgreSQL',
    icon: '/techstack/PostgreSQL.png',
    hoverContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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

const TechStacks = () => {
  const [selectedStack, setSelectedStack] = useState({
    icon: '',
    title: '',
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

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

  return (
    <motion.div
      className='grid grid-cols-4 grid-rows-3 w-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] 2xl:w-[450px] 2xl:h-[450px] border-[1px] border-primary relative'
      ref={ref}
      variants={variants}
      initial={false}
      animate={isInView ? 'animate' : 'initial'}
      transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className='col-span-2 border-[1px] border-primary relative'>
        <div className='flex flex-col h-full justify-center mx-4 2xl:mx-10 text-sm lg:text-md 2xl:text-lg font-bold'>
          <div>My</div>
          <div>Tech Stacks</div>
          <AnimatePresence mode='wait'>
            {selectedStack.icon && (
              <motion.div className='absolute flex items-center w-[50px] h-[50px] mt-[50px] gap-2' variants={selectedStackVariants} initial='initial' animate='animate' exit='exit'>
                <Image alt='selectedStack' width={50} height={50} sizes='100vw' className='grayscale dark:invert' src={selectedStack.icon} />
                {selectedStack.title}
              </motion.div>
            )}
          </AnimatePresence>
          <div className='invisible w-[100px] h-[60px] border-b-2 '></div>
        </div>
      </div>
      {techStacks.map((el, index) => (
        <HoverCard key={el.id}>
          <HoverCardTrigger className='flex items-center border-[1px] border-primary bg-background'>
            <Image
              alt={el.title}
              width={50}
              height={50}
              sizes='100vw'
              className='mx-auto grayscale dark:invert cursor-pointer'
              onMouseOut={() =>
                setSelectedStack({
                  icon: '',
                  title: '',
                })
              }
              onMouseOver={() => setSelectedStack({ icon: el.icon, title: el.title })}
              src={el.icon}
            />
          </HoverCardTrigger>
          {/* <HoverCardContent className='bg-foreground text-background border-transparent'>{el.hoverContent}</HoverCardContent> */}
        </HoverCard>
      ))}
      <div className='absolute -left-[15px] -top-[15px] text-secondary'>
        <AiOutlinePlus size={30} />
      </div>
      <div className='absolute -right-[15px] -bottom-[15px] text-secondary'>
        <AiOutlinePlus size={30} />
      </div>
    </motion.div>
  );
};

export default TechStacks;
