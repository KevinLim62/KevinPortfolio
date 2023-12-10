'use client';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCallback, useState } from 'react';
import SingleProjectDialog from './SingleProjectDialog';
import { Button } from '@/components/ui/button';

const listItems = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.',
    layout: 'row-span-4',
    link: '/',
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.',
    layout: 'col-start-1 row-start-5 row-span-2',
    link: '/',
  },
  {
    id: '3',
    title: 'Title 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.',
    layout: 'col-start-2 row-start-1 row-span-3',
    link: '/',
  },
  {
    id: '4',
    title: 'Title 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.',
    layout: 'col-start-2 row-start-4 row-span-3',
    link: '/',
  },
  {
    id: '5',
    title: 'Title 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.',
    layout: 'col-start-3 row-span-6',
    link: '/',
  },
];

const ProjectLists = () => {
  const [carouselState, setCarouselState] = useState(0);

  const handleForward = () => {
    if (carouselState === listItems.length - 1) {
      setCarouselState(0);
    } else {
      setCarouselState((prev) => prev + 1);
    }
  };

  const handleBackward = () => {
    if (carouselState === 0) {
      setCarouselState(listItems.length - 1);
    } else {
      setCarouselState((prev) => prev - 1);
    }
  };

  const handleDialog = (id: string) => {
    if (window.innerWidth >= 1024) {
      const triggerElement = document.getElementById(`dialogTrigger${id}`);
      triggerElement && triggerElement.click();
    }
  };

  return (
    <>
      <div className='absolute z-10 inset-x-0 inset-y-[50%] lg:hidden'>
        <div className='flex w-full justify-between'>
          <IoIosArrowBack size={30} onClick={handleBackward} className='text-[#D9D9D9] hover:text-white hover:scale-150 transition-all duration-75' />
          <IoIosArrowForward size={30} onClick={handleForward} className='text-[#D9D9D9] hover:text-white hover:scale-150 transition-all duration-75' />
        </div>
      </div>
      <div className='flex mt-[50px] lg:mt-0 w-[360px] h-[400px] overflow-hidden lg:grid lg:grid-cols-3 lg:grid-rows-6 lg:w-[1120px] lg:h-[650px] lg:gap-[20px]'>
        {listItems.map((el, index) => (
          <div key={el.id} className={`flex w-full h-full ${el.layout} transition-transform duration-200 -translate-x-[${carouselState * 100}%]`}>
            <Card className='flex flex-col justify-end bg-white text-black w-[360px] cursor-pointer group' onClick={() => handleDialog(el.id)}>
              <div className=' transition-transform duration-200 lg:group-hover:-translate-y-14'>
                <CardHeader></CardHeader>
                <CardContent></CardContent>
                <CardFooter className='flex flex-col items-start space-y-1'>
                  <CardTitle>{el.title}</CardTitle>
                  <CardDescription className='h-10 text-ellipsis overflow-hidden'>{el.description}</CardDescription>
                </CardFooter>
              </div>
            </Card>
            <Dialog>
              <DialogTrigger id={`dialogTrigger${el.id}`}></DialogTrigger>
              <SingleProjectDialog id={el.id} title={el.title} description={el.description} link={el.link} />
            </Dialog>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectLists;
