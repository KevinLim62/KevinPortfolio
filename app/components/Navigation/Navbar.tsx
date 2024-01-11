'use client';

import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ThemeToggle from '../ThemeToggle';
import { motion } from 'framer-motion';
import { useMenuStore } from '@/lib/store/menuStore';

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

const Navbar = () => {
  const { setMenuSection, setScrollPosition } = useMenuStore();
  const handleMenuNavigate = (id: number) => {
    const windowHeight = typeof window !== 'undefined' && window.innerHeight;
    if (windowHeight) {
      setMenuSection(id);
      setScrollPosition((id - 1) * windowHeight);
    }
  };

  return (
    <>
      <motion.nav variants={variants} initial='initial' animate='animate' transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}>
        <NavigationMenu className='lg:absolute h-[10vh] pt-5 hidden lg:block'>
          <NavigationMenuList>
            <Avatar className='mr-5'>
              <AvatarImage src='/' />
              <AvatarFallback className='bg-primary text-foreground text-lg font-bold'>KL</AvatarFallback>
            </Avatar>
            {menuItem.map((el) => (
              <NavigationMenuItem key={el.id} className='cursor-pointer'>
                <NavigationMenuLink onClick={() => handleMenuNavigate(el.id)} className={navigationMenuTriggerStyle()}>
                  {el.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </motion.nav>
      {/* <motion.div className='absolute hidden lg:block right-[20px] lg:right-[40px] 2xl:right-[160px] top-5' variants={variants} initial='initial' animate='animate' transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}>
        <ThemeToggle />
      </motion.div> */}
    </>
  );
};

export default Navbar;
