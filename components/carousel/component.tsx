import { Carousel, Embla } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { FunctionComponent, ReactElement, useState } from 'react';
import { tabs } from '@component/header';
import { NextRouter, useRouter } from 'next/router';

/**
 * A vertical carousel surrounding the entire page to scroll between sections,
 * adds event listeners to the scrollable cards
 * along with router events to change the hash when the slide changes
 * @param {ReactElement[]} props.slides Array of slides to display
 * @returns {ReactElement} 100vh embla carousel
 */
export const VerticalCarousel: FunctionComponent<{
  slides: ReactElement[];
}> = ({ slides }): ReactElement => {
  // Embla API to control the carousel
  // setting it to null because it's not defined on the server side
  // using setEmblaApi causes a re-render loop,
  // so you can't disable the carousel as stated in
  // https://github.com/davidjerleke/embla-carousel/issues/99
  const [emblaApi, setEmblaApi] = useState<Embla | null>(null);

  // Only allow dragging on mobile
  const mobile: boolean = useMediaQuery('(max-width: 1100px)');

  // Run this code only on the client side
  if (typeof window !== 'undefined') {
    // Add a wheel event listener to all scrollable cards
    // This is needed because the carousel will not scroll when the user is scrolling a card
    document.querySelectorAll('.mantine-Carousel-slide, canvas')?.forEach((element: Element) => {
      element.addEventListener('wheel', scroll);
    });

    const router: NextRouter = useRouter();

    // Disable dragging carousel when the user is scrolling the card
    document.querySelectorAll('.mantine-ScrollArea-viewport')?.forEach((element: Element) => {
      element.addEventListener('touchstart', () => modScroll(false));
      element.addEventListener('touchend', () => modScroll(mobile));
    });

    // Scroll to the correct slide when the hash changes
    // happens when the user clicks on a tab in the header
    router.events.on('hashChangeComplete', (url: string): void => {
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
    });

    // Emit on page load if the hash is not home
    if (['/#', '/'].indexOf(router.asPath) === -1) {
      const hash: RegExpMatchArray | '#' = router.asPath.match(/#([a-z0-9]+)/gi) ?? '#';
      router.events.emit('hashChangeStart', hash[0]);
      router.events.emit('hashChangeComplete', router.asPath);
    }

    // Change the hash when the slide changes
    // Does not use router.push because it would cause a loop
    // Thus it won't emit a hashChangeComplete event
    emblaApi?.on('select', () => {
      const index = emblaApi?.selectedScrollSnap();
      const found =
        tabs.find((tab) =>
          typeof tab.index === 'number' ? tab.index === index : tab.index?.some((i) => i === index)
        ) ?? tabs[0];
      router.events.emit('hashChangeStart', found.href);
      window.location.hash = found.href;
    });
  }

  /**
   * Scroll a slide up or down based on the wheel delta
   * @param {Event & WheelEventInit} event Wheel event from the scrollable card
   * @returns {void}
   */
  function scroll(event: Event & WheelEventInit): void {
    // Prevent wheel scrolling on scrollable cards
    // stopPropagation() alternative
    if (event.target !== event.currentTarget) return;

    // Prevent default wheel scrolling
    // Shouldn't be needed but it's here just in case
    event.preventDefault();

    // Decide whether to scroll up or down based on the wheel delta
    // deltaY is negative when scrolling up and positive when scrolling down
    if ((event.deltaY ?? 0) > 0) {
      emblaApi?.scrollNext();
    } else {
      emblaApi?.scrollPrev();
    }
  }

  /**
   * Enable or disable dragging on the carousel based on the state
   * @param {boolean} state Whether to enable or disable dragging
   * @returns {void}
   */
  function modScroll(state: boolean): void {
    emblaApi?.reInit({
      draggable: state,
    });
  }

  return (
    <Carousel
      orientation="vertical"
      height="100vh"
      slideSize="100vh"
      draggable={mobile}
      withControls={false}
      getEmblaApi={setEmblaApi}
    >
      {slides.map((child: ReactElement, index: number) => (
        <Carousel.Slide
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {child}
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
