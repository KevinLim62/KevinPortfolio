'use client';

import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const socialMediaList = [
  {
    id: '1',
    name: 'Github',
    icon: VscGithub,
    link: '/',
  },
  {
    id: '2',
    name: 'Linkedin',
    icon: FaLinkedin,
    link: '/',
  },
  {
    id: '3',
    name: 'Instagram',
    icon: LuInstagram,
    link: '/',
  },
];

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      className='md:absolute bottom-0 flex justify-center w-full h-[20vh] sm:h-[15vh] lg:h-[13vh] 2xl:h-[10vh] mb-5 md:mb-10 lg:mb-0 border-t-2 border-foreground'
      ref={ref}
      variants={variants}
      initial={false}
      animate={isInView ? 'animate' : 'initial'}
      transition={{ delay: 0.5, duration: 1, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className='flex flex-col lg:flex-row w-full gap-5 lg:gap-0 items-center justify-center mt-5 md:mt-0 lg:justify-between lg:mx-5'>
        <div className='text-sm lg:text-base text-center lg:text-left'>
          <div>Designed & Built by</div>
          <div>@ Kevin Lim Cher Yiong 2023</div>
        </div>
        <div className='flex gap-[25px]'>
          {socialMediaList.map((el, index) => (
            <div key={el.id} className='cursor-pointer'>
              <Button variant='ghost' className='px-2 hover:bg-transparent'>
                <el.icon className='text-foreground hover:scale-110' size={35}></el.icon>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
