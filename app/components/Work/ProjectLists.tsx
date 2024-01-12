'use client';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { useEffect, useRef, useState } from 'react';
import SingleProjectDialog from './SingleProjectDialog';
import { motion, useInView } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Link from 'next/link';

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  },
};

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

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

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const handleDialog = (id: string) => {
    if (window.innerWidth >= 1024) {
      const triggerElement = document.getElementById(`dialogTrigger${id}`);
      triggerElement && triggerElement.click();
    }
  };

  return (
    <>
      {windowWidth >= 1024 ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
            className='absolute inset-x-0 text-center top-[150px] md:top-[100px] lg:top-[40px] 2xl:top-[100px] text-button text-2xl 2xl:text-4xl font-bold'
          >
            My Work
          </motion.h1>
          <motion.div ref={ref} variants={variants} initial='hidden' animate={isInView ? 'visible' : 'hidden'} className='mt-[50px] grid grid-cols-3 grid-rows-6 lg:w-[830px] lg:h-[480px] 2xl:w-[1120px] 2xl:h-[650px] lg:gap-[20px]'>
            {listItems.map((el, index) => (
              <motion.div variants={children} key={el.id} className={`flex w-full h-full py-1 ${el.layout} transition-transform duration-200 -translate-x-[${carouselState * 100}%]`}>
                <Card className='flex flex-col justify-end w-[360px] cursor-pointer group drop-shadow-lg' onClick={() => handleDialog(el.id)}>
                  <div className=' transition-transform duration-200 lg:group-hover:-translate-y-7 2xl:group-hover:-translate-y-14'>
                    <CardHeader></CardHeader>
                    <CardContent></CardContent>
                    <CardFooter className='flex flex-col items-start space-y-1'>
                      <CardTitle className='text-xl lg:text-2xl 2xl:text-4xl font-bold'>{el.title}</CardTitle>
                      <CardDescription className='h-12 text-sm lg:text-base 2xl:text-md font-light text-ellipsis overflow-hidden'>{el.description}</CardDescription>
                    </CardFooter>
                  </div>
                </Card>
                <Dialog>
                  <DialogTrigger id={`dialogTrigger${el.id}`}></DialogTrigger>
                  <SingleProjectDialog id={el.id} title={el.title} description={el.description} link={el.link} />
                </Dialog>
              </motion.div>
            ))}
          </motion.div>
        </>
      ) : (
        <>
          <h1 className='text-center text-white text-2xl 2xl:text-4xl font-bold'>My Work</h1>
          <Carousel className='w-[290px] sm:w-[500px]'>
            <CarouselContent className=''>
              {listItems.map((el, index) => (
                <CarouselItem key={index} className=''>
                  <Card className='w-full h-[500px] cursor-pointer group drop-shadow-lg'>
                    <CardHeader>
                      <CardTitle className='text-xl lg:text-2xl 2xl:text-4xl font-bold'>{el.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className='text-sm lg:text-base 2xl:text-md font-light'>{el.description}</CardDescription>
                    </CardContent>
                    <CardFooter className='flex flex-col items-start space-y-1'>
                      <Link href={el.link} className='text-sm lg:text-md 2xl:text-lg font-light'>
                        Live Url
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
      )}
    </>
  );
};

export default ProjectLists;
