'use client';

import ProjectLists from './ProjectLists';

const Work = () => {
  return (
    <section id='work' className='flex flex-col mt-[100px] lg:mt-0 items-center justify-center h-screen lg:gap-[20px] relative snap-start'>
      <h1 className='text-2xl font-semibold leading-none tracking-tight'>Showcase of my works</h1>
      <ProjectLists />
    </section>
  );
};

export default Work;
