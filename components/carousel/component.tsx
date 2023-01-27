import { Carousel, Embla } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { FunctionComponent, ReactElement, useState } from "react";
import { tabs } from "@component/header";
import { NextRouter, useRouter } from "next/router";

/**
 * A vertical carousel surrounding the entire page to scroll between sections,
 * adds event listeners to the scrollable cards
 * along with router events to change the hash when the slide changes
 * @param {ReactElement[]} props.slides Array of slides to display
 * @todo Ignore embla dragging on scrolling cards
 * @returns {ReactElement} 100vh embla carousel
 */
export const VerticalCarousel: FunctionComponent<{
  slides: ReactElement[];
}> = ({ slides }): ReactElement => {
  const [emblaApi, setEmblaApi] = useState<Embla | null>(null);
  const mobile: boolean = useMediaQuery("(max-width: 768px)");
  const router: NextRouter = useRouter();

  // Run this code only on the client side
  if (typeof window !== "undefined") {
    // Add a wheel event listener to all scrollable cards
    // This is needed because the carousel will not scroll when the user is scrolling a card
    document
      .querySelectorAll(".mantine-Carousel-slide, canvas")
      ?.forEach((element: Element) =>
        element.addEventListener("wheel", scroll, {
          passive: false,
        })
      );

    // Scroll to the correct slide when the hash changes
    // happens when the user clicks on a tab in the header
    router.events.on("hashChangeComplete", (url: string) => {
      // Does not include slash
      const hash = url.match(/#([a-z0-9]+)/gi) ?? "";
      const index = tabs.findIndex((tab) => tab.href === hash[0]);
      emblaApi?.scrollTo(index);
    });

    // Change the hash when the slide changes
    // Does not use router.push because it would cause a loop
    // Thus it won't emit a hashChangeComplete event
    emblaApi?.on("select", () => {
      const index = emblaApi?.selectedScrollSnap();
      window.location.hash = tabs[index ?? 0].href;
    });
  }

  /**
   * Scroll a slide up or down based on the wheel delta
   * @param {Event & WheelEventInit} event Wheel event from the scrollable card
   * @returns {void}
   */
  function scroll(event: Event & WheelEventInit) {
    // Prevent wheel scrolling on scrollable cards
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {child}
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
