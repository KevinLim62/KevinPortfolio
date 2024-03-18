'use client';

import { Button } from '@/components/ui/button';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@radix-ui/react-label';
import { GiHamburgerMenu } from 'react-icons/gi';
import { menuItem } from './Navbar';
import ThemeToggle from '../ThemeToggle';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Chatbox from '../Chatbox/Chatbox';

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const MobileNav = () => {
  const handleNavigate = (title: string) => {
    const section = document.getElementById(title);
    section && section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <motion.div className='z-20 fixed top-0 w-screen h-[7vh] lg:hidden backdrop-blur-sm bg-primary/10 border-foreground/20 border-b-[1px]' variants={variants} initial='initial' animate='animate' transition={{ delay: 4, duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}>
            <div className='mx-2 h-full flex flex-row justify-between items-center'>
              <Avatar className='flex items-center justify-center'>
                <AvatarFallback className='bg-primary text-foreground text-md font-bold w-[35px] h-[35px]'>KL</AvatarFallback>
              </Avatar>
              <Button variant='ghost' className='hover:bg-transparent'>
                <GiHamburgerMenu size={20} className='text-foreground' />
              </Button>
            </div>
          </motion.div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='mb-5'>
            <SheetTitle className='text-center'>Menu</SheetTitle>
          </SheetHeader>
          <div className='flex flex-col w-full h-full justify-between p-10'>
            {menuItem.map((el) => (
              <div key={el.id} className='mx-auto items-center cursor-pointer py-2'>
                <SheetClose asChild>
                  <Label htmlFor='name' onClick={() => handleNavigate(el.title.toLowerCase())} className={navigationMenuTriggerStyle()}>
                    {el.title}
                  </Label>
                </SheetClose>
              </div>
            ))}
            <motion.div className='flex flex-row items-center justify-center w-fit mx-auto rounded-full bg-primary cursor-pointer mt-auto space-x-5 p-3' whileHover={{ scale: 0.95 }}>
              <ThemeToggle />
              <Chatbox animationDelay={0} className='static' />
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
