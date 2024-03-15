'use client';

import Intro from './Intro';
import ProfilePic from './ProfilePic';
import { Suspense } from 'react';
import React from 'react';
const BackgroundSphere = React.lazy(() => import('@/components/ui/Animation/BackgroundSphere'));

const Hero = () => {
  return (
    <section id='home' className='snap-start'>
      <div className='flex flex-col h-screen lg:flex-row items-center justify-center gap-5 md:gap-20 lg:gap-0 mt-[50px] lg:mt-0 relative'>
        <div className='w-full lg:w-[60%] z-10'>
          <Intro />
        </div>
        <div className='w-full md:w-[60%] lg:w-[40%] z-10'>
          <ProfilePic />
        </div>
        <Suspense fallback={null}>
          <BackgroundSphere />
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
