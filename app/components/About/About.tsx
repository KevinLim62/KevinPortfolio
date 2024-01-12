'use client';

import AboutMe from './AboutMe';
import TechStacks from './TechStacks';

const About = () => {
  return (
    <section id='about' className='snap-start'>
      <div className='flex flex-col h-screen lg:flex-row items-center justify-center gap-5 md:gap-20 lg:gap-[100px] mt-[50px] lg:mt-0'>
        <TechStacks />
        <AboutMe />
      </div>
    </section>
  );
};

export default About;
