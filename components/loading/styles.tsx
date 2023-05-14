import { MantineTheme, createStyles, keyframes } from '@mantine/core';

export const rotate = keyframes({
  '100%': { transform: 'rotate(360deg);' },
});

export const useStyles = createStyles((theme: MantineTheme) => ({
  animation: {
    animation: `${rotate} 1s linear infinite`,
  },
}));
