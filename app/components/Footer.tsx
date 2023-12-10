'use client';

import { VscGithub } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';
import { Button } from '@/components/ui/button';

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
    <section className='flex justify-center h-[20vh] mt-[50px] lg:mt-0 border-t-2 border-white'>
      <div className='flex flex-col lg:flex-row w-[700px] gap-2 lg:gap-0 items-center justify-center lg:justify-between'>
        <div className='text-sm text-muted-foreground'>
          <div>Designed & Built by</div>
          <div>@ Kevin Lim Cher Yiong 2023</div>
        </div>
        <div className='flex gap-[12.5px] lg:gap-[25px]'>
          {socialMediaList.map((el, index) => (
            <div key={el.id} className='cursor-pointer'>
              <Button variant='ghost' className='px-2'>
                <el.icon size={30}></el.icon>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
