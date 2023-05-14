import { create } from 'zustand';
import { useStore as useCarouselStore } from '@component/carousel';

export const useStore = create<HeaderStore>((set) => ({
  tab: '#',
  setTab: (tab: Hash) => set({ tab }),
  pushHash: (href: string) => {
    const hash = href.match(/#([a-z0-9]+)/gi);
    window.location.hash = hash ? hash[0] : '';
    // Switch the tab
    // If the hash is #, it will be empty string
    set({
      tab: (window.location.hash as Hash) || '#',
    });
    // For a carousel, emitting this event will switch the slide
    // As it was declared in carousel
    useCarouselStore.getState().scrollViaURL(href);
  }
}));
