import type { FunctionComponent, ReactElement } from 'react';
import { Text } from '@mantine/core';
import { Canvas } from '@react-three/fiber';
import { Keyboard } from '@component/pages/index/keyboard';
import { about } from '@component/pages/index/about';
import { useStyles } from './styles';

/**
 * A landing slide
 * @returns {ReactElement} Canvas with keyboard model along with username text on it
 */
export const Landing: FunctionComponent = (): ReactElement => {
  const { classes } = useStyles();
  return (
    <>
      <Canvas className={classes.canvas}>
        <Keyboard />
      </Canvas>
      <Text className={classes.username}>{about.username}</Text>
    </>
  );
};
