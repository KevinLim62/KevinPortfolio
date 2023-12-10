'use client';

import { NavigationMenu, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { menuItem } from './Navbar';
import { FaRegCircle } from 'react-icons/fa6';
import { MdCircle } from 'react-icons/md';
import { useEffect, useState } from 'react';

const FloatingNavbar = () => {
  const scrollTo = (section: string) => {
    document.getElementById(section) && document.getElementById(section)!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='fixed right-[100px] top-[45%]'>
      <NavigationMenu>
        <div className='flex flex-col justify-center items-center gap-2'>
          {menuItem.map((el, index) => (
            <div key={el.id} className={navigationMenuTriggerStyle()}>
              {index === 0 ? <MdCircle size={25} /> : <FaRegCircle size={20} />}
            </div>
          ))}
        </div>
      </NavigationMenu>
    </nav>
  );
};

export default FloatingNavbar;
