/** An object defining a tab */
interface Tab {
  /** Label displayed as the name of the tab */
  label: React.ReactNode | ((name: string) => React.ReactNode);
  /** href used to navigate to the tab, has to be defined starting with hash */
  href: string;
  /** A custom index of the slide to scroll to */
  index?: number | number[];
}

/** A translation object with a flag function component & its name */
interface Translation {
  /** Language translated name */
  name: string;
  /** Flag component, has a temporary type */
  flag: (props: import("mantine-flagpack").FlagProps) => JSX.Element;
  /** A 2 character length string locale code */
  locale: string;
}