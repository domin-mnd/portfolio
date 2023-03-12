# A page made of a whole scrollable carousel

This guide explains how carousel & header components work together to create a page made of a whole scrollable carousel.

## Table of contents

- [Carousel component](#Carousel-component)
  - [Slides](#Slides)
- [Header](#Header)
  - [On tab change](#On-tab-change)
- [Events](#Events)
  - [hashChangeComplete](#hashChangeComplete)
  - [wheel](#wheel)
  - [touchstart & touchend](#touchstart--touchend)
  - [hashChangeStart](#hashChangeStart)
- [Emitting events](#Emitting-events)
- [Conclusion](#Conclusion)

## Carousel component

To add the carousel I used the [embla-carousel-react](https://www.embla-carousel.com/) library wrapped in [@mantine/carousel](https://mantine.dev/others/carousel/) component. I started off with styling the carousel:
- Obviously I had to make it vertical as it has to pretend to be a page - `orientation="vertical"`
- I also had to make it a full height to fulfill the entire page - `height="100vh"`
- Then I was to resize all of the slides to fit the page - `slideSize="100vh"`
- To make it mobile friendly I had to add draggable property by adding a media query to check if its mobile or not - `draggable={mobile}`
- Then I removed controls as they are not needed - `withControls={false}`
- And finally I retrieved the carousel instance to be able to control it from outside for events and other stuff - `getEmblaApi={setEmbla}`

Then we ended up with a styled component:

```tsx
<Carousel
  orientation="vertical"
  height="100vh"
  slideSize="100vh"
  draggable={mobile}
  withControls={false}
  getEmblaApi={setEmblaApi}
>
  {...slides}
</Carousel>
```

### Slides

A Carousel component provided by Mantine requires you to provide Slides in it. So I had to create a Slide component that would be used in the Carousel component. I started off with styling the slide:
- I had to make it a flex to assign its position - `display="flex"`
- Then I made it horizontally centered - `justifyContent="center"`
- And vertically centered - `alignItems="center"`

All of that was mapped and returned inside the Carousel component:

```tsx
const carouselSlides = slides.map((child: ReactElement, index: number) => (
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
));
```

> **Note**: Make sure to make the children of the Slide component smaller than the screen size. Otherwise it will overflow the screen.

## Header

Header component used in this portfolio consists of Mantine's [Tabs](https://mantine.dev/core/tabs) component with some appropriate styling. Thus it requires a value to provide as the aria selection of the active tab. For that I used a `useState` hook because later we would need to change it based on the scroll snap of the carousel/by click.

```tsx
const [hash, setHash] = useState<string>('#');

const headerTabs = (
  <Tabs
    // Value keyword in onTabChange
    value={hash}
    onTabChange={(value) => pushHash(value ?? '#')}
    {...styling}
  >
    <Tabs.List>{tabs}</Tabs.List>
  </Tabs>
);
```

onTabChange event provides you with a value of the tab that was clicked. This value is declared as the `value` property e.g.:
```tsx
<Tabs.Tab value="#about">About</Tabs.Tab>
```

### On tab change

There comes the one of the hardest parts of this guide to understand: events. We're starting off from onTabChange event that is triggered when a tab is clicked. And you may wonder what is that function `pushHash()` that is used inside the event. It basically switches the hash in the search bar of the browser yet emits a yet another router event that is used in carousel - 'hashChangeComplete'.

```tsx
/**
 * replaces the hash in the url with the href provided
 * @param {string} href a url with a hash
 * @returns {void}
 */
function pushHash(href: string): void {
  const hash = href.match(/#([a-z0-9]+)/gi);
  window.location.hash = hash ? hash[0] : '';
  // Switch the tab
  // If the hash is #, it will be empty string
  setHash(window.location.hash || '#');
  // For a carousel, emitting this event will switch the slide
  // As it was declared in carousel
  router.events.emit('hashChangeComplete', href);
}
```

In this method we do not use `router.push()` as it would trigger the `routeChangeStart` event that would cause the carousel to switch the slide to the first one. So we use `window.location.hash` to change the hash in the url and then emit the `hashChangeComplete` event that would cause the carousel to switch the slide to the one that has the same hash as the one in the url.

## Events

With that being said portfolio got more events than you think. I'll explain them one by one.

### hashChangeComplete

To make contact between the carousel and the header we need to emit the `hashChangeComplete` event. This event is emitted when the hash in the url changes but we need to emit it manually when we change the hash in the url. This event is emitted in the `pushHash()` method.

The code of this event is as follows:

```tsx
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
```

The code by itself is very complicated and hard to understand. But we'll break it down into smaller script to avoid facing unnecessary features:

```tsx
// Scroll to the correct slide when the hash changes
// happens when the user clicks on a tab in the header
router.events.on('hashChangeComplete', (url: string) => {
  // Does not include slash
  const hash: RegExpMatchArray | '#' = url.match(/#([a-z0-9]+)/gi) ?? '#';
  const index: number = tabs.findIndex((tab) => tab.href === hash[0]);
  emblaApi?.scrollTo(index);
});
```

Now this is much easier to understand: We're finding the index of the tab that has the same href (in config object, see `components/header/config.tsx`) as the hash in the url and then we're scrolling the carousel to that index.

### wheel

Not only we're transforming a carousel into a page, we're also making it user-friendly. So we'd have to add a `wheel` event to the carousel. This event is emitted when the user scrolls the mouse wheel. We're using it to scroll the carousel as embla by default does not support it (the [embla-carousel-wheel-gestures](https://www.embla-carousel.com/plugins/wheel-gestures/) plugin uses deltaY to scroll the carousel, we, on the other hand are going to use the entire slide to scroll).

```tsx
// Add a wheel event listener to all scrollable cards
// This is needed because the carousel will not scroll when the user is scrolling a card
document.querySelectorAll('.mantine-Carousel-slide, canvas')?.forEach((element: Element) => {
  element.addEventListener('wheel', scroll);
});

// Unix timestamp of scroll to not let user scroll carousel
// More than once in 200ms period
let deltaUnix: number = 0;

/**
 * Scroll a slide up or down based on the wheel delta
 * @param {Event & WheelEventInit} event Wheel event from the scrollable card
 * @returns {void}
 */
function scroll(event: Event & WheelEventInit): void {
  // Prevent wheel scrolling on scrollable cards
  // stopPropagation() alternative
  if (event.target !== event.currentTarget) return;

  // If scroll is scrolled more than once in 200ms then
  // Do nothing
  const unixTimestamp = new Date().getTime();
  if (unixTimestamp - deltaUnix < 200) return;
  deltaUnix = unixTimestamp;

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
```

In order to assign scrollable slides, we query select carousel slide along with landing canvas. Then we add a wheel event listener to each of them. The `scroll()` function is called when the user scrolls the mouse wheel. It prevents default wheel scrolling and then decides whether to scroll up or down based on the wheel delta.

> **Note**: By adding unix timestamp check algorithm we check whether a user scrolled twice or more in the span of 200ms. In this case we do nothing to prevent free-spin mode issues.

> **Note**: The `event.target !== event.currentTarget` check is needed because the wheel event is emitted on the scrollable card and the carousel. We only want to scroll the carousel when the user is scrolling the carousel.

> **Pro Tip**: mouse delta is the distance between the current and the previous mouse position. When delta is positive, the mouse is moving down & when delta is negative, the mouse is moving up.

### touchstart & touchend

As we're making carousel user-friendly, we add some touch events to it. These prevent from scrolling carousel when you touch section cards:

```tsx
// Query select all the scrollable elements we want to apply our draggable state to
document.querySelectorAll('.mantine-ScrollArea-viewport')?.forEach((element: Element) => {
  // When you hold that element the carousel isn't scrollable
  element.addEventListener('touchstart', () => modScroll(false));
  element.addEventListener('touchend', () => modScroll(true));
});

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
```

We query select all the scrollable elements we want to apply our draggable state to. Then we add a `touchstart` and `touchend` event listener to each of them. The `modScroll()` function is called when the user touches the scrollable element. It enables or disables dragging on the carousel based on the state. In the portfolio code we pass the mobile media query value on `touchend` to make sure that the carousel is scrollable on mobile devices only.

### hashChangeStart

It was mentioned before that we're making contact between the carousel and the header. With `hashChangeComplete` we were scrolling the carousel. Now we're going to switch the header tab. We're going to do this by adding a `hashChangeStart` event listener to the router. This event is emitted when the embla carousel changes the slide.

```tsx
router.events.on('hashChangeStart', (href) => {
  setHash(href);
});
```

We're adding a `hashChangeStart` event listener to the router. We're setting the hash to the href passed to it when the event is emitted. After that the tab is switched as we used `useState` hook to store the hash.

## Emitting events

Before it was already mentioned that we emit some events ourselves. To clarify, we're using hash to make it easier for user to navigate the portfolio with the link as we have a single page website. We're emitting all of the above stated router events when the user visits the portfolio with a link. Of course only if we have a hash in the url.

```tsx
// Run this code only on the client side
if (typeof window !== 'undefined') {
  // Emit on page load if the hash is not home
  if (['/#', '/'].indexOf(router.asPath) === -1) {
    const hash: RegExpMatchArray | '#' = router.asPath.match(/#([a-z0-9]+)/gi) ?? '#';
    router.events.emit('hashChangeStart', hash[0]);
    router.events.emit('hashChangeComplete', router.asPath);
  }
}
```

We're running this code only on the client side. Then we're emitting `hashChangeStart` and `hashChangeComplete` events if the hash is not home. The reason why we included the landing hash is because otherwise it would scroll to `About` section card as we toggle the values (the one unnecessary for you to know feature portfolio has).

## Conclusion

As the conclusion portfolio still faces lots of small issues with carousel. It's not perfect but it's a good start. I'm going to keep working on it and I'll update this article when I'm done.