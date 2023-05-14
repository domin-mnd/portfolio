import { createStyles, MantineTheme, rem } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  card: {
    maxWidth: theme.breakpoints.xs,
    width: '100%',
    // margin: 124,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'unset',

    [theme.fn.smallerThan('xs')]: {
      marginLeft: theme.spacing.xs,
      marginRight: theme.spacing.xs,
    },
  },

  scrollArea: {
    borderRadius: theme.radius.xs,
    overflowX: 'hidden',
  },

  innerScrollArea: {
    maxHeight: rem(440),
    overflowY: 'scroll',

    [theme.fn.smallerThan('sm')]: {
      maxHeight: '60vh',
    },

    // Hide scrollbar for webkit
    '::-webkit-scrollbar': {
      display: 'none',
    },

    // Hide scrollbar for firefox
    scrollbarWidth: 'none',
  },

  title: {
    position: 'absolute',
    textTransform: 'uppercase',
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -100%)',
      fontSize: `calc(${theme.fontSizes.xl} * 1.5)`,
    },

    [theme.fn.largerThan('sm')]: {
      right: 0,
      transform: 'translate(100%)',
      writingMode: 'vertical-rl',

      letterSpacing: 2,
    },
  },
}));
