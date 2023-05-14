/** An object defining a tab */
interface Tab {
  /** Label displayed as the name of the tab */
  label: React.ReactNode | ((name: string) => React.ReactNode);
  /** href used to navigate to the tab, has to be defined starting with hash */
  href: string;
  /** A custom index of the slide to scroll to */
  index?: number | number[];
}

/** Hash URL of the tab */
type Hash = `#${string}`;

/** Header's zustand state store */
interface HeaderStore {
  /** Hash of the active tab */
  tab: Hash;
  /** Set the hash of the active tab */
  setTab: (tab: Hash) => void;
  /**
   * Replaces the hash in the url with the href provided
   * @param {string} href - A url with a hash
   * @returns {void}
   */
  pushHash: (hash: string) => void;
}

/** A translation object with a flag function component & its name */
interface Translation {
  /** Language translated name */
  name: string;
  /** Flag component, has a temporary type */
  flag: (props: import('mantine-flagpack').FlagProps) => JSX.Element;
  /** A 2 character length string locale code */
  locale: string;
}
