import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  tabsList: {
    borderLeft: 'none',
    width: '100%',
  },

  tab: {
    fontWeight: 400,
    letterSpacing: 0.4,
    height: 38,

    '&:hover, &:active': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
    },

    justifyContent: 'center',

    '&[data-active]': {
      color: 'unset',
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),

      ':before': {
        width: 0,
      },

      ':hover': {
        backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
      },
    },
  },

  translation: {
    backgroundColor: 'transparent',
    height: 38,
    width: '100%',
    marginBottom: 6,

    ':hover': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37) + ' !important',
    },

    ':active': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37) + ' !important',
    },
  },

  translationOpened: {
    // Set the background color if the dropdown is opened
    backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
  },
}));
