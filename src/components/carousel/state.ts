import { tabs } from '@component/header';
import { Embla } from '@mantine/carousel';
import { create } from 'zustand';

export const useStore = create<CarouselStore>((set, get) => ({
  api: null,
  setApi: (api: Embla) => set({ api }),
  scrollViaURL: (url: string) => {
    /** Embla API */
    const emblaApi = get().api;

    // Does not include slash
    const hash: RegExpMatchArray | '#' = url.match(/#([a-z0-9]+)/gi) ?? '#';

    // Find the index of the tab with the same href as the hash
    // Else if no index is found, find the index of the first tab with the same href as the hash
    const index: number | number[] =
      tabs.find((tab) => tab.href === hash[0])?.index ??
      tabs.findIndex((tab) => tab.href === hash[0]);

    // Turn the index into an array if it's not one
    const value: number[] = Array.isArray(index) ? index : [index];
    if (value.length === 1) return emblaApi?.scrollTo(value[0]);

    const currentSlide: number = emblaApi?.selectedScrollSnap() ?? 0;
    // Find the index of the current slide in the array
    const slideIndex: number = value.indexOf(currentSlide);
    // If the current slide is not in the array, get the last one
    const foundSlide: number = slideIndex === -1 ? value.length - 1 : slideIndex;
    // Scroll the array so that the current slide is the first one
    // Then get the next slide
    const toggledValue: number = value.slice(foundSlide).concat(value.slice(0, foundSlide))[1];

    emblaApi?.scrollTo(toggledValue);
  },
}));
