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
          <motion.div className='z-20 fixed top-0 w-screen h-[5vh] bg-secondary lg:hidden' variants={variants} initial='initial' animate='animate' transition={{ delay: 4, duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}>
            <Avatar className='absolute left-3 top-[2px] sm:left-[20px] '>
              <AvatarFallback className='bg-primary text-foreground text-md font-bold w-[35px] h-[35px]'>KL</AvatarFallback>
            </Avatar>
            <Button variant='ghost' className='absolute right-3 top-0 sm:right-[20px] hover:bg-transparent'>
              <GiHamburgerMenu size={20} className='text-primary' />
            </Button>
          </motion.div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='mb-5'>
            <SheetTitle className='text-center'>Menu</SheetTitle>
          </SheetHeader>
          <div className='flex flex-col w-full justify-center space-y-5'>
            {menuItem.map((el) => (
              <div key={el.id} className='mx-auto items-center cursor-pointer'>
                <SheetClose asChild>
                  <Label htmlFor='name' onClick={() => handleNavigate(el.title.toLowerCase())} className={navigationMenuTriggerStyle()}>
                    {el.title}
                  </Label>
                </SheetClose>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* <motion.div className='z-10 fixed right-[20px] top-5 lg:hidden' variants={variants} initial='initial' animate='animate' transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}>
        <ThemeToggle />
      </motion.div> */}
    </>
  );
};

export default MobileNav;
