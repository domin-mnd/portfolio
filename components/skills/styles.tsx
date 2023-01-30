import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  title: {
    fontWeight: 700,
  },

  item: {
    textAlign: 'center',
    overflow: 'hidden',
    height: 90,
    backgroundColor: 'white',
    transition: 'transform 500ms ease',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(.97)',
    },
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  href: {
    outline: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },

    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  },
}));
