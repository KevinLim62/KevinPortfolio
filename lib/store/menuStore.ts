import { create } from 'zustand';

type menuState = {
  menuSection: number;
  scrollPosition: number;
};

type menuAction = {
  setMenuSection: (menuSection: number) => void;
  setScrollPosition: (scrollPosition: number) => void;
};

export const useMenuStore = create<menuState & menuAction>()((set) => ({
  menuSection: 1,
  scrollPosition: 0,
  setMenuSection: (menuSection) => set(() => ({ menuSection: menuSection })),
  setScrollPosition: (scrollPosition) => set(() => ({ scrollPosition: scrollPosition })),
}));
