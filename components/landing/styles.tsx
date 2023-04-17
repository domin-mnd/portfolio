import { createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export const useStyles = createStyles(() => {
  const mobile = useMediaQuery('(max-width: 768px)');

  return {
    canvas: {
      maxHeight: 760,
      height: mobile ? undefined : '100vh !important',
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
  };
});
