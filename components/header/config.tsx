import { about } from '@component/about';
import { Text } from '@mantine/core';

/** An array of tabs displayed in header & mobile drawer */
export const tabs: Tab[] = [
  {
    label: about.username || 'Me',
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
