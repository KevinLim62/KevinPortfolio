import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Intro from './components/Hero/Intro';
import ProfilePic from './components/Hero/ProfilePic';

export default function Home() {
  return (
    <section id='hero'>
      <div className='flex flex-col h-screen lg:flex-row items-center justify-center lg:gap-[67px] 2xl:gap-[135px] mt-[50px] lg:mt-0'>
        <Intro />
        <ProfilePic />
      </div>
    </section>
  );
}
