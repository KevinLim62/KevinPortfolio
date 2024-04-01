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
    <motion.div className='overflow-y-scroll rounded-lg w-[300px] h-[400px] md:w-[400px] lg:w-[450px] 2xl:w-[550px]' ref={ref} variants={variants} initial={false} animate={isInView ? 'animate' : 'initial'} transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}>
      <Card className='drop-shadow-md'>
        <CardHeader>
          <CardTitle className='text-md lg:text-xl 2xl:text-3xl font-bold'>About Me</CardTitle>
        </CardHeader>
        <CardContent className='text-sm lg:text-md 2xl:text-lg font-light space-y-5'>
          <CardDescription>
            I am a dynamic Full Stack Developer with a proven track record of driving innovation and delivering impactful solutions across various industries. With a solid foundation in software engineering and a passion for cutting-edge technologies, I excel in crafting responsive UI interfaces and
            robust backend systems.
          </CardDescription>
          <CardDescription>
            At Blockchain Solution Pte Ltd, I played a pivotal role in developing a comprehensive SaaS product for blockchain verification and authenticity, enhancing page loading speed by 40% and implementing engaging features like a loyalty system to drive client subscriptions. My experience
            extends to building a Customer Relationship Management Dashboard, providing brands with insightful analytics and intuitive CRUD functionality.
          </CardDescription>
          <CardDescription>
            As a Freelance Web Developer at Donjon Fauna Indie Game Studio, I built a high-performance single-page application, leveraging React and Typescript to optimize page loading speed and enhance user experience. Additionally, my tenure at Greatech Technology Berhad equipped me with expertise
            in PLC programming, motion control, and robot programming, where I led a successful R&D project and conducted valuable training sessions for internal engineers.
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutMe;
