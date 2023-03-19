import { USFlag, DEFlag, IDFlag, ITFlag, RUFlag, UAFlag, FRFlag, PLFlag } from 'mantine-flagpack';

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
    locale: 'uk',
  },
  {
    name: 'Bahasa',
    flag: IDFlag,
    locale: 'id',
  },
];
