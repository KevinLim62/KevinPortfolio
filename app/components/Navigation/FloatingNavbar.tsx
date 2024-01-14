'use client';

import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { AnimatePresence, motion } from 'framer-motion';
import { menuItem } from './Navbar';
import SectionIcon from '@/components/ui/Animation/SectionIcon';
import { useMenuStore } from '@/lib/store/menuStore';

const variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 100,
  },
};

const FloatingNavbar = () => {
  const { menuSection, setMenuSection, setScrollPosition } = useMenuStore();
  const handleMenuNavigate = (id: number) => {
    const windowHeight = typeof window !== 'undefined' && window.innerHeight;
    if (windowHeight) {
      setMenuSection(id);
      setScrollPosition((id - 1) * windowHeight);
    }
  };
  return (
    <AnimatePresence>
      {menuSection !== 1 && (
        <motion.nav className='hidden lg:block z-10 fixed right-[78px] 2xl:right-[120px] lg:bottom-[30%] 2xl:bottom-[40%]' variants={variants} initial='initial' animate='animate' exit='exit' transition={{ delay: 1, duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}>
          <NavigationMenu>
            <div className='flex flex-col justify-center items-center gap-3'>
              {menuItem.map((el) => (
                <div key={el.id} className='group inline-flex h-10 w-max items-center justify-center rounded-md transition-all duration-200 cursor-pointer' onClick={() => handleMenuNavigate(el.id)}>
                  {menuSection === el.id ? <SectionIcon isActive='active' /> : <SectionIcon />}
                </div>
              ))}
            </div>
          </NavigationMenu>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default FloatingNavbar;
