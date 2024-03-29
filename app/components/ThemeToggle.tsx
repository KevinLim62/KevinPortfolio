'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className='rounded-full'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='bg-primary text-foreground text-sm font-medium lg:text-base lg:font-semibold 2xl:text-lg 2xl:font-bold'>
        {/* <DropdownMenuItem className='cursor-pointer hover:bg-foreground hover:text-background' onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem> */}
        <DropdownMenuItem className='cursor-pointer hover:bg-foreground hover:text-background' onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        {/* <DropdownMenuItem className='cursor-pointer hover:bg-foreground hover:text-background' onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
