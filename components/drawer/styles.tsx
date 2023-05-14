import { createStyles, MantineTheme } from '@mantine/core';
import { useStyles as cardStyles } from '@component/card';

export const useStyles = createStyles((theme: MantineTheme) => ({
  header: {
    justifyContent: 'center',
    backgroundColor: theme.colors.gray[0],
  },

  content: {
    backgroundColor: theme.colors.gray[0],

    // Let translation modal ignore the hidden overflow
    overflow: 'unset',

    [`& .${cardStyles().classes.scrollArea}`]: {
      overflow: 'unset',
    },
  },

  title: {
    display: 'none',
  },
}));
