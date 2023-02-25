import { Text } from '@mantine/core';
import { USFlag, DEFlag, IDFlag, ITFlag, RUFlag, UAFlag, FRFlag, PLFlag } from 'mantine-flagpack';

/** An array of tabs displayed in header & mobile drawer */
export const tabs: Tab[] = [
  {
    label: (username: string) => (
      <Text size="md" weight={500} underline>
        {username}
      </Text>
    ),
    href: '#',
    index: [0, 1],
  },
  {
    label: 'Works',
    href: '#works',
    index: 2,
  },
  {
    label: 'Skills',
    href: '#skills',
    index: 3,
  },
  {
    label: 'Contact',
    href: '#contact',
    index: 4,
  },
];

/** Translations array, used in a select */
export const translations: Translation[] = [
  {
    name: 'English',
    flag: USFlag,
    locale: 'en',
  },
  // {
  //   name: 'Français',
  //   flag: FRFlag,
  //   locale: 'fr'
  // },
  {
    name: 'Deutsch',
    flag: DEFlag,
    locale: 'de',
  },
  // {
  //   name: 'Italiano',
  //   flag: ITFlag,
  //   locale: 'it'
  // },
  {
    name: 'Polski',
    flag: PLFlag,
    locale: 'pl',
  },
  {
    name: 'Русский',
    flag: RUFlag,
    locale: 'ru',
  },
  {
    name: 'Українська',
    flag: UAFlag,
    locale: 'uk'
  },
  {
    name: 'Bahasa',
    flag: IDFlag,
    locale: 'id',
  },
];
