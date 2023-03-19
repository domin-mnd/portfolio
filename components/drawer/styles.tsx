import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  header: {
    justifyContent: 'center',
    backgroundColor: theme.colors.gray[0],
  },

  content: {
    backgroundColor: theme.colors.gray[0],

    // Let translation modal ignore the hidden overflow
    overflow: 'unset',
    '& .mantine-ScrollArea-root': {
      overflow: 'unset',
    },
  },

  title: {
    display: 'none',
  },
}));
