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
}

/** An array of tabs displayed in header & mobile drawer */
export const tabs: Tab[] = [
  {
    label: 'Domin',
    href: '#',
    node: (label: string) => (
      <Text size="md" weight={500} underline>
        {label}
      </Text>
    ),
  },
  {
    label: 'Works',
    href: '#works',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];
