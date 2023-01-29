import type { StaticImageData } from 'next/image';
import Domin from '@public/about/domin.jpg';

export interface IAbout {
  /** A first & last name of the person */
  name: [string, string];
  /** A username of the person on the internet */
  username?: string;
  /** A rounded avatar used in about section */
  avatar: StaticImageData;
  /** A description of the person */
  description: string;
  /** A location of the person */
  location: string;
}

export const about: IAbout = {
  name: ['Kamil', 'Sakhabutdinov'],
  username: 'Domin',
  avatar: Domin,
  description: [
    'Ambitious, self-taught 17 years old software engineer with a',
    'great passion for technology, web design and development. Has',
    'been programming since the age of 12. Proficient in developing',
    'databases, creating user interfaces and implementing new features',
    'based on user feedback. Ready to learn and collaborate in rapidly',
    'changing environments and compositions. Adept in all stages of',
    'advanced web development.',
  ].join(' '),
  location: 'Kazan, Russia',
};
