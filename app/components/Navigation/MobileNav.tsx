'use client';

import { Button } from '@/components/ui/button';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@radix-ui/react-label';
import { GiHamburgerMenu } from 'react-icons/gi';
import { menuItem } from './Navbar';
import ThemeToggle from '../ThemeToggle';
import { motion } from 'framer-motion';

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
          <motion.div className='w-full h-full' variants={variants} initial='initial' animate='animate' transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}>
            <Button variant='ghost' className='z-10 fixed top-5 right-[0px] sm:right-[20px] lg:hidden'>
              <GiHamburgerMenu size={20} className='w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]' />
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
