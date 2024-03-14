'use client';

import AboutMe from './AboutMe';
import TechStacks from './TechStacks';

const About = () => {
  return (
    <section id='about' className='snap-start'>
      <div className='w-full h-screen bg-grid-white/[0.2] relative flex items-center justify-center'>
        {/* Radial gradient for the container to give a faded look */}
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white transition-transform [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)] lg:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <div className='flex flex-col h-screen lg:flex-row items-center justify-center gap-5 md:gap-20 lg:gap-[100px] mt-[50px] lg:mt-0 z-10'>
          <TechStacks />
          <AboutMe />
        </div>
      </div>
    </section>
  );
};

export default About;
