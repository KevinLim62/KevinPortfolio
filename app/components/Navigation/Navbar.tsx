'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ThemeToggle from '../ThemeToggle';
import { useAnimate, motion } from 'framer-motion';
import { useMenuStore } from '@/lib/store/menuStore';
import { useToast } from '@/components/ui/use-toast';

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

const wrapperVariants = {
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
  },
};

const Navbar = () => {
  const [scope, animate] = useAnimate();

  const handleMenuNavigate = (title: string) => {
    const section = document.getElementById(title);
    section && section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      variants={variants}
      initial='initial'
      animate='animate'
      transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
      className='hidden lg:block z-50 lg:fixed lg:right-10 lg:top-2 2xl:top-10 2xl:right-14'
      onHoverStart={() => {
        animate(scope.current, wrapperVariants.animate, { duration: 0.4 });
      }}
      onHoverEnd={() => animate(scope.current, wrapperVariants.exit, { duration: 0.4 })}
    >
      <NavigationMenu className='z-50'>
        <NavigationMenuList>
          <motion.div ref={scope} className='flex bg-primary' style={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}>
            {menuItem.map((el) => (
              <NavigationMenuItem key={el.id} className='cursor-pointer'>
                <NavigationMenuLink onClick={() => handleMenuNavigate(el.title.toLowerCase())} className={navigationMenuTriggerStyle()}>
                  {el.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </motion.div>
          <motion.div className='flex px-4 py-1 rounded-full bg-primary cursor-pointer' whileHover={{ scale: 0.95 }}>
            <Avatar className=''>
              <AvatarImage src='/' />
              <AvatarFallback className='bg-transparent text-foreground text-lg font-bold'>KL</AvatarFallback>
            </Avatar>
            <div className=''>
              <ThemeToggle />
            </div>
          </motion.div>
        </NavigationMenuList>
      </NavigationMenu>
    </motion.nav>
  );
};

export default Navbar;
