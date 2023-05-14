import { Text } from '@mantine/core';

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
