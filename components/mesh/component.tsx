import { FunctionComponent, PropsWithChildren, ReactElement, useEffect } from 'react';
import { useStyles } from './styles';
import { Box } from '@mantine/core';
import { Gradient } from './module';
import { useMediaQuery } from '@mantine/hooks';

/**
 * A mesh background taken from module.js
 * @returns {ReactElement} a canvas or a box based off media query
 */
export const Mesh: FunctionComponent<PropsWithChildren> = ({ children }): ReactElement => {
  const { classes } = useStyles();
  const optimize = useMediaQuery('(max-width: 960px');

  // On component mount
  useEffect(() => {
    const gradient = new Gradient();
    // Basically @ts-ignore but in a better way
    // since the module has no defined initGradient method
    (gradient as any).initGradient('.' + classes.mesh);
  });

  return (
    <>
      {!optimize ? (
        <canvas className={[classes.mesh, classes.overlay].join(' ')} />
      ) : (
        <Box className={[classes.override, classes.overlay].join(' ')} />
      )}
      {children}
    </>
  );
};
