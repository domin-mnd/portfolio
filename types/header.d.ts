/** An object defining a tab */
interface Tab {
  /** Label displayed as the name of the tab */
  label: string;
  /** href used to navigate to the tab, has to be defined starting with hash */
  href: string;
  /** ReactNode displayed instead of label, custom element */
  node?: (label: string) => React.ReactNode;
  /** A custom index of the slide to scroll to */
  index?: number | number[];
}
