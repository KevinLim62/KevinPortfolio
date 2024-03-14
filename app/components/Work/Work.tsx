'use client';

import ProjectLists from './ProjectLists';

const Work = () => {
  return (
    <section id='work' className='snap-start'>
      <div className='flex flex-col h-screen items-center justify-center gap-5 md:pb-[100px] md:gap-20 lg:pb-0 lg:gap-0 mt-[50px] lg:mt-0 relative'>
        <ProjectLists />
      </div>
    </section>
  );
};

export default Work;
