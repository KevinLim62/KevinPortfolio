'use client';

import Intro from './Intro';
import ProfilePic from './ProfilePic';

const Hero = () => {
  return (
    <section id='home' className='snap-start'>
      <div className='flex flex-col h-screen lg:flex-row items-center justify-center gap-5 md:gap-20 lg:gap-0'>
        <div className='w-full lg:w-[60%] order-2 lg:order-1'>
          <Intro />
        </div>
        <div className='w-full md:w-[60%] order-1 lg:order-2 lg:w-[40%]'>
          <ProfilePic />
        </div>
      </div>
    </section>
  );
};

export default Hero;
