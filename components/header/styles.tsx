import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  header: {
    position: 'absolute',
    zIndex: 1,
    maxWidth: '100%',
    width: '100%',
    backdropFilter: 'blur(10px)',

    [theme.fn.smallerThan('xs')]: {
      backdropFilter: 'unset',
      backgroundColor: theme.colors.gray[0] + 'de', // Adding alpha channel transparency
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  drawer: {},

  mobile: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  tabsList: {
    [theme.fn.smallerThan('xs')]: {
      borderLeft: 'none',
      width: '100%',
    },
  },

  tab: {
    fontWeight: 400,
    letterSpacing: 0.4,
    height: 38,

    '&:hover': {
      backgroundColor: theme.colors.gray[3] + '5e', // Adding alpha channel transparency
    },

    [theme.fn.smallerThan('xs')]: {
      border: '1px solid transparent',
      '&[data-active]': {
        ':before': {
          width: 0,
        },
      },
    },

    '&[data-active]': {
      color: 'unset',
      backgroundColor: theme.colors.gray[3] + '5e', // Adding alpha channel transparency

      ':hover': {
        backgroundColor: theme.colors.gray[3] + '5e', // Adding alpha channel transparency
      },
    },
  },
}));
