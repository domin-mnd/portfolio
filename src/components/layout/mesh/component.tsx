import { FunctionComponent, PropsWithChildren, ReactElement, useEffect } from 'react';
import { useStyles } from './styles';
import { Box } from '@mantine/core';
import { Gradient } from './module';

/**
 * A mesh background taken from module.js
 * @returns {ReactElement} a canvas or a box based off media query
 */
export const Mesh: FunctionComponent<PropsWithChildren> = ({ children }): ReactElement => {
  const { classes, cx } = useStyles();

  // On component mount
  useEffect(() => {
    const gradient = new Gradient();
    // Basically @ts-ignore but in a better way
    // since the module has no defined initGradient method
    (gradient as any).initGradient('.' + classes.mesh);
  }, [classes.mesh]);

  // We do not use cx to not splice classes into 1
  // since the gradient is initialized by the selector
  return (
    <>
      <canvas className={[classes.mesh, classes.overlay].join(' ')} />
      <Box className={cx(classes.override, classes.overlay)} />
      {children}
    </>
  );
};
