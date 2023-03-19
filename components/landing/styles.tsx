import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  canvas: {
    maxHeight: 760,
  },

  username: {
    position: 'absolute',
    pointerEvents: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '5rem',
    fontWeight: 900,
    mixBlendMode: 'difference',
    color: 'white',
    textTransform: 'uppercase',
  },
}));
