'use client';

import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import React from 'react';
import { motion } from 'framer-motion';

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

const Footer = () => {
  return (
    <React.Fragment>
      <div className='flex justify-center h-[15vh] 2xl:h-[20vh] mt-[50px] lg:mt-0 border-t-2 border-white'>
        <div className='flex flex-col lg:flex-row w-[700px] gap-2 lg:gap-0 items-center justify-center lg:justify-between'>
          <motion.div className='text-sm text-muted-foreground' initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div>Designed & Built by</div>
            <div>@ Kevin Lim Cher Yiong 2023</div>
          </motion.div>
          <motion.div className='flex gap-[12.5px] lg:gap-[25px]' initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {socialMediaList.map((el, index) => (
              <div key={el.id} className='cursor-pointer'>
                <Button variant='ghost' className='px-2'>
                  <el.icon size={30}></el.icon>
                </Button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
