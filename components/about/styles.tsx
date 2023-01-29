import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  columns: {
    gap: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  information: {
    flexDirection: 'column',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: 16,
    },
  },

  avatar: {
    [theme.fn.smallerThan('xs')]: {
      width: 100,
      height: 100,

      minWidth: 'unset', // Removing default min-width
    },
  },
}));
