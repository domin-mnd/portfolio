import { create } from 'zustand';

export const useStore = create<NavbarStore>((set) => ({
  opened: false,
  toggle: () => set((state) => ({ opened: !state.opened })),
  close: () => set(() => ({ opened: false })),
  open: () => set(() => ({ opened: true })),
}));