'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

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

const TechStacks = () => {
  const [selectedStack, setSelectedStack] = useState({
    icon: '',
    title: '',
  });

  return (
    <div className='grid grid-cols-4 grid-rows-3 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] relative'>
      <div className='col-span-2 border-[1px]'>
        <div className='flex flex-col h-full justify-center mx-4 lg:mx-10'>
          <div>My</div>
          <div>Tech Stacks</div>
          <div className={`flex items-center w-[50px] h-[50px] mt-2 gap-2 transition-all duration-200 ${selectedStack.icon && 'animate-[fadeInBottom_0.3s_ease-in-out]'}`}>
            {selectedStack.icon ? <Image alt='selectedStack' width={50} height={50} sizes='100vw' className='grayscale invert' src={selectedStack.icon} /> : <div className='w-full mt-auto border-b-2 border-white'></div>}
            {selectedStack.title}
          </div>
        </div>
      </div>
      {techStacks.map((el, index) => (
        <HoverCard key={el.id}>
          <HoverCardTrigger className='flex items-center border-[1px]'>
            <Image
              alt={el.title}
              width={50}
              height={50}
              sizes='100vw'
              className='mx-auto grayscale invert cursor-pointer'
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
          <HoverCardContent className='bg-foreground text-background border-transparent'>{el.hoverContent}</HoverCardContent>
        </HoverCard>
      ))}
      <div className='absolute -left-[12.5px] -top-[12.5px]'>
        <AiOutlinePlus size={25} />
      </div>
      <div className='absolute -right-[12.5px] -bottom-[12.5px]'>
        <AiOutlinePlus size={25} />
      </div>
    </div>
  );
};

export default TechStacks;
