'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Navbar from '../Navbar';

const Hero = () => {
  return (
    <section id='home' className='h-screen snap-start'>
      <Navbar />
      <div className='flex flex-col lg:h-[90vh] lg:flex-row items-center justify-center lg:gap-[135px] mt-[50px] lg:mt-0'>
        <Card className='w-[400px] lg:w-[550px] border-transparent'>
          <CardHeader>
            <p>Hello, my name is</p>
            <CardTitle>Kevin Lim</CardTitle>
            <CardTitle
              className='relative w-max
            before:absolute before:inset-0 before:animate-typewriter
            before:bg-background
            after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
            after:bg-foreground'
            >
              I am a Fullstack Developer
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-5'>
            <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet.</CardDescription>
            <CardDescription>
              <Button variant='outline' className='border-white w-[150px] h-[50px] rounded-lg gap-1'>
                Resume
              </Button>
            </CardDescription>
          </CardContent>
        </Card>
        <div className='w-[300px] lg:w-[375px] h-[400px] lg:h-[500px] relative group'>
          <Image alt='profile' fill className='z-10 object-cover absolute transition-transform delay-150 duration-200 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]' src='https://github.com/shadcn.png' />
          <div className='hidden lg:block absolute left-[20px] top-[20px] transition-transform delay-150 duration-200 group-hover:translate-x-[10px] group-hover:translate-y-[10px] w-[375px] h-[500px] border-2 border-white'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
