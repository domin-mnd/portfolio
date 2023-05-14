/** Store state for Embla carousel */
interface CarouselStore {
  /** Embla API */
  api: import('@mantine/carousel').Embla | null;
  /** Set Embla API */
  setApi: (api: import('@mantine/carousel').Embla) => void;
  /** Scroll to a certain slide via the url provided by fetching tab config */
  scrollViaURL: (url: string) => void;
}
