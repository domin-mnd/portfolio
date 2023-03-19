import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  dropdown: {
    backgroundColor: theme.colors.gray[0],
    // backgroundColor: theme.fn.rgba(theme.colors.gray[1], 0.37),
    backdropFilter: 'blur(10px)',
    border: 'none',
  },

  item: {
    ':hover': {
      backgroundColor: theme.fn.rgba(theme.colors.gray[3], 0.37),
    },
  },
}));
