import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  footer: {
    position: 'fixed',
    height: 62,
    maxWidth: '100%',
    width: '100%',
    bottom: 0,
    backdropFilter: 'blur(10px)',

    [theme.fn.smallerThan('xs')]: {
      height: 40,
      backdropFilter: 'unset',
      backgroundColor: theme.colors.gray[0] + 'de', // Adding alpha channel transparency
    },
  },
}));
