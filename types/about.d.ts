/** About section properties */
interface About {
  /** A first & last name of the person */
  name: [string, string];
  /** A username of the person on the internet, used in About section, Landing section & Header component */
  username?: string;
  /** A rounded avatar used in about section */
  avatar: import('next/image').StaticImageData;
  /** A description of the person */
  description: string;
  /** A location of the person */
  location: string;
}
