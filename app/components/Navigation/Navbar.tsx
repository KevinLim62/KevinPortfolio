'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdCircle } from 'react-icons/md';
import { FaRegCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ThemeToggle from '../ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export const menuItem = [
  {
    id: 1,
    title: 'HOME',
    link: '/',
  },
  {
    id: 2,
    title: 'ABOUT',
    link: '/about',
  },
  {
    id: 3,
    title: 'WORK',
    link: '/work',
  },
  {
    id: 4,
    title: 'CONTACT',
    link: '/contact',
  },
];

const Navbar = () => {
  const router = useRouter();
  // const [currentSection, setCurrentSection] = useState(1);

  // const scrollTo = (section: string, id: number) => {
  //   setCurrentSection(id);
  //   document.getElementById(section) && document.getElementById(section)!.scrollIntoView({ behavior: 'smooth' });
  // };

  // useEffect(() => {
  //   const handleUserScroll = (event: WheelEvent) => {
  //     const wheelDirection = event.deltaY / 100;
  //     if (wheelDirection > 0) {
  //       currentSection != menuItem.length ? setCurrentSection((prev) => prev + 1) : setCurrentSection(menuItem.length);
  //     } else {
  //       currentSection != 1 ? setCurrentSection((prev) => prev - 1) : setCurrentSection(1);
  //     }
  //   };

  //   document.addEventListener('wheel', handleUserScroll);

  //   return () => {
  //     document.removeEventListener('wheel', handleUserScroll);
  //   };
  // });

  return (
    <>
      {/* Top Navbar */}
      <nav className='hidden lg:block lg:absolute h-[10vh] pt-5'>
        <NavigationMenu>
          <NavigationMenuList>
            <Avatar>
              <AvatarImage src='/' />
              <AvatarFallback>KL</AvatarFallback>
            </Avatar>
            {menuItem.map((el) => (
              <NavigationMenuItem key={el.id} className='cursor-pointer'>
                <NavigationMenuLink href={el.link} className={navigationMenuTriggerStyle()}>
                  {el.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className='absolute right-[40px] top-5'>
        <ThemeToggle />
      </div>

      {/* Mobile Navbar */}
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' className='absolute top-2 right-5 lg:hidden'>
            <GiHamburgerMenu size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='mb-5'>
            <SheetTitle className='text-center'>Menu</SheetTitle>
          </SheetHeader>
          <div className='flex flex-col w-full justify-center space-y-5'>
            {menuItem.map((el) => (
              <div key={el.id} className='mx-auto items-center cursor-pointer'>
                <SheetClose asChild>
                  <Label htmlFor='name' onClick={() => scrollTo(el.title.toLowerCase(), el.id)} className={navigationMenuTriggerStyle()}>
                    {el.title}
                  </Label>
                </SheetClose>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet> */}

      {/* Floating Navbar */}
      {/* <nav className='hidden lg:block fixed right-[100px] top-[40%]'>
        <NavigationMenu>
          <div className='flex flex-col justify-center items-center gap-2'>
            {menuItem.map((el) => (
              <div key={el.id} className='group inline-flex h-10 w-max items-center justify-center rounded-md transition-all duration-200 cursor-pointer' onClick={() => scrollTo(el.title.toLowerCase(), el.id)}>
                {currentSection === el.id ? <MdCircle size={25} /> : <FaRegCircle size={20} />}
              </div>
            ))}
          </div>
        </NavigationMenu>
      </nav> */}
    </>
  );
};

export default Navbar;
