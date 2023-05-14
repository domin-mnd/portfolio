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
      backgroundColor: theme.fn.rgba(theme.colors.gray[0], 0.87),
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  drawerTitle: {
    display: 'none',
  },

  mobile: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  tab: {
    fontWeight: 400,
    letterSpacing: 0.4,
    height: 38,

    '&:hover, &:active': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
    },

    '&[data-active]': {
      color: 'unset',
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),

      ':hover': {
        backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
      },
    },
  },

  translation: {
    backgroundColor: 'transparent',
    height: 38,

    ':hover': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37) + ' !important',
    },

    ':active': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37) + ' !important',
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  translationOpened: {
    // Set the background color if the dropdown is opened
    backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
  }
}));
