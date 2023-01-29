import type { FunctionComponent, ReactNode } from 'react';
import { Text } from '@mantine/core';

/** An object defining a tab */
export interface Tab {
  /** Label displayed as the name of the tab */
  label: string;
  /** href used to navigate to the tab, has to be defined starting with hash */
  href: string;
  /** ReactNode displayed instead of label, custom element */
  node?: (label: string) => ReactNode;
  /** A custom index of the slide to scroll to */
  index?: number | number[];
}

/** An array of tabs displayed in header & mobile drawer */
export const tabs: Tab[] = [
  {
    label: 'Domin',
    href: '#',
    index: [0, 1],
    node: (label: string) => (
      <Text size="md" weight={500} underline>
        {label}
      </Text>
    ),
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
