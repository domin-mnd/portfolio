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

  drawerHeader: {
    justifyContent: 'center',
    backgroundColor: theme.colors.gray[0],
  },

  drawerContent: {
    backgroundColor: theme.colors.gray[0],
  },

  drawerTitle: {
    display: 'none',
  },

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
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
    },

    [theme.fn.smallerThan('xs')]: {
      justifyContent: 'center',
      '&[data-active]': {
        ':before': {
          width: 0,
        },
      },
    },

    '&[data-active]': {
      color: 'unset',
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),

      ':hover': {
        backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
      },
    },
  },

  translationButton: {
    backgroundColor: 'transparent',
    height: 38,

    ':hover': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37) + " !important",
    },

    ':active': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37) + " !important",
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  translationMobileButton: {
    backgroundColor: 'transparent',
    height: 38,
    width: '100%',
    marginBottom: 6,

    ':hover': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37) + " !important",
    },

    ':active': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37) + " !important",
    },
  },

  translationDropdown: {
    backgroundColor: theme.colors.gray[0],
  },

  translationItem: {
    ':hover': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
    },
  },
}));
