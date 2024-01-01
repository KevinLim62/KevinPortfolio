'use client';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <motion.div className='w-[400px] 2xl:w-[550px]' initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Card className='border-transparent'>
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
    </motion.div>
  );
};

export default Intro;
