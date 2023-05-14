import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  overlay: {
    [theme.fn.smallerThan('md')]: {
      backdropFilter: 'none',
    }
  },
}));
