import { createStyles, getStylesRef, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => {
  const image = getStylesRef('image');

  return {
    wrapper: {
      height: '60vh',
      boxSizing: 'border-box',
      borderRadius: theme.radius.xs,
      padding: `calc(${theme.spacing.xl} * 2.5)`,

      [theme.fn.smallerThan("sm")]: {
        padding: `calc(${theme.spacing.xl} * 1.5)`,
      },
    },

    content: {
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      zIndex: 1,
    },

    image: {
      ref: image,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'transform 500ms ease',
    },

    title: {
      color: theme.white,
      // lineHeight: 1,
      fontWeight: 500,
      textAlign: 'center',

      [theme.fn.smallerThan('xs')]: {
        fontSize: `calc(${theme.fontSizes.xl} * 1.3)`,
      },
    },

    description: {
      color: theme.colors[theme.primaryColor][0],
      maxWidth: 300,

      [theme.fn.smallerThan("sm")]: {
        maxWidth: '100%',
      },
    },

    overlay: {
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .90) 90%)',
    },

    social: {
      color: theme.white,

      '&:hover': {
        color: theme.colors[theme.primaryColor][1],
      },
    },

    input: {
      backgroundColor: theme.white,
      borderColor: theme.colors.gray[4],
      color: theme.black,

      '&::placeholder': {
        color: theme.colors.gray[5],
      },
    },

    inputLabel: {
      color: theme.black,
    },

    control: {
      backgroundColor: theme.colors[theme.primaryColor][6],
    },
  };
});
