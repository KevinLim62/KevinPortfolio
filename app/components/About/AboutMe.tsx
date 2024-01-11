'use client';

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutMe = () => {
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
    <motion.div className='overflow-y-scroll rounded-lg h-[350px] md:h-full md:w-[400px] lg:h-fit lg:w-[450px] 2xl:w-[550px]' ref={ref} variants={variants} initial={false} animate={isInView ? 'animate' : 'initial'} transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}>
      <Card className=''>
        <CardHeader>
          <CardTitle className='text-md lg:text-xl 2xl:text-3xl font-bold'>About Me</CardTitle>
        </CardHeader>
        <CardContent className='text-sm lg:text-md 2xl:text-lg font-light space-y-5'>
          <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.</CardDescription>
          <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.</CardDescription>
          <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutMe;
