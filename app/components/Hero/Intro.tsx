'use client';
import AnimatedText from '@/components/ui/Animation/AnimatedText';
import Typewriter from '@/components/ui/Animation/Typewriter';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

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

  return (
    <motion.div className='mx-auto w-[300px] md:w-[60%] lg:w-[450px] 2xl:w-[550px]' ref={ref} variants={variants} initial={false} animate={isInView ? 'animate' : 'initial'} transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}>
      <Card className=''>
        <CardHeader className='pb-0'>
          <CardTitle className='flex flex-col'>
            <AnimatedText className='mt-auto w-[250px] 2xl:w-[300px] text-xl lg:text-2xl 2xl:text-4xl font-bold' title='Hello, my name is Kevin Lim' />
            <Typewriter className='w-full text-xl lg:text-2xl 2xl:text-4xl font-bold' title='I am a Fullstack Developer' />
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-5'>
          <CardDescription className='text-sm lg:text-md 2xl:text-lg font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.</CardDescription>
          <CardDescription>
            <div className='flex w-[150px] relative group z-10'>
              <Button variant='outline' className='w-[150px] h-[50px] rounded-lg border-2 bg-secondary text-background border-foreground text-sm lg:text-md 2xl:text-lg font-bold'>
                Resume
              </Button>
              <div className='hidden z-[-10] lg:block absolute left-0 top-0 transition-transform delay-150 duration-200 group-hover:translate-x-[10px] group-hover:translate-y-[10px] w-[150px] h-[50px] rounded-xl border-2 bg-button border-background'></div>
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Intro;
